import { Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { testimonials } from "@/utils/landingContent";

export default function TestimonialsSection() {
  return (
    <section id="prova" className="relative border-y border-white/10">
      <div className="container px-6 py-16 md:py-24">
        <div data-reveal>
          <SectionHeading
            eyebrow="PROVA"
            title="Confiança se constrói no detalhe"
            description="A intenção é entregar uma experiência com cara de produto: sólida, clara e com suporte de verdade."
          />
        </div>

        <div className="mt-12 grid gap-4 md:mt-14 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div
              key={t.id}
              data-reveal
              className="glass rounded-3xl p-6"
              style={{ transitionDelay: `${Math.min(idx * 70, 240)}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="font-display text-sm font-semibold text-white">{t.name}</div>
                <Quote className="h-4 w-4 text-cyan-200/80" />
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/70">{t.text}</p>
            </div>
          ))}
        </div>

        <div data-reveal className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-white/12 bg-white/3 p-6 text-center">
            <div className="font-display text-2xl font-semibold text-white">+99</div>
            <div className="mt-2 text-xs tracking-wide text-white/55">configurações feitas</div>
          </div>
          <div className="rounded-3xl border border-cyan-300/18 bg-cyan-300/6 p-6 text-center">
            <div className="font-display text-2xl font-semibold text-white">setup</div>
            <div className="mt-2 text-xs tracking-wide text-white/55">guiado e direto</div>
          </div>
          <div className="rounded-3xl border border-white/12 bg-white/3 p-6 text-center">
            <div className="font-display text-2xl font-semibold text-white">24/7</div>
            <div className="mt-2 text-xs tracking-wide text-white/55">canal de suporte</div>
          </div>
        </div>
      </div>
    </section>
  );
}

