import { JoinHero } from "@/components/join/JoinHero";
import { JoinProcess } from "@/components/join/JoinProcess";
import { JoinRequirements } from "@/components/join/JoinRequirements";
import { JoinFAQ } from "@/components/join/JoinFAQ";
import { JoinCTA } from "@/components/join/JoinCTA";
import { PageContainer } from "@/components/ui/PageContainer";

export default function JoinPage() {
  return (
    <PageContainer variant="hero">
      <JoinHero />
      <JoinProcess />
      <JoinRequirements />
      <JoinFAQ />
      <JoinCTA />
    </PageContainer>
  );
}


