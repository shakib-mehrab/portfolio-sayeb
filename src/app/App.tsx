import { MotionConfig } from 'motion/react';
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { HobbiesSection } from "./components/HobbiesSection";
import { DreamsSection } from "./components/DreamsSection";
import { BucketListSection } from "./components/BucketListSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  return (
    <MotionConfig reducedMotion="never">
      <div className="relative w-full overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <HobbiesSection />
        <DreamsSection />
        <BucketListSection />
        <ContactSection />
      </div>
    </MotionConfig>
  );
}