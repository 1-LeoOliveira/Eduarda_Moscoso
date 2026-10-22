// Ferramenta avulsa, rodada à mão quando a marca ou os dados mudam. Precisa do
// sharp, que NÃO é dependência do site:  npm i --no-save sharp
//
// Gera o cartão 1200x630 que aparece ao compartilhar o link (WhatsApp, Facebook,
// LinkedIn, X). Medida fixa do padrão Open Graph: quadrado seria recortado.
const sharp = require('sharp');

const W = 1200, H = 630;
const NOME = 'Eduarda Moscoso';
const CARGO = 'Psicóloga Clínica';
const CRP = 'CRP 10/11273';
const LINHA = 'Psicanálise · Atendimento online';
const CHAMADA = 'Mulheres e adolescentes a partir dos 13 anos';

(async () => {
  const [, , MARCA, OUT] = process.argv;

  const fundo = Buffer.from(`<svg width="${W}" height="${H}">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#efebf7"/>
        <stop offset="45%" stop-color="#ffffff"/>
        <stop offset="100%" stop-color="#e3eefb"/>
      </linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#g)"/>
    <circle cx="150" cy="520" r="230" fill="#ded5ee" opacity="0.45"/>
    <circle cx="1080" cy="120" r="190" fill="#c6ddf6" opacity="0.45"/>
  </svg>`);

  const texto = Buffer.from(`<svg width="${W}" height="${H}">
    <text x="470" y="250" font-family="Georgia, 'Times New Roman', serif" font-size="66"
          font-weight="600" fill="#45335d">${NOME}</text>
    <text x="472" y="305" font-family="'Segoe UI', Arial, sans-serif" font-size="32"
          fill="#475569">${CARGO} · ${CRP}</text>
    <rect x="472" y="345" width="96" height="3" fill="#8d6fba"/>
    <text x="472" y="410" font-family="'Segoe UI', Arial, sans-serif" font-size="30"
          font-weight="600" fill="#306db4">${LINHA}</text>
    <text x="472" y="455" font-family="'Segoe UI', Arial, sans-serif" font-size="26"
          fill="#64748b">${CHAMADA}</text>
  </svg>`);

  const marca = await sharp(MARCA).resize({ width: 300, height: 300, fit: 'inside' }).toBuffer();
  const m = await sharp(marca).metadata();

  await sharp(fundo)
    .composite([
      { input: marca, left: 120, top: Math.round((H - m.height) / 2) },
      { input: texto },
    ])
    .jpeg({ quality: 90, mozjpeg: true })
    .toFile(OUT);

  console.log(`${OUT} ${W}x${H}`);
})();
