import React, { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface FlickeringGridProps {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number;
  height?: number;
  maxOpacity?: number;
  className?: string;
}

export const FlickeringGrid: React.FC<FlickeringGridProps> = ({
  squareSize = 4,
  gridGap = 6,
  flickerChance = 0.3,
  color = 'rgb(147, 51, 234)', // purple-600
  width,
  height,
  maxOpacity = 0.3,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const animationFrameRef = useRef<number>();
  const isInViewRef = useRef(true);

  // Parse color to RGBA
  const parseColor = useCallback((colorString: string): [number, number, number] => {
    // Handle rgb/rgba
    const rgbMatch = colorString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (rgbMatch) {
      return [parseInt(rgbMatch[1]), parseInt(rgbMatch[2]), parseInt(rgbMatch[3])];
    }

    // Handle hex
    const hexMatch = colorString.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (hexMatch) {
      return [
        parseInt(hexMatch[1], 16),
        parseInt(hexMatch[2], 16),
        parseInt(hexMatch[3], 16),
      ];
    }

    // Default to purple
    return [147, 51, 234];
  }, []);

  // Handle resize with debounce
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        setDimensions({
          width: width || clientWidth,
          height: height || clientHeight,
        });
      }
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [width, height]);

  // Handle intersection observer to pause when not visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInViewRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Animation loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = dimensions.width * dpr;
    canvas.height = dimensions.height * dpr;
    canvas.style.width = `${dimensions.width}px`;
    canvas.style.height = `${dimensions.height}px`;
    ctx.scale(dpr, dpr);

    const cols = Math.ceil(dimensions.width / (squareSize + gridGap));
    const rows = Math.ceil(dimensions.height / (squareSize + gridGap));
    const squareCount = cols * rows;

    const opacities = new Float32Array(squareCount);
    for (let i = 0; i < squareCount; i++) {
      opacities[i] = Math.random() * maxOpacity;
    }

    const [r, g, b] = parseColor(color);

    const animate = () => {
      if (!isInViewRef.current) {
        animationFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      for (let i = 0; i < squareCount; i++) {
        if (Math.random() < flickerChance) {
          opacities[i] = Math.random() * maxOpacity;
        }

        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = col * (squareSize + gridGap);
        const y = row * (squareSize + gridGap);

        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacities[i]})`;
        ctx.fillRect(x, y, squareSize, squareSize);
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [dimensions, squareSize, gridGap, flickerChance, color, maxOpacity, parseColor]);

  return (
    <div ref={containerRef} className={cn('relative w-full h-full', className)}>
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
};
