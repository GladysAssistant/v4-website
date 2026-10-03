// Generates one Open Graph image (1200x630) per landing page and locale, so a
// page shared on social networks or in chats shows its own title instead of
// the generic site image.
//
// Usage, after a build (the titles are read from the built pages):
//   yarn build
//   npm install --no-save playwright   # not a project dependency
//   node scripts/generate_og_images.js
//
// Pages come from the /guides/ hub (src/data/guidesHubData.js) plus /guides/
// itself. Images land in static/img/og/<slug>-<locale>.jpg and the list of
// generated slugs in src/data/ogImages.json, which HorizonPage and the
// structured data read. Re-run it when you add a landing page or change a
// title.

const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const BUILD_DIR = path.join(ROOT, "build");
const OUTPUT_DIR = path.join(ROOT, "static/img/og");
const MANIFEST = path.join(ROOT, "src/data/ogImages.json");
const LOCALES = ["en", "fr"];

const TAGLINE = {
  en: "Open source · Self-hosted · No cloud required",
  fr: "Open source · Auto-hébergé · Sans cloud obligatoire",
};

const slugsFromHub = () => {
  const hub = fs.readFileSync(path.join(ROOT, "src/data/guidesHubData.js"), "utf8");
  const slugs = [...hub.matchAll(/card\(\s*"\/([a-z0-9-]+)\/"/g)].map((m) => m[1]);
  return ["guides", ...new Set(slugs)];
};

const decode = (text) =>
  text
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");

// The page's H1 and the first sentence of its subtitle, from the build.
const readPage = (slug, locale) => {
  const file = path.join(BUILD_DIR, locale === "en" ? "" : locale, slug, "index.html");
  if (!fs.existsSync(file)) return null;
  const html = fs.readFileSync(file, "utf8");
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  // The HTML minifier drops optional </p> tags: stop at the next tag instead.
  const subtitle = html.match(/<p class="?heroSubtitle[^>]*>([^<]*)/);
  const strip = (s) => decode(s.replace(/<[^>]+>/g, "")).trim();
  if (!h1) return null;
  return { title: strip(h1[1]), subtitle: shorten(subtitle ? strip(subtitle[1]) : "") };
};

// Keep the subtitle to about two lines on the image.
const shorten = (text, max = 150) => {
  if (text.length <= max) return text;
  const firstSentence = text.match(/^.*?[.!?](\s|$)/);
  if (firstSentence && firstSentence[0].trim().length <= max) return firstSentence[0].trim();
  return `${text.slice(0, max).replace(/\s+\S*$/, "")}…`;
};

const escapeHtml = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const template = ({ title, subtitle }, locale, fontUrl, logoUrl) => `<!doctype html>
<html><head><meta charset="utf-8"><style>
@font-face { font-family: Inter; src: url("${fontUrl}") format("woff2"); font-weight: 100 900; }
* { margin: 0; box-sizing: border-box; }
body {
  width: 1200px; height: 630px; overflow: hidden;
  font-family: Inter, sans-serif; color: #fff;
  background:
    radial-gradient(900px 500px at 0% 0%, rgba(40, 70, 150, 0.55), transparent 70%),
    radial-gradient(700px 500px at 100% 100%, rgba(90, 50, 110, 0.45), transparent 70%),
    #0b0e16;
  padding: 72px 80px;
  display: flex; flex-direction: column;
}
.brand { display: flex; align-items: center; gap: 18px; font-size: 30px; font-weight: 600; }
.brand img { width: 44px; height: 44px; }
.title {
  margin-top: auto; font-size: ${title.length > 60 ? 54 : 64}px; font-weight: 800;
  line-height: 1.08; letter-spacing: -0.02em; max-width: 1000px;
}
.subtitle { margin-top: 24px; font-size: 28px; line-height: 1.35; color: rgba(255,255,255,0.72); max-width: 980px; }
.tagline { margin-top: auto; padding-top: 28px; font-size: 24px; color: rgba(255,255,255,0.55);
  display: flex; justify-content: space-between; }
.accent { background: linear-gradient(90deg, #8fb4ff, #c9a6ff 55%, #f2b8a2); -webkit-background-clip: text; color: transparent; }
</style></head><body>
<div class="brand"><img src="${logoUrl}" alt=""><span>Gladys Assistant</span></div>
<div class="title">${escapeHtml(title)}</div>
${subtitle ? `<div class="subtitle">${escapeHtml(subtitle)}</div>` : ""}
<div class="tagline"><span>${TAGLINE[locale]}</span><span class="accent">gladysassistant.com</span></div>
</body></html>`;

(async () => {
  let chromium;
  try {
    ({ chromium } = require("playwright"));
  } catch (e) {
    console.error("Playwright is required: npm install --no-save playwright");
    process.exit(1);
  }
  if (!fs.existsSync(BUILD_DIR)) {
    console.error("Run `yarn build` first: titles are read from the built pages.");
    process.exit(1);
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const fontUrl = `file://${path.join(ROOT, "static/fonts/Inter-roman.var.woff2")}`;
  const logoUrl = `file://${path.join(ROOT, "static/img/logo.svg")}`;
  const browser = await chromium.launch(
    process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}
  );
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
  const generated = [];
  for (const slug of slugsFromHub()) {
    const pages = LOCALES.map((locale) => [locale, readPage(slug, locale)]);
    if (pages.some(([, p]) => !p)) {
      console.warn(`> skipped ${slug}: page or H1 not found in the build`);
      continue;
    }
    for (const [locale, data] of pages) {
      const htmlFile = path.join(OUTPUT_DIR, `.tmp-${slug}-${locale}.html`);
      fs.writeFileSync(htmlFile, template(data, locale, fontUrl, logoUrl));
      await page.goto(`file://${htmlFile}`);
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({
        path: path.join(OUTPUT_DIR, `${slug}-${locale}.jpg`),
        type: "jpeg",
        quality: 82,
      });
      fs.unlinkSync(htmlFile);
    }
    generated.push(slug);
    console.log(`> ${slug}`);
  }
  await browser.close();
  fs.writeFileSync(MANIFEST, `${JSON.stringify(generated.sort(), null, 2)}\n`);
  console.log(`> Generated ${generated.length} pages x ${LOCALES.length} locales`);
})();
