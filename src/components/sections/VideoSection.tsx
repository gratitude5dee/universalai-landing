import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Deep blue gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-purple to-background" />
      
      {/* Ambient glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, hsl(262 83% 58% / 0.2), transparent 70%)',
          filter: 'blur(100px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Video player container */}
          <div className="relative aspect-video rounded-2xl overflow-hidden glass border border-primary/20 shadow-elegant">
            {/* Video placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-background-secondary to-background" />
            
            {/* Ambient light emanating from center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-96 h-96 rounded-full"
                style={{
                  background: 'radial-gradient(circle, hsl(38 100% 64% / 0.3), transparent 60%)',
                  filter: 'blur(60px)',
                }}
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>

            {/* Play button */}
            {!isPlaying && (
              <motion.button
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="relative"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl scale-150" />
                  
                  {/* Play button */}
                  <div className="relative w-20 h-20 rounded-full glass-strong border border-primary/30 flex items-center justify-center group-hover:border-primary/50 transition-all duration-300">
                    <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                  </div>
                </motion.div>
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
