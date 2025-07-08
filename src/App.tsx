import { useEffect } from 'react';
import supabase from '@/utils/supabase';
import throttle from 'lodash/throttle';

import { ButtonToTop } from '@/components/atoms';
import {
  MainSection,
  AboutMe,
  Skills,
  Projects,
  Footer,
  Header,
} from '@/components/organisms/section';

import { useProjectsStore } from '@/stores/projectsStore';
import { useScrollStore } from '@/stores/scrollStore';

export default function App() {
  const { loadProjects } = useProjectsStore();
  const { setScrollY } = useScrollStore();

  useEffect(() => {
    (async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('id', { ascending: false });

        if (error) {
          throw error;
        }

        loadProjects(data);
      } catch (error) {
        console.error(error);
        loadProjects([]);
      }
    })().catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err);
    });
  }, [loadProjects]);

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
    <div className="space-y-24pxr overflow-x-hidden bg-primary">
      <Header />
      <main className="space-y-24pxr">
        <MainSection />
        <AboutMe />
        <Skills />
        <Projects />
      </main>
      <Footer />
      <ButtonToTop />
    </div>
  );
}
