import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap } from 'lucide-react';

interface FuturisticLoaderProps {
  onComplete: () => void;
}

const FuturisticLoader: React.FC<FuturisticLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setIsComplete(true);
          setTimeout(() => onComplete(), 800);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const phaseTimer = setInterval(() => {
      setPhase(prev => (prev + 1) % 4);
    }, 800);

    return () => {
      clearInterval(timer);
      clearInterval(phaseTimer);
    };
  }, [onComplete]);

  const loadingTexts = [
    "Initializing Creator OS...",
    "Connecting to Universal Network...",
    "Loading AI Agents...",
    "Welcome to UniversalAI"
  ];

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="text-center relative z-10">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="h-12 w-12 text-purple-500" />
                </motion.div>
                <h1 className="text-4xl font-bold text-white">UniversalAI</h1>
              </div>
            </motion.div>

            {/* Loading text */}
            <motion.div
              key={phase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-8"
            >
              <p className="text-xl text-white/80 font-mono">
                {loadingTexts[phase]}
              </p>
            </motion.div>

            {/* Progress bar */}
            <div className="w-80 max-w-md mx-auto">
              <div className="bg-white/10 rounded-full h-2 mb-4 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-violet-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <p className="text-white/60 text-sm font-mono">{progress}%</p>
            </div>

            {/* Scanning lines effect */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent h-px" 
                   style={{ top: `${(progress / 100) * 100}%` }} />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FuturisticLoader;