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
    <div className={`relative w-full max-w-[320px] mx-auto ${className}`}>
      {/* Phone Frame */}
      <img 
        src={iphoneFrame} 
        alt="Phone frame" 
        className="w-full relative z-10 pointer-events-none"
      />
      
      {/* Screen Content */}
      <div className="absolute top-[6%] left-[6%] right-[6%] bottom-[6%] overflow-hidden rounded-[12%] bg-black">
        <img 
          src={screenContentSrc} 
          alt={alt} 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};