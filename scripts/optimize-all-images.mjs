import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function optimizeImages() {
  console.log('=== Optimizing Work Images ===');
  fs.mkdirSync('source-art/work', { recursive: true });
  const workFiles = fs.readdirSync('public/work').filter(f => f.endsWith('.png'));

  for (const f of workFiles) {
    const src = path.join('public/work', f);
    const backup = path.join('source-art/work', f);
    if (!fs.existsSync(backup)) {
      fs.copyFileSync(src, backup);
    }
    const name = path.parse(f).name;
    const destWebp = path.join('public/work', `${name}.webp`);

    await sharp(src)
      .resize(800, 800, { fit: 'inside' })
      .webp({ quality: 85, effort: 5 })
      .toFile(destWebp);

    const s = fs.statSync(destWebp);
    console.log(`Optimized ${destWebp}: ${(s.size / 1024).toFixed(1)} KB`);
    fs.unlinkSync(src); // Remove huge PNG from public
  }

  console.log('\n=== Optimizing Team Images ===');
  fs.mkdirSync('source-art/team', { recursive: true });
  const teamFiles = fs.readdirSync('public/team').filter(f => f.endsWith('.png'));

  for (const f of teamFiles) {
    const src = path.join('public/team', f);
    const backup = path.join('source-art/team', f);
    if (!fs.existsSync(backup)) {
      fs.copyFileSync(src, backup);
    }
    const name = path.parse(f).name;
    const destWebp = path.join('public/team', `${name}.webp`);

    await sharp(src)
      .resize(600, 600, { fit: 'inside' })
      .webp({ quality: 85, effort: 5 })
      .toFile(destWebp);

    const s = fs.statSync(destWebp);
    console.log(`Optimized ${destWebp}: ${(s.size / 1024).toFixed(1)} KB`);
    fs.unlinkSync(src); // Remove huge PNG from public
  }

  console.log('\n=== Optimizing Reels Poster ===');
  const posterSrc = 'public/reels-poster.webp';
  if (fs.existsSync(posterSrc)) {
    const tmp = 'public/reels-poster-temp.webp';
    await sharp(posterSrc)
      .resize(1280, 720, { fit: 'inside' })
      .webp({ quality: 80, effort: 5 })
      .toFile(tmp);
    fs.renameSync(tmp, posterSrc);
    const s = fs.statSync(posterSrc);
    console.log(`Optimized ${posterSrc}: ${(s.size / 1024).toFixed(1)} KB`);
  }

  console.log('\n=== Generating 440px Service Image Variants ===');
  const serviceFiles = ['lead-management', 'website', 'app', 'ai-ml', 'saas', 'computer-vision'];
  for (const slug of serviceFiles) {
    const base = path.join('public/services', `${slug}.webp`);
    const variant440 = path.join('public/services', `${slug}-440.webp`);
    if (fs.existsSync(base)) {
      await sharp(base)
        .resize(440, 440, { fit: 'inside' })
        .webp({ quality: 88, effort: 5 })
        .toFile(variant440);
      const s = fs.statSync(variant440);
      console.log(`Generated ${variant440}: ${(s.size / 1024).toFixed(1)} KB`);
    }
  }

  console.log('\n=== Cleaning Unused Assets ===');
  if (fs.existsSync('public/kaivex-icon.png')) {
    fs.mkdirSync('source-art/brand', { recursive: true });
    fs.copyFileSync('public/kaivex-icon.png', 'source-art/brand/kaivex-icon.png');
    fs.unlinkSync('public/kaivex-icon.png');
    console.log('Moved unused public/kaivex-icon.png to source-art/brand/');
  }

  console.log('\nImage optimization complete!');
}

optimizeImages().catch(err => {
  console.error(err);
  process.exit(1);
});
