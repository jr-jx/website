import { AboutHero } from "@/components/about/AboutHero";
import { VisionMission } from "@/components/about/VisionMission";
import { HistoryTimeline } from "@/components/about/HistoryTimeline";
import { ValuesSection } from "@/components/about/ValuesSection";
import { ProjectDirections } from "@/components/about/ProjectDirections";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <VisionMission />
      <HistoryTimeline />
      <ValuesSection />
      <ProjectDirections />
    </div>
  );
}


