import { createRequire } from 'module';
import { readdir, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { existsSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const PUPPETEER_PATH = 'C:/Users/ajsta/AppData/Local/Temp/node_modules/puppeteer';
const CHROME_CACHE  = 'C:/Users/ajsta/.cache/puppeteer/chrome';

async function findChrome() {
  try {
    const versions = await readdir(CHROME_CACHE);
    for (const ver of [...versions].reverse()) {
      const exe = join(CHROME_CACHE, ver, 'chrome-win64', 'chrome.exe');
      if (existsSync(exe)) return exe;
    }
  } catch {}
  return null;
}

const url   = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';
const screenshotDir = join(__dirname, 'temporary screenshots');

async function nextN() {
  await mkdir(screenshotDir, { recursive: true });
  const files = await readdir(screenshotDir);
  const nums  = files.map(f => f.match(/^screenshot-(\d+)/)).filter(Boolean).map(m => +m[1]);
  return nums.length ? Math.max(...nums) + 1 : 1;
}

const executablePath = await findChrome();
if (!executablePath) { console.error('Chrome not found in puppeteer cache'); process.exit(1); }

const puppeteer = require(PUPPETEER_PATH);
const browser   = await puppeteer.launch({ executablePath, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
const page      = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

// Scroll to trigger IntersectionObserver animations, then reset
await page.evaluate(async () => {
  const sleep = ms => new Promise(r => setTimeout(r, ms));
  // Trigger all fade-up elements visible
  document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
  // Scroll to bottom slowly to load images
  const totalHeight = document.body.scrollHeight;
  for (let i = 0; i < totalHeight; i += 600) {
    window.scrollTo(0, i);
    await sleep(80);
  }
  window.scrollTo(0, 0);
  await sleep(500);
});
await new Promise(r => setTimeout(r, 800));

const n        = await nextN();
const filename = label ? `screenshot-${n}-${label}.png` : `screenshot-${n}.png`;
const outPath  = join(screenshotDir, filename);

await page.screenshot({ path: outPath, fullPage: true });
await browser.close();
console.log(`Saved: ${outPath}`);
