import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import wzrdLogo from '@/assets/wzrd-logo.png';

interface WZRDIntroAnimationProps {
  onComplete: () => void;
  allowSkip?: boolean;
}

const WZRDIntroAnimation: React.FC<WZRDIntroAnimationProps> = ({ 
  onComplete, 
  allowSkip = true 
}) => {
  const [phase, setPhase] = useState(0);
  const [isSkipping, setIsSkipping] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  // Enhanced matrix rain effect with depth layers and varying speeds
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
    
    // Create multiple depth layers with different speeds
    const layers = [
      { drops: Array(columns).fill(1), speed: 0.5, opacity: 0.3, size: 12 },
      { drops: Array(columns).fill(1), speed: 1, opacity: 0.6, size: 14 },
      { drops: Array(columns).fill(1), speed: 1.5, opacity: 1, size: 16 },
    ];

    let frameCount = 0;

    const draw = () => {
      frameCount++;
      
      // Subtle trail effect
      ctx.fillStyle = 'rgba(10, 10, 15, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw each layer
      layers.forEach((layer, layerIndex) => {
        ctx.font = `${layer.size}px monospace`;

        for (let i = 0; i < layer.drops.length; i++) {
          // Vary speed per column
          if (frameCount % Math.ceil(3 - layer.speed) !== 0) continue;
          
          const char = chars[Math.floor(Math.random() * chars.length)];
          const x = i * fontSize;
          const y = layer.drops[i] * fontSize;

          // Add glow effect for some characters (more glow for front layer)
          if (Math.random() > (0.98 - layerIndex * 0.01)) {
            ctx.shadowBlur = 20 + layerIndex * 5;
            ctx.shadowColor = '#3B82F6';
            ctx.fillStyle = '#60A5FA';
          } else {
            ctx.shadowBlur = layerIndex * 3;
            ctx.shadowColor = 'transparent';
            ctx.fillStyle = `rgba(59, 130, 246, ${layer.opacity * (0.4 + Math.random() * 0.6)})`;
          }

          ctx.fillText(char, x, y);

          if (y > canvas.height && Math.random() > 0.975) {
            layer.drops[i] = 0;
          }
          layer.drops[i] += layer.speed;
        }
      });

      // Scan-line effect overlay
      ctx.fillStyle = 'rgba(59, 130, 246, 0.02)';
      for (let i = 0; i < canvas.height; i += 4) {
        ctx.fillRect(0, i, canvas.width, 1);
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

  // Phase progression with improved cinematic pacing
  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 2000),   // Show manifesto text - let matrix breathe
      setTimeout(() => setPhase(2), 5000),   // Show logo reveal - manifesto impact
      setTimeout(() => setPhase(3), 7500),   // Final reveal - logo drama
      setTimeout(() => onComplete(), 9500),  // Complete - final reveal
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const handleSkip = () => {
    if (allowSkip && !isSkipping) {
      setIsSkipping(true);
      // Elegant fade-out instead of abrupt cut
      setTimeout(() => onComplete(), 800);
    }
  };

  // Updated manifesto lines with Identity at end for emphasis
  const manifestoLines = [
    "Privacy.",
    "Identity.",
    "IP.",
    "Self-Sovereign.",
    "Identity." // Callback emphasis
  ];

  return (
    <AnimatePresence>
      {!isSkipping ? (
        <motion.div
          className="fixed inset-0 z-[100] bg-background overflow-hidden cursor-pointer"
          onClick={handleSkip}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Matrix Canvas */}
          <canvas
            ref={canvasRef}
            className={`absolute inset-0 transition-opacity duration-1000 ${phase > 1 ? 'opacity-20' : 'opacity-100'}`}
          />

          {/* Scan-line overlay effect */}
          <div 
            className={`absolute inset-0 pointer-events-none transition-opacity duration-1000 ${phase > 1 ? 'opacity-0' : 'opacity-30'}`}
            style={{
              background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59, 130, 246, 0.03) 2px, rgba(59, 130, 246, 0.03) 4px)',
            }}
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
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="text-center space-y-4">
                  {manifestoLines.map((line, i) => {
                    const isLastIdentity = i === manifestoLines.length - 1;
                    return (
                      <motion.div
                        key={`${line}-${i}`}
                        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ 
                          delay: i * 0.25, 
                          duration: 0.7,
                          ease: [0.16, 1, 0.3, 1]
                        }}
                        className="font-bold tracking-tight text-4xl md:text-6xl"
                        style={{
                          background: isLastIdentity 
                            ? 'linear-gradient(135deg, #60A5FA 0%, #93C5FD 50%, #FFFFFF 100%)'
                            : 'linear-gradient(135deg, #3B82F6 0%, #60A5FA 50%, #93C5FD 100%)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                          textShadow: isLastIdentity 
                            ? '0 0 100px rgba(96, 165, 250, 0.8)'
                            : '0 0 80px rgba(59, 130, 246, 0.5)',
                          filter: isLastIdentity ? 'drop-shadow(0 0 30px rgba(96, 165, 250, 0.6))' : 'none'
                        }}
                      >
                        {line}
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Phase 2: Logo Reveal with 3D perspective zoom */}
          <AnimatePresence>
            {phase >= 2 && (
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center perspective-1000"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Particle burst effect */}
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-primary/60"
                    initial={{ 
                      x: 0, 
                      y: 0, 
                      scale: 0,
                      opacity: 1 
                    }}
                    animate={{ 
                      x: (Math.random() - 0.5) * 600, 
                      y: (Math.random() - 0.5) * 600, 
                      scale: [0, 1.5, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 1.5, 
                      delay: 0.1 + i * 0.02,
                      ease: [0.16, 1, 0.3, 1]
                    }}
                  />
                ))}

                {/* Glowing orb behind logo */}
                <motion.div
                  className="absolute w-64 h-64 md:w-96 md:h-96 rounded-full"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1.4, 1],
                    opacity: [0, 0.8, 0.4]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  style={{
                    background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, rgba(59, 130, 246, 0.2) 40%, transparent 70%)',
                    filter: 'blur(40px)'
                  }}
                />

                {/* WZRD.tech logo with 3D perspective zoom */}
                <motion.div
                  initial={{ 
                    scale: 0.3, 
                    opacity: 0, 
                    filter: 'blur(20px)',
                    rotateX: 45,
                    z: -500
                  }}
                  animate={{ 
                    scale: 1, 
                    opacity: 1, 
                    filter: 'blur(0px)',
                    rotateX: 0,
                    z: 0
                  }}
                  transition={{ 
                    delay: 0.2,
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="relative z-10"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <motion.img
                    src={wzrdLogo}
                    alt="WZRD.tech"
                    className="w-40 md:w-56 lg:w-72 h-auto"
                    style={{
                      filter: 'drop-shadow(0 0 60px rgba(59,130,246,0.7)) drop-shadow(0 0 100px rgba(59,130,246,0.4))'
                    }}
                    animate={{
                      filter: [
                        'drop-shadow(0 0 60px rgba(59,130,246,0.7)) drop-shadow(0 0 100px rgba(59,130,246,0.4))',
                        'drop-shadow(0 0 80px rgba(59,130,246,0.9)) drop-shadow(0 0 120px rgba(59,130,246,0.6))',
                        'drop-shadow(0 0 60px rgba(59,130,246,0.7)) drop-shadow(0 0 100px rgba(59,130,246,0.4))'
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut'
                    }}
                  />
                </motion.div>

                {/* Tagline */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="mt-10 text-xl md:text-2xl text-muted-foreground font-light tracking-wide"
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
              transition={{ delay: 2.5, duration: 0.5 }}
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
      ) : (
        <motion.div
          className="fixed inset-0 z-[100] bg-background"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
      )}
    </AnimatePresence>
  );
};

export default WZRDIntroAnimation;
