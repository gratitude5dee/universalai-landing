import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, useAnimation, Variants } from 'framer-motion';
import LightningLogo from './LightningLogo';
import { useIntroAnimation } from '@/hooks/useIntroAnimation';

interface UniversalAIIntroAnimationProps {
  onComplete?: () => void;
  allowSkip?: boolean;
}

const UniversalAIIntroAnimation: React.FC<UniversalAIIntroAnimationProps> = ({
  onComplete,
  allowSkip = true
}) => {
  const { isPlaying, progress, skip, isComplete } = useIntroAnimation({
    duration: 4000,
    onComplete
  });

  const containerVariants: Variants = {
    initial: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const logoContainerVariants: Variants = {
    initial: {
      scale: 0,
      rotateY: -180,
      opacity: 0
    },
    animate: {
      scale: [0, 1.2, 1],
      rotateY: [180, 0],
      opacity: 1,
      transition: {
        duration: 1.5,
        times: [0, 0.6, 1],
        ease: [0.16, 1, 0.3, 1],
        rotateY: {
          duration: 1.2,
          ease: "easeOut"
        }
      }
    }
  };

  const titleVariants: Variants = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 1.2
      }
    }
  };

  const letterVariants: Variants = {
    initial: {
      y: 100,
      opacity: 0,
      rotateX: 90,
      scale: 0.8
    },
    animate: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    }
  };

  const taglineVariants: Variants = {
    initial: {
      opacity: 0,
      y: 30,
      filter: "blur(10px)"
    },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: 2.8,
        duration: 1,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const particleVariants: Variants = {
    initial: {
      scale: 0,
      opacity: 0
    },
    animate: {
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatDelay: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const skipButtonVariants: Variants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 0.5
      }
    }
  };

  const titleText = "UniversalAI";
  const letters = titleText.split("");

  if (isComplete) return null;

  return (
    <AnimatePresence>
      {isPlaying && (
        <motion.div
          className="fixed inset-0 z-50 intro-animation-container"
          variants={containerVariants}
          initial="initial"
          animate="initial"
          exit="exit"
        >
          {/* Background with animated gradients */}
          <div className="absolute inset-0 intro-bg">
            <div className="absolute inset-0 intro-gradient-1" />
            <div className="absolute inset-0 intro-gradient-2" />
            <div className="absolute inset-0 intro-gradient-3" />
            <div className="absolute inset-0 intro-noise" />
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full intro-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                variants={particleVariants}
                initial="initial"
                animate="animate"
                transition={{
                  delay: Math.random() * 2,
                  duration: 2 + Math.random() * 2
                }}
              />
            ))}
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            {/* Logo Animation */}
            <motion.div
              className="mb-8 intro-logo-container"
              variants={logoContainerVariants}
              initial="initial"
              animate="animate"
            >
              <div className="relative">
                <LightningLogo />
                <div className="absolute inset-0 intro-logo-glow" />
              </div>
            </motion.div>

            {/* Title Animation */}
            <motion.div
              className="mb-6"
              variants={titleVariants}
              initial="initial"
              animate="animate"
            >
              <div className="flex flex-wrap justify-center items-center gap-1">
                {letters.map((letter, index) => (
                  <motion.span
                    key={index}
                    className="intro-title-letter"
                    variants={letterVariants}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Tagline */}
            <motion.div
              className="intro-tagline"
              variants={taglineVariants}
              initial="initial"
              animate="animate"
            >
              The Creator OS
            </motion.div>

            {/* Progress indicator */}
            <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
              <div className="intro-progress-container">
                <div 
                  className="intro-progress-bar"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Skip button */}
          {allowSkip && (
            <motion.button
              className="absolute top-6 right-6 intro-skip-button"
              variants={skipButtonVariants}
              initial="initial"
              animate="animate"
              onClick={skip}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Skip
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UniversalAIIntroAnimation;