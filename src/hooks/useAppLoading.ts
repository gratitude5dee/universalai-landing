import { useState, useEffect } from 'react';

interface UseAppLoadingOptions {
  minimumLoadTime?: number;
  simulateNetworkDelay?: boolean;
}

export const useAppLoading = (options: UseAppLoadingOptions = {}) => {
  const {
    minimumLoadTime = 3000,
    simulateNetworkDelay = true
  } = options;

  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    let progressInterval: NodeJS.Timeout;
    let loadingTimer: NodeJS.Timeout;

    const startLoading = () => {
      // Simulate progressive loading
      progressInterval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 95) {
            clearInterval(progressInterval);
            return 95; // Stop at 95% until actual loading is complete
          }
          // Exponential slowdown as we approach 100%
          const increment = (100 - prev) * 0.1;
          return prev + Math.max(increment, 1);
        });
      }, 100);

      // Minimum loading time
      loadingTimer = setTimeout(() => {
        setLoadingProgress(100);
        setTimeout(() => {
          setIsLoading(false);
        }, 300); // Small delay for 100% progress to be visible
      }, minimumLoadTime);
    };

    if (simulateNetworkDelay) {
      // Simulate initial app loading delay
      const initTimer = setTimeout(startLoading, 100);
      return () => clearTimeout(initTimer);
    } else {
      startLoading();
    }

    return () => {
      clearInterval(progressInterval);
      clearTimeout(loadingTimer);
    };
  }, [minimumLoadTime, simulateNetworkDelay]);

  const forceComplete = () => {
    setLoadingProgress(100);
    setIsLoading(false);
  };

  return {
    isLoading,
    loadingProgress,
    forceComplete
  };
};