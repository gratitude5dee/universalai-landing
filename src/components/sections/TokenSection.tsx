import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const headlines = ['Powered by a creator token...', 'Powered by a human token...'];

const TokenSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-40 overflow-hidden">
      {/* Warm golden sunrise background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-amber/20 via-background to-background-purple" />
        
        {/* Ethereal figures effect - using gradient orbs */}
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(38 100% 64% / 0.3), transparent 60%)',
            filter: 'blur(80px)',
          }}
          animate={{
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(340 100% 71% / 0.3), transparent 60%)',
            filter: 'blur(80px)',
          }}
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        
        <motion.div
          className="absolute top-1/4 left-1/2 w-96 h-96 rounded-full -translate-x-1/2"
          style={{
            background: 'radial-gradient(circle, hsl(262 83% 58% / 0.2), transparent 60%)',
            filter: 'blur(100px)',
          }}
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Animated cycling headline */}
          <div className="h-32 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-5xl md:text-6xl lg:text-7xl font-playfair italic font-bold tracking-tight"
              >
                <span className="bg-gradient-to-r from-accent-amber via-accent-rose to-primary bg-clip-text text-transparent">
                  {headlines[currentIndex]}
                </span>
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Dreamlike, hopeful atmosphere tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-muted-foreground mt-8 max-w-2xl mx-auto"
          >
            Where human creativity flourishes in the age of artificial intelligence
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default TokenSection;
