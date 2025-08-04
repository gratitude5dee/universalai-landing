import React from 'react';
import { motion } from 'framer-motion';

interface LinearLoaderProps {
  progress?: number;
  showProgress?: boolean;
  className?: string;
}

export const LinearLoader: React.FC<LinearLoaderProps> = ({
  progress = 0,
  showProgress = false,
  className = ""
}) => {
  return (
    <div className={`w-full ${className}`}>
      {/* Progress bar */}
      <div className="relative h-1 bg-background-secondary rounded-full overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-primary rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: 0.3,
            ease: "easeOut"
          }}
        />
        
        {/* Glow effect */}
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-primary rounded-full opacity-50 blur-sm"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration: 0.3,
            ease: "easeOut"
          }}
        />
      </div>
      
      {/* Progress text */}
      {showProgress && (
        <motion.div
          className="flex justify-between items-center mt-2 text-xs text-muted-foreground font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span>Loading...</span>
          <span>{Math.round(progress)}%</span>
        </motion.div>
      )}
    </div>
  );
};