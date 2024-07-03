import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import throttle from 'lodash/throttle';

import { useScrollStore } from '@/stores/scrollStore';

export function Navbar() {
  const { scrollY } = useScrollStore();
  const [navView, setNavVite] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;

      // 네이게이션바가 보이는지 여부
      if (scrollY - currentScrollY > 10) {
        setNavVite(true);
      }
      if (scrollY - currentScrollY < -10) {
        setNavVite(false);
      }
    }, 200);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: navView ? 0 : -100, transition: { duration: 0.4 } }}
      className="fixed z-10 w-screen bg-black bg-opacity-75 py-8pxr text-white"
    >
      <ul className="flex gap-20pxr text-18pxr font-semibold">
        <li className="px-20pxr">
          <h1 className="text-40pxr font-black text-primary">
            <a href="#">ksyee</a>
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
