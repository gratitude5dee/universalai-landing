-- Fix security warnings by updating functions with proper search_path
CREATE OR REPLACE FUNCTION public.get_waitlist_count()
RETURNS INTEGER
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = ''
AS $$
  SELECT COUNT(*)::INTEGER FROM public.waitlist_signups;
$$;

-- Fix security warnings by updating functions with proper search_path
CREATE OR REPLACE FUNCTION public.get_recent_signups(limit_count INTEGER DEFAULT 5)
RETURNS TABLE(signup_time TIMESTAMP WITH TIME ZONE, display_name TEXT)
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = ''
AS $$
  SELECT 
    created_at,
    CASE 
      WHEN name IS NOT NULL THEN LEFT(name, 1) || '***'
      ELSE 'Anonymous'
    END as display_name
  FROM public.waitlist_signups 
  ORDER BY created_at DESC 
  LIMIT limit_count;
$$;