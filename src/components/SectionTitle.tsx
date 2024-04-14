import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <motion.h2 className="font-bebas text-72px text-primary">
      {title.split('').map((character) => {
        if (character === ' ') return <span>&nbsp;</span>;
        return <span className="bounce">{character}</span>;
      })}
    </motion.h2>
  );
}
