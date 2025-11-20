import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { projects } from '../data/portfolio-data';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const handleToggle = (code: string) => {
    setExpandedCard(expandedCard === code ? null : code);
  };

  return (
    <section ref={ref} id="projects" className="py-20 px-6 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-12 text-center">Projects</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.code}
                project={project}
                index={index}
                isExpanded={expandedCard === project.code}
                onToggle={() => handleToggle(project.code)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
