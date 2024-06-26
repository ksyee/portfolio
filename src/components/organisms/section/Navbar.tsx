import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { useScrollStore } from '@/stores/scrollStore';

export function Navbar() {
  const { scrollY, setScrollY } = useScrollStore();
  const [navView, setNavVite] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (scrollY - window.scrollY > 10) {
        setNavVite(true);
      }

      if (scrollY - window.scrollY < -10) {
        setNavVite(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
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
