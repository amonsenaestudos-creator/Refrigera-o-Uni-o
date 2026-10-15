# Refrigeração União — site de aquisição local

Site em Next.js focado em transformar visitas em ligações para a Refrigeração União. A operação diária não exige painel, formulário ou atualização de código pelo proprietário.

## Recursos implementados

- Página responsiva com CTA telefônico em todas as etapas relevantes.
- Serviços: geladeiras, freezers e máquinas de lavar.
- Área de atendimento divulgada sem publicar endereço privado.
- Avisos claros sobre regiões, dias e condições ainda não confirmados.
- Links oficiais para Instagram e Perfil da Empresa no Google.
- SEO técnico: metadata, canonical, Open Graph, sitemap, robots, manifesto, dados estruturados de negócio e FAQ.
- Ilustrações SVG leves; nenhuma imagem é apresentada como foto real da empresa.
- Acessibilidade: foco visível, link para pular conteúdo, HTML semântico, contraste, alvos de toque e redução de movimento.
- Registro próprio de cliques, sem formulários, cookies de publicidade ou dados pessoais fornecidos pelo visitante (na versão com servidor).
- Relatório agregado e protegido dos últimos 30 dias (na versão com servidor).
- Duas formas de publicação: site estático no GitHub Pages (sem custo e sem banco) ou hospedagem Node com banco de dados e relatório.

## Executar localmente

### Site estático (GitHub Pages)

1. Instale as dependências: `npm install`.
2. Gere a versão estática: `npm run build:pages`.
3. Pré-visualize: `npm run preview:pages` e abra `http://localhost:4321/Refrigera-o-Uni-o/`.

### Modo servidor (com banco)

Requisitos: Node.js compatível com Next.js 16 e PostgreSQL.

1. Instale as dependências: `npm install`.
2. Configure as variáveis descritas em `.env.example`.
3. Aplique o esquema: `npx drizzle-kit push`.
4. Inicie: `npm run dev`.
5. Abra `http://localhost:3000`.

Validação de produção: `npx next typegen`, `npm exec tsc -- --noEmit --pretty false` e `npm run build`.

## Publicação no GitHub Pages (site estático, sem custo)

O endereço já publicado é **https://amonsenaestudos-creator.github.io/Refrigera-o-Uni-o/**.

O fluxo `.github/workflows/deploy-pages.yml` é executado a cada envio para o branch `main` (e também pode ser iniciado manualmente em *Actions → Publicar site no GitHub Pages → Run workflow*). Ele roda `npm run build:pages`, gera a pasta `out/` e publica essa pasta no Pages.

Como o Pages só entrega arquivos prontos, ele não executa Node nem PostgreSQL:

- as rotas `/api` ficam fora da versão publicada e a medição de cliques não é enviada;
- o relatório de 30 dias não existe nessa versão (ele continua disponível na publicação com servidor);
- todo o código do servidor permanece no repositório, intacto, para uso futuro.

Passos internos do fluxo, caso seja preciso repetir na mão:

1. `npm install`
2. `NEXT_PUBLIC_SITE_URL="https://amonsenaestudos-creator.github.io/Refrigera-o-Uni-o" NEXT_PUBLIC_BASE_PATH="/Refrigera-o-Uni-o" npm run build:pages`
3. Publicar a pasta `out/` no Pages.

Pré-visualizar o resultado na sua máquina: `npm run preview:pages` e abrir `http://localhost:4321/Refrigera-o-Uni-o/`.

### Subpasta e domínio próprio

O Pages entrega o site em `usuario.github.io/NOME-DO-REPOSITORIO`, ou seja, dentro de uma subpasta. Por isso existe a variável `NEXT_PUBLIC_BASE_PATH`: sem ela o CSS, as imagens e os ícones seriam procurados na raiz do domínio e a página apareceria sem estilo.

Se o repositório for renomeado, atualize `NEXT_PUBLIC_SITE_URL` e `NEXT_PUBLIC_BASE_PATH` em `.github/workflows/deploy-pages.yml`.

Para usar um domínio próprio (ex.: `refrigeracaouniao.com.br`): cadastre o domínio em *Settings → Pages → Custom domain*, defina `NEXT_PUBLIC_SITE_URL` com esse domínio e deixe `NEXT_PUBLIC_BASE_PATH` vazio no fluxo, pois o site deixa de ficar em subpasta.

## Publicação em hospedagem Node (com banco e relatório)

1. Registrar o domínio escolhido pelo proprietário.
2. Criar um PostgreSQL de produção e copiar a URL segura para `DATABASE_URL`.
3. Publicar em uma hospedagem compatível com Next.js/Node e definir todas as variáveis.
4. Definir `NEXT_PUBLIC_SITE_URL` com o domínio final e sem barra no final.
5. Executar `npx drizzle-kit push` no banco de produção.
6. Fazer o primeiro deploy e testar telefone, Instagram, Google, `/robots.txt`, `/sitemap.xml` e `/api/health` em um celular.
7. Cadastrar o domínio no Google Search Console, validar a propriedade e enviar `/sitemap.xml`.
8. Adicionar o site ao Perfil da Empresa no Google usando uma URL com UTM: `/?utm_source=google&utm_medium=organic&utm_campaign=perfil_empresa`.

Não publicar com a URL provisória `localhost`. O canonical e os dados estruturados dependem de `NEXT_PUBLIC_SITE_URL`.

## Variáveis

- `DATABASE_URL`: obrigatória no modo servidor; conexão PostgreSQL. Não é usada no modo estático do GitHub Pages.
- `NEXT_PUBLIC_SITE_URL`: obrigatória em produção; exemplo `https://dominio.com.br`. No Pages, inclua a subpasta: `https://usuario.github.io/repositorio`.
- `NEXT_PUBLIC_BASE_PATH`: usada só no GitHub Pages; subpasta do site, exemplo `/Refrigera-o-Uni-o`. Deixe vazia quando o site ficar na raiz do domínio.
- `NEXT_PUBLIC_STATIC_EXPORT`: interna; ligada automaticamente por `npm run build:pages` para gerar o site estático.
- `GOOGLE_SITE_VERIFICATION`: opcional; código de verificação do Search Console.
- `REPORT_TOKEN`: recomendado no modo servidor; senha longa para consultar métricas agregadas.

### Consultar o relatório

Somente na publicação com servidor. Com `REPORT_TOKEN` configurado:

`curl -H "Authorization: Bearer SEU_TOKEN" https://seu-dominio.com.br/api/report`

O relatório retorna cliques por tipo, dia e origem nos últimos 30 dias. Um clique no telefone representa intenção de ligar, não confirma que a chamada foi completada.

## Manutenção simples

- Semanal: conferir se o telefone e os links continuam funcionando.
- Mensal: revisar métricas, atualizar dependências com responsável técnico e fazer backup do banco.
- Quando houver material autorizado: substituir a área preparada por fotos reais e avaliações autênticas.
- Se serviço, número ou área mudar: atualizar primeiro `src/lib/site.ts` e depois os textos relacionados.
- O proprietário só precisa atender as ligações e anotar origem/resultado em uma planilha ou caderno.

## Informações que ainda precisam de confirmação

1. Lista exata de cidades e bairros atendidos.
2. Dias de funcionamento; apenas a faixa divulgada de 8h às 17h está indicada no site.
3. Se o número principal aceita WhatsApp e se há disponibilidade para responder por lá.
4. Se `(71) 98112-5313` continua ativo e sua finalidade. Ele não foi publicado.
5. Formato do atendimento e transporte dos aparelhos em cada caso.
6. Atendimento a pequenos comércios.
7. Marcas, modelos e tipos de defeito efetivamente atendidos.
8. Política de garantia, somente se existir e puder ser descrita corretamente.
9. Fotografias reais e autorização de uso de imagem.
10. Avaliações reais autorizadas para exibição.
11. Arquivo original do logotipo. A versão atual preserva iniciais e cores, mas remove alegações e o segundo número não confirmados do material recebido.
12. Domínio final e acesso ao Google Search Console e ao Perfil da Empresa.

## O que não foi ativado

- WhatsApp: depende de confirmação do número e da rotina de resposta.
- Google Analytics ou pixel de anúncios: não há credenciais nem consentimento configurado; a medição própria já cobre os CTAs prioritários.
- Endereço público: propositalmente ausente, pois não há atendimento presencial.
- Agenda, orçamento automático, pagamentos e chatbot: desnecessários para a operação atual.

Veja o plano de divulgação completo em `docs/ESTRATEGIA-MARKETING.md`.
