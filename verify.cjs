const fs = require('node:fs');
const assert = require('node:assert/strict');
const html = fs.readFileSync('index.html', 'utf8');
assert.ok(html.includes('https://sfm-achats-prive.vercel.app/'));
assert.ok(!html.includes('PASSWORD_HASH'));
assert.ok(!fs.readFileSync('data.js', 'utf8').includes('PURCHASE_DATA'));
console.log('Public redirect verified; no embedded purchasing dataset.');
