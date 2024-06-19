import { useEffect, useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import { motion } from 'framer-motion';
import { Database } from '@/types/supabase';
import ProjectDetail from '@/components/ProjectDetail';

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
    <section className="mx-auto max-w-[1500px] overflow-hidden bg-primary px-32pxr text-white">
      <SectionTitle title="projects" />
      <motion.ul
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="flex flex-wrap gap-16pxr"
      >
        {projects.map((project) => {
          return (
            <li
              key={project.id}
              className="aspect-h-10 aspect-w-16 relative w-full overflow-hidden rounded-lg"
            >
              <article className="group">
                <img
                  src={project.thumbnail ?? undefined}
                  alt={project.title ?? undefined}
                  className="mx-auto h-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-25"
                />
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center opacity-0 transition duration-700 group-hover:opacity-100">
                  <h3 className="mb-16pxr text-24pxr font-semibold">
                    {project.title}
                  </h3>
                  <button className="rounded-md border px-16pxr py-8pxr text-32pxr font-bold">
                    자세히 보기
                  </button>
                </div>
              </article>
              <ProjectDetail />
            </li>
          );
        })}
      </motion.ul>
    </section>
  );
}
