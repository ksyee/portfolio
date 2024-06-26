import {
  Navbar,
  MainSection,
  AboutMe,
  Skills,
  Projects,
  Footer,
} from '@/components/organism';

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
