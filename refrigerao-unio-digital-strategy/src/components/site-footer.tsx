import { assetUrl, isStaticExport } from "@/lib/paths";
import { siteConfig } from "@/lib/site";
import { ContactLink } from "./contact-link";
import { GoogleIcon, InstagramIcon, PhoneIcon } from "./icons";
import { Logo } from "./logo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p>Conserto de eletrodomésticos com contato direto por telefone.</p>
        </div>
        <div>
          <h2>Contato</h2>
          <ContactLink href={siteConfig.phoneHref} eventName="phone_click" placement="rodape" className="footer-link">
            <PhoneIcon width={20} height={20} /> {siteConfig.phoneDisplay}
          </ContactLink>
          <ContactLink href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" eventName="instagram_click" placement="rodape" className="footer-link">
            <InstagramIcon width={20} height={20} /> Instagram oficial
          </ContactLink>
          <ContactLink href={siteConfig.googleProfileUrl} target="_blank" rel="noreferrer" eventName="google_profile_click" placement="rodape" className="footer-link">
            <GoogleIcon width={20} height={20} /> Perfil no Google
          </ContactLink>
        </div>
        <div>
          <h2>Informações</h2>
          <p>{siteConfig.serviceArea}</p>
          <p>Referência: {siteConfig.referenceCity}</p>
          <p>Não há atendimento ao público no local de trabalho. Ligue antes.</p>
          <a href={assetUrl("/privacidade/")} className="footer-link">Política de privacidade</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Refrigeração União.</p>
        <p>
          {isStaticExport
            ? "Site estático, sem formulários e sem cookies de publicidade."
            : "Medição anônima de cliques, sem formulários e sem cookies de publicidade."}
        </p>
      </div>
    </footer>
  );
}
