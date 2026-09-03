// Playwright screenshot runner for Nossa Feira guide images.
//
// Reads capture-map.json → { filename: {url, action, selector?, viewport?, wait?} }
// For each entry, navigates and saves the screenshot to ../.gitbook/assets/<filename>.
//
// Usage:
//   BASE_URL=https://nossafeira.com.br \
//   ADMIN_EMAIL=admin@nossafeira.com.br \
//   ADMIN_PASSWORD=... \
//   node capture.js [--only <filename>] [--section <section>]

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE_URL = process.env.BASE_URL || 'https://nossafeira.com.br';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const ASSETS_DIR = path.resolve(__dirname, '../../.gitbook/assets');
const MAP_PATH = path.resolve(__dirname, 'capture-map.json');

const args = process.argv.slice(2);
const only = args.includes('--only') ? args[args.indexOf('--only') + 1] : null;
const section = args.includes('--section') ? args[args.indexOf('--section') + 1] : null;

async function login(page) {
  if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
    throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD required');
  }
  await page.goto(`${BASE_URL}/login`, { waitUntil: 'networkidle' });
  await page.fill('input[type=email], #spree_user_email', ADMIN_EMAIL);
  await page.fill('input[type=password], #spree_user_password', ADMIN_PASSWORD);
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle' }),
    page.click('input[type=submit], button[type=submit]'),
  ]);
}

async function capture(page, filename, spec) {
  const url = spec.url.startsWith('http') ? spec.url : `${BASE_URL}${spec.url}`;
  await page.goto(url, { waitUntil: spec.waitUntil || 'networkidle' });
  if (spec.wait) await page.waitForTimeout(spec.wait);
  if (spec.viewport) {
    await page.setViewportSize(spec.viewport);
  }
  const outPath = path.join(ASSETS_DIR, filename);
  const opts = { path: outPath };
  if (spec.action === 'selector' && spec.selector) {
    const el = await page.$(spec.selector);
    if (!el) throw new Error(`Selector not found: ${spec.selector}`);
    await el.screenshot(opts);
  } else if (spec.action === 'full') {
    opts.fullPage = true;
    await page.screenshot(opts);
  } else {
    await page.screenshot(opts);
  }
  console.log(`✓ ${filename}`);
}

async function main() {
  const map = JSON.parse(fs.readFileSync(MAP_PATH, 'utf-8'));
  const entries = Object.entries(map).filter(([f, spec]) => {
    if (only && f !== only) return false;
    if (section && spec.section !== section) return false;
    return true;
  });
  console.log(`Total to capture: ${entries.length}`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    locale: 'pt-BR',
  });
  const page = await context.newPage();

  try {
    if (entries.some(([, s]) => s.auth !== false)) {
      await login(page);
      console.log('Logged in');
    }
    const results = { ok: [], fail: [] };
    for (const [filename, spec] of entries) {
      try {
        await capture(page, filename, spec);
        results.ok.push(filename);
      } catch (e) {
        console.error(`✗ ${filename}: ${e.message}`);
        results.fail.push({ filename, error: e.message });
      }
    }
    console.log(`\nDone. OK=${results.ok.length} FAIL=${results.fail.length}`);
    fs.writeFileSync(
      path.join(__dirname, 'last-run.json'),
      JSON.stringify(results, null, 2),
    );
  } finally {
    await browser.close();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
