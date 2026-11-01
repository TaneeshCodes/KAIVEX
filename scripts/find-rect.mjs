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
    '--remote-debugging-port=9226',
    '--no-sandbox',
    '--disable-gpu',
    'about:blank'
  ]);
  await new Promise(r => setTimeout(r, 1000));
  const ver = await (await fetch('http://localhost:9226/json/version')).json();
  const cdp = new CDPClient(ver.webSocketDebuggerUrl);
  await cdp.connect();
  const { targetId } = await cdp.send('Target.createTarget', { url: 'http://localhost:3000' });
  const targets = await (await fetch('http://localhost:9226/json')).json();
  const pageTarget = targets.find(t => t.id === targetId);
  const pageCdp = new CDPClient(pageTarget.webSocketDebuggerUrl);
  await pageCdp.connect();

  await pageCdp.send('Page.enable');
  await new Promise(r => setTimeout(r, 2000));

  await pageCdp.send('Runtime.evaluate', {
    expression: `
      sessionStorage.setItem('kaivex_intro_seen', 'true');
      window.location.reload();
    `
  });
  await new Promise(r => setTimeout(r, 2000));

  const res = await pageCdp.send('Runtime.evaluate', {
    expression: `(function() {
      const sf = document.querySelector('.hero-shader-frame');
      const iframe = sf ? sf.querySelector('iframe') : null;
      let iframeData = null;
      if (iframe && iframe.contentDocument) {
        const tx = iframe.contentDocument.querySelector('.tx');
        const stage = iframe.contentDocument.querySelector('#stage');
        const body = iframe.contentDocument.body;
        iframeData = {
          txText: tx ? tx.innerText : 'no tx',
          txColor: tx ? window.getComputedStyle(tx).color : null,
          txBg: tx ? window.getComputedStyle(tx).backgroundColor : null,
          stageBg: stage ? window.getComputedStyle(stage).backgroundColor : null,
          bodyBg: body ? window.getComputedStyle(body).backgroundColor : null,
          docBg: window.getComputedStyle(iframe.contentDocument.documentElement).backgroundColor
        };
      }
      return {
        sfRect: sf ? sf.getBoundingClientRect() : null,
        sfBg: sf ? window.getComputedStyle(sf).backgroundColor : null,
        iframeRect: iframe ? iframe.getBoundingClientRect() : null,
        iframeBg: iframe ? window.getComputedStyle(iframe).backgroundColor : null,
        iframeData
      };
    })()`,
    returnByValue: true
  });
  console.log('Result:', JSON.stringify(res.result.value, null, 2));

  pageCdp.close();
  cdp.close();
  chrome.kill();
}

run().catch(console.error);
