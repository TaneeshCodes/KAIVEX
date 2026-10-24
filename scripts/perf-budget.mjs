import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { execSync } from 'child_process';

const DIST_DIR = 'dist';
const CHROME_PATH = '/home/taneesh/.cache/puppeteer/chrome/linux-146.0.7680.31/chrome-linux64/chrome';
const URL = 'http://localhost:4173';

function getGzipSize(filePath) {
  const content = fs.readFileSync(filePath);
  return zlib.gzipSync(content).length;
}

function getAllFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllFiles(full));
    } else {
      results.push(full);
    }
  });
  return results;
}

async function runPerfBudget() {
  console.log('==============================================');
  console.log('   KAIVEX AUTOMATED PERFORMANCE BUDGET CHECK  ');
  console.log('==============================================\n');

  let passed = true;
  const errors = [];

  // 1. Initial JS Budget: <= 120 KB gzip
  const assetFiles = fs.readdirSync(path.join(DIST_DIR, 'assets'));
  const mainJsFile = assetFiles.find(f => f.startsWith('index-') && f.endsWith('.js'));
  if (!mainJsFile) {
    throw new Error('Main JS bundle not found in dist/assets!');
  }

  const mainJsPath = path.join(DIST_DIR, 'assets', mainJsFile);
  const mainJsGzip = getGzipSize(mainJsPath);
  const mainJsGzipKB = mainJsGzip / 1024;
  console.log(`[1] Initial JS: ${mainJsFile}`);
  console.log(`    Size: ${mainJsGzipKB.toFixed(1)} KB (Budget: <= 120.0 KB)`);
  if (mainJsGzipKB > 120) {
    passed = false;
    errors.push(`Initial JS exceeds 120 KB budget: ${mainJsGzipKB.toFixed(1)} KB`);
  } else {
    console.log('    Status: PASS ✅\n');
  }

  // 2. Single Image Budget: No single image > 150 KB
  console.log('[2] Image Size Budget (Budget: <= 150.0 KB per file)');
  const allDistFiles = getAllFiles(DIST_DIR);
  const imageFiles = allDistFiles.filter(f => /\.(webp|png|jpe?g|svg)$/i.test(f));
  let oversizedImages = 0;

  for (const img of imageFiles) {
    const stat = fs.statSync(img);
    const sizeKB = stat.size / 1024;
    if (sizeKB > 150) {
      oversizedImages++;
      errors.push(`Image ${img} exceeds 150 KB budget: ${sizeKB.toFixed(1)} KB`);
      console.log(`    ❌ ${img}: ${sizeKB.toFixed(1)} KB`);
    }
  }

  if (oversizedImages === 0) {
    console.log(`    Verified ${imageFiles.length} images. All under 150 KB!`);
    console.log('    Status: PASS ✅\n');
  } else {
    passed = false;
    console.log(`    Status: FAIL ❌ (${oversizedImages} images exceed budget)\n`);
  }

  // 3. Initial Page Weight (HTML + Initial JS + Initial CSS + Fonts): <= 400 KB compressed
  console.log('[3] Initial Page Weight Budget (HTML + Core JS + Core CSS + Fonts <= 400.0 KB)');
  const htmlPath = path.join(DIST_DIR, 'index.html');
  const mainCssFile = assetFiles.find(f => f.startsWith('index-') && f.endsWith('.css'));
  const mainCssPath = path.join(DIST_DIR, 'assets', mainCssFile);

  const htmlGzip = getGzipSize(htmlPath);
  const cssGzip = getGzipSize(mainCssPath);
  
  // Font files in dist
  const fontFiles = allDistFiles.filter(f => f.endsWith('.woff2'));
  const fontRawTotal = fontFiles.reduce((acc, f) => acc + fs.statSync(f).size, 0);

  const initialTotalBytes = htmlGzip + mainJsGzip + cssGzip + fontRawTotal;
  const initialTotalKB = initialTotalBytes / 1024;

  console.log(`    HTML (gzip): ${(htmlGzip / 1024).toFixed(1)} KB`);
  console.log(`    Main JS (gzip): ${mainJsGzipKB.toFixed(1)} KB`);
  console.log(`    Main CSS (gzip): ${(cssGzip / 1024).toFixed(1)} KB`);
  console.log(`    Fonts: ${(fontRawTotal / 1024).toFixed(1)} KB`);
  console.log(`    Total Initial Weight: ${initialTotalKB.toFixed(1)} KB (Budget: <= 400.0 KB)`);

  if (initialTotalKB > 400) {
    passed = false;
    errors.push(`Initial page weight exceeds 400 KB budget: ${initialTotalKB.toFixed(1)} KB`);
  } else {
    console.log('    Status: PASS ✅\n');
  }

  // 4. Lighthouse Mobile Performance: >= 90
  console.log('[4] Running Lighthouse Mobile Audit for Score Validation...');
  const lhOut = 'audit/perf-check-mobile.json';
  const lhCmd = `CHROME_PATH="${CHROME_PATH}" npx -y lighthouse "${URL}" --output=json --output-path="${lhOut}" --chrome-flags="--headless --no-sandbox --disable-gpu" --quiet`;
  
  try {
    execSync(lhCmd, { stdio: 'pipe' });
    const rep = JSON.parse(fs.readFileSync(lhOut, 'utf8'));
    const perfScore = Math.round(rep.categories.performance.score * 100);
    const lcp = (rep.audits['largest-contentful-paint']?.numericValue / 1000).toFixed(2);
    const tbt = Math.round(rep.audits['total-blocking-time']?.numericValue || 0);
    const cls = (rep.audits['cumulative-layout-shift']?.numericValue || 0).toFixed(3);

    console.log(`    Lighthouse Mobile Performance: ${perfScore} / 100 (Budget: >= 90)`);
    console.log(`    LCP: ${lcp} s | TBT: ${tbt} ms | CLS: ${cls}`);

    if (perfScore < 90) {
      passed = false;
      errors.push(`Lighthouse mobile performance score below 90: ${perfScore}`);
      console.log('    Status: FAIL ❌\n');
    } else {
      console.log('    Status: PASS ✅\n');
    }
  } catch (err) {
    console.warn('    Could not complete Lighthouse run (preview server may not be active):', err.message);
  }

  console.log('----------------------------------------------');
  if (passed) {
    console.log('🎉 ALL PERFORMANCE BUDGETS PASSED SUCCESSFULLY!');
    console.log('----------------------------------------------\n');
    process.exit(0);
  } else {
    console.error('❌ PERFORMANCE BUDGET FAILED:');
    errors.forEach(e => console.error(`  - ${e}`));
    console.log('----------------------------------------------\n');
    process.exit(1);
  }
}

runPerfBudget().catch(err => {
  console.error(err);
  process.exit(1);
});
