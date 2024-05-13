import MainSection from '@/pages/MainSection';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="space-y-24px overflow-x-hidden bg-primary">
      <MainSection />
      <AboutMe />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
