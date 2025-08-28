const fs = require('node:fs');
const path = require('node:path');
const puppeteer = require('puppeteer');
// load TypeScript module using ts-node, forcing commonjs for this script
require('ts-node').register({ transpileOnly: true, compilerOptions: { module: 'commonjs' } });
const projects = require(path.resolve(__dirname, '..', 'lib', 'projectsData.ts')).default;

(async () => {
  const outDir = path.resolve(process.cwd(), 'public', 'projects');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768, deviceScaleFactor: 2 });

  for (const p of projects) {
    if (!p.live) continue;
    const file = path.join(outDir, `${p.id}.png`);
    try {
      console.log(`▶ Capturing ${p.name} -> ${file}`);
      await page.goto(p.live, { waitUntil: 'networkidle2', timeout: 60000 });
      await page.waitForTimeout(1200);
      await page.screenshot({ path: file, fullPage: true });
    } catch (err) {
      console.warn(`⚠ Failed to capture ${p.name}:`, err && err.message ? err.message : String(err));
    }
  }

  await browser.close();
  console.log('✓ Done');
})().catch((e) => {
  console.error(e);
  process.exit(1);
});
