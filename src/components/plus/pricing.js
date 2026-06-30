// Single source of truth for the Gladys Plus pricing shown on the marketing
// pages. The displayed amounts must match the Stripe prices the checkout Worker
// selects from `request.cf.country`. US/CA visitors are shown (and billed) USD.
//
// Region detection for display is done client-side via the `useRegion` hook.
// The Worker remains the source of truth for what is actually charged.
export const PRICES = {
  eu: {
    currency: "eur",
    lite: { monthly: 6.99, yearly: 69.99 },
    plus: { monthly: 9.99, yearly: 99.99 },
  },
  us: {
    currency: "usd",
    lite: { monthly: 7.99, yearly: 79.99 },
    plus: { monthly: 11.99, yearly: 119.99 },
  },
};

export function formatPrice(amount, currency) {
  if (currency === "usd") {
    return `$${amount.toFixed(2)}`;
  }
  return `${amount.toFixed(2).replace(".", ",")}€`;
}
