-- Create public-safe waitlist count function (no authentication required)
-- This is safe because it only returns a count, no sensitive data
CREATE OR REPLACE FUNCTION public.get_public_waitlist_count()
RETURNS integer
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $$
DECLARE
  client_ip text;
BEGIN
  -- Get client IP for rate limiting (if available)
  client_ip := COALESCE(
    current_setting('request.headers', true)::json->>'x-forwarded-for',
    current_setting('request.headers', true)::json->>'x-real-ip',
    'unknown'
  );
  
  -- Basic rate limiting by IP (allow more calls since it's public)
  -- Check if this IP has made too many requests recently
  IF (
    SELECT COUNT(*) 
    FROM public.security_audit_log 
    WHERE event_type = 'waitlist_access' 
      AND ip_address = client_ip 
      AND created_at > NOW() - INTERVAL '1 minute'
  ) > 20 THEN
    RAISE EXCEPTION 'Rate limit exceeded: Too many requests from this IP';
  END IF;
  
  -- Log access attempt with IP
  PERFORM public.log_waitlist_access('public_count_check', client_ip, NULL);
  
  -- Return count only (completely safe)
  RETURN (SELECT COUNT(*)::INTEGER FROM public.waitlist_signups);
END;
$$;

-- Add comment for security review
COMMENT ON FUNCTION public.get_public_waitlist_count() IS 'Public waitlist count function: No authentication required, IP-based rate limiting, only returns count';