import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { getCalApi } from "@calcom/embed-react";
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Users, Calendar, Loader2 } from 'lucide-react';
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState<number | null>(null);
  const [waitlistPosition, setWaitlistPosition] = useState<number | null>(null);

  useEffect(() => {
    if (open) {
      fetchWaitlistCount();
    }
  }, [open]);

  useEffect(() => {
    if (showCalendar) {
      (async function () {
        const cal = await getCalApi({ namespace: "wzrd.tech-onboarding-call" });
        cal("ui", { theme: "dark", hideEventTypeDetails: false, layout: "month_view" });
      })();
    }
  }, [showCalendar]);

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

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      toast.error('Please enter your name');
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Use the existing waitlist table via raw query
      const { error } = await supabase
        .from('waitlist' as any)
        .insert([{ 
          name: formData.name.trim(), 
          email: formData.email.trim().toLowerCase()
        }]);

      if (error) {
        if (error.code === '23505') {
          toast.error('This email is already on the waitlist!');
        } else {
          throw error;
        }
        return;
      }

      const { data: countData } = await supabase.rpc('get_public_waitlist_count');
      if (countData) {
        setWaitlistPosition(countData);
      }

      setIsSuccess(true);
      toast.success('Welcome to WZRD.tech!');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({ name: '', email: '' });
    setIsSuccess(false);
    setShowCalendar(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg bg-card-dark border border-border/20 backdrop-blur-xl p-0 overflow-hidden">
        <div className="relative">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
          
          <div className="relative p-8">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <img src={wzrdLogo} alt="WZRD.tech" className="h-12 w-auto" />
            </div>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {/* Title */}
                  <h2 className="text-2xl font-bold text-center mb-2 text-foreground">
                    Join the Waitlist
                  </h2>
                  <p className="text-muted-foreground text-center mb-6 text-sm">
                    Be among the first to experience autonomous creator economies
                  </p>

                  {/* Live counter */}
                  {waitlistCount !== null && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center justify-center gap-2 mb-6 py-3 px-4 rounded-xl bg-primary/10 border border-primary/20"
                    >
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground">
                        <span className="font-bold text-primary">{waitlistCount.toLocaleString()}</span> people on the waitlist
                      </span>
                    </motion.div>
                  )}

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground/80">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-background/50 border-border/30 focus:border-primary/50"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground/80">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-background/50 border-border/30 focus:border-primary/50"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-medium py-6"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Joining...
                        </>
                      ) : (
                        'Join Waitlist'
                      )}
                    </Button>
                  </form>
                </motion.div>
              ) : !showCalendar ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center"
                >
                  {/* Success checkmark */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", delay: 0.1 }}
                    className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center"
                  >
                    <Check className="w-8 h-8 text-green-500" />
                  </motion.div>

                  <h2 className="text-2xl font-bold mb-2 text-foreground">You're In!</h2>
                  
                  {waitlistPosition && (
                    <p className="text-muted-foreground mb-6">
                      You're <span className="text-primary font-bold">#{waitlistPosition}</span> on the waitlist
                    </p>
                  )}

                  <p className="text-sm text-muted-foreground mb-6">
                    Want to fast-track your access? Book an onboarding call with our team.
                  </p>

                  <div className="flex flex-col gap-3">
                    <Button
                      onClick={() => setShowCalendar(true)}
                      className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Onboarding Call
                    </Button>
                    <Button
                      variant="outline"
                      onClick={handleClose}
                      className="w-full border-border/30 hover:bg-background/50"
                    >
                      Maybe Later
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="calendar"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <h2 className="text-xl font-bold mb-4 text-foreground">Book Your Call</h2>
                  <div className="min-h-[400px] flex items-center justify-center">
                    <button
                      data-cal-namespace="wzrd.tech-onboarding-call"
                      data-cal-link="5deestudios/wzrd.tech-onboarding-call"
                      data-cal-config='{"layout":"month_view","theme":"dark"}'
                      className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Open Calendar
                    </button>
                  </div>
                  <Button
                    variant="ghost"
                    onClick={handleClose}
                    className="mt-4"
                  >
                    Close
                  </Button>
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
