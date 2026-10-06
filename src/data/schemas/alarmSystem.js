import {
  SITE_URL,
  toFaqPage,
  getOrganizationNode,
  getWebSiteNode,
  getOgImageUrl,
} from "../structuredData";
import { alarmFaqEn, alarmFaqFr, alarmFaqDe } from "../alarmSystemData";

export function getAlarmSystemPageSchema(lang) {
  const prefix = lang === "en" ? "" : `/${lang}`;
  const pageUrl = `${SITE_URL}${prefix}/diy-home-alarm-system/`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationNode(),
      getWebSiteNode(lang),
      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          lang === "fr"
            ? "Alarme maison DIY : créez la vôtre, locale et privée"
            : lang === "de"
              ? "Alarmanlage selber bauen: lokal und privat"
              : "DIY home alarm system: build your own, local and private",
        description:
          lang === "fr"
            ? "Créez une vraie alarme maison DIY avec Gladys : modes armé, partiel et panique, détecteurs de mouvement et d'ouverture, photos de caméra et alertes instantanées, en local sur du matériel qui vous appartient et avec vos données gardées chez vous."
            : lang === "de"
              ? "Bau dir mit Gladys eine echte DIY-Alarmanlage: Scharf-, Teil- und Panikmodus, Bewegungs- und Türsensoren, Kamera-Schnappschüsse und Sofortbenachrichtigungen, alles lokal auf deiner eigenen Hardware, deine Daten bleiben zu Hause."
              : "Build a real DIY home alarm system with Gladys: armed, partial and panic modes, motion and door sensors, camera snapshots and instant alerts, all running locally on hardware you own with your data kept at home.",
        image: getOgImageUrl(pageUrl, lang),
        url: pageUrl,
        inLanguage: lang,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        author: {
          "@type": "Person",
          name: "Pierre-Gilles Leymarie",
        },
        publisher: { "@id": `${SITE_URL}/#organization` },
        about: [
          { "@type": "Thing", name: "DIY home alarm system" },
          { "@type": "Thing", name: "Local private home security" },
          { "@type": "SoftwareApplication", name: "Gladys Assistant" },
        ],
      },
      toFaqPage(lang === "fr" ? alarmFaqFr : lang === "de" ? alarmFaqDe : alarmFaqEn, pageUrl),
    ],
  };
}
