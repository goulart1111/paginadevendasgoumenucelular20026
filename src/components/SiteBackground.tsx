export default function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-zinc-950" />
      <div className="absolute -left-48 -top-40 h-[520px] w-[520px] rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="absolute -right-48 top-40 h-[560px] w-[560px] rounded-full bg-amber-500/10 blur-3xl" />
      <div className="absolute bottom-[-240px] left-1/3 h-[720px] w-[720px] rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(closest-side_at_50%_20%,rgba(255,255,255,0.06),transparent_55%),radial-gradient(closest-side_at_10%_50%,rgba(34,211,238,0.08),transparent_50%),radial-gradient(closest-side_at_90%_60%,rgba(245,158,11,0.06),transparent_50%)]" />
      <div className="absolute inset-0 opacity-[0.22] mix-blend-overlay bg-[repeating-linear-gradient(180deg,rgba(255,255,255,0.06)_0px,rgba(255,255,255,0.06)_1px,transparent_3px,transparent_6px)]" />
      <div className="absolute inset-0 opacity-[0.18] bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:18px_18px]" />
    </div>
  );
}

