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

const e2eSummaryDe = (
  <>
    Deine Befehle und Backups sind Ende-zu-Ende-verschlüsselt: Selbst wenn die
    Server von Gladys Plus kompromittiert würden, könnte niemand deine Daten
    lesen, ohne den privaten Schlüssel deiner lokalen Instanz.
  </>
);

const e2eTechnicalDe = (
  <>
    Ich habe viel Zeit damit verbracht, den Stand der Technik zu studieren
    (Apple iMessage, Dashlane, Insomnia, ProtonMail). Gladys Plus verschlüsselt
    deine Befehle mit AES-GCM 256 Bit und einem eigenen Schlüssel pro Nachricht,
    der mit RSA-OAEP 2048 Bit und dem öffentlichen Schlüssel deiner Instanz
    gekapselt wird. Signiert wird mit ECDSA P-256 samt Ablaufdatum, um
    Replay-Angriffe zu verhindern. In Gladys bestätigst du jeden öffentlichen
    Schlüssel manuell, um Man-in-the-Middle-Angriffe zu blockieren. Selbst wenn
    Gladys Plus kompromittiert wird, kann ein Angreifer ohne deinen privaten
    Schlüssel nichts ausrichten.
  </>
);

const e2eSummaryEs = (
  <>
    Tus comandos y copias de seguridad están cifrados de extremo a extremo:
    aunque los servidores de Gladys Plus se vieran comprometidos, nadie podría
    leer tus datos sin la clave privada de tu instancia local.
  </>
);

const e2eTechnicalEs = (
  <>
    Dediqué mucho tiempo a estudiar el estado del arte (Apple iMessage,
    Dashlane, Insomnia, ProtonMail). Gladys Plus cifra tus comandos con AES-GCM
    de 256 bits y una clave única por mensaje, encapsulada con RSA-OAEP de 2048
    bits mediante la clave pública de tu instancia, y firmada con ECDSA P-256
    junto con una fecha de caducidad para evitar ataques de repetición. En
    Gladys, validas manualmente cada clave pública para bloquear los ataques de
    intermediario (man-in-the-middle). Aunque Gladys Plus se viera
    comprometido, un atacante no podría hacer nada sin tu clave privada.
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
        accès à distance chiffré, alerte email si ta Gladys est hors ligne,
        Google Home/Alexa, API REST ouverte, comptes famille.{" "}
        <strong>Plus</strong> ({formatPrice(prices.plus.monthly, currency)}/mois
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
    title: "Gladys Plus peut-il me prévenir si ma Gladys tombe en panne ?",
    description: (
      <>
        Oui, c'est nouveau ! Gladys Plus voit ton instance se connecter et se
        déconnecter. Si elle reste injoignable (coupure de courant, box
        internet plantée, carte SD morte…) plus longtemps que le délai que tu
        choisis, de 10 minutes à 24 heures, Gladys Plus envoie un email aux
        administrateurs de ton compte, puis un second quand elle revient en
        ligne. L'alerte est activée par défaut, dans les deux formules : tu
        peux changer le délai ou la couper depuis Gladys Plus.
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
        encrypted remote access, an email alert when your Gladys goes
        offline, Google Home/Alexa, open REST API, family accounts.{" "}
        <strong>Plus</strong> ({formatPrice(prices.plus.monthly, currency)}/month
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
    title: "Can Gladys Plus warn me if my Gladys goes down?",
    description: (
      <>
        Yes, and it's new! Gladys Plus sees your instance connect and
        disconnect. If it stays unreachable (power cut, internet box down, dead
        SD card…) for longer than the delay you choose, from 10 minutes to 24
        hours, Gladys Plus emails the admins of your account, then emails them
        again once it's back online. It's on by default, on both plans: you
        can change the delay or turn it off from Gladys Plus.
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

const buildDataDe = (prices, currency) => [
  {
    title: "Warum sollte ich Gladys Plus abonnieren?",
    description: (
      <>
        Du willst von überall sicher auf deine Gladys-Instanz zugreifen?
        Verschlüsselte tägliche Backups? Enedis, Open-Weight-KI-Modelle,
        Kamera-Streaming oder einen MCP-Server? Ein wachsendes französisches
        Open-Source-Projekt unterstützen? Dann ist Gladys Plus genau das
        Richtige für dich!
      </>
    ),
  },
  {
    title: "Was ist der Unterschied zwischen den Tarifen Lite und Plus?",
    description: (
      <>
        <strong>Lite</strong> ({formatPrice(prices.lite.monthly, currency)}
        /Monat oder {formatPrice(prices.lite.yearly, currency)}/Jahr) deckt
        das Wichtigste ab: verschlüsselter Fernzugriff, eine E-Mail-Warnung,
        wenn deine Gladys offline geht, Google Home/Alexa, offene REST-API und
        Familienkonten. <strong>Plus</strong> (
        {formatPrice(prices.plus.monthly, currency)}/Monat oder{" "}
        {formatPrice(prices.plus.yearly, currency)}/Jahr) bietet zusätzlich
        tägliche verschlüsselte Backups, Kamera-Streaming von unterwegs,
        Open-Weight-KI-Modelle, die Enedis-Integration und einen MCP-Server. Du
        kannst jederzeit zwischen den beiden Tarifen wechseln.
      </>
    ),
  },
  {
    title:
      "Wie aktiviere ich Gladys Plus auf meiner bestehenden Gladys-Instanz?",
    description: (
      <>
        Nach dem Abschluss des Abos bekommst du eine E-Mail mit deinem
        Aktivierungslink. Öffne dann deine lokale Gladys-Instanz, geh zu{" "}
        <em>Einstellungen → Gladys Plus</em>, melde dich mit deiner E-Mail und
        deinem Passwort an, und fertig. Kein Zurücksetzen, keine Konfiguration
        geht verloren.
      </>
    ),
  },
  {
    title: "Kann Gladys Plus mich warnen, wenn meine Gladys ausfällt?",
    description: (
      <>
        Ja, und das ist neu! Gladys Plus sieht, wenn sich deine Instanz
        verbindet und trennt. Bleibt sie länger als die von dir gewählte Zeit
        (zwischen 10 Minuten und 24 Stunden) unerreichbar, etwa wegen eines
        Stromausfalls, eines abgestürzten Routers oder einer defekten SD-Karte,
        schickt Gladys Plus den Admins deines Kontos eine E-Mail und eine
        weitere, sobald sie wieder online ist. Die Warnung ist in beiden
        Tarifen standardmäßig aktiv: Du kannst die Wartezeit ändern oder sie in
        Gladys Plus ausschalten.
      </>
    ),
  },
  {
    title: "Kann ich jederzeit kündigen?",
    description: (
      <>
        Na klar! Gladys ist ein Open-Source-Projekt und kein skrupelloser
        Konzern 😄 Du kannst dein Abo mit einem Klick in der Oberfläche von
        Gladys Plus kündigen. Der Button ist nicht versteckt.
      </>
    ),
  },
  {
    title: "Zufrieden oder Geld zurück?",
    description: (
      <>
        Ja. Wenn du nicht zufrieden bist, schreib mir einfach eine E-Mail und
        ich erstatte dir den Betrag, ohne Wenn und Aber. Erzähl mir gerne, was
        nicht gepasst hat, damit ich den Dienst verbessern kann 🙂
      </>
    ),
  },
  {
    title: "Warum ist Gladys Plus nicht kostenlos?",
    description: (
      <>
        Gladys und der gesamte Quellcode sind und bleiben kostenlos und Open
        Source. Aber Open Source heißt nicht, dass der Betrieb nichts kostet:
        Server, Domains, Community, E-Mail-Dienste, Hardware und vor allem die
        Zeit, die ich in das Projekt stecke. Dieses Projekt respektiert deine
        Privatsphäre und <b>lebt ausschließlich von diesen Beiträgen</b>. Keine
        Investoren, keine Werbung, kein Verkauf von Daten.
      </>
    ),
  },
  {
    title: "Wie funktioniert die Ende-zu-Ende-Verschlüsselung?",
    description: e2eSummaryDe,
    technicalDetail: e2eTechnicalDe,
  },
];

const buildDataEs = (prices, currency) => [
  {
    title: "¿Por qué suscribirme a Gladys Plus?",
    description: (
      <>
        ¿Quieres acceder de forma segura a tu instancia de Gladys desde
        cualquier lugar? ¿Copias de seguridad diarias cifradas? ¿Enedis, modelos
        de IA Open-Weight, streaming de cámaras o un servidor MCP? ¿Apoyar un
        proyecto francés de código abierto en pleno crecimiento? ¡Gladys Plus
        es para ti!
      </>
    ),
  },
  {
    title: "¿Qué diferencia hay entre el plan Lite y el plan Plus?",
    description: (
      <>
        <strong>Lite</strong> ({formatPrice(prices.lite.monthly, currency)}/mes
        o {formatPrice(prices.lite.yearly, currency)}/año) cubre lo esencial:
        acceso remoto cifrado, una alerta por correo electrónico cuando tu
        Gladys se desconecta, Google Home/Alexa, API REST abierta y cuentas
        familiares. <strong>Plus</strong> (
        {formatPrice(prices.plus.monthly, currency)}/mes o{" "}
        {formatPrice(prices.plus.yearly, currency)}/año) añade copias de
        seguridad diarias cifradas, streaming de cámaras a distancia, modelos
        de IA Open-Weight, la integración con Enedis y un servidor MCP. Puedes
        cambiar de un plan a otro en cualquier momento.
      </>
    ),
  },
  {
    title: "¿Cómo activo Gladys Plus en mi instancia de Gladys actual?",
    description: (
      <>
        Después de suscribirte, recibirás un correo electrónico con tu enlace de
        activación. Abre tu instancia local de Gladys, ve a{" "}
        <em>Ajustes → Gladys Plus</em>, inicia sesión con tu correo electrónico
        y tu contraseña, y listo. Sin reinicios y sin perder ninguna
        configuración.
      </>
    ),
  },
  {
    title: "¿Puede Gladys Plus avisarme si mi Gladys deja de funcionar?",
    description: (
      <>
        ¡Sí, y es una novedad! Gladys Plus ve cuándo tu instancia se conecta y
        se desconecta. Si sigue inaccesible (corte de luz, router caído,
        tarjeta SD averiada…) durante más tiempo del que elijas, de 10 minutos
        a 24 horas, Gladys Plus envía un correo electrónico a los
        administradores de tu cuenta, y otro cuando vuelve a estar en línea. La
        alerta está activada por defecto en los dos planes: puedes cambiar el
        plazo o desactivarla desde Gladys Plus.
      </>
    ),
  },
  {
    title: "¿Puedo cancelar mi suscripción en cualquier momento?",
    description: (
      <>
        ¡Por supuesto! Gladys es un proyecto de código abierto, no una gran
        empresa sin escrúpulos 😄 Puedes cancelar con un solo clic desde la
        interfaz de Gladys Plus. El botón no está escondido.
      </>
    ),
  },
  {
    title: "¿Satisfecho o te devolvemos el dinero?",
    description: (
      <>
        Sí. Si no estás satisfecho, envíame un correo electrónico y te
        devuelvo el dinero, sin preguntas. No dudes en contarme qué no
        funcionó para que pueda mejorar el servicio 🙂
      </>
    ),
  },
  {
    title: "¿Por qué Gladys Plus no es gratis?",
    description: (
      <>
        Gladys y todo su código fuente son y seguirán siendo gratuitos y de
        código abierto. Pero código abierto no significa que mantenerlo no
        cueste nada: servidores, dominios, comunidad, servicios de correo
        electrónico, hardware y, sobre todo, el tiempo que dedico al proyecto.
        Este proyecto respeta tu privacidad y{" "}
        <b>vive únicamente de estas contribuciones</b>. Sin inversores, sin
        publicidad, sin venta de datos.
      </>
    ),
  },
  {
    title: "¿Cómo funciona el cifrado de extremo a extremo?",
    description: e2eSummaryEs,
    technicalDetail: e2eTechnicalEs,
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
  const buildData =
    lang === "fr"
      ? buildDataFr
      : lang === "de"
        ? buildDataDe
        : lang === "es"
          ? buildDataEs
          : buildDataEn;
  const data = buildData(prices, currency);
  return (
    <section
      id="faq"
      className={styles.section}
      aria-labelledby="faq-plus-title"
    >
      <h2 id="faq-plus-title" className={styles.sectionTitle}>
        {lang === "fr"
          ? "Questions fréquentes"
          : lang === "de"
            ? "Häufig gestellte Fragen"
            : lang === "es"
              ? "Preguntas frecuentes"
              : "Frequently asked questions"}
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
