// Fails if index.html references a script, stylesheet or sound file that doesn't exist.
import { existsSync, readFileSync } from 'node:fs';

const html = readFileSync('index.html', 'utf8');
const files = [
  ...[...html.matchAll(/(?:src|href)="([^"#:]+)"/g)].map((m) => m[1]),
  ...[...html.matchAll(/sound: '([\w-]+)'/g)].map((m) => `sounds/${m[1]}.mp3`),
];
const missing = files.filter((f) => !existsSync(f));
missing.forEach((f) => console.error(`missing: ${f}`));
console.log(`Checked ${files.length} files, ${missing.length} missing.`);
process.exit(missing.length ? 1 : 0);
