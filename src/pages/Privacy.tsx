import LegalPage from "@/components/LegalPage";

export default function Privacy() {
  return (
    <LegalPage title="Política de Privacidade" updatedAt="05/07/2026">
      <p>
        Esta política descreve como tratamos informações ao utilizar este site. Nosso objetivo é coletar o mínimo possível e
        manter transparência.
      </p>

      <div className="space-y-3">
        <h2 className="font-display text-lg text-white">1. O que coletamos</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Dados técnicos básicos de navegação (ex.: tipo de dispositivo, páginas acessadas), quando habilitado analytics.</li>
          <li>Dados que você envia voluntariamente ao entrar em contato (ex.: usuário no Discord, número no WhatsApp, e-mail).</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="font-display text-lg text-white">2. Como usamos</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Melhorar a experiência da landing page e medir desempenho de conteúdo.</li>
          <li>Responder solicitações de suporte e dúvidas de compra.</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="font-display text-lg text-white">3. Compartilhamento</h2>
        <p>
          Não vendemos seus dados. Podemos usar serviços de terceiros para hospedagem e métricas (ex.: Vercel), que podem processar
          dados técnicos de forma limitada para operação e segurança.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="font-display text-lg text-white">4. Segurança</h2>
        <p>
          Adotamos medidas razoáveis para proteger informações. Ainda assim, nenhum sistema é 100% imune a riscos. Evite enviar
          informações sensíveis por canais públicos.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="font-display text-lg text-white">5. Contato</h2>
        <p>Para solicitar atualização/remoção de informações enviadas por você, use os canais de contato indicados no site.</p>
      </div>
    </LegalPage>
  );
}

