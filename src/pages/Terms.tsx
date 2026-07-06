import LegalPage from "@/components/LegalPage";

export default function Terms() {
  return (
    <LegalPage title="Termos de Uso" updatedAt="05/07/2026">
      <p>
        Ao acessar este site e/ou adquirir o produto, você concorda com estes Termos de Uso. Se você não concordar, não utilize
        o site e não finalize a compra.
      </p>

      <div className="space-y-3">
        <h2 className="font-display text-lg text-white">1. Sobre o produto</h2>
        <p>
          O produto é um método de controle remoto que permite operar um menu no FiveM através do celular. A página tem caráter
          informativo e comercial, e pode direcionar você para links externos de compra e suporte.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="font-display text-lg text-white">2. Uso e responsabilidade</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Você é responsável pelo uso do produto e por seguir as instruções de instalação e segurança.</li>
          <li>Você entende que atualizações do FiveM, do GTA V ou do seu sistema podem impactar compatibilidade e estabilidade.</li>
          <li>Você entende que o uso indevido pode gerar punições em servidores e que isso foge do controle do vendedor.</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h2 className="font-display text-lg text-white">3. Suporte e atualizações</h2>
        <p>
          O suporte é oferecido pelos canais informados na página de contato (ex.: Discord/WhatsApp/e-mail). O escopo, prazos e
          disponibilidade podem variar.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="font-display text-lg text-white">4. Reembolsos</h2>
        <p>
          Políticas de reembolso, quando aplicáveis, são definidas no momento da compra (plataforma de checkout e/ou acordo em
          suporte). Em caso de dúvidas, entre em contato antes de finalizar o pagamento.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="font-display text-lg text-white">5. Alterações</h2>
        <p>Podemos atualizar estes termos a qualquer momento. A versão mais recente sempre ficará disponível nesta página.</p>
      </div>
    </LegalPage>
  );
}

