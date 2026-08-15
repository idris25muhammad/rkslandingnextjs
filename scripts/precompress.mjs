import { gzipSync, brotliCompressSync, constants as zlibConstants } from 'node:zlib';
import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = fileURLToPath(new URL('../out/', import.meta.url));
const TEXT_EXT = new Set([
  '.html',
  '.css',
  '.js',
  '.mjs',
  '.json',
  '.svg',
  '.webmanifest',
  '.txt',
  '.xml',
  '.map',
]);

let gzCount = 0;
let brCount = 0;

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      walk(full);
    } else {
      const ext = name.slice(name.lastIndexOf('.')).toLowerCase();
      if (!TEXT_EXT.has(ext)) continue;
      const buf = readFileSync(full);
      writeFileSync(full + '.gz', gzipSync(buf, { level: 9 }));
      gzCount++;
      writeFileSync(
        full + '.br',
        brotliCompressSync(buf, {
          params: { [zlibConstants.BROTLI_PARAM_QUALITY]: 11 },
        })
      );
      brCount++;
    }
  }
}

walk(outDir);
console.log(`precompress: wrote ${gzCount} .gz and ${brCount} .br files in out/`);
