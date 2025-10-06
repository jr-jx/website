import { JoinHero } from "@/components/join/JoinHero";
import { JoinProcess } from "@/components/join/JoinProcess";
import { JoinRequirements } from "@/components/join/JoinRequirements";
import { JoinFAQ } from "@/components/join/JoinFAQ";
import { JoinCTA } from "@/components/join/JoinCTA";

export default function JoinPage() {
  return (
    <div className="min-h-screen">
      <JoinHero />
      <JoinProcess />
      <JoinRequirements />
      <JoinFAQ />
      <JoinCTA />
    </div>
  );
}


