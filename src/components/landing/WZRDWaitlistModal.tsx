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
    setShowCalendar(true); // Default to calendar if needed, or false. But here we want to reset.
    onOpenChange(false);
  };

  // Force show calendar immediately when opened, based on user request to "take user to cal embed"
  useEffect(() => {
    if (open) {
        setShowCalendar(true);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-4xl bg-card-dark border border-border/20 backdrop-blur-xl p-0 overflow-hidden h-[80vh]">
        <div className="relative h-full">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 pointer-events-none" />
          
          <div className="relative h-full flex flex-col">
            {/* Logo */}
            <div className="flex justify-center py-6 border-b border-border/10">
              <img src={wzrdLogo} alt="WZRD.tech" className="h-8 w-auto" />
            </div>

            <div className="flex-1 w-full overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                    <button
                      data-cal-namespace="wzrd.tech-onboarding-call"
                      data-cal-link="5deestudios/wzrd.tech-onboarding-call"
                      data-cal-config='{"layout":"month_view","theme":"dark"}'
                      className="w-full h-full flex items-center justify-center"
                    >
                      <span className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                        Click to Schedule Onboarding Call
                      </span>
                    </button>
                </div>
            </div>

            <div className="p-4 flex justify-center border-t border-border/10">
                <Button
                    variant="ghost"
                    onClick={handleClose}
                >
                    Close
                </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WZRDWaitlistModal;
