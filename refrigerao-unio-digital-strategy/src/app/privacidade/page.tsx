import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Privacidade",
  description: "Como o site da Refrigeração União mede contatos sem coletar dados pessoais em formulários.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main className="legal-page">
        <div className="container legal-content">
          <p className="eyebrow"><span /> Privacidade</p>
          <h1>Informações sobre a medição do site</h1>
          <p>Este site não possui cadastro, formulário de orçamento, chatbot ou pagamento on-line.</p>
          <h2>O que é medido</h2>
          <p>Para entender se o site está ajudando clientes a entrar em contato, registramos cliques nos links de telefone, Instagram e Perfil da Empresa no Google. O registro contém apenas o tipo do clique, a área da página, a página acessada, a origem geral da visita e a data.</p>
          <h2>O que não é solicitado</h2>
          <p>Não solicitamos nome, e-mail, endereço, detalhes do aparelho ou conteúdo da ligação. O sistema próprio de medição não usa cookies de publicidade.</p>
          <h2>Contato externo</h2>
          <p>Ao abrir o Instagram ou o Perfil da Empresa no Google, passam a valer as políticas de privacidade dessas plataformas. Ao tocar em “Ligar agora”, o aplicativo de telefone do seu aparelho é aberto.</p>
          <p><Link href="/" className="text-link">Voltar ao início</Link></p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
