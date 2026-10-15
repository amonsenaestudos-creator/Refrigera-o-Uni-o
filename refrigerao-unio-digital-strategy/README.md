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
- Registro próprio de cliques, sem formulários, cookies de publicidade ou dados pessoais fornecidos pelo visitante.
- Relatório agregado e protegido dos últimos 30 dias.

## Executar localmente

Requisitos: Node.js compatível com Next.js 16 e PostgreSQL.

1. Instale as dependências: `npm install`.
2. Configure as variáveis descritas em `.env.example`.
3. Aplique o esquema: `npx drizzle-kit push`.
4. Inicie: `npm run dev`.
5. Abra `http://localhost:3000`.

Validação de produção: `npx next typegen`, `npm exec tsc -- --noEmit --pretty false` e `npm run build`.

## Publicação

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

- `DATABASE_URL`: obrigatória; conexão PostgreSQL.
- `NEXT_PUBLIC_SITE_URL`: obrigatória em produção; exemplo `https://dominio.com.br`.
- `GOOGLE_SITE_VERIFICATION`: opcional; código de verificação do Search Console.
- `REPORT_TOKEN`: recomendado; senha longa para consultar métricas agregadas.

### Consultar o relatório

Com `REPORT_TOKEN` configurado:

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
