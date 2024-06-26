import { motion } from 'framer-motion';
import mouseIcon from '@/assets/mouse.png';
import arrowDownAnimation from '@/assets/arrow-down.png';
import { UserParticles } from '@/components/molecules';

export function MainSection() {
  const name = '강선영';

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-screen w-full">
      <UserParticles />
      <h1 className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col text-center text-36pxr font-bold text-primary">
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="tablet:text-150pxr whitespace-nowrap text-92pxr leading-none"
        >
          {name.split('').map((character, index) => {
            return (
              <span
                key={index}
                className="bounce cursor-default font-JalnanGothic text-primary"
              >
                {character}
              </span>
            );
          })}
        </motion.div>
        <motion.span
          className="relative font-bebas text-24pxr leading-none text-white"
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          <span className="text-primary">Front-end</span> Developer
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6, type: 'spring' }}
            style={{ transformOrigin: 'left', translateX: '-50%' }}
            className="absolute bottom-0 left-1/2 h-2pxr w-166pxr bg-secondary"
          ></motion.span>
        </motion.span>
        <motion.span
          className="font-bebas text-white"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          portfolio
        </motion.span>
      </h1>
      <button
        onClick={handleScroll}
        className="absolute bottom-100pxr left-1/2 -translate-x-1/2"
        aria-label="스크롤 버튼"
      >
        <img src={mouseIcon} alt="마우스 아이콘" />
        <img
          src={arrowDownAnimation}
          alt="화살표 아이콘 - 아래"
          className="absolute left-[calc(50%-12px)] mt-8pxr w-24pxr animate-bounce"
        />
      </button>
    </section>
  );
}
