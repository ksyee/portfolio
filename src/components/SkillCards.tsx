import { Skill } from '@/types/globalTypes';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

export default function SkillCards({
  skills,
  direction = 'left',
}: {
  skills: Skill[];
  direction?: 'left' | 'right';
}) {
  return (
    <Marquee direction={direction} loop={0} pauseOnHover={true}>
      <span className="after:absolute after:top-28px after:h-1px after:w-full after:bg-secondary"></span>
      {skills.map((skill) => {
        return (
          <article key={skill.id} className="select-none py-16px">
            <motion.div
              initial={{ rotate: 3 }}
              animate={{ rotate: 5 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeOut',
              }}
              className="relative mx-20px aspect-square h-240px w-240px rounded-lg border-2 border-green-600 bg-green-400 px-4px pt-8px text-center"
            >
              <span className="inline-block h-48px w-48px rounded-full bg-green-200 p-8px">
                <img
                  src={skill.image}
                  alt={skill.name + ' icon'}
                  className="mx-auto h-full select-none"
                />
              </span>
              <h3 className="text-18px font-semibold text-zinc-100">
                {skill.name}
              </h3>
              <p className="mt-8px w-full rounded-lg bg-green-600 px-4px py-8px text-14px">
                {skill.description}
              </p>
              <div className="absolute bottom-16px left-1/2 mt-30px h-40px w-[70%] -translate-x-1/2 rounded-lg bg-green-600 text-20px leading-40px">
                {skill.level}
              </div>
            </motion.div>
          </article>
        );
      })}
    </Marquee>
  );
}
