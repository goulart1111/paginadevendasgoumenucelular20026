import { Link } from "react-router-dom";

type SiteFooterProps = {
  supportHref: string;
  checkoutHref: string;
};

export default function SiteFooter({ supportHref, checkoutHref }: SiteFooterProps) {
  const checkoutExternal = /^https?:\/\//i.test(checkoutHref);
  const supportExternal = /^https?:\/\//i.test(supportHref);

  return (
    <footer className="border-t border-white/10">
      <div className="container px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="font-display text-sm font-semibold tracking-wide text-white">Remote Control FiveM</div>
            <p className="mt-3 text-sm leading-relaxed text-white/60">
              Uma página direta, visual e feita para mostrar o método sem enrolação.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-3 text-sm">
              <div className="font-display text-xs tracking-[0.22em] text-white/60">LINKS</div>
              <a className="block text-white/70 hover:text-white" href="#beneficios">
                Benefícios
              </a>
              <a className="block text-white/70 hover:text-white" href="#precos">
                Preços
              </a>
              <a className="block text-white/70 hover:text-white" href="#contato">
                Contato
              </a>
            </div>
            <div className="space-y-3 text-sm">
              <div className="font-display text-xs tracking-[0.22em] text-white/60">LEGAL</div>
              <Link className="block text-white/70 hover:text-white" to="/termos">
                Termos
              </Link>
              <Link className="block text-white/70 hover:text-white" to="/privacidade">
                Privacidade
              </Link>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <div className="font-display text-xs tracking-[0.22em] text-white/60">AÇÃO</div>
            <a
              className="block text-white/70 hover:text-white"
              href={checkoutHref}
              target={checkoutExternal ? "_blank" : undefined}
              rel={checkoutExternal ? "noreferrer" : undefined}
            >
              Comprar agora
            </a>
            <a
              className="block text-white/70 hover:text-white"
              href={supportHref}
              target={supportExternal ? "_blank" : undefined}
              rel={supportExternal ? "noreferrer" : undefined}
            >
              Suporte
            </a>
            <div className="pt-3 text-xs text-white/40">© {new Date().getFullYear()} • Todos os direitos reservados</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
