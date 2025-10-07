import { HeroSection } from "@/components/home/HeroSection";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { StatsSection } from "@/components/home/StatsSection";
import { CTA } from "@/components/home/CTA";
import { PageContainer } from "@/components/ui/PageContainer";

export default function Home() {
  return (
    <PageContainer variant="hero">
      <HeroSection />
      <FeatureGrid />
      <StatsSection />
      <CTA />
    </PageContainer>
  );
}
