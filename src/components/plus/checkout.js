import { appendConversionAttributionToUrl } from "../../utils/conversionAttribution";

export const CHECKOUT_URL =
  "https://direct-pay-gladys-plus.gladysassistant.workers.dev";

/** Default recommended plan for primary CTAs (matches pricing default: yearly Plus). */
export const RECOMMENDED_PLAN = "plus";
export const RECOMMENDED_PERIOD = "yearly";

/**
 * Builds the plain checkout URL, without any campaign attribution.
 *
 * This is deliberately deterministic: the result is identical during the static
 * build and in the browser, so React can hydrate the `href` it rendered. The
 * campaign parameters are added at click time by `handleCheckoutClick` — they
 * live in localStorage, which does not exist at build time, so adding them here
 * would produce a server/client mismatch that React 18 silently keeps (the
 * server value wins) and the attribution would never reach the checkout.
 */
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

  return checkoutUrl.toString();
}

/**
 * Click handler for checkout links: navigates to the link's own href enriched
 * with the stored campaign attribution.
 *
 * Only a plain left click is intercepted. Middle clicks and clicks with a
 * modifier key are left to the browser so that "open in a new tab/window" keeps
 * working — those navigations use the bare href, which is a valid checkout URL.
 */
export function handleCheckoutClick(event) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.currentTarget.target === "_blank"
  ) {
    return;
  }

  event.preventDefault();
  window.location.href = appendConversionAttributionToUrl(
    event.currentTarget.href,
  );
}
