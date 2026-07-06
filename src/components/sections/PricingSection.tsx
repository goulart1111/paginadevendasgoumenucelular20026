import { Check, Flame, Timer } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";

const includes = [
  "Acesso ao método completo",
  "Funciona pelo celular",
  "Guia de setup passo a passo",
  "Suporte para instalar e deixar rodando",
  "Atualizações quando necessário",
];

export default function PricingSection() {
  return (
    <section id="precos" className="relative">
      <div className="container px-6 py-16 md:py-24">
        <div data-reveal>
          <SectionHeading
            eyebrow="OFERTA"
            title="Remote control por preço de lanche"
            description="Sério: é praticamente impossível achar um remote control nesse valor. Quem pegar agora garante R$ 29,90 antes de subir."
          />
        </div>

        <div className="mx-auto mt-12 max-w-3xl md:mt-14">
          <div
            data-reveal
            className="relative overflow-hidden rounded-3xl border border-cyan-300/35 bg-cyan-300/8 p-6 shadow-glowCyan md:p-8"
          >
            <div className="absolute right-5 top-5 hidden rounded-full bg-amber-300/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-amber-100 ring-1 ring-amber-200/30 sm:inline-flex">
              vai subir
            </div>

            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100 ring-1 ring-cyan-300/20">
                  <Flame className="h-4 w-4" />
                  oferta de entrada
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold text-white md:text-3xl">
                  Plano único, direto ao ponto
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-white/65">
                  Sem plano escondido, sem enrolação. Você paga uma vez e já chama no suporte para receber o acesso.
                </p>
              </div>

              <div className="rounded-3xl border border-white/12 bg-black/25 p-5 text-center md:min-w-[230px]">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">de</div>
                <div className="mt-1 font-display text-2xl font-semibold text-white/40 line-through">R$ 97,90</div>
                <div className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-100/80">por apenas</div>
                <div className="mt-1 font-display text-6xl font-bold tracking-tight text-white md:text-7xl">R$ 29,90</div>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-100 ring-1 ring-amber-200/20">
                  <Timer className="h-3.5 w-3.5" />
                  logo volta a subir
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {includes.map(item => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white/[0.04] p-4 text-sm text-white/75 ring-1 ring-white/8">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-300/10 ring-1 ring-cyan-300/20">
                    <Check className="h-3.5 w-3.5 text-cyan-100/90" />
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <ButtonLink href="#contato" target="_blank" rel="noreferrer" className="w-full justify-center text-base">
                Quero garantir por R$ 29,90
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
