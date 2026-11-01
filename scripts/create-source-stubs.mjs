import fs from 'fs';
import path from 'path';

const sourcesDir = path.resolve('src/shaders/neuform-isolated/sources');
if (!fs.existsSync(sourcesDir)) {
  fs.mkdirSync(sourcesDir, { recursive: true });
}

const sourceFiles = [
  "aetheris-labs.html",
  "audio-wordmark.html",
  "dot-border-button.html",
  // "creator-studio-intro.html" already exists!
  "epilude-footer.html",
  "digital-expanse.html",
  "floating-dots-cta.html",
  "gallery-heading.html",
  "generate-button.html",
  "glassmorphism-cta.html",
  "gradient-beam-cta.html",
  "gradient-cta.html",
  "gradient-pill-button.html",
  "ignition-terminal.html",
  "launch-button.html",
  "imaginie-starfield.html",
  "nexus-tactile.html",
  "nexus-topology.html",
  "recursive-erosion.html",
  "sliding-text-cta.html",
  "spinning-border-button.html",
  "thinking-button.html",
  "performance-gauges.html",
  "platform-core.html",
  "strata-cloud.html",
  "synthesis-orb.html",
  "valence-core.html",
  "vanguard-dimensional.html",
  "vertex-9.html",
  "void-protocol.html"
];

for (const f of sourceFiles) {
  const filePath = path.join(sourcesDir, f);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, '<!DOCTYPE html><html><body></body></html>\n', 'utf8');
    console.log(`Created stub: ${f}`);
  }
}
console.log('All source stubs ready.');
