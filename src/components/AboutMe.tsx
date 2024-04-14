import SectionTitle from '@/components/SectionTitle';
import Avatar from '@/components/Avatar';

export default function AboutMe() {
  return (
    <section className="mx-auto w-[90%] cursor-default bg-primary text-white">
      <SectionTitle title="ABOUT ME" />
      <p>
        새로운 것을 배우는 걸 즐기는 개발자,{' '}
        <span className="font-semibold text-primary">강선영</span>입니다.
      </p>
      <Avatar />
    </section>
  );
}
