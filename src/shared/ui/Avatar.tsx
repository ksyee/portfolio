import Picture from '@/shared/assets/image.jpg';
import { motion } from 'framer-motion';

export function Avatar() {
  return (
    <div className="flex flex-col gap-[20px]">
      <motion.figure
        className="aspect-[1/1] w-[60vw] max-w-[380px] shrink-0 overflow-hidden rounded-full shadow-primary"
        animate={{ y: [0, 14, 14, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <img src={Picture} alt="강선영 사진" />
        <figcaption className="sr-only">강선영의 프로필 사진</figcaption>
      </motion.figure>
      <motion.div
        className="mx-auto h-0.5 w-9/12 rounded-full bg-violet-400 bg-gradient-primary opacity-50"
        initial={{ width: 0 }}
        whileInView={{ width: '75%' }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      ></motion.div>
    </div>
  );
}
