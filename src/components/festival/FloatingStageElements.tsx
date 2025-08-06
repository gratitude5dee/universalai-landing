import React, { useEffect, useState } from 'react';
import { Music, Star, Heart } from 'lucide-react';

const FloatingStageElements = () => {
  const [elements, setElements] = useState<Array<{ id: number; x: number; y: number; icon: React.ReactNode; delay: number }>>([]);

  useEffect(() => {
    const icons = [
      <Music className="w-6 h-6 text-green-400" />,
      <Star className="w-5 h-5 text-yellow-400" />,
      <Heart className="w-5 h-5 text-pink-400" />,
    ];

    const positions = [
      { x: 10, y: 20 },
      { x: 85, y: 15 },
      { x: 5, y: 60 },
      { x: 90, y: 70 },
      { x: 15, y: 80 },
      { x: 75, y: 30 },
    ];

    const newElements = positions.map((pos, i) => ({
      id: i,
      x: pos.x,
      y: pos.y,
      icon: icons[i % icons.length],
      delay: i * 0.5,
    }));

    setElements(newElements);
  }, []);

  return (
    <>
      {elements.map((element) => (
        <div
          key={element.id}
          className="floating-stage-element"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            animationDelay: `${element.delay}s`,
          }}
        >
          {element.icon}
        </div>
      ))}
      
      {/* Festival diamond shapes */}
      <div
        className="floating-stage-element festival-note"
        style={{ top: '20%', left: '10%', animationDelay: '0s' }}
      />
      <div
        className="floating-stage-element festival-note"
        style={{ top: '60%', right: '15%', animationDelay: '2s' }}
      />
      <div
        className="floating-stage-element festival-note"
        style={{ bottom: '30%', left: '5%', animationDelay: '4s' }}
      />
    </>
  );
};

export default FloatingStageElements;