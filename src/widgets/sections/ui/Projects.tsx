import { motion } from 'framer-motion';
import { Link, Outlet } from 'react-router-dom';

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
        className="mx-auto max-w-[1500px] overflow-hidden px-[32px] text-white"
        id="projects"
      >
        <SectionTitle title="projects" />
        <p className="text-bold text-[24px]">프로젝트를 로드하지 못했습니다.</p>
      </section>
    );
  }

  return (
    <section
      className="mx-auto max-w-[1500px] px-[32px] text-white"
      id="projects"
    >
      <SectionTitle title="projects" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="grid grid-cols-1 gap-[40px] md:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="hover:shadow-xl group relative overflow-hidden rounded-[20px] border border-white/10 bg-slate-800/50 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-violet-500 hover:shadow-violet-500/20"
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

              <div className="p-[30px]">
                <h3 className="mb-[15px] text-[24px] font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">
                  {project.title}
                </h3>

                <p className="mb-[20px] leading-relaxed text-slate-300">
                  {project.description || '프로젝트 설명이 준비 중입니다.'}
                </p>

                <div className="mb-[20px] flex flex-wrap gap-[8px]">
                  <Keywords keywords={project.keywords} />
                </div>

                <div className="flex gap-[15px]">
                  <Link
                    onClick={() => handleClickDetail(project.code)}
                    to={`/${project.code}`}
                    aria-label={`${project.title} 프로젝트 자세히 보기`}
                    className="rounded-[8px] hover:shadow-lg inline-flex items-center bg-gradient-to-r from-cyan-400 to-violet-500 px-[20px] py-[10px] text-[14px] font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/25"
                  >
                    자세히 보기
                  </Link>

                  <a
                    href={project.link.web || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[8px] inline-flex items-center border border-cyan-400 px-[20px] py-[10px] text-[14px] font-medium text-cyan-400 transition-all duration-300 hover:scale-105 hover:bg-cyan-400/10"
                  >
                    Demo
                  </a>

                  <a
                    href={project.link.github || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[8px] inline-flex items-center border border-cyan-400 px-[20px] py-[10px] text-[14px] font-medium text-cyan-400 transition-all duration-300 hover:scale-105 hover:bg-cyan-400/10"
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
