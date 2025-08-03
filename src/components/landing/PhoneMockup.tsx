import React from 'react';
import iphoneFrame from '@/assets/iphone-frame.png';

interface PhoneMockupProps {
  screenContentSrc: string;
  alt: string;
  className?: string;
}

const PhoneMockup: React.FC<PhoneMockupProps> = ({ 
  screenContentSrc, 
  alt, 
  className = "" 
}) => {
  return (
    <div className={`relative w-full max-w-[320px] mx-auto group ${className}`}>
      {/* Enhanced Glow Effect */}
      <div className="absolute -inset-6 bg-gradient-to-r from-primary/40 via-blue-500/30 to-purple-500/40 rounded-[4rem] blur-3xl opacity-50 group-hover:opacity-70 transition-all duration-700 animate-pulse"></div>
      <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-blue-400/20 rounded-[3rem] blur-xl opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Phone Frame with enhanced shadow */}
      <img 
        src={iphoneFrame} 
        alt="Phone frame" 
        className="w-full relative z-10 pointer-events-none filter drop-shadow-2xl group-hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)] transition-all duration-500"
      />
      
      {/* Screen Content with improved effects */}
      <div className="absolute top-[6%] left-[6%] right-[6%] bottom-[6%] overflow-hidden rounded-[12%] bg-transparent group-hover:shadow-2xl transition-all duration-500">
        <img 
          src={screenContentSrc} 
          alt={alt} 
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-1000 ease-out"
          style={{ backgroundColor: 'transparent' }}
        />
        
        {/* Enhanced Screen Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/3 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/3 pointer-events-none group-hover:to-primary/5 transition-all duration-500"></div>
      </div>
      
      {/* Enhanced Reflection Effect */}
      <div className="absolute top-[6%] left-[6%] right-[6%] h-1/2 bg-gradient-to-b from-white/30 via-white/10 to-transparent rounded-t-[12%] pointer-events-none z-20 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
      
      {/* Subtle floating animation */}
      <div className="absolute inset-0 group-hover:animate-[float_3s_ease-in-out_infinite] transition-all duration-300"></div>
    </div>
  );
};

export default PhoneMockup;