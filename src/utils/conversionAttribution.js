export const CONVERSION_ATTRIBUTION_STORAGE_KEY =
  "gladys_conversion_attribution_v1";

// Campaign parameters only. Advertising click identifiers (gclid, fbclid) are
// deliberately NOT collected: they are cross-site advertising identifiers, and
// storing them — even more so alongside an analytics device id — takes this
// beyond the audience-measurement exemption and would require consent.
const TRACKED_QUERY_PARAMETERS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
];

// Everything the stored attribution is allowed to contain. Anything else (an
// ad click id or a device id collected by a previous version of this file) is
// dropped from the visitor's browser the next time they load a page.
const ALLOWED_ATTRIBUTION_KEYS = new Set([
  ...TRACKED_QUERY_PARAMETERS,
  "landing_path",
  "landing_referrer",
  "captured_at",
]);

function keepAllowedKeys(attribution) {
  return Object.fromEntries(
    Object.entries(attribution).filter(([key]) =>
      ALLOWED_ATTRIBUTION_KEYS.has(key),
    ),
  );
}

function safeParseLocalStorageValue(value) {
  if (!value) {
    return {};
  }

  try {
    const parsed = JSON.parse(value);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (e) {
    return {};
  }
}

function getAttributionFromCurrentUrl() {
  if (typeof window === "undefined") {
    return {};
  }

  const query = new URLSearchParams(window.location.search);
  const attributionParams = {};

  TRACKED_QUERY_PARAMETERS.forEach((parameter) => {
    const value = query.get(parameter);
    if (value) {
      attributionParams[parameter] = value;
    }
  });

  return attributionParams;
}

/** Reads URL attribution, merges into localStorage, returns stored attribution. */
export function captureConversionAttribution() {
  if (typeof window === "undefined") {
    return {};
  }

  const urlAttribution = getAttributionFromCurrentUrl();
  const storedAttribution = safeParseLocalStorageValue(
    window.localStorage.getItem(CONVERSION_ATTRIBUTION_STORAGE_KEY),
  );
  const existingAttribution = keepAllowedKeys(storedAttribution);

  const hasNewAttribution = Object.keys(urlAttribution).length > 0;
  const mergedAttribution = hasNewAttribution
    ? {
        ...existingAttribution,
        ...urlAttribution,
        landing_path: window.location.pathname,
        landing_referrer: document.referrer || "",
        captured_at: new Date().toISOString(),
      }
    : existingAttribution;

  if (Object.keys(mergedAttribution).length > 0) {
    window.localStorage.setItem(
      CONVERSION_ATTRIBUTION_STORAGE_KEY,
      JSON.stringify(mergedAttribution),
    );
  } else {
    // Nothing to keep — including an empty or malformed leftover entry: remove
    // it rather than store an empty object.
    window.localStorage.removeItem(CONVERSION_ATTRIBUTION_STORAGE_KEY);
  }

  return mergedAttribution;
}

export function appendConversionAttributionToUrl(urlString) {
  const attribution = captureConversionAttribution();
  const url = new URL(urlString);

  Object.entries(attribution).forEach(([key, value]) => {
    if (value) {
      url.searchParams.set(key, value);
    }
  });

  return url.toString();
}
