import { useEffect, useRef } from 'react';

export function ParticleSystem() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create particles
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random position and animation delay
      particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: #06b6d4;
        border-radius: 50%;
        opacity: 0.2;
        left: ${Math.random() * 100}%;
        animation: float ${Math.random() * 10 + 10}s infinite linear;
        animation-delay: ${Math.random() * 15}s;
      `;
      
      container.appendChild(particle);
    }

    return () => {
      // Cleanup particles
      container.innerHTML = '';
    };
  }, []);

  return (
    <>
      {/* Background container */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700" />
      
      {/* Particles container */}
      <div
        ref={containerRef}
        className="fixed inset-0 -z-10 overflow-hidden"
      />
    </>
  );
}