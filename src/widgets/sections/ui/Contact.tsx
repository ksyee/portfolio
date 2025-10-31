import { motion } from 'framer-motion';
import { SectionTitle } from '@/shared/ui';

export function Contact() {
  const contactInfo = {
    email: 'tjssud0647@gmail.com', // 실제 이메일로 변경하세요
    github: 'https://github.com/ksyee',
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  return (
    <section
      className="mx-auto max-w-[1500px] px-[32px] py-[80px] text-white"
      id="contact"
    >
      <SectionTitle title="Contact" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mx-auto max-w-[800px] text-center"
      >
        <p className="mb-[40px] text-[20px] leading-relaxed text-gray-300">
          함께 도전하며 성장하는 개발자로의 여정.
        </p>

        <ul className="mx-auto grid max-w-[600px] list-none grid-cols-1 gap-[30px] md:grid-cols-2">
          {/* Email Card */}
          <li>
            <motion.button
              onClick={handleEmailClick}
              whileHover={{ scale: 1.05 }}
              className="group relative w-full cursor-pointer overflow-hidden rounded-[20px] border border-white/10 bg-slate-800/50 p-[30px] text-left backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/50"
              aria-label="이메일로 연락하기"
            >
              <div
                className="mb-[15px] text-center text-[40px]"
                aria-hidden="true"
              >
                <i className="ri-mail-line text-cyan-400"></i>
              </div>
              <h3 className="mb-[10px] text-center text-[18px] font-bold">
                Email
              </h3>
              <p className="text-center text-[14px] text-gray-400 transition-colors hover:text-cyan-400">
                {contactInfo.email}
              </p>
            </motion.button>
          </li>

          {/* GitHub Card */}
          <li>
            <motion.a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="group relative block overflow-hidden rounded-[20px] border border-white/10 bg-slate-800/50 p-[30px] backdrop-blur-xl transition-all duration-300 hover:border-purple-400/50"
              aria-label="GitHub 프로필 방문"
            >
              <div className="mb-[15px] text-[40px]" aria-hidden="true">
                <i className="ri-github-fill text-purple-400"></i>
              </div>
              <h3 className="mb-[10px] text-[18px] font-bold">GitHub</h3>
              <p className="text-[14px] text-gray-400 transition-colors hover:text-purple-400">
                github.com/ksyee
              </p>
            </motion.a>
          </li>
        </ul>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-[50px]"
        >
          <button
            onClick={handleEmailClick}
            className="hover:shadow-lg inline-flex items-center gap-[10px] rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-[40px] py-[15px] text-[16px] font-semibold text-white transition-all hover:scale-105 hover:shadow-cyan-400/25"
          >
            <i className="ri-send-plane-line text-[20px]"></i>
            메시지 보내기
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
