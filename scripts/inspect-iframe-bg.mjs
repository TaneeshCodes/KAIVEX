import { spawn } from 'child_process';

const CHROME_PATH = '/home/taneesh/.cache/puppeteer/chrome/linux-146.0.7680.31/chrome-linux64/chrome';

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
  close() { if (this.ws) this.ws.close(); }
}

async function run() {
  const chrome = spawn(CHROME_PATH, [
    '--headless=new',
    '--remote-debugging-port=9224',
    '--no-sandbox',
    '--disable-gpu',
    'about:blank'
  ]);
  await new Promise(r => setTimeout(r, 1000));
  const ver = await (await fetch('http://localhost:9224/json/version')).json();
  const cdp = new CDPClient(ver.webSocketDebuggerUrl);
  await cdp.connect();
  const { targetId } = await cdp.send('Target.createTarget', { url: 'http://localhost:3000' });
  const targets = await (await fetch('http://localhost:9224/json')).json();
  const pageTarget = targets.find(t => t.id === targetId);
  const pageCdp = new CDPClient(pageTarget.webSocketDebuggerUrl);
  await pageCdp.connect();

  await pageCdp.send('Page.enable');
  await new Promise(r => setTimeout(r, 2000));

  // Get frame tree
  const frameTree = await pageCdp.send('Page.getFrameTree');
  console.log('Frames:', JSON.stringify(frameTree, null, 2));

  // Also query iframe elements
  const res = await pageCdp.send('Runtime.evaluate', {
    expression: `(function() {
      const iframe = document.querySelector('.hero-shader-frame iframe');
      if (!iframe) return 'no iframe';
      const doc = iframe.contentDocument;
      if (!doc) return 'no contentDocument';
      return {
        htmlBg: window.getComputedStyle(doc.documentElement).backgroundColor,
        bodyBg: window.getComputedStyle(doc.body).backgroundColor,
        stageBg: doc.querySelector('#stage') ? window.getComputedStyle(doc.querySelector('#stage')).backgroundColor : 'no stage',
        compBg: doc.querySelector('#comp') ? window.getComputedStyle(doc.querySelector('#comp')).backgroundColor : 'no comp'
      };
    })()`,
    returnByValue: true
  });
  console.log('Iframe internal computed bg:', res.result.value);

  pageCdp.close();
  cdp.close();
  chrome.kill();
}

run().catch(console.error);
