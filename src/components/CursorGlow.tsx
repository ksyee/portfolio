import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      animate={{
        opacity: isVisible ? 1 : 0,
      }}
    >
      <motion.div
        className="absolute h-64 w-64 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(71, 133, 255, 0.15) 0%, transparent 70%)',
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
        animate={{
          x: 0,
          y: 0,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />
    </motion.div>
  );
}
