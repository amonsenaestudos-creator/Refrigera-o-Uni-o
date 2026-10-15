# Guia: domínio próprio (.com.br) para a Refrigeração União

Este guia cobre do registro do domínio até o site respondendo nele, sem quebrar nada
do que já está publicado. O repositório já foi preparado para essa troca — a mudança
de código é mínima e está marcada no passo 5.

## Registrar vale a pena? Para que serve

O domínio não colocará o site sozinho no Google — isso é a indexação
(`GUIA-INDEXACAO-GOOGLE.md`). O domínio serve para:

- parecer profissional e confiável (um `.com.br` próprio no lugar de um endereço
  longo do GitHub Pages);
- ser fácil de **falar no telefone** e o cliente decorar;
- a empresa **ser dona do endereço** para sempre, mesmo se a hospedagem mudar.

Observação de mercado: o endereço `uniaorefrigeracao.com.br` já está registrado
(desde 13/10/2026) e o `refrigeracaouniao.com.br` pertence a uma empresa de mesmo
nome no Rio de Janeiro. Também existe uma "União Refrigeração" em Brasília
(`uniaorefrigeracao.com`). Ou seja: o nome escolhido deve se diferenciar, ou o
Google vai misturar nosso negócio com o das outras.

## Passo 1 — Escolher o nome

Regras práticas:

- curto, **sem hífen**, fácil de soletrar ao telefone;
- de preferência com "refrigeracao" e "uniao" no nome (é o que as pessoas pesquisam);
- terminar em `.com.br` (é o que o público brasileiro digita).

Sugestões para conferir disponibilidade (a consulta é gratuita no próprio site):

- `refrigeracaouniaoba.com.br`
- `uniaorefrigeracaoba.com.br`
- `refrigeracaouniao-ba.com.br` (menos ideal, por causa do hífen)
- `refrigeracaouniaodiasdavila.com.br`

Confira em: **https://registro.br** (campo de busca no topo).

## Passo 2 — Registrar no registro.br

1. Crie a conta no **registro.br** com o **CPF do proprietário da empresa**.
2. Registre o domínio escolhido — o custo é cerca de R$ 40 por ano.
3. **Importante:** o registro deve ficar no nome do proprietário, não no de um
   terceiro (amigo, parente ou "o rapaz que entende de site"). O dono do CPF é o
   dono do endereço; trocar isso depois é burocracia e, em discussão, alavanca de
   pressão.

## Passo 3 — Apontar o DNS para o GitHub Pages

No painel do registro.br, abra a administração do domínio e vá em **DNS**.
Cadastre:

**Registros A** (no campo nome, deixe vazio ou `@` — é o domínio sem `www`):

| Tipo | Nome | Valor |
|------|------|-------|
| A | (vazio / @) | `185.199.108.153` |
| A | (vazio / @) | `185.199.109.153` |
| A | (vazio / @) | `185.199.110.153` |
| A | (vazio / @) | `185.199.111.153` |

**Registro CNAME** (para `www` funcionar):

| Tipo | Nome | Valor |
|------|------|-------|
| CNAME | www | `amonsenaestudos-creator.github.io.` |

A propagação leva de alguns minutos a algumas horas (limite legal de 48h, raramente
chega a isso). O registro.br atualiza a cada 15 minutos, na prática.

## Passo 4 — Ativar o domínio no GitHub

1. Neste repositório: **Settings → Pages → Custom domain**.
2. Digite o domínio (ex.: `refrigeracaouniaoba.com.br`) e clique em **Save**.
3. O GitHub mostra "DNS check successful" quando os registros do passo 3 estiverem
   certos. Marque também **Redirect www → apex** se aparecer a opção.
4. Espere o certificado HTTPS ficar pronto (o GitHub provisiona sozinho; pode levar
   de minutos a algumas horas) e então marque **Enforce HTTPS**.
5. A partir daí, o endereço antigo no GitHub Pages **redireciona automaticamente**
   para o domínio novo — ninguém perde o site no meio da troca.

## Passo 5 — Ajuste no repositório (uma edição só)

No arquivo `.github/workflows/deploy-pages.yml`, no passo "Gerar a versão estática":

```yaml
env:
  # Aponte para o domínio novo...
  NEXT_PUBLIC_SITE_URL: https://SEUDOMINIO.com.br
  # ...e remova a linha NEXT_PUBLIC_BASE_PATH inteira
  # (o site deixa de viver em subpasta e volta para a raiz do domínio).
  NEXT_PUBLIC_STATIC_EXPORT: "true"
```

Se o Search Console estiver verificado por **tag HTML** (método alternativo do
guia de indexação) em vez de arquivo, adicione também:

```yaml
  GOOGLE_SITE_VERIFICATION: valor-do-codigo-do-google
```

Faça o commit e o push para `main`. O Actions republica o site já no domínio.

> As URLs canônicas, o Open Graph, o sitemap e os dados estruturados leem
> `NEXT_PUBLIC_SITE_URL` automaticamente — nada mais precisa mudar no código.

## Passo 6 — Conferência final (em um celular)

Depois do primeiro acesso ao domínio novo, teste na ordem:

1. A home abre com `https://` e cadeado verde.
2. O botão de ligação disca `(71) 98778-0451`.
3. `/privacidade/` abre.
4. `/robots.txt` e `/sitemap.xml` respondem.
5. Se der tempo: pedir a um amigo em outra cidade para testar também.

## Passo 7 — Depois da troca

1. **Search Console:** crie a propriedade do tipo **Domínio** (verificação por DNS —
   o registro.br tem opção de adicionar registro TXT no painel) e envie o
   `sitemap.xml` lá. O guia completo está em `GUIA-INDEXACAO-GOOGLE.md`.
2. **Perfil da Empresa:** atualize o campo site com o domínio novo + UTM:
   `https://SEUDOMINIO.com.br/?utm_source=google&utm_medium=organic&utm_campaign=perfil_empresa`
3. **README deste projeto:** atualize o endereço publicado na seção de publicação.
4. Mantenha o domínio **sempre pago e no CPF do proprietário** — domínio vencido é
   o jeito mais fácil de perder um site.
