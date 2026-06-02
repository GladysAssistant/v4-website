import { appendConversionAttributionToUrl } from "../../utils/conversionAttribution";

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
  const checkoutUrl = new URL(CHECKOUT_URL);
  checkoutUrl.searchParams.set("locale", isFr ? "fr" : "en");
  checkoutUrl.searchParams.set("plan", plan);
  checkoutUrl.searchParams.set("period", period);

  return appendConversionAttributionToUrl(checkoutUrl.toString());
}
