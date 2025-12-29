import React, { memo } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type AnimationType =
  | 'fadeIn'
  | 'blurIn'
  | 'blurInUp'
  | 'blurInDown'
  | 'slideUp'
  | 'slideDown'
  | 'slideLeft'
  | 'slideRight'
  | 'scaleUp'
  | 'scaleDown';

type SplitBy = 'word' | 'character' | 'line' | 'full';

interface TextAnimateProps {
  children: string;
  animation?: AnimationType;
  by?: SplitBy;
  delay?: number;
  duration?: number;
  once?: boolean;
  startOnView?: boolean;
  className?: string;
  segmentClassName?: string;
}

const animationVariants: Record<AnimationType, { hidden: any; visible: any }> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  blurIn: {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: { opacity: 1, filter: 'blur(0px)' },
  },
  blurInUp: {
    hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
    visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
  },
  blurInDown: {
    hidden: { opacity: 0, filter: 'blur(10px)', y: -20 },
    visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  scaleDown: {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 1, scale: 1 },
  },
};

const TextAnimateComponent: React.FC<TextAnimateProps> = ({
  children,
  animation = 'fadeIn',
  by = 'word',
  delay = 0,
  duration = 0.4,
  once = true,
  startOnView = true,
  className = '',
  segmentClassName = '',
}) => {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  const shouldAnimate = startOnView ? inView : true;
  const variants = animationVariants[animation];

  const splitText = (text: string, splitBy: SplitBy): string[] => {
    switch (splitBy) {
      case 'word':
        return text.split(' ');
      case 'character':
        return text.split('');
      case 'line':
        return text.split('\n');
      case 'full':
        return [text];
      default:
        return text.split(' ');
    }
  };

  const segments = splitText(children, by);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: variants.hidden,
    visible: {
      ...variants.visible,
      transition: {
        duration,
        ease: 'easeOut',
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        ref={ref}
        className={className}
        variants={containerVariants}
        initial="hidden"
        animate={shouldAnimate ? 'visible' : 'hidden'}
        aria-label={children}
      >
        <span className="sr-only">{children}</span>
        {segments.map((segment, index) => (
          <motion.span
            key={`${segment}-${index}`}
            className={`inline-block ${segmentClassName}`}
            variants={itemVariants}
            aria-hidden="true"
          >
            {segment}
            {by === 'word' && index < segments.length - 1 && '\u00A0'}
          </motion.span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export const TextAnimate = memo(TextAnimateComponent);
