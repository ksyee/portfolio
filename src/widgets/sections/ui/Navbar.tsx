import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { scrollManager } from '@/shared/utils/scrollManager';

export function Navbar() {
  const [navView, setNavView] = useState<boolean>(true);
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = (currentScrollY: number) => {
      const diff = currentScrollY - lastScrollY.current;

      // 네비게이션바가 보이는지 여부
      if (diff > 10) {
        setNavView(false);
      } else if (diff < -10) {
        setNavView(true);
      }

      lastScrollY.current = currentScrollY;
    };

    // Initial call
    lastScrollY.current = scrollManager.getScrollY();

    const unsubscribe = scrollManager.subscribe(handleScroll);
    return unsubscribe;
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: navView ? 0 : -100, transition: { duration: 0.4 } }}
      className="fixed z-10 w-screen bg-black bg-opacity-75 py-8pxr text-white"
    >
      <ul className="flex gap-20pxr text-18pxr font-semibold">
        <li className="px-20pxr">
          <h1 className="text-40pxr font-black text-primary">
            <a href="/" aria-label="Homepage">
              ksyee
            </a>
          </h1>
        </li>
        <li className="center">
          <a href="#about-me" className="uppercase">
            About Me
          </a>
        </li>
        <li className="center uppercase">
          <a href="#skills">Skills</a>
        </li>
        <li className="center uppercase">
          <a href="#projects">Projects</a>
        </li>
      </ul>
    </motion.nav>
  );
}
