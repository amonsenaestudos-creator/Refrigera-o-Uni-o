import { brands, siteConfig } from "@/lib/site";
import { ContactLink } from "./contact-link";
import { PhoneIcon } from "./icons";

export function BrandsSection() {
  return (
    <section className="section brands-section" id="marcas">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow"><span /> Marcas atendidas</p>
            <h2>Trabalhamos com as principais marcas.</h2>
          </div>
          <p>
            Conserto para geladeiras, freezers e máquinas de lavar das marcas nacionais mais
            comuns. A disponibilidade de peças e de atendimento para o seu modelo é confirmada
            por telefone antes de qualquer compromisso.
          </p>
        </div>
        <ul className="brands-grid">
          {brands.map((brand) => (
            <li key={brand} className="brand-chip">{brand}</li>
          ))}
          <li>
            <ContactLink
              href={siteConfig.phoneHref}
              eventName="phone_click"
              placement="marcas"
              className="brand-chip brand-chip-action"
              aria-label={`Consultar outras marcas pelo telefone ${siteConfig.phoneDisplay}`}
            >
              <PhoneIcon width={18} height={18} />
              <span>Outra marca? Consulte</span>
            </ContactLink>
          </li>
        </ul>
        <p className="brands-note">
          A lista reflete as marcas nacionais mais atendidas. Modelos antigos, importados ou
          comerciais podem ter condições diferentes: consulte pelo telefone{" "}
          <strong>{siteConfig.phoneDisplay}</strong>.
        </p>
      </div>
    </section>
  );
}
