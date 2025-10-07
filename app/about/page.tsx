import { AboutHero } from "@/components/about/AboutHero";
import { VisionMission } from "@/components/about/VisionMission";
import { HistoryTimeline } from "@/components/about/HistoryTimeline";
import { ValuesSection } from "@/components/about/ValuesSection";
import { ProjectDirections } from "@/components/about/ProjectDirections";
import { PageContainer } from "@/components/ui/PageContainer";

export default function AboutPage() {
  return (
    <PageContainer variant="hero">
      <AboutHero />
      <VisionMission />
      <HistoryTimeline />
      <ValuesSection />
      <ProjectDirections />
    </PageContainer>
  );
}


