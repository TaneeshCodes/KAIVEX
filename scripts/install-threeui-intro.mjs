import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

async function main() {
  console.log('Fetching https://threeui.com/source-code/threeui-intro.json ...');
  let data;
  try {
    const res = await fetch('https://threeui.com/source-code/threeui-intro.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    data = await res.json();
  } catch (err) {
    console.log('Fetch failed, falling back to cached content.md:', err.message);
    const contentPath = '/home/taneesh/.gemini/antigravity-ide/brain/81d93492-6401-432d-a0a8-fd9a2e0cc5bf/.system_generated/steps/2004/content.md';
    const text = fs.readFileSync(contentPath, 'utf8');
    const idx = text.indexOf('{');
    data = JSON.parse(text.slice(idx));
  }

  console.log('Loaded bundle ID:', data.id);
  console.log('Files count:', data.files.length);

  for (const file of data.files) {
    const dest = path.resolve(process.cwd(), file.path);
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Compute SHA-256 to verify
    const actualHash = crypto.createHash('sha256').update(file.code, 'utf8').digest('hex');
    console.log(`Writing ${file.path}...`);
    console.log(`  Expected SHA256: ${file.sha256}`);
    console.log(`  Actual SHA256:   ${actualHash}`);

    fs.writeFileSync(dest, file.code, 'utf8');
    console.log(`  Wrote ${file.code.length} chars to ${dest}`);
  }

  console.log('\nAll registered files installed successfully!');
}

main().catch(err => {
  console.error('Installation error:', err);
  process.exit(1);
});
