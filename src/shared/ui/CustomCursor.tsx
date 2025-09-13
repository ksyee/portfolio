import { useEffect, useRef } from 'react';

export function CustomCursor() {
  const mainCursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const mousePos = useRef({ x: 0, y: 0 });
  const followerPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const mainCursor = mainCursorRef.current;
    const follower = followerRef.current;

    if (!mainCursor || !follower) return;

    // Direct DOM manipulation for maximum performance
    const updateCursor = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      // Update main cursor immediately
      mainCursor.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`;
    };

    const animateFollower = () => {
      const dx = mousePos.current.x - followerPos.current.x;
      const dy = mousePos.current.y - followerPos.current.y;

      // Smooth following with lerp
      followerPos.current.x += dx * 0.12;
      followerPos.current.y += dy * 0.12;

      // Update follower position
      follower.style.transform = `translate(${followerPos.current.x - 16}px, ${followerPos.current.y - 16}px)`;

      // Continue animation if cursor is still moving
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        animationRef.current = requestAnimationFrame(animateFollower);
      }
    };

    let isAnimating = false;
    const startAnimation = () => {
      if (!isAnimating) {
        isAnimating = true;
        const animate = () => {
          animateFollower();
          if (Math.abs(mousePos.current.x - followerPos.current.x) > 0.1 ||
              Math.abs(mousePos.current.y - followerPos.current.y) > 0.1) {
            animationRef.current = requestAnimationFrame(animate);
          } else {
            isAnimating = false;
          }
        };
        animate();
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateCursor(e);
      startAnimation();
    };

    // Use passive listener for better performance
    document.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Main cursor - follows mouse immediately */}
      <div
        ref={mainCursorRef}
        className="fixed w-4 h-4 bg-gradient-to-r from-cyan-400 to-violet-500 rounded-full pointer-events-none z-[9999] mix-blend-difference will-change-transform"
        style={{
          top: 0,
          left: 0,
        }}
      />

      {/* Cursor follower - smooth delayed following */}
      <div
        ref={followerRef}
        className="fixed w-8 h-8 border-2 border-cyan-400 rounded-full pointer-events-none z-[9998] will-change-transform"
        style={{
          top: 0,
          left: 0,
        }}
      />
    </>
  );
}