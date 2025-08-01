-- Create waitlist signups table
CREATE TABLE public.waitlist_signups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  instagram TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  ip_address TEXT,
  user_agent TEXT,
  referral_source TEXT DEFAULT 'direct'
);

-- Enable Row Level Security
ALTER TABLE public.waitlist_signups ENABLE ROW LEVEL SECURITY;

-- Create policy for inserting (public access for waitlist)
CREATE POLICY "Anyone can insert waitlist signups" 
ON public.waitlist_signups 
FOR INSERT 
WITH CHECK (true);

-- Create policy for admins to view all signups
CREATE POLICY "Authenticated users can view waitlist signups" 
ON public.waitlist_signups 
FOR SELECT 
USING (auth.uid() IS NOT NULL);

-- Create index for email searches and performance
CREATE INDEX idx_waitlist_email ON public.waitlist_signups(email);
CREATE INDEX idx_waitlist_created_at ON public.waitlist_signups(created_at DESC);