import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, Maximize, MoreHorizontal } from 'lucide-react';

interface VideoPlayerMockupProps {
  videoSrc: string;
  className?: string;
}

const VideoPlayerMockup: React.FC<VideoPlayerMockupProps> = ({
  videoSrc,
  className = ''
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative w-full max-w-lg mx-auto ${className}`}
    >
      {/* Device Frame */}
      <div className="relative glass-strong rounded-2xl p-4 border border-white/20 shadow-2xl hover:shadow-primary/20 transition-all duration-500 animate-float">
        {/* Glow Effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        
        {/* Video Container */}
        <div className="relative bg-black rounded-xl overflow-hidden aspect-video">
          {/* Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          
          {/* Video Controls Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
            {/* Bottom Controls */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              {/* Progress Bar */}
              <div className="w-full bg-white/20 rounded-full h-1 mb-4">
                <motion.div
                  className="bg-primary h-1 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "65%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </div>
              
              {/* Control Buttons */}
              <div className="flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <Play className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <Volume2 className="w-4 h-4" />
                  </button>
                  <span className="text-sm text-white/80">2:45 / 4:12</span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                    <Maximize className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Center Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/20 backdrop-blur-sm rounded-full p-6 border border-white/30 hover:bg-white/30 transition-all duration-200"
              >
                <Play className="w-8 h-8 text-white ml-1" />
              </motion.button>
            </div>
          </div>
          
          {/* Reflection Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
        </div>
        
        {/* Device Details */}
        <div className="flex items-center justify-between mt-3 px-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs text-muted-foreground">Live Demo</span>
          </div>
          <div className="text-xs text-muted-foreground">UniversalAI Platform</div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute -top-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"
      />
      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-4 -right-4 w-20 h-20 bg-secondary/15 rounded-full blur-2xl"
      />
    </motion.div>
  );
};

export default VideoPlayerMockup;