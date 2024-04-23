import SectionTitle from '@/components/SectionTitle';
import Avatar from '@/components/Avatar';

export default function AboutMe() {
  return (
    <section
      className="mx-auto w-full cursor-default bg-primary px-32px py-16px text-white"
      id="about-me"
    >
      <div className="mx-auto tablet:w-[70%] tablet:min-w-680px">
        <SectionTitle title="ABOUT ME" />
        <div className="mx-auto mt-16px flex flex-col-reverse items-center justify-between gap-16px tablet:flex-row tablet:items-center">
          <div className="text-center text-18px tablet:text-24px">
            <p>방문해주셔서 감사합니다. </p>
            <span className="inline tablet:block">
              새로운 것을 배우는 걸 즐기는 개발자,{' '}
            </span>
            <span className="font-semibold text-primary">강선영</span>입니다.
          </div>
          <Avatar />
        </div>
      </div>
    </section>
  );
}
