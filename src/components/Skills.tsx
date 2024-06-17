import SectionTitle from '@/components/SectionTitle';
import Skill from '@/components/Skill';
import supabase from '@/utils/supabase';
import { useEffect, useState } from 'react';
import { Database } from '@/types/supabase';
import { motion } from 'framer-motion';

type Skill = Database['public']['Tables']['skills']['Row'];

export default function Skills() {
  const [skills, setSkills] = useState<Skill[] | null>([]);

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
    <section className="px-32pxr py-16pxr relative mx-auto w-full max-w-[1500px] cursor-default bg-primary text-white">
      <SectionTitle title={'skills'} />
      <motion.ul
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ type: 'spring', duration: 0.6 }}
        className="space-y-32pxr flex flex-wrap"
      >
        {skills?.map((skill) => (
          <Skill
            key={skill.id}
            title={skill.title || 'Untitled'}
            level={skill.level || 0}
            image={skill.image || ''}
          />
        ))}
      </motion.ul>
    </section>
  );
}
