import { motion } from 'framer-motion';

interface ButtonLinkProps {
  children: React.ReactNode;
  href: string;
  title: string;
}

export function ButtonLink({ children, href, title }: ButtonLinkProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-[2px]">
      <motion.a
        initial={{ scale: 1 }}
        whileHover={{
          scale: 1.15,
          type: 'spring',
          transition: { duration: 0.1 },
        }}
        whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-black bg-white text-[30px] text-black md:border-none"
        aria-label={title}
      >
        {children}
      </motion.a>
      <span className="hidden text-nowrap text-[12px] md:block">{title}</span>
    </div>
  );
}
