import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { cn } from "@/lib/utils";
import { faqItems } from "@/utils/landingContent";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <section id="faq" className="relative">
      <div className="container px-6 py-16 md:py-24">
        <div data-reveal>
          <SectionHeading
            eyebrow="FAQ"
            title="Dúvidas comuns, respostas diretas"
            description="Se a sua dúvida não estiver aqui, chama no suporte. Melhor confirmar antes de comprar."
          />
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-3 md:mt-14">
          {faqItems.map((item, idx) => {
            const open = item.id === openId;
            return (
              <div
                key={item.id}
                data-reveal
                className={cn(
                  "overflow-hidden rounded-3xl border transition",
                  open ? "border-cyan-300/25 bg-cyan-300/6" : "border-white/12 bg-white/3 hover:bg-white/5",
                )}
                style={{ transitionDelay: `${Math.min(idx * 55, 240)}ms` }}
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  onClick={() => setOpenId(prev => (prev === item.id ? null : item.id))}
                >
                  <span className="font-display text-sm font-semibold text-white">{item.question}</span>
                  <ChevronDown className={cn("h-5 w-5 text-white/70 transition", open ? "rotate-180" : "rotate-0")} />
                </button>
                <div className={cn("grid transition-[grid-template-rows] duration-300", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <div className="overflow-hidden px-6 pb-5 text-sm leading-relaxed text-white/70">{item.answer}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

