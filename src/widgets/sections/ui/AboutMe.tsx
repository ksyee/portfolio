import { Link } from 'react-router-dom';

import { SectionTitle, Avatar } from '@/shared/ui';

import { useModal } from '@/app/providers';

export function AboutMe() {
  const { openModal } = useModal();

  const handleClick = () => {
    openModal('peer_review');
  };

  return (
    <section
      className="mx-auto w-full max-w-[1500px] cursor-default px-[32px] text-white"
      id="about-me"
    >
      <SectionTitle title="about me" />
      <div className="lg:pxr-[32px] mx-auto mt-[16px] flex flex-col-reverse items-center justify-between gap-[32px] md:flex-row md:items-center md:gap-[60px] md:px-[44px]">
        <article
          className="flex flex-col gap-[8px] text-center text-[16px] lg:text-[22px]"
          aria-label="강선영의 자기소개글"
        >
          <p className="mb-[4px] text-[24px] font-semibold lg:text-[30px]">
            <span className="mb-[8px] block text-[32px] lg:text-[40px]">
              방문해주셔서 감사합니다.
            </span>
            <span className="inline">
              사용자 경험을 중시하는 풀스택 개발자{' '}
            </span>
            <span className="font-bold text-primary">강선영</span>
            입니다.
          </p>
          <p className="mt-[16px] text-[18px] leading-relaxed text-gray-300 lg:text-[20px]">
            <strong className="text-cyan-400">React</strong>와{' '}
            <strong className="text-cyan-400">TypeScript</strong>를 활용한
            프론트엔드 개발에 특화되어 있으며, 성능 최적화와 사용자 접근성을
            중요하게 생각합니다. 공공데이터 API부터 실시간 분석 시스템까지
            다양한 프로젝트를 통해
            <strong className="text-purple-400"> 문제 해결 능력</strong>과
            <strong className="text-purple-400">기술적 성장</strong>을 추구하고
            있습니다.
          </p>
          <Link
            onClick={handleClick}
            to="/peer_review"
            aria-label="동료 평가 보기 버튼"
            className="group/link mx-auto mt-[28px] flex h-[44px] w-[160px] items-center justify-around rounded border px-[8px] transition hover:bg-white hover:text-black"
          >
            <span className="mt-[2px] text-[16px] font-semibold leading-none">
              동료 평가 보기
            </span>
            <i className="ri-arrow-right-s-line text-[24px]"></i>
          </Link>
        </article>
        <Avatar />
      </div>
    </section>
  );
}
