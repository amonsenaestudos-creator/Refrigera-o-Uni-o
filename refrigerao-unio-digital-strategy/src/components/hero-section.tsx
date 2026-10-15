import Image from "next/image";
import { siteConfig } from "@/lib/site";
import { ArrowIcon, CheckIcon, MapPinIcon, PhoneIcon } from "./icons";
import { PhoneButton } from "./phone-button";

export function HeroSection() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Conserto de eletrodomésticos</p>
          <h1>Precisa consertar sua <em>geladeira, freezer</em> ou máquina de lavar?</h1>
          <p className="hero-lead">
            A Refrigeração União trabalha com conserto de eletrodomésticos e atende {siteConfig.serviceArea}. Ligue para explicar o problema e consultar as condições de atendimento.
          </p>
          <div className="hero-actions">
            <PhoneButton placement="hero" />
            <a href="#como-funciona" className="button button-secondary">
              Como funciona <ArrowIcon width={18} height={18} />
            </a>
          </div>
          <p className="hero-note"><PhoneIcon width={17} height={17} /> O contato por ligação é a forma preferencial de iniciar o atendimento.</p>
          <ul className="hero-points" aria-label="Facilidades do contato">
            <li><CheckIcon /> Ligação direta</li>
            <li><CheckIcon /> Sem cadastro</li>
            <li><CheckIcon /> Consulte seu bairro</li>
          </ul>
        </div>

        <div className="hero-visual" aria-label="Ilustrações dos eletrodomésticos atendidos">
          <div className="hero-visual-top">
            <p>Atendimento começa pelo telefone</p>
            <span>01 — 03</span>
          </div>
          <div className="appliance-stage">
            <div className="stage-glow" />
            <Image className="hero-appliance hero-fridge" src="/illustrations/geladeira.svg" alt="Ilustração de geladeira" width={560} height={420} priority />
            <Image className="hero-appliance hero-freezer" src="/illustrations/freezer.svg" alt="Ilustração de freezer" width={560} height={420} priority />
            <Image className="hero-appliance hero-washer" src="/illustrations/lavadora.svg" alt="Ilustração de máquina de lavar" width={560} height={420} priority />
          </div>
          <div className="hero-callout">
            <span className="callout-icon"><MapPinIcon width={23} height={23} /></span>
            <span><small>Área divulgada</small><strong>Salvador e região metropolitana</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
}
