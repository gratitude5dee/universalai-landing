import React, { memo, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedListItemProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedListItem: React.FC<AnimatedListItemProps> = ({ children, className }) => {
  return (
    <motion.div
      layout
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 350,
        damping: 25,
      }}
      className={cn('relative', className)}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedListProps {
  children: React.ReactNode[];
  delay?: number;
  className?: string;
}

const AnimatedListComponent: React.FC<AnimatedListProps> = ({
  children,
  delay = 1000,
  className,
}) => {
  const [items, setItems] = useState<React.ReactNode[]>([]);

  useEffect(() => {
    const childrenArray = React.Children.toArray(children);

    childrenArray.forEach((child, index) => {
      setTimeout(() => {
        setItems((prev) => [child, ...prev]); // Add to beginning (reverse order)
      }, index * delay);
    });
  }, [children, delay]);

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <AnimatePresence mode="popLayout">
        {items.map((item, index) => (
          <AnimatedListItem key={index}>{item}</AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  );
};

export const AnimatedList = memo(AnimatedListComponent);
