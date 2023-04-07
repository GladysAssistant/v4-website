import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";
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
    { title: "Zigbee", imgSrc: "zigbee2mqtt.jpg" },
    { title: "Philips-Hue", imgSrc: "philips-hue.jpg" },
    { title: "MQTT", imgSrc: "mqtt.jpg" },
    { title: "Xiaomi", imgSrc: "xiaomi.jpg" },
  ],
  [
    { title: "Tasmota", imgSrc: "tasmota.jpg" },
    { title: "TP-Link", imgSrc: "tp-link.jpg" },
    { title: "Google Home", imgSrc: "google-home.jpg" },
    { title: "Camera", imgSrc: "rtsp-camera.jpg" },
  ],
];

const testimonials = {
  fr: testimonialFr,
  en: testimonialEn,
};

const FAQQuestions = {
  fr: [
    {
      title: <>How can I install Gladys?</>,
      response: (
        <>
          Gladys can be installed on any Linux machine: a Raspberry Pi, a NAS, a
          server, anything !"
        </>
      ),
    },
    {
      title: <>Who uses Gladys Assistant 4?</>,
      response: (
        <>
          Gladys Assistant v4 was released in November 2020. Since then,
          hundreds of you have used Gladys Assistant. The goal is to grow to
          thousands of users in the coming months! Gladys Assistant is installed
          by all types of users:
          <ul>
            <li>
              Complete novices, who want to automate their home with a simple,
              powerful product that also respects their privacy.
            </li>
            <li>
              Developers who find the fact they can code for their home
              improvement amazing. Many of them contribute to this open-source
              project!
            </li>
            <li>Professionals, who manage large fleets of sensors</li>
          </ul>
        </>
      ),
    },
  ],
  en: [
    {
      title: <>How can I install Gladys?</>,
      response: (
        <>
          Gladys can be installed on any Linux machine: a Raspberry Pi, a NAS, a
          server, anything !"
        </>
      ),
    },
    {
      title: <>Who uses Gladys Assistant 4?</>,
      response: (
        <>
          Gladys Assistant v4 was released in November 2020. Since then,
          hundreds of you have used Gladys Assistant. The goal is to grow to
          thousands of users in the coming months! Gladys Assistant is installed
          by all types of users:
          <ul>
            <li>
              Complete novices, who want to automate their home with a simple,
              powerful product that also respects their privacy.
            </li>
            <li>
              Developers who find the fact they can code for their home
              improvement amazing. Many of them contribute to this open-source
              project!
            </li>
            <li>Professionals, who manage large fleets of sensors</li>
          </ul>
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
      sizes="(max-width: 2800px) 100vw, 2800px"
      srcset={srcSet}
      src={useBaseUrl(`/img/home/main_screenshot/${imageKey},w_2800.png`)}
      alt={alt}
    ></img>
  );
};

const PausedOverlay = ({ videoSrc, imgSrc, alt }) => (
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
                  A privacy-first, open-source home assistant
                </Translate>
              </p>
              <span className="container">
                <div
                  className="margin-right--md"
                  style={{ display: "inline-block" }}
                >
                  <Link
                    className={classnames(
                      "button button--primary",
                      styles.heroButton
                    )}
                    href={lang === "en" ? `/docs` : `/${lang}/docs`}
                  >
                    <Translate
                      id="home.gettingStartedButton"
                      description="The getting started button of the homepage"
                    >
                      Getting started
                    </Translate>
                  </Link>
                </div>
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
                  Build great dashboard
                </Translate>
              </h4>
              <p>
                <Translate
                  id="home.coolFeatures.dashboardDescrition"
                  description="Cool features dashboard title on the homepage"
                >
                  You can create as much dashboard as you want in Gladys, and
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
                      <img
                        src={useBaseUrl(
                          "/img/home/compatibilities/" + item.imgSrc
                        )}
                        width="254"
                        height="169"
                        alt={item.title}
                      />
                      <h5>{item.title}</h5>
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
                  We build Gladys like we would build any consumer product: no
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
                  Stability is one of the core value of the project, we build
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
            <TestimonialHomeSection lang="fr" testimonials={testimonials} />
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
                      <YoutubeEmbedVideo id="l2E1wNF-Mtw" />
                      <h4 className={styles.homeYouTubeVideoTitle}>
                        Live: Bilan de 2022 et projets pour 2023
                      </h4>
                    </div>
                    <div className="col col--4">
                      <YoutubeEmbedVideo id="6pBeBcgLvj0" disablePadding />
                      <h4 className={styles.homeYouTubeVideoTitle}>
                        Installer Gladys sur un PC Ubuntu
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
          <div className="row">
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
