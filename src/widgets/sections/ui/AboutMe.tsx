import { SectionTitle, Avatar } from '@/shared/ui';

export function AboutMe() {
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
              반갑습니다.
            </span>
            <span className="inline">
              새로운 가능성을 실험하며 성장하는 웹 개발자{' '}
            </span>
            <span className="font-bold text-primary">강선영</span>
            입니다.
          </p>
          <p className="mt-[16px] text-[18px] leading-relaxed text-gray-300 lg:text-[20px]">
            눈앞의 기능 구현을 넘어, 사용자 리서치에서 얻은 인사이트를{' '}
            <strong className="text-cyan-400">React</strong>와{' '}
            <strong className="text-cyan-400">TypeScript</strong>로 빠르게
            구현하고, 성능 프로파일링과 접근성 진단으로 사용자가 체감하는 품질을
            높입니다. 공공데이터 기반 시민 서비스부터 실시간 분석 대시보드까지
            다양한 제품에서
            <strong className="text-purple-400">
              {' '}
              복잡한 요구를 쉽게 풀어내는 UX
            </strong>
            를 설계하며 배운 통찰을 다음 도전에 과감히 투자합니다.
          </p>
          <p className="mt-[8px] text-[18px] leading-relaxed text-gray-300 lg:text-[20px]">
            실패를 기록하고 회고하며 성장 그래프를 스스로 그립니다. 문제를
            집요하게 파고들되, 팀과 아이디어를 나누고 실험하는 과정을 통해 더
            빠르게 배우는 방법을 찾습니다. 새로운 기술과 사람, 더 나은 경험을
            발견하는 일에 언제나 뜨겁게 반응하는 개발자입니다.
          </p>
          <div className="text-base">
            <ul className="flex justify-center gap-8">
              <li>
                <span>#성장하는_프론트엔드</span>
              </li>
              <li>
                <span>#실험하는_열정</span>
              </li>
              <li>
                <span>#집요한_문제해결</span>
              </li>
              <li>
                <span>#함께_크는_팀</span>
              </li>
            </ul>
          </div>
        </article>

        <Avatar />
      </div>
    </section>
  );
}
