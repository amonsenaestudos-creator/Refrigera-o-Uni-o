import { siteConfig } from "@/lib/site";
import { ContactLink } from "./contact-link";
import { ClockIcon, GoogleIcon, InstagramIcon, MapPinIcon, PhoneIcon } from "./icons";
import { PhoneButton } from "./phone-button";

export function ContactSection() {
  return (
    <section className="contact-section" id="contato">
      <div className="container contact-card">
        <div className="contact-copy">
          <p className="eyebrow eyebrow-light"><span /> Fale com a União</p>
          <h2>Explique o problema. Comece com uma ligação.</h2>
          <p>Tenha em mãos o tipo de aparelho e informe seu bairro para consultar as condições do atendimento.</p>
          <PhoneButton placement="contato_final" className="button button-light button-large" />
          <small>Ao tocar no botão, o aplicativo de telefone do seu aparelho será aberto.</small>
        </div>
        <div className="contact-details">
          <div className="detail-item">
            <span><PhoneIcon /></span>
            <div><small>Telefone principal</small><strong>{siteConfig.phoneDisplay}</strong></div>
          </div>
          <div className="detail-item">
            <span><ClockIcon /></span>
            <div><small>Horário divulgado</small><strong>8h às 17h</strong><p>Confirme os dias e a disponibilidade por telefone.</p></div>
          </div>
          <div className="detail-item">
            <span><MapPinIcon /></span>
            <div><small>Área divulgada</small><strong>{siteConfig.serviceArea}</strong><p>Consulte seu bairro antes do atendimento.</p></div>
          </div>
          <div className="social-row">
            <ContactLink href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" eventName="instagram_click" placement="contato" className="social-link"><InstagramIcon /> Instagram</ContactLink>
            <ContactLink href={siteConfig.googleProfileUrl} target="_blank" rel="noreferrer" eventName="google_profile_click" placement="contato" className="social-link"><GoogleIcon /> Perfil no Google</ContactLink>
          </div>
        </div>
      </div>
    </section>
  );
}
