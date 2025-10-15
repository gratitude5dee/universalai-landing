import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import universalAILogo from '@/assets/universal-ai-logo.png';

interface SplineLogoOverlayProps {
  isSplineLoaded: boolean;
}

export default function SplineLogoOverlay({ isSplineLoaded }: SplineLogoOverlayProps) {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    if (isSplineLoaded) {
      // Start showing logo after Spline loads
      setShowLogo(true);
      
      // Hide logo after 2.5 seconds
      const timer = setTimeout(() => {
        setShowLogo(false);
      }, 2500);
      
      return () => clearTimeout(timer);
    }
  }, [isSplineLoaded]);

  return (
    <AnimatePresence>
      {showLogo && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
          transition={{ 
            duration: 1.5, 
            ease: [0.16, 1, 0.3, 1] // Custom easing curve (Apple-style)
          }}
          className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
        >
          <div className="relative flex flex-col items-center gap-4">
            <motion.img 
              src={universalAILogo} 
              alt="Universal AI" 
              className="w-24 h-24 md:w-32 md:h-32 drop-shadow-2xl"
              animate={{
                filter: [
                  'drop-shadow(0 0 20px rgba(147, 51, 234, 0.5))',
                  'drop-shadow(0 0 40px rgba(147, 51, 234, 0.8))',
                  'drop-shadow(0 0 20px rgba(147, 51, 234, 0.5))',
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <motion.h1 
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              UniversalAI
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
