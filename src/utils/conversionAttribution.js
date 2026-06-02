export const CONVERSION_ATTRIBUTION_STORAGE_KEY =
  "gladys_conversion_attribution_v1";

const TRACKED_QUERY_PARAMETERS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "utm_id",
  "gclid",
  "fbclid",
];

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
  const existingAttribution = safeParseLocalStorageValue(
    window.localStorage.getItem(CONVERSION_ATTRIBUTION_STORAGE_KEY),
  );

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
