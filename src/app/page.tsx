import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { DirectionSection } from "@/components/DirectionSection";
import { TimelineSection } from "@/components/TimelineSection";
import { ContactSection } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[var(--outer-mat)] px-2 py-2 sm:px-5 sm:py-4 md:px-7 md:py-5 lg:px-9">
      <div className="mx-auto max-w-[1440px] shadow-[0_24px_80px_rgba(26,17,17,0.28)]">
        <HeroSection />
        <main>
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ProcessSection />
          <DirectionSection />
          <TimelineSection />
          <ContactSection />
        </main>
        <FooterSection />
      </div>
    </div>
  );
}
