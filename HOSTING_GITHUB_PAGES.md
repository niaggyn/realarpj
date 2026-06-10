# Hospedagem no GitHub Pages

Este documento descreve como publicar este projeto estático no GitHub Pages, incluindo comandos de build, opções de deploy e uma Action pronta para automação.

**Resumo:**
- Projeto: Vite + Node (build: `vite build` + empacotamento do servidor com `esbuild`).
- Comando de build no repositório: `pnpm build`

## Pré-requisitos

- Conta no GitHub e repositório hospedado no GitHub.
- Branch principal (ex.: `main`) com o código fonte.
- `pnpm` instalado localmente para executar scripts (ou use `npm`/`yarn` conforme preferir).

## Comandos locais

Instale dependências e gere a build:

```bash
pnpm install
pnpm build
```

O script `build` gera os arquivos estáticos do cliente via `vite build` e empacota o servidor `server/index.ts` para `dist` usando `esbuild`.

Para testar localmente (pré-visualização):

```bash
pnpm preview
```

## Opções de implantação no GitHub Pages

Opção A — Recomendado: usar GitHub Actions para build e deploy automático para o branch `gh-pages` (workflow já incluído neste repositório em `.github/workflows/gh-pages.yml`).

Opção B — Manual: build local e push do conteúdo para a branch de publicação (`gh-pages`) ou para a pasta `/docs` na branch `main`.

### Opção A — GitHub Actions (automático)

1. A Action roda em pushes na branch `main` e executa `pnpm install` e `pnpm build`.
2. O artefato gerado é publicado no GitHub Pages (branch `gh-pages`) usando o deploy do Actions.

Observações:
- O fluxo usa o token padrão `GITHUB_TOKEN` (fornecido automaticamente pelo GitHub Actions) para publicar na branch `gh-pages`.
- Se seu repositório usa proteção de branch ou regras específicas, pode ser necessário ajustar permissões.

### Opção B — Manual

1. Rode `pnpm build` localmente.
2. Crie/atualize uma branch `gh-pages` com o conteúdo estático (ou copie os arquivos para `/docs` e faça push para `main`).

Exemplo de sequência (deploy para `gh-pages` localmente):

```bash
pnpm build
git checkout --orphan gh-pages
git --work-tree dist add --all
git --work-tree dist commit -m "Deploy site"
git push origin HEAD:gh-pages --force
git checkout -
```

## Arquivo de workflow (incluso)

Há uma Action pronta em `.github/workflows/gh-pages.yml` que executa o build e publica automaticamente.

## Dicas e resolução de problemas

- Verifique se o repositório tem GitHub Pages habilitado em Settings → Pages (o Action configura a branch `gh-pages`).
- Se o site não atualiza, verifique a saída do workflow na aba Actions do repositório.
- Para sites com rota SPA (history API), habilite o redirecionamento para `index.html` (config adicional não coberta pelo Pages diretamente — pode usar `404.html` como fallback).

---

Se quiser, eu posso também criar o workflow de Actions (deploy automático) agora (recomendado). Deseja que eu adicione o workflow? 
