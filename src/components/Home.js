import React, { useState, useEffect } from "react";
import classnames from "classnames";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Translate, { translate } from "@docusaurus/Translate";

import styles from "./horizon/styles.module.css";
import YoutubeEmbedVideo from "./YoutubeEmbedVideo";
import { TestimonialHomeSection } from "./Testimonial";
import SubcribeNewsletter from "./home/SubcribeNewsletter";

import testimonialFr from "./testimonials/testimonial.fr.json";
import testimonialEn from "./testimonials/testimonial.en.json";

import { BLACK_FRIDAY_CONFIG } from "../config/blackFriday";

const DEMO_URL = "https://demo.gladysassistant.com/dashboard";

const COMPATIBILITIES = [
  { title: "Zigbee", imgSrc: "zigbee2mqtt.jpg", docKey: "zigbee2mqtt" },
  { title: "Matter", imgSrc: "matter.jpg", docKey: "matter" },
  { title: "MQTT", imgSrc: "mqtt.jpg", docKey: "mqtt" },
  { title: "Tuya", imgSrc: "tuya.jpg", docKey: "external/tuya/" },
  { title: "Netatmo", imgSrc: "netatmo.jpg", docKey: "external/netatmo/" },
  { title: "Sonos", imgSrc: "sonos.jpg", docKey: "sonos" },
  { title: "Zendure", imgSrc: "zendure.jpg", docKey: "external/zendure/" },
  { title: "Camera", imgSrc: "rtsp-camera.jpg", docKey: "camera" },
];

const testimonials = {
  fr: testimonialFr,
  en: testimonialEn,
};

/**
 * The product shots come from the app itself, in its default light "Horizon"
 * glass theme, exported per locale at three or four widths. `name` is the
 * file prefix in /static/img/home/horizon; "hero-dark" is the one dark
 * capture, used by the light/dark section.
 */
const SHOT_WIDTHS = {
  hero: [800, 1200, 1600, 2400],
  feature: [640, 1000, 1400],
  // the light/dark pair shows two shots side by side, so each one gets the
  // narrower set (the light hero ships both)
  pair: [640, 1000, 1400],
};

const Icon = ({ children, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    {children}
  </svg>
);

const ICONS = {
  shield: (
    <Icon>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </Icon>
  ),
  sliders: (
    <Icon>
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </Icon>
  ),
  layout: (
    <Icon>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </Icon>
  ),
  award: (
    <Icon>
      <circle cx="12" cy="8" r="7" />
      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
    </Icon>
  ),
  zap: (
    <Icon>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </Icon>
  ),
  refresh: (
    <Icon>
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </Icon>
  ),
  download: (
    <Icon className={styles.btnIcon}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </Icon>
  ),
  play: (
    <Icon className={styles.btnIcon}>
      <polygon points="6 3 20 12 6 21 6 3" />
    </Icon>
  ),
  sparkle: (
    <Icon strokeWidth="1.8" width="13" height="13">
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" />
    </Icon>
  ),
};

/**
 * A product screenshot, in its glass frame. The file naming convention is
 * `<name>-<lang>-<width>.webp`, so one component serves every shot.
 */
const Shot = ({ asset, name, lang, alt, widths, sizes, priority }) => {
  const url = (width) =>
    asset(`img/home/horizon/${name}-${lang}-${width}.webp`);
  const srcSet = widths.map((width) => `${url(width)} ${width}w`).join(", ");

  return (
    <div className={styles.shotFrame}>
      <img
        src={url(widths[widths.length - 1])}
        srcSet={srcSet}
        sizes={sizes}
        width="1600"
        height="950"
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchpriority={priority ? "high" : undefined}
        decoding="async"
      />
    </div>
  );
};

const FeatureRow = ({ reversed, eyebrow, title, text, shot }) => (
  <div
    className={classnames(styles.featureRow, {
      [styles.featureRowReversed]: reversed,
    })}
  >
    <div className={styles.featureCopy}>
      <span className={styles.eyebrow}>{eyebrow}</span>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureText}>{text}</p>
    </div>
    <div>{shot}</div>
  </div>
);

const GlassCard = ({ icon, title, text }) => (
  <div className={styles.glassCard}>
    <span className={styles.glassCardIcon}>{ICONS[icon]}</span>
    <h3 className={styles.glassCardTitle}>{title}</h3>
    <p className={styles.glassCardText}>{text}</p>
  </div>
);

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
          . Aucun abonnement requis pour utiliser Gladys, aucune limitation,
          aucune carte bancaire demandée.
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
          <Link href="/fr/starter-kit/">kit de démarrage</Link> arrive avec
          Gladys déjà installée. Vous branchez, vous suivez le guide, et vous
          pouvez vous concentrer sur votre maison connectée.
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
          Des services optionnels comme <a href="/fr/plus">Gladys Plus</a>{" "}
          existent (accès à distance, IA…), mais le cœur de Gladys reste
          auto-hébergé. 🔒
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
          intégrations natives (Sonos, caméras RTSP, et bien d'autres).
          <br />
          <br />
          Votre appareil n'est pas encore listé ? Découvrez les{" "}
          <Link href="/fr/docs/integrations/external/">
            intégrations externes
          </Link>{" "}
          : des intégrations créées par la communauté, installables en un clic,
          dont la liste s'agrandit en continu. Et si la vôtre manque,{" "}
          <Link href="/fr/docs/dev/external-integrations/">
            créez-la vous-même
          </Link>{" "}
          dans le langage de votre choix, ou{" "}
          <a href="https://community.gladysassistant.com/">
            demandez sur le forum
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
          <b>It takes some technical steps, but we guide you through them.</b>{" "}
          You first need a Linux machine (Ubuntu Server, for example), then you
          run Gladys via Docker. Our documentation walks you through each step
          with screenshots and videos.
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
          open protocols like Zigbee, Matter, and MQTT, plus native integrations
          (Sonos, RTSP cameras, and many more).
          <br />
          <br />
          Device not listed yet? Have a look at{" "}
          <Link href="/docs/integrations/external/">external integrations</Link>{" "}
          : community-built integrations you can install in one click, and the
          list keeps growing. If yours is missing,{" "}
          <Link href="/docs/dev/external-integrations/">build it yourself</Link>{" "}
          in the language of your choice, or{" "}
          <a href="https://community.gladysassistant.com/">ask on the forum</a>.
        </>
      ),
    },
    {
      title: <>Can I access Gladys from outside my home?</>,
      response: (
        <>
          <b>Yes, in several ways:</b>
          <br />
          <br />
          <b>Option 1 (recommended):</b> <a href="/plus">Gladys Plus</a>, our
          optional service that gives you secure (end-to-end encrypted) access
          from anywhere. Works as an app on iOS and Android.
          <br />
          <br />
          <b>Option 2 (for experts):</b> Set up your own VPN or reverse proxy.
          Gladys stays 100% free, but this requires technical skills.
        </>
      ),
    },
  ],
};

const PRESS = [
  {
    url: "https://www.igen.fr/domotique/2026/02/gladys-assistant-la-domotique-plus-avancee-que-maison-et-plus-accessible-que-home-assistant-154785",
    source: "iGen.fr",
    logo: "/img/press/igen.png",
    title:
      "Gladys Assistant, la domotique plus avancée que Maison et plus accessible que Home Assistant",
    linkLabel: "Lire l'article →",
  },
  {
    url: "https://www.antoineguilbert.fr/gladys-assistant-alternative-home-assistant/",
    source: "antoineguilbert.fr",
    logo: "/img/press/antoineguilbert.jpg",
    title:
      "J'ai testé Gladys Assistant : mon avis sur l'alternative à Home Assistant",
    linkLabel: "Lire l'article →",
  },
  {
    url: "https://mcflypartages.fr/blog/gladys_assistant_intro/",
    source: "mcflypartages.fr",
    logo: "/img/press/mcflypartages.jpg",
    title:
      "Gladys Assistant - Une solution domotique (Cocorico) accessible et prometteuse",
    linkLabel: "Lire l'article →",
  },
  {
    url: "https://www.youtube.com/watch?v=iqkG3mRUeBU",
    source: "AyLabs · YouTube",
    logo: "/img/press/youtube.png",
    thumbnail: "/img/press/youtube-aylabs-thumbnail.jpg",
    title: "Je quitte HOME ASSISTANT ?! (Découverte Gladys Assistant)",
    linkLabel: "Voir la vidéo →",
  },
];

const YOUTUBE_VIDEOS = [
  {
    id: "X-UtYMJoKV4",
    title: "Alexa est officiellement dépassée : voici le futur",
  },
  {
    id: "iVFXXDO798A",
    title: "Home Assistant vs Gladys Assistant : Le Comparatif Honnête 2026",
  },
  {
    id: "gn-bBBs39G0",
    title: "Comment rendre n'importe quel lave-linge \"Intelligent\" ?",
  },
];

const BLACK_FRIDAY_ACTIVE = BLACK_FRIDAY_CONFIG.ENABLED;
const blackFridayEndDate = BLACK_FRIDAY_CONFIG.END_DATE;

function Home({ lang }) {
  const [isBlackFridayActive, setIsBlackFridayActive] =
    useState(BLACK_FRIDAY_ACTIVE);
  const [blackFridayTimeLeft, setBlackFridayTimeLeft] = useState(null);

  // One base URL for every static asset: `useBaseUrl` is a hook, so it
  // cannot be called from inside the .map()s below.
  const { siteConfig } = useDocusaurusContext();
  const asset = (path) => `${siteConfig.baseUrl}${path.replace(/^\//, "")}`;

  const docsUrl = lang === "en" ? "/docs" : `/${lang}/docs`;
  const integrationsUrl =
    lang === "en" ? "/docs/integrations" : `/${lang}/docs/integrations`;

  // The starter kit is a French-market offer: keep it out of the English page.
  const shouldDisplayStarterKitLink = lang === "fr";

  useEffect(() => {
    if (!BLACK_FRIDAY_ACTIVE) {
      return undefined;
    }

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

  const installButton = (
    <Link className={classnames(styles.btn, styles.btnPrimary)} href={docsUrl}>
      {ICONS.download}
      <Translate
        id="home.horizon.installButton"
        description="Primary call to action of the homepage: install Gladys"
      >
        Install Gladys
      </Translate>
    </Link>
  );

  const demoButton = (
    <Link className={classnames(styles.btn, styles.btnGlass)} href={DEMO_URL}>
      {ICONS.play}
      <Translate
        id="home.horizon.demoButton"
        description="Secondary call to action of the homepage: open the online demo"
      >
        Try the live demo
      </Translate>
    </Link>
  );

  return (
    <>
      {isBlackFridayActive && shouldDisplayStarterKitLink && (
        <div
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            padding: "1rem",
            textAlign: "center",
          }}
        >
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
            <div style={{ fontSize: "0.9rem", opacity: 0.95 }}>
              {blackFridayTimeLeft.days > 0 &&
                `${blackFridayTimeLeft.days} ${lang === "fr" ? "j " : "d "}`}
              {blackFridayTimeLeft.hours}h {blackFridayTimeLeft.minutes}m{" "}
              {blackFridayTimeLeft.seconds}s
            </div>
          )}
        </div>
      )}

      <header className={styles.hero}>
        <span className={styles.badge}>
          <span className={styles.badgeDot}>{ICONS.sparkle}</span>
          <Translate
            id="home.horizon.badge"
            description="Small badge above the homepage title"
          >
            Gladys Assistant 5 · New design
          </Translate>
        </span>

        <h1 className={styles.heroTitle}>
          <Translate id="home.title" description="The home page title">
            Gladys Assistant
          </Translate>
          <br />
          <span className={styles.heroTitleAccent}>
            <Translate
              id="home.horizon.titleClaim"
              description="Second line of the homepage title"
            >
              A smart home that stays yours.
            </Translate>
          </span>
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

        <div className={styles.heroActions}>
          {installButton}
          {demoButton}
        </div>

        <div className={styles.heroTrust}>
          <span>
            <i className={styles.heroTrustDot} />
            <Translate
              id="home.horizon.trustFree"
              description="Homepage hero reassurance: free and open source"
            >
              Free and open source
            </Translate>
          </span>
          <span>
            <i className={styles.heroTrustDot} />
            <Translate
              id="home.horizon.trustSelfHosted"
              description="Homepage hero reassurance: self-hosted"
            >
              Self-hosted, no mandatory cloud
            </Translate>
          </span>
          <span>
            <i className={styles.heroTrustDot} />
            <Translate
              id="home.horizon.trustDocker"
              description="Homepage hero reassurance: one Docker command"
            >
              One Docker command
            </Translate>
          </span>
        </div>

        <div className={styles.heroShot}>
          <Shot
            asset={asset}
            name="hero"
            lang={lang}
            widths={SHOT_WIDTHS.hero}
            sizes="(max-width: 1240px) 100vw, 1120px"
            alt={translate({
              id: "home.horizon.heroShotAlt",
              description: "Alt text of the main homepage screenshot",
              message: "The Gladys Assistant dashboard",
            })}
            priority
          />
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>
              <Translate
                id="home.horizon.featuresEyebrow"
                description="Eyebrow above the features section"
              >
                Features
              </Translate>
            </span>
            <h2 className={styles.sectionTitle}>
              <Translate
                id="home.coolFeatures.title"
                description="Cool features description on the homepage"
              >
                Powerful Features, Ready to Use
              </Translate>
            </h2>
          </div>

          <FeatureRow
            eyebrow={
              <Translate
                id="home.horizon.eyebrowDashboard"
                description="Eyebrow of the dashboard feature"
              >
                Dashboard
              </Translate>
            }
            title={
              <Translate
                id="home.coolFeatures.dashboardTitle"
                description="Cool features dashboard title on the homepage"
              >
                See Everything at a Glance
              </Translate>
            }
            text={
              <Translate
                id="home.coolFeatures.dashboardDescrition"
                description="Cool features dashboard title on the homepage"
              >
                Temperature, security cameras, presence: monitor everything from
                one beautiful dashboard.
              </Translate>
            }
            shot={
              <Shot
                asset={asset}
                name="comfort"
                lang={lang}
                widths={SHOT_WIDTHS.feature}
                sizes="(max-width: 996px) 100vw, 620px"
                alt={translate({
                  id: "home.horizon.dashboardShotAlt",
                  description: "Alt text of the dashboard screenshot",
                  message: "A Gladys Assistant comfort dashboard",
                })}
              />
            }
          />

          <FeatureRow
            reversed
            eyebrow={
              <Translate
                id="home.horizon.eyebrowScenes"
                description="Eyebrow of the scenes feature"
              >
                Scenes
              </Translate>
            }
            title={
              <Translate
                id="home.coolFeatures.sceneTitle"
                description="Cool features scene title on the homepage"
              >
                Automate Your Entire Day
              </Translate>
            }
            text={
              <Translate
                id="home.coolFeatures.sceneDescription"
                description="Cool features scene title on the homepage"
              >
                Coffee brewing, lights turning on, music playing: all automatic.
                No coding required.
              </Translate>
            }
            shot={
              <Shot
                asset={asset}
                name="scene"
                lang={lang}
                widths={SHOT_WIDTHS.feature}
                sizes="(max-width: 996px) 100vw, 620px"
                alt={translate({
                  id: "home.horizon.sceneShotAlt",
                  description: "Alt text of the scene screenshot",
                  message: "The Gladys Assistant scene editor",
                })}
              />
            }
          />

          <FeatureRow
            eyebrow={
              <Translate
                id="home.horizon.eyebrowEnergy"
                description="Eyebrow of the energy feature"
              >
                Energy
              </Translate>
            }
            title={
              <Translate
                id="home.coolFeatures.energyTitle"
                description="Cool features energy title on the homepage"
              >
                Know Exactly What Your Home Consumes
              </Translate>
            }
            text={
              <Translate
                id="home.coolFeatures.energyDescription"
                description="Cool features energy description on the homepage"
              >
                Electricity, solar production, home battery: follow your energy
                in real time and cut the bill where it matters.
              </Translate>
            }
            shot={
              <Shot
                asset={asset}
                name="energy"
                lang={lang}
                widths={SHOT_WIDTHS.feature}
                sizes="(max-width: 996px) 100vw, 620px"
                alt={translate({
                  id: "home.horizon.energyShotAlt",
                  description: "Alt text of the energy screenshot",
                  message: "A Gladys Assistant energy dashboard",
                })}
              />
            }
          />

          <FeatureRow
            reversed
            eyebrow={
              <Translate
                id="home.horizon.eyebrowAssistant"
                description="Eyebrow of the assistant feature"
              >
                Assistant
              </Translate>
            }
            title={
              <Translate
                id="home.coolFeatures.chatTitle"
                description="Cool features chat title on the homepage"
              >
                Control Your Home by Voice
              </Translate>
            }
            text={
              <Translate
                id="home.coolFeatures.chatDescription"
                description="Cool features chat title on the homepage"
              >
                "Turn on the light in the kitchen" - Gladys responds instantly
                via its built-in voice assistant or by message on your phone.
              </Translate>
            }
            shot={
              <Shot
                asset={asset}
                name="chat"
                lang={lang}
                widths={SHOT_WIDTHS.feature}
                sizes="(max-width: 996px) 100vw, 620px"
                alt={translate({
                  id: "home.horizon.chatShotAlt",
                  description: "Alt text of the chat screenshot",
                  message: "Talking to Gladys Assistant",
                })}
              />
            }
          />
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>
              <Translate
                id="home.horizon.themesEyebrow"
                description="Eyebrow above the light/dark section"
              >
                Appearance
              </Translate>
            </span>
            <h2 className={styles.sectionTitle}>
              <Translate
                id="home.horizon.themesTitle"
                description="Title of the light/dark section"
              >
                Light or dark, your call
              </Translate>
            </h2>
            <p className={styles.sectionLead}>
              <Translate
                id="home.horizon.themesText"
                description="Description of the light/dark section"
              >
                The same glass, the same layout, two moods. Gladys follows
                your system or stays on the one you pick, and you can switch
                whenever you like, in one click.
              </Translate>
            </p>
          </div>

          <div className={styles.themeGrid}>
            <div>
              <Shot
                asset={asset}
                name="hero"
                lang={lang}
                widths={SHOT_WIDTHS.pair}
                sizes="(max-width: 820px) 100vw, 560px"
                alt={translate({
                  id: "home.horizon.heroShotAlt",
                  description: "Alt text of the main homepage screenshot",
                  message: "The Gladys Assistant dashboard",
                })}
              />
              <span className={styles.themeLabel}>
                <i
                  className={classnames(
                    styles.themeSwatch,
                    styles.themeSwatchLight
                  )}
                />
                <Translate
                  id="home.horizon.themeLight"
                  description="Label of the light theme screenshot"
                >
                  Light mode
                </Translate>
              </span>
            </div>
            <div>
              <Shot
                asset={asset}
                name="hero-dark"
                lang={lang}
                widths={SHOT_WIDTHS.pair}
                sizes="(max-width: 820px) 100vw, 560px"
                alt={translate({
                  id: "home.horizon.heroShotAltDark",
                  description: "Alt text of the dark theme screenshot",
                  message: "The Gladys Assistant dashboard in dark mode",
                })}
              />
              <span className={styles.themeLabel}>
                <i
                  className={classnames(
                    styles.themeSwatch,
                    styles.themeSwatchDark
                  )}
                />
                <Translate
                  id="home.horizon.themeDark"
                  description="Label of the dark theme screenshot"
                >
                  Dark mode
                </Translate>
              </span>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>
              <Translate
                id="home.horizon.compatibilitiesEyebrow"
                description="Eyebrow above the compatibilities section"
              >
                Compatibility
              </Translate>
            </span>
            <h2 className={styles.sectionTitle}>
              <Translate
                id="home.compatibilities.title"
                description="Cool features chat title on the homepage"
              >
                Works With Everything You Own
              </Translate>
            </h2>
            <p className={styles.sectionLead}>
              <Translate
                id="home.integrations.description"
                description="Integrations description of the homepage"
              >
                Open protocols, native integrations, and community external
                integrations for everything else.
              </Translate>
            </p>
          </div>

          <div className={styles.compatGrid}>
            {COMPATIBILITIES.map((item) => (
              <a
                key={item.title}
                className={styles.compatTile}
                href={asset(`docs/integrations/${item.docKey}`)}
              >
                <img
                  src={asset(`img/home/compatibilities/${item.imgSrc}`)}
                  width="254"
                  height="169"
                  loading="lazy"
                  alt={item.title}
                />
                <span className={styles.compatTileLabel}>{item.title}</span>
              </a>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link
              className={classnames(styles.btn, styles.btnQuiet)}
              href={integrationsUrl}
            >
              <Translate
                id="home.ctaAfterIntegrations"
                description="CTA after integrations section"
              >
                Browse All Integrations →
              </Translate>
            </Link>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>
              <Translate
                id="home.horizon.principlesEyebrow"
                description="Eyebrow above the principles section"
              >
                Principles
              </Translate>
            </span>
            <h2 className={styles.sectionTitle}>
              <Translate
                id="home.characteristics.title"
                description="Characteristics chat title on the homepage"
              >
                Built Different: Privacy-First, User-Focused
              </Translate>
            </h2>
          </div>

          <div className={styles.cardGrid}>
            <GlassCard
              icon="shield"
              title={
                <Translate
                  id="home.characteristics.privacyTitle"
                  description="Characteristics privacy title on the homepage"
                >
                  Privacy
                </Translate>
              }
              text={
                <Translate
                  id="home.characteristics.privacyDescription"
                  description="Characteristics chat title on the homepage"
                >
                  Gladys is self-hosted: your smart home data stays on your
                  local machine. No mandatory cloud, no tracking.
                </Translate>
              }
            />
            <GlassCard
              icon="sliders"
              title={
                <Translate
                  id="home.characteristics.easeOfUseTitle"
                  description="Characteristics ease of use title on the homepage"
                >
                  Easy to use
                </Translate>
              }
              text={
                <Translate
                  id="home.characteristics.easeOfUseDescription"
                  description="Characteristics ease of use title on the homepage"
                >
                  No terminal for day-to-day use: a clear interface to control
                  your home. Installation is guided via Docker.
                </Translate>
              }
            />
            <GlassCard
              icon="layout"
              title={
                <Translate
                  id="home.characteristics.cleanUITitle"
                  description="Characteristics ease of use title on the homepage"
                >
                  Clean UI
                </Translate>
              }
              text={
                <Translate
                  id="home.characteristics.cleanUIDescription"
                  description="Characteristics ease of use title on the homepage"
                >
                  Every pixel matters. We design first, then code.
                </Translate>
              }
            />
            <GlassCard
              icon="award"
              title={
                <Translate
                  id="home.characteristics.stableTitle"
                  description="Characteristics ease of use title on the homepage"
                >
                  Stable
                </Translate>
              }
              text={
                <Translate
                  id="home.characteristics.stableDescription"
                  description="Characteristics ease of use title on the homepage"
                >
                  Built to last decades. Your smart home will never let you
                  down.
                </Translate>
              }
            />
            <GlassCard
              icon="zap"
              title={
                <Translate
                  id="home.characteristics.fastTitle"
                  description="Characteristics ease of use title on the homepage"
                >
                  Fast
                </Translate>
              }
              text={
                <Translate
                  id="home.characteristics.fastDescription"
                  description="Characteristics ease of use title on the homepage"
                >
                  Lightning-fast interface, instant actions. We're obsessed with
                  performance.
                </Translate>
              }
            />
            <GlassCard
              icon="refresh"
              title={
                <Translate
                  id="home.characteristics.autoUpgradeTitle"
                  description="Characteristics ease of use title on the homepage"
                >
                  Auto upgrades
                </Translate>
              }
              text={
                <Translate
                  id="home.characteristics.autoUpgradeDescription"
                  description="Characteristics ease of use title on the homepage"
                >
                  New features and bug fixes installed automatically. Zero
                  hassle.
                </Translate>
              }
            />
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>
              <Translate
                id="home.horizon.communityEyebrow"
                description="Eyebrow above the testimonials section"
              >
                Community
              </Translate>
            </span>
            <h2 className={styles.sectionTitle}>
              <Translate
                id="home.testimonial.title"
                description="Testimonia title on the homepage"
              >
                What Our Community Says
              </Translate>
            </h2>
          </div>
          <div className={styles.testimonials}>
            <TestimonialHomeSection lang={lang} testimonials={testimonials} />
          </div>
        </section>

        {lang === "fr" && (
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>Presse</span>
              <h2 className={styles.sectionTitle}>Ils parlent de nous</h2>
              <p className={styles.sectionLead}>
                La presse et les créateurs de contenu ont testé Gladys
                Assistant. Découvre leurs avis.
              </p>
            </div>
            <div className={styles.pressGrid}>
              {PRESS.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener"
                  className={styles.pressCard}
                >
                  {item.thumbnail && (
                    <div className={styles.pressCardThumbnail}>
                      <img
                        src={asset(item.thumbnail)}
                        alt={item.title}
                        loading="lazy"
                      />
                      <div className={styles.pressCardPlayOverlay}>
                        <span className={styles.pressCardPlayTriangle} />
                      </div>
                    </div>
                  )}
                  <div className={styles.pressCardSource}>
                    <img
                      src={asset(item.logo)}
                      alt={item.source}
                      width="22"
                      height="22"
                      loading="lazy"
                    />
                    <span>{item.source}</span>
                  </div>
                  <h3 className={styles.pressCardTitle}>{item.title}</h3>
                  <span className={styles.pressCardLink}>{item.linkLabel}</span>
                </a>
              ))}
            </div>
          </section>
        )}

        {lang === "fr" && (
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>YouTube</span>
              <h2 className={styles.sectionTitle}>
                <Translate
                  id="home.videos.title"
                  description="Youtube videos title of the homepage"
                >
                  Our latest YouTube videos
                </Translate>
              </h2>
              <p className={styles.sectionLead}>
                <Translate
                  id="home.videos.description"
                  description="Youtube videos description of the homepage"
                >
                  We are active on our YouTube channel, if you like our content,
                  you can subscribe!
                </Translate>
              </p>
            </div>
            <div className={styles.videoGrid}>
              {YOUTUBE_VIDEOS.map((video) => (
                <div key={video.id}>
                  <div className={styles.videoFrame}>
                    <YoutubeEmbedVideo id={video.id} disablePadding />
                  </div>
                  <h3 className={styles.videoTitle}>{video.title}</h3>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className={classnames(styles.section, styles.sectionTight)}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>FAQ</span>
            <h2 className={styles.sectionTitle}>
              <Translate
                id="home.horizon.faqTitle"
                description="Title of the FAQ section"
              >
                Frequently asked questions
              </Translate>
            </h2>
          </div>
          <div className={styles.faqGrid}>
            {FAQQuestions[lang].map((oneElement, index) => (
              <div className={styles.faqItem} key={index}>
                <h3 className={styles.faqQuestion}>{oneElement.title}</h3>
                <p className={styles.faqAnswer}>{oneElement.response}</p>
              </div>
            ))}
          </div>
        </section>

        {shouldDisplayStarterKitLink && (
          <section className={classnames(styles.section, styles.sectionTight)}>
            <div className={styles.asideCard}>
              <p className={styles.asideText}>
                <b>Vous préférez éviter l'installation ?</b> Le{" "}
                <Link href="/fr/starter-kit">kit de démarrage</Link> inclut un
                mini-PC avec Gladys pré-installé, la formation officielle et 6
                mois de Gladys Plus. Option clé en main, sans obligation.
              </p>
              <Link
                className={classnames(styles.btn, styles.btnQuiet)}
                href="/fr/starter-kit"
              >
                Découvrir le kit de démarrage →
              </Link>
            </div>
          </section>
        )}

        <section className={classnames(styles.section, styles.sectionTight)}>
          <div className={styles.ctaPanel}>
            <h2 className={styles.ctaTitle}>
              <Translate id="home.finalCta.title" description="Final CTA title">
                Ready to Take Control of Your Smart Home?
              </Translate>
            </h2>
            <p className={styles.ctaText}>
              <Translate
                id="home.finalCta.subtitle"
                description="Final CTA subtitle"
              >
                Join the open-source smart home revolution
              </Translate>
            </p>
            <div className={styles.ctaActions}>
              {installButton}
              {demoButton}
            </div>
          </div>
        </section>

        <section className={classnames(styles.section, styles.newsletter)}>
          <SubcribeNewsletter lang={lang} />
        </section>
      </main>
    </>
  );
}

export { Home };
