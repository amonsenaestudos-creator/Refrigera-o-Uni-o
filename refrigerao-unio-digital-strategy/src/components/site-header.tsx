import Link from "next/link";
import { Logo } from "./logo";
import { PhoneButton } from "./phone-button";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="#inicio" className="logo-link" aria-label="Refrigeração União — início">
          <Logo />
        </Link>
        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#servicos">Serviços</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#contato">Contato</a>
        </nav>
        <PhoneButton placement="cabecalho" compact className="button button-header" />
      </div>
    </header>
  );
}
