import { useEffect, useState } from 'react';
import throttle from 'lodash/throttle';

import {
  ButtonToTop,
  CustomCursor,
  LoadingScreen,
  ScrollProgressBar,
  ParticleBackground
} from '@/shared/ui';
import {
  MainSection,
  AboutMe,
  Skills,
  Projects,
  Contact,
  Footer,
  Header,
} from '@/widgets/sections';

import { useScroll } from '@/app/providers';

export default function HomePage() {
  const { setScrollY } = useScroll();
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);


  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
    }, 200);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setScrollY]);

  return (
    <>
      {/* Loading Screen */}
      {!isLoadingComplete && (
        <LoadingScreen onLoadComplete={() => setIsLoadingComplete(true)} />
      )}
      
      {/* Interactive Elements */}
      <CustomCursor />
      <ScrollProgressBar />
      <ParticleBackground />
      {/* <ParticleSystem /> - Disabled to reduce performance overhead */}
      
      {/* Main Content */}
      <div className="space-y-[24px] overflow-x-hidden cursor-none" style={{ background: 'transparent' }}>
        <Header />
        <main className="space-y-[24px]">
          <MainSection />
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ButtonToTop />
      </div>
    </>
  );
}
