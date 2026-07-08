import { ArrowRight, ShieldCheck } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import VideoPlayer from "@/components/VideoPlayer";

type HeroSectionProps = {
  checkoutHref: string;
  supportHref: string;
  videoSrc?: string;
  videoPoster?: string;
};

export default function HeroSection({ checkoutHref, supportHref, videoSrc, videoPoster }: HeroSectionProps) {
  const checkoutExternal = /^https?:\/\//i.test(checkoutHref);

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-[-240px] mx-auto h-[520px] w-[860px] max-w-[120vw] rounded-full bg-cyan-400/10 blur-3xl md:top-[-280px]" />
      <div className="absolute inset-0 opacity-50 [background:radial-gradient(closest-side_at_20%_10%,rgba(255,255,255,0.06),transparent_60%)]" />

      <div className="container px-6 pb-16 pt-12 md:pb-24 md:pt-16">
        <div className="grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div data-reveal className="inline-flex items-center gap-2 rounded-full bg-white/6 px-4 py-2 text-xs text-white/70 ring-1 ring-white/12">
              <ShieldCheck className="h-4 w-4 text-cyan-200/90" />
              Método focado em fluxo estável + UI premium
            </div>

            <h1
              data-reveal
              className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white md:text-6xl"
            >
              O melhor método para
              <span className="block bg-[linear-gradient(90deg,rgba(34,211,238,0.95),rgba(255,255,255,0.92),rgba(14,165,233,0.85))] bg-clip-text text-transparent">
                xitar no FiveM
              </span>
            </h1>

            <p data-reveal className="mt-6 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
              Remote control pensado para ser rápido, legit, simples e funcional - a melhor forma de passar despercebido.
            </p>

            <div data-reveal className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink
                href={checkoutHref}
                target={checkoutExternal ? "_blank" : undefined}
                rel={checkoutExternal ? "noreferrer" : undefined}
              >
                Comprar agora <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={supportHref} target="_blank" rel="noreferrer" variant="secondary">
                Tirar dúvidas no suporte
              </ButtonLink>
            </div>
          </div>

          <div className="md:col-span-5">
            <div data-reveal>
              {videoSrc ? (
                <div className="grid gap-4">
                  <VideoPlayer src={videoSrc} poster={videoPoster} title="VSL" />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
