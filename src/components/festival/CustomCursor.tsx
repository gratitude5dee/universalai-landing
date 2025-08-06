import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Delayed follower
      setTimeout(() => {
        setFollowerPos({ x: e.clientX, y: e.clientY });
      }, 100);
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="custom-cursor"
        style={{
          left: `${mousePos.x - 10}px`,
          top: `${mousePos.y - 10}px`,
        }}
      />
      
      {/* Cursor follower */}
      <div
        className="cursor-follower"
        style={{
          left: `${followerPos.x - 20}px`,
          top: `${followerPos.y - 20}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;