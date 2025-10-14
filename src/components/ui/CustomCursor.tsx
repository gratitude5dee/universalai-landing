import { useEffect, useRef } from 'react';
import { useMousePosition } from '@/hooks/useMousePosition';

export default function CustomCursor() {
  const mousePosition = useMousePosition();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trailPointsRef = useRef<{ x: number; y: number; opacity: number }[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation loop
    let animationFrameId: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new point to trail
      if (mousePosition.x > 0 || mousePosition.y > 0) {
        trailPointsRef.current.push({
          x: mousePosition.x,
          y: mousePosition.y,
          opacity: 0.8
        });
      }

      // Update and draw trail
      trailPointsRef.current = trailPointsRef.current
        .map(point => ({
          ...point,
          opacity: point.opacity - 0.02
        }))
        .filter(point => point.opacity > 0);

      // Draw gradient trail
      for (let i = 0; i < trailPointsRef.current.length; i++) {
        const point = trailPointsRef.current[i];
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, 20
        );
        
        gradient.addColorStop(0, `rgba(147, 51, 234, ${point.opacity * 0.4})`);
        gradient.addColorStop(0.5, `rgba(168, 85, 247, ${point.opacity * 0.2})`);
        gradient.addColorStop(1, `rgba(147, 51, 234, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(point.x - 20, point.y - 20, 40, 40);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mousePosition]);

  // Don't show on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
