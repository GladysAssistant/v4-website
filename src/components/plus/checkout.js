export const CHECKOUT_URL =
  "https://direct-pay-gladys-plus.gladysassistant.workers.dev";

/** Default recommended plan for primary CTAs (matches pricing default: yearly Plus). */
export const RECOMMENDED_PLAN = "plus";
export const RECOMMENDED_PERIOD = "yearly";

export function getCheckoutUrl(
  language,
  plan = RECOMMENDED_PLAN,
  period = RECOMMENDED_PERIOD,
) {
  const isFr = language === "fr";
  return `${CHECKOUT_URL}?locale=${isFr ? "fr" : "en"}&plan=${plan}&period=${period}`;
}
