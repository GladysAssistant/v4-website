import React, { useState, useEffect } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./LanguageSuggestionBanner.module.css";

const LanguageSuggestionBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
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

    // Check if browser language is French
    const browserLang = navigator.language || navigator.userLanguage;
    const isFrenchBrowser = browserLang.toLowerCase().startsWith("fr");

    if (isFrenchBrowser) {
      setShowBanner(true);
    }
  }, [currentLocale]);

  const handleSwitchToFrench = () => {
    localStorage.setItem("language-banner-dismissed", "true");
    // Get current path and redirect to French version
    const currentPath = window.location.pathname;
    window.location.href = `/fr${currentPath}`;
  };

  const handleStayInEnglish = () => {
    localStorage.setItem("language-banner-dismissed", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <span className={styles.bannerText}>
          🇫🇷 Il semblerait que vous parliez français. Voulez-vous consulter le
          site en français ?
        </span>
        <div className={styles.bannerButtons}>
          <button
            className={styles.buttonPrimary}
            onClick={handleSwitchToFrench}
          >
            Oui, passer en français
          </button>
          <button
            className={styles.buttonSecondary}
            onClick={handleStayInEnglish}
          >
            Non, rester en anglais
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSuggestionBanner;
