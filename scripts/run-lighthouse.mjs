import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/home/taneesh/.cache/puppeteer/chrome/linux-146.0.7680.31/chrome-linux64/chrome';
const URL = 'http://localhost:4173';
const OUTPUT_DIR = 'audit/baseline-lh';

if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function runLH(mode, runIndex) {
  const outFile = path.join(OUTPUT_DIR, `${mode}-run${runIndex}.json`);
  console.log(`Running Lighthouse (${mode}, run ${runIndex})...`);
  const presetFlag = mode === 'desktop' ? '--preset=desktop' : '';
  const cmd = `CHROME_PATH="${CHROME_PATH}" npx -y lighthouse "${URL}" --output=json --output-path="${outFile}" ${presetFlag} --chrome-flags="--headless --no-sandbox --disable-gpu" --quiet`;
  execSync(cmd, { stdio: 'inherit' });
  return JSON.parse(fs.readFileSync(outFile, 'utf8'));
}

function extractMetrics(report) {
  const aud = report.audits;
  const cats = report.categories;

  return {
    performanceScore: Math.round(cats.performance.score * 100),
    accessibilityScore: Math.round(cats.accessibility.score * 100),
    bestPracticesScore: Math.round(cats['best-practices'].score * 100),
    seoScore: Math.round(cats.seo.score * 100),
    fcp: aud['first-contentful-paint']?.numericValue || 0,
    lcp: aud['largest-contentful-paint']?.numericValue || 0,
    tbt: aud['total-blocking-time']?.numericValue || 0,
    cls: aud['cumulative-layout-shift']?.numericValue || 0,
    speedIndex: aud['speed-index']?.numericValue || 0,
    totalBytes: aud['total-byte-weight']?.numericValue || 0,
    networkRequests: aud['network-requests']?.details?.items?.length || 0,
    jsBytes: aud['network-requests']?.details?.items
      ?.filter(i => i.resourceType === 'Script')
      ?.reduce((acc, i) => acc + (i.transferSize || 0), 0) || 0,
    cssBytes: aud['network-requests']?.details?.items
      ?.filter(i => i.resourceType === 'Stylesheet')
      ?.reduce((acc, i) => acc + (i.transferSize || 0), 0) || 0,
    imageBytes: aud['network-requests']?.details?.items
      ?.filter(i => i.resourceType === 'Image')
      ?.reduce((acc, i) => acc + (i.transferSize || 0), 0) || 0,
    fontBytes: aud['network-requests']?.details?.items
      ?.filter(i => i.resourceType === 'Font')
      ?.reduce((acc, i) => acc + (i.transferSize || 0), 0) || 0,
    mediaBytes: aud['network-requests']?.details?.items
      ?.filter(i => i.resourceType === 'Media')
      ?.reduce((acc, i) => acc + (i.transferSize || 0), 0) || 0,
  };
}

function median(arr) {
  const sorted = [...arr].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 !== 0 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function computeMedianResults(results) {
  const keys = Object.keys(results[0]);
  const out = {};
  for (const k of keys) {
    const vals = results.map(r => r[k]);
    out[k] = median(vals);
  }
  return out;
}

async function main() {
  const mobileResults = [];
  for (let i = 1; i <= 3; i++) {
    const rep = runLH('mobile', i);
    mobileResults.push(extractMetrics(rep));
  }
  const mobileMedian = computeMedianResults(mobileResults);
  console.log('Mobile Median:', mobileMedian);

  const desktopResults = [];
  for (let i = 1; i <= 3; i++) {
    const rep = runLH('desktop', i);
    desktopResults.push(extractMetrics(rep));
  }
  const desktopMedian = computeMedianResults(desktopResults);
  console.log('Desktop Median:', desktopMedian);

  fs.writeFileSync('audit/baseline-summary.json', JSON.stringify({
    mobile: { runs: mobileResults, median: mobileMedian },
    desktop: { runs: desktopResults, median: desktopMedian }
  }, null, 2));
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
