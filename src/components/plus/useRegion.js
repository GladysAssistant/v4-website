import { useEffect, useState } from "react";

const NORTH_AMERICA = new Set(["US", "CA"]);

/**
 * Display-only region detection (US/CA vs rest of world), used to show the
 * right pricing currency on the Plus page.
 *
 * This NEVER decides what the customer is actually charged: the checkout Worker
 * re-reads `request.cf.country` at checkout time and picks the matching Stripe
 * price server-side. So a tampered/cached value here only affects what is
 * displayed, not the billed amount.
 *
 * Detection uses Cloudflare's `/cdn-cgi/trace` endpoint, available on any domain
 * proxied through Cloudflare (which Cloudflare Pages domains are), so it needs
 * no extra serverless function.
 */
export default function useRegion() {
  // Default to "eu" so the server-rendered HTML and first client paint match
  // (no hydration mismatch); it swaps to "us" after detection if needed.
  const [region, setRegion] = useState("eu");

  useEffect(() => {
    let cached = null;
    try {
      cached = window.localStorage.getItem("gladys_region");
    } catch (e) {
      // localStorage may be unavailable (private mode); ignore.
    }
    if (cached === "us" || cached === "eu") {
      setRegion(cached);
      return undefined;
    }

    let cancelled = false;
    fetch("/cdn-cgi/trace")
      .then((res) => res.text())
      .then((text) => {
        if (cancelled) {
          return;
        }
        const loc = text.match(/loc=([A-Z]{2})/)?.[1];
        const next = loc && NORTH_AMERICA.has(loc) ? "us" : "eu";
        setRegion(next);
        try {
          window.localStorage.setItem("gladys_region", next);
        } catch (e) {
          // ignore write failures
        }
      })
      .catch(() => {
        // Network/endpoint failure: keep the "eu" default.
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return region;
}
