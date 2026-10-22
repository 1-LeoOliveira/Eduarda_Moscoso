// Ferramenta avulsa, rodada à mão quando as fotos mudam. Precisa do sharp,
// que NÃO é dependência do site:  npm i --no-save sharp
//
const sharp = require('sharp');
const [SRC, OUT, Y0, Y1] = [process.argv[2], process.argv[3], +process.argv[4], +process.argv[5]];

(async () => {
  const { data, info } = await sharp(SRC).greyscale().raw().toBuffer({ resolveWithObject: true });
  const { width: W } = info;

  let x0 = W, x1 = 0;
  for (let y = Y0; y <= Y1; y++)
    for (let x = 0; x < W; x++)
      if (data[y * W + x] < 128) { if (x < x0) x0 = x; if (x > x1) x1 = x; }

  const w = x1 - x0 + 1, h = Y1 - Y0 + 1;

  // tinta preta -> alfa; o branco do JPEG vira transparente
  const rgba = Buffer.alloc(w * h * 4);
  for (let y = 0; y < h; y++)
    for (let x = 0; x < w; x++) {
      const g = data[(Y0 + y) * W + (x0 + x)];
      rgba[(y * w + x) * 4 + 3] = Math.max(0, Math.min(255, Math.round(((240 - g) / 220) * 255)));
    }

  // o sharp roda resize ANTES de extend dentro de um mesmo pipeline, então o
  // quadrado é montado aqui e o redimensionamento vai num segundo passe
  const pad = Math.round(Math.max(w, h) * 0.06);
  const side = Math.max(w, h) + pad * 2;
  const quadrado = await sharp(rgba, { raw: { width: w, height: h, channels: 4 } })
    .extend({
      top: Math.round((side - h) / 2), bottom: side - h - Math.round((side - h) / 2),
      left: Math.round((side - w) / 2), right: side - w - Math.round((side - w) / 2),
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png().toBuffer();

  await sharp(quadrado).resize({ width: 512 }).png({ compressionLevel: 9 }).toFile(OUT);

  const m = await sharp(OUT).metadata();
  console.log(`recorte ${w}x${h} (prop ${(w / h).toFixed(3)}) -> ${OUT} ${m.width}x${m.height}`);
})();
