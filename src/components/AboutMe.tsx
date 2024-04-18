import SectionTitle from '@/components/SectionTitle';
import Avatar from '@/components/Avatar';

export default function AboutMe() {
  return (
    <section
      className="mx-auto w-full cursor-default bg-primary px-32px py-16px text-white"
      id="about-me"
    >
      <div className="mx-auto desktop:w-[70%]">
        <SectionTitle title="ABOUT ME" />
        <div className="mx-auto mt-16px flex flex-col-reverse items-center justify-between gap-16px tablet:flex-row tablet:items-start">
          <p className="text-18px">
            새로운 것을 배우는 걸 즐기는 개발자,{' '}
            <span className="font-semibold text-primary">강선영</span>입니다.
          </p>
          <Avatar />
        </div>
      </div>
    </section>
  );
}
