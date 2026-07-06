import SectionHeading from "@/components/SectionHeading";
import { compatibilityBadges } from "@/utils/landingContent";

export default function CompatibilitySection() {
  return (
    <section id="compatibilidade" className="relative border-y border-white/10">
      <div className="container px-6 py-16 md:py-24">
        <div data-reveal>
          <SectionHeading
            eyebrow="COMPATIBILIDADE"
            title="Feito para uso real no dia a dia"
            description="Requisitos e compatibilidade podem variar por versão do FiveM e do seu aparelho. Confirme no suporte antes de comprar."
          />
        </div>

        <div className="mt-12 grid gap-4 md:mt-14 md:grid-cols-2 lg:grid-cols-4">
          {compatibilityBadges.map((b, idx) => (
            <div
              key={b.id}
              data-reveal
              className="glass rounded-3xl p-5"
              style={{ transitionDelay: `${Math.min(idx * 60, 240)}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/6 ring-1 ring-white/12">
                  <b.Icon className="h-5 w-5 text-cyan-100/90" />
                </div>
                <div>
                  <div className="font-display text-sm font-semibold text-white">{b.label}</div>
                  <div className="text-xs text-white/50">suporte e setup guiado</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div data-reveal className="mt-10 rounded-3xl border border-white/12 bg-white/3 p-6 text-sm text-white/70">
          <div className="font-display text-sm font-semibold text-white">Recomendado</div>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>PC Windows com conexão estável</li>
            <li>Celular com navegador atualizado</li>
            <li>Evitar overlays/padrões que gerem conflito com o seu setup</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

