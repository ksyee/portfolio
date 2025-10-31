import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import { useModal } from '@/app/providers';

import 'remixicon/fonts/remixicon.css';

export function ButtonCloseModal() {
  const navigate = useNavigate();
  const { closeModal } = useModal();

  const handleClick = () => {
    closeModal();
    navigate('/');
  };

  return (
    <motion.button
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.15,
        type: 'spring',
        transition: { duration: 0.1 },
      }}
      whileTap={{ scale: 1, transition: { duration: 0.05 } }}
      className="bg-gray- flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-black md:border md:border-white"
      onClick={handleClick}
    >
      <i className="ri-close-line text-[30px] leading-none text-white"></i>
    </motion.button>
  );
}
