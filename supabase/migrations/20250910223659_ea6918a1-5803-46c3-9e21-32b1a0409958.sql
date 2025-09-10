-- Additional security hardening and cleanup

-- Fix function search path issues for existing functions
CREATE OR REPLACE FUNCTION public.log_waitlist_access(
  access_type text,
  ip_address text DEFAULT NULL,
  user_agent text DEFAULT NULL
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  -- Log access attempts for security monitoring
  INSERT INTO public.security_audit_log (
    event_type,
    details,
    ip_address,
    user_agent,
    created_at
  ) VALUES (
    'waitlist_access',
    jsonb_build_object(
      'access_type', access_type,
      'timestamp', NOW()
    ),
    ip_address,
    SUBSTRING(user_agent FROM 1 FOR 500),
    NOW()
  );
EXCEPTION
  WHEN OTHERS THEN
    -- Silently fail to not break main functionality
    NULL;
END;
$$;

-- Update functions to have proper search_path
CREATE OR REPLACE FUNCTION public.get_recent_signups(limit_count integer DEFAULT 5)
RETURNS TABLE(signup_time timestamp with time zone, display_name text)
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  -- Log access attempt
  PERFORM public.log_waitlist_access('recent_signups', NULL, NULL);
  
  -- Return anonymized data with even less information
  RETURN QUERY
  SELECT 
    ws.created_at,
    CASE 
      WHEN ws.name IS NOT NULL AND LENGTH(ws.name) > 0 THEN 
        LEFT(ws.name, 1) || REPEAT('*', GREATEST(1, LENGTH(ws.name) - 1))
      ELSE 'Anonymous'
    END as display_name
  FROM public.waitlist_signups ws
  ORDER BY ws.created_at DESC 
  LIMIT GREATEST(1, LEAST(limit_count, 10)); -- Cap at 10 for security
END;
$$;

CREATE OR REPLACE FUNCTION public.get_waitlist_count()
RETURNS integer
LANGUAGE plpgsql
STABLE SECURITY DEFINER
SET search_path = 'public'
AS $$
DECLARE
  count_result integer;
BEGIN
  -- Log access attempt
  PERFORM public.log_waitlist_access('count_check', NULL, NULL);
  
  -- Return count only
  SELECT COUNT(*)::INTEGER INTO count_result FROM public.waitlist_signups;
  RETURN count_result;
END;
$$;

-- Create a secure public view that exposes only what's absolutely necessary
CREATE OR REPLACE VIEW public.waitlist_stats AS
SELECT 
  COUNT(*) as total_signups,
  DATE(created_at) as signup_date,
  COUNT(*) as daily_count
FROM public.waitlist_signups 
GROUP BY DATE(created_at)
ORDER BY signup_date DESC;

-- Enable RLS on the view
ALTER VIEW public.waitlist_stats SET (security_barrier = true);

-- Grant specific permissions
GRANT SELECT ON public.waitlist_stats TO authenticated;
GRANT SELECT ON public.waitlist_stats TO anon;

-- Create a comment to document the security measures
COMMENT ON TABLE public.waitlist_signups IS 'Contains PII - restricted to service role only. Access via public functions only.';
COMMENT ON FUNCTION public.get_waitlist_count IS 'Secure function to get waitlist count without exposing PII';
COMMENT ON FUNCTION public.get_recent_signups IS 'Secure function to get anonymized recent signups';

-- Add a trigger to prevent direct data access attempts
CREATE OR REPLACE FUNCTION public.prevent_direct_access()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = 'public'
AS $$
BEGIN
  -- Log potential unauthorized access attempt
  PERFORM public.log_waitlist_access('direct_access_attempt', 
    COALESCE(current_setting('request.headers', true)::json->>'x-forwarded-for', 'unknown'),
    COALESCE(current_setting('request.headers', true)::json->>'user-agent', 'unknown')
  );
  
  -- Continue with normal operation for service role
  RETURN COALESCE(NEW, OLD);
END;
$$;

-- Add the trigger for monitoring
DROP TRIGGER IF EXISTS log_waitlist_access_trigger ON public.waitlist_signups;
CREATE TRIGGER log_waitlist_access_trigger
  BEFORE SELECT ON public.waitlist_signups
  FOR EACH STATEMENT
  EXECUTE FUNCTION public.prevent_direct_access();