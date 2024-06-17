import { useEffect, useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { Database } from '@/types/supabase';

import 'remixicon/fonts/remixicon.css';
import supabase from '@/utils/supabase';

type Project = Database['public']['Tables']['projects']['Row'];

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('id', { ascending: true });

      if (error) {
        console.error(error);
        setProjects([]);
        return;
      }

      setProjects(data);
    })();
  }, []);

  console.log(projects);

  return (
    <section className="px-32pxr mx-auto max-w-[1500px] overflow-hidden bg-primary text-white">
      <SectionTitle title="projects" />
      <motion.div
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </motion.div>
    </section>
  );
}
