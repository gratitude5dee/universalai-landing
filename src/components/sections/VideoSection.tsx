import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import PillLabel from '@/components/ui/PillLabel';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Deep cosmic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-purple to-background" />
      
      {/* Ambient glow effects */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, hsl(262 83% 58% / 0.15), transparent 70%)',
          filter: 'blur(120px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <PillLabel className="mb-6">See it in action</PillLabel>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair italic font-bold mb-6 tracking-tight">
            Experience the{' '}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent-amber bg-clip-text text-transparent">
              creative flow
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how UniversalAI transforms ideas into reality
          </p>
        </motion.div>

        {/* Video player */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => setShowControls(false)}
        >
          <div className="relative aspect-video rounded-3xl overflow-hidden glass-strong border border-primary/20 shadow-elegant group">
            {/* Video element */}
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src="/videos/unidemo-2.mp4"
              loop
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />

            {/* Ambient glow from video */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at center, hsl(262 83% 58% / 0.2), transparent 60%)',
                opacity: isPlaying ? 0.6 : 0,
              }}
              animate={{
                scale: isPlaying ? [1, 1.1, 1] : 1,
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Play/Pause overlay button */}
            <AnimatePresence>
              {!isPlaying && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={togglePlay}
                  className="absolute inset-0 flex items-center justify-center group cursor-pointer z-10"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
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
                    {/* Outer glow rings */}
                    <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-150" />
                    <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl scale-125 animate-pulse" />
                    
                    {/* Play button */}
                    <div className="relative w-24 h-24 rounded-full glass-strong border-2 border-primary/40 flex items-center justify-center group-hover:border-primary/60 group-hover:scale-110 transition-all duration-300">
                      <Play className="w-10 h-10 text-primary fill-primary ml-1" />
                    </div>
                  </motion.div>
                </motion.button>
              )}
            </AnimatePresence>

            {/* Control bar */}
            <AnimatePresence>
              {(showControls || !isPlaying) && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 via-background/50 to-transparent z-20"
                >
                  <div className="flex items-center justify-between gap-4">
                    {/* Play/Pause button */}
                    <motion.button
                      onClick={togglePlay}
                      className="w-10 h-10 rounded-full glass-strong border border-primary/30 flex items-center justify-center hover:border-primary/50 hover:scale-110 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 text-primary" />
                      ) : (
                        <Play className="w-5 h-5 text-primary ml-0.5" />
                      )}
                    </motion.button>

                    {/* Spacer */}
                    <div className="flex-1" />

                    {/* Volume control */}
                    <motion.button
                      onClick={toggleMute}
                      className="w-10 h-10 rounded-full glass-strong border border-secondary/30 flex items-center justify-center hover:border-secondary/50 hover:scale-110 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 text-secondary" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-secondary" />
                      )}
                    </motion.button>

                    {/* Fullscreen button */}
                    <motion.button
                      onClick={toggleFullscreen}
                      className="w-10 h-10 rounded-full glass-strong border border-accent-amber/30 flex items-center justify-center hover:border-accent-amber/50 hover:scale-110 transition-all"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Maximize className="w-5 h-5 text-accent-amber" />
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Border glow effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                border: '2px solid transparent',
                backgroundImage: 'linear-gradient(135deg, hsl(262 83% 58% / 0.3), hsl(217 91% 60% / 0.3), hsl(38 100% 64% / 0.3))',
                backgroundOrigin: 'border-box',
                backgroundClip: 'border-box',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                opacity: 0,
              }}
              whileHover={{ opacity: 0.6 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
