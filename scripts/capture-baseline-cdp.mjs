import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/home/taneesh/.cache/puppeteer/chrome/linux-146.0.7680.31/chrome-linux64/chrome';
const BASE_URL = 'http://localhost:4173';
const OUTPUT_DIR = 'audit/baseline-screenshots';

const VIEWPORTS = [
  { name: 'desktop-1440', width: 1440, height: 900, isMobile: false },
  { name: 'laptop-1024', width: 1024, height: 768, isMobile: false },
  { name: 'tablet-768', width: 768, height: 1024, isMobile: true },
  { name: 'mobile-390', width: 390, height: 844, isMobile: true }
];

async function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.id = 1;
    this.callbacks = new Map();
  }

  async connect() {
    this.ws = new WebSocket(this.wsUrl);
    await new Promise((resolve, reject) => {
      this.ws.onopen = resolve;
      this.ws.onerror = reject;
    });

    this.ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && this.callbacks.has(msg.id)) {
        const { resolve, reject } = this.callbacks.get(msg.id);
        this.callbacks.delete(msg.id);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };
  }

  send(method, params = {}) {
    return new Promise((resolve, reject) => {
      const id = this.id++;
      this.callbacks.set(id, { resolve, reject });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  close() {
    if (this.ws) this.ws.close();
  }
}

async function run() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const chromeProc = spawn(CHROME_PATH, [
    '--headless',
    '--no-sandbox',
    '--disable-gpu',
    '--remote-debugging-port=9222',
    '--disable-dev-shm-usage',
    'about:blank'
  ]);

  await sleep(1500);

  try {
    const listRes = await fetch('http://127.0.0.1:9222/json/list');
    const tabs = await listRes.json();
    const wsUrl = tabs[0].webSocketDebuggerUrl;

    const cdp = new CDPClient(wsUrl);
    await cdp.connect();
    console.log('Connected to Chrome DevTools Protocol');

    await cdp.send('Page.enable');
    await cdp.send('DOM.enable');
    await cdp.send('Runtime.enable');

    for (const vp of VIEWPORTS) {
      console.log(`\nCapturing viewport: ${vp.name} (${vp.width}x${vp.height})`);

      await cdp.send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 1,
        mobile: vp.isMobile
      });

      await cdp.send('Page.navigate', { url: BASE_URL });
      await sleep(1000);

      // Skip intro animation by setting session storage and triggering entrance immediately
      await cdp.send('Runtime.evaluate', {
        expression: `
          sessionStorage.setItem('kaivex_intro_seen', 'true');
          window.location.reload();
        `
      });
      await sleep(1500);

      // 1. Hero after intro
      const heroShot = await cdp.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(OUTPUT_DIR, `${vp.name}-01-hero.png`), Buffer.from(heroShot.data, 'base64'));
      console.log(`Saved ${vp.name}-01-hero.png`);

      // 2. Services section
      await cdp.send('Runtime.evaluate', {
        expression: `document.getElementById('services')?.scrollIntoView({ behavior: 'instant' });`
      });
      await sleep(600);
      const servicesShot = await cdp.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(OUTPUT_DIR, `${vp.name}-02-services.png`), Buffer.from(servicesShot.data, 'base64'));
      console.log(`Saved ${vp.name}-02-services.png`);

      // 3. Work section
      await cdp.send('Runtime.evaluate', {
        expression: `document.getElementById('work')?.scrollIntoView({ behavior: 'instant' });`
      });
      await sleep(600);
      const workShot = await cdp.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(OUTPUT_DIR, `${vp.name}-03-work.png`), Buffer.from(workShot.data, 'base64'));
      console.log(`Saved ${vp.name}-03-work.png`);

      // 4. Products section
      await cdp.send('Runtime.evaluate', {
        expression: `document.getElementById('products')?.scrollIntoView({ behavior: 'instant' });`
      });
      await sleep(600);
      const productsShot = await cdp.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(OUTPUT_DIR, `${vp.name}-04-products.png`), Buffer.from(productsShot.data, 'base64'));
      console.log(`Saved ${vp.name}-04-products.png`);

      // 5. About section
      await cdp.send('Runtime.evaluate', {
        expression: `document.getElementById('about')?.scrollIntoView({ behavior: 'instant' });`
      });
      await sleep(600);
      const aboutShot = await cdp.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(OUTPUT_DIR, `${vp.name}-05-about.png`), Buffer.from(aboutShot.data, 'base64'));
      console.log(`Saved ${vp.name}-05-about.png`);

      // 6. Contact section
      await cdp.send('Runtime.evaluate', {
        expression: `document.getElementById('contact')?.scrollIntoView({ behavior: 'instant' });`
      });
      await sleep(600);
      const contactShot = await cdp.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(OUTPUT_DIR, `${vp.name}-06-contact.png`), Buffer.from(contactShot.data, 'base64'));
      console.log(`Saved ${vp.name}-06-contact.png`);

      // 7. Modal open
      await cdp.send('Runtime.evaluate', {
        expression: `
          // Find any "Start a project" button and click it
          const btns = Array.from(document.querySelectorAll('button, a, div[role="button"]'));
          const cta = btns.find(b => b.textContent.includes('Start a project') || b.textContent.includes('Talk to us'));
          if (cta) cta.click();
        `
      });
      await sleep(800);
      const modalShot = await cdp.send('Page.captureScreenshot', { format: 'png' });
      fs.writeFileSync(path.join(OUTPUT_DIR, `${vp.name}-07-modal-open.png`), Buffer.from(modalShot.data, 'base64'));
      console.log(`Saved ${vp.name}-07-modal-open.png`);
    }

    cdp.close();
    console.log('\nAll baseline visual screenshots captured successfully!');
  } finally {
    chromeProc.kill();
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
