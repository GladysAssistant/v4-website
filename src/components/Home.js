import React, { useState, useEffect } from "react";
import classnames from "classnames";
import styles from "./homeStyles.module.css";
import Link from "@docusaurus/Link";
// import Image from "@theme/IdealImage";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Integration } from "./Integration";
import YoutubeEmbedVideo from "./YoutubeEmbedVideo";
import HoverVideoPlayer from "react-hover-video-player";
import { TestimonialHomeSection } from "./Testimonial";
import PlayImage from "./play.svg";
import SubcribeNewsletter from "./home/SubcribeNewsletter";

import testimonialFr from "./testimonials/testimonial.fr.json";
import testimonialEn from "./testimonials/testimonial.en.json";

import Translate, { translate } from "@docusaurus/Translate";
import { BLACK_FRIDAY_CONFIG } from "../config/blackFriday";

const COMPATIBILITIES = [
  [
    { title: "Zigbee", imgSrc: "zigbee2mqtt.jpg", docKey: "zigbee2mqtt" },
    { title: "Matter", imgSrc: "matter.jpg", docKey: "matter" },
    { title: "MQTT", imgSrc: "mqtt.jpg", docKey: "mqtt" },
    { title: "Tuya", imgSrc: "tuya.jpg", docKey: "tuya" },
  ],
  [
    { title: "Shelly", imgSrc: "shelly.jpg", docKey: "shelly" },
    { title: "Sonos", imgSrc: "sonos.jpg", docKey: "sonos" },
    { title: "Somfy", imgSrc: "somfy.jpg", docKey: "somfy-tahoma" },
    { title: "Camera", imgSrc: "rtsp-camera.jpg", docKey: "camera" },
  ],
];

const testimonials = {
  fr: testimonialFr,
  en: testimonialEn,
};

const FAQQuestions = {
  fr: [
    {
      title: <>Gladys est-elle vraiment gratuite ?</>,
      response: (
        <>
          <b>Oui, 100% gratuite et open-source !</b> Gladys Assistant est un
          logiciel libre que vous pouvez installer{" "}
          <Link href="/fr/docs/installation/docker/#lancer-un-container-gladys-assistant">
            en une seule commande Docker
          </Link>
          . Aucun abonnement requis pour utiliser Gladys, aucune limitation, aucune
          carte bancaire demandée.
          <br />
          <br />
          Vous pouvez l'installer sur n'importe quelle machine Linux : mini-PC,
          NAS Synology, Raspberry Pi, serveur, ou même un vieux PC. Si Docker
          tourne dessus, Gladys tourne dessus ! 🚀
        </>
      ),
    },
    {
      title: <>Est-ce compliqué à installer ?</>,
      response: (
        <>
          <b>Cela demande un peu de technique, mais c'est guidé.</b> Il faut
          d'abord préparer une machine Linux (Ubuntu Server, par exemple), puis
          lancer Gladys via Docker. Notre documentation vous accompagne pas à
          pas, avec des captures d'écran et des vidéos.
          <br />
          <br />
          <b>Pour aller plus vite :</b> le{" "}
          <Link href="/fr/starter-kit/">kit de démarrage</Link> arrive avec Gladys
          déjà installée. Vous branchez, vous suivez le guide, et vous pouvez
          vous concentrer sur votre maison connectée.
        </>
      ),
    },
    {
      title: <>Mes données sont-elles vraiment privées ?</>,
      response: (
        <>
          <b>Oui, par conception.</b> Gladys tourne chez vous, sur votre machine.
          Vos données domotiques (capteurs, scènes, historiques) restent sur
          votre réseau local.
          <br />
          <br />
          Pas de cloud obligatoire, pas de tracking, pas de revente de données.
          Des services optionnels comme{" "}
          <a href="/fr/plus">Gladys Plus</a> existent (accès à distance, IA…),
          mais le cœur de Gladys reste auto-hébergé. 🔒
        </>
      ),
    },
    {
      title: <>Gladys fonctionne-t-elle avec mes appareils ?</>,
      response: (
        <>
          <b>Très probablement !</b> Gladys supporte{" "}
          <Link href="/fr/docs/integrations/">des milliers d'appareils</Link> via
          les protocoles ouverts Zigbee, Matter et MQTT, ainsi que des
          intégrations dédiées (Shelly, Sonos, Tuya, caméras RTSP, et bien
          d'autres).
          <br />
          <br />
          Votre appareil n'est pas encore listé ? Consultez notre{" "}
          <Link href="/fr/docs/integrations/">
            vision des intégrations
          </Link>{" "}
          : Matterbridge couvre de nombreux équipements legacy, et notre{" "}
          <a href="https://community.gladysassistant.com/t/lusine-a-plugins-matterbridge-rendez-nimporte-quel-appareil-compatible-avec-gladys/10234">
            usine à plugins IA
          </a>{" "}
          peut en développer de nouveaux automatiquement. Vous pouvez aussi{" "}
          <a href="https://community.gladysassistant.com/">
            en discuter sur le forum
          </a>
          .
        </>
      ),
    },
    {
      title: <>Puis-je accéder à Gladys depuis l'extérieur ?</>,
      response: (
        <>
          <b>Oui, de plusieurs façons :</b>
          <br />
          <br />
          <b>Option 1 (recommandée) :</b> <a href="/fr/plus">Gladys Plus</a>,
          notre service optionnel qui vous donne un accès sécurisé (chiffré de
          bout en bout) depuis n'importe où. Fonctionne comme une app sur iOS et
          Android.
          <br />
          <br />
          <b>Option 2 (pour les experts) :</b> Configurez votre propre VPN ou
          reverse proxy. Gladys reste 100% gratuite, mais cela demande des
          compétences techniques.
        </>
      ),
    },
  ],
  en: [
    {
      title: <>Is Gladys really free?</>,
      response: (
        <>
          <b>Yes, 100% free and open-source!</b> Gladys Assistant is free
          software you can install with{" "}
          <Link href="/docs/installation/docker/#start-gladys">
            a single Docker command
          </Link>
          . No subscription is required to use Gladys, no limitations, no credit
          card needed.
          <br />
          <br />
          You can install it on any Linux machine: mini-PC, Synology NAS,
          Raspberry Pi, server, or even an old computer. If Docker runs on it,
          Gladys runs on it! 🚀
        </>
      ),
    },
    {
      title: <>Is it hard to install?</>,
      response: (
        <>
          <b>It takes some technical steps, but we guide you through them.</b> You
          first need a Linux machine (Ubuntu Server, for example), then you run
          Gladys via Docker. Our documentation walks you through each step with
          screenshots and videos.
          <br />
          <br />
          <b>Want a faster start?</b> The{" "}
          <Link href="/starter-kit/">starter kit</Link> (France) ships with Gladys
          pre-installed. Plug it in, follow the guide, and focus on your smart
          home.
        </>
      ),
    },
    {
      title: <>Is my data really private?</>,
      response: (
        <>
          <b>Yes, by design.</b> Gladys runs at home, on your machine. Your
          smart home data (sensors, scenes, history) stays on your local
          network.
          <br />
          <br />
          No mandatory cloud, no tracking, no data selling. Optional services
          like <a href="/plus">Gladys Plus</a> exist (remote access, AI…), but
          the core of Gladys remains self-hosted. 🔒
        </>
      ),
    },
    {
      title: <>Does Gladys work with my devices?</>,
      response: (
        <>
          <b>Very likely!</b> Gladys supports{" "}
          <Link href="/docs/integrations/">thousands of devices</Link> through
          open protocols like Zigbee, Matter, and MQTT, plus dedicated
          integrations (Shelly, Sonos, Tuya, RTSP cameras, and many more).
          <br />
          <br />
          Device not listed yet? Read our{" "}
          <Link href="/docs/integrations/">integrations vision</Link>:
          Matterbridge covers many legacy devices, and our{" "}
          <a href="https://community.gladysassistant.com/t/lusine-a-plugins-matterbridge-rendez-nimporte-quel-appareil-compatible-avec-gladys/10234">
            AI plugin factory
          </a>{" "}
          can build new plugins automatically. You can also{" "}
          <a href="https://community.gladysassistant.com/">
            ask on the forum
          </a>
          .
        </>
      ),
    },
    {
      title: <>Can I access Gladys remotely?</>,
      response: (
        <>
          <b>Yes, in two ways:</b>
          <br />
          <br />
          <b>Option 1 (recommended):</b> <a href="/plus">Gladys Plus</a>, our
          optional service that gives you secure access (end-to-end encrypted)
          from anywhere. Works as an app on iOS and Android.
          <br />
          <br />
          <b>Option 2 (for experts):</b> Set up your own VPN or reverse proxy.
          Gladys remains 100% free, but requires technical skills.
        </>
      ),
    },
  ],
};

const MainImageResponsive = ({ imageKey, alt, sizes }) => {
  let srcSet = "";

  sizes.forEach((size) => {
    if (srcSet.length > 0) {
      srcSet += ",\n";
    }
    srcSet += `${useBaseUrl(
      `/img/home/main_screenshot/${imageKey},w_${size}.png`
    )} ${size}w`;
  });

  return (
    <img
      fetchpriority="high"
      sizes="(max-width: 2800px) 100vw, 2800px"
      srcSet={srcSet}
      src={useBaseUrl(`/img/home/main_screenshot/${imageKey},w_2800.png`)}
      alt={alt}
    ></img>
  );
};

const PausedOverlay2 = ({ videoSrc, imgSrc, alt }) => (
  <HoverVideoPlayer
    className={styles.coolFeatureVideoPlayer}
    videoSrc={videoSrc}
    pausedOverlay={
      <div className={styles.coolFeatureVideoPausedOverlay}>
        <img src={imgSrc} alt={alt} />
        <PlayImage className={styles.coolFeatureVideoPausedOverlaySvg} />
      </div>
    }
    loadingOverlay={
      <div className="loading-overlay">
        <div className="loading-spinner" />
      </div>
    }
  />
);

const PausedOverlay = ({ videoSrc, imgSrc, alt }) => (
  <video autoPlay loop muted playsInline>
    <source src={videoSrc} type="video/mp4" />
  </video>
);

const BLACK_FRIDAY_ACTIVE = BLACK_FRIDAY_CONFIG.ENABLED;
const blackFridayEndDate = BLACK_FRIDAY_CONFIG.END_DATE;

function Home({ integrations, lang }) {
  const [openPanel, setOpenPanel] = React.useState(1);
  const [isBlackFridayActive, setIsBlackFridayActive] =
    useState(BLACK_FRIDAY_ACTIVE);
  const [blackFridayTimeLeft, setBlackFridayTimeLeft] = useState(null);

  const shouldDisplayStarterKitLink =
    lang === "fr" ||
    (navigator && navigator.language && navigator.language.startsWith("fr"));

  useEffect(() => {
    // Black Friday countdown
    const updateBlackFridayCountdown = () => {
      const now = new Date();
      const distance = blackFridayEndDate - now;

      if (distance < 0) {
        setIsBlackFridayActive(false);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setBlackFridayTimeLeft({ days, hours, minutes, seconds });
    };

    updateBlackFridayCountdown();
    const interval = setInterval(updateBlackFridayCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {isBlackFridayActive && shouldDisplayStarterKitLink && (
        <div
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            padding: "1rem 1rem",
            textAlign: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <p
              style={{
                fontSize: "1.1rem",
                fontWeight: "bold",
                margin: "0 0 0.5rem 0",
                color: "white",
              }}
            >
              🎁{" "}
              {lang === "fr"
                ? "BLACK FRIDAY : Promo sur le kit de démarrage et Gladys Plus"
                : "BLACK FRIDAY: Gladys Plus -30% off"}
            </p>
            {blackFridayTimeLeft && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "0.75rem",
                  flexWrap: "wrap",
                  fontSize: "0.9rem",
                }}
              >
                {blackFridayTimeLeft.days > 0 && (
                  <span style={{ opacity: 0.95 }}>
                    {blackFridayTimeLeft.days} {lang === "fr" ? "j" : "d"}
                  </span>
                )}
                <span style={{ opacity: 0.95 }}>
                  {blackFridayTimeLeft.hours}h {blackFridayTimeLeft.minutes}m{" "}
                  {blackFridayTimeLeft.seconds}s
                </span>
              </div>
            )}
          </div>
        </div>
      )}
      <header className={classnames("shadow--lw")}>
        <div className={styles.heroBanner}>
          <div className={styles.flexContainer}>
            <div className={classnames("padding-top--lg")}>
              <h1 className={styles.heroTitle}>
                <Translate id="home.title" description="The home page title">
                  Gladys Assistant
                </Translate>
              </h1>
              <p className={styles.heroSubtitle}>
                <Translate
                  id="home.description"
                  description="The home page description"
                >
                  Open-source, local smart home. Matter-ready, voice-controlled,
                  private by design.
                </Translate>
              </p>
              <span className="container">
                <div
                  className="margin-right--md"
                  style={{ display: "inline-block", verticalAlign: "top" }}
                >
                  <Link
                    className={classnames("button", styles.heroButton, {
                      "button--primary": true,
                    })}
                    href={lang === "en" ? `/docs` : `/${lang}/docs`}
                  >
                    <Translate
                      id="home.gettingStartedButton"
                      description="The getting started button of the homepage"
                    >
                      Get Started
                    </Translate>
                  </Link>
                  <div
                    style={{
                      fontSize: "0.85em",
                      marginTop: "0.5rem",
                      opacity: 0.8,
                      textAlign: "center",
                    }}
                  >
                    <Translate
                      id="home.gettingStartedSubtext"
                      description="The getting started button subtext"
                    >
                      Free • Guided setup
                    </Translate>
                  </div>
                </div>
                {shouldDisplayStarterKitLink && (
                  <div
                    className="margin-right--md"
                    style={{ display: "inline-block", verticalAlign: "top" }}
                  >
                    <Link
                      className={classnames(
                        "button",
                        styles.heroButton,
                        isBlackFridayActive ? "" : "button--secondary"
                      )}
                      href={
                        lang === "en" ? `/starter-kit` : `/${lang}/starter-kit`
                      }
                      style={
                        isBlackFridayActive
                          ? {
                              background:
                                "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                              color: "white",
                              border: "none",
                            }
                          : undefined
                      }
                    >
                      {isBlackFridayActive ? (
                        lang === "fr" ? (
                          "🎁 Offres Black Friday"
                        ) : (
                          "🎁 Black Friday Deals"
                        )
                      ) : (
                        <Translate
                          id="home.starterKitButton"
                          description="The getting started button of the homepage"
                        >
                          Discover the Starter Kit
                        </Translate>
                      )}
                    </Link>
                  </div>
                )}
                {false && (
                  <div
                    className="margin-right--md"
                    style={{ display: "inline-block" }}
                  >
                    <Link
                      className={classnames(
                        "button button--outline button--secondary",
                        styles.heroButton
                      )}
                      href="https://demo.gladysassistant.com/dashboard"
                    >
                      <Translate
                        id="home.tryOnlineButton"
                        description="The try online button of the homepage"
                      >
                        Try Online
                      </Translate>
                    </Link>
                  </div>
                )}
              </span>
            </div>
          </div>
          <div className={styles.flexContainer}>
            <div className={styles.heroImg}>
              <MainImageResponsive
                imageKey={
                  lang === "en"
                    ? "main_screenshot_en_j5czyj_c_scale"
                    : "main_screenshot_fr_ncm1yr_c_scale"
                }
                sizes={
                  lang === "en"
                    ? [
                        480, 850, 1142, 1388, 1623, 1839, 2022, 2181, 2379,
                        2526, 2694, 2800,
                      ]
                    : [
                        480, 825, 1090, 1342, 1548, 1756, 1951, 2083, 2254,
                        2412, 2568, 2731, 2800,
                      ]
                }
                alt="Gladys Assistant Demo Image"
              />
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className={classnames(styles.homeSection)}>
          <h2 className={styles.secondaryTitle}>
            <Translate
              id="home.coolFeatures.title"
              description="Cool features description on the homepage"
            >
              Powerful Features, Ready to Use
            </Translate>
          </h2>
          <div className={styles.coolFeatureFlexContainer}>
            <div className={styles.coolFeatureItem}>
              <h4>
                <Translate
                  id="home.coolFeatures.dashboardTitle"
                  description="Cool features dashboard title on the homepage"
                >
                  See Everything at a Glance
                </Translate>
              </h4>
              <p>
                <Translate
                  id="home.coolFeatures.dashboardDescrition"
                  description="Cool features dashboard title on the homepage"
                >
                  Temperature, security cameras, presence—monitor everything
                  from one beautiful dashboard.
                </Translate>
              </p>
            </div>
            <div className={styles.coolFeatureItem}>
              <PausedOverlay
                videoSrc={`https://gladysassistant-assets.b-cdn.net/home/dashboard_${lang}.mp4`}
                imgSrc={useBaseUrl(
                  `/img/home/video_thumbnails/dashboard_${lang}.png`
                )}
                alt="Dashboard"
              />
            </div>
          </div>
          <div
            className={classnames(
              styles.coolFeatureFlexContainer,
              styles.coolFeatureFlexContainerToReverse
            )}
          >
            <div className={styles.coolFeatureItem}>
              <PausedOverlay
                videoSrc={`https://gladysassistant-assets.b-cdn.net/home/scene_${lang}.mp4`}
                imgSrc={useBaseUrl(
                  `/img/home/video_thumbnails/scene_${lang}.png`
                )}
                alt="Scene"
              />
            </div>
            <div className={styles.coolFeatureItem}>
              <h4>
                <Translate
                  id="home.coolFeatures.sceneTitle"
                  description="Cool features scene title on the homepage"
                >
                  Automate Your Entire Day
                </Translate>
              </h4>
              <p>
                <Translate
                  id="home.coolFeatures.sceneDescription"
                  description="Cool features scene title on the homepage"
                >
                  Coffee brewing, lights turning on, music playing—all
                  automatic. No coding required.
                </Translate>
              </p>
            </div>
          </div>
          <div className={styles.coolFeatureFlexContainer}>
            <div className={styles.coolFeatureItem}>
              <h4>
                <Translate
                  id="home.coolFeatures.chatTitle"
                  description="Cool features chat title on the homepage"
                >
                  Control Your Home by Voice
                </Translate>
              </h4>
              <p>
                <Translate
                  id="home.coolFeatures.chatDescription"
                  description="Cool features chat title on the homepage"
                >
                  "Turn on the light in the kitchen" - Gladys responds instantly
                  via its built-in voice assistant or by message on your phone.
                </Translate>
              </p>
            </div>
            <div className={styles.coolFeatureItem}>
              <PausedOverlay
                videoSrc={`https://gladysassistant-assets.b-cdn.net/home/assistant-vocal-short-extra-small.mp4`}
                imgSrc={useBaseUrl(
                  `/img/home/video_thumbnails/assistant-vocal-short.jpg`
                )}
                alt="Voice assistant"
              />
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link
              className="button button--primary button--lg"
              href={lang === "en" ? `/docs` : `/${lang}/docs`}
            >
              <Translate
                id="home.ctaAfterFeatures"
                description="CTA after features section"
              >
                Try Gladys Now - It's Free
              </Translate>
            </Link>
          </div>
        </div>

        <div
          className={classnames(
            styles.homeSection,
            styles.compatibilitiesSection
          )}
        >
          <h2 className={styles.secondaryTitle}>
            <Translate
              id="home.compatibilities.title"
              description="Cool features chat title on the homepage"
            >
              Works With Everything You Own
            </Translate>
          </h2>
          <div className="row">
            <div className="col col--12">
              <p className="text--center">
                <Translate
                  id="home.integrations.description"
                  description="Integrations description of the homepage"
                >
                  Open protocols, dedicated integrations, and an AI-powered
                  Matterbridge plugin factory for everything else.
                </Translate>
              </p>
              {COMPATIBILITIES.map((row) => (
                <div className={styles.compatibilitiesRow}>
                  {row.map((item) => (
                    <div className={styles.compatibilitiesCol}>
                      <a href={useBaseUrl(`/docs/integrations/${item.docKey}`)}>
                        <img
                          src={useBaseUrl(
                            "/img/home/compatibilities/" + item.imgSrc
                          )}
                          width="254"
                          height="169"
                          alt={item.title}
                        />
                        <h5>{item.title}</h5>
                      </a>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link
              className="button button--secondary button--lg"
              href={
                lang === "en"
                  ? `/docs/integrations`
                  : `/${lang}/docs/integrations`
              }
            >
              <Translate
                id="home.ctaAfterIntegrations"
                description="CTA after integrations section"
              >
                Browse All Integrations →
              </Translate>
            </Link>
          </div>
        </div>

        <div className={classnames(styles.homeSection)}>
          <h2 className={styles.secondaryTitle}>
            <Translate
              id="home.characteristics.title"
              description="Characteristics chat title on the homepage"
            >
              Built Different: Privacy-First, User-Focused
            </Translate>
          </h2>
          <div className={styles.featureFlexContainer}>
            <div className={styles.feature}>
              <h4>
                <Translate
                  id="home.characteristics.privacyTitle"
                  description="Characteristics privacy title on the homepage"
                >
                  Privacy
                </Translate>
              </h4>
              <p>
                <Translate
                  id="home.characteristics.privacyDescription"
                  description="Characteristics chat title on the homepage"
                >
                  Gladys is self-hosted: your smart home data stays on your local
                  machine. No mandatory cloud, no tracking.
                </Translate>
              </p>
            </div>
            <div className={styles.feature}>
              <h4>
                <Translate
                  id="home.characteristics.easeOfUseTitle"
                  description="Characteristics ease of use title on the homepage"
                >
                  Easy to use
                </Translate>
              </h4>
              <p>
                <Translate
                  id="home.characteristics.easeOfUseDescription"
                  description="Characteristics ease of use title on the homepage"
                >
                  No terminal for day-to-day use: a clear interface to control
                  your home. Installation is guided via Docker.
                </Translate>
              </p>
            </div>
            <div className={styles.feature}>
              <h4>
                <Translate
                  id="home.characteristics.cleanUITitle"
                  description="Characteristics ease of use title on the homepage"
                >
                  Clean UI
                </Translate>
              </h4>
              <p>
                <Translate
                  id="home.characteristics.cleanUIDescription"
                  description="Characteristics ease of use title on the homepage"
                >
                  Every pixel matters. We design first, then code.
                </Translate>
              </p>
            </div>
          </div>
          <div className={styles.featureFlexContainer}>
            <div className={styles.feature}>
              <h4>
                <Translate
                  id="home.characteristics.stableTitle"
                  description="Characteristics ease of use title on the homepage"
                >
                  Stable
                </Translate>
              </h4>
              <p>
                <Translate
                  id="home.characteristics.stableDescription"
                  description="Characteristics ease of use title on the homepage"
                >
                  Built to last decades. Your smart home will never let you
                  down.
                </Translate>
              </p>
            </div>
            <div className={styles.feature}>
              <h4>
                <Translate
                  id="home.characteristics.fastTitle"
                  description="Characteristics ease of use title on the homepage"
                >
                  Fast
                </Translate>
              </h4>
              <p>
                <Translate
                  id="home.characteristics.fastDescription"
                  description="Characteristics ease of use title on the homepage"
                >
                  Lightning-fast interface, instant actions. We're obsessed with
                  performance.
                </Translate>
              </p>
            </div>
            <div className={styles.feature}>
              <h4>
                <Translate
                  id="home.characteristics.autoUpgradeTitle"
                  description="Characteristics ease of use title on the homepage"
                >
                  Auto upgrades
                </Translate>
              </h4>
              <p>
                <Translate
                  id="home.characteristics.autoUpgradeDescription"
                  description="Characteristics ease of use title on the homepage"
                >
                  New features and bug fixes installed automatically. Zero
                  hassle.
                </Translate>
              </p>
            </div>
          </div>
        </div>

        <div className={classnames(styles.homeSection)}>
          <h2 className={styles.secondaryTitle}>
            <Translate
              id="home.testimonial.title"
              description="Testimonia title on the homepage"
            >
              What Our Community Says
            </Translate>
          </h2>
          <div className={styles.testimonialContainer}>
            <TestimonialHomeSection lang={lang} testimonials={testimonials} />
          </div>
          <div
            style={{
              textAlign: "center",
              marginTop: "3rem",
              padding: "2.5rem 1.5rem",
              backgroundColor: "var(--ifm-color-emphasis-100)",
              borderRadius: "0.75rem",
              maxWidth: "800px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <h3 style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
              <Translate id="home.finalCta.title" description="Final CTA title">
                Ready to Take Control of Your Smart Home?
              </Translate>
            </h3>
            <p
              style={{
                fontSize: "1.1rem",
                marginBottom: "1.5rem",
                opacity: 0.9,
              }}
            >
              <Translate
                id="home.finalCta.subtitle"
                description="Final CTA subtitle"
              >
                Join the open-source smart home revolution
              </Translate>
            </p>
            <Link
              className="button button--primary button--lg"
              href={lang === "en" ? `/docs` : `/${lang}/docs`}
            >
              <Translate
                id="home.finalCta.button"
                description="Final CTA button"
              >
                Get Started Free
              </Translate>
            </Link>
          </div>
        </div>

        {lang === "fr" && (
          <div
            className={classnames(
              styles.homeSection,
              styles.youtubeVideoSection
            )}
          >
            <div className="container">
              <div className="row">
                <div className="col col--12">
                  <h2 className={styles.secondaryTitle}>
                    <Translate
                      id="home.videos.title"
                      description="Youtube videos title of the homepage"
                    >
                      Our latest YouTube videos
                    </Translate>
                  </h2>
                  <p className="text--center">
                    <Translate
                      id="home.videos.description"
                      description="Youtube videos description of the homepage"
                    >
                      We are active on our YouTube channel, if you like our
                      content, you can subscribe!
                    </Translate>
                  </p>
                  <div className="row">
                    <div className="col col--4">
                      <YoutubeEmbedVideo id="X-UtYMJoKV4" />
                      <h4 className={styles.homeYouTubeVideoTitle}>
                        Alexa est officiellement dépassée : voici le futur
                      </h4>
                    </div>
                    <div className="col col--4">
                      <YoutubeEmbedVideo id="iVFXXDO798A" />
                      <h4 className={styles.homeYouTubeVideoTitle}>
                        Home Assistant vs Gladys Assistant : Le Comparatif Honnête
                        2026
                      </h4>
                    </div>
                    <div className="col col--4">
                      <YoutubeEmbedVideo id="gn-bBBs39G0" disablePadding />
                      <h4 className={styles.homeYouTubeVideoTitle}>
                        Comment rendre n'importe quel lave-linge "Intelligent" ?
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {lang === "fr" && (
          <div
            className={classnames(styles.homeSection)}
            style={{
              padding: "2rem 1rem",
            }}
          >
            <div
              className="container"
              style={{
                maxWidth: "800px",
                margin: "0 auto",
                textAlign: "center",
                padding: "2rem 1.5rem",
                backgroundColor: "var(--ifm-color-emphasis-100)",
                borderRadius: "0.75rem",
              }}
            >
              <p
                style={{
                  fontSize: "1.1rem",
                  marginBottom: "1.25rem",
                  opacity: 0.95,
                }}
              >
                Vous préférez éviter l'installation ? Le{" "}
                <Link href="/fr/starter-kit">kit de démarrage</Link> inclut un
                mini-PC avec Gladys pré-installé, la formation officielle et 6
                mois de Gladys Plus. Option clé en main, sans obligation.
              </p>
              <Link
                className="button button--secondary"
                href="/fr/starter-kit"
              >
                Découvrir le kit de démarrage →
              </Link>
            </div>
          </div>
        )}

        <div className={classnames(styles.homeSection)}>
          <h2 className={styles.secondaryTitle}>FAQ</h2>
          <div className={classnames("row", styles.faqRows)}>
            <div className="col">
              {FAQQuestions[lang]
                .slice(0, Math.ceil(FAQQuestions[lang].length / 2))
                .map((oneElement) => (
                  <div>
                    <h4>{oneElement.title}</h4>
                    <p>{oneElement.response}</p>
                  </div>
                ))}
            </div>
            <div className="col">
              {FAQQuestions[lang]
                .slice(Math.ceil(FAQQuestions[lang].length / 2))
                .map((oneElement) => (
                  <div>
                    <h4>{oneElement.title}</h4>
                    <p>{oneElement.response}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {lang === "fr" && (
          <div
            className={classnames(styles.homeSection, styles.pressSection)}
          >
            <h2 className={styles.secondaryTitle}>Ils parlent de nous</h2>
            <p className={styles.pressIntro}>
              La presse et les créateurs de contenu ont testé Gladys Assistant.
              Découvre leurs avis.
            </p>
            <div className={styles.pressGrid}>
              <a
                href="https://www.igen.fr/domotique/2026/02/gladys-assistant-la-domotique-plus-avancee-que-maison-et-plus-accessible-que-home-assistant-154785"
                target="_blank"
                rel="noopener"
                className={styles.pressCard}
              >
                <div className={styles.pressCardHeader}>
                  <img
                    src={useBaseUrl("/img/press/igen.png")}
                    alt="iGen"
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                  <span>iGen.fr</span>
                </div>
                <h4 className={styles.pressCardTitle}>
                  Gladys Assistant, la domotique plus avancée que Maison et plus
                  accessible que Home Assistant
                </h4>
                <span className={styles.pressCardLink}>Lire l'article →</span>
              </a>

              <a
                href="https://www.antoineguilbert.fr/gladys-assistant-alternative-home-assistant/"
                target="_blank"
                rel="noopener"
                className={styles.pressCard}
              >
                <div className={styles.pressCardHeader}>
                  <img
                    src={useBaseUrl("/img/press/antoineguilbert.jpg")}
                    alt="Antoine Guilbert"
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                  <span>antoineguilbert.fr</span>
                </div>
                <h4 className={styles.pressCardTitle}>
                  J'ai testé Gladys Assistant : mon avis sur l'alternative à
                  Home Assistant
                </h4>
                <span className={styles.pressCardLink}>Lire l'article →</span>
              </a>

              <a
                href="https://mcflypartages.fr/blog/gladys_assistant_intro/"
                target="_blank"
                rel="noopener"
                className={styles.pressCard}
              >
                <div className={styles.pressCardHeader}>
                  <img
                    src={useBaseUrl("/img/press/mcflypartages.jpg")}
                    alt="McFly Partages"
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                  <span>mcflypartages.fr</span>
                </div>
                <h4 className={styles.pressCardTitle}>
                  Gladys Assistant - Une solution domotique (Cocorico)
                  accessible et prometteuse
                </h4>
                <span className={styles.pressCardLink}>Lire l'article →</span>
              </a>

              <a
                href="https://www.youtube.com/watch?v=iqkG3mRUeBU"
                target="_blank"
                rel="noopener"
                className={classnames(styles.pressCard, styles.pressCardVideo)}
              >
                <div className={styles.pressCardThumbnail}>
                  <img
                    src={useBaseUrl("/img/press/youtube-aylabs-thumbnail.jpg")}
                    alt="Je quitte HOME ASSISTANT ?!"
                    loading="lazy"
                  />
                  <div className={styles.pressCardPlayOverlay}>
                    <span className={styles.pressCardPlayTriangle} />
                  </div>
                </div>
                <div className={styles.pressCardHeader}>
                  <img
                    src={useBaseUrl("/img/press/youtube.png")}
                    alt="YouTube"
                    width="24"
                    height="24"
                    loading="lazy"
                  />
                  <span>AyLabs · YouTube</span>
                </div>
                <h4 className={styles.pressCardTitle}>
                  Je quitte HOME ASSISTANT ?! (Découverte Gladys Assistant)
                </h4>
                <span className={styles.pressCardLink}>Voir la vidéo →</span>
              </a>
            </div>
          </div>
        )}

        <div
          className={classnames(styles.homeSection, styles.newsletterSection)}
        >
          <SubcribeNewsletter lang={lang} />
        </div>
      </main>
    </>
  );
}
export { Home };
