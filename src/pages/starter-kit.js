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
            maxWidth: "75rem",
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
                <div>
                  {false && (
                    <div className={styles.blackFridayBanner}>
                      Offre limitée Black Friday !
                    </div>
                  )}
                  <span>
                    {!isUnavailable && (
                      <label
                        style={{ display: "block" }}
                        className={cx({
                          [styles.loadingAnimation]: loading,
                        })}
                      >
                        <span style={{ fontSize: "30px", fontWeight: "bold" }}>
                          À partir de {priceCheaperKit}€
                        </span>
                      </label>
                    )}

                    {isUnavailable && (
                      <label
                        style={{ display: "block" }}
                        className={cx({
                          [styles.loadingAnimation]: loading,
                        })}
                      >
                        <span style={{ fontSize: "30px", fontWeight: "bold" }}>
                          {unavailableMessage}
                        </span>
                      </label>
                    )}

                    <label
                      style={{ display: "block", fontSize: "14px" }}
                    ></label>

                    <input
                      type="submit"
                      onClick={subscribe}
                      value={`Commander maintenant le S12 Pro ! (${price}€)`}
                      disabled={isUnavailable || loading}
                      className={cx(
                        "button button--primary",
                        styles.starterKitInputButton
                      )}
                    />

                    {false && (
                      <div
                        className={cx(styles.progressContainer, {
                          [styles.loadingAnimation]: loading,
                        })}
                      >
                        <div className={styles.progressBarBackground}>
                          <div
                            className={styles.progressBar}
                            style={{ width: `${progressPercentage}%` }}
                          />
                        </div>
                        <p
                          className={cx(styles.kitsRemainingText, {
                            [styles.pulse]: isLowStock, // Ajoute l'effet "pulse" si le stock est faible
                          })}
                        >
                          🚨 <b>{kitsRemaining} kits restants à ce prix</b>
                        </p>
                      </div>
                    )}
                    {timeLeft && (
                      <p>
                        Temps restant:{" "}
                        {new Intl.DurationFormat("fr", {
                          style: "short",
                        }).format(timeLeft)}
                      </p>
                    )}
                  </span>
                </div>
              </form>
            </div>
            <div className="col col--6">
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
          <div className={cx("row", styles.starterKitRow)}>
            <div className="col col--12">
              <h2 className={cx(styles.plusTooExpensiveTitle)}>
                Beelink mini S12 ou Pro ?
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
              <div className={styles.tableContainer}>
                <table className={styles.priceTable}>
                  <thead>
                    <tr>
                      <th>Caractéristiques</th>
                      <th>Beelink Mini S12</th>
                      <th>Beelink Mini S12 Pro</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Processeur</td>
                      <td>Alder Lake-N95</td>
                      <td>Alder Lake-N N100</td>
                    </tr>
                    <tr>
                      <td>Mémoire RAM</td>
                      <td>8 Go DDR4</td>
                      <td>16 Go DDR4</td>
                    </tr>
                    <tr>
                      <td>Stockage</td>
                      <td>256 Go M.2 SSD 2280</td>
                      <td>500 Go M.2 SSD 2280</td>
                    </tr>
                    <tr>
                      <td>WiFi</td>
                      <td>WiFi 5</td>
                      <td>WiFi 6</td>
                    </tr>
                    <tr>
                      <td>Bluetooth</td>
                      <td>Bluetooth 5.0</td>
                      <td>Bluetooth 5.2</td>
                    </tr>
                    <tr>
                      <td>Ports HDMI</td>
                      <td>Double HDMI</td>
                      <td>Double HDMI</td>
                    </tr>
                    <tr>
                      <td>LAN</td>
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
