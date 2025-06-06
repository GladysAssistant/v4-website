import React, { useState, useEffect } from "react";
import Layout from "@theme/Layout";
import Head from "@docusaurus/Head";
import cx from "classnames";

import { useColorMode } from "@docusaurus/theme-common";

import useBaseUrl from "@docusaurus/useBaseUrl";
import useIsBrowser from "@docusaurus/useIsBrowser";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import styles from "./styles.module.css";

import { translate } from "@docusaurus/Translate";

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
    title: <>Est-ce que Gladys est installée sur le Beelink ?</>,
    description: (
      <>
        Non, le Beelink vient directement de l'usine. Je t'expliquerai dans la
        formation comment installer un OS (Ubuntu) et Gladys sur ce mini-PC. Si
        tu as la moindre question, je suis disponible pour un appel pour
        t'aider.
      </>
    ),
  },
  {
    title: <>Satisfait ou remboursé ?</>,
    description: (
      <>
        Si jamais ce kit ne te donnait pas satisfaction, tu peux retourner le
        Beelink sous 1 mois. Si tu as la moindre question lors de l'installation
        n'hésite pas à me contacter, je suis très disponible et toujours prêt à
        aider.
      </>
    ),
  },
  {
    title: <>Pourquoi proposer ce kit ?</>,
    description: (
      <>
        Je propose ce kit pour démocratiser l'accès à Gladys en rendant la
        première marche la plus basse possible. La domotique est une jungle, et
        parfois, il est dur de s'y mettre !
      </>
    ),
  },
  {
    title: <>Est-ce que l'abonnement Gladys Plus continu ensuite ?</>,
    description: (
      <>
        Si tu es satisfait et que tu continues d'utiliser Gladys, l'abonnement
        continuera au bout d'un an. Néanmoins, Gladys Plus est totalement sans
        engagement et tu peux annuler l'abonnement en un clic s'il ne te donne
        pas satisfaction.
      </>
    ),
  },
];

const targetDate = new Date(1733104800000);

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
  const [couponCode, setCouponCode] = useState("STARTERKIT");
  const [cheaperKitCouponCode, setCheaperKitCouponCode] = useState(null);
  const [priceS13, setPriceS13] = useState(null);
  const [s13CouponCode, setS13CouponCode] = useState(null);
  const [loading, setLoading] = useState(true);

  const scrollTopTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  async function fetchData() {
    const response = await fetch(
      "https://black-friday-discount.gladysassistant.workers.dev/"
    );
    const data = await response.json();
    if (data.unavailable === true) {
      setIsUnavailable(true);
      setUnavailableMessage(data.message);
    } else {
      setKitsRemaining(data.remaining);
      setPrice(data.price);
      setPriceCheaperKit(data.cheaper_mini_pc.price);
      setCouponCode(data.validCoupon);
      setCheaperKitCouponCode(data.cheaper_mini_pc.validCoupon);
      if (data.beelink_s13) {
        setPriceS13(data.beelink_s13.price);
        setS13CouponCode(data.beelink_s13.validCoupon);
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
        10
      ) === 1;
  }

  const subscribe = (e) => {
    e.preventDefault();
    const locale = isFr() ? "fr" : "en";
    if (isBrowser) {
      const openStripe = () => {
        window.location.href = `https://buy.stripe.com/fZe28D9V0fWi848005?prefilled_promo_code=${couponCode}`;
      };
      if (window.sa_loaded && !dntActive) {
        sa_event("starter_kit_click_buy_mini_s12_pro", openStripe);
      } else {
        openStripe();
      }
    }
  };

  const subscribeCheaperPc = (e) => {
    e.preventDefault();
    const locale = isFr() ? "fr" : "en";
    if (isBrowser) {
      const openStripe = () => {
        window.location.href = `https://buy.stripe.com/6oEcNhaZ45hEbgk28f?prefilled_promo_code=${cheaperKitCouponCode}`;
      };
      if (window.sa_loaded && !dntActive) {
        sa_event("starter_kit_click_buy_mini_s12", openStripe);
      } else {
        openStripe();
      }
    }
  };

  const subscribeS13 = (e) => {
    e.preventDefault();
    if (isBrowser) {
      const openStripe = () => {
        window.location.href = `https://buy.stripe.com/5kQ9AUb184vI1N28f4fjG09?prefilled_promo_code=${s13CouponCode}`;
      };
      if (window.sa_loaded && !dntActive) {
        sa_event("starter_kit_click_buy_mini_s13", openStripe);
      } else {
        openStripe();
      }
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
                <h1 className={styles.plusTitle}>
                  Kit de démarrage officiel Gladys
                </h1>
                <p>
                  Un mini-PC surpuissant
                  <br />+ la formation officielle Gladys
                  <br />+ un an de Gladys Plus
                </p>
                <p>
                  Livraison <b>GRATUITE</b>
                  <br />
                  <small>(Retour sous 1 mois si insatisfait)</small>
                </p>
              </form>
            </div>
            <div className="col col--6 docusaurus-hide-md">
              <img
                src={useBaseUrl("img/starter-kit/beelink_without_bg.png")}
                srcSet={`${useBaseUrl(
                  "img/starter-kit/beelink_without_bg.png"
                )} 1x, ${useBaseUrl(
                  "img/starter-kit/beelink_without_bg.png"
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
                  Choisissez votre kit de démarrage :
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
                  <div className="row">
                    {" "}
                    {/* Using Infima grid for three columns */}
                    {/* Option 1: Beelink Mini S12 */}
                    <div
                      className="col col--4"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <div
                        style={{
                          border: "1px solid #eee",
                          padding: "20px",
                          paddingTop: "40px",
                          borderRadius: "8px",
                          textAlign: "center",
                          marginBottom: "15px",
                          flexGrow: 1,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <h3>Beelink Mini S12</h3>
                          <p style={{ minHeight: "60px", fontSize: "0.9em" }}>
                            L'essentiel pour bien démarrer votre domotique et
                            découvrir Gladys.
                          </p>
                          {priceCheaperKit && (
                            <p
                              style={{
                                fontSize: "30px",
                                fontWeight: "bold",
                                margin: "15px 0",
                                color: "var(--ifm-color-primary)",
                              }}
                            >
                              {priceCheaperKit}€
                            </p>
                          )}
                        </div>
                        <button
                          onClick={subscribeCheaperPc}
                          disabled={loading || !priceCheaperKit}
                          className={cx(
                            "button button--outline button--primary button--lg",
                            styles.starterKitInputButton
                          )}
                          style={{
                            width: "100%",
                            marginTop: "15px",
                            fontSize: "1rem",
                          }}
                        >
                          Commander le S12
                        </button>
                      </div>
                    </div>
                    {/* Option 2: Beelink Mini S12 Pro */}
                    <div
                      className="col col--4"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <div
                        style={{
                          border: "2px solid var(--ifm-color-primary)",
                          padding: "20px",
                          paddingTop: "40px",
                          borderRadius: "8px",
                          textAlign: "center",
                          marginBottom: "15px",
                          position: "relative",
                          flexGrow: 1,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            top: "-15px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            backgroundColor: "var(--ifm-color-primary)",
                            color: "white",
                            padding: "5px 15px",
                            borderRadius: "20px",
                            fontSize: "0.9em",
                            fontWeight: "bold",
                          }}
                        >
                          Recommandé
                        </span>
                        <div>
                          <h3>Beelink Mini S12 Pro</h3>
                          <p style={{ minHeight: "60px", fontSize: "0.9em" }}>
                            Pour une expérience ultra-fluide, plus de puissance
                            et de stockage.
                          </p>
                          {price && (
                            <p
                              style={{
                                fontSize: "30px",
                                fontWeight: "bold",
                                margin: "15px 0",
                                color: "var(--ifm-color-primary)",
                              }}
                            >
                              {price}€
                            </p>
                          )}
                        </div>
                        <button
                          onClick={subscribe}
                          disabled={loading || !price}
                          className={cx(
                            "button button--primary button--lg",
                            styles.starterKitInputButton
                          )}
                          style={{
                            width: "100%",
                            marginTop: "15px",
                            fontSize: "1rem",
                          }}
                        >
                          Commander le S12 Pro
                        </button>
                      </div>
                    </div>
                    {/* Option 3: Beelink S13 */}
                    {priceS13 && (
                      <div
                        className="col col--4"
                        style={{ display: "flex", flexDirection: "column" }}
                      >
                        <div
                          style={{
                            border: "1px solid #ddd",
                            padding: "20px",
                            paddingTop: "40px",
                            borderRadius: "8px",
                            textAlign: "center",
                            marginBottom: "15px",
                            position: "relative",
                            flexGrow: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            backgroundColor: "var(--ifm-color-primary-darkest)",
                            color: "white",
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              top: "-15px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              backgroundColor: "var(--ifm-color-warning)",
                              color: "black",
                              padding: "5px 15px",
                              borderRadius: "20px",
                              fontSize: "0.9em",
                              fontWeight: "bold",
                            }}
                          >
                            Perf. Max
                          </span>
                          <div>
                            <h3 style={{ color: "white" }}>Beelink S13</h3>
                            <p style={{ minHeight: "60px", fontSize: "0.9em" }}>
                              Le summum de la performance pour votre domotique
                              et bien plus encore.
                            </p>
                            <p
                              style={{
                                fontSize: "30px",
                                fontWeight: "bold",
                                margin: "15px 0",
                                color: "var(--ifm-color-warning)",
                              }}
                            >
                              {priceS13}€
                            </p>
                          </div>
                          <button
                            onClick={subscribeS13}
                            disabled={loading || !priceS13}
                            className={cx(
                              "button button--warning button--lg",
                              styles.starterKitInputButton
                            )}
                            style={{
                              width: "100%",
                              marginTop: "15px",
                              fontSize: "1rem",
                            }}
                          >
                            Commander le S13
                          </button>
                        </div>
                      </div>
                    )}
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
          <div className={cx("row", styles.starterKitRow)}>
            <div className={cx("col col--6", styles.flexColumnSecondOnMobile)}>
              <img
                src={useBaseUrl("/img/starter-kit/specs.jpg")}
                className={cx(styles.specImage)}
              />
            </div>
            <div className={cx("col col--6", styles.flexColumnFirstOnMobile)}>
              <h2 className={cx(styles.plusFeatureTitle)}>
                Beelink mini S12 Pro
              </h2>
              <p>Un mini-PC surpuissant, à faible consommation :</p>
              <p>
                <ul>
                  <li>Processeur Intel N100 Quad-Core à basse consommation</li>
                  <li>16 Go de RAM DDR4.</li>
                  <li>Disque SSD NVMe M.2 500Go</li>
                  <li>Wi-Fi 6, Bluetooth 5.2 et LAN 1000Mbps</li>
                  <li>Double HDMI</li>
                </ul>
              </p>
              <p>
                <b>Note de Pierre-Gilles :</b> Je fais tourner ce mini-PC chez
                moi, et je confirme que c'est une bête de course. Le CPU N100 et
                le SSD NVMe font la différence, c'est simplement le jour et la
                nuit comparé à un Pi par exemple.
              </p>
            </div>
          </div>
          <div className={cx("row", styles.starterKitRow)}>
            <div className={cx("col col--6", styles.flexColumnFirstOnMobile)}>
              <h2 className={cx(styles.plusFeatureTitle)}>
                Formation Gladys officielle
              </h2>
              <p>
                Des heures de contenus vidéos et écrits où je t'explique comment
                j'ai connecté mon logement de A à Z.
              </p>
              <p>
                Je pars d'un logement vide, et je t'explique tous les choix que
                j'ai faits en termes de matériel.
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
                  "img/plus/mockup-1x.png"
                )} 1x, ${useBaseUrl("img/plus/mockup-2x.png")} 2x`}
                className={cx(styles.specImage, styles.specImageLeft)}
              />
            </div>
            <div className={cx("col col--6", styles.flexColumnFirstOnMobile)}>
              <h2 className={cx(styles.plusFeatureTitle)}>
                Un an de Gladys Plus
              </h2>
              <p>Profite du meilleur de Gladys Plus pendant 1 an !</p>
              <p>
                <ul>
                  <li>Accès à distance chiffré de bout en bout</li>
                  <li>Sauvegarde quotidienne</li>
                  <li>Intégration Google Home/Alexa</li>
                  <li>API HTTP ouverte</li>
                  <li>Streaming de caméra à distance (chiffré)</li>
                  <li>Intégration Enedis</li>
                  <li>Parle avec l'IA dans notre intégration ChatGPT</li>
                </ul>
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
                      "Une très bonne idée ce kit pour ceux qui n'y comprennent rien... c'est parfois juste ce qui manque pour sauter le pas. Une fois qu'on y a gouté..."
                    }
                  </p>
                  <p style={{ fontWeight: "bold", textAlign: "right" }}>
                    - tiboys
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
                  >{`"Bonjour tout le monde, je viens de souscrire un kit de démarrage, content de rejoindre la communauté !"`}</p>
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
                Quel kit Beelink choisir : S12, S12 Pro ou S13 ?
              </h2>
              <p>
                Je comprends que certains puissent trouver le kit un peu cher.
                C'est pourquoi j'ai décidé de lancer une version plus accessible
                à {priceCheaperKit} €, équipée d'un mini-PC moins puissant mais
                tout à fait adapté pour commencer.
              </p>

              <p>
                Si vous avez le budget, je recommande vivement le Beelink Mini
                S12 Pro. Son processeur N100 est non seulement plus performant,
                mais également très économe en énergie. Avec 16 Go de RAM et un
                SSD de 500 Go, il garantit une expérience fluide et durable.
              </p>

              <p>
                Cela dit, pour débuter, le Beelink Mini S12 reste une très bonne
                option ! 😊
              </p>
              <p>
                Si vous recherchez le top de la performance, que ce soit pour
                une utilisation intensive de Gladys, des applications
                supplémentaires (Node-RED, AdGuard Home, etc.) ou simplement
                pour avoir une machine qui durera de nombreuses années sans
                jamais ralentir, le <strong>Beelink S13</strong> est fait pour
                vous. Son processeur N150 plus puissant offre une marge de
                manœuvre confortable pour tous vos projets.
              </p>
              <div className={styles.tableContainer}>
                <table className={styles.priceTable}>
                  <thead>
                    <tr>
                      <th>Caractéristiques</th>
                      <th>Beelink Mini S12</th>
                      <th>Beelink Mini S12 Pro</th>
                      <th>Beelink S13</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Processeur</td>
                      <td>Alder Lake-N95</td>
                      <td>Alder Lake-N N100</td>
                      <td>Twin Lake-N150</td>
                    </tr>
                    <tr>
                      <td>Mémoire RAM</td>
                      <td>8 Go DDR4</td>
                      <td>16 Go DDR4</td>
                      <td>16 Go DDR4</td>
                    </tr>
                    <tr>
                      <td>Stockage</td>
                      <td>256 Go M.2 SSD 2280</td>
                      <td>500 Go M.2 SSD 2280</td>
                      <td>500 Go M.2 SSD 2280</td>
                    </tr>
                    <tr>
                      <td>WiFi</td>
                      <td>WiFi 5</td>
                      <td>WiFi 6</td>
                      <td>WiFi 6</td>
                    </tr>
                    <tr>
                      <td>Bluetooth</td>
                      <td>Bluetooth 5.0</td>
                      <td>Bluetooth 5.2</td>
                      <td>Bluetooth 5.2</td>
                    </tr>
                    <tr>
                      <td>Ports HDMI</td>
                      <td>Double HDMI</td>
                      <td>Double HDMI</td>
                      <td>Double HDMI</td>
                    </tr>
                    <tr>
                      <td>LAN</td>
                      <td>1000 Mbps</td>
                      <td>1000 Mbps</td>
                      <td>1000 Mbps</td>
                    </tr>
                    <tr>
                      <td>Prix du starter kit</td>
                      <td>
                        {!isUnavailable && <b>{priceCheaperKit} €</b>}
                        {isUnavailable && <b>{unavailableMessage}</b>}
                      </td>
                      <td>
                        {!isUnavailable && <b>{price} €</b>}
                        {isUnavailable && <b>{unavailableMessage}</b>}
                      </td>
                      <td>
                        {priceS13 && !isUnavailable && <b>{priceS13} €</b>}
                        {isUnavailable && <b>{unavailableMessage}</b>}
                      </td>
                    </tr>
                    <tr>
                      <td>Je commande</td>
                      <td>
                        <input
                          type="submit"
                          onClick={subscribeCheaperPc}
                          value="Commander S12"
                          disabled={isUnavailable || loading}
                          className={cx("button button--primary")}
                        />
                      </td>
                      <td>
                        <input
                          type="submit"
                          onClick={subscribe}
                          value="Commander S12 Pro"
                          disabled={isUnavailable || loading}
                          className={cx("button button--primary")}
                        />
                      </td>
                      <td>
                        <input
                          type="submit"
                          onClick={subscribeS13}
                          value="Commander S13"
                          disabled={isUnavailable || loading || !priceS13}
                          className={cx("button button--warning")}
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
      title="Kit de démarrage officiel"
      description="Le meilleur matériel pour commencer sur Gladys + la formation officielle + un an de Gladys Plus"
    >
      <Plus />
    </Layout>
  );
}

export default PlusParent;
