import MainSection from '@/pages/MainSection';
import AboutMe from '@/components/AboutMe';
import TechStack from '@/components/TechStack';
import Projects from './components/Projects';

export default function App() {
  return (
    <div className="space-y-24px bg-primary">
      <MainSection />
      <AboutMe />
      <Projects />
      <TechStack />
    </div>
  );
}
