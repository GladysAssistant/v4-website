import { loadStripe } from "@stripe/stripe-js/pure";

async function onClickCheckoutGladysPlus(locale) {
  const stripe = await loadStripe("pk_live_zY5TGhpZHlH65hSEB4PmBeIe");
  if (window.fbq) {
    fbq("track", "InitiateCheckout");
  }
  if (window.ga) {
    ga("send", "event", "button", "gladys-plus", "initiate-checkout");
  }
  return fetch("https://api.gladysgateway.com/accounts/payments/sessions", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      locale: locale,
    }),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (session) {
      if (session && session.id) {
        return stripe.redirectToCheckout({
          sessionId: session.id,
        });
      } else {
        throw new Error(`No session created, ${session}`);
      }
    })
    .then(function (result) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
      if (result && result.error && result.error.message) {
        alert(result.error.message);
      }
    });
}

export default onClickCheckoutGladysPlus;
