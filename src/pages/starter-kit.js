import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import cx from "classnames";

import { useColorMode } from "@docusaurus/theme-common";

import useBaseUrl from "@docusaurus/useBaseUrl";
import useIsBrowser from "@docusaurus/useIsBrowser";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "./styles.module.css";

import { translate } from "@docusaurus/Translate";
import { BLACK_FRIDAY_CONFIG } from "../config/blackFriday";
import { appendConversionAttributionToUrl } from "../utils/conversionAttribution";

const SHOW_BEELINK_T5 = false;
const IS_IN_HOLIDAY = false;

function Question({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function FAQ({ data }) {
  return (
    <section id="faq" style={{ marginTop: "15px" }}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            {data.slice(0, 2).map((oneElement) => (
              <Question {...oneElement} />
            ))}
          </div>
          <div className="col col--6">
            {data.slice(2).map((oneElement) => (
              <Question {...oneElement} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const faqData = [
  {
    title: <>Est-ce que Gladys est installée sur les mini-PC ?</>,
    description: (
      <>
        Oui ! Que tu choisisses {SHOW_BEELINK_T5 ? "le Beelink T5, " : ""}le
        Beelink mini S12 ou le Beelink S13, ton mini-PC arrive chez toi avec
        Gladys déjà installée et configurée. Tu n'as qu'à le brancher en
        Ethernet à ta box internet, suivre le guide de démarrage rapide, et tu
        es prêt à utiliser Gladys. Plus besoin d'installer un OS ou de
        configurer quoi que ce soit, tout est déjà fait ! Si tu as la moindre
        question, je suis toujours disponible pour t'aider 😄
      </>
    ),
  },
  {
    title: <>Satisfait ou remboursé ?</>,
    description: (
      <>
        Si jamais ce kit ne te donnait pas satisfaction, tu peux retourner ton
        mini-PC sous 14 jours. Comme Gladys est déjà installée, tu peux tester
        le système complet dès réception. Si tu as la moindre question, n'hésite
        pas à me contacter, je suis très disponible et toujours prêt à aider.
      </>
    ),
  },
  {
    title: <>Pourquoi proposer ces kits avec Gladys pré-installée ?</>,
    description: (
      <>
        Je propose ces kits pour démocratiser l'accès à Gladys en rendant la
        première marche la plus basse possible. Avec Gladys pré-installée, tu
        n'as plus besoin de te soucier de l'installation technique. La domotique
        est une jungle, et je veux que tu puisses te concentrer sur l'essentiel
        : profiter de ta maison connectée !
      </>
    ),
  },
  {
    title: <>Est-ce que l'abonnement Gladys Plus continue ensuite ?</>,
    description: (
      <>
        Si tu es satisfait et que tu continues d'utiliser Gladys, l'abonnement
        continuera au bout de 6 mois. Néanmoins, Gladys Plus est totalement sans
        engagement et tu peux annuler l'abonnement en un clic s'il ne te donne
        pas satisfaction.
      </>
    ),
  },
];

const targetDate = new Date(1733104800000);
const blackFridayEndDate = BLACK_FRIDAY_CONFIG.END_DATE;

function Plus() {
  const context = useDocusaurusContext();
  const isBrowser = useIsBrowser();
  const isDarkTheme = useColorMode().colorMode === "dark";
  const { i18n } = context;
  const language = i18n.currentLocale;

  const [isUnavailable, setIsUnavailable] = useState(null);
  const [unavailableMessage, setUnavailableMessage] = useState(null);
  const [price, setPrice] = useState(null);
  const [priceCheaperKit, setPriceCheaperKit] = useState(null);
  const [kitsRemaining, setKitsRemaining] = useState(null);
  const [progressPercentage, setProgressPercentage] = useState(null);
  const [isLowStock, setIsLowStock] = useState(null);
  const [priceS13, setPriceS13] = useState(null);
  const [s13Url, setS13Url] = useState(null);
  const [priceT5, setPriceT5] = useState(null);
  const [t5Url, setT5Url] = useState(null);
  const [priceMiniS, setPriceMiniS] = useState(null);
  const [miniSUrl, setMiniSUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [blackFridayTimeLeft, setBlackFridayTimeLeft] = useState(null);
  const [isBlackFridayActive, setIsBlackFridayActive] = useState(
    BLACK_FRIDAY_CONFIG.ENABLED,
  );

  console.log("isBlackFridayActive", isBlackFridayActive);
  const scrollTopTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  async function fetchData() {
    const response = await fetch(
      "https://black-friday-discount.gladysassistant.workers.dev/",
    );
    const data = await response.json();
    if (data.unavailable === true) {
      setIsUnavailable(true);
      setUnavailableMessage(data.message);
    } else {
      if (data.beelink_s13) {
        setPriceS13(data.beelink_s13.price);
        setS13Url(data.beelink_s13.url);
      }
      if (data.beelink_t5) {
        setPriceT5(data.beelink_t5.price);
        setT5Url(data.beelink_t5.url);
      }
      if (data.beelink_mini_s12) {
        setPriceMiniS(data.beelink_mini_s12.price);
        setMiniSUrl(data.beelink_mini_s12.url);
      }
      setIsLowStock(progressPercentage >= 50 || data.remaining <= 5);
      if (data.total !== undefined && data.remaining !== undefined) {
        const progressPercentage =
          ((data.total - data.remaining) / data.total) * 100;
        setProgressPercentage(progressPercentage);
      }
    }
    setLoading(false);
  }

  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    fetchData();

    // Black Friday countdown
    const updateBlackFridayCountdown = () => {
      const now = new Date();
      const distance = blackFridayEndDate - now;

      console.log("distance", distance);

      if (distance < 0) {
        setIsBlackFridayActive(false);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setBlackFridayTimeLeft({ days, hours, minutes, seconds });
    };

    updateBlackFridayCountdown();
    const interval = setInterval(updateBlackFridayCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const isFr = () => {
    if (language === "fr") {
      return true;
    }
    try {
      let fr = false;
      navigator.languages.forEach((oneLang) => {
        if (oneLang.indexOf("fr") !== -1) {
          fr = true;
        }
      });
      return fr;
    } catch (e) {
      console.error(e);
      return true;
    }
  };

  let dntActive = false;

  if (isBrowser) {
    dntActive =
      parseInt(
        navigator.msDoNotTrack || window.doNotTrack || navigator.doNotTrack,
        10,
      ) === 1;
  }

  const subscribeS13 = async (e) => {
    e.preventDefault();
    if (isBrowser) {
      // Track with OpenPanel
      if (window.op && !dntActive) {
        await window.op.track("starter_kit_click_buy_mini_s13");
      }
      window.location.href = appendConversionAttributionToUrl(s13Url);
    }
  };

  const subscribeT5 = async (e) => {
    e.preventDefault();
    if (isBrowser) {
      // Track with OpenPanel
      if (window.op && !dntActive) {
        await window.op.track("starter_kit_click_buy_mini_t5");
      }
      window.location.href = appendConversionAttributionToUrl(t5Url);
    }
  };

  const subscribeMiniS = async (e) => {
    e.preventDefault();
    if (isBrowser) {
      // Track with OpenPanel
      if (window.op && !dntActive) {
        await window.op.track("starter_kit_click_buy_mini_s");
      }
      window.location.href = appendConversionAttributionToUrl(miniSUrl);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const submitButtonInitialState = translate({
    id: "gladysPlusPage.submit",
    description: "Gladys Plus submit",
    message: "Start free trial",
  });

  const submitButtonSending = translate({
    id: "gladysPlusPage.creatingAccount",
    description: "Gladys Plus page waiting message",
    message: "Creating account...",
  });

  const subscribeButtonDiscount = translate({
    id: "gladysPlusPage.subscribeButtonDiscount",
    description: "Gladys Plus suscribe button discount",
    message: "Subscribe now",
  });

  return (
    <main>
      {IS_IN_HOLIDAY && (
        <div
          style={{
            background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
            color: "#78350f",
            padding: "1.25rem 1rem",
            textAlign: "center",
            borderBottom: "1px solid #fcd34d",
          }}
        >
          <div className="container" style={{ maxWidth: "900px" }}>
            <p
              style={{
                fontSize: "1.1rem",
                fontWeight: "bold",
                margin: "0 0 0.25rem 0",
                color: "#78350f",
              }}
            >
              🌴{" "}
              <span style={{ whiteSpace: "nowrap" }}>
                Actuellement en congés !
              </span>
            </p>
            <p
              style={{
                fontSize: "1rem",
                margin: 0,
                color: "#78350f",
              }}
            >
              Tu peux toujours commander ton kit, la reprise des expéditions se
              fera le <b>mercredi 6 mai 2026</b>.{" "}
              <span style={{ whiteSpace: "nowrap" }}>
                Merci pour ta patience !
              </span>
            </p>
          </div>
        </div>
      )}
      {isBlackFridayActive && (
        <div
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            padding: "1.5rem 1rem",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          <div className="container" style={{ maxWidth: "1200px" }}>
            <h2
              style={{
                fontSize: "2rem",
                fontWeight: "bold",
                margin: "0 0 0.5rem 0",
                color: "white",
              }}
            >
              🎁 BLACK FRIDAY : Offre Exceptionnelle !
            </h2>
            <p
              style={{
                fontSize: "1.2rem",
                margin: "0 0 1rem 0",
                opacity: 0.95,
              }}
            >
              Mini-PC avec Gladys pré-installée + Formation + 6 mois Gladys Plus
              offerts
            </p>
            {blackFridayTimeLeft && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "1rem",
                  flexWrap: "wrap",
                  marginTop: "1rem",
                }}
              >
                {blackFridayTimeLeft.days > 0 && (
                  <div
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      padding: "0.75rem 1.25rem",
                      borderRadius: "8px",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                      {blackFridayTimeLeft.days}
                    </div>
                    <div style={{ fontSize: "0.85rem", opacity: 0.9 }}>
                      jours
                    </div>
                  </div>
                )}
                <div
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    padding: "0.75rem 1.25rem",
                    borderRadius: "8px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                    {blackFridayTimeLeft.hours}
                  </div>
                  <div style={{ fontSize: "0.85rem", opacity: 0.9 }}>
                    heures
                  </div>
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    padding: "0.75rem 1.25rem",
                    borderRadius: "8px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                    {blackFridayTimeLeft.minutes}
                  </div>
                  <div style={{ fontSize: "0.85rem", opacity: 0.9 }}>
                    minutes
                  </div>
                </div>
                <div
                  style={{
                    background: "rgba(255,255,255,0.2)",
                    padding: "0.75rem 1.25rem",
                    borderRadius: "8px",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <div style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
                    {blackFridayTimeLeft.seconds}
                  </div>
                  <div style={{ fontSize: "0.85rem", opacity: 0.9 }}>
                    secondes
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <div className="margin-top--xl margin-bottom--lg">
        <div
          className="container"
          style={{
            maxWidth: "1400px",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "5rem",
          }}
        >
          <div className="row">
            <div className="col col--6">
              <form className={cx("margin-left--md", styles.plusForm)}>
                {isBlackFridayActive && (
                  <div
                    style={{
                      display: "inline-block",
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      color: "white",
                      padding: "0.5rem 1rem",
                      borderRadius: "6px",
                      fontSize: "0.9rem",
                      fontWeight: "bold",
                      marginBottom: "1rem",
                    }}
                  >
                    BLACK FRIDAY
                  </div>
                )}
                <h1 className={styles.plusTitle}>Kit de démarrage Gladys</h1>
                <p>
                  Un mini-PC surpuissant avec <b>Gladys pré-installée</b>
                  <br />+ la formation officielle Gladys
                  <br />+ 6 mois de Gladys Plus offerts
                  <br />+ support personnalisé par le créateur de Gladys
                </p>
                <p>
                  Livraison en <b>Mondial Relay</b>
                  <br />
                  <small>(Retour sous 14 jours si insatisfait)</small>
                </p>
              </form>
            </div>
            <div className="col col--6 docusaurus-hide-md">
              <img
                src={useBaseUrl("img/starter-kit/beelink_without_bg.png")}
                srcSet={`${useBaseUrl(
                  "img/starter-kit/beelink_without_bg.png",
                )} 1x, ${useBaseUrl(
                  "img/starter-kit/beelink_without_bg.png",
                )} 2x`}
                className={cx(styles.starterKitImage, styles.specImageLeft)}
              />
            </div>
          </div>

          {/* Nouvelle Row pour la section de choix des kits */}
          <div className="row">
            <div className="col col--12">
              <div>
                <h2
                  style={{
                    fontSize: "28px",
                    marginTop: "2rem",
                    marginBottom: "3rem",
                    textAlign: "center",
                  }}
                >
                  Choisis ton kit de démarrage Gladys :
                </h2>
                {isUnavailable && (
                  <div style={{ marginBottom: "20px", textAlign: "center" }}>
                    <span
                      style={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        color: "var(--ifm-color-danger)",
                      }}
                    >
                      {unavailableMessage || "Kits actuellement indisponibles"}
                    </span>
                  </div>
                )}
                {!isUnavailable && (
                  <div className="row" style={{ justifyContent: "center" }}>
                    {/* Beelink T5 - Budget option */}
                    {SHOW_BEELINK_T5 && (
                      <div
                        className="col col--4"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <div
                          style={{
                            border: "2px solid #ddd",
                            padding: "30px",
                            paddingTop: "50px",
                            borderRadius: "12px",
                            textAlign: "center",
                            marginBottom: "15px",
                            position: "relative",
                            flexGrow: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                          }}
                        >
                          {isBlackFridayActive ? (
                            <span
                              style={{
                                position: "absolute",
                                top: "-15px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                background:
                                  "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                color: "white",
                                padding: "8px 20px",
                                borderRadius: "25px",
                                fontSize: "1em",
                                fontWeight: "bold",
                                boxShadow:
                                  "0 4px 12px rgba(102, 126, 234, 0.4)",
                              }}
                            >
                              🎁 BLACK FRIDAY
                            </span>
                          ) : (
                            <span
                              style={{
                                position: "absolute",
                                top: "-15px",
                                left: "50%",
                                transform: "translateX(-50%)",
                                backgroundColor: "var(--ifm-color-success)",
                                color: "white",
                                padding: "8px 20px",
                                borderRadius: "25px",
                                fontSize: "1em",
                                fontWeight: "bold",
                              }}
                            >
                              ✓ Gladys Pré-installée
                            </span>
                          )}
                          <div>
                            <h3
                              style={{
                                fontSize: "32px",
                                marginBottom: "20px",
                              }}
                            >
                              Beelink T5
                            </h3>
                            <p
                              style={{
                                fontSize: "1.1em",
                                marginBottom: "20px",
                              }}
                            >
                              Le mini-PC compact et économique avec{" "}
                              <b>Gladys déjà installée</b>. Idéal pour débuter !
                            </p>
                            <ul
                              style={{
                                textAlign: "left",
                                marginBottom: "20px",
                                fontSize: "0.95em",
                              }}
                            >
                              <li>✓ Processeur Intel N4020</li>
                              <li>✓ 4 Go de RAM LPDDR4</li>
                              <li>✓ 64 Go eMMC</li>
                              <li>✓ WiFi 5 & Bluetooth 5.0</li>
                              <li>✓ Ethernet Gigabit</li>
                            </ul>
                            <p
                              style={{
                                fontSize: "36px",
                                fontWeight: "bold",
                                margin: "20px 0",
                                marginBottom: "5px",
                                color: "var(--ifm-color-primary)",
                              }}
                            >
                              {priceT5 ? priceT5 + "€" : "..."}
                            </p>
                            <p
                              style={{
                                fontSize: "0.9em",
                                marginTop: "0",
                                marginBottom: "20px",
                                color: "var(--ifm-color-emphasis-600)",
                              }}
                            >
                              + frais de ports
                            </p>
                          </div>
                          <button
                            onClick={subscribeT5}
                            disabled={loading || !priceT5}
                            className={cx(
                              "button button--primary button--lg",
                              styles.starterKitInputButton,
                            )}
                            style={{
                              width: "100%",
                              marginTop: "20px",
                              fontSize: "1.2rem",
                              padding: "15px",
                              background: isBlackFridayActive
                                ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                                : undefined,
                              border: "none",
                            }}
                          >
                            {isBlackFridayActive
                              ? "🎁 Profiter de l'offre"
                              : "Commander le Kit T5"}
                          </button>
                        </div>
                      </div>
                    )}
                    {/* Beelink mini S12 - Standard option */}
                    <div
                      className="col col--4"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <div
                        style={{
                          border: "2px solid #ddd",
                          padding: "30px",
                          paddingTop: "50px",
                          borderRadius: "12px",
                          textAlign: "center",
                          marginBottom: "15px",
                          position: "relative",
                          flexGrow: 1,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
                        }}
                      >
                        {isBlackFridayActive ? (
                          <span
                            style={{
                              position: "absolute",
                              top: "-15px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              background:
                                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                              color: "white",
                              padding: "8px 20px",
                              borderRadius: "25px",
                              fontSize: "1em",
                              fontWeight: "bold",
                              boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)",
                            }}
                          >
                            🎁 BLACK FRIDAY
                          </span>
                        ) : (
                          <span
                            style={{
                              position: "absolute",
                              top: "-15px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              backgroundColor: "var(--ifm-color-success)",
                              color: "white",
                              padding: "8px 20px",
                              borderRadius: "25px",
                              fontSize: "1em",
                              fontWeight: "bold",
                            }}
                          >
                            ✓ Gladys Pré-installée
                          </span>
                        )}
                        <div>
                          <h3
                            style={{ fontSize: "32px", marginBottom: "20px" }}
                          >
                            Beelink mini S12
                          </h3>
                          <p
                            style={{ fontSize: "1.1em", marginBottom: "20px" }}
                          >
                            Le mini-PC équilibré avec{" "}
                            <b>Gladys déjà installée</b>. Bon rapport
                            qualité/prix.
                          </p>
                          <ul
                            style={{
                              textAlign: "left",
                              marginBottom: "20px",
                              fontSize: "0.95em",
                            }}
                          >
                            <li>✓ Processeur Intel N95</li>
                            <li>✓ 8 Go de RAM DDR4</li>
                            <li>✓ 256 Go SSD</li>
                            <li>✓ WiFi 5 & Bluetooth 4.2</li>
                            <li>✓ Ethernet Gigabit</li>
                          </ul>
                          <p
                            style={{
                              fontSize: "36px",
                              fontWeight: "bold",
                              margin: "20px 0",
                              marginBottom: "5px",
                              color: "var(--ifm-color-primary)",
                            }}
                          >
                            {priceMiniS ? priceMiniS + "€" : "..."}
                          </p>
                          <p
                            style={{
                              fontSize: "0.9em",
                              marginTop: "0",
                              marginBottom: "20px",
                              color: "var(--ifm-color-emphasis-600)",
                            }}
                          >
                            + frais de ports
                          </p>
                        </div>
                        <button
                          onClick={subscribeMiniS}
                          disabled={loading || !priceMiniS}
                          className={cx(
                            "button button--primary button--lg",
                            styles.starterKitInputButton,
                          )}
                          style={{
                            width: "100%",
                            marginTop: "20px",
                            fontSize: "1.2rem",
                            padding: "15px",
                            background: isBlackFridayActive
                              ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                              : undefined,
                            border: "none",
                          }}
                        >
                          {isBlackFridayActive
                            ? "🎁 Profiter de l'offre"
                            : "Commander le kit mini S12"}
                        </button>
                      </div>
                    </div>
                    {/* Beelink S13 - Best choice */}
                    <div
                      className="col col--4"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <div
                        style={{
                          border: "3px solid var(--ifm-color-primary)",
                          padding: "30px",
                          paddingTop: "50px",
                          borderRadius: "12px",
                          textAlign: "center",
                          marginBottom: "15px",
                          position: "relative",
                          flexGrow: 1,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                          boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
                        }}
                      >
                        {isBlackFridayActive ? (
                          <span
                            style={{
                              position: "absolute",
                              top: "-15px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              background:
                                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                              color: "white",
                              padding: "8px 20px",
                              borderRadius: "25px",
                              fontSize: "1em",
                              fontWeight: "bold",
                              boxShadow: "0 4px 12px rgba(102, 126, 234, 0.4)",
                            }}
                          >
                            🎁 BLACK FRIDAY
                          </span>
                        ) : (
                          <span
                            style={{
                              position: "absolute",
                              top: "-15px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              backgroundColor: "var(--ifm-color-success)",
                              color: "white",
                              padding: "8px 20px",
                              borderRadius: "25px",
                              fontSize: "1em",
                              fontWeight: "bold",
                            }}
                          >
                            ⭐ Meilleur choix
                          </span>
                        )}
                        <div>
                          <h3
                            style={{ fontSize: "32px", marginBottom: "20px" }}
                          >
                            Beelink S13
                          </h3>
                          <p
                            style={{ fontSize: "1.1em", marginBottom: "20px" }}
                          >
                            Le mini-PC haute performance avec{" "}
                            <b>Gladys déjà installée</b>. Le meilleur choix !
                          </p>
                          <ul
                            style={{
                              textAlign: "left",
                              marginBottom: "20px",
                              fontSize: "0.95em",
                            }}
                          >
                            <li>
                              ✓ Processeur Intel N150 (dernière génération)
                            </li>
                            <li>✓ 16 Go de RAM DDR4</li>
                            <li>✓ 500 Go SSD M.2 NVMe</li>
                            <li>✓ WiFi 6 & Bluetooth 5.2</li>
                            <li>✓ Ethernet 2.5G</li>
                          </ul>
                          <p
                            style={{
                              fontSize: "36px",
                              fontWeight: "bold",
                              margin: "20px 0",
                              marginBottom: "5px",
                              color: "var(--ifm-color-primary)",
                            }}
                          >
                            {priceS13 ? priceS13 + "€" : "..."}
                          </p>
                          <p
                            style={{
                              fontSize: "0.9em",
                              marginTop: "0",
                              marginBottom: "20px",
                              color: "var(--ifm-color-emphasis-600)",
                            }}
                          >
                            + frais de ports
                          </p>
                        </div>
                        <button
                          onClick={subscribeS13}
                          disabled={loading || !priceS13}
                          className={cx(
                            "button button--primary button--lg",
                            styles.starterKitInputButton,
                          )}
                          style={{
                            width: "100%",
                            marginTop: "20px",
                            fontSize: "1.2rem",
                            padding: "15px",
                            background: isBlackFridayActive
                              ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                              : undefined,
                            border: "none",
                          }}
                        >
                          {isBlackFridayActive
                            ? "🎁 Profiter de l'offre"
                            : "Commander le kit S13"}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Kits Remaining - Placed after the two options */}
                {kitsRemaining !== null &&
                  typeof progressPercentage === "number" &&
                  !isUnavailable && (
                    <div
                      className={cx(styles.progressContainer, {
                        [styles.loadingAnimation]: loading,
                      })}
                      style={{ marginTop: "30px" }}
                    >
                      <div className={styles.progressBarBackground}>
                        <div
                          className={styles.progressBar}
                          style={{ width: `${progressPercentage}%` }}
                        />
                      </div>
                      <p
                        className={cx(styles.kitsRemainingText, {
                          [styles.pulse]: isLowStock,
                        })}
                      >
                        {" "}
                        <b>
                          {kitsRemaining} {kitsRemaining === 1 ? "kit" : "kits"}{" "}
                          de démarrage au total{" "}
                          {kitsRemaining === 1 ? "restant" : "restants"} !
                        </b>
                      </p>
                    </div>
                  )}
                {timeLeft && !isUnavailable && (
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "10px",
                      fontSize: "0.9em",
                    }}
                  >
                    Temps restant pour profiter de l'offre :{" "}
                    <b>
                      {new Intl.DurationFormat("fr", {
                        style: "long",
                      }).format(timeLeft)}
                    </b>
                  </p>
                )}
              </div>
            </div>
          </div>
          {/* Beelink T5 Details Section */}
          {SHOW_BEELINK_T5 && (
            <div className={cx("row", styles.starterKitRow)}>
              <div
                className={cx("col col--6", styles.flexColumnSecondOnMobile)}
              >
                <img
                  src={useBaseUrl("/img/starter-kit/beelink_t5.jpg")}
                  className={cx(styles.specImage)}
                />
              </div>
              <div className={cx("col col--6", styles.flexColumnFirstOnMobile)}>
                <h2 className={cx(styles.plusFeatureTitle)}>
                  Beelink T5 - Gladys Pré-installée
                </h2>
                <p>Un mini-PC compact et économique, parfait pour débuter :</p>
                <p>
                  <ul>
                    <li>
                      Processeur Intel Celeron N4020 dual-core (jusqu'à 2,8 GHz)
                    </li>
                    <li>4 Go de RAM LPDDR4</li>
                    <li>64 Go eMMC</li>
                    <li>Wi-Fi 5, Bluetooth 5.0 et LAN Gigabit</li>
                    <li>Double HDMI 4K</li>
                    <li>
                      <b>Gladys déjà installée et configurée !</b>
                    </li>
                  </ul>
                </p>
                <p>
                  <b>Note de Pierre-Gilles :</b> Le Beelink T5 est l'option
                  idéale pour débuter avec Gladys sans se ruiner. Parfait pour
                  découvrir la domotique avec Gladys sans investir trop au
                  départ.
                </p>
              </div>
            </div>
          )}
          <div className={cx("row", styles.starterKitRow)}>
            <div className={cx("col col--6", styles.flexColumnFirstOnMobile)}>
              <h2 className={cx(styles.plusFeatureTitle)}>
                Beelink mini S12 - Gladys Pré-installée
              </h2>
              <p>Le mini-PC équilibré, un bon rapport qualité/prix :</p>
              <p>
                <ul>
                  <li>Processeur Intel N95 quad-core</li>
                  <li>8 Go de RAM DDR4</li>
                  <li>256 Go SSD</li>
                  <li>Wi-Fi 5, Bluetooth 4.2 et LAN Gigabit</li>
                  <li>Double HDMI 4K</li>
                  <li>
                    <b>Gladys déjà installée et configurée !</b>
                  </li>
                </ul>
              </p>
              <p>
                <b>Note de Pierre-Gilles :</b> Le Beelink mini S12 offre un bon
                équilibre entre performance et prix, avec suffisamment de
                puissance pour faire tourner Gladys et ses intégrations de base.
              </p>
            </div>
            <div className={cx("col col--6", styles.flexColumnSecondOnMobile)}>
              <img
                src={useBaseUrl("/img/starter-kit/beelink_mini_s12.jpg")}
                className={cx(styles.specImage)}
              />
            </div>
          </div>
          <div className={cx("row", styles.starterKitRow)}>
            <div className={cx("col col--6", styles.flexColumnSecondOnMobile)}>
              <img
                src={useBaseUrl("/img/starter-kit/beelink_s13_spec.jpg")}
                className={cx(styles.specImage)}
              />
            </div>
            <div className={cx("col col--6", styles.flexColumnFirstOnMobile)}>
              <h2 className={cx(styles.plusFeatureTitle)}>
                Beelink S13 - Gladys Pré-installée
              </h2>
              <p>
                Le meilleur choix ! Un mini-PC de dernière génération, prêt à
                l'emploi :
              </p>
              <p>
                <ul>
                  <li>
                    Processeur Intel N150 quad-core (Twin Lake) - Dernière
                    génération
                  </li>
                  <li>16 Go de RAM DDR4</li>
                  <li>Disque SSD 500Go + slot M.2 disponible</li>
                  <li>Wi-Fi 6, Bluetooth 5.2 et LAN 2.5G</li>
                  <li>Double HDMI 4K@60Hz</li>
                </ul>
              </p>
              <p>
                <b>Note de Pierre-Gilles :</b> Le Beelink S13 est mon choix
                recommandé ! Il représente le meilleur équilibre entre
                performance, fiabilité et évolutivité. C'est le mini-PC idéal
                pour faire tourner Gladys avec toutes ses intégrations, même les
                plus gourmandes.
              </p>
            </div>
          </div>
          <div className={cx("row", styles.starterKitRow)}>
            <div className={cx("col col--6", styles.flexColumnFirstOnMobile)}>
              <h2 className={cx(styles.plusFeatureTitle)}>
                Formation Gladys officielle
              </h2>
              <p>
                Des heures de vidéos et tutoriels détaillés pour maîtriser
                Gladys de A à Z.
              </p>
              <p>
                Je t'explique comment utiliser toutes les fonctionnalités de
                Gladys : créer des scènes, automatiser ton logement, connecter
                tes appareils, et bien plus encore.
              </p>
              <p>
                Je pars d'un logement vide, et je t'explique tous les choix que
                j'ai faits en termes de matériel et de configuration.
              </p>
              <p>
                Avoir accès à cette base de connaissance, c'est gagner du{" "}
                <b>temps</b> et de <b>l'argent</b> sur ton installation
                domotique.
              </p>
            </div>
            <div className={cx("col col--6", styles.flexColumnSecondOnMobile)}>
              <img
                src={useBaseUrl("/img/starter-kit/formation.png")}
                className={cx(styles.specImage, styles.specImageRight)}
              />
            </div>
          </div>
          <div className={cx("row", styles.starterKitRow)}>
            <div className={cx("col col--6", styles.flexColumnSecondOnMobile)}>
              <img
                src={useBaseUrl("img/plus/mockup-1x.png")}
                srcSet={`${useBaseUrl(
                  "img/plus/mockup-1x.png",
                )} 1x, ${useBaseUrl("img/plus/mockup-2x.png")} 2x`}
                className={cx(styles.specImage, styles.specImageLeft)}
              />
            </div>
            <div className={cx("col col--6", styles.flexColumnFirstOnMobile)}>
              <h2 className={cx(styles.plusFeatureTitle)}>
                6 mois de Gladys Plus offerts
              </h2>
              <p>
                Le kit inclut <b>6 mois de l'abonnement Gladys Plus complet</b>{" "}
                (9,99€/mois, soit près de <b>60€ offerts</b>). C'est le cloud
                européen qui débloque le meilleur de Gladys : accès à distance
                sans ouvrir de port, sauvegardes automatiques, et les
                intégrations premium du quotidien.
              </p>
              <ul>
                <li>Accès à distance chiffré de bout en bout</li>
                <li>Sauvegardes quotidiennes chiffrées, restauration en un clic</li>
                <li>Google Home & Amazon Alexa</li>
                <li>API REST ouverte</li>
                <li>Comptes pour toute la famille</li>
                <li>Streaming caméra à distance (chiffré)</li>
                <li>
                  Modèles d'IA Open-Weight hébergés en France chez Scaleway
                </li>
                <li>Intégration Enedis (suivi de ta consommation électrique)</li>
                <li>
                  Serveur MCP pour brancher tes IA préférées sur ta domotique
                </li>
              </ul>
              <p>
                <b>Hébergé en Europe 🇪🇺</b> : L'infrastructure Gladys Plus et
                l'inférence IA tournent dans des data centers européens. Tes
                données restent chiffrées de bout en bout.
              </p>
              <p>
                Au bout des 6 mois, l'abonnement continue seulement si tu le
                souhaites. Sans engagement, résiliable en un clic.{" "}
                <Link to="/plus">Découvrir Gladys Plus en détail →</Link>
              </p>
            </div>
          </div>
          <div style={{ marginTop: "50px" }}>
            <FAQ data={faqData} />
          </div>
          {/* Section Témoignages */}
          <div
            className="container"
            style={{
              marginTop: "5rem",
              marginBottom: "3rem",
            }}
          >
            <h2
              className={styles.plusFeatureTitle}
              style={{
                textAlign: "center",
                marginBottom: "3rem",
                fontSize: "36px",
              }}
            >
              Ce qu'ils pensent du kit de démarrage
            </h2>
            <div className="row">
              <div
                className="col col--4"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    border: "1px solid #ddd",
                    padding: "25px",
                    borderRadius: "8px",
                    textAlign: "left",
                    flexGrow: 1,
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  <p style={{ fontStyle: "italic", marginBottom: "15px" }}>
                    {
                      "Je suis passé d’un Raspberry Pi au Beelink Mini S12 Pro grâce au Kit de démarrage Gladys et j’en suis très content. J’ai constaté un gain en réactivité et j’ai plus confiance en mon système domotique maintenant, tout ça dans un format compact et silencieux. Et la migration s’est faite en quelques minutes grâce aux sauvegardes Gladys Plus."
                    }
                  </p>
                  <p style={{ fontWeight: "bold", textAlign: "right" }}>
                    - cicoub13
                  </p>
                </div>
              </div>
              <div
                className="col col--4"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    border: "1px solid #ddd",
                    padding: "25px",
                    borderRadius: "8px",
                    textAlign: "left",
                    flexGrow: 1,
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  <p
                    style={{ fontStyle: "italic", marginBottom: "15px" }}
                  >{`"Super offre clairement intéressant pour quelqu'un qui veut se lancer en domotique avec Gladys"`}</p>
                  <p style={{ fontWeight: "bold", textAlign: "right" }}>
                    - McFlyPartages
                  </p>
                </div>
              </div>
              <div
                className="col col--4"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "1.5rem",
                }}
              >
                <div
                  style={{
                    border: "1px solid #ddd",
                    padding: "25px",
                    borderRadius: "8px",
                    textAlign: "left",
                    flexGrow: 1,
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  }}
                >
                  <p
                    style={{ fontStyle: "italic", marginBottom: "15px" }}
                  >{`"Je viens de souscrire un kit de démarrage, content de rejoindre la communauté !"`}</p>
                  <p style={{ fontWeight: "bold", textAlign: "right" }}>
                    - Nagromdark
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Fin Section Témoignages */}

          <div className={cx("row", styles.starterKitRow)}>
            <div className="col col--12">
              <h2 className={cx(styles.plusTooExpensiveTitle)}>
                Pourquoi nos kits avec Gladys pré-installée ?
              </h2>
              <p>
                Les nouveaux kits de démarrage Gladys sont basés sur des mini-PC
                Beelink de qualité, avec <b>Gladys pré-installée</b> ! Fini les
                installations complexes, tu reçois ton kit, tu le branches, tu
                suis le guide de démarrage rapide et tu es prêt à utiliser
                Gladys en quelques minutes.
              </p>

              <p>
                Nous proposons {SHOW_BEELINK_T5 ? "trois" : "deux"} options pour
                s'adapter à tous les besoins :
              </p>
              <ul>
                {SHOW_BEELINK_T5 && (
                  <li>
                    <b>Beelink T5</b> : Un mini-PC compact et économique,
                    parfait pour débuter avec Gladys. Processeur Intel N4020, 4
                    Go de RAM et 64 Go de stockage.
                  </li>
                )}
                <li>
                  <b>Beelink mini S12</b> : Un bon rapport qualité/prix avec un
                  processeur Intel N95, 8 Go de RAM et 256 Go de stockage SSD.
                  Idéal pour les intégrations de base.
                </li>
                <li>
                  <b>Beelink S13</b> ⭐ : <b>Mon choix recommandé !</b> Le
                  meilleur équilibre avec un processeur Intel N150 de dernière
                  génération, 16 Go de RAM et 500 Go de stockage. Parfait pour
                  toutes les intégrations, même les plus gourmandes (Node-RED,
                  AdGuard Home, etc.).
                </li>
              </ul>
              <div className={styles.tableContainer}>
                <table className={styles.priceTable}>
                  <thead>
                    <tr>
                      <th>Caractéristiques</th>
                      {SHOW_BEELINK_T5 && <th>Beelink T5</th>}
                      <th>Beelink mini S12</th>
                      <th>Beelink S13</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Processeur</td>
                      {SHOW_BEELINK_T5 && (
                        <td>Intel Celeron N4020 (jusqu'à 2,8 GHz)</td>
                      )}
                      <td>Intel N95 quad-core</td>
                      <td>Intel Twin Lake-N150 (dernière génération)</td>
                    </tr>
                    <tr>
                      <td>Mémoire RAM</td>
                      {SHOW_BEELINK_T5 && <td>4 Go LPDDR4</td>}
                      <td>8 Go DDR4</td>
                      <td>16 Go DDR4</td>
                    </tr>
                    <tr>
                      <td>Stockage</td>
                      {SHOW_BEELINK_T5 && <td>64 Go eMMC</td>}
                      <td>256 Go SSD</td>
                      <td>500 Go SSD</td>
                    </tr>
                    <tr>
                      <td>WiFi</td>
                      {SHOW_BEELINK_T5 && <td>WiFi 5</td>}
                      <td>WiFi 5</td>
                      <td>WiFi 6</td>
                    </tr>
                    <tr>
                      <td>Bluetooth</td>
                      {SHOW_BEELINK_T5 && <td>Bluetooth 5.0</td>}
                      <td>Bluetooth 4.2</td>
                      <td>Bluetooth 5.2</td>
                    </tr>
                    <tr>
                      <td>Ports HDMI</td>
                      {SHOW_BEELINK_T5 && <td>Double HDMI 4K</td>}
                      <td>Double HDMI 4K</td>
                      <td>Double HDMI 4K@60Hz</td>
                    </tr>
                    <tr>
                      <td>LAN</td>
                      {SHOW_BEELINK_T5 && <td>Gigabit Ethernet (1000 Mbps)</td>}
                      <td>Gigabit Ethernet (1000 Mbps)</td>
                      <td>2.5G Ethernet (2500 Mbps)</td>
                    </tr>
                    <tr>
                      <td>Gladys</td>
                      {SHOW_BEELINK_T5 && (
                        <td>
                          <b>✓ Pré-installée et configurée</b>
                        </td>
                      )}
                      <td>
                        <b>✓ Pré-installée et configurée</b>
                      </td>
                      <td>
                        <b>✓ Pré-installée et configurée</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Formation Gladys</td>
                      {SHOW_BEELINK_T5 && (
                        <td>
                          ✓ Incluse (accès à des tutoriels vidéos et écrits)
                        </td>
                      )}
                      <td>
                        ✓ Incluse (accès à des tutoriels vidéos et écrits)
                      </td>
                      <td>
                        ✓ Incluse (accès à des tutoriels vidéos et écrits)
                      </td>
                    </tr>
                    <tr>
                      <td>Gladys Plus</td>
                      {SHOW_BEELINK_T5 && <td>✓ 6 mois offerts</td>}
                      <td>✓ 6 mois offerts</td>
                      <td>✓ 6 mois offerts</td>
                    </tr>
                    <tr>
                      <td>Support</td>
                      {SHOW_BEELINK_T5 && <td>✓ Assistance personnalisée</td>}
                      <td>✓ Assistance personnalisée</td>
                      <td>✓ Assistance personnalisée</td>
                    </tr>
                    <tr>
                      <td>Prix du kit complet</td>
                      {SHOW_BEELINK_T5 && (
                        <td>
                          {priceT5 && !isUnavailable && (
                            <>
                              <b
                                style={{
                                  fontSize: "1.3em",
                                  color: "var(--ifm-color-primary)",
                                }}
                              >
                                {priceT5} €
                              </b>
                              <br />
                              <small
                                style={{
                                  color: "var(--ifm-color-emphasis-600)",
                                }}
                              >
                                + frais de ports
                              </small>
                            </>
                          )}
                          {isUnavailable && <b>{unavailableMessage}</b>}
                        </td>
                      )}
                      <td>
                        {priceMiniS && !isUnavailable && (
                          <>
                            <b
                              style={{
                                fontSize: "1.3em",
                                color: "var(--ifm-color-primary)",
                              }}
                            >
                              {priceMiniS} €
                            </b>
                            <br />
                            <small
                              style={{ color: "var(--ifm-color-emphasis-600)" }}
                            >
                              + frais de ports
                            </small>
                          </>
                        )}
                        {isUnavailable && <b>{unavailableMessage}</b>}
                      </td>
                      <td>
                        {priceS13 && !isUnavailable && (
                          <>
                            <b
                              style={{
                                fontSize: "1.3em",
                                color: "var(--ifm-color-primary)",
                              }}
                            >
                              {priceS13} €
                            </b>
                            <br />
                            <small
                              style={{ color: "var(--ifm-color-emphasis-600)" }}
                            >
                              + frais de ports
                            </small>
                          </>
                        )}
                        {isUnavailable && <b>{unavailableMessage}</b>}
                      </td>
                    </tr>
                    <tr>
                      <td>Je commande</td>
                      {SHOW_BEELINK_T5 && (
                        <td>
                          <input
                            type="submit"
                            onClick={subscribeT5}
                            value={
                              isBlackFridayActive
                                ? "🎁 Profiter de l'offre"
                                : "Commander le Kit T5"
                            }
                            disabled={isUnavailable || loading || !priceT5}
                            className={cx("button button--primary button--lg")}
                            style={{
                              fontSize: "1.1em",
                              padding: "10px 30px",
                              background: isBlackFridayActive
                                ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                                : undefined,
                              border: "none",
                            }}
                          />
                        </td>
                      )}
                      <td>
                        <input
                          type="submit"
                          onClick={subscribeMiniS}
                          value={
                            isBlackFridayActive
                              ? "🎁 Profiter de l'offre"
                              : "Commander le Kit mini S12"
                          }
                          disabled={isUnavailable || loading || !priceMiniS}
                          className={cx("button button--primary button--lg")}
                          style={{
                            fontSize: "1.1em",
                            padding: "10px 30px",
                            background: isBlackFridayActive
                              ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                              : undefined,
                            border: "none",
                          }}
                        />
                      </td>
                      <td>
                        <input
                          type="submit"
                          onClick={subscribeS13}
                          value={
                            isBlackFridayActive
                              ? "🎁 Profiter de l'offre"
                              : "Commander le Kit S13"
                          }
                          disabled={isUnavailable || loading || !priceS13}
                          className={cx("button button--primary button--lg")}
                          style={{
                            fontSize: "1.1em",
                            padding: "10px 30px",
                            background: isBlackFridayActive
                              ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                              : undefined,
                            border: "none",
                          }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

function PlusParent() {
  return (
    <Layout
      title="Kit de démarrage Gladys clé en main"
      description="Mini-PC Beelink mini S12 ou S13 avec Gladys déjà installée + formation officielle + 6 mois de Gladys Plus offerts. Branchez et c'est parti !"
    >
      <Plus />
    </Layout>
  );
}

export default PlusParent;
