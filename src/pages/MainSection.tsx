import { motion } from 'framer-motion';
import mouseIcon from '@/assets/mouse.png';
import arrowDownAnimation from '@/assets/arrow-down.png';
import UserParticles from '@/components/UserParticles';

export default function Ma4nSection() {
  const name = '강선영';
  // const [viewHeight, setViewHeight] = useState<number>(window.innerHeight);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setViewHeight(window.innerHeight);
  //   };

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <section className="relative h-screen w-full">
      <UserParticles />
      <h1 className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col text-center text-36px font-bold text-primary">
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="whitespace-nowrap text-92px leading-none tablet:text-150px"
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
          className="relative font-bebas text-24px leading-none text-white"
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
            className="absolute bottom-0 left-1/2 h-2px w-166px bg-secondary"
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
      <a
        href="#about-me"
        className="absolute bottom-100px left-1/2 -translate-x-1/2"
        aria-label="스크롤 버튼"
      >
        <img src={mouseIcon} />
        <img
          src={arrowDownAnimation}
          className="absolute left-[calc(50%-12px)] mt-8px w-24px animate-bounce"
        />
      </a>
    </section>
  );
}
