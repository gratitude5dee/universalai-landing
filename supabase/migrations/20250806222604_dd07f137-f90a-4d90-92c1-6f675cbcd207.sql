-- Add referral tracking and share analytics to waitlist_signups table
ALTER TABLE public.waitlist_signups 
ADD COLUMN referral_code TEXT,
ADD COLUMN shared_count INTEGER DEFAULT 0,
ADD COLUMN badges JSONB DEFAULT '[]'::jsonb;

-- Create referral_tracking table for detailed analytics
CREATE TABLE public.referral_tracking (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  referrer_email TEXT NOT NULL,
  referee_email TEXT NOT NULL,
  referral_code TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  conversion_date TIMESTAMP WITH TIME ZONE
);

-- Enable RLS on referral_tracking
ALTER TABLE public.referral_tracking ENABLE ROW LEVEL SECURITY;

-- Create policies for referral_tracking
CREATE POLICY "Anyone can insert referral tracking" 
ON public.referral_tracking 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can view referral tracking" 
ON public.referral_tracking 
FOR SELECT 
USING (true);

-- Create share_analytics table for tracking share events
CREATE TABLE public.share_analytics (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_email TEXT NOT NULL,
  platform TEXT NOT NULL,
  referral_code TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on share_analytics
ALTER TABLE public.share_analytics ENABLE ROW LEVEL SECURITY;

-- Create policies for share_analytics
CREATE POLICY "Anyone can insert share analytics" 
ON public.share_analytics 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can view share analytics" 
ON public.share_analytics 
FOR SELECT 
USING (true);

-- Add index for better performance on waitlist count queries
CREATE INDEX idx_waitlist_signups_created_at ON public.waitlist_signups(created_at DESC);

-- Function to get waitlist count
CREATE OR REPLACE FUNCTION public.get_waitlist_count()
RETURNS INTEGER
LANGUAGE SQL
STABLE
SECURITY DEFINER
AS $$
  SELECT COUNT(*)::INTEGER FROM public.waitlist_signups;
$$;

-- Function to get recent signups for ticker (anonymized)
CREATE OR REPLACE FUNCTION public.get_recent_signups(limit_count INTEGER DEFAULT 5)
RETURNS TABLE(signup_time TIMESTAMP WITH TIME ZONE, display_name TEXT)
LANGUAGE SQL
STABLE
SECURITY DEFINER
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