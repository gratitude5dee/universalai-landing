import React from 'react';
import iphoneFrame from '@/assets/iphone-frame.png';

interface PhoneMockupProps {
  screenContentSrc: string;
  alt: string;
  className?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ 
  screenContentSrc, 
  alt, 
  className = "" 
}) => {
  return (
    <div className={`relative w-full max-w-[320px] mx-auto group ${className}`}>
      {/* Glow Effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-[3rem] blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
      
      {/* Phone Frame */}
      <img 
        src={iphoneFrame} 
        alt="Phone frame" 
        className="w-full relative z-10 pointer-events-none drop-shadow-2xl"
      />
      
      {/* Screen Content */}
      <div className="absolute top-[6%] left-[6%] right-[6%] bottom-[6%] overflow-hidden rounded-[12%] bg-black group-hover:shadow-2xl transition-shadow duration-500">
        <img 
          src={screenContentSrc} 
          alt={alt} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Screen Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 pointer-events-none"></div>
      </div>
      
      {/* Reflection Effect */}
      <div className="absolute top-[6%] left-[6%] right-[6%] h-1/3 bg-gradient-to-b from-white/20 to-transparent rounded-t-[12%] pointer-events-none z-20"></div>
    </div>
  );
};