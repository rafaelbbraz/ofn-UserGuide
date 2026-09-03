# Captura automatizada de screenshots

Infraestrutura pra retirar prints em pt-BR da plataforma Nossa Feira e substituir os originais em inglês em `../.gitbook/assets/`.

## Setup

```bash
npm install
npx playwright install chromium
```

## Uso

```bash
BASE_URL=https://nossafeira.com.br \
ADMIN_EMAIL=admin@nossafeira.com.br \
ADMIN_PASSWORD='***' \
node capture.js

# Capturar só uma imagem
node capture.js --only dash1.jpg

# Capturar só uma seção
node capture.js --section basic-features
```

## Como funciona

1. `capture-map.json` mapeia cada `filename` → `{url, action, ...}`
2. `capture.js` loga como admin, navega pra cada URL e salva o print
3. Os arquivos vão direto para `.gitbook/assets/` com o **mesmo nome** do original (mantém as referências dos .md intactas)

## Fluxo pra ampliar o mapa

1. Abrir `../../IMAGE_TRANSLATION_TRACKER.md` numa seção
2. Pra cada linha ⬜:
   - Descobrir a URL admin/loja que aparece no print (via contexto do .md)
   - Adicionar entrada em `capture-map.json`
3. Rodar `node capture.js --section <seção>`
4. Revisar visualmente os prints em `.gitbook/assets/`
5. Marcar como ✅ no tracker

## Limitações conhecidas

- **Prints com anotações** (setas, caixas vermelhas): capturados sem anotação; pós-processar com Figma/Skitch
- **Prints com estado específico** (ex: "carrinho com 3 itens"): precisam de seed antes do print — adicionar `beforeActions` no spec
- **Modais e dropdowns**: usar `selector` ou adicionar cliques via `actions` (a implementar)
- **GIFs**: fora do escopo desse script — regravar com ScreenStudio ou similar
