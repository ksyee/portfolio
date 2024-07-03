import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/molecules';

import { useModalStore } from '@/stores/modalStore';
import { useProjectsStore } from '@/stores/projectsStore';
import { Link, Outlet } from 'react-router-dom';
import { Badge, Keywords } from '@/components/atoms';

export function Projects() {
  const { projects } = useProjectsStore();
  const { open } = useModalStore();

  const handleClickDetail = () => {
    open();
  };

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
                  className="mx-auto h-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-15"
                />
                <div className="absolute left-1/2 top-[10%] flex -translate-x-1/2 flex-col gap-8pxr text-center opacity-0 transition duration-700 group-hover:opacity-100 sm:top-[15%] md:top-[20%] md:gap-16pxr">
                  <h3 className="text-nowrap text-16pxr font-semibold sm:text-20pxr lg:text-24pxr">
                    {project.title}
                  </h3>
                  <Link
                    onClick={handleClickDetail}
                    to={`/${project.code}`}
                    className="group/link rounded-md border px-16pxr py-8pxr transition hover:bg-white "
                  >
                    <span className="text-14pxr font-bold transition group-hover/link:text-black sm:text-20pxr">
                      자세히 보기
                    </span>
                  </Link>
                  <div className="absolute -bottom-44pxr left-1/2 mx-auto flex -translate-x-1/2 gap-6pxr">
                    <Keywords keywords={project.keywords} />
                  </div>
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
