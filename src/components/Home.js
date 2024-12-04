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
          Any PR is welcome 🙂 <br />
          <br />
          If you want to contribute, don't hesitate to come to the{" "}
          <a href="https://en-community.gladysassistant.com/">community</a> to
          talk about the development you want to work on. This will allow you to
          see with other developers if someone else is not already working on
          it, and especially to discuss "specifications" before starting
          development!
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
                  Craft Your Perfect Smart Home Experience.
                </Translate>
              </p>
              <span className="container">
                <div
                  className="margin-right--md"
                  style={{ display: "inline-block" }}
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
                      Install for free
                    </Translate>
                  </Link>
                </div>
                {lang === "fr" && (
                  <div
                    className="margin-right--md"
                    style={{ display: "inline-block" }}
                  >
                    <Link
                      className={classnames(
                        "button button--primary",
                        styles.heroButton
                      )}
                      href="/fr/starter-kit/"
                    >
                      Le kit de démarrage officiel
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
        <div
          className={classnames(styles.homeSection, styles.newsletterSection)}
        >
          <SubcribeNewsletter lang={lang} />
        </div>
        <div className={classnames(styles.homeSection)}>
          <h2 className={styles.secondaryTitle}>
            <Translate
              id="home.coolFeatures.title"
              description="Cool features description on the homepage"
            >
              Some cool features out of the box
            </Translate>
          </h2>
          <div className={styles.coolFeatureFlexContainer}>
            <div className={styles.coolFeatureItem}>
              <h4>
                <Translate
                  id="home.coolFeatures.dashboardTitle"
                  description="Cool features dashboard title on the homepage"
                >
                  Build great dashboards
                </Translate>
              </h4>
              <p>
                <Translate
                  id="home.coolFeatures.dashboardDescrition"
                  description="Cool features dashboard title on the homepage"
                >
                  You can create as many dashboards as you want in Gladys, and
                  they are entirely customizable. Add your cameras, charts of
                  sensors in your house, display who's at home and who's not.
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
                  Automate your life with scenes
                </Translate>
              </h4>
              <p>
                <Translate
                  id="home.coolFeatures.sceneDescription"
                  description="Cool features scene title on the homepage"
                >
                  You want to wake up with nice music? The coffee ready? Gladys
                  can help you with that. Scenes are fully editable in the UI,
                  and can be triggered from an event coming, at a specific time,
                  or manually.
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
                  Always one message away
                </Translate>
              </h4>
              <p>
                <Translate
                  id="home.coolFeatures.chatDescription"
                  description="Cool features chat title on the homepage"
                >
                  Gladys is a smart assistant. You can talk to her in the
                  interface, or with our Telegram integration. Ask her to show
                  you the image of the camera in the kitchen, and she'll answer
                  back!
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
              Lots of compatibilities, built-in
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
              The most intuitive smart home software
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
                  Gladys is self-hosted, and all your data stays in your local
                  machine at home, in a simple SQLite database.
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
                  We built Gladys like we would build any consumer product: no
                  SSH needed, no files to edit.
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
                  We built Gladys user interface with great care, and always
                  start with the design when working on a new feature.
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
                  Stability is one of the core values of the project, we built
                  Gladys to run for tens of years.
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
                  Gladys is built with fast technologies (Preact + Node.js) and
                  we care a lot about performances.
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
                  Gladys run as a Docker container. We use Watchtower to
                  automatically upgrade Gladys.
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
              Our users love Gladys
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
                      <YoutubeEmbedVideo id="gNlZ2bId8Z0" />
                      <h4 className={styles.homeYouTubeVideoTitle}>
                        Le trio ULTIME pour automatiser la lumière ??
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
