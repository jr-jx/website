import { TeamHero } from "@/components/team/TeamHero";
import { CoreMembers } from "@/components/team/CoreMembers";
import { Advisors } from "@/components/team/Advisors";
import { JoinUs } from "@/components/team/JoinUs";
import { PageContainer } from "@/components/ui/PageContainer";

export default function TeamPage() {
  return (
    <PageContainer variant="hero">
      <TeamHero />
      <CoreMembers />
      <Advisors />
      <JoinUs />
    </PageContainer>
  );
}


