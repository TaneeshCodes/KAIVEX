import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const MAPPINGS = [
  {
    originalFile: '3D Lead Generation Funnel Icon.png',
    service: 'Lead Management',
    slug: 'lead-management'
  },
  {
    originalFile: 'Glossy 3D Web UI Dashboard Icon.png',
    service: 'Website Development',
    slug: 'website'
  },
  {
    originalFile: 'Glossy 3D Smartphone App Concept.png',
    service: 'App Development',
    slug: 'app'
  },
  {
    originalFile: 'Futuristic AI Chip Network.png',
    service: 'AI / ML',
    slug: 'ai-ml'
  },
  {
    originalFile: 'Glossy Cloud Computing Network Icon.png',
    service: 'SaaS',
    slug: 'saas'
  },
  {
    originalFile: 'Futuristic AI Vision Inspection System.png',
    service: 'Computer Vision',
    slug: 'computer-vision'
  }
];

async function inspectAll() {
  const results = [];
  const dir = 'source-art/services';

  for (const item of MAPPINGS) {
    const filePath = path.join(dir, item.originalFile);
    if (!fs.existsSync(filePath)) {
      console.error(`Missing file: ${filePath}`);
      continue;
    }
    const stat = fs.statSync(filePath);
    const image = sharp(filePath);
    const meta = await image.metadata();

    const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });
    const { width, height, channels } = info;

    // Corner transparency check
    const getPixel = (x, y) => {
      const idx = (y * width + x) * channels;
      if (channels === 4) {
        return { r: data[idx], g: data[idx + 1], b: data[idx + 2], a: data[idx + 3] };
      }
      return { r: data[idx], g: data[idx + 1], b: data[idx + 2], a: 255 };
    };

    const tl = getPixel(0, 0);
    const tr = getPixel(width - 1, 0);
    const bl = getPixel(0, height - 1);
    const br = getPixel(width - 1, height - 1);

    const cornersTransparent = (tl.a === 0 && tr.a === 0 && bl.a === 0 && br.a === 0);

    let bbox = { left: 0, top: 0, width, height, right: width, bottom: height };
    if (meta.hasAlpha) {
      try {
        const trimmed = await sharp(filePath).trim().toBuffer({ resolveWithObject: true });
        const tOffsetLeft = Math.abs(trimmed.info.trimOffsetLeft || 0);
        const tOffsetTop = Math.abs(trimmed.info.trimOffsetTop || 0);
        bbox = {
          left: tOffsetLeft,
          top: tOffsetTop,
          width: trimmed.info.width,
          height: trimmed.info.height,
          right: tOffsetLeft + trimmed.info.width,
          bottom: tOffsetTop + trimmed.info.height
        };
      } catch (err) {
        console.warn(`Could not trim ${item.originalFile}:`, err.message);
      }
    }

    results.push({
      file: item.originalFile,
      service: item.service,
      slug: item.slug,
      pixelSize: `${width} x ${height}`,
      fileSizeFormatted: `${(stat.size / 1024).toFixed(1)} KB`,
      fileSizeBytes: stat.size,
      hasAlpha: !!meta.hasAlpha,
      channels,
      corners: {
        topLeft: tl,
        topRight: tr,
        bottomLeft: bl,
        bottomRight: br
      },
      cornersTrulyTransparent: cornersTransparent,
      boundingBox: bbox
    });
  }

  console.log(JSON.stringify(results, null, 2));
}

inspectAll().catch(err => {
  console.error(err);
  process.exit(1);
});
