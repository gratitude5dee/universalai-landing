import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FestivalIntroLoaderProps {
  onComplete: () => void;
}

const FestivalIntroLoader: React.FC<FestivalIntroLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);
  const [stage, setStage] = useState(0); // 0: initial, 1: logo, 2: text, 3: progress, 4: complete

  useEffect(() => {
    const sequence = [
      () => setStage(1), // Show logo
      () => setStage(2), // Show text
      () => setStage(3), // Start progress bar
      () => { // Finish
        const interval = setInterval(() => {
          setProgress(p => {
            if (p >= 100) {
              clearInterval(interval);
              setStage(4);
              setTimeout(() => {
                setShowLoader(false);
                setTimeout(onComplete, 1000);
              }, 500);
              return 100;
            }
            return p + 2;
          });
        }, 30);
      },
    ];

    sequence.forEach((action, index) => {
      setTimeout(action, index * 800);
    });

  }, [onComplete]);

  const logoText = "MUSICÓS";
  const logoVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 12, stiffness: 200 } },
  };

  return (
    <AnimatePresence>
      {showLoader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: "-100vh",
            transition: { duration: 1, ease: "circOut" }
          }}
          className="fixed inset-0 z-50 flex items-center justify-center flex-col bg-[#080808]"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 3.5 }}
            className="absolute inset-0 bg-festival-glow opacity-30"
          />

          {stage >= 1 && (
            <motion.h1
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              className="font-festival text-6xl md:text-8xl text-transparent bg-clip-text text-gradient-festival mb-4 tracking-wider"
            >
              {logoText.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>
          )}

          {stage >= 2 && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-green-400 text-xl mb-8 font-grotesk"
            >
              The stage is being set...
            </motion.p>
          )}

          {stage >= 3 && (
            <div className="w-80 h-1.5 bg-white/10 rounded-full overflow-hidden mb-4 relative">
              <motion.div
                className="h-full bg-gradient-to-r from-green-400 to-yellow-400"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: 'linear' }}
              />
              <motion.div
                className="absolute top-0 h-full w-2 bg-white/80"
                style={{ left: `${progress}%` }}
                animate={{
                  boxShadow: ['0 0 10px #fff', '0 0 20px #fff', '0 0 10px #fff'],
                }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
            </div>
          )}

          {stage >= 3 && (
             <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="text-white/70 text-sm font-grotesk"
            >
              Tuning the instruments... {Math.round(progress)}%
            </motion.p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FestivalIntroLoader;