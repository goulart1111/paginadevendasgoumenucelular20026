import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ButtonLink } from "@/components/Button";

export type NavItem = { label: string; href: string };

type SiteHeaderProps = {
  checkoutHref: string;
  supportHref: string;
  items: NavItem[];
};

export default function SiteHeader({ checkoutHref, supportHref, items }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const checkoutExternal = /^https?:\/\//i.test(checkoutHref);
  const supportExternal = /^https?:\/\//i.test(supportHref);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const primary = useMemo(() => items.slice(0, 4), [items]);
  const secondary = useMemo(() => items.slice(4), [items]);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-zinc-950/70 backdrop-blur">
      <div className="container px-6 py-4">
        <div className="flex items-center justify-between gap-6">
          <a href="#top" className="group inline-flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/7 ring-1 ring-white/15">
              <span className="h-3 w-3 rounded-full bg-cyan-300/80 shadow-glowCyan" />
            </span>
            <div className="leading-tight">
              <div className="font-display text-sm font-semibold tracking-wide text-white">Remote Control FiveM</div>
              <div className="text-xs text-white/45">controle pelo celular</div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {primary.map(item => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ButtonLink
              href={supportHref}
              target={supportExternal ? "_blank" : undefined}
              rel={supportExternal ? "noreferrer" : undefined}
              variant="secondary"
            >
              Suporte
            </ButtonLink>
            <ButtonLink
              href={checkoutHref}
              target={checkoutExternal ? "_blank" : undefined}
              rel={checkoutExternal ? "noreferrer" : undefined}
            >
              Comprar agora
            </ButtonLink>
          </div>

          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/12 transition hover:bg-white/10 md:hidden"
            onClick={() => setOpen(v => !v)}
          >
            {open ? <X className="h-5 w-5 text-white/80" /> : <Menu className="h-5 w-5 text-white/80" />}
          </button>
        </div>
      </div>

      <div className={cn("md:hidden", open ? "block" : "hidden")}>
        <div className="border-t border-white/10 bg-zinc-950/85 backdrop-blur">
          <div className="container px-6 py-5">
            <div className="grid gap-2">
              {[...primary, ...secondary].map(item => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-4 py-3 text-sm text-white/80 ring-1 ring-white/10 transition hover:bg-white/8 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-3">
                <ButtonLink
                  href={supportHref}
                  target={supportExternal ? "_blank" : undefined}
                  rel={supportExternal ? "noreferrer" : undefined}
                  variant="secondary"
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Suporte
                </ButtonLink>
                <ButtonLink
                  href={checkoutHref}
                  target={checkoutExternal ? "_blank" : undefined}
                  rel={checkoutExternal ? "noreferrer" : undefined}
                  className="w-full"
                  onClick={() => setOpen(false)}
                >
                  Comprar
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
