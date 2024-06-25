import AboutMe from '@/components/AboutMe';
import Footer from '@/components/Footer';
import MainSection from '@/components/MainSection';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';

export default function Main() {
  return (
    <div className="space-y-24pxr overflow-x-hidden bg-primary">
      <MainSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
