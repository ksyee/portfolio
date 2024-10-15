import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { SectionTitle } from '@/components/atoms';
import { Avatar } from '@/components/molecules';

import { useModalStore } from '@/stores/modalStore';

export function AboutMe() {
  const { open } = useModalStore();

  const handleClick = () => {
    open();
  };

  return (
    <section
      className="mx-auto w-full max-w-[1500px] cursor-default px-32pxr text-white"
      id="about-me"
    >
      <SectionTitle title="about me" />
      <motion.div
        initial={{ x: 150 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.7, type: 'spring' }}
        className="lg:pxr-32pxr mx-auto mt-16pxr flex flex-col-reverse items-center justify-between gap-32pxr md:flex-row md:items-center md:gap-60pxr md:px-44pxr"
      >
        <article
          className="flex flex-col gap-8pxr text-center text-16pxr lg:text-22pxr"
          aria-label="강선영의 자기소개글"
        >
          <p className="mb-4pxr text-20pxr font-semibold lg:text-24pxr">
            <span className="mb-8pxr block text-24pxr lg:text-28pxr">
              방문해주셔서 감사합니다.
            </span>
            <span className="inline">
              함께 성장하는 가치를 아는 개발자{' '}
            </span>
            <span className="font-bold text-primary">강선영</span>
            입니다.
          </p>
          {/*<p>*/}
          {/*  저는 혼자보다는 함께 하는 것을 좋아하며, 지식을 공유하면서 서로의*/}
          {/*  성장을 돕는 개발 문화를 지향합니다. 서로의 부족한 부분을 채워주는*/}
          {/*  이러한 문화가 개발자를 더욱 성숙하게 성장시킬 수 있는 기반이 된다고*/}
          {/*  믿습니다.*/}
          {/*</p>*/}
          <Link
            onClick={handleClick}
            to="/peer_review"
            aria-label="동료 평가 보기 버튼"
            className="group/link mx-auto mt-28pxr flex h-44pxr w-160pxr items-center justify-around rounded border px-8pxr transition hover:bg-white hover:text-black"
          >
            <span className="mt-2pxr text-16pxr font-semibold leading-none">
              동료 평가 보기
            </span>
            <i className="ri-arrow-right-s-line text-24pxr"></i>
          </Link>
        </article>
        <Avatar />
      </motion.div>
    </section>
  );
}
