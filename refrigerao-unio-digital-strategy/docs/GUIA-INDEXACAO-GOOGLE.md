# Guia: colocar o site no Google do zero (Search Console)

Este guia é para quem **nunca usou o Google Search Console**. Segue passo a passo,
do zero, até o site aparecer nas buscas. Nada aqui custa dinheiro.

## Por que isso é a etapa mais importante

Um domínio próprio sem indexação vale **zero**: o Google não mostra para ninguém um
site que ele não conhece. Hoje o site `uniaorefrigeracao.com.br` (registrado em
13/10/2026) está exatamente nesse estado — e ainda com a página inicial retornando
erro. **Quem indexar primeiro, aparece primeiro.** O nosso site já tem toda a parte
técnica pronta (metadata, sitemap, robots, dados estruturados); falta só a parte
administrativa abaixo.

Tempo total: cerca de 30 a 40 minutos. Resultado: começa em alguns dias, se consolida
em 1 a 2 semanas.

## O que você precisa antes de começar

- Uma **conta Google** (de preferência a mesma que administra o Perfil da Empresa).
- O endereço atual do site:
  **https://amonsenaestudos-creator.github.io/Refrigera-o-Uni-o/**
- Acesso de escrita neste repositório (para um arquivo de verificação).

## Passo 1 — Abrir o Search Console

1. Acesse **https://search.google.com/search-console**.
2. Entre com a conta Google.
3. Conceito básico: uma **propriedade** é o endereço que você quer acompanhar.
   Vamos criar uma propriedade para o endereço atual do site.

## Passo 2 — Criar a propriedade

1. Na tela inicial, em "Selecionar propriedade", clique em **Adicionar propriedade**.
2. Escolha o tipo **Prefixo do URL** (à esquerda).
3. Cole exatamente: `https://amonsenaestudos-creator.github.io/Refrigera-o-Uni-o/`
4. Clique em **Continuar**.

> O tipo "Domínio" (à direita) só faz sentido quando tivermos nosso próprio domínio
> (veja `GUIA-DOMINIO-PROPRIO.md`). Para o endereço do GitHub Pages, use Prefixo do URL.

## Passo 3 — Provar que o site é seu (verificação)

O Google pede uma prova de que você controla o endereço. O método mais simples é o
**arquivo HTML**:

1. Na tela de verificação, escolha o método **Arquivo HTML**.
2. O Google oferece o download de um arquivo com nome parecido com
   `google1234567890abcdef.html`. Baixe-o.
3. Coloque o arquivo dentro da pasta
   `refrigerao-unio-digital-strategy/public/` deste repositório.
4. Envie para o branch `main` (commit e push). O GitHub Actions publica o site
   automaticamente em 2 a 3 minutos (aba **Actions** do repositório mostra o progresso).
5. Confirme no navegador que o arquivo respondeu:
   `https://amonsenaestudos-creator.github.io/Refrigera-o-Uni-o/google1234567890abcdef.html`
6. Volte ao Search Console e clique em **Verificar**.

Método alternativo (sem arquivo): o site já suporta a variável
`GOOGLE_SITE_VERIFICATION`. Pegue o valor `google-site-verification=...` do método
"Tag HTML", adicione a variável no passo "Gerar a versão estática" do workflow
`.github/workflows/deploy-pages.yml` e envie. Prefira o arquivo se estiver com pressa.

## Passo 4 — Enviar o sitemap

1. No menu lateral do Search Console, abra **Sitemaps**.
2. Em "Adicionar um novo sitemap", digite apenas: `sitemap.xml`
3. Clique em **Enviar**.
4. O endereço completo enviado será
   `https://amonsenaestudos-creator.github.io/Refrigera-o-Uni-o/sitemap.xml` —
   é gerado automaticamente pelo site.

O status pode aparecer como "Não foi possível obter" nas primeiras horas. É normal;
o Google tenta de novo sozinho.

## Passo 5 — Pedir a indexação da página inicial

1. Na barra superior do Search Console, use o campo **Inspeção de URL**.
2. Cole o endereço completo da home:
   `https://amonsenaestudos-creator.github.io/Refrigera-o-Uni-o/`
3. Clique em **Solicitar indexação** e aguarde a confirmação.

Repita depois para a página `/privacidade/` se quiser acelerar tudo.

## Passo 6 — O que esperar e como acompanhar

- **Não é imediato.** Contagem normal: 1 a 4 dias para o primeiro rastreamento;
  1 a 2 semanas para aparecer em buscas. Não desista no segundo dia.
- Acompanhe no menu **Páginas** (quantas URLs foram indexadas) e **Desempenho**
  (quais pesquisas trouxeram o site).
- Teste rápido fora do Search Console: pesquise no Google
  `site:amonsenaestudos-creator.github.io/Refrigera-o-Uni-o`.
  Enquanto não retornar nada, a indexação ainda não aconteceu.

## Passo 7 — Perfil da Empresa no Google (o que realmente gera ligações)

Para negócio local, o **Perfil da Empresa** aparece antes do site na maioria das
pesquisas ("conserto de geladeira perto de mim"). O site já aponta para o perfil
existente da empresa.

1. Acesse **https://business.google.com** com a mesma conta Google.
2. Se o perfil já existe (o site usa o link `share.google/mHuhdf761DWGOMJ0Z`),
   **reivindique-o** em vez de criar outro — dois perfis dividem a força do negócio.
3. No painel, corrija: categoria (a mais específica de conserto de eletrodomésticos),
   área de atendimento (só cidades realmente atendidas), horário em que o telefone é
   atendido e o site.
4. No campo site, cole o endereço **com UTM**:
   `https://amonsenaestudos-creator.github.io/Refrigera-o-Uni-o/?utm_source=google&utm_medium=organic&utm_campaign=perfil_empresa`
5. Publique fotos reais e, após cada serviço, peça avaliação pelo link oficial.

O checklist completo de auditoria do perfil está em `ESTRATEGIA-MARKETING.md`,
seção 2.

## Quando o domínio próprio estiver pronto

Depois de registrar e publicar o domínio (veja `GUIA-DOMINIO-PROPRIO.md`):

1. Crie uma propriedade nova do tipo **Domínio** no Search Console — a verificação é
   por registro DNS (o registro.br aceita cadastrar registros TXT no painel).
2. Envie o `sitemap.xml` de novo dentro dessa propriedade.
3. O GitHub Pages redireciona automaticamente o endereço antigo para o domínio novo,
   então nada se perde no meio da transição.
4. Atualize o link no Perfil da Empresa (com o UTM novo).
5. Mantenha as duas propriedades por algumas semanas para comparar.

## Erros comuns a evitar

- **Desistir cedo** — indexação leva dias; é o prazo do Google, não do site.
- Pagar alguém para "indexar em 24h" — não existe atalho legítimo; o Search Console
  é gratuito e oficial.
- Trocar de endereço no meio do processo — finalize a indexação atual primeiro.
- Enquanto isso, lembre: o site concorrente também não está indexado e a página
  inicial dele está com erro. A corrida está empatada em zero a zero, e o nosso lado
  tem tudo pronto para ganhar.
