// Content for the "Reolink RTSP URL" guide page.
// Search Console shows steady US and Canadian impressions on "reolink rtsp
// url", "reolink enable rtsp", "reolink e1 pro rtsp" and similar (position
// 8-16), mostly landing on an auto-translated forum thread. Reolink is sold
// worldwide and Gladys has a local Reolink integration, so a clean English
// guide on the main site is worth having. URL formats follow Reolink's own
// "Introduction to RTSP" support article.

const reolinkRtspContent = {
  en: {
    meta: {
      title: "Reolink RTSP URL: Enable RTSP and Find Your Stream",
      description:
        "The Reolink RTSP URL format for main and sub streams, cameras and NVR channels, how to enable RTSP on recent firmware, fixes for common errors, and how to view your Reolink cameras locally in Gladys.",
    },
    screenshotCaption:
      "Reolink cameras streamed locally on a Gladys dashboard, next to the rest of your home.",
    hero: {
      title: "Reolink RTSP URL: how to enable RTSP and find your stream",
      subtitle:
        "The exact URL format for Reolink cameras and NVRs, the setting you need to switch on first, and what to do when the stream won't open.",
      intro: [
        "RTSP is the standard way to read a camera's live video from another app: VLC, an NVR, Frigate, Blue Iris, or a smart home platform like Gladys Assistant. Reolink cameras support it, but recent firmware ships with RTSP turned off, and the URL format isn't obvious.",
        "Here is everything you need: how to enable RTSP, the URL for the main and sub streams, the format for NVR channels, and fixes for the most common problems.",
      ],
      primaryCta: {
        label: "Reolink integration for Gladys",
        href: "/docs/integrations/external/reolink/",
      },
      secondaryCta: {
        label: "Add any RTSP camera →",
        href: "/docs/integrations/camera/",
      },
    },
    problem: {
      title: "Step 1: enable RTSP on your Reolink camera",
      intro:
        "On recent firmware, RTSP is disabled by default for security. Turn it on before trying any URL:",
      points: [
        "Open the Reolink app or the Reolink desktop client and select your camera (or your NVR).",
        "Go to the camera settings, then Network, then Advanced, and open the server or port settings (the exact menu names vary with the app version).",
        "Switch RTSP on and note the RTSP port: 554 by default.",
        "Give the camera a fixed IP address in your router (a DHCP reservation), so the URL doesn't change after a reboot.",
      ],
      outro:
        "While you're in the settings, check the camera's username and password: the RTSP URL uses the camera account, not your Reolink cloud account.",
    },
    comparison: {
      title: "Step 2: the Reolink RTSP URL format",
      intro:
        "Replace USER, PASSWORD and IP with your camera's account and local IP address:",
      cols: {
        feature: "Stream",
        gladys: "RTSP URL",
        other: "Use it for",
      },
      rows: [
        {
          feature: "Main stream (camera)",
          gladys: "rtsp://USER:PASSWORD@IP:554/Preview_01_main",
          other: "Full-resolution recording",
        },
        {
          feature: "Sub stream (camera)",
          gladys: "rtsp://USER:PASSWORD@IP:554/Preview_01_sub",
          other: "Live view, dashboards, low bandwidth",
        },
        {
          feature: "Older format (most models)",
          gladys: "rtsp://USER:PASSWORD@IP:554/h264Preview_01_main",
          other: "Same stream, used by many guides and apps",
        },
        {
          feature: "NVR or Home Hub, channel 2",
          gladys: "rtsp://USER:PASSWORD@NVR_IP:554/Preview_02_main",
          other: "Camera connected to the NVR's 2nd channel",
        },
        {
          feature: "Custom port",
          gladys: "rtsp://USER:PASSWORD@IP:PORT/Preview_01_main",
          other: "If you changed the RTSP port",
        },
      ],
      outro:
        "The channel number is 01 for a standalone camera. On an NVR or a Home Hub, it's the number of the channel the camera is connected to (02, 03…). Test the URL in VLC (Media → Open Network Stream) before using it anywhere else.",
    },
    features: {
      title: "Step 3: fix the most common RTSP problems",
      intro: "If the stream doesn't open, it's usually one of these:",
      cards: [
        {
          icon: "🔒",
          title: "RTSP is still off",
          text: "Recent firmware disables RTSP by default. Double-check the server or port settings, and save.",
        },
        {
          icon: "🔑",
          title: "Special characters in the password",
          text: "Characters like @, :, # or / break the URL. URL-encode them (@ becomes %40) or use a password without them.",
        },
        {
          icon: "🎞️",
          title: "H.265 main stream",
          text: "Some players can't decode H.265. Use the sub stream for live view, or switch the main stream to H.264 in the camera settings.",
        },
        {
          icon: "🔋",
          title: "Battery cameras",
          text: "Battery models go back to sleep: Reolink limits their RTSP sessions to about 5 minutes. They're not made for continuous streaming.",
        },
        {
          icon: "🌐",
          title: "Wrong network",
          text: "RTSP only works on your local network. From outside, use a VPN rather than exposing port 554 to the internet.",
        },
        {
          icon: "🎥",
          title: "4K cameras on some NVRs",
          text: "Reolink notes that 4K cameras on some NVR hardware only expose the fluent (sub) stream over RTSP.",
        },
      ],
    },
    how: {
      title: "View your Reolink cameras in Gladys",
      intro: "Gladys Assistant gives you two ways to add a Reolink camera, both local:",
      points: [
        "The Reolink integration (recommended): scans your network, and exposes images and motion detection for every camera, plus battery, spotlight, siren or PTZ presets depending on the model. No Reolink account, nothing goes through the cloud.",
        "The generic camera integration: paste the RTSP URL of any camera, Reolink or not, and display it on your dashboard.",
        "Then use your cameras in scenes: get a snapshot on your phone when motion is detected, turn on the spotlight when a door opens, or have the AI describe what the camera sees.",
      ],
      outro:
        "Everything stays on your network: Gladys reads the stream directly from the camera.",
    },
    solution: {
      title: "Local cameras, no subscription required",
      paragraphs: [
        "Reolink is one of the few camera brands that work fully locally, with RTSP and no mandatory cloud. Gladys keeps it that way: your video goes from the camera to your own machine, and nowhere else.",
        "Gladys is free and open-source. An optional Gladys Plus subscription adds encrypted remote access to your cameras from anywhere, without opening ports on your router.",
      ],
      link: {
        label: "Set up the Reolink integration →",
        href: "/docs/integrations/external/reolink/",
      },
    },
    related: {
      title: "Go further",
      intro: "Build a complete, local security setup:",
      links: [
        {
          label: "DIY home alarm system",
          href: "/diy-home-alarm-system/",
          text: "Combine your cameras with motion and door sensors, locally.",
        },
        {
          label: "Add any RTSP camera",
          href: "/docs/integrations/camera/",
          text: "The generic camera integration for any RTSP or HTTP stream.",
        },
        {
          label: "Control your home with AI",
          href: "/ai-smart-home/",
          text: "Let the AI look at a camera image and decide whether to alert you.",
        },
        {
          label: "Works with Gladys",
          href: "/works-with/",
          text: "The other brands and protocols supported by Gladys.",
        },
      ],
    },
    faqTitle: "Frequently asked questions",
    cta: {
      title: "Watch your Reolink cameras locally",
      text: "Gladys is free, open-source and runs on your own hardware. Add your Reolink cameras in a few clicks and keep your video at home.",
      primary: { label: "Get started", href: "/docs/" },
      secondary: {
        label: "Reolink integration",
        href: "/docs/integrations/external/reolink/",
      },
    },
  },

  fr: {
    meta: {
      title: "URL RTSP Reolink : activer le RTSP et trouver le flux",
      description:
        "Le format d'URL RTSP Reolink pour les flux principal et secondaire, les caméras et les voies de NVR, comment activer le RTSP sur les firmwares récents, les solutions aux erreurs courantes, et comment voir vos caméras Reolink en local dans Gladys.",
    },
    screenshotCaption:
      "Des caméras Reolink diffusées en local sur un tableau de bord Gladys, à côté du reste de la maison.",
    hero: {
      title: "URL RTSP Reolink : comment activer le RTSP et trouver votre flux",
      subtitle:
        "Le format d'URL exact pour les caméras et NVR Reolink, le réglage à activer d'abord, et quoi faire quand le flux refuse de s'ouvrir.",
      intro: [
        "Le RTSP est la façon standard de lire la vidéo en direct d'une caméra depuis une autre application : VLC, un NVR, Frigate, Blue Iris, ou une solution domotique comme Gladys Assistant. Les caméras Reolink le prennent en charge, mais les firmwares récents livrent le RTSP désactivé, et le format de l'URL n'est pas évident.",
        "Voici tout ce qu'il faut savoir : comment activer le RTSP, l'URL des flux principal et secondaire, le format pour les voies d'un NVR, et les solutions aux problèmes les plus courants.",
      ],
      primaryCta: {
        label: "Intégration Reolink pour Gladys",
        href: "/docs/integrations/external/reolink/",
      },
      secondaryCta: {
        label: "Ajouter n'importe quelle caméra RTSP →",
        href: "/docs/integrations/camera/",
      },
    },
    problem: {
      title: "Étape 1 : activer le RTSP sur votre caméra Reolink",
      intro:
        "Sur les firmwares récents, le RTSP est désactivé par défaut pour des raisons de sécurité. Activez-le avant d'essayer la moindre URL :",
      points: [
        "Ouvrez l'application Reolink ou le client Reolink sur ordinateur, et sélectionnez votre caméra (ou votre NVR).",
        "Allez dans les réglages de la caméra, puis Réseau, puis Avancé, et ouvrez les réglages serveur ou des ports (le nom exact des menus varie selon la version de l'application).",
        "Activez le RTSP et notez le port RTSP : 554 par défaut.",
        "Donnez une adresse IP fixe à la caméra dans votre box ou routeur (réservation DHCP), pour que l'URL ne change pas après un redémarrage.",
      ],
      outro:
        "Tant que vous êtes dans les réglages, vérifiez l'identifiant et le mot de passe de la caméra : l'URL RTSP utilise le compte de la caméra, pas votre compte cloud Reolink.",
    },
    comparison: {
      title: "Étape 2 : le format de l'URL RTSP Reolink",
      intro:
        "Remplacez USER, PASSWORD et IP par le compte de votre caméra et son adresse IP locale :",
      cols: {
        feature: "Flux",
        gladys: "URL RTSP",
        other: "À utiliser pour",
      },
      rows: [
        {
          feature: "Flux principal (caméra)",
          gladys: "rtsp://USER:PASSWORD@IP:554/Preview_01_main",
          other: "L'enregistrement en pleine résolution",
        },
        {
          feature: "Flux secondaire (caméra)",
          gladys: "rtsp://USER:PASSWORD@IP:554/Preview_01_sub",
          other: "Le direct, les tableaux de bord, une faible bande passante",
        },
        {
          feature: "Ancien format (la plupart des modèles)",
          gladys: "rtsp://USER:PASSWORD@IP:554/h264Preview_01_main",
          other: "Le même flux, utilisé par beaucoup de guides et d'applications",
        },
        {
          feature: "NVR ou Home Hub, voie 2",
          gladys: "rtsp://USER:PASSWORD@IP_DU_NVR:554/Preview_02_main",
          other: "Une caméra branchée sur la 2e voie du NVR",
        },
        {
          feature: "Port personnalisé",
          gladys: "rtsp://USER:PASSWORD@IP:PORT/Preview_01_main",
          other: "Si vous avez changé le port RTSP",
        },
      ],
      outro:
        "Le numéro de voie est 01 pour une caméra seule. Sur un NVR ou un Home Hub, c'est le numéro de la voie sur laquelle la caméra est branchée (02, 03…). Testez l'URL dans VLC (Média → Ouvrir un flux réseau) avant de l'utiliser ailleurs.",
    },
    features: {
      title: "Étape 3 : corriger les problèmes RTSP les plus courants",
      intro: "Si le flux ne s'ouvre pas, c'est en général l'une de ces causes :",
      cards: [
        {
          icon: "🔒",
          title: "Le RTSP est toujours désactivé",
          text: "Les firmwares récents désactivent le RTSP par défaut. Revérifiez les réglages serveur ou des ports, et enregistrez.",
        },
        {
          icon: "🔑",
          title: "Caractères spéciaux dans le mot de passe",
          text: "Les caractères comme @, :, # ou / cassent l'URL. Encodez-les (@ devient %40) ou choisissez un mot de passe sans ces caractères.",
        },
        {
          icon: "🎞️",
          title: "Flux principal en H.265",
          text: "Certains lecteurs ne décodent pas le H.265. Utilisez le flux secondaire pour le direct, ou passez le flux principal en H.264 dans les réglages de la caméra.",
        },
        {
          icon: "🔋",
          title: "Caméras sur batterie",
          text: "Les modèles sur batterie se remettent en veille : Reolink limite leurs sessions RTSP à environ 5 minutes. Ils ne sont pas faits pour un flux continu.",
        },
        {
          icon: "🌐",
          title: "Mauvais réseau",
          text: "Le RTSP ne fonctionne que sur votre réseau local. Depuis l'extérieur, utilisez un VPN plutôt que d'exposer le port 554 sur internet.",
        },
        {
          icon: "🎥",
          title: "Caméras 4K sur certains NVR",
          text: "Reolink indique que les caméras 4K branchées sur certains NVR n'exposent que le flux fluide (secondaire) en RTSP.",
        },
      ],
    },
    how: {
      title: "Voir vos caméras Reolink dans Gladys",
      intro: "Gladys Assistant vous offre deux façons d'ajouter une caméra Reolink, toutes deux en local :",
      points: [
        "L'intégration Reolink (recommandée) : elle scanne votre réseau et expose les images et la détection de mouvement de chaque caméra, plus la batterie, le projecteur, la sirène ou les positions PTZ selon le modèle. Pas de compte Reolink, rien ne passe par le cloud.",
        "L'intégration caméra générique : collez l'URL RTSP de n'importe quelle caméra, Reolink ou non, et affichez-la sur votre tableau de bord.",
        "Utilisez ensuite vos caméras dans des scènes : recevez une photo sur votre téléphone lors d'un mouvement, allumez le projecteur quand une porte s'ouvre, ou demandez à l'IA de décrire ce que voit la caméra.",
      ],
      outro:
        "Tout reste sur votre réseau : Gladys lit le flux directement depuis la caméra.",
    },
    solution: {
      title: "Des caméras locales, sans abonnement obligatoire",
      paragraphs: [
        "Reolink fait partie des rares marques de caméras qui fonctionnent entièrement en local, avec le RTSP et sans cloud obligatoire. Gladys conserve cet avantage : votre vidéo va de la caméra à votre propre machine, et nulle part ailleurs.",
        "Gladys est gratuite et open source. Un abonnement Gladys Plus optionnel ajoute l'accès distant chiffré à vos caméras depuis n'importe où, sans ouvrir de ports sur votre box.",
      ],
      link: {
        label: "Configurer l'intégration Reolink →",
        href: "/docs/integrations/external/reolink/",
      },
    },
    related: {
      title: "Aller plus loin",
      intro: "Construisez une installation de sécurité complète et locale :",
      links: [
        {
          label: "Alarme maison DIY",
          href: "/diy-home-alarm-system/",
          text: "Combinez vos caméras avec des détecteurs de mouvement et d'ouverture, en local.",
        },
        {
          label: "Ajouter n'importe quelle caméra RTSP",
          href: "/docs/integrations/camera/",
          text: "L'intégration caméra générique pour tout flux RTSP ou HTTP.",
        },
        {
          label: "Piloter sa maison avec l'IA",
          href: "/ai-smart-home/",
          text: "Laissez l'IA regarder une image de caméra et décider s'il faut vous alerter.",
        },
        {
          label: "Compatible Gladys",
          href: "/works-with/",
          text: "Les autres marques et protocoles pris en charge par Gladys.",
        },
      ],
    },
    faqTitle: "Questions fréquentes",
    cta: {
      title: "Regardez vos caméras Reolink en local",
      text: "Gladys est gratuite, open source et tourne sur votre propre matériel. Ajoutez vos caméras Reolink en quelques clics et gardez votre vidéo chez vous.",
      primary: { label: "Commencer", href: "/docs/" },
      secondary: {
        label: "Intégration Reolink",
        href: "/docs/integrations/external/reolink/",
      },
    },
  },
};

export const reolinkRtspFaqEn = [
  {
    question: "What is the RTSP URL of a Reolink camera?",
    answer:
      "rtsp://USER:PASSWORD@IP:554/Preview_01_main for the main stream and rtsp://USER:PASSWORD@IP:554/Preview_01_sub for the sub stream, where USER and PASSWORD are the camera's account and IP its local address. The older h264Preview_01_main path also works on most models.",
  },
  {
    question: "How do I enable RTSP on a Reolink camera?",
    answer:
      "In the Reolink app or desktop client, open the camera settings, then Network, Advanced, and the server or port settings, and switch RTSP on. Recent firmware ships with RTSP disabled by default. The default RTSP port is 554.",
  },
  {
    question: "What is the RTSP URL for a camera connected to a Reolink NVR?",
    answer:
      "Use the NVR's IP address and the channel number of the camera: rtsp://USER:PASSWORD@NVR_IP:554/Preview_02_main for the camera on channel 2, Preview_03_main for channel 3, and so on.",
  },
  {
    question: "Do Reolink battery cameras support RTSP?",
    answer:
      "Only in a limited way. Battery-powered cameras are designed to sleep, and Reolink limits their RTSP preview sessions to about 5 minutes, so they aren't suited to continuous streaming. Cameras on permanent power (PoE or plugged-in Wi-Fi models) are the right choice for 24/7 RTSP.",
  },
  {
    question: "Why doesn't my Reolink RTSP stream work in VLC?",
    answer:
      "The most common causes are RTSP still being disabled in the camera settings, special characters in the password that need to be URL-encoded, and an H.265 main stream the player can't decode. Try the sub stream first, and check that you're on the same local network as the camera.",
  },
  {
    question: "Can I view Reolink cameras without the Reolink app or cloud?",
    answer:
      "Yes. Over RTSP, any compatible app can read the stream locally. Gladys Assistant also has a free Reolink integration that talks to your cameras directly on your network, with no Reolink account, for images, motion detection, spotlight, siren and PTZ presets.",
  },
];

export const reolinkRtspFaqFr = [
  {
    question: "Quelle est l'URL RTSP d'une caméra Reolink ?",
    answer:
      "rtsp://USER:PASSWORD@IP:554/Preview_01_main pour le flux principal et rtsp://USER:PASSWORD@IP:554/Preview_01_sub pour le flux secondaire, où USER et PASSWORD sont le compte de la caméra et IP son adresse locale. L'ancien chemin h264Preview_01_main fonctionne aussi sur la plupart des modèles.",
  },
  {
    question: "Comment activer le RTSP sur une caméra Reolink ?",
    answer:
      "Dans l'application Reolink ou le client sur ordinateur, ouvrez les réglages de la caméra, puis Réseau, Avancé, et les réglages serveur ou des ports, et activez le RTSP. Les firmwares récents le livrent désactivé par défaut. Le port RTSP par défaut est 554.",
  },
  {
    question: "Quelle est l'URL RTSP d'une caméra branchée sur un NVR Reolink ?",
    answer:
      "Utilisez l'adresse IP du NVR et le numéro de voie de la caméra : rtsp://USER:PASSWORD@IP_DU_NVR:554/Preview_02_main pour la caméra sur la voie 2, Preview_03_main pour la voie 3, et ainsi de suite.",
  },
  {
    question: "Les caméras Reolink sur batterie prennent-elles en charge le RTSP ?",
    answer:
      "De façon limitée seulement. Les caméras sur batterie sont conçues pour se mettre en veille, et Reolink limite leurs sessions RTSP à environ 5 minutes : elles ne conviennent pas à un flux continu. Les caméras alimentées en permanence (PoE ou modèles Wi-Fi sur secteur) sont le bon choix pour du RTSP 24h/24.",
  },
  {
    question: "Pourquoi mon flux RTSP Reolink ne marche-t-il pas dans VLC ?",
    answer:
      "Les causes les plus fréquentes : le RTSP est encore désactivé dans les réglages de la caméra, le mot de passe contient des caractères spéciaux à encoder, ou le flux principal est en H.265 et le lecteur ne sait pas le décoder. Essayez d'abord le flux secondaire, et vérifiez que vous êtes sur le même réseau local que la caméra.",
  },
  {
    question: "Peut-on voir ses caméras Reolink sans l'application ni le cloud Reolink ?",
    answer:
      "Oui. En RTSP, n'importe quelle application compatible lit le flux en local. Gladys Assistant propose aussi une intégration Reolink gratuite qui parle directement à vos caméras sur votre réseau, sans compte Reolink, pour les images, la détection de mouvement, le projecteur, la sirène et les positions PTZ.",
  },
];

export default reolinkRtspContent;
