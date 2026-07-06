import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import PhoneMock from "@/components/PhoneMock";
import VideoPlayer from "@/components/VideoPlayer";

type HeroSectionProps = {
  checkoutHref: string;
  supportHref: string;
  videoSrc?: string;
  videoPoster?: string;
};

export default function HeroSection({ checkoutHref, supportHref, videoSrc, videoPoster }: HeroSectionProps) {
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
              Use o menu do FiveM
              <span className="block bg-[linear-gradient(90deg,rgba(34,211,238,0.95),rgba(255,255,255,0.92),rgba(245,158,11,0.75))] bg-clip-text text-transparent">
                direto do celular
              </span>
            </h1>

            <p data-reveal className="mt-6 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
              Remote control pensado para ser rápido, intuitivo e bonito. Menos fricção, mais controle — com suporte e setup
              guiado.
            </p>

            <div data-reveal className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href={checkoutHref} target="_blank" rel="noreferrer">
                Comprar agora <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href={supportHref} target="_blank" rel="noreferrer" variant="secondary">
                Tirar dúvidas no suporte
              </ButtonLink>
            </div>

            <div data-reveal className="mt-9 grid gap-3 sm:grid-cols-2">
              <div className="glass rounded-3xl px-5 py-4">
                <div className="flex items-center gap-2 text-sm font-medium text-white/90">
                  <Zap className="h-4 w-4 text-cyan-200/90" />
                  Resposta rápida
                </div>
                <div className="mt-2 text-xs leading-relaxed text-white/60">
                  UI com feedback visual e ações em sequência, feita para gameplay sem enrolação.
                </div>
              </div>
              <div className="glass rounded-3xl px-5 py-4">
                <div className="flex items-center gap-2 text-sm font-medium text-white/90">
                  <ShieldCheck className="h-4 w-4 text-cyan-200/90" />
                  Setup guiado
                </div>
                <div className="mt-2 text-xs leading-relaxed text-white/60">
                  Passo a passo claro + suporte para você colocar tudo pra rodar no PC e no celular.
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5">
            <div data-reveal>
              {videoSrc ? (
                <div className="grid gap-4">
                  <VideoPlayer src={videoSrc} poster={videoPoster} title="VSL" />
                  <div className="hidden md:block">
                    <PhoneMock />
                  </div>
                </div>
              ) : (
                <PhoneMock />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
