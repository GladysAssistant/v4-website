import ogImagesDe from "./ogImagesDe.json";

// Which generated Open Graph image a page uses (scripts/generate_og_images.js).
// Every page in ogImages.json has an English and a French image; only the pages
// in ogImagesDe.json have a German one. Other locales use the English image.
export function ogImageLocale(slug, locale) {
  if (locale === "fr") return "fr";
  if (locale === "de" && ogImagesDe.includes(slug)) return "de";
  return "en";
}
