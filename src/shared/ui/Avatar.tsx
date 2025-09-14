import Picture from '@/shared/assets/image.jpg';
import { motion } from 'framer-motion';

export function Avatar() {
  return (
    <div className="flex flex-col gap-[20px]">
      <motion.figure
        className="aspect-[1/1] w-[60vw] max-w-[400px] shrink-0 overflow-hidden rounded-full shadow-primary"
        animate={{ y: [0, 14, 14, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <img src={Picture} alt="강선영 사진" />
        <figcaption className="sr-only">강선영의 프로필 사진</figcaption>
      </motion.figure>
      <div className="text-[14px]">
        <ul className="flex justify-around">
          <li>
            <span>#역지사지</span>
          </li>
          <li>
            <span>#협업의_가치</span>
          </li>
          <li>
            <span>#도전의_즐거움</span>
          </li>
          <li>
            <span>#커스텀_키보드</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
