import React, { useEffect, useRef } from 'react';

interface ASCIIArtRendererProps {
  asciiArt: string;
  startTime: number;
  duration: number;
  isActive: boolean;
}

const ASCIIArtRenderer: React.FC<ASCIIArtRendererProps> = ({ 
  asciiArt, 
  startTime, 
  duration,
  isActive 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const asciiLines = asciiArt.split('\n');
    const fontSize = window.innerWidth < 768 ? 3 : 5;
    const charWidth = fontSize * 0.6;

    const draw = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px "Courier New", monospace`;

      const startX = Math.max(50, (canvas.width - (140 * charWidth)) / 2);
      const startY = Math.max(50, (canvas.height - (asciiLines.length * fontSize)) / 2);

      const revealProgress = (Date.now() - startTime) / duration;

      asciiLines.forEach((line, y) => {
        for (let x = 0; x < line.length; x++) {
          const char = line[x];
          if (char !== ' ') {
            const charProgress = (y / asciiLines.length + x / line.length) / 2;

            if (charProgress < revealProgress) {
              const brightness = 180 + Math.sin(Date.now() / 150 + x + y) * 75;
              ctx.fillStyle = `rgb(0, ${brightness}, 0)`;
              ctx.fillText(char, startX + x * charWidth, startY + y * fontSize);
            }
          }
        }
      });

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => resizeCanvas();
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [asciiArt, startTime, duration, isActive]);

  if (!isActive) return null;

  return (
    <canvas
      ref={canvasRef}
      className="ascii-art-container"
      style={{ position: 'fixed', inset: 0, zIndex: 5 }}
    />
  );
};

export default ASCIIArtRenderer;
