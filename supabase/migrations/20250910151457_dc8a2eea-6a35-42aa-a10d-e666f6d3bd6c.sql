-- Fix security vulnerability: Restrict access to share_analytics table
-- Remove public access and add proper user-specific access

-- Drop the existing overly permissive policies
DROP POLICY IF EXISTS "Anyone can view share analytics" ON public.share_analytics;
DROP POLICY IF EXISTS "Anyone can insert share analytics" ON public.share_analytics;

-- Create secure policies that only allow users to access their own data
CREATE POLICY "Users can view their own share analytics" 
ON public.share_analytics 
FOR SELECT 
USING (user_email = (
  SELECT email FROM auth.users WHERE id = auth.uid()
));

-- Allow users to insert their own share analytics
CREATE POLICY "Users can insert their own share analytics" 
ON public.share_analytics 
FOR INSERT 
WITH CHECK (user_email = (
  SELECT email FROM auth.users WHERE id = auth.uid()
));

-- Allow service role access for administrative purposes
CREATE POLICY "Service role can manage share analytics" 
ON public.share_analytics 
FOR ALL 
USING (((current_setting('request.jwt.claims'::text, true))::json ->> 'role'::text) = 'service_role'::text);

-- Ensure RLS is enabled on the table
ALTER TABLE public.share_analytics ENABLE ROW LEVEL SECURITY;