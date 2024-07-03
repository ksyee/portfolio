import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import throttle from 'lodash/throttle';

import { useScrollStore } from '@/stores/scrollStore';

import 'remixicon/fonts/remixicon.css';

export function ButtonToTop() {
  const [activeScrollTopButton, setActiveScrollTopButton] =
    useState<boolean>(false);

  const { scrollY } = useScrollStore();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    const handleScroll = throttle(() => {
      if (scrollY > 200) {
        setActiveScrollTopButton(true);
      } else {
        setActiveScrollTopButton(false);
      }
    }, 200);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

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
