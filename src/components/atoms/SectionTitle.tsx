import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <motion.h2
      initial={{ x: -150 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.7, type: 'spring' }}
      className="font-bebas text-72pxr text-primary"
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
