export const siteConfig = {
  name: "Refrigeração União",
  shortName: "União",
  phoneDisplay: "(71) 98778-0451",
  phoneE164: "+5571987780451",
  phoneHref: "tel:+5571987780451",
  instagramUrl: "https://www.instagram.com/refrigeracao_uniao312/",
  instagramHandle: "@refrigeracao_uniao312",
  googleProfileUrl: "https://share.google/mHuhdf761DWGOMJ0Z",
  referenceCity: "Dias d’Ávila, Bahia",
  serviceArea: "Salvador e região metropolitana",
  description:
    "Conserto de geladeiras, freezers e máquinas de lavar em Salvador e região metropolitana. Ligue para explicar o problema e consultar as condições de atendimento.",
} as const;

export const services = [
  {
    id: "geladeiras",
    title: "Conserto de geladeiras",
    description:
      "Sua geladeira apresentou algum problema? Ligue, explique o que está acontecendo e consulte as possibilidades de atendimento.",
    image: "/illustrations/geladeira.svg",
    alt: "Ilustração de uma geladeira doméstica",
  },
  {
    id: "freezers",
    title: "Conserto de freezers",
    description:
      "Para problemas de funcionamento no freezer, entre em contato por telefone e informe o tipo de equipamento.",
    image: "/illustrations/freezer.svg",
    alt: "Ilustração de um freezer horizontal",
  },
  {
    id: "maquinas-de-lavar",
    title: "Conserto de máquinas de lavar",
    description:
      "Se a máquina de lavar não está funcionando corretamente, ligue para conversar sobre o problema e o atendimento.",
    image: "/illustrations/lavadora.svg",
    alt: "Ilustração de uma máquina de lavar roupas",
  },
] as const;

// Marcas divulgadas na seção "Marcas atendidas" do site.
// Confirme sempre com o proprietário antes de adicionar ou remover nomes:
// o projeto não publica informação sem comprovação (veja a seção Confiança).
export const brands = [
  "Brastemp",
  "Consul",
  "Electrolux",
  "Samsung",
  "LG",
  "Panasonic",
  "Midea",
] as const;

export function getSiteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return value ? value.replace(/\/$/, "") : "http://localhost:3000";
}
