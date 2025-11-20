import { motion, useMotionValue, useTransform } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../data/portfolio-data';
import { useState } from 'react';
import { GithubIcon } from './icons/GithubIcon';

interface ProjectCardProps {
  project: Project;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

export function ProjectCard({
  project,
  index,
  isExpanded,
  onToggle,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  const formatPeriod = () => {
    const start = project.period.start.filter(Boolean).join('.');
    const end = project.period.end.filter(Boolean).join('.');
    return `${start} ~ ${end}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative"
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow background on hover */}
      <motion.div
        className="absolute -inset-1 rounded-2xl blur-xl opacity-0"
        style={{ backgroundColor: project.color }}
        animate={{ opacity: isHovered ? 0.3 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <div
        className="bg-card rounded-2xl border-2 border-border overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative flex flex-col"
        style={{
          backgroundColor: 'var(--card)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
        }}
      >
        {/* Animated gradient overlay */}
        <motion.div
          className="absolute inset-0 opacity-0 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${project.color}15 0%, transparent 50%, ${project.color}15 100%)`,
          }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Color bar with shimmer */}
        <div className="relative h-1.5 w-full overflow-hidden">
          <div
            className="h-full w-full"
            style={{ backgroundColor: project.color }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            animate={{
              x: isHovered ? ['0%', '200%'] : '0%',
            }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
            }}
          />
        </div>

        <div className="p-6 flex flex-col">
          {/* Header */}
          <div>
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="text-2xl flex-1">{project.title}</h3>
              <div className="flex gap-2 flex-shrink-0">
                {project.link.web && (
                  <motion.a
                    href={project.link.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors"
                    aria-label="View live site"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                )}
                {project.link.github && (
                  <motion.a
                    href={project.link.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-muted hover:bg-accent transition-colors"
                    aria-label="View on GitHub"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </motion.a>
                )}
              </div>
            </div>

            <p className="text-muted-foreground mb-3">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-3">
              {project.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="px-3 py-1 bg-muted rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>

            <div className="flex gap-4 text-sm text-muted-foreground">
              <span>{formatPeriod()}</span>
              <span>•</span>
              <span>{project.member}</span>
              <span>•</span>
              <span>기여도 {project.contribution}%</span>
            </div>
          </div>

          {/* Tech stack */}
          <div className="mb-4 mt-6">
            <h4 className="text-sm mb-2 text-muted-foreground">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-accent/50 rounded text-sm"
                  style={{ borderLeft: `3px solid ${project.color}` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Expandable content */}
          <motion.div
            initial={false}
            animate={{ height: isExpanded ? 'auto' : 0 }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-border space-y-4">
              {/* Features */}
              <div>
                <h4 className="mb-2">주요 기능</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Retrospect */}
              <div>
                <h4 className="mb-2">회고</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {project.retrospect.map((item, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Toggle button */}
          <motion.button
            onClick={onToggle}
            className="mt-4 w-full py-3 text-sm text-muted-foreground hover:text-foreground transition-colors border-t border-border"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isExpanded ? '접기 ▲' : '자세히 보기 ▼'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
