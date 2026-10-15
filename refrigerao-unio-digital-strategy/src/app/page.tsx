import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";
import { HeroSection } from "@/components/hero-section";
import { AreaSection, ProcessSection, ServicesSection } from "@/components/services-process";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FaqSection, faqs, TrustSection } from "@/components/trust-faq";
import { getSiteUrl, services, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conserto de geladeira, freezer e máquina de lavar",
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const siteUrl = getSiteUrl();
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteUrl,
    telephone: siteConfig.phoneE164,
    image: `${siteUrl}/logo-refrigeracao-uniao.svg`,
    logo: `${siteUrl}/logo-refrigeracao-uniao.svg`,
    areaServed: [
      { "@type": "City", name: "Salvador" },
      { "@type": "AdministrativeArea", name: "Região Metropolitana de Salvador" },
    ],
    sameAs: [siteConfig.instagramUrl, siteConfig.googleProfileUrl],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneE164,
      contactType: "customer service",
      availableLanguage: "Portuguese",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Conserto de eletrodomésticos",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: service.title },
      })),
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <SiteHeader />
      <main id="conteudo">
        <HeroSection />
        <ServicesSection />
        <ProcessSection />
        <AreaSection />
        <TrustSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
