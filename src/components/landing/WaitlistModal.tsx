import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { X, CheckCircle, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import SuccessExperience from './SuccessExperience';
interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
interface WaitlistData {
  name: string;
  email: string;
  igHandle: string;
}
const WaitlistModal: React.FC<WaitlistModalProps> = ({
  open,
  onOpenChange
}) => {
  const [formData, setFormData] = useState<WaitlistData>({
    name: '',
    email: '',
    igHandle: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [waitlistPosition, setWaitlistPosition] = useState(0);
  const handleInputChange = (field: keyof WaitlistData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({
        title: "Error",
        description: "Name is required",
        variant: "destructive"
      });
      return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast({
        title: "Error",
        description: "Valid email is required",
        variant: "destructive"
      });
      return false;
    }
    return true;
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      // Insert into waitlist_signups table
      const {
        error
      } = await supabase.from('waitlist_signups').insert({
        name: formData.name,
        email: formData.email,
        instagram: formData.igHandle
      });
      if (error) throw error;

      // Get position in waitlist
      const {
        data: countData
      } = await supabase.rpc('get_public_waitlist_count');
      setWaitlistPosition(countData || 0);
      setIsSuccess(true);
      toast({
        title: "Success!",
        description: "You've been added to the waitlist!"
      });
    } catch (error: any) {
      console.error('Waitlist submission error:', error);
      toast({
        title: "Error",
        description: "Failed to join waitlist. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
      igHandle: ''
    });
    setIsSuccess(false);
    onOpenChange(false);
  };
  if (isSuccess) {
    return <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md glass-modal border-0 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-green-400" />
            <DialogTitle className="text-white font-semibold">Welcome to the waitlist!</DialogTitle>
          </div>
          <Button variant="ghost" size="icon" onClick={handleClose} className="h-6 w-6 text-white/80 hover:text-white hover:bg-white/10">
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="text-center py-6 space-y-4">
          <div className="w-16 h-16 mx-auto bg-green-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-green-400/30">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">You're in!</h3>
            <p className="text-white/80">We'll notify you when MusicOS is ready to rock your world.</p>
            {waitlistPosition > 0 && <p className="text-white/70 mt-2 text-sm">Current waitlist signups: {waitlistPosition.toLocaleString()}</p>}
          </div>
          <Button onClick={handleClose} className="w-full bg-primary hover:bg-primary/90 text-white border-0">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>;
  }
  return <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md glass-modal border-0 text-white rounded-full">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-white font-semibold">Join the Waitlist</DialogTitle>
            <Button variant="ghost" size="icon" onClick={() => onOpenChange(false)} className="h-6 w-6 text-white/80 hover:text-white hover:bg-white/10">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white font-medium">Name *</Label>
            <Input id="name" value={formData.name} onChange={e => handleInputChange('name', e.target.value)} placeholder="Your full name" required className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/15 focus:border-primary/50" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-white font-medium">Email *</Label>
            <Input id="email" type="email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} placeholder="your@email.com" required className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/15 focus:border-primary/50" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="igHandle" className="text-white font-medium">Instagram Handle</Label>
            <Input id="igHandle" value={formData.igHandle} onChange={e => handleInputChange('igHandle', e.target.value)} placeholder="@yourusername (optional)" className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/15 focus:border-primary/50" />
          </div>
          
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white border-0 shadow-lg shadow-primary/25" disabled={isSubmitting}>
            {isSubmitting ? <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Joining...
              </> : 'Join Waitlist'}
          </Button>
        </form>
        
        <p className="text-xs text-white/70 text-center">
          Be the first to know when MusicOS launches and get exclusive early access.
        </p>
      </DialogContent>
    </Dialog>;
};
export default WaitlistModal;