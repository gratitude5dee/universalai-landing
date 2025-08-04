-- Fix security issue: Set search_path for functions to prevent potential SQL injection

-- Update update_updated_at_column function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$function$;

-- Update generate_board_slug function
CREATE OR REPLACE FUNCTION public.generate_board_slug(board_title text)
 RETURNS text
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO ''
AS $function$
DECLARE
  base_slug TEXT;
  final_slug TEXT;
  counter INTEGER := 1;
BEGIN
  -- Create base slug from title
  base_slug := lower(regexp_replace(board_title, '[^a-zA-Z0-9\s]', '', 'g'));
  base_slug := regexp_replace(base_slug, '\s+', '-', 'g');
  base_slug := trim(both '-' from base_slug);
  
  -- If empty, use default
  IF base_slug = '' THEN
    base_slug := 'untitled-canvas';
  END IF;
  
  final_slug := base_slug;
  
  -- Check for uniqueness and increment if needed
  WHILE EXISTS (SELECT 1 FROM public.boards WHERE slug = final_slug) LOOP
    final_slug := base_slug || '-' || counter;
    counter := counter + 1;
  END LOOP;
  
  RETURN final_slug;
END;
$function$;