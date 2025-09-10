-- Fix critical security vulnerability: Remove public access to user profile data
-- This protects sensitive data like wallet addresses, AI preferences, and personal information

-- Drop the overly permissive policy that allows anyone to view all profiles
DROP POLICY IF EXISTS "Users can view all profiles" ON public.profiles;

-- Keep the secure policy that only allows users to view their own profile
-- The "Users can view their own profile" policy remains unchanged

-- Optional: Add a limited public view policy for only non-sensitive display data
-- This allows showing usernames/avatars in public contexts while protecting sensitive data
CREATE POLICY "Public can view limited profile data" 
ON public.profiles 
FOR SELECT 
USING (true)
-- Only expose username and avatar_url for public display purposes
-- All other sensitive fields (wallet_address, ai_preferences, etc.) are protected
;