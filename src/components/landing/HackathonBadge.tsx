import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Music, Star } from 'lucide-react';

const HackathonBadge = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const confettiElements = Array.from({ length: 8 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full"
      initial={{ 
        x: 0, 
        y: 0, 
        opacity: 0,
        scale: 0
      }}
      animate={{ 
        x: Math.random() * 200 - 100,
        y: Math.random() * 100 + 50,
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        rotate: 360
      }}
      transition={{
        duration: 2,
        delay: i * 0.1,
        repeat: Infinity,
        repeatDelay: 3
      }}
    />
  ));

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        delay: 0.5 
      }}
      className="relative z-50 mx-auto mb-8 max-w-fit"
    >
      {/* Confetti Container */}
      <div className="absolute inset-0 pointer-events-none">
        {confettiElements}
      </div>

      {/* Badge */}
      <motion.div
        animate={{ 
          boxShadow: [
            "0 0 20px #10b981, 0 0 40px #fbbf24, 0 0 60px #ec4899",
            "0 0 30px #fbbf24, 0 0 50px #10b981, 0 0 70px #ec4899",
            "0 0 20px #ec4899, 0 0 40px #10b981, 0 0 60px #fbbf24"
          ]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="relative bg-gradient-to-r from-green-500 via-yellow-400 to-pink-500 p-[2px] rounded-full"
      >
        <div className="bg-black/90 backdrop-blur-sm rounded-full px-6 py-3 flex items-center gap-3">
          {/* Trophy Icon */}
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          >
            <Trophy className="w-5 h-5 text-yellow-400" />
          </motion.div>

          {/* Text */}
          <span className="text-white font-bold text-sm md:text-base whitespace-nowrap">
            FINALIST - OutsideLands Official Hackathon 2025
          </span>

          {/* Music Notes */}
          <div className="flex gap-1">
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                delay: 0 
              }}
            >
              <Music className="w-4 h-4 text-green-400" />
            </motion.div>
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                delay: 0.3 
              }}
            >
              <Star className="w-4 h-4 text-pink-400" />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Festival Wristband Graphics */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full opacity-20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-green-400 rounded-full opacity-20"
      />
    </motion.div>
  );
};

export default HackathonBadge;