import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <motion.h2
      initial={{ x: -100 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.6, type: 'spring' }}
      className="font-bebas text-72px text-primary"
    >
      {title.split('').map((character, index) => {
        if (character === ' ') return <span key={index}>&nbsp;</span>;
        return (
          <span key={index} className="bounce">
            {character}
          </span>
        );
      })}
    </motion.h2>
  );
}
