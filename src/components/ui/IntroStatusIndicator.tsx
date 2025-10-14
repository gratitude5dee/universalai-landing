import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroStatusIndicatorProps {
  message: string;
}

const IntroStatusIndicator: React.FC<IntroStatusIndicatorProps> = ({ message }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={message}
        className="intro-status-indicator"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {message}
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroStatusIndicator;
