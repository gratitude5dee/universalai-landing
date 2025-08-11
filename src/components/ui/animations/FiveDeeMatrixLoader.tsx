import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FiveDeeMatrixLoaderProps {
  isVisible: boolean;
  onComplete: () => void;
}

export const FiveDeeMatrixLoader: React.FC<FiveDeeMatrixLoaderProps> = ({
  isVisible,
  onComplete
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLogo, setShowLogo] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    if (!isVisible || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters (inspired by reference)
    const chars = '01$*+-.=_/\\|<>abcdefDEE';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    // additional sparkles coordinates
    const sparkles = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      s: Math.random() * 1.2 + 0.3,
    }));

    // Matrix animation
    const matrix = () => {
      // Trail fade
      ctx.fillStyle = 'rgba(10, 10, 15, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Matrix glyph color from CSS var
      const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent-primary')?.trim() || '#00ff88';
      ctx.fillStyle = accent;
      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    // Start matrix animation
    const matrixInterval = setInterval(matrix, 35);

    // Subtle sparkle twinkle
    const sparkleInterval = setInterval(() => {
      const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent-primary')?.trim() || '#00ff88';
      ctx.fillStyle = accent + '80';
      sparkles.forEach((p, i) => {
        const char = ['*', '+', '.', '$'][i % 4];
        ctx.fillText(char, p.x, p.y);
        p.y += (Math.sin(i + Date.now() * 0.001) + 1) * 0.5;
        if (p.y > canvas.height) p.y = 0;
      });
    }, 120);


    // Show logo after 1.5 seconds
    const logoTimer = setTimeout(() => {
      setShowLogo(true);
      
      // Use CSS animations instead of anime.js for simpler implementation
      setTimeout(() => {
        setAnimationComplete(true);
        onComplete();
      }, 3000);
    }, 1500);

    return () => {
      clearInterval(matrixInterval);
      clearInterval(sparkleInterval);
      clearTimeout(logoTimer);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [isVisible, onComplete]);

  if (!isVisible && animationComplete) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          ref={containerRef}
          className="matrix-loader-container fixed inset-0 z-50 bg-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <canvas
            ref={canvasRef}
            className="absolute inset-0"
            style={{ 
              background: 'radial-gradient(900px 600px at 50% 40%, rgba(139, 92, 246, 0.15), transparent 60%), linear-gradient(180deg, #0a0a0f 0%, #080812 100%)'
            }}
          />
          
          {/* Logo overlay */}
          {showLogo && (
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0, opacity: 0, rotate: 180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              transition={{ 
                duration: 2,
                ease: [0.25, 0.46, 0.45, 0.94],
                scale: { type: "spring", stiffness: 100 }
              }}
            >
              <div className="five-dee-logo text-center">
                <div className="text-8xl font-bold text-gradient-hero mb-4">
                  5DEE
                </div>
                <div className="text-2xl text-muted-foreground font-mono tracking-wider">
                  STUDIOS
                </div>
                <div className="mt-8">
                  <div className="w-16 h-16 mx-auto border-2 border-primary/30 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Scanlines effect */}
          <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay">
            <div className="h-full w-full bg-[repeating-linear-gradient(0deg,rgba(0,0,0,0.2)_0px,rgba(0,0,0,0.2)_1px,transparent_2px,transparent_3px)]"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};