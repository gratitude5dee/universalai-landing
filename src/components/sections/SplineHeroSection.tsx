import Spline from '@splinetool/react-spline';
import { useState, useEffect } from 'react';
import Spinner from '@/components/ui/spinner';

export default function SplineHeroSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Fallback timeout if Spline takes too long to load
  useEffect(() => {
    console.log('Spline component mounted, starting load...');
    const timeout = setTimeout(() => {
      if (isLoading) {
        console.log('Spline load timeout - showing error state');
        setIsLoading(false);
        setHasError(true);
      }
    }, 10000);

    return () => clearTimeout(timeout);
  }, [isLoading]);

  return (
    <section className="relative w-full h-screen overflow-hidden z-0 border-4 border-red-500">
      {/* Loading State */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
          <Spinner />
          <p className="ml-4 text-muted-foreground">Loading 3D Experience...</p>
        </div>
      )}

      {/* Error Fallback */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">3D Scene Unavailable</h3>
            <p className="text-muted-foreground">Please scroll down to continue</p>
          </div>
        </div>
      )}

      {/* Spline Scene */}
      {!hasError && (
        <Spline
          scene="https://prod.spline.design/CUGpKyxn7cmAWJ-l/scene.splinecode"
          onLoad={() => {
            console.log('Spline loaded successfully');
            setIsLoading(false);
          }}
          onError={(error) => {
            console.log('Spline error:', error);
            setIsLoading(false);
            setHasError(true);
          }}
          className="w-full h-full"
        />
      )}

      {/* Scroll Indicator */}
      {!isLoading && !hasError && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="flex flex-col items-center gap-2 text-white/70">
            <span className="text-sm uppercase tracking-wider">Scroll Down</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      )}
    </section>
  );
}
