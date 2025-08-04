import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MatrixLoader } from './MatrixLoader';

interface LoadingOverlayProps {
  isLoading: boolean;
  onLoadingComplete: () => void;
  minimumLoadTime?: number;
  showMatrixAnimation?: boolean;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isLoading,
  onLoadingComplete,
  minimumLoadTime = 3000,
  showMatrixAnimation = true
}) => {
  const [internalLoading, setInternalLoading] = useState(isLoading);
  const [minTimeElapsed, setMinTimeElapsed] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setInternalLoading(true);
      setMinTimeElapsed(false);
      
      // Ensure minimum loading time for better UX
      const timer = setTimeout(() => {
        setMinTimeElapsed(true);
      }, minimumLoadTime);

      return () => clearTimeout(timer);
    }
  }, [isLoading, minimumLoadTime]);

  useEffect(() => {
    if (!isLoading && minTimeElapsed && internalLoading) {
      // Small delay before hiding to ensure smooth transition
      const hideTimer = setTimeout(() => {
        setInternalLoading(false);
        onLoadingComplete();
      }, 500);

      return () => clearTimeout(hideTimer);
    }
  }, [isLoading, minTimeElapsed, internalLoading, onLoadingComplete]);

  const handleMatrixComplete = () => {
    if (minTimeElapsed && !isLoading) {
      setInternalLoading(false);
      onLoadingComplete();
    }
  };

  if (showMatrixAnimation) {
    return (
      <MatrixLoader
        isVisible={internalLoading}
        onComplete={handleMatrixComplete}
        showFYI={true}
      />
    );
  }

  // Fallback loading screen
  return (
    <AnimatePresence>
      {internalLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-background flex items-center justify-center"
        >
          <div className="text-center space-y-4">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-16 h-16 mx-auto"
            >
              <div className="w-full h-full border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground font-mono"
            >
              Initializing MusicOS...
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};