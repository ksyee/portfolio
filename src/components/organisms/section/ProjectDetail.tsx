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
        className="fixed left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm"
      >
        <h3 className="sr-only">프로젝트 디테일 페이지</h3>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          className="relative z-10 h-[80%] w-[95%] bg-white p-8pxr"
        >
          <ButtonCloseModal />
          <section className="after:absolute after:left-0 after:top-0 after:-z-10 after:h-[30%] after:w-full after:bg-gray-700">
            <h4 className="text-center text-24pxr">
              분실물 조회 서비스 찾아줘
            </h4>
          </section>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  );
}
