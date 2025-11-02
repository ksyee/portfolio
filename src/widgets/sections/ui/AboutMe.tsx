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
          className="flex flex-col items-center gap-[16px] text-center text-[16px] md:items-start md:text-left lg:text-[22px]"
          aria-label="강선영의 자기소개글"
        >
          <p className="space-y-[8px]">
            <span className="block text-[32px] font-semibold lg:text-[40px]">
              반갑습니다.
            </span>
            <span className="block text-[24px] font-semibold lg:text-[30px]">
              새로운 가능성을 실험하며 성장하는 웹 개발자{' '}
              <span className="font-bold text-primary">강선영</span>입니다.
            </span>
          </p>
          <div className="w-full space-y-[12px] text-[18px] leading-relaxed text-gray-300 lg:text-[20px]">
            <p>
              사용자 리서치에서 발견한 통찰을{' '}
              <strong className="text-cyan-400">React</strong>와{' '}
              <strong className="text-cyan-400">TypeScript</strong>로 빠르게
              검증하고, 성능 프로파일링과 접근성 진단으로 사용자가 체감하는
              품질을 끝까지 챙깁니다.
            </p>
            <p>
              공공데이터 기반 시민 서비스부터 실시간 분석 대시보드까지 다양한
              제품을 다루며
              <strong className="text-purple-400">
                {' '}
                복잡한 요구를 쉽게 풀어내는 UX
              </strong>
              를 설계했습니다. 또한{' '}
              <strong className="text-cyan-400">Spring</strong> 기반 백엔드를
              직접 다루며 병목이던 API를 리팩터링해 응답 시간을 절반으로 줄인
              경험으로 전후단을 아우르는 시야를 갖추었습니다.
            </p>
          </div>
          <div className="w-full space-y-[12px]">
            <ul className="w-full space-y-[12px] rounded-[16px] border border-white/10 bg-white/5 p-[20px] text-[17px] leading-relaxed text-gray-300 lg:text-[19px]">
              <li>
                사용자 문제의 본질을 정의하고, 빠른 실험으로 해결 가설을
                검증합니다.
              </li>
              <li>
                코드 품질과 성능, 접근성을 모두 고려한 UI/UX 개선으로 팀의
                목표를 견인합니다.
              </li>
              <li>
                실시간 회고와 문서화를 통해 배운 내용을 팀과 공유하며 성장
                곡선을 함께 그립니다.
              </li>
            </ul>
            <p className="text-[18px] leading-relaxed text-gray-300 lg:text-[20px]">
              실패를 두려워하기보다 기록하고 해석하면서 다음 실험의 연료로
              삼습니다. 새로운 기술과 사람, 더 나은 경험을 만나는 일에 설렘으로
              반응하는 개발자로 남고자 합니다.
            </p>
          </div>
          <div className="text-base">
            <ul className="flex flex-wrap justify-center gap-4 md:justify-start">
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
                <span>#Spring으로_실전해결</span>
              </li>
            </ul>
          </div>
        </article>

        <Avatar />
      </div>
    </section>
  );
}
