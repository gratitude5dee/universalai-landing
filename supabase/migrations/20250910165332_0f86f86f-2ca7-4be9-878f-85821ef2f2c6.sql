-- Fix the previous migration: Remove the still-vulnerable public policy
-- The previous "Public can view limited profile data" policy still exposed all columns

-- Drop the policy that still allows public access to all profile data
DROP POLICY IF EXISTS "Public can view limited profile data" ON public.profiles;

-- Now only the "Users can view their own profile" policy remains, which is secure
-- This ensures users can only access their own profile data

-- If public username/avatar display is needed in the future, 
-- a separate view or function should be created instead of exposing the profiles table