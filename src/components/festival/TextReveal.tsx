import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

const TextReveal: React.FC<TextRevealProps> = ({ text, className = '', delay = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const splitText = text.split(' ');

  return (
    <div ref={containerRef} className={`overflow-hidden ${className}`}>
      <div className="flex flex-wrap justify-center">
        {splitText.map((word, index) => (
          <motion.span
            key={index}
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: delay + index * 0.1,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="inline-block mr-2 mb-1"
            style={{ overflow: 'hidden' }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default TextReveal;