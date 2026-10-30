import { MotionConfig } from 'motion/react';
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { HobbiesSection } from "./components/HobbiesSection";
import { DreamsSection } from "./components/DreamsSection";
import { BucketListSection } from "./components/BucketListSection";
import { ContactSection } from "./components/ContactSection";
import { StarField } from "./components/space/StarField";
import { SolarNav } from "./components/space/SolarNav";
import { useTheme } from "./components/space/useTheme";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <MotionConfig reducedMotion="user">
      <StarField theme={theme} />
      <SolarNav theme={theme} onToggleTheme={toggle} />
      <main className="relative z-10 w-full overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <HobbiesSection />
        <DreamsSection />
        <BucketListSection />
        <ContactSection />
      </main>
    </MotionConfig>
  );
}
