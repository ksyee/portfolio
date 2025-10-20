import {useEffect, useState} from 'react';
import {scrollManager} from '@/shared/utils/scrollManager';

export function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = (scrollY: number) => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollY / docHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, scrollPercent)));
    };

    // Initial call
    updateScrollProgress(scrollManager.getScrollY());

    return scrollManager.subscribe(updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 to-violet-500 z-[9999] transition-all duration-100 ease-out"
         style={{ width: `${scrollProgress}%` }} />
  );
}