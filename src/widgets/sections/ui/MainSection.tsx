import { motion } from 'framer-motion';
import { TypingEffect } from '@/shared/ui';

import 'remixicon/fonts/remixicon.css';

export function MainSection() {
  const name = '강선영';

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
    });
  };

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section className="relative h-screen w-full">
      <section className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col gap-1 text-center text-[36px] font-bold">
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="tablet:text-[150px] whitespace-nowrap text-[92px] leading-tight"
        >
          <TypingEffect
            text={name}
            delay={1200}
            speed={150}
            className="bounce cursor-default bg-gradient-to-r from-blue-400 via-purple-500 to-pink-400 bg-clip-text font-JalnanGothic leading-tight text-transparent"
          />
        </motion.div>
        <motion.span
          className="relative font-bebas text-[32px] leading-none text-gray-300"
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
        >
          <TypingEffect
            text="Web Developer"
            delay={2100}
            speed={100}
            className="inline-block"
          />
          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.6, type: 'spring' }}
            style={{ transformOrigin: 'left', translateX: '-50%' }}
            className="absolute bottom-0 left-1/2 h-0.5 w-[160px] bg-gradient-to-r from-blue-400 to-purple-500"
          ></motion.span>
        </motion.span>
        <motion.p
          className="mt-[20px] max-w-[600px] px-[20px] text-[16px] leading-relaxed text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          사용자 여정을 데이터로 해석하고 감각적인 인터랙션으로 답을 제시합니다.
          실험과 리팩터링을 반복하며 팀이 신뢰하는 확장형 프론트엔드를
          만들어가는 개발자입니다.
        </motion.p>
        <div className="mt-10 flex justify-center gap-5">
          <motion.button
            onClick={handleScrollToProjects}
            className="hover:shadow-lg rounded-full bg-gradient-button px-[30px] py-3.5 text-[16px] font-semibold text-white transition-all hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            프로젝트 보기
          </motion.button>
          <motion.button
            onClick={handleScrollToContact}
            className="rounded-full border-2 border-purple-500 px-[30px] py-3.5 text-[16px] font-semibold text-purple-400 transition-all hover:bg-purple-500 hover:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            연락하기
          </motion.button>
        </div>
      </section>
      <button
        onClick={handleScroll}
        className="absolute bottom-[100px] left-1/2 flex -translate-x-1/2 flex-col"
        aria-label="아래 스크롤 버튼"
      >
        <i className="ri-mouse-line text-[40px] text-white"></i>
        <i className="ri-arrow-down-s-line absolute left-[calc(50%-17px)] top-[44px] animate-bounce text-[34px] text-white"></i>
      </button>
    </section>
  );
}
