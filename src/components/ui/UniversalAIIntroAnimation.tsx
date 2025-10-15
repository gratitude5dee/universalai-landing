import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useIntroAnimation } from '@/hooks/useIntroAnimation';
import MatrixCanvasBackground from './MatrixCanvasBackground';
import ASCIIArtRenderer from './ASCIIArtRenderer';
import IntroStatusIndicator from './IntroStatusIndicator';
import { ASCII_ART_CHARACTER, ASCII_ART_LOGO } from '@/data/asciiArt';
import { isMobileDevice } from '@/utils/deviceDetection';

interface UniversalAIIntroAnimationProps {
  onComplete?: () => void;
  allowSkip?: boolean;
}

const UniversalAIIntroAnimation: React.FC<UniversalAIIntroAnimationProps> = ({ 
  onComplete,
  allowSkip = true 
}) => {
  const isMobile = isMobileDevice();
  const [statusMessage, setStatusMessage] = useState('◆ NEURAL NETWORK INITIALIZING ◆');
  const [loadingText, setLoadingText] = useState('INITIALIZING CORE');
  const [asciiStartTime, setAsciiStartTime] = useState<number>(Date.now());

  const { isPlaying, progress, isComplete, phase, skip } = useIntroAnimation({
    duration: 10500,
    onComplete,
    skipOnRepeat: true,
    onPhaseChange: (newPhase) => {
      setAsciiStartTime(Date.now());
      
      // Update status messages based on phase
      if (newPhase === 0) {
        setStatusMessage('◆ NEURAL NETWORK INITIALIZING ◆');
      } else if (newPhase === 1) {
        setStatusMessage('◆ LOADING NEURAL FRAMEWORK ◆');
      } else if (newPhase === 2) {
        setStatusMessage('◆ SYSTEM READY ◆');
      }
    }
  });

  // Extract unique characters for Matrix rain
  const uniqueChars = React.useMemo(() => {
    const allChars = ASCII_ART_CHARACTER + ASCII_ART_LOGO;
    return [...new Set(allChars)].filter(c => c !== '\n' && c !== ' ');
  }, []);

  // Loading text animation sequence
  useEffect(() => {
    if (!isPlaying) return;

    const messages = [
      'INITIALIZING CORE',
      'LOADING AI MODELS',
      'NEURAL NETS ACTIVE',
      'SYSTEM ONLINE'
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex < messages.length) {
        setLoadingText(messages[currentIndex]);
      } else {
        clearInterval(interval);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isPlaying]);

  if (!isPlaying && isComplete) {
    return null;
  }

  return (
    <AnimatePresence mode="wait">
      {isPlaying && (
        <motion.div
          key="intro-animation"
          className="intro-animation-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Matrix Canvas Background - Always visible */}
          <MatrixCanvasBackground 
            phase={phase}
            uniqueChars={uniqueChars}
          />

          {/* ASCII Art Character - Phase 1 */}
          {phase === 1 && (
            <ASCIIArtRenderer
              asciiArt={ASCII_ART_CHARACTER}
              startTime={asciiStartTime}
              duration={3500}
              isActive={true}
            />
          )}

          {/* ASCII Art Logo - Phase 2 */}
          {phase === 2 && (
            <ASCIIArtRenderer
              asciiArt={ASCII_ART_LOGO}
              startTime={asciiStartTime}
              duration={4000}
              isActive={true}
            />
          )}

          {/* Loading Text & Progress Bar - Visible during all phases */}
          <div className="fixed inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="text-center">
              <div className="matrix-loading-text">
                {loadingText}
              </div>
              <div className="matrix-progress-bar">
                <div 
                  className="matrix-progress-fill"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>

          {/* Status Indicator */}
          <IntroStatusIndicator message={statusMessage} />

          {/* Skip Button - More prominent on mobile */}
          {allowSkip && (
            <button
              onClick={skip}
              className={`intro-skip-button ${isMobile ? 'mobile-skip-button' : ''}`}
              aria-label="Skip intro animation"
            >
              {isMobile ? 'TAP TO SKIP' : 'SKIP [ESC]'}
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UniversalAIIntroAnimation;
