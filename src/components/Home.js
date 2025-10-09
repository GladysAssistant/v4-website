import React from "react";
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
    { title: "Philips-Hue", imgSrc: "philips-hue.jpg", docKey: "philips-hue" },
    { title: "MQTT", imgSrc: "mqtt.jpg", docKey: "mqtt" },
    { title: "Google Home", imgSrc: "google-home.jpg", docKey: "google-home" },
  ],
  [
    { title: "Tasmota", imgSrc: "tasmota.jpg", docKey: "tasmota" },
    { title: "Sonos", imgSrc: "sonos.jpg", docKey: "sonos" },
    { title: "Alexa", imgSrc: "alexa.jpg", docKey: "alexa" },
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
      title: <>Quel matériel requis pour installer Gladys Assistant ?</>,
      response: (
        <>
          Gladys peut s'installer sur n'importe quelle machine Linux (un
          Raspberry Pi, un NAS, un serveur, un vieux PC Linux, peu importe !),
          du moment que Docker tourne sur la machine, Gladys peut tourner
          dessus. <br />
          <br />
          PS: Gladys Assistant est <b>gratuite</b>, c'est un simple container
          Docker à lancer{" "}
          <Link href="/fr/docs/installation/docker/#lancer-un-container-gladys-assistant">
            en une commande
          </Link>
          .
        </>
      ),
    },
    {
      title: <>Qui utilise Gladys Assistant 4 ?</>,
      response: (
        <>
          La v4 de Gladys Assistant est sortie en Novembre 2020. Depuis, le
          projet est en pleine croissance et l'objectif est de devenir un
          logiciel de référence dans le monde de la domotique open-source !
          <br />
          <br /> Gladys Assistant est installée par tout type d'utilisateurs :{" "}
          <br /> <br />
          <ul>
            <li>
              Des novices complet, qui veulent automatiser leur maison avec un
              produit simple, puissant et respectueux de leur vie privée.
            </li>
            <li>
              Des développeurs qui trouvent ça fou de pouvoir coder pour leur
              maison et qui contribuent à ce projet open-source !
            </li>
            <li>Des pros, qui gèrent des parcs de capteurs impressionnants</li>
          </ul>
        </>
      ),
    },
    {
      title: <>Comment contribuer au projet ?</>,
      response: (
        <>
          Gladys Assistant est entièrement open-source et disponible sur{" "}
          <a href="https://github.com/GladysAssistant/gladys">GitHub</a>.<br />
          Toute PR est la bienvenue 🙂 <br />
          <br /> Si tu veux contribuer, lis notre tutoriel{" "}
          <a href="/fr/docs/dev/developing-a-service/">
            Contribuer sur Gladys Assistant
          </a>{" "}
          et n'hésite pas à venir sur la{" "}
          <a href="https://community.gladysassistant.com/">communauté</a> pour
          parler du développement sur lequel tu veux te lancer. N'hésite pas si
          tu as des questions, on est toujours là pour donner un coup de main !
        </>
      ),
    },
    {
      title: <>Comment accéder à Gladys depuis l'extérieur de mon réseau ?</>,
      response: (
        <>
          Nous proposons <a href="/fr/plus">Gladys Plus</a>, un service qui
          proxy le traffic de{" "}
          <a href="https://plus.gladysassistant.com">
            plus.gladysassistant.com
          </a>{" "}
          à votre instance locale Gladys, tout ça en chiffré de bout en bout
          pour respecter votre vie privée, et sans configuration ! Gladys Plus
          est une "Progressive Web App" que vous pouvez installer sur votre
          smartphone (Android et iOS), et ainsi avoir accès à Gladys de partout
          dans le monde.
        </>
      ),
    },
    {
      title: <>Un kit de démarrage pour commencer ?</>,
      response: (
        <>
          <p>
            Pour accélérer le déploiement de Gladys, j'ai lancé un kit de
            démarrage, contenant du hardware mais pas que ! 😎
            <br />
            <br />
            Ce kit est destiné à un public qui n'a pas d'installation Gladys
            pour l'instant et qui souhaite se lancer facilement.
            <br />
            <br />
            Si ce kit te parle, dépêche toi :{" "}
            <a href="/fr/starter-kit/">Je commande !</a>
          </p>
        </>
      ),
    },
  ],
  en: [
    {
      title: <>What equipment is required to install Gladys Assistant?</>,
      response: (
        <>
          Gladys can be installed on any Linux machine (a Raspberry Pi, a NAS, a
          server, an old Linux PC, anything!), as long as Docker is running on
          the machine, Gladys can run on it. <br />
          <br />
          Gladys Assistant is <b>free to use</b>, it's just a simple Docker
          container that can be started with{" "}
          <Link href="/docs/installation/docker/#start-gladys">
            a simple command
          </Link>
          .
        </>
      ),
    },
    {
      title: <>Who uses Gladys Assistant 4?</>,
      response: (
        <>
          Gladys Assistant 4 was released in November 2020. Since then, the
          project has been growing and the goal is to become a reference
          software in the world of open-source home automation!
          <br />
          <br />
          Gladys Assistant is installed by all types of users: <br /> <br />
          <ul>
            <li>
              Complete novices who want to automate their home with a simple,
              powerful, and privacy-respecting product.
            </li>
            <li>
              Developers who think it's amazing to be able to code for their
              home and who contribute to this open-source project!
            </li>
            <li>Pros who manage impressive sensor networks</li>
          </ul>
        </>
      ),
    },
    {
      title: <>How to contribute to the project?</>,
      response: (
        <>
          Gladys Assistant is entirely open-source and available on{" "}
          <a href="https://github.com/GladysAssistant/gladys">GitHub</a>.<br />
          All PRs are welcome 🙂 <br />
          <br /> If you want to contribute, read our tutorial{" "}
          <a href="/docs/dev/developing-a-service/">
            Contributing to Gladys Assistant
          </a>{" "}
          and don't hesitate to join the{" "}
          <a href="https://en-community.gladysassistant.com/">community</a> to
          discuss the development you want to work on. Don't hesitate if you
          have questions, we're always here to help!
        </>
      ),
    },
    {
      title: <>How to access Gladys from outside my network?</>,
      response: (
        <>
          We offer <a href="/plus">Gladys Plus</a>, a service that proxies
          traffic from{" "}
          <a href="https://plus.gladysassistant.com">
            plus.gladysassistant.com
          </a>{" "}
          to your local Gladys instance, all end-to-end encrypted to respect
          your privacy, and without configuration! Gladys Plus is a "Progressive
          Web App" that you can install on your smartphone (Android and iOS),
          and thus have access to Gladys from anywhere in the world.
          <br />
          <br />
          Using this service is <b>entirely optional</b>, you can use Gladys
          Assistant without it with your own domain if you prefer.
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

function Home({ integrations, lang }) {
  const [openPanel, setOpenPanel] = React.useState(1);
  const shouldDisplayStarterKitLink =
    lang === "fr" ||
    (navigator && navigator.language && navigator.language.startsWith("fr"));
  return (
    <>
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
                    className={classnames(
                      "button button--secondary",
                      styles.heroButton
                    )}
                    href={lang === "en" ? `/docs` : `/${lang}/docs`}
                  >
                    <Translate
                      id="home.gettingStartedButton"
                      description="The getting started button of the homepage"
                    >
                      Get Started
                    </Translate>
                  </Link>
                  <div style={{ fontSize: '0.85em', marginTop: '0.5rem', opacity: 0.8, textAlign: 'center' }}>
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
                        "button button--primary",
                        styles.heroButton
                      )}
                      href={
                        lang === "en" ? `/starter-kit` : `/${lang}/starter-kit`
                      }
                    >
                      <Translate
                        id="home.starterKitButton"
                        description="The getting started button of the homepage"
                      >
                        Discover the Starter Kit
                      </Translate>
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
                      <YoutubeEmbedVideo id="ALW3uDB9P0s" />
                      <h4 className={styles.homeYouTubeVideoTitle}>
                        Gérez vos appareils Zigbee dans votre domotique
                      </h4>
                    </div>
                    <div className="col col--4">
                      <YoutubeEmbedVideo id="_bmsWALVePc" />
                      <h4 className={styles.homeYouTubeVideoTitle}>
                        Live: Bilan de 2024 et projets pour 2025
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
