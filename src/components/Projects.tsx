import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '@/components/SectionTitle';
import { Project } from '@/types/globalTypes';
import { motion } from 'framer-motion';

import 'remixicon/fonts/remixicon.css';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then((res) => res.json())
      .then((data) => setProjects(data.projects))
      .catch((err) => console.error(err));

    console.log(projects);
  }, []);

  return (
    <section className="mx-auto max-w-[1500px] overflow-hidden bg-primary px-32px text-white">
      <SectionTitle title="projects" />
      <motion.div
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
      >
        <Swiper
          scrollbar
          pagination={{
            type: 'fraction',
            el: '.swiper-pagination',
          }}
          modules={[Pagination]}
          slidesPerView={1.05}
          spaceBetween={20}
        >
          {projects.map((project) => {
            return (
              <SwiperSlide
                key={project.id}
                className={`group aspect-video overflow-hidden rounded-lg`}
              >
                <img
                  src={project.thumbnail}
                  alt={`${project.title} 페이지 스크린샷`}
                  className={`mx-auto h-full scale-100 object-cover opacity-100 transition duration-700 group-hover:scale-105 group-hover:opacity-20 group-hover:blur-[1px]`}
                />
                <article
                  className={`absolute left-1/2 top-[15%] -translate-x-1/2 space-y-12px text-zinc-100 opacity-0 transition duration-300 group-hover:opacity-100`}
                >
                  <h3 className="text-14px font-bold tablet:text-32px desktop:text-44px">
                    {project.title}
                  </h3>
                  <div className="space-y-8px text-12px tablet:text-16px desktop:text-20px">
                    <p className="space-x-8px font-medium tablet:text-18px desktop:text-22px">
                      {project.stacks.map((stack) => (
                        <i
                          key={stack}
                          className={`ri-${stack}-fill tablet:text-24px desktop:text-28px`}
                        ></i>
                      ))}{' '}
                      {'anotherStacks' in project &&
                        project.anotherStacks.map((stack, index) => {
                          return <span key={index}>{stack}</span>;
                        })}
                    </p>
                    <p>{project.description}</p>
                  </div>
                  <div className="flex items-center gap-12px">
                    <span className="mt-4px text-12px tablet:text-16px desktop:text-20px">
                      바로가기:{' '}
                    </span>
                    <div className="space-x-8px">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`새창으로 ${project.title} 페이지 열기`}
                      >
                        <i className="ri-external-link-line tablet:text-28px"></i>
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`새창으로 ${project.title} 깃허브 저장소 열기`}
                      >
                        <i className="ri-github-fill tablet:text-28px"></i>
                      </a>
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            );
          })}
          <span className="swiper-pagination absolute left-1/2 w-36px -translate-x-1/2 text-primary"></span>
        </Swiper>
      </motion.div>
    </section>
  );
}
