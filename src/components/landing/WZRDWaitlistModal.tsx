import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { getCalApi } from "@calcom/embed-react";
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Users, Calendar, Loader2, ArrowRight } from 'lucide-react';
import wzrdLogo from '@/assets/wzrd-logo.png';

interface WZRDWaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface WaitlistData {
  name: string;
  email: string;
}

const WZRDWaitlistModal: React.FC<WZRDWaitlistModalProps> = ({ open, onOpenChange }) => {
  const [formData, setFormData] = useState<WaitlistData>({ name: '', email: '' });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);
  const [waitlistPosition, setWaitlistPosition] = useState<number | null>(null);

  useEffect(() => {
    if (open) {
      fetchWaitlistCount();
      setStep('form');
      setFormData({ name: '', email: '' });
      setAgreedToTerms(false);
    }
  }, [open]);

  useEffect(() => {
    if (step === 'success') {
      (async function () {
        const cal = await getCalApi({ namespace: "wzrd.tech-onboarding-call" });
        cal("ui", { theme: "dark", hideEventTypeDetails: false, layout: "month_view" });
      })();
    }
  }, [step]);

  const fetchWaitlistCount = async () => {
    try {
      const { data, error } = await supabase.rpc('get_public_waitlist_count');
      if (!error && data) {
        setWaitlistCount(data);
      }
    } catch (err) {
      console.error('Error fetching waitlist count:', err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const isFormValid = (): boolean => {
    return (
      formData.name.trim().length > 0 &&
      formData.email.trim().length > 0 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
      agreedToTerms
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) {
      if (!agreedToTerms) {
        toast.error('Please agree to the Terms and Conditions');
      } else {
        toast.error('Please fill in all fields correctly');
      }
      return;
    }

    setIsSubmitting(true);
    
    // Skip database insert - go directly to Cal.com scheduling
    try {
      // Try to save to waitlist_signups (existing table)
      const { error } = await supabase
        .from('waitlist_signups')
        .insert([{ 
          name: formData.name.trim(), 
          email: formData.email.trim().toLowerCase()
        }]);

      if (error && error.code === '23505') {
        // Already signed up - that's fine, proceed to scheduling
        toast.info('Welcome back! Schedule your call below.');
      } else if (error) {
        // Other error - still proceed to Cal.com
        console.log('Waitlist save skipped:', error.message);
      }
    } catch (err) {
      // Silently continue - the main goal is to get them to Cal.com
      console.log('Continuing to scheduler');
    }

    // Always proceed to success/scheduling step
    setStep('success');
    toast.success('Welcome to WZRD.tech!');
    setIsSubmitting(false);
  };

  const handleClose = () => {
    setFormData({ name: '', email: '' });
    setAgreedToTerms(false);
    setStep('form');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg bg-card-dark border border-border/20 backdrop-blur-xl p-0 overflow-hidden">
        <div className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
          
          <div className="relative">
            {/* Logo */}
            <div className="flex justify-center py-6 border-b border-border/10">
              <img src={wzrdLogo} alt="WZRD.tech" className="h-10 w-auto" />
            </div>

            <AnimatePresence mode="wait">
              {step === 'form' ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="p-8"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2">Join the Waitlist</h2>
                    <p className="text-muted-foreground">
                      Be among the first to access the Creator-Agent Operating System
                    </p>
                    {waitlistCount && (
                      <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">
                          {waitlistCount.toLocaleString()}+ creators waiting
                        </span>
                      </div>
                    )}
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground/80">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-background/50 border-border/30 focus:border-primary/50"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground/80">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-background/50 border-border/30 focus:border-primary/50"
                        required
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="terms"
                        checked={agreedToTerms}
                        onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                        className="mt-1"
                      />
                      <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                        I agree to{' '}
                        <a 
                          href="https://5dee.studio/terms" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          5-Dee Studios Terms and Conditions
                        </a>
                      </Label>
                    </div>

                    <Button
                      type="submit"
                      disabled={!isFormValid() || isSubmitting}
                      className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground font-semibold py-6 rounded-xl shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed [text-shadow:0_0_10px_rgba(168,85,247,0.8)]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Schedule Onboarding Call
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="p-8"
                >
                  <div className="text-center mb-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4"
                    >
                      <Check className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h2 className="text-2xl font-bold mb-2">You're on the list!</h2>
                    {waitlistPosition && (
                      <p className="text-muted-foreground mb-2">
                        Position #{waitlistPosition.toLocaleString()}
                      </p>
                    )}
                    <p className="text-muted-foreground">
                      Schedule your onboarding call below.
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-4">
                    <div className="w-full p-4 rounded-xl bg-background/50 border border-border/20">
                      <div className="flex items-center gap-3 mb-4">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="font-medium">Schedule Onboarding Call</span>
                      </div>
                      <button
                        data-cal-namespace="wzrd.tech-onboarding-call"
                        data-cal-link="5deestudios/wzrd.tech-onboarding-call"
                        data-cal-config='{"layout":"month_view","theme":"dark"}'
                        className="w-full px-6 py-4 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors font-medium"
                      >
                        Open Calendar
                      </button>
                    </div>

                    <Button
                      variant="ghost"
                      onClick={handleClose}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      Close
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WZRDWaitlistModal;
