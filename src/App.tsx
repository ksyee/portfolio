import MainSection from '@/components/MainSection';
import AboutMe from '@/components/AboutMe';
import Skills from '@/components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Nav from './components/Nav';

export default function App() {
  return (
    <div className="space-y-24pxr overflow-x-hidden scroll-smooth bg-primary">
      <Nav />
      <MainSection />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
