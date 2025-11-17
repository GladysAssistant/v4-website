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

const COMPATIBILITIES = [
  [
    { title: "Zigbee", imgSrc: "zigbee2mqtt.jpg", docKey: "zigbee2mqtt" },
    { title: "Matter", imgSrc: "matter.jpg", docKey: "matter" },
    { title: "MQTT", imgSrc: "mqtt.jpg", docKey: "mqtt" },
    { title: "Google Home", imgSrc: "google-home.jpg", docKey: "google-home" },
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
          logiciel libre que tu peux installer{" "}
          <Link href="/fr/docs/installation/docker/#lancer-un-container-gladys-assistant">
            en une seule commande Docker
          </Link>
          . Aucun abonnement requis, aucune limitation, aucune carte bancaire
          demandée.
          <br />
          <br />
          Tu peux l'installer sur n'importe quelle machine Linux : mini-PC, NAS
          Synology, Raspberry Pi, serveur, ou même un vieux PC qui traîne. Si
          Docker tourne dessus, Gladys tourne dessus ! 🚀
        </>
      ),
    },
    {
      title: <>Est-ce compliqué à installer ?</>,
      response: (
        <>
          <b>Non, c'est étonnamment simple !</b> Si tu sais copier-coller une
          commande dans un terminal, tu sais installer Gladys. Notre
          documentation te guide pas à pas, avec des captures d'écran et des
          vidéos.
          <br />
          <br />
          <b>Encore plus simple :</b> Notre{" "}
          <Link href="/fr/starter-kit/">kit de démarrage</Link> arrive avec
          Gladys déjà installée. Tu branches, tu suis le guide de 5 minutes, et
          c'est parti. Zéro configuration technique requise.
        </>
      ),
    },
    {
      title: <>Mes données sont-elles vraiment privées ?</>,
      response: (
        <>
          <b>Absolument.</b> Contrairement aux solutions cloud comme Google Home
          ou Alexa, Gladys tourne 100% chez toi, sur ta machine. Tes données ne
          quittent jamais ton réseau local.
          <br />
          <br />
          Pas de serveurs tiers, pas de tracking, pas de revente de données.
          C'est d'ailleurs pour ça que Gladys existe : reprendre le contrôle de
          sa vie privée tout en profitant d'une maison intelligente. 🔒
        </>
      ),
    },
    {
      title: <>Gladys fonctionne-t-elle avec mes appareils ?</>,
      response: (
        <>
          <b>Très probablement !</b> Gladys supporte{" "}
          <Link href="/fr/docs/integrations/">des milliers d'appareils</Link>{" "}
          via Zigbee, Matter, MQTT, et des intégrations dédiées pour Shelly,
          Sonos, Philips Hue, caméras RTSP, Google Home, Alexa, et bien
          d'autres.
          <br />
          <br />
          Et comme Gladys est open-source, de nouvelles intégrations sont
          ajoutées régulièrement par la communauté. Si ton appareil n'est pas
          encore supporté, tu peux même{" "}
          <a href="https://community.gladysassistant.com/">
            demander son ajout
          </a>{" "}
          ou le développer toi-même !
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
          notre service cloud optionnel qui te donne un accès sécurisé (chiffré
          de bout en bout) depuis n'importe où, sans configuration. Fonctionne
          comme une app sur iOS et Android.
          <br />
          <br />
          <b>Option 2 (pour les experts) :</b> Configure ton propre VPN ou
          reverse proxy. Gladys reste 100% gratuite, mais ça demande des
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
          . No subscription required, no limitations, no credit card needed.
          <br />
          <br />
          You can install it on any Linux machine: mini-PC, Synology NAS,
          Raspberry Pi, server, or even an old computer gathering dust. If
          Docker runs on it, Gladys runs on it! 🚀
        </>
      ),
    },
    {
      title: <>Is it hard to install?</>,
      response: (
        <>
          <b>No, it's surprisingly simple!</b> If you can copy-paste a command
          into a terminal, you can install Gladys. Our documentation guides you
          step-by-step with screenshots and videos.
          <br />
          <br />
          The entire setup takes about 5 minutes. No coding required, no complex
          configuration files. Just follow the guide and you're done.
        </>
      ),
    },
    {
      title: <>Is my data really private?</>,
      response: (
        <>
          <b>Absolutely.</b> Unlike cloud solutions like Google Home or Alexa,
          Gladys runs 100% locally on your machine. Your data never leaves your
          home network.
          <br />
          <br />
          No third-party servers, no tracking, no data selling. That's actually
          why Gladys exists: to take back control of your privacy while enjoying
          a smart home. 🔒
        </>
      ),
    },
    {
      title: <>Does Gladys work with my devices?</>,
      response: (
        <>
          <b>Very likely!</b> Gladys supports{" "}
          <Link href="/docs/integrations/">thousands of devices</Link> via
          Zigbee, Matter, MQTT, and dedicated integrations for Shelly, Sonos,
          Philips Hue, RTSP cameras, Google Home, Alexa, and many more.
          <br />
          <br />
          And because Gladys is open-source, new integrations are regularly
          added by the community. If your device isn't supported yet, you can{" "}
          <a href="https://community.gladysassistant.com/">request it</a> or
          even develop it yourself!
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
          optional cloud service that gives you secure access (end-to-end
          encrypted) from anywhere, with zero configuration. Works as an app on
          iOS and Android.
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

const BLACK_FRIDAY_ACTIVE = true;
const blackFridayEndDate = new Date(1764633600000);

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
                  One Platform. Every Device. Complete Privacy.
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
                      5-min setup • No credit card
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
              Powerful Features, Zero Configuration
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
                  via Telegram, Google Home, Alexa or Siri.
                </Translate>
              </p>
            </div>
            <div className={styles.coolFeatureItem}>
              <PausedOverlay
                videoSrc={`https://gladysassistant-assets.b-cdn.net/home/chat_${lang}.mp4`}
                imgSrc={useBaseUrl(
                  `/img/home/video_thumbnails/chat_${lang}.png`
                )}
                alt="Chat"
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
                  All integrations are open-source and developed by the
                  community.
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
                  Gladys is self-hosted, and all your data stays on your local
                  machine at home. No cloud required, no tracking, ever.
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
                  No terminal commands. No config files. Just a beautiful
                  interface that works.
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
                      <YoutubeEmbedVideo id="MsSx8omWiZ8" />
                      <h4 className={styles.homeYouTubeVideoTitle}>
                        Suivi d'énergie & serveur MCP dans Gladys
                      </h4>
                    </div>
                    <div className="col col--4">
                      <YoutubeEmbedVideo id="2_fGKdoiK2Q" />
                      <h4 className={styles.homeYouTubeVideoTitle}>
                        Gladys Assistant devient compatible Matter
                      </h4>
                    </div>
                    <div className="col col--4">
                      <YoutubeEmbedVideo id="M4vOjQXMiZI" disablePadding />
                      <h4 className={styles.homeYouTubeVideoTitle}>
                        Live coding : Une intégration Sonos en une journée ?
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
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
