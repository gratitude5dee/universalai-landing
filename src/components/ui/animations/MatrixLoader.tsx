import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MatrixChar {
  char: string;
  x: number;
  y: number;
  speed: number;
  alpha: number;
  isBright: boolean;
  trail: { y: number; alpha: number; char: string }[];
}

interface MatrixLoaderProps {
  isVisible: boolean;
  onComplete: () => void;
  showFYI?: boolean;
}

export const MatrixLoader: React.FC<MatrixLoaderProps> = ({ 
  isVisible, 
  onComplete, 
  showFYI = true 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [showText, setShowText] = useState(false);
  const [chars, setChars] = useState<MatrixChar[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Matrix characters including katakana, Latin, and numbers
  const matrixChars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?FYI';
  
  // FYI formation coordinates (relative to canvas center)
  const fyiPattern = [
    // F
    [-150, -80], [-150, -60], [-150, -40], [-150, -20], [-150, 0],
    [-130, -80], [-110, -80], [-130, -40], [-110, -40],
    
    // Y
    [-50, -80], [-30, -60], [-10, -40], [-30, -20], [-30, 0],
    [10, -80], [-10, -60],
    
    // I
    [50, -80], [70, -80], [90, -80], [70, -60], [70, -40], 
    [70, -20], [50, 0], [70, 0], [90, 0]
  ];

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (!isVisible || !canvasRef.current || dimensions.width === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const fontSize = Math.max(12, Math.min(16, dimensions.width / 80));
    const columns = Math.floor(dimensions.width / fontSize);
    
    // Initialize falling characters
    const initialChars: MatrixChar[] = [];
    for (let i = 0; i < columns; i++) {
      if (Math.random() > 0.3) continue; // Sparse initial distribution
      
      initialChars.push({
        char: matrixChars[Math.floor(Math.random() * (matrixChars.length - 3))], // Exclude 'FYI'
        x: i * fontSize,
        y: Math.random() * -500,
        speed: Math.random() * 3 + 2,
        alpha: Math.random() * 0.5 + 0.5,
        isBright: Math.random() > 0.97,
        trail: []
      });
    }
    setChars(initialChars);

    let startTime = Date.now();
    let fyiFormed = false;

    const animate = () => {
      if (!ctx || !canvas) return;

      const elapsed = Date.now() - startTime;
      
      // Clear canvas with fade effect
      ctx.fillStyle = 'rgba(5, 4, 10, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;
      ctx.textAlign = 'center';

      setChars(prevChars => {
        const newChars = [...prevChars];

        // Add new falling characters occasionally
        if (Math.random() > 0.85 && elapsed < 4000) {
          const col = Math.floor(Math.random() * columns);
          newChars.push({
            char: matrixChars[Math.floor(Math.random() * (matrixChars.length - 3))],
            x: col * fontSize,
            y: -fontSize,
            speed: Math.random() * 3 + 2,
            alpha: Math.random() * 0.5 + 0.5,
            isBright: Math.random() > 0.97,
            trail: []
          });
        }

        // Update and draw falling characters
        newChars.forEach((char, index) => {
          // Update trail
          if (char.trail.length > 8) {
            char.trail.shift();
          }
          char.trail.push({ y: char.y, alpha: char.alpha, char: char.char });

          // Draw trail
          char.trail.forEach((trailChar, trailIndex) => {
            const trailAlpha = (trailIndex / char.trail.length) * char.alpha * 0.3;
            ctx.fillStyle = `rgba(0, 255, 100, ${trailAlpha})`;
            ctx.fillText(trailChar.char, char.x + fontSize/2, trailChar.y);
          });

          // Draw main character
          if (char.isBright) {
            ctx.fillStyle = `rgba(255, 255, 255, ${char.alpha})`;
            ctx.shadowColor = 'rgba(0, 255, 100, 0.8)';
            ctx.shadowBlur = 10;
          } else {
            ctx.fillStyle = `rgba(0, 255, 100, ${char.alpha})`;
            ctx.shadowColor = 'transparent';
            ctx.shadowBlur = 0;
          }
          
          ctx.fillText(char.char, char.x + fontSize/2, char.y);

          // Update position
          char.y += char.speed;

          // Glitch effect occasionally
          if (Math.random() > 0.98) {
            char.char = matrixChars[Math.floor(Math.random() * (matrixChars.length - 3))];
          }

          // Remove characters that have fallen off screen
          if (char.y > canvas.height + 100) {
            newChars.splice(index, 1);
          }
        });

        return newChars;
      });

      // Start forming FYI after 2 seconds
      if (elapsed > 2000 && !fyiFormed && showFYI) {
        fyiFormed = true;
        setShowText(true);

        // Create FYI characters
        const fyiChars: MatrixChar[] = fyiPattern.map((pos, index) => ({
          char: index < 13 ? 'F' : index < 20 ? 'Y' : 'I',
          x: canvas.width / 2 + pos[0],
          y: canvas.height / 2 + pos[1],
          speed: 0,
          alpha: 0,
          isBright: true,
          trail: []
        }));

        setChars(prev => [...prev, ...fyiChars]);

        // Animate FYI formation
        setTimeout(() => {
          setChars(prev => prev.map(char => {
            if (char.char === 'F' || char.char === 'Y' || char.char === 'I') {
              return { ...char, alpha: 1 };
            }
            return char;
          }));
        }, 500);

        // Complete after showing FYI
        setTimeout(() => {
          onComplete();
        }, 3000);
      }

      // If not showing FYI, complete after 4 seconds
      if (!showFYI && elapsed > 4000) {
        onComplete();
        return;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, dimensions, matrixChars, fyiPattern, onComplete, showFYI]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: '#05040a' }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ background: 'transparent' }}
        />
        
        {/* Cyberpunk overlay effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
        
        {/* Scanlines effect */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 100, 0.03) 2px, rgba(0, 255, 100, 0.03) 4px)',
            animation: 'scanlines 0.1s linear infinite'
          }}
        />

        {/* FYI Text with glitch effect */}
        {showText && showFYI && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-4"
                style={{
                  textShadow: '0 0 10px rgba(0, 255, 100, 0.8), 0 0 20px rgba(0, 255, 100, 0.5), 0 0 30px rgba(0, 255, 100, 0.3)',
                  fontFamily: 'JetBrains Mono, monospace'
                }}
              >
                FYI
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="text-lg md:text-xl text-green-400 font-mono"
              >
                Initializing MusicOS...
              </motion.p>
            </div>
          </motion.div>
        )}

        {/* Loading indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: showFYI ? 2 : 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex items-center space-x-2 text-green-400 font-mono text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Loading...</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// Add scanlines animation to index.css if not present
const style = document.createElement('style');
style.textContent = `
  @keyframes scanlines {
    0% { transform: translateY(0); }
    100% { transform: translateY(4px); }
  }
`;
document.head.appendChild(style);