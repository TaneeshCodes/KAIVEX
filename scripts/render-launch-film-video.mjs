import http from 'http';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';

const PORT = 4569;
const CHROME_PATH = '/home/taneesh/.cache/puppeteer/chrome/linux-146.0.7680.31/chrome-linux64/chrome';
const FFMPEG_PATH = '/home/taneesh/.local/bin/ffmpeg';
const OUTPUT_MP4 = path.resolve('film/kaivex-launch-film.mp4');
const ARTIFACT_DIR = '/home/taneesh/.gemini/antigravity-ide/brain/81d93492-6401-432d-a0a8-fd9a2e0cc5bf';

const FPS = 30;
const DURATION_SEC = 27.0; // 54 beats @ 120 BPM = 27.0s
const TOTAL_FRAMES = Math.round(FPS * DURATION_SEC); // 810 frames
const FRAME_STEP_MS = 1000 / FPS; // 33.333ms

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
  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`HTTP Server listening on port ${PORT}`);

  const chromeProc = spawn(CHROME_PATH, [
    '--headless',
    '--no-sandbox',
    '--disable-gpu',
    '--remote-debugging-port=9228',
    '--disable-dev-shm-usage',
    'about:blank'
  ]);

  await sleep(1500);

  let cdp;
  try {
    const listRes = await fetch('http://127.0.0.1:9228/json/list');
    const tabs = await listRes.json();
    const wsUrl = tabs[0].webSocketDebuggerUrl;

    cdp = new CDPClient(wsUrl);
    await cdp.connect();
    console.log('Connected to Chrome via CDP');

    await cdp.send('Page.enable');
    await cdp.send('Runtime.enable');

    // 1440x1440 Square Stage
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 1440,
      deviceScaleFactor: 1,
      mobile: false
    });

    await cdp.send('Page.navigate', { url: `http://localhost:${PORT}/film/kaivex-launch-film.html?manual=1` });
    await sleep(1500);

    await cdp.send('Runtime.evaluate', {
      expression: 'window.__TEST_MODE__ = true;'
    });

    console.log(`Starting FFmpeg video encoder: ${OUTPUT_MP4}...`);
    const ffmpegProc = spawn(FFMPEG_PATH, [
      '-y',
      '-f', 'image2pipe',
      '-vcodec', 'png',
      '-r', String(FPS),
      '-i', '-',
      '-c:v', 'libx264',
      '-pix_fmt', 'yuv420p',
      '-preset', 'fast',
      '-crf', '18',
      '-movflags', '+faststart',
      OUTPUT_MP4
    ], { stdio: ['pipe', 'inherit', 'inherit'] });

    ffmpegProc.on('error', (err) => console.error('FFmpeg process error:', err));

    const startTime = Date.now();
    console.log(`Rendering ${TOTAL_FRAMES} frames at ${FPS} fps (27.0s total)...`);

    for (let frame = 0; frame < TOTAL_FRAMES; frame++) {
      const t = frame * FRAME_STEP_MS;
      await cdp.send('Runtime.evaluate', {
        expression: `window.seek(${t.toFixed(2)});`
      });

      const shot = await cdp.send('Page.captureScreenshot', { format: 'png' });
      const imgBuffer = Buffer.from(shot.data, 'base64');

      const canWrite = ffmpegProc.stdin.write(imgBuffer);
      if (!canWrite) {
        await new Promise(r => ffmpegProc.stdin.once('drain', r));
      }

      if (frame % 60 === 0 || frame === TOTAL_FRAMES - 1) {
        const elapsedSec = ((Date.now() - startTime) / 1000).toFixed(1);
        const pct = ((frame / TOTAL_FRAMES) * 100).toFixed(1);
        const fpsRate = (frame / (Date.now() - startTime) * 1000).toFixed(1);
        console.log(`Frame ${frame}/${TOTAL_FRAMES} (${pct}%) — t=${(t/1000).toFixed(2)}s — ${fpsRate} fps — ${elapsedSec}s elapsed`);
      }
    }

    console.log('All frames captured! Finalizing FFmpeg encoding...');
    ffmpegProc.stdin.end();

    await new Promise((resolve, reject) => {
      ffmpegProc.on('close', (code) => {
        if (code === 0) resolve();
        else reject(new Error(`FFmpeg exited with code ${code}`));
      });
    });

    const stat = fs.statSync(OUTPUT_MP4);
    console.log(`Video rendered successfully: ${OUTPUT_MP4} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);

    // Copy to artifact directory
    const artifactMp4 = path.join(ARTIFACT_DIR, 'kaivex-launch-film.mp4');
    fs.copyFileSync(OUTPUT_MP4, artifactMp4);
    console.log(`Copied video to artifact directory: ${artifactMp4}`);

  } finally {
    if (cdp) cdp.close();
    chromeProc.kill();
    server.close();
  }
}

main().catch(err => {
  console.error('Video render failed:', err);
  process.exit(1);
});
