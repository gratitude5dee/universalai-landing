import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Music, Ticket, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FestivalCTAProps {
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}

const FestivalCTA: React.FC<FestivalCTAProps> = ({ onClick, disabled, loading }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Floating music note particles
  const musicNotes = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute pointer-events-none"
      initial={{ 
        x: 0, 
        y: 0, 
        opacity: 0,
        scale: 0
      }}
      animate={isHovered ? {
        x: (Math.random() - 0.5) * 120,
        y: (Math.random() - 0.5) * 80,
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        rotate: 360
      } : {}}
      transition={{
        duration: 2,
        delay: i * 0.2,
        repeat: isHovered ? Infinity : 0,
        repeatDelay: 1
      }}
    >
      <Music className="w-4 h-4 text-yellow-400" />
    </motion.div>
  ));

  // Sound wave ripples
  const soundWaves = Array.from({ length: 3 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute inset-0 border-2 border-green-400/30 rounded-full pointer-events-none"
      animate={isHovered ? {
        scale: [1, 2, 3],
        opacity: [0.6, 0.3, 0]
      } : { scale: 1, opacity: 0 }}
      transition={{
        duration: 2,
        delay: i * 0.4,
        repeat: isHovered ? Infinity : 0,
        ease: "easeOut"
      }}
    />
  ));

  return (
    <div className="relative inline-block">
      {/* Stage Light Effects */}
      <motion.div
        className="absolute -inset-20 pointer-events-none"
        animate={isHovered ? {
          background: [
            "conic-gradient(from 0deg, transparent, rgba(16, 185, 129, 0.3), transparent)",
            "conic-gradient(from 120deg, transparent, rgba(251, 191, 36, 0.3), transparent)",
            "conic-gradient(from 240deg, transparent, rgba(236, 72, 153, 0.3), transparent)"
          ]
        } : {}}
        transition={{ duration: 3, repeat: isHovered ? Infinity : 0 }}
      />

      {/* Sound Wave Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        {soundWaves}
      </div>

      {/* Music Note Particles Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        {musicNotes}
      </div>

      {/* Main Button */}
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={onClick}
          disabled={disabled || loading}
          className={`
            relative overflow-hidden px-8 py-4 text-lg font-bold
            bg-gradient-to-r from-green-500 via-yellow-400 to-pink-500
            hover:from-green-400 hover:via-yellow-300 hover:to-pink-400
            text-black border-0 rounded-full festival-shimmer
            transition-all duration-300 ease-out
            ${isHovered ? 'shadow-2xl shadow-green-500/50' : 'shadow-lg shadow-green-500/25'}
          `}
        >
          {/* Ticket Shape Overlay (appears on hover) */}
          <motion.div
            className="absolute inset-0 bg-white/20 backdrop-blur-sm border-2 border-dashed border-black/30"
            initial={{ 
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" 
            }}
            animate={isHovered ? {
              clipPath: "polygon(10% 0, 90% 0, 95% 50%, 90% 100%, 10% 100%, 5% 50%)"
            } : {
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
            }}
            transition={{ duration: 0.3 }}
          />

          {/* Button Content */}
          <motion.div
            className="relative z-10 flex items-center gap-3"
            animate={isHovered ? {
              filter: "drop-shadow(0 0 8px rgba(0,0,0,0.8))"
            } : {}}
          >
            <motion.div
              animate={isHovered ? { rotate: [0, -15, 15, 0] } : {}}
              transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
            >
              {isHovered ? (
                <Ticket className="w-6 h-6" />
              ) : (
                <Sparkles className="w-6 h-6" />
              )}
            </motion.div>

            <motion.span
              animate={isHovered ? {
                letterSpacing: "0.1em"
              } : {
                letterSpacing: "0em"
              }}
              transition={{ duration: 0.3 }}
            >
              {loading ? 'Joining...' : isHovered ? 'ADMIT ONE' : 'Join Waitlist'}
            </motion.span>

            <motion.div
              animate={isHovered ? { rotate: [0, 15, -15, 0] } : {}}
              transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0 }}
            >
              {isHovered ? (
                <Ticket className="w-6 h-6" />
              ) : (
                <Sparkles className="w-6 h-6" />
              )}
            </motion.div>
          </motion.div>

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: [-100, 300]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut"
            }}
          />
        </Button>
      </motion.div>
    </div>
  );
};

export default FestivalCTA;