import React, { useState, useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./LanguageSuggestionBanner.module.css";

const SUGGESTIONS = {
  fr: {
    text: "🇫🇷 Il semblerait que vous parliez français. Voulez-vous consulter le site en français ?",
    switchLabel: "Oui, passer en français",
    stayLabel: "Non, rester en anglais",
  },
  de: {
    text: "🇩🇪 Es sieht so aus, als würdest du Deutsch sprechen. Möchtest du die Website auf Deutsch ansehen?",
    switchLabel: "Ja, auf Deutsch wechseln",
    stayLabel: "Nein, auf Englisch bleiben",
  },
};

const LanguageSuggestionBanner = () => {
  const [suggestedLocale, setSuggestedLocale] = useState(null);
  const context = useDocusaurusContext();
  const { i18n } = context;
  const currentLocale = i18n.currentLocale;

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    // Check if user already made a choice
    const dismissed = localStorage.getItem("language-banner-dismissed");
    if (dismissed) return;

    // Check if we're on English site
    if (currentLocale !== "en") return;

    // Check if browser language is French or German
    const browserLang = (
      navigator.language ||
      navigator.userLanguage ||
      ""
    ).toLowerCase();

    if (browserLang.startsWith("fr")) {
      setSuggestedLocale("fr");
    } else if (browserLang.startsWith("de")) {
      setSuggestedLocale("de");
    }
  }, [currentLocale]);

  const handleSwitch = () => {
    localStorage.setItem("language-banner-dismissed", "true");
    // Get current path and redirect to the suggested locale
    const currentPath = window.location.pathname;
    window.location.href = `/${suggestedLocale}${currentPath}`;
  };

  const handleStayInEnglish = () => {
    localStorage.setItem("language-banner-dismissed", "true");
    setSuggestedLocale(null);
  };

  if (!suggestedLocale) return null;

  const suggestion = SUGGESTIONS[suggestedLocale];

  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <span className={styles.bannerText}>{suggestion.text}</span>
        <div className={styles.bannerButtons}>
          <button className={styles.buttonPrimary} onClick={handleSwitch}>
            {suggestion.switchLabel}
          </button>
          <button
            className={styles.buttonSecondary}
            onClick={handleStayInEnglish}
          >
            {suggestion.stayLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSuggestionBanner;
