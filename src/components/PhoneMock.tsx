import { ChevronRight, SlidersHorizontal, Wifi } from "lucide-react";

type PhoneMockProps = {
  className?: string;
};

export default function PhoneMock({ className }: PhoneMockProps) {
  return (
    <div className={className}>
      <div className="relative mx-auto w-full max-w-[420px] animate-floaty">
        <div className="absolute -inset-6 rounded-[40px] bg-cyan-400/10 blur-2xl" />
        <div className="relative overflow-hidden rounded-[40px] border border-white/15 bg-zinc-950/60 shadow-[0_30px_80px_rgba(0,0,0,0.65)]">
          <div className="absolute inset-0 opacity-40 [background:radial-gradient(closest-side_at_60%_0%,rgba(34,211,238,0.20),transparent_60%)]" />
          <div className="absolute inset-0 opacity-70 [background:linear-gradient(180deg,rgba(255,255,255,0.07),transparent_40%,rgba(255,255,255,0.03))]" />
          <div className="relative p-5">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/6 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
                <Wifi className="h-3.5 w-3.5" />
                conectado
              </div>
              <div className="text-xs text-white/50">Remote UI</div>
            </div>

            <div className="mt-5">
              <div className="font-display text-base font-semibold text-white">Menu</div>
              <div className="mt-1 text-xs text-white/55">Ações rápidas • presets • toggles</div>
            </div>

            <div className="mt-5 grid gap-3">
              <div className="glass rounded-3xl p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-medium text-white/90">Preset: Drift</div>
                    <div className="mt-1 text-xs text-white/55">Atalhos otimizados para RP</div>
                  </div>
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-300/10 ring-1 ring-cyan-300/20">
                    <SlidersHorizontal className="h-4 w-4 text-cyan-200/90" />
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                  <div className="rounded-2xl bg-white/6 px-3 py-2 text-white/70 ring-1 ring-white/10">Ação 1</div>
                  <div className="rounded-2xl bg-white/6 px-3 py-2 text-white/70 ring-1 ring-white/10">Ação 2</div>
                  <div className="rounded-2xl bg-cyan-300/10 px-3 py-2 text-cyan-100 ring-1 ring-cyan-300/25">
                    Executar
                  </div>
                </div>
              </div>

              <div className="glass rounded-3xl p-4">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium text-white/90">Modo stealth</div>
                  <div className="relative h-6 w-11 rounded-full bg-white/10 ring-1 ring-white/10">
                    <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-cyan-200/90 shadow-glowCyan" />
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-white/55">
                  <span>Feedback</span>
                  <span className="text-cyan-100/90">ON</span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between rounded-3xl bg-white/5 px-4 py-3 text-xs text-white/65 ring-1 ring-white/10">
              <span>Ver mais módulos</span>
              <ChevronRight className="h-4 w-4" />
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 opacity-70 [background:linear-gradient(90deg,transparent,rgba(34,211,238,0.22),transparent)] animate-shimmer" />
        </div>
      </div>
    </div>
  );
}
