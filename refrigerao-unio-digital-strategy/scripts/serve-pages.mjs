/**
 * Pré-visualização local do site estático já montado em `out/`.
 *
 * Reproduz o comportamento do GitHub Pages: o site é servido dentro de uma
 * subpasta (/NOME-DO-REPOSITORIO), então este servidor simplesmente retira esse
 * prefixo antes de procurar o arquivo. Assim o que você vê aqui é o mesmo que
 * os visitantes verão no endereço publicado.
 *
 * Uso: npm run preview:pages
 * Depois abra http://localhost:4321/Refrigera-o-Uni-o/
 */

import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { dirname, extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = join(projectRoot, "out");
const basePath = `/${(process.env.NEXT_PUBLIC_BASE_PATH ?? "/Refrigera-o-Uni-o").replace(/^\/+|\/+$/g, "")}`;
const port = Number(process.env.PORT ?? 4321);

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".webmanifest": "application/manifest+json",
  ".woff2": "font/woff2",
};

if (!existsSync(outputDirectory)) {
  console.error("A pasta `out/` não existe. Rode antes: npm run build:pages");
  process.exit(1);
}

function sendFile(response, filePath, status = 200) {
  response.writeHead(status, {
    "Content-Type": contentTypes[extname(filePath)] ?? "application/octet-stream",
    "Cache-Control": "no-store",
  });
  createReadStream(filePath).pipe(response);
}

function resolveFile(urlPath) {
  const safePath = normalize(urlPath).replace(/^(\.\.[/\\])+/, "");
  const candidate = resolve(outputDirectory, `.${safePath}`);

  if (!candidate.startsWith(outputDirectory)) return null;
  if (!existsSync(candidate)) return null;

  return statSync(candidate).isDirectory() ? join(candidate, "index.html") : candidate;
}

createServer((request, response) => {
  const url = new URL(request.url ?? "/", "http://localhost");
  const pathname = decodeURIComponent(url.pathname);

  if (pathname === "/") {
    response.writeHead(302, { Location: `${basePath}/` });
    response.end();
    return;
  }

  if (!pathname.startsWith(`${basePath}/`) && pathname !== basePath) {
    const notFound = join(outputDirectory, "404.html");
    if (existsSync(notFound)) return sendFile(response, notFound, 404);
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(`Caminho fora da subpasta do site. Use ${basePath}/`);
    return;
  }

  const relativePath = pathname.slice(basePath.length) || "/";
  const filePath = resolveFile(relativePath);

  if (!filePath || !existsSync(filePath)) {
    const notFound = join(outputDirectory, "404.html");
    if (existsSync(notFound)) return sendFile(response, notFound, 404);
  }

  sendFile(response, filePath);
  console.log(`200 ${pathname}`);
}).listen(port, "0.0.0.0", () => {
  console.log(`Pré-visualização do site estático: http://localhost:${port}${basePath}/`);
});
