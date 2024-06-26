import { useEffect } from 'react';
import supabase from '@/utils/supabase';
import AboutMe from '@/components/organism/AboutMe';
import Footer from '@/components/organism/Footer';
import MainSection from '@/components/organism/MainSection';
import Projects from '@/components/organism/Projects';
import Skills from '@/components/organism/Skills';

import { useProjectsStore } from '@/stores/projectsStore';

export default function Main() {
  const { projects, loadProjects } = useProjectsStore();

  useEffect(() => {
    (async () => {
      try {
        const { data, error } = await supabase
          .from('projects')
          .select('*')
          .order('id', { ascending: false });

        console.log(data);

        if (error) {
          throw error;
        }

        loadProjects(data);
        console.log(projects);
      } catch (error) {
        console.error(error);
        loadProjects([]);
      }
    })();
  }, []);

  return (
    <div className="space-y-24pxr overflow-x-hidden bg-primary">
      <MainSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
