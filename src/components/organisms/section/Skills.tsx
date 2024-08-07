import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { SectionTitle } from '@/components/atoms';
import { Skill } from '@/components/molecules';

import supabase from '@/utils/supabase';
import type { Skills } from '@/@types/skills';

export function Skills() {
  const [skills, setSkills] = useState<Skills[]>([]);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('id', { ascending: true });

      if (error) {
        console.error(error);
        setSkills([]);
        return;
      }

      setSkills(data);
    })();
  }, []);

  return (
    <section
      className="relative mx-auto w-full max-w-[1500px] cursor-default px-32pxr py-16pxr text-white"
      id="skills"
    >
      <SectionTitle title={'skills'} />
      <motion.ul
        initial={{ x: 150 }}
        whileInView={{ x: 0 }}
        transition={{ type: 'spring', duration: 0.7 }}
        onAnimationComplete={() => setAnimationComplete(true)}
        className="mt-20pxr flex flex-wrap justify-center gap-32pxr"
      >
        {skills?.map((skill) => (
          <Skill
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
