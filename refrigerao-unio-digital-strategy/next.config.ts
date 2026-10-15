import type { NextConfig } from "next";

/**
 * Configuração para os dois modos de publicação:
 *
 * 1. Modo servidor (padrão): `npm run build` + `npm start` em hospedagem Node,
 *    com banco PostgreSQL e as rotas de /api funcionando.
 * 2. Modo estático (GitHub Pages): `npm run build:pages` gera a pasta `out/`.
 *
 * No GitHub Pages o site fica em https://usuario.github.io/NOME-DO-REPOSITORIO,
 * ou seja, dentro de uma subpasta. Por isso o `basePath` é obrigatório: sem ele
 * o CSS, as imagens e os ícones seriam procurados na raiz do domínio e o site
 * apareceria sem estilo.
 */

const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
const basePath = rawBasePath.replace(/^\/+|\/+$/g, "");

/** Ligado apenas pelo comando `npm run build:pages` (veja scripts/build-pages.mjs). */
const isStaticExport = process.env.NEXT_PUBLIC_STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  basePath: basePath ? `/${basePath}` : undefined,
  images: {
    // A exportação estática não executa o otimizador de imagens do Next.js.
    unoptimized: isStaticExport,
  },
  ...(isStaticExport
    ? {
        output: "export" as const,
        // Gera /privacidade/index.html: endereços sem barra continuam válidos no Pages.
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
