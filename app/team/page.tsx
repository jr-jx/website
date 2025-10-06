import { TeamHero } from "@/components/team/TeamHero";
import { CoreMembers } from "@/components/team/CoreMembers";
import { Advisors } from "@/components/team/Advisors";
import { JoinUs } from "@/components/team/JoinUs";

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <TeamHero />
      <CoreMembers />
      <Advisors />
      <JoinUs />
    </div>
  );
}


