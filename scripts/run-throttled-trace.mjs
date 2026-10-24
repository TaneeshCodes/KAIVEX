import { spawn } from 'child_process';
import fs from 'fs';

const CHROME_PATH = '/home/taneesh/.cache/puppeteer/chrome/linux-146.0.7680.31/chrome-linux64/chrome';
const URL = 'http://localhost:4173';

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
  const chromeProc = spawn(CHROME_PATH, [
    '--headless',
    '--no-sandbox',
    '--disable-gpu',
    '--remote-debugging-port=9223',
    '--disable-dev-shm-usage',
    'about:blank'
  ]);

  await sleep(1500);

  try {
    const listRes = await fetch('http://127.0.0.1:9223/json/list');
    const tabs = await listRes.json();
    const wsUrl = tabs[0].webSocketDebuggerUrl;

    const cdp = new CDPClient(wsUrl);
    await cdp.connect();

    await cdp.send('Page.enable');
    await cdp.send('Network.enable');
    await cdp.send('Performance.enable');

    // 1. Throttling setup: CPU 4x slowdown + Slow 4G
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
    // Slow 4G: 150ms RTT, 1.6 Mbps download (200 * 1024 B/s), 750 Kbps upload
    await cdp.send('Network.emulateNetworkConditions', {
      offline: false,
      latency: 150,
      downloadThroughput: 200 * 1024,
      uploadThroughput: 90 * 1024
    });

    // Mobile viewport
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });

    console.log('Navigating under 4x CPU slowdown + Slow 4G...');
    const startTime = Date.now();
    await cdp.send('Page.navigate', { url: URL });

    // Wait until load event or 15s
    await sleep(8000);

    // Evaluate Web Vitals from page
    const perfData = await cdp.send('Runtime.evaluate', {
      returnByValue: true,
      expression: `
        (() => {
          const paint = performance.getEntriesByType('paint');
          const fcpEntry = paint.find(p => p.name === 'first-contentful-paint');
          const nav = performance.getEntriesByType('navigation')[0];
          return {
            fcp: fcpEntry ? fcpEntry.startTime : 0,
            domContentLoaded: nav ? nav.domContentLoadedEventEnd : 0,
            loadEvent: nav ? nav.loadEventEnd : 0
          };
        })()
      `
    });

    console.log('Throttled Navigation Timings:', perfData.result.value);

    // 2. Measure Hero Carousel FPS under 4x CPU slowdown for 5 seconds
    const fpsData = await cdp.send('Runtime.evaluate', {
      returnByValue: true,
      awaitPromise: true,
      expression: `
        new Promise(resolve => {
          let frames = 0;
          let longFrames = 0;
          let last = performance.now();
          const start = performance.now();
          function loop() {
            const now = performance.now();
            const delta = now - last;
            last = now;
            frames++;
            if (delta > 33.3) longFrames++; // slower than 30fps
            if (now - start < 5000) {
              requestAnimationFrame(loop);
            } else {
              const totalTime = now - start;
              const avgFps = Math.round((frames / totalTime) * 1000);
              resolve({ frames, longFrames, avgFps, totalTime });
            }
          }
          requestAnimationFrame(loop);
        })
      `
    });

    console.log('Hero Carousel 4x Throttled FPS:', fpsData.result.value);

    // 3. Scroll through the whole page and measure scroll smoothness
    const scrollData = await cdp.send('Runtime.evaluate', {
      returnByValue: true,
      awaitPromise: true,
      expression: `
        new Promise(resolve => {
          let scrollFrames = 0;
          let droppedScrollFrames = 0;
          let last = performance.now();
          const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
          let current = 0;
          const step = maxScroll / 120; // 120 steps

          function scrollStep() {
            const now = performance.now();
            const delta = now - last;
            last = now;
            scrollFrames++;
            if (delta > 25) droppedScrollFrames++; // over 40fps

            current += step;
            window.scrollTo(0, current);

            if (current < maxScroll) {
              requestAnimationFrame(scrollStep);
            } else {
              resolve({ scrollFrames, droppedScrollFrames, avgScrollFps: Math.round(scrollFrames / 2) });
            }
          }
          requestAnimationFrame(scrollStep);
        })
      `
    });

    console.log('Scroll performance:', scrollData.result.value);

    fs.writeFileSync('audit/throttled-summary.json', JSON.stringify({
      navigation: perfData.result.value,
      heroFps: fpsData.result.value,
      scrollFps: scrollData.result.value
    }, null, 2));

    cdp.close();
  } finally {
    chromeProc.kill();
  }
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
