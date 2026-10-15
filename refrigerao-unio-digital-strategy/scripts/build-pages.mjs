/**
 * Gera o site estático (pasta `out/`) para publicar no GitHub Pages.
 *
 * O GitHub Pages só entrega arquivos prontos: não executa Node nem PostgreSQL.
 * Por isso, durante a geração, as rotas dinâmicas de `src/app/api` são movidas
 * temporariamente para fora da pasta `src/app`. Assim o mesmo repositório
 * continua servindo para os dois modos:
 *
 *   - `npm run build`      -> hospedagem Node com banco, /api ativo (modo servidor)
 *   - `npm run build:pages` -> site estático em `out/` (modo GitHub Pages)
 *
 * As variáveis abaixo são lidas em tempo de compilação:
 *   NEXT_PUBLIC_SITE_URL    endereço final do site (ex.: https://usuario.github.io/repo)
 *   NEXT_PUBLIC_BASE_PATH   subpasta do site no Pages (ex.: /repo). Vazio = raiz do domínio.
 */

import { spawnSync } from "node:child_process";
import { existsSync, renameSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const apiDirectory = join(projectRoot, "src", "app", "api");
const parkedApiDirectory = join(projectRoot, ".api-parked-for-static-build");

function runNextBuild() {
  return spawnSync("npx", ["next", "build"], {
    cwd: projectRoot,
    stdio: "inherit",
    shell: process.platform === "win32",
    env: {
      ...process.env,
      NEXT_PUBLIC_STATIC_EXPORT: "true",
      // Sem banco: o modo estático não usa PostgreSQL.
      DATABASE_URL: process.env.DATABASE_URL ?? "",
    },
  });
}

let exitCode = 1;

if (existsSync(parkedApiDirectory)) {
  console.error(
    `A pasta ${parkedApiDirectory} já existe. Remova-a (ou rode um build anterior) e tente de novo.`,
  );
  process.exit(1);
}

let apiParked = false;

try {
  if (existsSync(apiDirectory)) {
    renameSync(apiDirectory, parkedApiDirectory);
    apiParked = true;
  }

  rmSync(join(projectRoot, "out"), { recursive: true, force: true });

  const result = runNextBuild();
  exitCode = result.status ?? 1;
} finally {
  if (apiParked) {
    renameSync(parkedApiDirectory, apiDirectory);
  }
}

if (exitCode !== 0) {
  console.error("A geração do site estático falhou.");
  process.exit(exitCode);
}

if (!existsSync(join(projectRoot, "out", "index.html"))) {
  console.error("A pasta `out/` não foi criada como esperado.");
  process.exit(1);
}

console.log("\nSite estático pronto em `out/`. É essa pasta que o GitHub Pages publica.");
