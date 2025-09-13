import { motion } from 'framer-motion';
import { Link, Outlet } from 'react-router-dom';
import { useRef } from 'react';

import { SectionTitle } from '@/shared/ui';
import { Keywords } from '@/features/project-detail/ui/Keywords';

import { useModal, useProjects } from '@/app/providers';

export function Projects() {
  const { projects } = useProjects();
  const { openModal } = useModal();

  const handleClickDetail = (code: string) => {
    openModal(code);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 5;
    const rotateY = ((x - centerX) / centerX) * 5;

    e.currentTarget.style.transform = `perspective(1000px) translateY(-10px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = '';
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
      className="mx-auto max-w-[1500px] px-32pxr text-white"
      id="projects"
    >
      <SectionTitle title="projects" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="grid gap-40pxr grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-20pxr border border-white/10 bg-slate-800/50 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-violet-500 hover:shadow-xl hover:shadow-violet-500/20"
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
                willChange: 'transform',
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={project.thumbnail ?? undefined}
                  alt={project.title ?? undefined}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 transition-all duration-300 group-hover:bg-black/40" />
              </div>

              <div className="p-30pxr">
                <h3 className="mb-15pxr text-24pxr font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
                  {project.title}
                </h3>

                <p className="mb-20pxr leading-relaxed text-slate-300">
                  {project.description || '프로젝트 설명이 준비 중입니다.'}
                </p>

                <div className="mb-20pxr flex flex-wrap gap-8pxr">
                  <Keywords keywords={project.keywords} />
                </div>

                <div className="flex gap-15pxr">
                  <Link
                    onClick={() => handleClickDetail(project.code)}
                    to={`/${project.code}`}
                    aria-label={`${project.title} 프로젝트 자세히 보기`}
                    className="inline-flex items-center rounded-8pxr bg-gradient-to-r from-cyan-400 to-violet-500 px-20pxr py-10pxr text-14pxr font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
                  >
                    Demo
                  </Link>

                  <a
                    href="#"
                    className="inline-flex items-center rounded-8pxr border border-cyan-400 px-20pxr py-10pxr text-14pxr font-medium text-cyan-400 transition-all duration-300 hover:scale-105 hover:bg-cyan-400/10"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </motion.div>
      <Outlet />
    </section>
  );
}
