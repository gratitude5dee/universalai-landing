-- Fix security vulnerabilities in database functions by setting search_path
-- This prevents SQL injection attacks through search_path manipulation

-- Fix get_available_credits function
CREATE OR REPLACE FUNCTION public.get_available_credits()
 RETURNS integer
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = ''
AS $function$
DECLARE
  available_credits INTEGER;
BEGIN
  -- Get the current user credits
  SELECT (total_credits - used_credits) INTO available_credits
  FROM public.user_credits
  WHERE user_id = auth.uid();
  
  -- Return 0 if no record found
  RETURN COALESCE(available_credits, 0);
END;
$function$;

-- Fix handle_new_user_credits function
CREATE OR REPLACE FUNCTION public.handle_new_user_credits()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = ''
AS $function$
BEGIN
  INSERT INTO public.user_credits (user_id)
  VALUES (NEW.id);
  RETURN NEW;
END;
$function$;

-- Fix update_user_wallet function
CREATE OR REPLACE FUNCTION public.update_user_wallet()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = ''
AS $function$
BEGIN
  UPDATE public.profiles
  SET 
    wallet_address = NEW.wallet_address,
    wallet_type = NEW.wallet_type,
    last_wallet_connection = NOW(),
    updated_at = NOW()
  WHERE id = NEW.user_id;
  RETURN NEW;
END;
$function$;

-- Fix update_modified_column function
CREATE OR REPLACE FUNCTION public.update_modified_column()
 RETURNS trigger
 LANGUAGE plpgsql
 SET search_path = ''
AS $function$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$function$;

-- Fix is_authenticated_user function
CREATE OR REPLACE FUNCTION public.is_authenticated_user(requested_user_id uuid)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = ''
AS $function$
BEGIN
  -- Check if requesting user matches the requested user id
  RETURN auth.uid() = requested_user_id;
END;
$function$;

-- Fix handle_new_user function
CREATE OR REPLACE FUNCTION public.handle_new_user()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = ''
AS $function$
BEGIN
  INSERT INTO public.profiles (id, username, avatar_url)
  VALUES (new.id, new.raw_user_meta_data->>'username', new.raw_user_meta_data->>'avatar_url');
  RETURN new;
END;
$function$;

-- Fix ensure_one_selected_storyline function
CREATE OR REPLACE FUNCTION public.ensure_one_selected_storyline()
 RETURNS trigger
 LANGUAGE plpgsql
 SET search_path = ''
AS $function$
BEGIN
  IF NEW.is_selected = true THEN
    UPDATE public.storylines
    SET is_selected = false
    WHERE project_id = NEW.project_id
    AND id != NEW.id
    AND is_selected = true;
  END IF;
  RETURN NEW;
END;
$function$;

-- Fix update_updated_at_column function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
 RETURNS trigger
 LANGUAGE plpgsql
 SET search_path = ''
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

-- Fix add_credits function
CREATE OR REPLACE FUNCTION public.add_credits(credit_amount integer, transaction_type text DEFAULT 'purchase'::text, metadata jsonb DEFAULT '{}'::jsonb)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = ''
AS $function$
DECLARE
  user_id UUID;
BEGIN
  -- Get the current user ID
  user_id := auth.uid();
  
  -- Check if user exists
  IF user_id IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;
  
  -- Update the total credits
  UPDATE public.user_credits
  SET total_credits = total_credits + credit_amount,
      updated_at = now()
  WHERE user_credits.user_id = add_credits.user_id;
  
  -- If no record was updated, create one
  IF NOT FOUND THEN
    INSERT INTO public.user_credits (user_id, total_credits)
    VALUES (user_id, credit_amount);
  END IF;
  
  -- Record the transaction
  INSERT INTO public.credit_transactions (
    user_id, 
    amount, 
    transaction_type, 
    resource_type, 
    metadata
  )
  VALUES (
    user_id, 
    credit_amount, 
    transaction_type, 
    'credit', 
    metadata
  );
  
  RETURN TRUE;
END;
$function$;

-- Fix use_credits function
CREATE OR REPLACE FUNCTION public.use_credits(resource_type text, credit_cost integer DEFAULT 1, metadata jsonb DEFAULT '{}'::jsonb)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path = ''
AS $function$
DECLARE
  user_id UUID;
  current_credits INTEGER;
BEGIN
  -- Get the current user ID
  user_id := auth.uid();
  
  -- Check if user exists
  IF user_id IS NULL THEN
    RAISE EXCEPTION 'Not authenticated';
  END IF;
  
  -- Get current credit balance
  SELECT (total_credits - used_credits) INTO current_credits
  FROM public.user_credits
  WHERE user_credits.user_id = use_credits.user_id;
  
  -- If no record exists or not enough credits
  IF current_credits IS NULL OR current_credits < credit_cost THEN
    RETURN FALSE;
  END IF;
  
  -- Update the credits used
  UPDATE public.user_credits
  SET used_credits = used_credits + credit_cost,
      updated_at = now()
  WHERE user_credits.user_id = use_credits.user_id;
  
  -- Record the transaction
  INSERT INTO public.credit_transactions (
    user_id, 
    amount, 
    transaction_type, 
    resource_type, 
    metadata
  )
  VALUES (
    user_id, 
    -credit_cost, 
    'usage', 
    resource_type, 
    metadata
  );
  
  RETURN TRUE;
END;
$function$;

-- Fix update_generation_timestamps function
CREATE OR REPLACE FUNCTION public.update_generation_timestamps()
 RETURNS trigger
 LANGUAGE plpgsql
 SET search_path = ''
AS $function$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$function$;