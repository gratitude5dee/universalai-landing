import React from 'react';
import { motion } from 'framer-motion';
import { Music, Radio, Disc, Headphones, Mic, Speaker } from 'lucide-react';

const FestivalAnimations = () => {
  // Floating festival icons
  const festivalIcons = [
    { Icon: Music, delay: 0, duration: 15 },
    { Icon: Radio, delay: 2, duration: 18 },
    { Icon: Disc, delay: 4, duration: 20 },
    { Icon: Headphones, delay: 6, duration: 16 },
    { Icon: Mic, delay: 8, duration: 22 },
    { Icon: Speaker, delay: 10, duration: 19 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated Sound Waves Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute bg-gradient-to-r from-green-500/5 via-yellow-400/5 to-pink-500/5 rounded-full"
            style={{
              width: `${200 + i * 100}px`,
              height: `${200 + i * 100}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating Festival Icons */}
      <div className="absolute inset-0">
        {festivalIcons.map(({ Icon, delay, duration }, index) => (
          <motion.div
            key={index}
            className="absolute"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 50,
              opacity: 0,
              rotate: 0
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: -50,
              opacity: [0, 0.3, 0.1, 0],
              rotate: 360,
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Icon 
              className="w-8 h-8 text-white/20" 
              style={{
                filter: `hue-rotate(${Math.random() * 360}deg)`
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Parallax Layers */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Stage Light Beams */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 w-1 bg-gradient-to-b from-yellow-400/30 via-transparent to-transparent"
            style={{
              left: `${20 + i * 30}%`,
              height: '100%',
              transformOrigin: 'top center'
            }}
            animate={{
              rotate: [-15, 15, -15],
              opacity: [0.3, 0.7, 0.3],
              scaleX: [1, 2, 1]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Festival Wristband Graphics */}
      <div className="absolute bottom-10 left-10">
        <motion.div
          className="w-32 h-8 bg-gradient-to-r from-green-400 via-yellow-400 to-pink-400 rounded-full opacity-20"
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="w-24 h-6 bg-gradient-to-r from-pink-400 to-green-400 rounded-full opacity-15 mt-2"
          animate={{
            rotate: [0, -3, 3, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Festival Stage Graphics */}
      <div className="absolute bottom-0 right-0 w-48 h-32 opacity-10">
        <motion.div
          className="w-full h-full bg-gradient-to-t from-white/20 to-transparent"
          style={{
            clipPath: "polygon(10% 100%, 90% 100%, 80% 0%, 20% 0%)"
          }}
          animate={{
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Sparkle Effects */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 2,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FestivalAnimations;