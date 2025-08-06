import React from 'react';
import { motion } from 'framer-motion';
import { 
  Twitter, 
  Instagram, 
  MessageCircle, 
  Copy, 
  Share2,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { toast } from '@/hooks/use-toast';

interface ShareModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  referralLink: string;
  userPosition: number;
}

const ShareModal: React.FC<ShareModalProps> = ({ 
  isOpen, 
  onOpenChange, 
  referralLink, 
  userPosition 
}) => {
  const shareMessages = {
    twitter: `Just secured my spot for @UniversalAI - Finalist at @OutsideLands Hackathon! 🎵 Join me: ${referralLink} #OutsideLands2025 #MusicOS`,
    instagram: `🎵 Secured my spot for MusicOS! OutsideLands Hackathon Finalist 2025 ✨ Position #${userPosition}`,
    whatsapp: `🎉 I just joined the MusicOS waitlist! It's a finalist at the OutsideLands Hackathon 2025. Join me: ${referralLink}`,
  };

  const handleShare = async (platform: string) => {
    const message = shareMessages[platform as keyof typeof shareMessages];
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
        break;
      case 'instagram':
        await navigator.clipboard.writeText(shareMessages.instagram);
        toast({ 
          title: "Text copied!", 
          description: "Paste it in your Instagram story!" 
        });
        break;
      case 'copy':
        await navigator.clipboard.writeText(referralLink);
        toast({ title: "Link copied!", description: "Share it with your friends!" });
        break;
    }
  };

  const socialButtons = [
    { 
      platform: 'twitter', 
      icon: Twitter, 
      label: 'Twitter', 
      color: 'bg-blue-500 hover:bg-blue-600',
      animation: { rotate: [0, -10, 10, 0] }
    },
    { 
      platform: 'instagram', 
      icon: Instagram, 
      label: 'Instagram', 
      color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
      animation: { scale: [1, 1.1, 1] }
    },
    { 
      platform: 'whatsapp', 
      icon: MessageCircle, 
      label: 'WhatsApp', 
      color: 'bg-green-600 hover:bg-green-700',
      animation: { y: [0, -5, 0] }
    },
    { 
      platform: 'copy', 
      icon: Copy, 
      label: 'Copy Link', 
      color: 'border-white/20 text-white hover:bg-white/10',
      variant: 'outline' as const,
      animation: { rotate: [0, 360] }
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md glass-modal border-0 text-white bg-black/90 backdrop-blur-xl">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-white font-bold flex items-center gap-2">
              <Share2 className="w-5 h-5 text-green-400" />
              Spread the Festival Vibes!
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              className="h-6 w-6 text-white/80 hover:text-white hover:bg-white/10"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Festival Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="text-center space-y-2"
          >
            <div className="text-2xl">🎵</div>
            <p className="text-white/80 text-sm">
              Share your referral link and help friends skip the line!
            </p>
            <div className="text-xs text-green-400">
              Your position: #{userPosition}
            </div>
          </motion.div>

          {/* Social Sharing Grid */}
          <div className="grid grid-cols-2 gap-3">
            {socialButtons.map(({ platform, icon: Icon, label, color, variant, animation }, index) => (
              <motion.div
                key={platform}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={animation}
              >
                <Button
                  onClick={() => handleShare(platform)}
                  variant={variant}
                  className={`w-full ${color} text-white border-0 flex items-center gap-2 py-3`}
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "linear",
                      delay: index * 0.5 
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.div>
                  {label}
                </Button>
              </motion.div>
            ))}
          </div>

          {/* Referral Link Display */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-2"
          >
            <label className="text-sm text-white/70">Your Festival Pass Link:</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={referralLink}
                readOnly
                className="flex-1 bg-white/10 border border-white/20 rounded-md px-3 py-2 text-sm text-white/90 focus:outline-none focus:border-green-400/50"
              />
              <Button
                onClick={() => handleShare('copy')}
                size="sm"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Copy className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          {/* Incentive Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center p-3 bg-gradient-to-r from-green-500/20 via-yellow-400/20 to-pink-500/20 rounded-lg border border-white/10"
          >
            <div className="text-sm text-white/90 font-medium">
              🔥 Get friends to join and move up faster!
            </div>
            <div className="text-xs text-white/70 mt-1">
              Every 5 referrals = +10 positions
            </div>
          </motion.div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShareModal;