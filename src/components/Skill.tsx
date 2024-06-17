import { motion } from 'framer-motion';

interface SkillProps {
  title: string;
  level: number;
  image: string;
}

export default function Skill({ title, level, image }: SkillProps) {
  return (
    <li className="space-x-16pxr flex w-full items-center tablet:w-1/2">
      <img src={image} alt={`${title} logo`} className="h-64pxr w-64pxr" />
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="w-100pxr h-12pxr rounded-full bg-zinc-50">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="h-12pxr rounded-full bg-secondary"
          ></motion.div>
        </div>
      </div>
    </li>
  );
}
