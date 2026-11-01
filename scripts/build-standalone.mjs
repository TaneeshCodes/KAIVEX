import { readdir, readFile, rm, writeFile } from 'node:fs/promises';
import { extname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'vite';
import viteConfig from '../vite.config.js';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const outputDir = join(root, '.standalone-build');
const publicDir = join(root, 'public');
const outputFile = join(root, 'kaivex-standalone.html');

const mimeTypes = {
  '.css': 'text/css',
  '.html': 'text/html',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.mp4': 'video/mp4',
  '.svg': 'image/svg+xml',
  '.webm': 'video/webm',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
};

async function listFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? listFiles(path) : [path];
  }));
  return files.flat();
}

async function dataUri(path) {
  const bytes = await readFile(path);
  const mime = mimeTypes[extname(path).toLowerCase()] ?? 'application/octet-stream';
  return `data:${mime};base64,${bytes.toString('base64')}`;
}

async function replaceAsync(input, pattern, replacer) {
  const matches = [...input.matchAll(pattern)];
  for (const match of matches.reverse()) {
    const replacement = await replacer(...match);
    input = `${input.slice(0, match.index)}${replacement}${input.slice(match.index + match[0].length)}`;
  }
  return input;
}

await build({
  ...viteConfig,
  configFile: false,
  root,
  base: '/',
  publicDir: false,
  build: {
    ...viteConfig.build,
    outDir: outputDir,
    emptyOutDir: true,
    copyPublicDir: false,
    cssCodeSplit: false,
    assetsInlineLimit: 100_000_000,
    rollupOptions: {
      ...viteConfig.build?.rollupOptions,
      output: {
        ...viteConfig.build?.rollupOptions?.output,
        inlineDynamicImports: true,
      },
    },
  },
});

let html = await readFile(join(outputDir, 'index.html'), 'utf8');

html = await replaceAsync(html, /<link\b[^>]*href="([^"]+\.css(?:\?[^"]*)?)"[^>]*>/gi, async (_tag, href) => {
  const cssPath = resolve(outputDir, href.replace(/^\//, '').split('?')[0]);
  const css = await readFile(cssPath, 'utf8');
  return `<style>\n${css}\n</style>`;
});

html = await replaceAsync(html, /<script\b[^>]*type="module"[^>]*src="([^"]+\.js(?:\?[^"]*)?)"[^>]*><\/script>/gi, async (_tag, src) => {
  const jsPath = resolve(outputDir, src.replace(/^\//, '').split('?')[0]);
  const js = (await readFile(jsPath, 'utf8')).replace(/<\/script/gi, '<\\/script');
  return `<script type="module">\n${js}\n</script>`;
});

const assetFiles = [
  ...(await listFiles(publicDir)),
  ...(await listFiles(outputDir)).filter((path) => !path.endsWith('.html') && !path.endsWith('.js') && !path.endsWith('.css')),
];

for (const path of assetFiles) {
  const rel = relative(path.startsWith(publicDir) ? publicDir : outputDir, path).split(sep).join('/');
  const publicUrl = `/${rel}`;
  const builtUrl = `/${rel}`;
  const uri = await dataUri(path);
  html = html.split(publicUrl).join(uri);
  if (builtUrl !== publicUrl) html = html.split(builtUrl).join(uri);
}

html = html.replace(/<link\b[^>]*rel="modulepreload"[^>]*>/gi, '');
await writeFile(outputFile, html, 'utf8');

const { size } = await (await import('node:fs/promises')).stat(outputFile);
console.log(`Created ${outputFile} (${(size / (1024 * 1024)).toFixed(2)} MB)`);
await rm(outputDir, { recursive: true, force: true });
