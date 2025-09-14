import { motion } from 'framer-motion';
import { InteractiveCard } from '@/shared/ui';

interface SkillProps {
  title: string;
  level: number;
  image: string;
  animationComplete: boolean;
}

export function Skill({ title, level, image, animationComplete }: SkillProps) {
  return (
    <InteractiveCard intensity={8}>
      <li className="flex gap-[50px] p-4 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:border-cyan-400/50">
        <div className="flex w-[120px] shrink-0 flex-col items-center gap-[16px]">
          <img
          src={image}
          alt={`${title} logo`}
          className="bounce h-[64px] w-[64px]"
          />
          <div className="space-y-[4px]">
            <h3 className="text-center text-2xl font-bold">{title}</h3>
            <div className="mx-auto h-[12px] w-[100px] rounded-full bg-zinc-50">
              <motion.div
                id="level-gauge"
                initial={{ width: 0 }}
                animate={
                  animationComplete && {
                    width: `${level}%`,
                  }
                }
                className="h-[12px] rounded-full bg-secondary"
              ></motion.div>
            </div>
          </div>
        </div>
      </li>
    </InteractiveCard>
  );
}
