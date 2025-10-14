import React, { useEffect, useRef } from 'react';

interface MatrixCanvasBackgroundProps {
  phase: number;
  uniqueChars: string[];
}

const MatrixCanvasBackground: React.FC<MatrixCanvasBackgroundProps> = ({ phase, uniqueChars }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const dropsRef = useRef<number[]>([]);
  const speedsRef = useRef<number[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const fontSize = 14;
      const charWidth = fontSize * 0.6;
      const columns = Math.floor(canvas.width / charWidth);

      dropsRef.current = new Array(columns).fill(1);
      speedsRef.current = new Array(columns).fill(0).map(() => 0.5 + Math.random() * 1);
    };

    resizeCanvas();

    const draw = () => {
      if (!ctx || !canvas) return;

      const fontSize = 14;
      const charWidth = fontSize * 0.6;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px "Courier New", monospace`;

      if (phase === 0) {
        // Matrix rain phase
        for (let i = 0; i < dropsRef.current.length; i++) {
          const char = uniqueChars[Math.floor(Math.random() * uniqueChars.length)];
          
          const brightness = 150 + Math.random() * 105;
          ctx.fillStyle = `rgb(0, ${brightness}, 0)`;
          
          ctx.fillText(char, i * charWidth, dropsRef.current[i] * fontSize);

          if (dropsRef.current[i] * fontSize > canvas.height && Math.random() > 0.975) {
            dropsRef.current[i] = 0;
          }

          dropsRef.current[i] += speedsRef.current[i];
        }
      }

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
  }, [phase, uniqueChars]);

  return (
    <canvas
      ref={canvasRef}
      className={`matrix-canvas ${phase > 0 ? 'fade-out' : ''}`}
    />
  );
};

export default MatrixCanvasBackground;
