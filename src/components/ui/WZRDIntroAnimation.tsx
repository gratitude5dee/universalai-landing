import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface WZRDIntroAnimationProps {
  onComplete: () => void;
  allowSkip?: boolean;
}

const WZRDIntroAnimation: React.FC<WZRDIntroAnimationProps> = ({ 
  onComplete, 
  allowSkip = true 
}) => {
  const [phase, setPhase] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  // Matrix rain effect with blue theme
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || phase !== 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const chars = 'WZRD5DEE01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Add glow effect for some characters
        if (Math.random() > 0.98) {
          ctx.shadowBlur = 20;
          ctx.shadowColor = '#3B82F6';
          ctx.fillStyle = '#60A5FA';
        } else {
          ctx.shadowBlur = 0;
          ctx.fillStyle = `rgba(59, 130, 246, ${0.3 + Math.random() * 0.7})`;
        }

        ctx.fillText(char, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [phase]);

  // Phase progression
  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 1500),   // Show manifesto text
      setTimeout(() => setPhase(2), 4000),   // Show logo reveal
      setTimeout(() => setPhase(3), 6500),   // Final reveal
      setTimeout(() => onComplete(), 8000),  // Complete
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const handleSkip = () => {
    if (allowSkip) {
      onComplete();
    }
  };

  const manifestoLines = [
    "Privacy.",
    "Identity.",
    "IP.",
    "Self-Sovereign.",
    "Longevity."
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-background overflow-hidden cursor-pointer"
        onClick={handleSkip}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Matrix Canvas */}
        <canvas
          ref={canvasRef}
          className={`absolute inset-0 transition-opacity duration-1000 ${phase > 1 ? 'opacity-20' : 'opacity-100'}`}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background" />

        {/* Phase 1: Manifesto Text */}
        <AnimatePresence>
          {phase >= 1 && phase < 3 && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center space-y-4">
                {manifestoLines.map((line, i) => (
                  <motion.div
                    key={line}
                    initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ 
                      delay: i * 0.2, 
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                    className="text-4xl md:text-6xl font-bold tracking-tight"
                    style={{
                      background: 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 50%, #93C5FD 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 0 80px rgba(59, 130, 246, 0.5)'
                    }}
                  >
                    {line}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase 2: Logo Reveal */}
        <AnimatePresence>
          {phase >= 2 && (
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Glowing orb behind logo */}
              <motion.div
                className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1.2, 1],
                  opacity: [0, 0.8, 0.4]
                }}
                transition={{ 
                  duration: 1.5, 
                  ease: [0.16, 1, 0.3, 1]
                }}
                style={{
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)',
                  filter: 'blur(40px)'
                }}
              />

              {/* WZRD.tech text logo */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0, filter: 'blur(20px)' }}
                animate={{ 
                  scale: 1, 
                  opacity: 1, 
                  filter: 'blur(0px)'
                }}
                transition={{ 
                  delay: 0.3,
                  duration: 1,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="relative z-10"
              >
                <h1 
                  className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    background: 'linear-gradient(135deg, #E2E8F0 0%, #3B82F6 50%, #1E3A8A 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 0 60px rgba(59, 130, 246, 0.6))'
                  }}
                >
                  WZRD.tech
                </h1>
              </motion.div>

              {/* Tagline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-8 text-xl md:text-2xl text-muted-foreground font-light tracking-wide"
              >
                The Creator-Agent Operating System
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Skip indicator */}
        {allowSkip && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <span className="text-sm text-muted-foreground/60 tracking-wider uppercase">
              Click anywhere to skip
            </span>
          </motion.div>
        )}

        {/* Animated lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                width: '100%',
              }}
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: '100%', opacity: [0, 1, 0] }}
              transition={{
                duration: 3,
                delay: i * 0.5,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WZRDIntroAnimation;
