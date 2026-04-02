import { readFileSync, writeFileSync } from 'fs';

const path = 'dist/server/.prerender/wrangler.json';
const content = readFileSync(path, 'utf-8');
const parsed = JSON.parse(content);

if (parsed.assets?.binding === 'ASSETS') {
  parsed.assets.binding = 'STATIC_ASSETS';
  writeFileSync(path, JSON.stringify(parsed, null, 2));
  console.log('Patched: ASSETS → STATIC_ASSETS');
}
