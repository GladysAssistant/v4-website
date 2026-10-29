import React, { useEffect, useRef } from "react";

const TURNSTILE_SCRIPT =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

function loadTurnstileScript() {
  if (typeof window === "undefined") {
    return Promise.reject(new Error("no window"));
  }
  if (window.turnstile) {
    return Promise.resolve(window.turnstile);
  }
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${TURNSTILE_SCRIPT}"]`);
    const script = existing || document.createElement("script");
    script.addEventListener("load", () => resolve(window.turnstile));
    script.addEventListener("error", reject);
    if (!existing) {
      script.src = TURNSTILE_SCRIPT;
      script.async = true;
      document.head.appendChild(script);
    }
  });
}

/** Renders the Turnstile widget and reports the token to the parent. */
function Turnstile({ siteKey, language, onToken }) {
  const container = useRef(null);
  const widgetId = useRef(null);

  useEffect(() => {
    let cancelled = false;
    loadTurnstileScript()
      .then((turnstile) => {
        if (cancelled || !container.current) {
          return;
        }
        widgetId.current = turnstile.render(container.current, {
          sitekey: siteKey,
          language,
          callback: (token) => onToken(token),
          "expired-callback": () => onToken(""),
          "error-callback": () => onToken(""),
        });
      })
      .catch((e) => console.error("Turnstile failed to load", e));
    return () => {
      cancelled = true;
      if (widgetId.current && window.turnstile) {
        window.turnstile.remove(widgetId.current);
      }
    };
  }, [siteKey, language]);

  return <div ref={container} className="margin-top--sm" />;
}

export default Turnstile;
