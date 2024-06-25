import { motion } from 'framer-motion';

interface SkillProps {
  title: string;
  level: number;
  image: string;
  animationComplete: boolean;
}

export default function Skill({
  title,
  level,
  image,
  animationComplete,
}: SkillProps) {
  return (
    <li className="flex gap-50pxr">
      <div className="flex w-120pxr shrink-0 flex-col items-center gap-16pxr">
        <img src={image} alt={`${title} logo`} className="h-64pxr w-64pxr" />
        <div className="space-y-4pxr">
          <h3 className="text-center text-2xl font-bold">{title}</h3>
          <div className="mx-auto h-12pxr w-100pxr rounded-full bg-zinc-50">
            <motion.div
              id="level-gauge"
              initial={{ width: 0 }}
              animate={
                animationComplete && {
                  width: `${level}%`,
                }
              }
              className="h-12pxr rounded-full bg-secondary"
            ></motion.div>
          </div>
        </div>
      </div>
    </li>
  );
}
