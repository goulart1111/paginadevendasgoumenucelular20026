import { Check } from "lucide-react";
import { ButtonLink } from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";
import { pricingPlans } from "@/utils/landingContent";

export default function PricingSection() {
  return (
    <section id="precos" className="relative">
      <div className="container px-6 py-16 md:py-24">
        <div data-reveal>
          <SectionHeading
            eyebrow="PLANOS"
            title="Escolha o caminho mais direto"
            description="Planos simples, sem mistério. Se quiser confirmar compatibilidade antes, chama no suporte."
          />
        </div>

        <div className="mt-12 grid gap-4 md:mt-14 md:grid-cols-3">
          {pricingPlans.map((plan, idx) => (
            <div
              key={plan.id}
              data-reveal
              className={cn(
                "relative overflow-hidden rounded-3xl border p-6",
                plan.highlighted
                  ? "border-cyan-300/30 bg-cyan-300/8 shadow-glowCyan"
                  : "border-white/12 bg-white/3",
              )}
              style={{ transitionDelay: `${Math.min(idx * 75, 300)}ms` }}
            >
              {plan.highlighted ? (
                <div className="absolute right-5 top-5 rounded-full bg-cyan-200/15 px-3 py-1 text-[11px] font-semibold text-cyan-100 ring-1 ring-cyan-200/30">
                  recomendado
                </div>
              ) : null}

              <div className="font-display text-base font-semibold text-white">{plan.name}</div>
              <div className="mt-3 flex items-end justify-between gap-3">
                <div className="font-display text-3xl font-semibold tracking-tight text-white">{plan.price}</div>
                <div className="text-xs text-white/55">{plan.note}</div>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-white/70">
                {plan.includes.map(item => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/6 ring-1 ring-white/10">
                      <Check className="h-3.5 w-3.5 text-cyan-100/90" />
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <ButtonLink href={plan.ctaHref} variant={plan.highlighted ? "primary" : "secondary"} className="w-full">
                  {plan.ctaLabel}
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

