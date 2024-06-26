import MainSection from '@/components/organism/MainSection';
import AboutMe from '@/components/organism/AboutMe';
import Skills from '@/components/organism/Skills';
import Projects from '@/components/organism/Projects';
import Footer from '@/components/organism/Footer';
import Navbar from '@/components/organism/Navbar';

export default function App() {
  return (
    <div className="space-y-24pxr overflow-x-hidden scroll-smooth bg-primary">
      <Navbar />
      <MainSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
