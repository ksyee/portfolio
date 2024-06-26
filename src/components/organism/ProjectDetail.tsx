import { motion } from 'framer-motion';

type Project = {
  title: string;
  thumbnail: string;
};

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <motion.section>
      <div className="fixed bg-black bg-opacity-25"></div>
      <article className="fixed left-1/2 top-1/2 z-10 h-[500px] w-[90vw] max-w-[1500px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white text-black">
        <img
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
          className="w-full object-cover"
        />
        <h4 className="">{project.title}</h4>
      </article>
    </motion.section>
  );
}
