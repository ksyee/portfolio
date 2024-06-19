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
    <li className="flex w-full items-center space-x-16pxr md:w-1/2">
      <img src={image} alt={`${title} logo`} className="h-64pxr w-64pxr" />
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="h-12pxr w-100pxr rounded-full bg-zinc-50">
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
    </li>
  );
}
