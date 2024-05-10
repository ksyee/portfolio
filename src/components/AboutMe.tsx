import SectionTitle from '@/components/SectionTitle';
import Avatar from '@/components/Avatar';
import { motion } from 'framer-motion';

export default function AboutMe() {
  return (
    <section
      className="mx-auto w-full max-w-[1500px] cursor-default bg-primary px-32px text-white"
      id="about-me"
    >
      <SectionTitle title="about me" />
      <motion.div
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="mx-auto mt-16px flex flex-col-reverse items-center justify-between gap-16px tablet:flex-row tablet:items-center tablet:gap-32px desktop:px-32px"
      >
        <div className="text-center text-16px tablet:text-18px desktop:text-22px">
          <p>방문해주셔서 감사합니다. </p>
          <span className="inline">새로운 것을 배우는 걸 즐기는 개발자, </span>
          <p className="inline text-nowrap">
            <span className="font-bold text-primary">강선영</span>입니다.
          </p>
          <p>
            고립된 개발자가 아닌, 함께 일하는{' '}
            <span className="font-bold text-primary">'동료'</span>가 되어 일하고
            싶습니다.
          </p>
          <p>
            개인적인 목표로는 나의 실력적인 성장은 물론이요 인격적으로도 모나지
            않은,
            <br /> 같이 일하고 싶은 사람이 되는 것입니다.
          </p>
        </div>
        <Avatar />
      </motion.div>
    </section>
  );
}
