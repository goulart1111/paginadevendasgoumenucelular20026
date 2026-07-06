import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";
import { features } from "@/utils/landingContent";

export default function FeaturesSection() {
  return (
    <section id="beneficios" className="relative border-y border-white/10">
      <div className="container px-6 py-16 md:py-24">
        <div data-reveal>
          <SectionHeading eyebrow="BENEFÍCIOS" title="Um método melhor que esses xits por aí" />
        </div>

        <div className="mt-12 grid gap-4 md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, idx) => (
            <div
              key={f.id}
              data-reveal
              className={cn(
                "glass group rounded-3xl p-6 transition hover:bg-white/6",
                idx === 1 ? "md:translate-y-3" : "",
                idx === 4 ? "lg:-translate-y-4" : "",
              )}
              style={{ transitionDelay: `${Math.min(idx * 55, 240)}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-display text-base font-semibold text-white">{f.title}</div>
                  <div className="mt-2 text-sm leading-relaxed text-white/65">{f.description}</div>
                </div>
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 ring-1 ring-cyan-300/20 transition group-hover:shadow-glowCyan">
                  <f.Icon className="h-5 w-5 text-cyan-100/90" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
