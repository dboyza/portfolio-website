import { Buffer } from 'node:buffer';
import { readFile, writeFile } from 'node:fs/promises';
import sharp from 'sharp';

// Run from the repository root with npm run assets:generate.
// Preserve the original portrait; all public variants are generated from it.
for (const width of [480, 820, 1254]) {
  const portrait = sharp('assets/profile-portrait.png').rotate().resize(width);
  await Promise.all([
    portrait
      .clone()
      .avif({ quality: 60, effort: 7 })
      .toFile(`public/profile-portrait-${width}.avif`),
    portrait
      .clone()
      .webp({ quality: 82, effort: 6 })
      .toFile(`public/profile-portrait-${width}.webp`),
    portrait
      .clone()
      .jpeg({ quality: 84, mozjpeg: true })
      .toFile(`public/profile-portrait-${width}.jpg`),
  ]);
}

// Share the hero's exact letterforms, with a deterministic still composition.
const strokes = JSON.parse(await readFile('src/data/monogram.json', 'utf8'));
let seed = 8192;
const random = () => {
  seed = (seed * 1664525 + 1013904223) >>> 0;
  return seed / 4294967296;
};
const gaussian = () =>
  Math.sqrt(-2 * Math.log(Math.max(random(), 0.00001))) *
  Math.cos(random() * Math.PI * 2);
const stars = [];
const circle = (x, y, radius, opacity) =>
  `<circle cx="${x.toFixed(2)}" cy="${y.toFixed(2)}" r="${radius.toFixed(2)}" opacity="${opacity.toFixed(2)}"/>`;
for (let i = 0; i < 130; i++) {
  stars.push(
    circle(
      random() * 1200,
      random() * 630,
      0.35 + random() * 0.8,
      0.12 + random() * 0.35,
    ),
  );
}
for (let i = 0; i < 5200; i++) {
  let x, y;
  const lettering = i < 4100;
  if (lettering) {
    const [a, b, c, d] = strokes[[0, 1, 1, 2, 3, 4][Math.floor(random() * 6)]];
    const t = random(),
      u = 1 - t;
    const scatter = random() < 0.82 ? 0.014 : 0.045;
    x =
      u ** 3 * a[0] +
      3 * u * u * t * b[0] +
      3 * u * t * t * c[0] +
      t ** 3 * d[0] +
      gaussian() * scatter;
    y =
      u ** 3 * a[1] +
      3 * u * u * t * b[1] +
      3 * u * t * t * c[1] +
      t ** 3 * d[1] +
      gaussian() * scatter;
  } else {
    const angle = random() * Math.PI * 2,
      orbit = 0.84 + random() * 0.35;
    x = Math.cos(angle) * orbit;
    y = Math.sin(angle) * orbit * 0.29 - x * 0.35 + gaussian() * 0.016;
  }
  const sx = 885 + x * 252,
    sy = 303 + y * 252;
  stars.push(
    circle(
      sx,
      sy,
      0.35 + random() * 0.55,
      lettering ? 0.2 + random() * 0.68 : 0.15 + random() * 0.2,
    ),
  );
  if (lettering && random() > 0.992) {
    stars.push(`<circle cx="${sx}" cy="${sy}" r="9" fill="url(#bloom)"/>`);
  }
}
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="haze"><stop stop-color="#172b48" stop-opacity=".48"/><stop offset="1" stop-color="#06080c" stop-opacity="0"/></radialGradient>
    <radialGradient id="bloom"><stop stop-color="#fff"/><stop offset=".12" stop-color="#d9ecff" stop-opacity=".8"/><stop offset=".5" stop-color="#9fcfff" stop-opacity=".1"/><stop offset="1" stop-color="#9fcfff" stop-opacity="0"/></radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#06080c"/>
  <ellipse cx="875" cy="305" rx="370" ry="310" fill="url(#haze)"/>
  <g fill="#c7dfff">${stars.join('')}</g>
  <g font-family="Helvetica Neue, Helvetica, Arial, sans-serif">
    <text x="72" y="151" fill="#a6b0bf" font-size="23">Hi, I'm</text>
    <g fill="#f2f4f7" font-size="116" font-weight="500" letter-spacing="-6">
      <text x="66" y="269">Dylan</text>
      <text x="66" y="379">Boyza</text>
    </g>
    <text x="72" y="430" fill="#a6b0bf" font-size="23">a software engineer at JPMorganChase</text>
    <path d="M72 519H1128" stroke="#27313e"/>
    <text x="72" y="562" fill="#adc3db" font-size="17" letter-spacing=".4">MLOps<tspan fill="#52667d">&#160;&#160;/&#160;&#160;</tspan>AI/ML Platforms<tspan fill="#52667d">&#160;&#160;/&#160;&#160;</tspan>Cloud Infrastructure</text>
    <text x="1128" y="562" text-anchor="end" fill="#7f8d9f" font-size="15">dylan boyza</text>
  </g>
</svg>`;
await writeFile('assets/social-card.svg', svg);
await sharp(Buffer.from(svg))
  .png({ compressionLevel: 9 })
  .toFile('public/og-image.png');
