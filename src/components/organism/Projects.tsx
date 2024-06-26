// import { useEffect, useState } from 'react';
import { SectionTitle } from '@/components/molecules';
import { motion } from 'framer-motion';
// import { Database } from '@/types/supabase';
import { useProjectsStore } from '@/stores/projectsStore';

import 'remixicon/fonts/remixicon.css';
// import supabase from '@/utils/supabase';

// type Project = Database['public']['Tables']['projects']['Row'];

export function Projects() {
  const { projects } = useProjectsStore();

  // const [projects, setProjects] = useState<Project[]>([]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { data, error } = await supabase
  //         .from('projects')
  //         .select('*')
  //         .order('id', { ascending: false });

  //       console.log(data);

  //       if (error) {
  //         throw error;
  //       }

  //       setProjects(data);
  //     } catch (error) {
  //       console.error(error);
  //       setProjects([]);
  //     }
  //   })();
  // }, []);

  if (!projects.length) {
    return (
      <section
        className="mx-auto max-w-[1500px] overflow-hidden bg-primary px-32pxr text-white"
        id="projects"
      >
        <SectionTitle title="projects" />
        <p className="text-bold text-24pxr">프로젝트가 없습니다.</p>
      </section>
    );
  }

  return (
    <section
      className="mx-auto max-w-[1500px] overflow-hidden bg-primary px-32pxr text-white"
      id="projects"
    >
      <SectionTitle title="projects" />
      <motion.ul
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="grid gap-16pxr md:grid-cols-2"
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
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-y-8pxr text-center opacity-0 transition duration-700 group-hover:opacity-100 md:space-y-16pxr">
                  <h3 className="text-16pxr font-semibold sm:text-24pxr">
                    {project.title}
                  </h3>
                  <button className="rounded-md border px-16pxr py-8pxr text-14pxr font-bold sm:text-20pxr">
                    자세히 보기
                  </button>
                </div>
              </article>
            </li>
          );
        })}
      </motion.ul>
    </section>
  );
}
