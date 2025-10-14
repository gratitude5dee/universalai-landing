import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useIntroAnimation } from '@/hooks/useIntroAnimation';
import LightningLogo from '@/components/ui/LightningLogo';
import MatrixCanvasBackground from '@/components/ui/MatrixCanvasBackground';
import ASCIIArtRenderer from '@/components/ui/ASCIIArtRenderer';
import IntroStatusIndicator from '@/components/ui/IntroStatusIndicator';
import { ASCII_ART_CHARACTER, ASCII_ART_LOGO } from '@/data/asciiArt';

interface UniversalAIIntroAnimationProps {
  onComplete?: () => void;
  allowSkip?: boolean;
}

const UniversalAIIntroAnimation: React.FC<UniversalAIIntroAnimationProps> = ({ 
  onComplete,
  allowSkip = true
}) => {
  const [statusMessage, setStatusMessage] = useState('◆ NEURAL NETWORK INITIALIZING ◆');
  const [loadingText, setLoadingText] = useState('INITIALIZING CORE');
  const [asciiStartTime, setAsciiStartTime] = useState(0);
  
  const { isPlaying, progress, isComplete, phase, skip } = useIntroAnimation({
    onComplete,
    duration: 15000,
    onPhaseChange: (newPhase) => {
      if (newPhase === 1) {
        setStatusMessage('◆ LOADING NEURAL FRAMEWORK ◆');
        setAsciiStartTime(Date.now());
      } else if (newPhase === 2) {
        setStatusMessage('◆ ESTABLISHING AI PROTOCOLS ◆');
        setAsciiStartTime(Date.now());
      } else if (newPhase === 3) {
        setStatusMessage('◆ SYSTEM READY ◆');
      }
    }
  });

  // Extract unique characters from ASCII art
  const uniqueChars = React.useMemo(() => {
    return [...new Set([...ASCII_ART_CHARACTER, ...ASCII_ART_LOGO])]
      .filter(c => c !== '\n' && c !== ' ');
  }, []);

  // Loading text sequence
  useEffect(() => {
    if (!isPlaying) return;

    const messages = [
      'INITIALIZING CORE',
      'LOADING AI MODELS',
      'NEURAL NETS ACTIVE',
      'CALIBRATING SYSTEMS',
      'ESTABLISHING LINKS',
      'SYSTEM ONLINE'
    ];

    let currentMsg = 0;
    const interval = setInterval(() => {
      currentMsg++;
      if (currentMsg < messages.length) {
        setLoadingText(messages[currentMsg]);
      } else {
        clearInterval(interval);
      }
    }, 2400);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delay: 0.5,
        staggerChildren: 0.1 
      }
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: { duration: 0.8 }
    }
  };

  const logoContainerVariants: Variants = {
    hidden: {
      scale: 0,
      rotateY: -180,
      opacity: 0
    },
    visible: {
      scale: [0, 1.2, 1],
      rotateY: [180, 0],
      opacity: 1,
      transition: {
        duration: 1.5,
        times: [0, 0.6, 1],
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const titleVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3
      }
    }
  };

  const letterVariants: Variants = {
    hidden: {
      y: 100,
      opacity: 0,
      rotateX: 90
    },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const taglineVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1,
        duration: 1
      }
    }
  };

  const particleVariants: Variants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i: number) => ({
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        delay: i * 0.1,
        repeatDelay: 0.5
      }
    })
  };

  const showFramerMotion = phase >= 3;

  if (isComplete) return null;

  return (
    <AnimatePresence>
      {isPlaying && !isComplete && (
        <motion.div
          className="intro-animation-container"
          style={{ background: '#000' }}
        >
          {/* Matrix Canvas Background - Phase 0 */}
          <MatrixCanvasBackground phase={phase} uniqueChars={uniqueChars} />

          {/* ASCII Art Phase 1 - Character */}
          <ASCIIArtRenderer
            asciiArt={ASCII_ART_CHARACTER}
            startTime={asciiStartTime}
            duration={3500}
            isActive={phase === 1}
          />

          {/* ASCII Art Phase 2 - Logo */}
          <ASCIIArtRenderer
            asciiArt={ASCII_ART_LOGO}
            startTime={asciiStartTime}
            duration={4000}
            isActive={phase === 2}
          />

          {/* Background effects for Framer Motion phase */}
          {showFramerMotion && (
            <>
              <div className="intro-bg" />
              <div className="intro-gradient-1" />
              <div className="intro-gradient-2" />
              <div className="intro-gradient-3" />
              <div className="intro-noise" />
            </>
          )}

          {/* Framer Motion Content - Phase 3 */}
          {showFramerMotion && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative z-10"
            >
              {/* Floating particles */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="intro-particle"
                  variants={particleVariants}
                  custom={i}
                />
              ))}

              {/* Main content */}
              <motion.div className="intro-logo-container" variants={logoContainerVariants}>
                <motion.div 
                  className="intro-logo-glow"
                  animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="w-32 h-32 relative z-10">
                  <LightningLogo />
                </div>
              </motion.div>

              {/* UniversalAI Title */}
              <motion.div 
                className="intro-title"
                variants={titleVariants}
              >
                {"UniversalAI".split("").map((letter, index) => (
                  <motion.span
                    key={`${letter}-${index}`}
                    className="intro-title-letter"
                    variants={letterVariants}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>

              {/* Tagline */}
              <motion.div 
                className="intro-tagline"
                variants={taglineVariants}
              >
                The Creator OS
              </motion.div>

              {/* Progress indicator */}
              <motion.div className="intro-progress-container" variants={titleVariants}>
                <motion.div 
                  className="intro-progress-bar"
                  initial={{ width: "0%" }}
                  animate={{ width: `${(progress - 70) * 3.33}%` }}
                  transition={{ duration: 0.1 }}
                />
              </motion.div>
            </motion.div>
          )}

          {/* Matrix Loading Text - Phases 0-2 */}
          {phase < 3 && (
            <div style={{ 
              position: 'fixed', 
              top: '50%', 
              left: '50%', 
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
              textAlign: 'center'
            }}>
              <div className="matrix-loading-text">{loadingText}</div>
              <div className="matrix-progress-bar">
                <div 
                  className="matrix-progress-fill" 
                  style={{ width: `${Math.min(progress * 1.43, 100)}%` }}
                />
              </div>
            </div>
          )}

          {/* Status Indicator */}
          <IntroStatusIndicator message={statusMessage} />

          {/* Skip button */}
          {allowSkip && (
            <motion.button
              className="intro-skip-button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              onClick={skip}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ zIndex: 20 }}
            >
              Skip Intro
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UniversalAIIntroAnimation;
