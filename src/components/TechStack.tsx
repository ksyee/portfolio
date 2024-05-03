import SectionTitle from '@/components/SectionTitle';
export default function TechStack() {
  return (
    <section className="mx-auto w-full cursor-default bg-primary px-32px py-16px text-white">
      <SectionTitle title={'Skill'} />
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Git</li>
        <li>GitHub</li>
        <li>supabase</li>
      </ul>
    </section>
  );
}
