/**
 * Ajustes de caminho para os dois modos de publicação do site.
 *
 * No GitHub Pages o site fica dentro de uma subpasta (ex.: /Refrigera-o-Uni-o).
 * O Next.js prefixa sozinho o CSS, o JavaScript e os ícones, mas as imagens de
 * `next/image` não recebem esse prefixo: sem `assetUrl`, a ilustração seria
 * procurada na raiz do domínio e apareceria quebrada.
 */

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";

/** Subpasta do site, sem barras nas pontas. Vazia no modo servidor (raiz do domínio). */
export const basePath = rawBasePath.replace(/^\/+|\/+$/g, "");

/** Monta o endereço interno já respeitando a subpasta do GitHub Pages. */
export function assetUrl(route: string) {
  const normalized = route.startsWith("/") ? route : `/${route}`;
  return `${basePath ? `/${basePath}` : ""}${normalized}`;
}

/**
 * Verdadeiro na versão publicada no GitHub Pages.
 *
 * O Pages só entrega arquivos prontos: lá não existe servidor para receber
 * cliques nem banco PostgreSQL para guardar o histórico. Nesse modo a medição
 * fica desligada e nenhuma requisição é enviada para /api.
 */
export const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";
