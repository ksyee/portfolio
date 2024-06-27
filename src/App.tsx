import { useEffect } from 'react';
import supabase from '@/utils/supabase';

import {
  MainSection,
  AboutMe,
  Skills,
  Projects,
  Footer,
  Header,
} from '@/components/organisms/section';

import { useProjectsStore } from '@/stores/projectsStore';

export default function App() {
  const { loadProjects } = useProjectsStore();

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
    })();
  }, []);

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
    </div>
  );
}
