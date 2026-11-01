import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/home/taneesh/.cache/puppeteer/chrome/linux-146.0.7680.31/chrome-linux64/chrome';
const BASE_URL = 'http://localhost:3000';
const OUTPUT_DIR = 'audit/marquee-screenshots';
const ARTIFACT_DIR = '/home/taneesh/.gemini/antigravity-ide/brain/81d93492-6401-432d-a0a8-fd9a2e0cc5bf';

const VIEWPORTS = [
  { name: 'desktop-1440', width: 1440, height: 900, isMobile: false },
  { name: 'tablet-768', width: 768, height: 1024, isMobile: true },
  { name: 'mobile-390', width: 390, height: 844, isMobile: true }
];

function sleep(ms) {
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

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const chromeProc = spawn(CHROME_PATH, [
    '--headless',
    '--no-sandbox',
    '--disable-gpu',
    '--remote-debugging-port=9230',
    '--disable-dev-shm-usage',
    'about:blank'
  ]);

  await sleep(1500);

  let cdp;
  try {
    const listRes = await fetch('http://127.0.0.1:9230/json/list');
    const tabs = await listRes.json();
    const wsUrl = tabs[0].webSocketDebuggerUrl;

    cdp = new CDPClient(wsUrl);
    await cdp.connect();
    console.log('Connected to Chrome DevTools Protocol');

    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');

    for (const vp of VIEWPORTS) {
      console.log(`\nCapturing hero on ${vp.name} (${vp.width}x${vp.height})...`);

      await cdp.send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 1,
        mobile: vp.isMobile
      });

      await cdp.send('Page.navigate', { url: BASE_URL });
      await sleep(1000);

      // Skip intro animation
      await cdp.send('Runtime.evaluate', {
        expression: `
          sessionStorage.setItem('kaivex_intro_seen', 'true');
          window.location.reload();
        `
      });
      await sleep(1500);

      // Wait a moment for marquee wall columns to start scrolling
      await sleep(800);

      // Capture Hero screenshot
      const shot = await cdp.send('Page.captureScreenshot', { format: 'png' });
      const filename = `hero-${vp.name}.png`;
      const outPath = path.join(OUTPUT_DIR, filename);
      fs.writeFileSync(outPath, Buffer.from(shot.data, 'base64'));
      console.log(`Saved ${outPath}`);

      // Copy to artifact directory for presentation
      const artPath = path.join(ARTIFACT_DIR, filename);
      fs.copyFileSync(outPath, artPath);
    }

    // Capture hovered tile on desktop
    console.log('\nSimulating hover on a photo tile on desktop...');
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false
    });
    await cdp.send('Input.dispatchMouseEvent', {
      type: 'mouseMoved',
      x: 720,
      y: 450
    });
    await sleep(400);

    const hoverShot = await cdp.send('Page.captureScreenshot', { format: 'png' });
    const hoverPath = path.join(OUTPUT_DIR, 'hero-desktop-hover.png');
    fs.writeFileSync(hoverPath, Buffer.from(hoverShot.data, 'base64'));
    fs.copyFileSync(hoverPath, path.join(ARTIFACT_DIR, 'hero-desktop-hover.png'));
    console.log(`Saved ${hoverPath}`);

  } finally {
    if (cdp) cdp.close();
    chromeProc.kill();
  }
}

main().catch(err => {
  console.error('Error during capture:', err);
  process.exit(1);
});
