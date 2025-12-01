import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const headlines = [
  'Powered by a creator token...',
  'Powered by a human token...',
  'Powered by sovereign creativity...',
];

// Floating particle component
const FloatingParticle = ({ delay, duration, x, y }: { delay: number; duration: number; x: string; y: string }) => (
  <motion.div
    className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-accent-amber to-accent-rose opacity-60"
    style={{ left: x, top: y }}
    animate={{
      y: [0, -100, 0],
      opacity: [0.3, 0.8, 0.3],
      scale: [1, 1.5, 1],
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: 'easeInOut',
    }}
  />
);

const TokenSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-40 overflow-hidden">
      {/* Enhanced dreamlike background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent-amber/10 via-background to-background-purple" />
        
        {/* Animated gradient mesh */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, hsl(38 100% 64% / 0.15), transparent 50%),
              radial-gradient(circle at 80% 60%, hsl(340 100% 71% / 0.15), transparent 50%),
              radial-gradient(circle at 50% 80%, hsl(262 83% 58% / 0.1), transparent 50%)
            `,
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        {/* Large ethereal orbs */}
        <motion.div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(38 100% 64% / 0.25), transparent 60%)',
            filter: 'blur(100px)',
          }}
          animate={{
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        
        <motion.div
          className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(340 100% 71% / 0.25), transparent 60%)',
            filter: 'blur(100px)',
          }}
          animate={{
            y: [0, -60, 0],
            scale: [1, 1.4, 1],
            x: [20, -20, 20],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
        
        <motion.div
          className="absolute top-1/4 left-1/2 w-[600px] h-[600px] rounded-full -translate-x-1/2"
          style={{
            background: 'radial-gradient(circle, hsl(262 83% 58% / 0.2), transparent 60%)',
            filter: 'blur(120px)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Floating particles */}
        <FloatingParticle delay={0} duration={8} x="10%" y="20%" />
        <FloatingParticle delay={1} duration={10} x="85%" y="30%" />
        <FloatingParticle delay={2} duration={9} x="25%" y="60%" />
        <FloatingParticle delay={1.5} duration={11} x="70%" y="70%" />
        <FloatingParticle delay={0.5} duration={12} x="50%" y="40%" />
        <FloatingParticle delay={2.5} duration={9.5} x="90%" y="80%" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Decorative sparkles */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              <Sparkles className="w-12 h-12 text-accent-amber" />
              <motion.div
                className="absolute inset-0 blur-xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                style={{
                  background: 'radial-gradient(circle, hsl(38 100% 64% / 0.6), transparent)',
                }}
              />
            </motion.div>
          </motion.div>

          {/* Animated cycling headline */}
          <div className="min-h-[200px] flex items-center justify-center mb-8">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentIndex}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ 
                  duration: 0.7,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-playfair italic font-bold tracking-tight px-4"
              >
                <motion.span
                  className="inline-block bg-gradient-to-r from-accent-amber via-accent-rose to-primary bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  style={{
                    backgroundSize: '200% 200%',
                  }}
                >
                  {headlines[currentIndex]}
                </motion.span>
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Enhanced tagline with staggered animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="space-y-4"
          >
            <motion.p
              className="text-2xl md:text-3xl text-foreground/90 font-medium"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              Where human creativity flourishes
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
            >
              in the age of artificial intelligence
            </motion.p>
          </motion.div>

          {/* Animated line divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 h-px max-w-md mx-auto bg-gradient-to-r from-transparent via-primary to-transparent"
          />

          {/* Token stats preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2 }}
            className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            {[
              { value: '$UNAI', label: 'Token Symbol' },
              { value: '100M', label: 'Total Supply' },
              { value: 'Fair', label: 'Launch Type' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="glass-strong border border-primary/20 rounded-2xl p-6 backdrop-blur-xl">
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle at center, hsl(262 83% 58% / 0.1), transparent 70%)',
                    }}
                  />
                  <div className="relative z-10">
                    <div className="text-2xl font-bold text-accent-amber mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TokenSection;
