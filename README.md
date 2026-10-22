# Eduarda Moscoso — Landing Page

Landing page da psicóloga Eduarda Moscoso (CRP 10/11273). Psicoterapia online com
abordagem psicanalítica para mulheres e adolescentes a partir dos 13 anos.

Construída com a mesma stack da landing page da Monalisa Siqueira: React 19 + Vite +
TypeScript + Tailwind CSS, com componentes de UI baseados em Radix.

## Rodando localmente

```bash
npm install
npm run dev
```

Outros comandos: `npm run build` (gera `dist/`), `npm run preview`, `npm run lint`.

## Antes de publicar

Todos os dados de contato ficam em um único arquivo: `src/react-app/config/site.ts`.
Os campos marcados com `TODO` precisam ser preenchidos:

- `whatsapp` — número no formato internacional, só dígitos (ex.: `5551999998888`)
- `phone` / `phoneHref` — telefone exibido no footer
- `instagram` — @ do perfil, sem o arroba

Também é preciso trocar as imagens em `public/`, que hoje são placeholders SVG:

| Arquivo | Onde aparece |
| --- | --- |
| `logo-eduarda.svg` | header, footer e favicon |
| `eduarda-foto-1.svg` | foto principal do Hero |
| `eduarda-foto-2.svg` | foto da seção "Sobre" |

Ao trocar por `.jpg`/`.png`, atualize os caminhos em `site.ts` e as tags de
`og:image`/favicon em `index.html`.

### Depoimentos

A seção de depoimentos existe mas está desativada: o array `testimonials` em
`src/react-app/components/Testimonials.tsx` está vazio e o componente não renderiza
nada enquanto for assim. Basta preencher com os feedbacks autorizados que a seção
aparece automaticamente.

## Estrutura das seções

`Header` · `Hero` · `About` · `Services` (áreas de atuação) · `Pains` (identificação)
· `Benefits` · `FirstSession` · `OnlineCare` · `Testimonials` · `Faq` · `Footer`
· `WhatsAppButton` (botão flutuante)

## Deploy

O projeto é totalmente estático. O `vercel.json` já tem o rewrite de SPA configurado —
basta apontar a Vercel para a pasta e usar `npm run build` com saída em `dist`.
