import { assetUrl } from "@/lib/paths";
import { Logo } from "./logo";
import { PhoneButton } from "./phone-button";

/**
 * Endereços de âncora apontam para a página inicial para continuarem corretos
 * também quando o visitante está em /privacidade e quando o site é publicado
 * dentro da subpasta do GitHub Pages.
 */
const homeHref = assetUrl("/");

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href={`${homeHref}#inicio`} className="logo-link" aria-label="Refrigeração União — início">
          <Logo />
        </a>
        <nav className="main-nav" aria-label="Navegação principal">
          <a href={`${homeHref}#servicos`}>Serviços</a>
          <a href={`${homeHref}#como-funciona`}>Como funciona</a>
          <a href={`${homeHref}#contato`}>Contato</a>
        </nav>
        <PhoneButton placement="cabecalho" compact className="button button-header" />
      </div>
    </header>
  );
}
