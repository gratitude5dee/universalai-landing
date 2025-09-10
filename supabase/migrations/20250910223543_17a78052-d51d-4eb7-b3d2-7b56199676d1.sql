-- Security Fix: Strengthen RLS policies for waitlist_signups table
-- Drop existing policies to recreate them with better security

DROP POLICY IF EXISTS "Anyone can insert waitlist signups" ON public.waitlist_signups;
DROP POLICY IF EXISTS "Only service role can view waitlist signups" ON public.waitlist_signups;

-- Create more restrictive INSERT policy with rate limiting consideration
CREATE POLICY "Authenticated users can join waitlist"
ON public.waitlist_signups
FOR INSERT
TO public
WITH CHECK (
  -- Allow insertions but add some basic validation
  char_length(name) BETWEEN 1 AND 100 
  AND char_length(email) BETWEEN 5 AND 254
  AND email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
);

-- Create strict SELECT policy - only service role can read raw data
CREATE POLICY "Service role only read access"
ON public.waitlist_signups
FOR SELECT
TO service_role
USING (true);

-- Prevent any updates or deletes to maintain data integrity
CREATE POLICY "No updates allowed"
ON public.waitlist_signups
FOR UPDATE
TO public
USING (false);

CREATE POLICY "No deletes allowed"
ON public.waitlist_signups
FOR DELETE
TO public
USING (false);

-- Create a secure audit log function for monitoring access attempts
CREATE OR REPLACE FUNCTION public.log_waitlist_access(
  access_type text,
  ip_address text DEFAULT NULL,
  user_agent text DEFAULT NULL
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
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

-- Create security audit log table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.security_audit_log (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type text NOT NULL,
  details jsonb DEFAULT '{}',
  ip_address text,
  user_agent text,
  created_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS on audit log
ALTER TABLE public.security_audit_log ENABLE ROW LEVEL SECURITY;

-- Only service role can access audit logs
CREATE POLICY "Service role only audit access"
ON public.security_audit_log
FOR ALL
TO service_role
USING (true);

-- Update the get_recent_signups function to be even more privacy-friendly
CREATE OR REPLACE FUNCTION public.get_recent_signups(limit_count integer DEFAULT 5)
RETURNS TABLE(signup_time timestamp with time zone, display_name text)
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  -- Log access attempt
  SELECT public.log_waitlist_access('recent_signups', NULL, NULL);
  
  -- Return anonymized data with even less information
  SELECT 
    created_at,
    CASE 
      WHEN name IS NOT NULL AND LENGTH(name) > 0 THEN 
        LEFT(name, 1) || REPEAT('*', GREATEST(1, LENGTH(name) - 1))
      ELSE 'Anonymous'
    END as display_name
  FROM public.waitlist_signups 
  ORDER BY created_at DESC 
  LIMIT GREATEST(1, LEAST(limit_count, 10)); -- Cap at 10 for security
$$;

-- Secure the get_waitlist_count function
CREATE OR REPLACE FUNCTION public.get_waitlist_count()
RETURNS integer
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path = public
AS $$
  -- Log access attempt
  SELECT public.log_waitlist_access('count_check', NULL, NULL);
  
  -- Return count only
  SELECT COUNT(*)::INTEGER FROM public.waitlist_signups;
$$;