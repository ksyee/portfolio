import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border relative overflow-hidden">
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#4785ff]/5 via-transparent to-[#ff153c]/5"
        animate={{
          x: ['0%', '100%', '0%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto text-center relative z-10"
      >
        <motion.div
          className="flex items-center justify-center gap-2 mb-2"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          <span className="text-sm text-muted-foreground">Made with</span>
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Heart className="w-4 h-4 text-[#ff153c] fill-current" />
          </motion.div>
          <span className="text-sm text-muted-foreground">by 강선영</span>
        </motion.div>
        
        <p className="text-sm text-muted-foreground">
          © 2025 강선영 (ksyee). All rights reserved.
        </p>
        
        <motion.p 
          className="text-xs text-muted-foreground mt-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Built with React, TypeScript, TailwindCSS and Motion
        </motion.p>
      </motion.div>
    </footer>
  );
}
