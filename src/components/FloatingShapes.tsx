import { motion } from 'motion/react';

export function FloatingShapes() {
  const shapes = [
    {
      id: 1,
      size: 300,
      color: 'rgba(71, 133, 255, 0.1)',
      duration: 20,
      delay: 0,
      initialX: '10%',
      initialY: '20%',
    },
    {
      id: 2,
      size: 400,
      color: 'rgba(255, 21, 60, 0.08)',
      duration: 25,
      delay: 5,
      initialX: '70%',
      initialY: '60%',
    },
    {
      id: 3,
      size: 250,
      color: 'rgba(63, 63, 70, 0.1)',
      duration: 18,
      delay: 3,
      initialX: '80%',
      initialY: '10%',
    },
    {
      id: 4,
      size: 350,
      color: 'rgba(71, 133, 255, 0.06)',
      duration: 22,
      delay: 8,
      initialX: '30%',
      initialY: '70%',
    },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full blur-3xl"
          style={{
            width: shape.size,
            height: shape.size,
            background: shape.color,
            left: shape.initialX,
            top: shape.initialY,
          }}
          animate={{
            x: ['0%', '100%', '0%', '-100%', '0%'],
            y: ['0%', '-100%', '0%', '100%', '0%'],
            scale: [1, 1.2, 0.8, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
