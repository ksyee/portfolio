import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { scrollManager } from '@/shared/utils/scrollManager';

import 'remixicon/fonts/remixicon.css';

export function ButtonToTop() {
  const [activeScrollTopButton, setActiveScrollTopButton] = useState<boolean>(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = (scrollY: number) => {
      setActiveScrollTopButton(scrollY > 200);
    };

    // Initial call
    handleScroll(scrollManager.getScrollY());

    const unsubscribe = scrollManager.subscribe(handleScroll);
    return unsubscribe;
  }, []);

  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.15,
        type: 'spring',
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 1, transition: { duration: 0.05 } }}
      className="fixed bottom-20pxr right-20pxr h-40pxr w-40pxr rounded-full bg-secondary hover:bg-green-500"
      style={{ display: activeScrollTopButton ? 'block' : 'none' }}
      onClick={handleScrollToTop}
      aria-label="맨 위로 버튼"
    >
      <i className="ri-skip-up-line text-24pxr text-white"></i>
    </motion.button>
  );
}
