import { brands, siteConfig } from "@/lib/site";
import { ContactLink } from "./contact-link";
import { ArrowIcon, ChevronIcon, GoogleIcon, InstagramIcon, ShieldIcon } from "./icons";

export const faqs = [
  {
    question: "Quais aparelhos vocês consertam?",
    answer: "A Refrigeração União divulga conserto de geladeiras, freezers e máquinas de lavar. Para confirmar o atendimento ao seu modelo e problema, ligue antes.",
  },
  {
    question: "Vocês consertam a marca do meu aparelho?",
    answer: `O site divulga conserto para ${brands.join(", ")} — as marcas nacionais mais comuns. Para confirmar outros fabricantes, o seu modelo e a disponibilidade de peças, ligue para ${siteConfig.phoneDisplay}.`,
  },
  {
    question: "Em quais cidades vocês atendem?",
    answer: "A área divulgada é Salvador e região metropolitana, com referência em Dias d’Ávila. A lista exata de cidades e bairros ainda precisa ser confirmada; consulte seu bairro pelo telefone.",
  },
  {
    question: "Como faço para solicitar um orçamento?",
    answer: `Ligue para ${siteConfig.phoneDisplay}, informe qual é o aparelho, explique o problema e diga seu bairro. As possibilidades e condições do orçamento serão conversadas diretamente com o proprietário.`,
  },
  {
    question: "Preciso levar meu eletrodoméstico até vocês?",
    answer: "Não vá até o local de trabalho. A empresa não recebe clientes ali. Ligue primeiro para confirmar como poderá ser feito o atendimento no seu caso.",
  },
  {
    question: "Como funciona o atendimento?",
    answer: "O primeiro contato é por telefone. Durante a ligação, o proprietário entende a situação e informa se há possibilidade de atendimento e quais são as próximas etapas.",
  },
];

export function TrustSection() {
  return (
    <section className="section trust-section" id="confianca">
      <div className="container trust-grid">
        <div className="trust-copy">
          <p className="eyebrow"><span /> Confiança com transparência</p>
          <h2>Informação verdadeira vem em primeiro lugar.</h2>
          <p>Este site não publica avaliações, números de clientes, garantias ou anos de experiência sem comprovação. Fotos reais e relatos autorizados poderão ser adicionados futuramente.</p>
          <div className="trust-badge"><ShieldIcon /><span><strong>Sem promessas inventadas</strong><small>Condições confirmadas diretamente por telefone.</small></span></div>
        </div>
        <div className="proof-grid">
          <ContactLink href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" eventName="instagram_click" placement="confianca" className="proof-card proof-instagram">
            <span className="proof-icon"><InstagramIcon /></span>
            <span><small>Canal oficial</small><strong>Veja o Instagram</strong><em>{siteConfig.instagramHandle}</em></span>
            <ArrowIcon />
          </ContactLink>
          <ContactLink href={siteConfig.googleProfileUrl} target="_blank" rel="noreferrer" eventName="google_profile_click" placement="confianca" className="proof-card">
            <span className="proof-icon"><GoogleIcon /></span>
            <span><small>Presença local</small><strong>Ver perfil no Google</strong><em>Informações e avaliações públicas</em></span>
            <ArrowIcon />
          </ContactLink>
          <div className="proof-placeholder">
            <span>Espaço preparado</span>
            <p>Fotos reais de serviços e avaliações autênticas poderão aparecer aqui após autorização.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section className="section faq-section" id="duvidas">
      <div className="container faq-grid">
        <div className="faq-heading">
          <p className="eyebrow"><span /> Perguntas frequentes</p>
          <h2>Dúvidas antes de ligar?</h2>
          <p>Reunimos respostas objetivas usando apenas informações já disponíveis.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary><span>{faq.question}</span><ChevronIcon width={20} height={20} /></summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
