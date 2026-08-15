import { PurgeCSS } from 'purgecss';
import { readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const outDir = join(root, 'out');
const srcDir = join(root, 'src');

function collectFiles(dir, extSet, acc = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      collectFiles(full, extSet, acc);
    } else if (extSet.has(name.slice(name.lastIndexOf('.')))) {
      acc.push(full);
    }
  }
  return acc;
}

const htmlFiles = collectFiles(outDir, new Set(['.html']));
const srcFiles = collectFiles(srcDir, new Set(['.tsx', '.ts']));
const dataFiles = collectFiles(join(root, 'data'), new Set(['.json']));
const cssFiles = collectFiles(join(outDir, '_next', 'static', 'css'), new Set(['.css'])).filter(
  (f) => statSync(f).size > 20000
);

console.log(`content: ${htmlFiles.length} html, ${srcFiles.length} src, ${dataFiles.length} data files`);
console.log(`css targets: ${cssFiles.map((f) => join(f.split(join('out', '_next'))[1])).join(', ')}`);

const results = await new PurgeCSS().purge({
  content: [...htmlFiles, ...srcFiles, ...dataFiles],
  css: cssFiles.map((f) => ({ raw: readFileSync(f, 'utf-8'), name: f })),
  variables: false,
  safelist: {
    greedy: [/data-theme/, /aria-/],
  },
});

for (const r of results) {
  const before = statSync(r.file).size;
  writeFileSync(r.file, r.css);
  console.log(`purged ${r.file} ${before} -> ${Buffer.byteLength(r.css)} bytes`);
}
