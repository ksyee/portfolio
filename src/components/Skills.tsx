import { useEffect, useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import SkillCards from '@/components/SkillCards';
import { Skill } from '@/types/globalTypes';

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    fetch('/data/data.json')
      .then((res) => res.json())
      .then((data) => setSkills(data.skills))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="relative mx-auto w-full max-w-[1500px] cursor-default bg-primary px-32px py-16px text-white">
      <SectionTitle title={'skills'} />
      <div className="space-y-32px">
        <SkillCards skills={skills} />
        <SkillCards skills={skills} direction="right" />
      </div>
    </section>
  );
}
