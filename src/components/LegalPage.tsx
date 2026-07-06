import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import SiteShell from "@/components/SiteShell";

type LegalPageProps = {
  title: string;
  updatedAt: string;
  children: ReactNode;
};

export default function LegalPage({ title, updatedAt, children }: LegalPageProps) {
  return (
    <SiteShell
      header={
        <header className="sticky top-0 z-20 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
          <div className="container px-6 py-4">
            <div className="flex items-center justify-between gap-6">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </Link>
              <div className="text-right">
                <div className="text-sm font-medium tracking-wide text-white/90">Remote Control FiveM</div>
                <div className="text-xs text-white/50">Atualizado em {updatedAt}</div>
              </div>
            </div>
          </div>
        </header>
      }
    >
      <section className="container px-6 py-14">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-3xl leading-tight tracking-tight text-white md:text-4xl">{title}</h1>
          <div className="mt-8 space-y-6 text-sm leading-relaxed text-white/75 md:text-base">{children}</div>
        </div>
      </section>
    </SiteShell>
  );
}

