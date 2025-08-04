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

    // Matrix characters
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = Array(columns).fill(1);

    // Matrix animation
    const matrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = 'hsl(var(--primary))';
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
              background: 'linear-gradient(135deg, hsl(var(--background)), hsl(var(--background-secondary)))'
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
          <div className="absolute inset-0 pointer-events-none opacity-10">
            <div className="h-full w-full bg-scanlines animate-scanlines"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};