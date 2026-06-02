import React, { useEffect } from "react";
import LanguageSuggestionBanner from "../components/LanguageSuggestionBanner";
import { captureConversionAttribution } from "../utils/conversionAttribution";

// Default implementation, that you can customize
export default function Root({ children }) {
  useEffect(() => {
    captureConversionAttribution();
  }, []);

  return (
    <>
      <LanguageSuggestionBanner />
      {children}
    </>
  );
}
