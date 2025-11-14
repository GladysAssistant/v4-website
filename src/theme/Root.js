import React from "react";
import LanguageSuggestionBanner from "../components/LanguageSuggestionBanner";

// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <>
      <LanguageSuggestionBanner />
      {children}
    </>
  );
}
