import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { SectionTitle } from '@/shared/ui';
import { Skill as SkillComponent } from '@/features/skills';
import { skillsApi } from '@/entities/skill';
import type { Skill } from '@/entities/skill';

export function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const data = await skillsApi.getAll();
        setSkills(data);
      } catch (error) {
        console.error('Failed to fetch skills:', error);
        setSkills([]);
      }
    };

    fetchSkills().catch((error) => {
      console.error('Failed to fetch skills:', error);
    });
  }, []);

  return (
    <section
      className="relative mx-auto w-full max-w-[1500px] cursor-default px-[32px] py-[16px] text-white"
      id="skills"
    >
      <SectionTitle title={'skills'} />
      <motion.ul
        initial={{ x: 150 }}
        whileInView={{ x: 0 }}
        transition={{ type: 'spring', duration: 0.7 }}
        onAnimationComplete={() => setAnimationComplete(true)}
        className="mt-[20px] flex flex-wrap justify-center gap-[32px]"
      >
        {skills?.map((skill) => (
          <SkillComponent
            key={skill.id}
            title={skill.title || 'Untitled'}
            level={skill.level || 0}
            image={skill.image || ''}
            animationComplete={animationComplete}
          />
        ))}
      </motion.ul>
    </section>
  );
}
