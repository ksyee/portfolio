import { motion, AnimatePresence } from 'framer-motion';
import { ButtonCloseModal } from '@/components/atoms';

import { useDetailModalStore } from '@/stores/detailModalStore';

import 'remixicon/fonts/remixicon.css';

export function ProjectDetailFindIt() {
  const { isOpen } = useDetailModalStore();
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed left-0 top-0 z-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50"
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
      )}
    </AnimatePresence>
  );
}
