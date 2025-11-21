import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Mail, FileText } from 'lucide-react';
import { GithubIcon } from './icons/GithubIcon';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const contacts = [
    {
      icon: <GithubIcon className="w-6 h-6" />,
      label: 'GitHub',
      value: 'github.com/ksyee',
      href: 'https://github.com/ksyee',
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'tjssud0647@gmail.com',
      href: 'mailto:tjssud0647@gmail.com',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      label: 'Portfolio',
      value: 'ksyee.dev',
      href: 'https://ksyee.dev',
    },
  ];

  return (
    <section ref={ref} id="contact" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl mb-8">Contact</h2>

          <p className="text-lg text-muted-foreground mb-12">
            함께 일하고 싶으시다면 언제든 연락주세요!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contacts.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.2, delay: 0 },
                }}
                className="flex flex-col items-center gap-3 p-6 bg-card rounded-lg border border-border shadow-sm hover:shadow-md transition-all relative overflow-hidden group"
              >
                {/* Gradient background on hover */}
                <motion.div className="absolute inset-0 bg-gradient-to-br from-[#4785ff]/10 via-transparent to-[#ff153c]/10 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />

                <motion.div
                  className="p-3 bg-primary/10 rounded-full text-primary relative z-10"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {contact.icon}
                </motion.div>
                <div className="relative z-10">
                  <p className="text-sm text-muted-foreground mb-1">
                    {contact.label}
                  </p>
                  <motion.p
                    className="text-sm"
                    whileHover={{ color: '#4785ff' }}
                  >
                    {contact.value}
                  </motion.p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
