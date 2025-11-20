import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { FloatingShapes } from './FloatingShapes';
import { useEffect, useState } from 'react';

interface HeroSectionProps {
  onScrollToAbout: () => void;
}

export function HeroSection({ onScrollToAbout }: HeroSectionProps) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [typedText, setTypedText] = useState('');
  const fullName = '강선영';

  useEffect(() => {
    const controls = animate(count, 100, {
      duration: 2,
      delay: 1,
    });
    return controls.stop;
  }, [count]);

  // Typing effect
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setTypedText(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 200);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating shapes background */}
      <FloatingShapes />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-6xl md:text-8xl mb-4"
          >
            <span className="inline-block">
              {typedText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
                className="inline-block w-1 h-16 md:h-24 bg-primary ml-2 align-middle"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-2xl md:text-4xl mb-4"
          >
            Frontend Developer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-muted-foreground mb-4"
          >
            ksyee
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            심플하고 인터랙티브한 웹 경험을 만드는 것을 즐기는 프론트엔드
            개발자입니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex gap-8 justify-center items-center flex-wrap"
          >
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="text-3xl"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              >
                ⚡
              </motion.div>
              <span className="text-sm text-muted-foreground">
                본질을 파고드는
              </span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="text-3xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                🚀
              </motion.div>
              <span className="text-sm text-muted-foreground">
                빠르게 학습하는 개발자
              </span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="text-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                💡
              </motion.div>
              <motion.span className="text-sm text-muted-foreground">
                <motion.span>{rounded}</motion.span>% 열정
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={onScrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </motion.button>
    </section>
  );
}
