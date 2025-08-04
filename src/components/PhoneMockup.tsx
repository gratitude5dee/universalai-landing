import React from 'react';

interface PhoneMockupProps {
  screenContentSrc: string;
  alt: string;
  className?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ screenContentSrc, alt, className = '' }) => {
  return (
    <div className={`relative w-full max-w-sm mx-auto ${className}`}>
      {/* Phone Frame */}
      <div className="relative group">
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
        
        {/* Outer frame with rounded corners */}
        <div className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 rounded-[3rem] p-2 shadow-2xl transform transition-transform duration-300 group-hover:scale-105">
          {/* Inner frame */}
          <div className="bg-black rounded-[2.5rem] p-1">
            {/* Screen area */}
            <div className="relative bg-black rounded-[2.2rem] overflow-hidden aspect-[9/19.5]">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-10"></div>
              
              {/* Screen reflection overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none z-20"></div>
              
              {/* Screen content */}
              <img 
                src={screenContentSrc} 
                alt={alt} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        {/* Side buttons */}
        <div className="absolute -left-1 top-20 w-1 h-8 bg-gray-600 rounded-r shadow-sm"></div>
        <div className="absolute -left-1 top-32 w-1 h-12 bg-gray-600 rounded-r shadow-sm"></div>
        <div className="absolute -left-1 top-48 w-1 h-12 bg-gray-600 rounded-r shadow-sm"></div>
        <div className="absolute -right-1 top-36 w-1 h-16 bg-gray-600 rounded-l shadow-sm"></div>
      </div>
    </div>
  );
};