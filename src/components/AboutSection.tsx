import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Terminal, Sparkles, Zap, Target } from "lucide-react";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const highlights = [
    {
      icon: <Terminal className="w-6 h-6" />,
      text: "React & TypeScript",
      color: "#4785ff",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      text: "인터랙티브 UI/UX",
      color: "#ff153c",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      text: "성능 최적화",
      color: "#fbbf24",
    },
    {
      icon: <Target className="w-6 h-6" />,
      text: "목표 지향",
      color: "#10b981",
    },
  ];

  return (
    <section
      ref={ref}
      id="about"
      className="py-20 px-6 relative overflow-hidden"
    >
      {/* Background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-[#4785ff] rounded-full blur-[120px] opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={
            isInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 50 }
          }
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-8 text-center">
            About Me
          </h2>

          <div className="space-y-6 text-muted-foreground mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -30 }
              }
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
              <motion.div
                className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#4785ff] to-transparent rounded-full"
                initial={{ height: 0 }}
                animate={
                  isInView ? { height: "100%" } : { height: 0 }
                }
                transition={{ delay: 0.2, duration: 0.8 }}
              />
              <p className="pl-4">
                안녕하세요. 프론트엔드 개발자 강선영입니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -30 }
              }
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <motion.div
                className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#ff153c] to-transparent rounded-full"
                initial={{ height: 0 }}
                animate={
                  isInView ? { height: "100%" } : { height: 0 }
                }
                transition={{ delay: 0.4, duration: 0.8 }}
              />
              <p className="pl-4">
                사용자 경험을 최우선으로 생각하며, 심플하면서도
                인터랙티브한 웹 애플리케이션을 만드는 것을
                좋아합니다. React와 TypeScript를 주로 사용하며,
                성능 최적화와 코드 품질에 관심이 많습니다.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={
                isInView
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: -30 }
              }
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#3f3f46] to-transparent rounded-full"
                initial={{ height: 0 }}
                animate={
                  isInView ? { height: "100%" } : { height: 0 }
                }
                transition={{ duration: 0.8 }}
              />
              <p className="pl-4">
                팀 프로젝트에서는 유틸리티 함수 작성과 코드
                재사용성을 높이는 작업을 즐겨하며, 팀원들과 함께
                성장하는 것을 중요하게 생각합니다.
              </p>
            </motion.div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((item, index) => {
              const [isHovered, setIsHovered] = useState(false);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.5 }
                  }
                  transition={{
                    duration: 0.2,
                  }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  className="flex flex-col items-center gap-2 p-4 bg-card rounded-lg border border-border relative overflow-hidden"
                  style={{
                    transition: "transform 0.15s ease-out",
                  }}
                >
                  <motion.div
                    className="absolute inset-0"
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{
                      duration: 0.15,
                      ease: "easeOut",
                    }}
                    style={{
                      background: `linear-gradient(135deg, ${item.color}10, transparent)`,
                    }}
                  />
                  <motion.div
                    className="p-3 rounded-full relative z-10"
                    style={{
                      backgroundColor: `${item.color}20`,
                    }}
                    animate={{ rotate: isHovered ? 360 : 0 }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  >
                    <div style={{ color: item.color }}>
                      {item.icon}
                    </div>
                  </motion.div>
                  <span className="text-sm text-center relative z-10">
                    {item.text}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}