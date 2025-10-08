import { JoinProcess } from "@/components/join/JoinProcess";
import { JoinRequirements } from "@/components/join/JoinRequirements";
import { JoinFAQ } from "@/components/join/JoinFAQ";
import { PageContainer } from "@/components/ui/PageContainer";

export default function JoinPage() {
  return (
    <PageContainer variant="hero">
      <JoinProcess />
      <JoinRequirements />
      <JoinFAQ />
    </PageContainer>
  );
}
