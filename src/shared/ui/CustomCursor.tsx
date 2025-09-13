import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      setTimeout(() => {
        setFollowerPosition({ x: e.clientX, y: e.clientY });
      }, 100);
    };

    document.addEventListener('mousemove', updateCursor);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className="fixed w-4 h-4 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)'
        }}
      />
      
      {/* Cursor follower */}
      <div
        className="fixed w-8 h-8 border-2 border-cyan-400 rounded-full pointer-events-none z-[9998] transition-all duration-150 ease-out"
        style={{
          left: followerPosition.x,
          top: followerPosition.y,
          transform: 'translate(-50%, -50%)'
        }}
      />
    </>
  );
}