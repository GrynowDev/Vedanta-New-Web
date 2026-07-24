/**
 * Next.js App Router injects <div hidden><!--$--><!--/$--></div> as the first
 * child of <body>. Google Tag Manager / Search Console require the GTM
 * <noscript> to be immediately after <body>, so that marker breaks verification.
 *
 * This script runs after `next build` and:
 * 1. Removes the empty RSC placeholder div
 * 2. Ensures <noscript> (GTM) is the first child of <body>
 */
const fs = require("fs");
const path = require("path");

const APP_DIR = path.join(__dirname, "..", ".next", "server", "app");

const EMPTY_RSC_DIV =
  /<div hidden(?:="")?><!--\$--><!--\/\$--><\/div>/g;

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.endsWith(".html")) files.push(full);
  }
  return files;
}

function fixHtml(html) {
  // Pull GTM noscript out if present
  const noscriptMatch = html.match(
    /<noscript[^>]*>[\s\S]*?googletagmanager\.com\/ns\.html[\s\S]*?<\/noscript>/i,
  );
  const noscript = noscriptMatch ? noscriptMatch[0] : null;

  // Remove empty RSC placeholder(s)
  let next = html.replace(EMPTY_RSC_DIV, "");

  if (noscript) {
    // Remove existing noscript, then insert right after <body ...>
    next = next.replace(noscript, "");
    next = next.replace(/<body([^>]*)>/i, `<body$1>${noscript}`);
  }

  // Clean accidental double spaces / empty junk right after body
  next = next.replace(/<body([^>]*)>\s+/i, `<body$1>`);

  return next;
}

const files = walk(APP_DIR);
let fixed = 0;

for (const file of files) {
  const before = fs.readFileSync(file, "utf8");
  if (!before.includes("<body")) continue;
  const after = fixHtml(before);
  if (after !== before) {
    fs.writeFileSync(file, after);
    fixed += 1;
  }
}

console.log(`[fix-gtm-body] Updated ${fixed} HTML file(s) for GTM body placement.`);
