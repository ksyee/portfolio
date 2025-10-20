import React, { useState, useRef, ReactNode } from 'react';

interface IInteractiveCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
}

export function InteractiveCard({ 
  children, 
  className = '', 
  intensity = 10 
}: IInteractiveCardProps) {
  const [transform, setTransform] = useState('');
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / intensity;
    const rotateY = (centerX - x) / intensity;
    
    setTransform(`translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`);
  };

  const handleMouseLeave = () => {
    setTransform('translateY(0) rotateX(0) rotateY(0) scale(1)');
  };

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-300 ease-out ${className}`}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}