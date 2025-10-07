import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ContactMap } from "@/components/contact/ContactMap";
import { PageContainer } from "@/components/ui/PageContainer";

export default function ContactPage() {
  return (
    <PageContainer variant="hero">
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <ContactMap />
    </PageContainer>
  );
}


