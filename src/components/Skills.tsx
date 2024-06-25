import SectionTitle from '@/components/SectionTitle';
import Skill from '@/components/Skill';
import supabase from '@/utils/supabase';
import { useEffect, useState } from 'react';
import { Database } from '@/types/supabase';
import { motion } from 'framer-motion';

type Skill = Database['public']['Tables']['skills']['Row'];

export default function Skills() {
  const [skills, setSkills] = useState<Skill[] | null>([]);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('id', { ascending: true });

      if (error) {
        console.error(error);
        setSkills(null);
        return;
      }

      setSkills(data);
    })();
  }, []);

  return (
    <section
      className="relative mx-auto w-full max-w-[1500px] cursor-default bg-primary px-32pxr py-16pxr text-white"
      id="skills"
    >
      <SectionTitle title={'skills'} />
      <motion.ul
        initial={{ x: 100 }}
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
