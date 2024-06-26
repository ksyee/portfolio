import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/molecules';

import { useProjectsStore } from '@/stores/projectsStore';
import { Link, Outlet } from 'react-router-dom';

export function Projects() {
  const { projects } = useProjectsStore();

  if (!projects.length) {
    return (
      <section
        className="mx-auto max-w-[1500px] overflow-hidden px-32pxr text-white"
        id="projects"
      >
        <SectionTitle title="projects" />
        <p className="text-bold text-24pxr">프로젝트를 로드하지 못했습니다.</p>
      </section>
    );
  }

  return (
    <section
      className="mx-auto max-w-[1500px] overflow-hidden px-32pxr text-white"
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
                  <Link
                    to={`/${project.id}`}
                    className="rounded-md border px-16pxr py-8pxr text-14pxr font-bold sm:text-20pxr"
                  >
                    자세히 보기
                  </Link>
                </div>
              </article>
            </li>
          );
        })}
      </motion.ul>
      <Outlet />
    </section>
  );
}
