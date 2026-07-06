import { Mail, MessageCircle, ShoppingCart } from "lucide-react";
import { ButtonLink } from "@/components/Button";

type ContactSectionProps = {
  checkoutHref: string;
  supportHref: string;
  whatsappHref: string;
  email: string;
};

export default function ContactSection({ checkoutHref, supportHref, whatsappHref, email }: ContactSectionProps) {
  const checkoutExternal = /^https?:\/\//i.test(checkoutHref);
  const supportExternal = /^https?:\/\//i.test(supportHref);
  const whatsappExternal = /^https?:\/\//i.test(whatsappHref);

  return (
    <section id="contato" className="relative border-t border-white/10">
      <div className="container px-6 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-[36px] border border-cyan-300/20 bg-cyan-300/8 p-7 md:p-10">
          <div className="absolute -right-40 -top-44 h-[420px] w-[420px] rounded-full bg-cyan-400/16 blur-3xl" />
          <div className="absolute -left-40 -bottom-44 h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-3xl" />
          <div className="relative">
            <div data-reveal className="font-display text-xs font-semibold tracking-[0.26em] text-cyan-200/80">
              PRONTO PRA COMEÇAR?
            </div>
            <h2
              data-reveal
              className="mt-4 font-display text-2xl font-semibold tracking-tight text-white md:text-3xl"
            >
              Compra direta ou validação no suporte. Você escolhe o caminho.
            </h2>
            <p data-reveal className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 md:text-base">
              Se quiser confirmar compatibilidade e tirar dúvidas, chama no suporte antes. Se já decidiu, vai direto pro checkout.
            </p>

            <div data-reveal className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={checkoutHref}
                target={checkoutExternal ? "_blank" : undefined}
                rel={checkoutExternal ? "noreferrer" : undefined}
              >
                Comprar agora <ShoppingCart className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href={supportHref}
                target={supportExternal ? "_blank" : undefined}
                rel={supportExternal ? "noreferrer" : undefined}
                variant="secondary"
              >
                Discord / Suporte <MessageCircle className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href={whatsappHref}
                target={whatsappExternal ? "_blank" : undefined}
                rel={whatsappExternal ? "noreferrer" : undefined}
                variant="secondary"
              >
                WhatsApp <MessageCircle className="h-4 w-4" />
              </ButtonLink>
            </div>

            <div data-reveal className="mt-8 grid gap-3 md:grid-cols-2">
              <div className="glass rounded-3xl p-5">
                <div className="flex items-center gap-2 font-display text-sm font-semibold text-white">
                  <Mail className="h-4 w-4 text-cyan-100/90" />
                  E-mail
                </div>
                <div className="mt-2 text-sm text-white/70">{email}</div>
                <div className="mt-1 text-xs text-white/45">Use para assuntos formais e solicitações de privacidade.</div>
              </div>
              <div className="glass rounded-3xl p-5">
                <div className="font-display text-sm font-semibold text-white">Suporte</div>
                <div className="mt-2 text-sm text-white/70">Setup guiado + resolução de dúvidas</div>
                <div className="mt-1 text-xs text-white/45">Resposta pode variar por fila e horário.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
