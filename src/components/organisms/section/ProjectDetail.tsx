import { motion, AnimatePresence } from 'framer-motion';
import { ButtonCloseModal } from '@/components/atoms';

import 'remixicon/fonts/remixicon.css';
import { useEffect } from 'react';

export function ProjectDetail() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          className="relative z-10 h-[80%] w-[95%] bg-white p-8pxr text-black"
        >
          <ButtonCloseModal />
          <h3>테스트</h3>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
}
