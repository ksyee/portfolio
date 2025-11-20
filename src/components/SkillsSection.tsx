import { motion, useMotionValue, useTransform } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { skills } from '../data/portfolio-data';

function SkillCard({
  skill,
  index,
  isInView,
}: {
  skill: any;
  index: number;
  isInView: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

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

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group"
    >
      <div className="bg-card rounded-lg p-6 border border-border shadow-sm relative overflow-hidden">
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#4785ff]/20 via-transparent to-[#ff153c]/20 opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Animated corner accent */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent rounded-bl-full"
          animate={{
            scale: isHovered ? 1.5 : 1,
            opacity: isHovered ? 0.5 : 0.2,
          }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10">
          <div className="flex justify-between items-start mb-3">
            <h3 className="text-xl">{skill.title}</h3>
            <span className="text-sm text-muted-foreground px-2 py-1 bg-muted rounded">
              {skill.level}%
            </span>
          </div>

          <div className="w-full bg-muted rounded-full h-2 mb-3 overflow-hidden relative">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-[#4785ff] via-[#3f3f46] to-[#ff153c]"
              initial={{ width: 0, opacity: 0.5 }}
              animate={
                isInView
                  ? { width: `${skill.level}%`, opacity: 1 }
                  : { width: 0, opacity: 0.5 }
              }
              transition={{
                delay: index * 0.1 + 0.3,
                duration: 1,
                ease: 'easeOut',
              }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-1/3"
              animate={{
                x: isInView ? ['-100%', '300%'] : '-100%',
              }}
              transition={{
                delay: index * 0.1 + 0.5,
                duration: 1.5,
                ease: 'easeInOut',
              }}
              style={{ mixBlendMode: 'overlay' }}
            />
          </div>

          <p className="text-sm text-muted-foreground">{skill.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      ref={ref}
      id="skills"
      className="py-20 px-6 bg-muted/30 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#4785ff] rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#ff153c] rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl mb-12 text-center"
            animate={{
              backgroundImage: [
                'linear-gradient(to right, currentColor, currentColor)',
                'linear-gradient(to right, #4785ff, #ff153c, currentColor)',
                'linear-gradient(to right, currentColor, currentColor)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
          >
            Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.id}
                skill={skill}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
