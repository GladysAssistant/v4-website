// Writes the Cloudflare Pages _redirects file into the build folder.
//
// Cloudflare matches a redirect source exactly: "/docs/integrations/tuya" does
// not match "/docs/integrations/tuya/". The site uses trailing slashes, so the
// URLs search engines and visitors know are mostly the slashed ones. To never
// leave one of the two spellings out, every rule of ./_redirects is emitted
// with both, right after the rule as written:
//
//   /docs/integrations/tuya /docs/integrations/external/tuya/ 301
//
// also yields
//
//   /docs/integrations/tuya/ /docs/integrations/external/tuya/ 301
//
// Sources ending with a splat (/en/*) already match both, and sources naming a
// file (/download/latest.zip) have no slashed spelling, so they are kept as is.
// When both spellings are listed in ./_redirects, the first one wins.
//
// Cloudflare counts a rule as dynamic from the first splat or placeholder on,
// and silently drops the rules past 2,000 static and 100 dynamic. The build
// fails if a static rule comes after a dynamic one or if a limit is exceeded.
const fs = require("fs");

const SOURCE = "./_redirects";
const DESTINATION = process.argv[2] || "./build/_redirects";
const MAX_STATIC = 2000;
const MAX_DYNAMIC = 100;

const isDynamic = (from) => from.includes("*") || /\/:[A-Za-z]/.test(from);

const otherSpelling = (from) => {
  if (from === "/" || from.endsWith("*")) return null;
  if (from.endsWith("/")) return from.slice(0, -1);
  const lastSegment = from.slice(from.lastIndexOf("/") + 1);
  if (lastSegment.includes(".")) return null;
  return `${from}/`;
};

const lines = fs.readFileSync(SOURCE, "utf8").split("\n");
const seen = new Set();
const output = [];
let added = 0;
let staticCount = 0;
let dynamicCount = 0;
let firstDynamic = null;

const count = (from) => {
  if (isDynamic(from)) {
    dynamicCount += 1;
    firstDynamic = firstDynamic || from;
  } else if (firstDynamic) {
    console.error(
      `>> ${from} comes after the dynamic rule ${firstDynamic}: move it above, Cloudflare would count it as dynamic`
    );
    process.exit(1);
  } else {
    staticCount += 1;
  }
};

lines.forEach((line) => {
  const trimmed = line.trim();
  if (trimmed === "" || trimmed.startsWith("#")) {
    output.push(line);
    return;
  }
  const [from, ...rest] = trimmed.split(/\s+/);
  if (!seen.has(from)) {
    seen.add(from);
    count(from);
    output.push(trimmed);
  }
  const twin = otherSpelling(from);
  if (twin && !seen.has(twin)) {
    seen.add(twin);
    count(twin);
    output.push([twin, ...rest].join(" "));
    added += 1;
  }
});

if (staticCount > MAX_STATIC || dynamicCount > MAX_DYNAMIC) {
  console.error(
    `>> ${staticCount} static and ${dynamicCount} dynamic redirects, Cloudflare allows ${MAX_STATIC} and ${MAX_DYNAMIC}`
  );
  process.exit(1);
}

fs.writeFileSync(DESTINATION, output.join("\n"));
console.log(
  `>> Wrote ${DESTINATION}: ${staticCount} static and ${dynamicCount} dynamic rules (${added} trailing-slash variants added)`
);
