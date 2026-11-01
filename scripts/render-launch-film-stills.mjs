import http from 'http';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';

const PORT = 4567;
const CHROME_PATH = '/home/taneesh/.cache/puppeteer/chrome/linux-146.0.7680.31/chrome-linux64/chrome';
const OUTPUT_DIR = path.resolve('audit/film-stills');
const ARTIFACT_DIR = '/home/taneesh/.gemini/antigravity-ide/brain/81d93492-6401-432d-a0a8-fd9a2e0cc5bf';

// 1. Simple HTTP Server to serve assets & film
const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  let filePath;

  if (reqPath.startsWith('/services/')) {
    filePath = path.join(process.cwd(), 'public', reqPath);
  } else if (reqPath.startsWith('/film/')) {
    filePath = path.join(process.cwd(), reqPath);
  } else if (reqPath === '/' || reqPath === '/index.html') {
    filePath = path.join(process.cwd(), 'film/kaivex-launch-film.html');
  } else {
    filePath = path.join(process.cwd(), 'public', reqPath);
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const mimeTypes = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
      '.webp': 'image/webp',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.svg': 'image/svg+xml'
    };
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

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

  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`HTTP Server listening on port ${PORT}`);

  const chromeProc = spawn(CHROME_PATH, [
    '--headless',
    '--no-sandbox',
    '--disable-gpu',
    '--remote-debugging-port=9225',
    '--disable-dev-shm-usage',
    'about:blank'
  ]);

  await sleep(1500);

  let cdp;
  try {
    const listRes = await fetch('http://127.0.0.1:9225/json/list');
    const tabs = await listRes.json();
    const wsUrl = tabs[0].webSocketDebuggerUrl;

    cdp = new CDPClient(wsUrl);
    await cdp.connect();
    console.log('Connected to Chrome via CDP');

    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');
    await cdp.send('Console.enable');

    cdp.ws.addEventListener('message', (event) => {
      const msg = JSON.parse(event.data);
      if (msg.method === 'Runtime.consoleAPICalled') {
        console.log('[Browser Console]', ...msg.params.args.map(a => a.value || a.description));
      }
      if (msg.method === 'Runtime.exceptionThrown') {
        console.error('[Browser Exception]', msg.params.exceptionDetails);
      }
    });

    // Square 1440x1440 canvas
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 1440,
      deviceScaleFactor: 1,
      mobile: false
    });

    await cdp.send('Page.navigate', { url: `http://localhost:${PORT}/film/kaivex-launch-film.html?manual=1` });
    await sleep(1500);

    // Ensure __TEST_MODE__ is true
    const testModeRes = await cdp.send('Runtime.evaluate', {
      expression: 'window.__TEST_MODE__ = true; typeof window.seek;'
    });
    console.log('testMode evaluation:', testModeRes);

    const stills = [
      { name: 'still-1-open.png', t: 0, label: 'Still 1: Open (0ms) - Genesis & Prism' },
      { name: 'still-2-vision.png', t: 6500, label: 'Still 2: Glass/Vision (6500ms) - Liquid Glass & Computer Vision' },
      { name: 'still-3-drop.png', t: 11500, label: 'Still 3: Drop/Dashboard (11500ms) - SaaS Metrics Surge' },
      { name: 'still-4-finale.png', t: 26500, label: 'Still 4: Finale (26500ms) - Kinetic Return & Proof Points' }
    ];

    for (const still of stills) {
      console.log(`Rendering ${still.label}...`);
      const seekRes = await cdp.send('Runtime.evaluate', {
        expression: `(() => { try { window.seek(${still.t}); return "OK"; } catch(e) { return "ERROR: " + e.stack; } })()`
      });
      console.log(`seek(${still.t}) result:`, seekRes);
      await sleep(200);

      const shot = await cdp.send('Page.captureScreenshot', { format: 'png' });
      const outPath = path.join(OUTPUT_DIR, still.name);
      fs.writeFileSync(outPath, Buffer.from(shot.data, 'base64'));
      console.log(`Saved: ${outPath} (${(shot.data.length * 0.75 / 1024).toFixed(1)} KB)`);

      // Also copy to artifact directory
      const artPath = path.join(ARTIFACT_DIR, still.name);
      fs.copyFileSync(outPath, artPath);
    }

    console.log('All 4 stills successfully rendered and copied to artifacts!');

  } finally {
    if (cdp) cdp.close();
    chromeProc.kill();
    server.close();
  }
}

main().catch(err => {
  console.error('Render error:', err);
  process.exit(1);
});
