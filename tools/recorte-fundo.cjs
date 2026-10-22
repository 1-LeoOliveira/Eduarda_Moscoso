// Ferramenta avulsa, rodada à mão quando as fotos mudam. Precisa do sharp,
// que NÃO é dependência do site:  npm i --no-save sharp
//
const sharp = require('sharp');
const [SRC, OUT] = [process.argv[2], process.argv[3]];
const FADE = Number(process.argv[4] || 94) / 100;  // onde começa a dissolver o pé

const LUM_MIN = 100;  // fundo nunca desce disso (canto mais escuro medido: 118)
const SAT_MAX = 26;   // fundo é cinza puro; pele=76 e terno=29 ficam de fora

(async () => {
  const { data, info } = await sharp(SRC).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: W, height: H } = info;
  const N = W * H;

  const bgLike = new Uint8Array(N);
  for (let p = 0; p < N; p++) {
    const r = data[p * 3], g = data[p * 3 + 1], b = data[p * 3 + 2];
    bgLike[p] = (r + g + b) / 3 > LUM_MIN && Math.max(r, g, b) - Math.min(r, g, b) < SAT_MAX ? 1 : 0;
  }

  // flood fill desde as bordas: só é fundo o que está ligado à borda, então um
  // cinza dentro da silhueta não abre buraco
  const isBg = new Uint8Array(N);
  const st = [];
  const push = (p) => { if (bgLike[p] && !isBg[p]) { isBg[p] = 1; st.push(p); } };
  for (let x = 0; x < W; x++) { push(x); push((H - 1) * W + x); }
  for (let y = 0; y < H; y++) { push(y * W); push(y * W + W - 1); }
  while (st.length) {
    const p = st.pop(), x = p % W, y = (p / W) | 0;
    if (x > 0) push(p - 1);
    if (x < W - 1) push(p + 1);
    if (y > 0) push(p - W);
    if (y < H - 1) push(p + W);
  }

  // descarta blocos de frente pequenos e soltos (a marca d'água no canto)
  const seen = new Uint8Array(N), keep = new Uint8Array(N);
  let dropped = 0;
  for (let p0 = 0; p0 < N; p0++) {
    if (isBg[p0] || seen[p0]) continue;
    const comp = [p0]; seen[p0] = 1; const s2 = [p0];
    while (s2.length) {
      const p = s2.pop(), x = p % W, y = (p / W) | 0;
      for (const q of [x > 0 ? p - 1 : -1, x < W - 1 ? p + 1 : -1, y > 0 ? p - W : -1, y < H - 1 ? p + W : -1])
        if (q >= 0 && !isBg[q] && !seen[q]) { seen[q] = 1; comp.push(q); s2.push(q); }
    }
    if (comp.length > N * 0.01) for (const p of comp) keep[p] = 1;
    else dropped += comp.length;
  }

  const mask = Buffer.alloc(N);
  for (let p = 0; p < N; p++) mask[p] = keep[p] ? 255 : 0;

  // encolhe ~1px e suaviza: mata a franja cinza que sobra na borda do recorte
  // o sharp devolve o raw do blur em sRGB (3 canais), então amostramos de ch em ch
  const soft = await sharp(mask, { raw: { width: W, height: H, channels: 1 } }).blur(1.6).raw().toBuffer();
  const ch = soft.length / N;
  const rgba = Buffer.alloc(N * 4);
  let x0 = W, y0 = H, x1 = 0, y1 = 0;
  for (let p = 0; p < N; p++) {
    const a = Math.max(0, Math.min(255, Math.round((soft[p * ch] - 110) * (255 / 110))));
    rgba[p * 4] = data[p * 3]; rgba[p * 4 + 1] = data[p * 3 + 1];
    rgba[p * 4 + 2] = data[p * 3 + 2]; rgba[p * 4 + 3] = a;
    if (a > 8) {
      const x = p % W, y = (p / W) | 0;
      if (x < x0) x0 = x; if (x > x1) x1 = x;
      if (y < y0) y0 = y; if (y > y1) y1 = y;
    }
  }

  const cw = x1 - x0 + 1, chh = y1 - y0 + 1;
  const corte = await sharp(rgba, { raw: { width: W, height: H, channels: 4 } })
    .extract({ left: x0, top: y0, width: cw, height: chh })
    .raw().toBuffer();

  // dissolve o corte reto do pé da foto no próprio alfa. Fica no arquivo, e não
  // numa máscara CSS, porque máscara recortaria o brilho que o CSS desenha fora
  // da caixa do elemento.
  for (let y = 0; y < chh; y++) {
    const t = y / chh;
    if (t <= FADE) continue;
    const f = Math.max(0, 1 - (t - FADE) / (1 - FADE));
    for (let x = 0; x < cw; x++) {
      const i = (y * cw + x) * 4 + 3;
      corte[i] = Math.round(corte[i] * f);
    }
  }

  await sharp(corte, { raw: { width: cw, height: chh, channels: 4 } })
    .resize({ width: 900, withoutEnlargement: true })
    .webp({ quality: 84, alphaQuality: 92 })
    .toFile(OUT);

  console.log(`descartado solto: ${dropped}px | caixa (${x0},${y0})-(${x1},${y1}) = ${x1 - x0 + 1}x${y1 - y0 + 1}`);
})();
