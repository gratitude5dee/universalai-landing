import { motion } from 'framer-motion';

export default function SplineLoadingSkeleton() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-background z-10">
      <div className="relative w-full h-full max-w-4xl max-h-4xl">
        {/* Wireframe effect */}
        <motion.div
          className="absolute inset-0 m-auto w-64 h-64 md:w-96 md:h-96"
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d'
          }}
        >
          {/* Animated gradient box */}
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-primary/30"
            animate={{
              borderColor: [
                'rgba(147, 51, 234, 0.3)',
                'rgba(168, 85, 247, 0.5)',
                'rgba(147, 51, 234, 0.3)',
              ],
              boxShadow: [
                '0 0 20px rgba(147, 51, 234, 0.2)',
                '0 0 40px rgba(147, 51, 234, 0.4)',
                '0 0 20px rgba(147, 51, 234, 0.2)',
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
        </motion.div>

        {/* Pulsing gradient background */}
        <motion.div
          className="absolute inset-0 m-auto w-96 h-96 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary)), transparent)'
          }}
        />

        {/* Loading text */}
        <motion.p
          className="absolute bottom-20 left-1/2 -translate-x-1/2 text-muted-foreground text-sm"
          animate={{
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          Loading 3D Experience...
        </motion.p>
      </div>
    </div>
  );
}
