import HeroMain from '../sections/HeroMain';
import HeroNew from '../sections/HeroNew';
import AboutMe from '../sections/AboutMe';
import CollaborationSection from '../sections/CollaborationSection';
import AboutSection from '../sections/AboutSection';
import SkillsNew from '../sections/SkillsNew';
import ProjectsNew from '../sections/ProjectsNew';
import Contact from '../sections/Contact';
import FloatingActions from '../components/FloatingActions';


export default function Home() {
  return (
    <main className="min-h-screen text-white">
      {/* Header and Footer are rendered by RootLayout */}
      <HeroMain />
      <HeroNew />
      <AboutMe />
      <CollaborationSection />

      <AboutSection />
      <SkillsNew />
      <ProjectsNew />
      <Contact />
      <FloatingActions />
    </main>
  );
}
