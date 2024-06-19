import SectionTitle from '@/components/SectionTitle';
import Avatar from '@/components/Avatar';
import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <section
      className="px-32pxr mx-auto w-full max-w-[1500px] cursor-default bg-primary text-white"
      id="about-me"
    >
      <SectionTitle title="about me" />
      <div className="space-y-32pxr">
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="mt-16pxr gap-16pxr md:gap-32pxr lg:pxr-32pxr mx-auto flex flex-col-reverse items-center justify-between md:flex-row md:items-center"
        >
          <article
            className="text-16pxr md:text-18pxr lg:text-22pxr text-center"
            aria-label="강선영의 자기소개글"
          >
            <p className="text-24pxr mb-4pxr md:text-32pxr font-semibold">
              <span className="block">방문해주셔서 감사합니다.</span>
              <span className="inline">
                새로운 것을 배우는 걸 즐기는 개발자,{' '}
              </span>
              <span className="font-bold text-primary">강선영</span>입니다.
            </p>
            <p>
              사용자 친화적인 서비스를 위해 접근성을 준수하고, 다양한
              라이브러리를 활용하여 사용자 경험 향상을 위해 힘쓰고 있습니다.
            </p>
            <p>
              사용자가 쉽고 재미있게 이용할 수 있는 서비스를 만들고 싶습니다.
            </p>
          </article>
          <Avatar />
        </motion.div>
      </div>
    </section>
  );
}
