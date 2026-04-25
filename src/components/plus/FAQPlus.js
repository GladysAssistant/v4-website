import React from "react";
import styles from "./styles.module.css";

const dataFr = [
  {
    title: "Pourquoi s'inscrire à Gladys Plus ?",
    description: (
      <>
        Tu as envie d'accéder simplement et de façon sécurisée à ton instance
        Gladys de n'importe où dans le monde ? Avoir des sauvegardes
        quotidiennes chiffrées ? Brancher Enedis, l'IA Mistral (hébergée en
        France chez Scaleway), du streaming caméra, ou un serveur MCP ? Soutenir
        un projet open-source français en pleine croissance ? Gladys Plus est
        fait pour toi !
      </>
    ),
  },
  {
    title: "Quelle différence entre Gladys Plus Lite et Gladys Plus ?",
    description: (
      <>
        <strong>Plus Lite</strong> (6,99€/mois ou 69,99€/an) couvre l'essentiel
        : accès à distance chiffré, Google Home/Alexa, API REST ouverte, comptes
        famille. C'est moins cher que Nabu Casa. <strong>Plus</strong>{" "}
        (9,99€/mois ou 99,99€/an) ajoute les sauvegardes chiffrées quotidiennes,
        le streaming caméra à distance, l'intégration IA (Mistral, hébergée en
        France), l'intégration Enedis et le serveur MCP. Tu peux passer de l'un
        à l'autre à tout moment.
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
    title: "Quelle différence avec Nabu Casa ?",
    description: (
      <>
        Nabu Casa est l'équivalent côté Home Assistant. Gladys Plus est
        légèrement plus cher mais : (1) c'est un projet 100% français, (2) les
        sauvegardes sont chiffrées de bout en bout avec ta clé, (3) les
        intégrations françaises (Enedis, Freebox) sont natives, (4) tu parles
        directement au créateur en français. C'est un choix de soutien à un
        projet indé, pas une comparaison de specs.
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
    title: "Peux-tu parler du chiffrement de bout en bout ?",
    description: (
      <>
        J'ai passé beaucoup de temps à étudier l'état de l'art (Apple iMessage,
        Dashlane, Insomnia, ProtonMail). Gladys Plus chiffre tes commandes en
        AES-GCM 256 bits avec une clé unique par message, encapsulée en RSA-OAEP
        2048 bits avec la clé publique de ton instance, signée en ECDSA P-256
        avec une date d'expiration anti-replay. Côté Gladys, tu valides
        manuellement chaque clé publique pour bloquer le man-in-the-middle. Même
        si Gladys Plus est compromis, l'attaquant ne peut rien faire sans ta clé
        privée.
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
];

const dataEn = [
  {
    title: "Why should I subscribe to Gladys Plus?",
    description: (
      <>
        Want secure remote access to your Gladys instance from anywhere?
        Encrypted daily backups? Enedis, Mistral AI (hosted in France by
        Scaleway), camera streaming, or an MCP server? Support a growing French
        open-source project? Gladys Plus is for you!
      </>
    ),
  },
  {
    title: "What's the difference between Gladys Plus Lite and Gladys Plus?",
    description: (
      <>
        <strong>Plus Lite</strong> (€6.99/month or €69.99/year) covers the
        basics: encrypted remote access, Google Home/Alexa, open REST API,
        family accounts. It's cheaper than Nabu Casa. <strong>Plus</strong>{" "}
        (€9.99/month or €99.99/year) adds daily encrypted backups, remote camera
        streaming, AI integration (Mistral, hosted in France), Enedis
        integration, and an MCP server. You can switch between the two at any
        time.
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
    title: "What's the difference with Nabu Casa?",
    description: (
      <>
        Nabu Casa is the Home Assistant equivalent. Gladys Plus is slightly more
        expensive but: (1) it's a 100% French project, (2) backups are
        end-to-end encrypted with your own key, (3) French integrations (Enedis,
        Freebox) are first-class, (4) you talk directly to the creator. It's a
        choice to support an indie project, not a spec comparison.
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
    title: "What happens after the 6 free months from the starter kit?",
    description: (
      <>
        If you bought the Gladys starter kit, you get 6 free months of Gladys
        Plus. Before the period ends, you'll receive an email and freely decide
        whether to subscribe or not. No hidden auto-charge: you decide.
      </>
    ),
  },
  {
    title: "Can you explain how end-to-end encryption works?",
    description: (
      <>
        I spent a lot of time studying the state of the art (Apple iMessage,
        Dashlane, Insomnia, ProtonMail). Gladys Plus encrypts your commands in
        AES-GCM 256-bit with a unique key per message, wrapped with RSA-OAEP
        2048-bit using your instance's public key, signed with ECDSA P-256 and
        an expiry date to prevent replay attacks. On Gladys side, you manually
        validate each public key to block man-in-the-middle attacks. Even if
        Gladys Plus is compromised, an attacker can do nothing without your
        private key.
      </>
    ),
  },
  {
    title: "Why isn't Gladys Plus free?",
    description: (
      <>
        Gladys and all its source code is free and open-source forever. But
        open-source doesn't mean free to run: servers, domains, community, email
        services, hardware — and the time I spend on the project. This project
        respects your privacy and <b>lives only on these contributions</b>. No
        investors, no ads, no data resale.
      </>
    ),
  },
];

function FAQPlus({ lang }) {
  const data = lang === "en" ? dataEn : dataFr;
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
          <div className={styles.faqItem} key={i}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQPlus;
