import { useEffect, useState } from "react";

const NORTH_AMERICA = new Set(["US", "CA"]);
const CACHE_KEY = "gladys_region";
// Re-detect at most once a day so a user who changes country (travel, VPN) is
// not stuck on the old currency forever, while avoiding a request on every view.
const CACHE_TTL_MS = 24 * 60 * 60 * 1000;

function readCachedRegion() {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(CACHE_KEY) || "null");
    if (
      parsed &&
      (parsed.region === "us" || parsed.region === "eu") &&
      typeof parsed.detectedAt === "number" &&
      Date.now() - parsed.detectedAt < CACHE_TTL_MS
    ) {
      return parsed.region;
    }
  } catch (e) {
    // Unavailable (private mode), unparseable, or a legacy plain-string value:
    // ignore and re-detect.
  }
  return null;
}

function writeCachedRegion(region) {
  try {
    window.localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ region, detectedAt: Date.now() })
    );
  } catch (e) {
    // ignore write failures
  }
}

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
 * no extra serverless function. The result is cached for CACHE_TTL_MS and
 * re-checked afterwards.
 */
export default function useRegion() {
  // Default to "eu" so the server-rendered HTML and first client paint match
  // (no hydration mismatch); it swaps to "us" after detection if needed.
  const [region, setRegion] = useState("eu");

  useEffect(() => {
    // Debug/testing override: add ?region=us (or ?region=eu) to the URL to
    // force the displayed currency without being in that country. The choice is
    // persisted so it sticks while navigating the funnel; clear it with
    // ?region=eu or by clearing localStorage. This only affects the display,
    // never the billed amount (the checkout Worker decides that server-side).
    try {
      const forced = new URLSearchParams(window.location.search).get("region");
      if (forced === "us" || forced === "eu") {
        setRegion(forced);
        writeCachedRegion(forced);
        return undefined;
      }
    } catch (e) {
      // window unavailable (SSR) or bad URL; fall through to normal detection.
    }

    const cached = readCachedRegion();
    if (cached) {
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
        writeCachedRegion(next);
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
