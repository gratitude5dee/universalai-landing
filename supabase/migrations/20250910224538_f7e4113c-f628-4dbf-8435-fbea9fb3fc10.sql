-- Fix critical security vulnerability in waitlist functions
-- SECURITY ISSUE: Public functions bypassing RLS and exposing user data

-- Drop existing vulnerable functions
DROP FUNCTION IF EXISTS public.get_recent_signups(integer);
DROP FUNCTION IF EXISTS public.get_waitlist_count();

-- Create secure replacement for waitlist count (authenticated users only)
CREATE OR REPLACE FUNCTION public.get_waitlist_count()
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Require authentication to prevent scraping
  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'Access denied: Authentication required';
  END IF;
  
  -- Log access attempt with user context
  PERFORM public.log_waitlist_access('count_check', NULL, NULL);
  
  -- Return count only (no sensitive data)
  RETURN (SELECT COUNT(*)::INTEGER FROM public.waitlist_signups);
END;
$$;

-- Create highly restricted function for recent signups (service role only)
CREATE OR REPLACE FUNCTION public.get_recent_signups_admin(limit_count integer DEFAULT 3)
RETURNS TABLE(signup_time timestamp with time zone, display_name text)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Only allow service role access (admin/backend only)
  IF current_setting('request.jwt.claims', true)::json->>'role' != 'service_role' THEN
    RAISE EXCEPTION 'Access denied: Service role required';
  END IF;
  
  -- Log admin access attempt
  PERFORM public.log_waitlist_access('admin_recent_signups', NULL, NULL);
  
  -- Return heavily anonymized data with strict limits
  RETURN QUERY
  SELECT 
    DATE_TRUNC('hour', created_at) as signup_time, -- Only hour precision
    'User' as display_name -- No name information at all
  FROM public.waitlist_signups 
  ORDER BY created_at DESC 
  LIMIT GREATEST(1, LEAST(limit_count, 3)); -- Max 3 records
END;
$$;

-- Create public-safe function that only shows generic activity (no user data)
CREATE OR REPLACE FUNCTION public.get_waitlist_activity()
RETURNS TABLE(period text, signup_count integer)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Require authentication to prevent abuse
  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'Access denied: Authentication required';
  END IF;
  
  -- Log access attempt
  PERFORM public.log_waitlist_access('activity_check', NULL, NULL);
  
  -- Return only aggregated data by day (no individual user info)
  RETURN QUERY
  SELECT 
    TO_CHAR(DATE_TRUNC('day', created_at), 'YYYY-MM-DD') as period,
    COUNT(*)::integer as signup_count
  FROM public.waitlist_signups 
  WHERE created_at >= NOW() - INTERVAL '7 days' -- Only last 7 days
  GROUP BY DATE_TRUNC('day', created_at)
  ORDER BY period DESC;
END;
$$;

-- Add rate limiting table for function calls
CREATE TABLE IF NOT EXISTS public.function_rate_limits (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid,
  function_name text NOT NULL,
  ip_address text,
  call_count integer DEFAULT 1,
  window_start timestamp with time zone DEFAULT NOW(),
  created_at timestamp with time zone DEFAULT NOW()
);

-- Enable RLS on rate limiting table
ALTER TABLE public.function_rate_limits ENABLE ROW LEVEL SECURITY;

-- Create rate limiting policy
CREATE POLICY "Users can view their own rate limits" 
ON public.function_rate_limits 
FOR SELECT 
USING (auth.uid() = user_id);

-- Add function to check and enforce rate limits
CREATE OR REPLACE FUNCTION public.check_rate_limit(
  func_name text,
  max_calls integer DEFAULT 10,
  window_minutes integer DEFAULT 60
)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  current_calls integer;
  user_id_val uuid;
BEGIN
  user_id_val := auth.uid();
  
  -- Clean old rate limit records
  DELETE FROM public.function_rate_limits 
  WHERE window_start < NOW() - (window_minutes || ' minutes')::interval;
  
  -- Check current call count
  SELECT COALESCE(SUM(call_count), 0) INTO current_calls
  FROM public.function_rate_limits
  WHERE function_name = func_name 
    AND user_id = user_id_val
    AND window_start >= NOW() - (window_minutes || ' minutes')::interval;
  
  -- If over limit, deny access
  IF current_calls >= max_calls THEN
    RAISE EXCEPTION 'Rate limit exceeded: Too many calls to % (max % per % minutes)', 
      func_name, max_calls, window_minutes;
  END IF;
  
  -- Record this call
  INSERT INTO public.function_rate_limits (user_id, function_name, call_count, window_start)
  VALUES (user_id_val, func_name, 1, NOW())
  ON CONFLICT (user_id, function_name) 
  DO UPDATE SET 
    call_count = function_rate_limits.call_count + 1,
    window_start = CASE 
      WHEN function_rate_limits.window_start < NOW() - (window_minutes || ' minutes')::interval 
      THEN NOW() 
      ELSE function_rate_limits.window_start 
    END;
  
  RETURN true;
END;
$$;

-- Update waitlist count function with rate limiting
DROP FUNCTION public.get_waitlist_count();
CREATE OR REPLACE FUNCTION public.get_waitlist_count()
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
BEGIN
  -- Require authentication
  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'Access denied: Authentication required';
  END IF;
  
  -- Check rate limit (max 5 calls per hour)
  PERFORM public.check_rate_limit('get_waitlist_count', 5, 60);
  
  -- Log access attempt
  PERFORM public.log_waitlist_access('count_check', NULL, NULL);
  
  -- Return count only
  RETURN (SELECT COUNT(*)::INTEGER FROM public.waitlist_signups);
END;
$$;

-- Add index for better performance on rate limiting
CREATE INDEX IF NOT EXISTS idx_rate_limits_user_function 
ON public.function_rate_limits (user_id, function_name, window_start);

-- Add index for better performance on security audit log
CREATE INDEX IF NOT EXISTS idx_security_audit_log_timestamp 
ON public.security_audit_log (created_at DESC);

-- Create summary comment for security review
COMMENT ON FUNCTION public.get_waitlist_count() IS 'Secure waitlist count function: Requires authentication, rate limited, logged access';
COMMENT ON FUNCTION public.get_waitlist_activity() IS 'Secure activity function: Returns only aggregated daily data, no individual user information';
COMMENT ON FUNCTION public.get_recent_signups_admin(integer) IS 'Admin-only function: Service role required, heavily anonymized data, strict limits';
COMMENT ON TABLE public.function_rate_limits IS 'Rate limiting for sensitive functions to prevent scraping and abuse';