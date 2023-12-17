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

import testimonialFr from "./testimonials/testimonial.fr.json";
import testimonialEn from "./testimonials/testimonial.en.json";

import Translate, { translate } from "@docusaurus/Translate";

const COMPATIBILITIES = [
  [
    { title: "Alexa", imgSrc: "alexa.jpg", docKey: "alexa" },
    { title: "OpenWeather", imgSrc: "openweather.jpg", docKey: "openweather" },
    { title: "Apple HomeKit", imgSrc: "homekit.jpg", docKey: "homeKit"},
  ],
  [
    { title: "Bluetooth", imgSrc: "bluetooth.jpg", docKey: "bluetooth" },
    { title: "Broadlink", imgSrc: "broadlink.jpg", docKey: "broadlink" },
    { title: "CalDav", imgSrc: "caldav.jpg", docKey: "caldav" },
  ],
  [
    { title: "Camera", imgSrc: "rtsp-camera.jpg", docKey: "camera" },
    { title: "Enedis", imgSrc: "enedis.jpg", docKey: "enedis" },
    { title: "eWelink", imgSrc: "ewelink.jpg", docKey: "ewelink" },
  ],
  [
    { title: "Google Home", imgSrc: "google-home.jpg", docKey: "google-home" },
    { title: "Lan Manager", imgSrc: "lan-manager.jpg", docKey: "lan-manager" },
    { title: "MELCloud", imgSrc: "melcloud.jpg", docKey: "melcloud" },
  ],
  [
    { title: "MQTT", imgSrc: "mqtt.jpg", docKey: "mqtt" },
    { title: "Nextcloud Talk", imgSrc: "nextcloud-talk.jpg", docKey: "nextcloud-talk" },
    { title: "Node-red", imgSrc: "node-red.jpg", docKey: "node-red" }
  ],
  [
    { title: "Open AI Chat GPT", imgSrc: "openai.jpg", docKey: "openai" },
    { title: "Owntracks", imgSrc: "owntracks.jpg", docKey: "owntracks" },
    { title: "Philips-Hue", imgSrc: "philips-hue.jpg", docKey: "philips-hue" },
  ],
  [
    { title: "Sonos", imgSrc: "sonos.jpg", docKey: "sonos" },
    { title: "Tasmota", imgSrc: "tasmota.jpg", docKey: "tasmota" },
    { title: "Telegram", imgSrc: "telegram.jpg", docKey: "telegram" },
  ],
  [
    { title: "TP-Link", imgSrc: "tp-link.jpg", docKey: "tp-link/" },
    { title: "Tuya", imgSrc: "tuya.jpg", docKey: "tuya" },
    { title: "Xiaomi Home", imgSrc: "xiaomi.jpg", docKey: "xiaomi" },
  ],
  [
    { title: "Zigbee", imgSrc: "zigbee2mqtt.jpg", docKey: "zigbee2mqtt" },
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
      title: <>Sondage Noël 2023 : Que penses-tu de Gladys Assistant ?</>,
      response: (
        <>
          <p>
            Nous sommes à la recherche de retours sur Gladys : Que penses-tu du
            projet ? Si tu n'utilise pas encore Gladys, pourquoi ?
          </p>
          <p>
            Pour répondre au sondage,{" "}
            <a
              href="https://forms.gle/KPo69uyeP3HrTrd57"
              rel="nofollow"
              target="_blank"
            >
              rendez-vous ici
            </a>{" "}
            !
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
        </div>
        </div>
      </header>
      <main>
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
              A large number of integrations
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
      </main>
    </>
  );
}
export { Home };
