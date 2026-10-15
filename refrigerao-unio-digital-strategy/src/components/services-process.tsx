import { services, siteConfig } from "@/lib/site";
import { ArrowIcon, CheckIcon, MapPinIcon, PhoneIcon, WrenchIcon } from "./icons";
import { PhoneButton } from "./phone-button";
import { ServiceCard } from "./service-card";

const steps = [
  {
    icon: PhoneIcon,
    title: "Ligue para a União",
    text: `Toque no botão de ligação ou disque ${siteConfig.phoneDisplay}.`,
  },
  {
    icon: WrenchIcon,
    title: "Explique o problema",
    text: "Informe qual é o aparelho, o que está acontecendo e o seu bairro.",
  },
  {
    icon: CheckIcon,
    title: "Consulte o atendimento",
    text: "Converse com o proprietário sobre as possibilidades e condições do orçamento.",
  },
];

export function ServicesSection() {
  return (
    <section className="section services-section" id="servicos">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow"><span /> Serviços</p>
            <h2>Seu eletrodoméstico precisa de atenção?</h2>
          </div>
          <p>Selecione o tipo de aparelho e ligue para consultar o atendimento. Os detalhes do serviço são confirmados durante a conversa.</p>
        </div>
        <div className="services-grid">
          {services.map((service) => <ServiceCard key={service.id} service={service} />)}
        </div>
      </div>
    </section>
  );
}

export function ProcessSection() {
  return (
    <section className="section process-section" id="como-funciona">
      <div className="container process-grid">
        <div className="process-intro">
          <p className="eyebrow eyebrow-light"><span /> Como funciona</p>
          <h2>Uma conversa simples para começar.</h2>
          <p>Não é necessário preencher formulário, criar conta ou ir até um endereço. O proprietário prefere entender o problema por telefone.</p>
          <PhoneButton placement="como_funciona" className="button button-light" />
        </div>
        <ol className="steps-list">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li key={step.title}>
                <div className="step-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="step-icon"><Icon width={25} height={25} /></div>
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function AreaSection() {
  return (
    <section className="section area-section" id="area">
      <div className="container area-card">
        <div className="area-icon"><MapPinIcon width={34} height={34} /></div>
        <div className="area-copy">
          <p className="eyebrow"><span /> Área de atendimento</p>
          <h2>Salvador e região metropolitana</h2>
          <p>A empresa tem como referência Dias d’Ávila (BA). A lista exata de cidades e bairros ainda deve ser confirmada pelo proprietário; por isso, consulte a disponibilidade para sua região por telefone.</p>
        </div>
        <div className="area-action">
          <PhoneButton placement="area_atendimento" compact />
          <p>Não há atendimento ao público no local de trabalho.</p>
        </div>
      </div>
    </section>
  );
}
