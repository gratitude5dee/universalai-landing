import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  Share2, 
  Copy, 
  Twitter, 
  MessageCircle,
  Instagram,
  X,
  Ticket,
  Sparkles,
  Music
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface SuccessExperienceProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail: string;
  waitlistPosition: number;
}

const SuccessExperience: React.FC<SuccessExperienceProps> = ({ 
  isOpen, 
  onClose, 
  userEmail,
  waitlistPosition 
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [referralCode, setReferralCode] = useState('');

  useEffect(() => {
    if (isOpen) {
      // Generate referral code
      const code = btoa(userEmail).slice(0, 8).toUpperCase();
      setReferralCode(code);
      
      // Step progression
      const timer1 = setTimeout(() => setCurrentStep(1), 2000);
      const timer2 = setTimeout(() => setCurrentStep(2), 4000);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [isOpen, userEmail]);

  // Confetti animation elements
  const confettiElements = Array.from({ length: 50 }, (_, i) => (
    <motion.div
      key={i}
      className={`absolute w-3 h-3 ${
        i % 4 === 0 ? 'bg-green-400' :
        i % 4 === 1 ? 'bg-yellow-400' :
        i % 4 === 2 ? 'bg-pink-400' : 'bg-blue-400'
      } rounded-full`}
      initial={{ 
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        scale: 0,
        opacity: 0
      }}
      animate={currentStep === 0 ? {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: [0, 1, 0],
        opacity: [0, 1, 0],
        rotate: 360
      } : {}}
      transition={{
        duration: 3,
        delay: i * 0.02,
        ease: "easeOut"
      }}
    />
  ));

  const generateReferralLink = () => {
    return `${window.location.origin}?ref=${referralCode}`;
  };

  const shareMessages = {
    twitter: `Just secured my spot for @UniversalAI - Finalist at @OutsideLands Hackathon! 🎵 Join me: ${generateReferralLink()} #OutsideLands2025 #MusicOS`,
    whatsapp: `🎉 I just joined the MusicOS waitlist! It's a finalist at the OutsideLands Hackathon 2025. Join me: ${generateReferralLink()}`,
    instagram: `🎵 Secured my spot for MusicOS! OutsideLands Hackathon Finalist 2025 ✨`,
  };

  const handleShare = async (platform: string) => {
    // Track share event
    try {
      await supabase.from('share_analytics').insert({
        user_email: userEmail,
        platform,
        referral_code: referralCode
      });
    } catch (error) {
      console.error('Error tracking share:', error);
    }

    const message = shareMessages[platform as keyof typeof shareMessages];
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
        break;
      case 'copy':
        await navigator.clipboard.writeText(generateReferralLink());
        toast({ title: "Link copied!", description: "Share it with your friends!" });
        break;
      case 'instagram':
        // Copy Instagram story text
        await navigator.clipboard.writeText(shareMessages.instagram);
        toast({ 
          title: "Text copied!", 
          description: "Paste it in your Instagram story!" 
        });
        break;
    }
  };

  const handleClose = () => {
    setCurrentStep(0);
    setShareModalOpen(false);
    onClose();
  };

  return (
    <>
      {/* Confetti Overlay */}
      <AnimatePresence>
        {isOpen && currentStep === 0 && (
          <motion.div
            className="fixed inset-0 pointer-events-none z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {confettiElements}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Success Modal */}
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md glass-modal border-0 text-white bg-black/80 backdrop-blur-xl">
          <div className="text-center py-6 space-y-6">
            
            {/* Step 1: Celebration */}
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div
                  key="celebration"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  className="space-y-4"
                >
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 360]
                    }}
                    transition={{ 
                      scale: { duration: 1, repeat: Infinity },
                      rotate: { duration: 2, repeat: Infinity, ease: "linear" }
                    }}
                    className="w-20 h-20 mx-auto bg-gradient-to-r from-green-500 to-yellow-400 rounded-full flex items-center justify-center"
                  >
                    <CheckCircle className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 via-yellow-400 to-pink-400 bg-clip-text text-transparent">
                    Welcome to the Festival! 🎉
                  </h2>
                  
                  <div className="flex justify-center gap-2">
                    {[Music, Sparkles, Music].map((Icon, i) => (
                      <motion.div
                        key={i}
                        animate={{ 
                          y: [0, -10, 0],
                          rotate: [0, 180, 360]
                        }}
                        transition={{ 
                          duration: 2,
                          delay: i * 0.3,
                          repeat: Infinity 
                        }}
                      >
                        <Icon className="w-6 h-6 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 2: Ticket Position */}
              {currentStep === 1 && (
                <motion.div
                  key="position"
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -300, opacity: 0 }}
                  className="space-y-4"
                >
                  <motion.div
                    className="relative mx-auto w-48 h-32 bg-gradient-to-r from-green-500 via-yellow-400 to-pink-500 rounded-lg transform rotate-3"
                    animate={{ rotate: [3, -3, 3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {/* Ticket perforations */}
                    <div className="absolute left-0 top-1/2 w-full h-px border-t-2 border-dashed border-white/30" />
                    
                    <div className="p-4 text-black font-bold">
                      <div className="text-xs">MUSICÓS FESTIVAL</div>
                      <div className="text-lg">POSITION #{waitlistPosition}</div>
                      <div className="text-xs">ADMIT ONE</div>
                    </div>
                    
                    <Ticket className="absolute bottom-2 right-2 w-6 h-6 text-black/50" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-white">
                    You're #{waitlistPosition} in line!
                  </h3>
                  <p className="text-white/80">
                    Your VIP pass to the future of music creation
                  </p>
                </motion.div>
              )}

              {/* Step 3: Share Flow */}
              {currentStep === 2 && (
                <motion.div
                  key="share"
                  initial={{ y: 300, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">
                      Spread the Festival Vibes! 🎵
                    </h3>
                    <p className="text-white/80 text-sm">
                      Share your referral link and move up the line faster
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      onClick={() => handleShare('twitter')}
                      className="bg-blue-500 hover:bg-blue-600 text-white border-0 flex items-center gap-2"
                    >
                      <Twitter className="w-4 h-4" />
                      Twitter
                    </Button>
                    
                    <Button
                      onClick={() => handleShare('whatsapp')}
                      className="bg-green-600 hover:bg-green-700 text-white border-0 flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </Button>
                    
                    <Button
                      onClick={() => handleShare('instagram')}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 flex items-center gap-2"
                    >
                      <Instagram className="w-4 h-4" />
                      Instagram
                    </Button>
                    
                    <Button
                      onClick={() => handleShare('copy')}
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/10 flex items-center gap-2"
                    >
                      <Copy className="w-4 h-4" />
                      Copy Link
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <Button 
                      onClick={handleClose}
                      className="w-full bg-gradient-to-r from-green-500 to-yellow-400 hover:from-green-600 hover:to-yellow-500 text-black font-bold border-0"
                    >
                      Close & Rock On! 🤘
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SuccessExperience;