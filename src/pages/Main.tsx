import { useEffect } from 'react';
import supabase from '@/utils/supabase';

import {
  MainSection,
  AboutMe,
  Skills,
  Projects,
  Footer,
} from '@/components/organism';

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
