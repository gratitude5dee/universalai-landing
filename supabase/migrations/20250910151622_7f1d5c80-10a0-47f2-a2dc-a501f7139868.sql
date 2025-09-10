-- Fix critical security vulnerability: Restrict waitlist_signups access
-- Remove public access to customer personal data and restrict to admin/service role only

-- Drop the existing overly permissive SELECT policy
DROP POLICY IF EXISTS "Authenticated users can view waitlist signups" ON public.waitlist_signups;

-- Create a secure policy that only allows service role access for viewing waitlist data
-- This protects customer emails, phone numbers, and personal information from data harvesting
CREATE POLICY "Only service role can view waitlist signups" 
ON public.waitlist_signups 
FOR SELECT 
USING (((current_setting('request.jwt.claims'::text, true))::json ->> 'role'::text) = 'service_role'::text);

-- Keep the existing INSERT policy as users need to be able to sign up
-- The "Anyone can insert waitlist signups" policy remains unchanged

-- Ensure RLS is properly enabled
ALTER TABLE public.waitlist_signups ENABLE ROW LEVEL SECURITY;