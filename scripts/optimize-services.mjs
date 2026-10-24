import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const MAPPINGS = [
  {
    original: '3D Lead Generation Funnel Icon.png',
    slug: 'lead-management.webp',
    name: 'Lead Management'
  },
  {
    original: 'Glossy 3D Web UI Dashboard Icon.png',
    slug: 'website.webp',
    name: 'Website Development'
  },
  {
    original: 'Glossy 3D Smartphone App Concept.png',
    slug: 'app.webp',
    name: 'App Development'
  },
  {
    original: 'Futuristic AI Chip Network.png',
    slug: 'ai-ml.webp',
    name: 'AI / ML'
  },
  {
    original: 'Glossy Cloud Computing Network Icon.png',
    slug: 'saas.webp',
    name: 'SaaS'
  },
  {
    original: 'Futuristic AI Vision Inspection System.png',
    slug: 'computer-vision.webp',
    name: 'Computer Vision'
  }
];

const SOURCE_DIR = 'source-art/services';
const OUTPUT_DIR = 'public/services';

async function optimize() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const results = [];

  for (const item of MAPPINGS) {
    const srcPath = path.join(SOURCE_DIR, item.original);
    const destPath = path.join(OUTPUT_DIR, item.slug);

    if (!fs.existsSync(srcPath)) {
      console.error(`Source file not found: ${srcPath}`);
      continue;
    }

    const origStat = fs.statSync(srcPath);
    let pipeline = sharp(srcPath);
    const meta = await pipeline.metadata();

    let trimmedBuffer;
    let trimmedMeta;

    if (meta.hasAlpha) {
      // Trim fully transparent margins
      const trimmed = await pipeline.trim().toBuffer({ resolveWithObject: true });
      trimmedBuffer = trimmed.data;
      trimmedMeta = trimmed.info;
    } else {
      // For images without alpha, keep full artwork
      const buf = await pipeline.toBuffer({ resolveWithObject: true });
      trimmedBuffer = buf.data;
      trimmedMeta = buf.info;
    }

    // Scale to fit within 720x720 proportionally
    const targetBox = 720;
    const scale = Math.min(targetBox / trimmedMeta.width, targetBox / trimmedMeta.height, 1);
    const scaledWidth = Math.round(trimmedMeta.width * scale);
    const scaledHeight = Math.round(trimmedMeta.height * scale);

    const resizedBuffer = await sharp(trimmedBuffer)
      .resize(scaledWidth, scaledHeight, { fit: 'inside' })
      .toBuffer();

    // Center horizontally and place bottom 20px above canvas bottom (y = 800 - 20 = 780)
    const left = Math.round((800 - scaledWidth) / 2);
    const top = 780 - scaledHeight;

    // Create 800x800 transparent canvas
    const finalImage = await sharp({
      create: {
        width: 800,
        height: 800,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
      .composite([
        {
          input: resizedBuffer,
          left: Math.max(0, left),
          top: Math.max(0, top)
        }
      ])
      .webp({ quality: 90, effort: 6 })
      .toFile(destPath);

    const destStat = fs.statSync(destPath);

    results.push({
      service: item.name,
      originalFile: item.original,
      originalSize: `${(origStat.size / 1024).toFixed(1)} KB`,
      optimizedFile: item.slug,
      optimizedSize: `${(destStat.size / 1024).toFixed(1)} KB`,
      bytes: destStat.size,
      under150KB: destStat.size < 150 * 1024,
      dimensions: '800x800',
      scaledDimensions: `${scaledWidth}x${scaledHeight}`,
      position: { left, top }
    });
  }

  // Remove any remaining .png files in public/services/ to ensure no filenames with spaces are served
  const publicFiles = fs.readdirSync(OUTPUT_DIR);
  for (const f of publicFiles) {
    if (f.endsWith('.png')) {
      fs.unlinkSync(path.join(OUTPUT_DIR, f));
      console.log(`Cleaned up original png from public: ${f}`);
    }
  }

  console.log(JSON.stringify(results, null, 2));
}

optimize().catch(err => {
  console.error(err);
  process.exit(1);
});
