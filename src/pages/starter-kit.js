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
    title: <>Est-ce que Gladys est installée sur le Beelink S13 ?</>,
    description: (
      <>
        Oui ! Le Beelink S13 arrive chez toi avec Gladys déjà installée et
        configurée. Tu n'as qu'à le brancher, suivre le guide de démarrage
        rapide, et tu es prêt à utiliser Gladys. Plus besoin d'installer un OS
        ou de configurer quoi que ce soit, tout est déjà fait ! Si tu as la
        moindre question, je suis toujours disponible pour t'aider 😄
      </>
    ),
  },
  {
    title: <>Satisfait ou remboursé ?</>,
    description: (
      <>
        Si jamais ce kit ne te donnait pas satisfaction, tu peux retourner le
        Beelink S13 sous 14 jours. Comme Gladys est déjà installée, tu peux tester
        le système complet dès réception. Si tu as la moindre question, n'hésite
        pas à me contacter, je suis très disponible et toujours prêt à aider.
      </>
    ),
  },
  {
    title: <>Pourquoi proposer ce kit avec Gladys pré-installée ?</>,
    description: (
      <>
        Je propose ce kit pour démocratiser l'accès à Gladys en rendant la
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
                <h1 className={styles.plusTitle}>Kit de démarrage Gladys</h1>
                <p>
                  Un mini-PC surpuissant avec <b>Gladys pré-installée</b>
                  <br />+ la formation officielle Gladys
                  <br />+ 6 mois de Gladys Plus offerts
                  <br />+ je t'aide si tu as des questions
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
                  Le nouveau kit de démarrage Gladys :
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
                    {/* Beelink S13 - Main and only option */}
                    <div
                      className="col col--6"
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
                            <b>Gladys déjà installée</b>. Branchez, configurez
                            et c'est parti !
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
                            <li>✓ Double HDMI 4K@60Hz</li>
                          </ul>
                          <p
                            style={{
                              fontSize: "36px",
                              fontWeight: "bold",
                              margin: "20px 0",
                              color: "var(--ifm-color-primary)",
                            }}
                          >
                            {priceS13 ? priceS13 + "€" : "..."}
                          </p>
                        </div>
                        <button
                          onClick={subscribeS13}
                          disabled={loading || !priceS13}
                          className={cx(
                            "button button--primary button--lg",
                            styles.starterKitInputButton
                          )}
                          style={{
                            width: "100%",
                            marginTop: "20px",
                            fontSize: "1.2rem",
                            padding: "15px",
                          }}
                        >
                          Commander le Kit S13
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
              <p>Un mini-PC de dernière génération, prêt à l'emploi :</p>
              <p>
                <ul>
                  <li>
                    Processeur Intel N150 (Twin Lake) - Dernière génération
                  </li>
                  <li>16 Go de RAM DDR4 3200MHz</li>
                  <li>Disque SSD M.2 SATA3 500Go + slot M.2 PCIe disponible</li>
                  <li>Wi-Fi 6, Bluetooth 5.2 et LAN Gigabit</li>
                  <li>Double HDMI 4K@60Hz</li>
                  <li>
                    <b>Gladys déjà installée et configurée !</b>
                  </li>
                </ul>
              </p>
              <p>
                <b>Note de Pierre-Gilles :</b> Le Beelink S13 représente le top
                de la gamme des mini-PC pour la domotique. Avec Gladys
                pré-installée, tu gagnes un temps précieux : plus besoin
                d'installer Ubuntu ou de configurer quoi que ce soit. Tu le
                branches, tu suis le guide de démarrage rapide, et c'est parti !
              </p>
            </div>
          </div>
          <div className={cx("row", styles.starterKitRow)}>
            <div className={cx("col col--6", styles.flexColumnFirstOnMobile)}>
              <h2 className={cx(styles.plusFeatureTitle)}>
                Formation Gladys officielle
              </h2>
              <p>
                Des heures de vidéos et tutoriels détaillés pour maîtriser Gladys
                de A à Z.
              </p>
              <p>
                Je t'explique comment utiliser toutes les fonctionnalités de
                Gladys : créer des scènes, automatiser ton logement, connecter tes
                appareils, et bien plus encore.
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
                  "img/plus/mockup-1x.png"
                )} 1x, ${useBaseUrl("img/plus/mockup-2x.png")} 2x`}
                className={cx(styles.specImage, styles.specImageLeft)}
              />
            </div>
            <div className={cx("col col--6", styles.flexColumnFirstOnMobile)}>
              <h2 className={cx(styles.plusFeatureTitle)}>
                6 mois de Gladys Plus offerts
              </h2>
              <p>Profite du meilleur de Gladys Plus pendant 6 mois !</p>
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
                Pourquoi le Beelink S13 avec Gladys pré-installée ?
              </h2>
              <p>
                Le nouveau kit de démarrage Gladys est basé sur le{" "}
                <b>Beelink S13</b>, un mini-PC de dernière génération qui offre
                des performances exceptionnelles pour la domotique et bien plus
                encore.
              </p>

              <p>
                <b>La grande nouveauté :</b> Gladys est maintenant{" "}
                <b>pré-installée</b> sur le mini-PC ! Fini les installations
                complexes, tu reçois ton kit, tu le branches, tu suis le guide
                de démarrage rapide et tu es prêt à utiliser Gladys en quelques
                minutes.
              </p>
              <p>
                Le processeur Intel N150 (Twin Lake) de dernière génération
                offre une puissance largement suffisante pour faire tourner
                Gladys de manière ultra-fluide, tout en laissant de la marge
                pour des applications supplémentaires (Node-RED, AdGuard Home,
                etc.). Avec 16 Go de RAM et 500 Go de stockage, c'est une
                machine qui te servira pendant de nombreuses années.
              </p>
              <div className={styles.tableContainer}>
                <table className={styles.priceTable}>
                  <thead>
                    <tr>
                      <th>Caractéristiques</th>
                      <th>Beelink S13 (Kit de démarrage)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Processeur</td>
                      <td>Intel Twin Lake-N150 (dernière génération)</td>
                    </tr>
                    <tr>
                      <td>Mémoire RAM</td>
                      <td>16 Go DDR4 3200MHz</td>
                    </tr>
                    <tr>
                      <td>Stockage</td>
                      <td>500 Go M.2 SATA3 + slot M.2 PCIe disponible</td>
                    </tr>
                    <tr>
                      <td>WiFi</td>
                      <td>WiFi 6</td>
                    </tr>
                    <tr>
                      <td>Bluetooth</td>
                      <td>Bluetooth 5.2</td>
                    </tr>
                    <tr>
                      <td>Ports HDMI</td>
                      <td>Double HDMI 4K@60Hz</td>
                    </tr>
                    <tr>
                      <td>LAN</td>
                      <td>Gigabit Ethernet (1000 Mbps)</td>
                    </tr>
                    <tr>
                      <td>Gladys</td>
                      <td>
                        <b>✓ Pré-installée et configurée</b>
                      </td>
                    </tr>
                    <tr>
                      <td>Formation Gladys</td>
                      <td>✓ Incluse (accès à vie)</td>
                    </tr>
                    <tr>
                      <td>Gladys Plus</td>
                      <td>✓ 6 mois offerts</td>
                    </tr>
                    <tr>
                      <td>Support</td>
                      <td>✓ Assistance personnalisée</td>
                    </tr>
                    <tr>
                      <td>Prix du kit complet</td>
                      <td>
                        {priceS13 && !isUnavailable && (
                          <b
                            style={{
                              fontSize: "1.3em",
                              color: "var(--ifm-color-primary)",
                            }}
                          >
                            {priceS13} €
                          </b>
                        )}
                        {isUnavailable && <b>{unavailableMessage}</b>}
                      </td>
                    </tr>
                    <tr>
                      <td>Je commande</td>
                      <td>
                        <input
                          type="submit"
                          onClick={subscribeS13}
                          value="Commander le Kit S13"
                          disabled={isUnavailable || loading || !priceS13}
                          className={cx("button button--primary button--lg")}
                          style={{ fontSize: "1.1em", padding: "10px 30px" }}
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
