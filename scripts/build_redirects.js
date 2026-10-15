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
const fs = require("fs");

const SOURCE = "./_redirects";
const DESTINATION = process.argv[2] || "./build/_redirects";

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

lines.forEach((line) => {
  const trimmed = line.trim();
  if (trimmed === "" || trimmed.startsWith("#")) {
    output.push(line);
    return;
  }
  const [from, ...rest] = trimmed.split(/\s+/);
  if (!seen.has(from)) {
    seen.add(from);
    output.push(trimmed);
  }
  const twin = otherSpelling(from);
  if (twin && !seen.has(twin)) {
    seen.add(twin);
    output.push([twin, ...rest].join(" "));
    added += 1;
  }
});

fs.writeFileSync(DESTINATION, output.join("\n"));
console.log(
  `>> Wrote ${DESTINATION}: ${seen.size} rules (${added} trailing-slash variants added)`
);
