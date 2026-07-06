import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import SiteShell from "@/components/SiteShell";
import CompatibilitySection from "@/components/sections/CompatibilitySection";
import ContactSection from "@/components/sections/ContactSection";
import FAQSection from "@/components/sections/FAQSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const checkoutHref = "#contato";
const supportHref = "#contato";
const whatsappHref = "#contato";
const contactEmail = "contato@seudominio.com";
const vslSrc = "/vsl.mp4";
const vslPoster = "/vsl-poster.jpg";

export default function Home() {
  useRevealOnScroll();

  return (
    <SiteShell
      header={
        <SiteHeader
          checkoutHref={checkoutHref}
          supportHref={supportHref}
          items={[
            { label: "Benefícios", href: "#beneficios" },
            { label: "Como funciona", href: "#como-funciona" },
            { label: "Compatibilidade", href: "#compatibilidade" },
            { label: "Preços", href: "#precos" },
            { label: "FAQ", href: "#faq" },
            { label: "Contato", href: "#contato" },
          ]}
        />
      }
      footer={<SiteFooter checkoutHref={checkoutHref} supportHref={supportHref} />}
    >
      <HeroSection checkoutHref={checkoutHref} supportHref={supportHref} videoSrc={vslSrc} videoPoster={vslPoster} />
      <FeaturesSection />
      <HowItWorksSection />
      <CompatibilitySection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection
        checkoutHref={checkoutHref}
        supportHref={supportHref}
        whatsappHref={whatsappHref}
        email={contactEmail}
      />
    </SiteShell>
  );
}
