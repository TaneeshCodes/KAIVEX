import fs from 'fs';
import path from 'path';

const contentPath = '/home/taneesh/.gemini/antigravity-ide/brain/81d93492-6401-432d-a0a8-fd9a2e0cc5bf/.system_generated/steps/2004/content.md';
const raw = fs.readFileSync(contentPath, 'utf8');

// Find JSON start
const startIdx = raw.indexOf('{\n  "schemaVersion"');
if (startIdx === -1) {
  console.error('Could not find JSON start');
  process.exit(1);
}

const jsonStr = raw.slice(startIdx);
const bundle = JSON.parse(jsonStr);

console.log('Bundle ID:', bundle.id);
console.log('Files count:', bundle.files.length);

for (const f of bundle.files) {
  console.log(`- ${f.path} (${f.bytes} bytes, sha: ${f.sha256})`);
}

// Check exports or usage of TextAnimationCollection
const tsxFile = bundle.files.find(f => f.path.includes('NeuformIsolatedEffects.tsx'));
if (tsxFile) {
  console.log('\n--- Checking NeuformIsolatedEffects.tsx ---');
  const code = tsxFile.code;
  const hasCollection = code.includes('TextAnimationCollection');
  console.log('Includes TextAnimationCollection:', hasCollection);
  const hasIntro = code.includes('threeui-intro');
  console.log('Includes threeui-intro:', hasIntro);
}
