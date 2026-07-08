import React from "react";
import Translate from "@docusaurus/Translate";
import styles from "./styles.module.css";
import useRegion from "./useRegion";
import { PRICES, formatPrice } from "./pricing";

const e2eSummaryFr = (
  <>
    Tes commandes et sauvegardes sont chiffrées de bout en bout : même si les
    serveurs Gladys Plus étaient compromis, personne ne peut lire tes données
    sans la clé privée de ton instance locale.
  </>
);

const e2eTechnicalFr = (
  <>
    J'ai passé beaucoup de temps à étudier l'état de l'art (Apple iMessage,
    Dashlane, Insomnia, ProtonMail). Gladys Plus chiffre tes commandes en
    AES-GCM 256 bits avec une clé unique par message, encapsulée en RSA-OAEP 2048
    bits avec la clé publique de ton instance, signée en ECDSA P-256 avec une
    date d'expiration anti-replay. Côté Gladys, tu valides manuellement chaque
    clé publique pour bloquer le man-in-the-middle. Même si Gladys Plus est
    compromis, l'attaquant ne peut rien faire sans ta clé privée.
  </>
);

const e2eSummaryEn = (
  <>
    Your commands and backups are end-to-end encrypted: even if Gladys Plus
    servers were compromised, nobody can read your data without your local
    instance's private key.
  </>
);

const e2eTechnicalEn = (
  <>
    I spent a lot of time studying the state of the art (Apple iMessage,
    Dashlane, Insomnia, ProtonMail). Gladys Plus encrypts your commands in
    AES-GCM 256-bit with a unique key per message, wrapped with RSA-OAEP 2048-bit
    using your instance's public key, signed with ECDSA P-256 and an expiry date
    to prevent replay attacks. On Gladys side, you manually validate each public
    key to block man-in-the-middle attacks. Even if Gladys Plus is compromised,
    an attacker can do nothing without your private key.
  </>
);

const buildDataFr = (prices, currency) => [
  {
    title: "Pourquoi s'inscrire à Gladys Plus ?",
    description: (
      <>
        Tu as envie d'accéder simplement et de façon sécurisée à ton instance
        Gladys de n'importe où dans le monde ? Avoir des sauvegardes
        quotidiennes chiffrées ? Brancher Enedis, des modèles d'IA Open-Weight
        (hébergés en France chez Scaleway), du streaming caméra, ou un serveur
        MCP ? Soutenir
        un projet open-source français en pleine croissance ? Gladys Plus est
        fait pour toi !
      </>
    ),
  },
  {
    title: "Quelle différence entre la formule Lite et la formule Plus ?",
    description: (
      <>
        <strong>Lite</strong> ({formatPrice(prices.lite.monthly, currency)}/mois
        ou {formatPrice(prices.lite.yearly, currency)}/an) couvre l'essentiel :
        accès à distance chiffré, Google Home/Alexa, API REST ouverte, comptes
        famille. <strong>Plus</strong> ({formatPrice(prices.plus.monthly, currency)}/mois
        ou {formatPrice(prices.plus.yearly, currency)}/an) ajoute les
        sauvegardes chiffrées quotidiennes, le streaming caméra à distance,
        des modèles d'IA Open-Weight (hébergés en France chez Scaleway),
        l'intégration Enedis et
        le serveur MCP. Tu peux passer de l'un à l'autre à tout moment.
      </>
    ),
  },
  {
    title: "Comment activer Gladys Plus depuis mon instance Gladys existante ?",
    description: (
      <>
        Une fois abonné, tu reçois un email avec ton lien d'activation. Tu te
        connectes ensuite à ton instance Gladys locale, tu vas dans{" "}
        <em>Paramètres → Gladys Plus</em>, tu te connectes avec ton email/mot de
        passe et c'est tout. Aucun reset, aucune perte de configuration.
      </>
    ),
  },
  {
    title: "Est-ce que je peux me désabonner à tout moment ?",
    description: (
      <>
        Bien sûr ! Gladys c'est un projet open-source, pas une grosse entreprise
        sans scrupule 😄 Tu peux annuler ton abonnement en un clic depuis
        l'interface de Gladys Plus. Le bouton n'est pas caché.
      </>
    ),
  },
  {
    title: "Satisfait ou remboursé ?",
    description: (
      <>
        Oui. Si Gladys Plus ne te donne pas entière satisfaction, envoie-moi un
        email et je te rembourse, sans discussion. N'hésite pas à me dire ce qui
        n'allait pas pour que je puisse améliorer le service 🙂
      </>
    ),
  },
  {
    title:
      "Que se passe-t-il à la fin des 6 mois offerts du kit de démarrage ?",
    description: (
      <>
        Si tu as acheté le kit de démarrage Gladys, tu bénéficies de 6 mois
        Gladys Plus offerts. À la fin, tu reçois un email un peu avant la fin de
        la période et tu choisis librement de t'abonner ou pas. Aucun
        prélèvement automatique caché : tu décides.
      </>
    ),
  },
  {
    title: "Pourquoi Gladys Plus est-il payant ?",
    description: (
      <>
        Gladys et tout son code source sont gratuits et open-source pour
        toujours. Mais open-source ne veut pas dire gratuit à faire vivre :
        serveurs, domaines, communauté, emails, matériel, et surtout le temps
        que je passe sur le projet. Ce projet respecte ta vie privée et{" "}
        <b>vit uniquement de ces contributions</b>. Pas d'investisseurs, pas de
        publicité, pas de revente de données.
      </>
    ),
  },
  {
    title: "Peux-tu parler du chiffrement de bout en bout ?",
    description: e2eSummaryFr,
    technicalDetail: e2eTechnicalFr,
  },
];

const buildDataEn = (prices, currency) => [
  {
    title: "Why should I subscribe to Gladys Plus?",
    description: (
      <>
        Want secure remote access to your Gladys instance from anywhere?
        Encrypted daily backups? Enedis, Open-Weight AI models, camera
        streaming, or an MCP server? Support a growing
        French open-source project? Gladys Plus is for you!
      </>
    ),
  },
  {
    title: "What's the difference between the Lite and Plus plans?",
    description: (
      <>
        <strong>Lite</strong> ({formatPrice(prices.lite.monthly, currency)}/month
        or {formatPrice(prices.lite.yearly, currency)}/year) covers the basics:
        encrypted remote access, Google Home/Alexa, open REST API, family
        accounts. <strong>Plus</strong> ({formatPrice(prices.plus.monthly, currency)}/month
        or {formatPrice(prices.plus.yearly, currency)}/year) adds daily
        encrypted backups, remote camera streaming, Open-Weight AI models,
        Enedis integration, and an MCP server.
        You can switch
        between the two at any time.
      </>
    ),
  },
  {
    title: "How do I activate Gladys Plus on my existing Gladys instance?",
    description: (
      <>
        After subscribing, you'll get an email with your activation link. Open
        your local Gladys instance, go to <em>Settings → Gladys Plus</em>, sign
        in with your email/password and that's it. No reset, no configuration
        lost.
      </>
    ),
  },
  {
    title: "Can I unsubscribe at any time?",
    description: (
      <>
        Of course! Gladys is an open-source project, not a creepy organization
        😄 You can cancel in one click from the Gladys Plus interface. The
        button is not hidden.
      </>
    ),
  },
  {
    title: "Satisfied or refunded?",
    description: (
      <>
        Yes. If you're not satisfied, just email me and I'll refund you, no
        questions asked. Feel free to share what didn't work so I can improve 🙂
      </>
    ),
  },
  {
    title: "Why isn't Gladys Plus free?",
    description: (
      <>
        Gladys and all its source code is free and open-source forever. But
        open-source doesn't mean free to run: servers, domains, community, email
        services, hardware, and the time I spend on the project. This project
        respects your privacy and <b>lives only on these contributions</b>. No
        investors, no ads, no data resale.
      </>
    ),
  },
  {
    title: "Can you explain how end-to-end encryption works?",
    description: e2eSummaryEn,
    technicalDetail: e2eTechnicalEn,
  },
];

function FaqItem({ item, lang }) {
  return (
    <div className={styles.faqItem}>
      <h3>{item.title}</h3>
      <div className={styles.faqAnswer}>{item.description}</div>
      {item.technicalDetail && (
        <details className={styles.faqDetails}>
          <summary>
            <Translate id="gladysPlusPage.v2.faq.e2e.details">
              Read the technical details →
            </Translate>
          </summary>
          <div className={styles.faqTechnical}>{item.technicalDetail}</div>
        </details>
      )}
    </div>
  );
}

function FAQPlus({ lang }) {
  const region = useRegion();
  const prices = PRICES[region];
  const { currency } = prices;
  const data =
    lang === "en"
      ? buildDataEn(prices, currency)
      : buildDataFr(prices, currency);
  return (
    <section
      id="faq"
      className={styles.section}
      aria-labelledby="faq-plus-title"
    >
      <h2 id="faq-plus-title" className={styles.sectionTitle}>
        {lang === "en" ? "Frequently asked questions" : "Questions fréquentes"}
      </h2>
      <div className={styles.faqGrid}>
        {data.map((item, i) => (
          <FaqItem item={item} lang={lang} key={i} />
        ))}
      </div>
    </section>
  );
}

export default FAQPlus;
