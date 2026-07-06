import SiteHeader from "@/components/SiteHeader";
import SiteShell from "@/components/SiteShell";
import ContactSection from "@/components/sections/ContactSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PricingSection from "@/components/sections/PricingSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

const checkoutHref = "#precos";
const supportHref = "https://discord.gg/gourp";
const whatsappHref = "https://wa.me/5532998284648";
const contactEmail = "support@goupay.com.br";
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
            { label: "Feedbacks", href: "#prova" },
            { label: "Como funciona", href: "#como-funciona" },
            { label: "Preços", href: "#precos" },
            { label: "Contato", href: "#contato" },
          ]}
        />
      }
    >
      <HeroSection checkoutHref={checkoutHref} supportHref={supportHref} videoSrc={vslSrc} videoPoster={vslPoster} />
      <FeaturesSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <PricingSection />
      <ContactSection supportHref={supportHref} whatsappHref={whatsappHref} email={contactEmail} />
    </SiteShell>
  );
}
