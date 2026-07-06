import SectionHeading from "@/components/SectionHeading";
import { howSteps } from "@/utils/landingContent";

export default function HowItWorksSection() {
  return (
    <section id="como-funciona" className="relative">
      <div className="container px-6 py-16 md:py-24">
        <div data-reveal>
          <SectionHeading
            eyebrow="COMO FUNCIONA"
            title="Fluxo simples, com feedback claro"
            description="Você configura uma vez e depois o uso vira rotina. O celular vira o painel de controle do menu."
          />
        </div>

        <div className="mt-12 grid gap-4 md:mt-14 md:grid-cols-2">
          {howSteps.map((step, idx) => (
            <div
              key={step.id}
              data-reveal
              className="relative overflow-hidden rounded-3xl border border-white/12 bg-white/3 p-6"
              style={{ transitionDelay: `${Math.min(idx * 70, 280)}ms` }}
            >
              <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl" />
              <div className="absolute -left-28 -bottom-28 h-56 w-56 rounded-full bg-amber-500/8 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/6 text-sm font-semibold text-white ring-1 ring-white/12">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="font-display text-base font-semibold text-white">{step.title}</div>
                </div>
                <div className="mt-3 text-sm leading-relaxed text-white/65">{step.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

