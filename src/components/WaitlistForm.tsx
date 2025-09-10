import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useSecurityMonitoring } from "@/hooks/useSecurityMonitoring";
import { CheckCircle, Loader2, Users } from "lucide-react";

interface WaitlistFormData {
  name: string;
  email: string;
  instagram: string;
  phone: string;
}

export const WaitlistForm = () => {
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: "",
    email: "",
    instagram: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [position, setPosition] = useState<number | null>(null);
  const { toast } = useToast();
  const { checkRateLimit, detectSuspiciousInput, logSecurityEvent } = useSecurityMonitoring();

  const getUserIP = async (): Promise<string> => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch (error) {
      console.error('Failed to get IP:', error);
      return 'unknown';
    }
  };

  const sanitizeInput = (input: string) => {
    // Remove HTML tags and trim whitespace
    return input.replace(/<[^>]*>/g, '').trim();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Security check for suspicious input
    if (detectSuspiciousInput(value, name)) {
      toast({
        title: "Invalid Input",
        description: "Please enter valid information only.",
        variant: "destructive",
      });
      return;
    }
    
    const sanitizedValue = sanitizeInput(value);
    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};

    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters long';
    } else if (formData.name.trim().length > 100) {
      errors.name = 'Name must be less than 100 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email.trim())) {
      errors.email = 'Please enter a valid email address';
    }

    // Instagram validation (optional but if provided, should be valid)
    if (formData.instagram && formData.instagram.trim()) {
      if (!formData.instagram.trim().match(/^[a-zA-Z0-9._]{1,30}$/)) {
        errors.instagram = 'Instagram username should only contain letters, numbers, periods, and underscores';
      }
    }

    // Phone validation (optional but if provided, should be valid)
    if (formData.phone && formData.phone.trim()) {
      if (!formData.phone.trim().match(/^[\+]?[1-9][\d]{0,15}$/)) {
        errors.phone = 'Please enter a valid phone number';
      }
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate limiting check
    const rateLimitKey = `waitlist_${formData.email.trim().toLowerCase()}`;
    if (!checkRateLimit(rateLimitKey, 3, 300000)) { // 3 attempts per 5 minutes
      toast({
        title: "Too Many Attempts",
        description: "Please wait before trying again.",
        variant: "destructive",
      });
      return;
    }

    // Validate form
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      const firstError = Object.values(validationErrors)[0];
      logSecurityEvent({
        type: 'validation_failure',
        details: `Form validation failed: ${firstError}`,
      });
      toast({
        title: "Validation Error",
        description: firstError,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const ipAddress = await getUserIP();
      const urlParams = new URLSearchParams(window.location.search);
      
      const submissionData = {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        instagram: formData.instagram.trim() || null,
        phone: formData.phone.trim() || null,
        ip_address: ipAddress || 'unknown', // Fallback for IP service failure
        user_agent: navigator.userAgent.substring(0, 500), // Limit user agent length
        referral_source: urlParams.get('ref') || 'direct',
      };

      const { data, error } = await supabase
        .from('waitlist_signups')
        .insert([submissionData])
        .select();

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already Registered",
            description: "This email is already on our waitlist!",
            variant: "destructive",
          });
          return;
        }
        throw error;
      }

      // Get the user's position in the waitlist using public secure function
      const { data: count } = await supabase.rpc('get_public_waitlist_count');

      setPosition(count || 1);
      setIsSuccess(true);

      // Track conversion
      if ((window as any).gtag) {
        (window as any).gtag('event', 'waitlist_signup', {
          event_category: 'engagement',
          event_label: 'landing_page',
        });
      }

      toast({
        title: "Welcome to MusicOS! 🎵",
        description: `You're #${count || 1} on the waitlist. We'll notify you when early access opens!`,
      });

    } catch (error: any) {
      console.error('Waitlist submission error:', error);
      toast({
        title: "Submission Failed",
        description: "Something went wrong. Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: "", email: "", instagram: "", phone: "" });
    setIsSuccess(false);
    setPosition(null);
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="glass p-12 rounded-3xl mb-8">
          <div className="success-checkmark mb-6">
            <CheckCircle className="w-16 h-16 mx-auto" style={{ color: 'var(--accent-primary)' }} />
          </div>
          <h3 className="text-3xl font-bold mb-4 text-gradient-brand">
            Welcome to MusicOS! 🎵
          </h3>
          <p className="text-lg mb-6" style={{ color: 'var(--text-secondary)' }}>
            You're <span className="text-gradient-brand font-bold">#{position}</span> on the waitlist.
            We'll notify you when early access opens!
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
              <Users className="w-5 h-5" />
              <span>{position} creators waiting</span>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
              Share MusicOS with your network:
            </p>
            <div className="flex gap-4 justify-center">
              <Button
                onClick={() => {
                  const text = "I just joined the MusicOS waitlist! The future of music creation is here. 🎵";
                  const url = window.location.href;
                  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
                }}
                className="btn-glass px-6 py-3"
              >
                Share on Twitter
              </Button>
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  toast({ title: "Link copied!", description: "Share with your music creator friends!" });
                }}
                className="btn-glass px-6 py-3"
              >
                Copy Link
              </Button>
            </div>
          </div>

          <Button
            variant="ghost"
            onClick={resetForm}
            className="mt-8 text-sm"
            style={{ color: 'var(--text-secondary)' }}
          >
            Sign up another email
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-gradient-primary">
          Be First to Experience MusicOS
        </h2>
        <p className="text-xl lg:text-2xl mb-8" style={{ color: 'var(--text-secondary)' }}>
          Join the waitlist for early access to the operating system that's revolutionizing music creation
        </p>
      </div>

      <form onSubmit={handleSubmit} className="glass p-8 rounded-3xl space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="form-input h-14 text-base"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <Input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="form-input h-14 text-base"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Input
              type="text"
              name="instagram"
              placeholder="Instagram Handle (optional)"
              value={formData.instagram}
              onChange={handleInputChange}
              className="form-input h-14 text-base"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <Input
              type="tel"
              name="phone"
              placeholder="Phone Number (optional)"
              value={formData.phone}
              onChange={handleInputChange}
              className="form-input h-14 text-base"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn-primary h-16 text-lg font-semibold"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Joining Waitlist...
            </>
          ) : (
            "Reserve Your Spot"
          )}
        </Button>

        <p className="text-xs text-center" style={{ color: 'var(--text-secondary)' }}>
          By joining, you agree to receive updates about MusicOS. Unsubscribe anytime.
        </p>
      </form>
    </div>
  );
};