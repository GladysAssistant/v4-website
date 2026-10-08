import React from "react";

const dataEn = [
  {
    title: <>Why should I subscribe to the Gladys Plus?</>,
    description: (
      <>
        You want to Access Gladys from anywhere in the world securely? Interact
        with a passionnate home automation community? Support open-source and a
        passionate indie maker? This package is made for you!
      </>
    ),
  },
  {
    title: <>Can I unsuscribe at any time?</>,
    description: (
      <>
        Of course! Gladys is an open-source project, not a creepy organization
        😄 If you want to unsubscribe, you can do it in one click from Gladys
        Plus. If only all subscriptions were like that...
      </>
    ),
  },
  {
    title: <>Satisfied or reimbursed?</>,
    description: (
      <>
        Of course! If you are not satisfied with the service, just email me and
        I'll reimburse you without any questions. Feel free to explain what you
        didn't like so I can improve the service 🙂
      </>
    ),
  },
  {
    title: <>Can you explain how end-to-end encryption works here?</>,
    description: (
      <p>
        I took a lot of time to read about state of the art End-To-End
        Encryption. I read{" "}
        <a href="https://manuals.info.apple.com/MANUALS/1000/MA1902/en_US/apple-platform-security-guide.pdf">
          Apple Security White Paper
        </a>{" "}
        about iMessage E2E encryption feature. I read{" "}
        <a href="https://www.dashlane.com/download/Dashlane_SecurityWhitePaper_March2021.pdf">
          Dashlane
        </a>{" "}
        White paper, read and talked with{" "}
        <a href="https://support.insomnia.rest/article/159-end-to-end-encryption">
          Insomnia
        </a>{" "}
        Founder, and read about ProtonMail implementation of the{" "}
        <a href="https://en.wikipedia.org/wiki/Secure_Remote_Password_protocol">
          Remote Secure Password
        </a>{" "}
        protocol. Gladys Plus encrypts all your messages using AES-GCM 256bits
        algorithm and a unique key generated at each message. This key is then
        encrypted using RSA-OAEP 2048bits algorithm and the public key of your
        Gladys instance. Finally, the message is signed with the ECDSA P-256
        Algorithm and bundled with an expiry date to avoid{" "}
        <a href="https://en.wikipedia.org/wiki/Replay_attack">Replay Attack</a>.
        On Gladys side, the user has to validate each new user public key to
        avoid{" "}
        <a href="https://en.wikipedia.org/wiki/Man-in-the-middle_attack">
          Man In The Middle attack
        </a>
        . With those securities, even if Gladys Plus is compromised, the
        attacker cannot control your Gladys instance because he doesn't have
        your private key.
      </p>
    ),
  },
  {
    title: <>Why is Gladys Plus not free?</>,
    description: (
      <>
        Gladys and all its services, including this website: everything is 100%
        open-source and free to use. But open-source doesn't mean that I don't
        have any recurring costs on my side: servers, domains, community, email
        services, subscriptions, hardwares... Without counting my time on the
        project now that Gladys is my main activity. This project respects your
        privacy, and therefore can live only from theses contributions. Each
        subscription helps me make the project even better, and prove the world
        that a privacy-first and open-source alternative is possible! 🚀
      </>
    ),
  },
  {
    title: <>Are you developing more features for Gladys and Gladys Plus?</>,
    description: (
      <>
        Of course! The more contributors there are on this package, the more I'm
        able to invest on Gladys. For example, I paid a professional designer to
        work on the brand identity of Gladys. We all agree that the work he did
        is incredible, and it's only thanks to contributions that I was able to
        pay this designer. In fact, Gladys it's a little bit like a
        decentralized company, where the boss, it's you! Thanks to this business
        model, all decisions are made in order to favorize users, not investor
        or advertisers.
      </>
    ),
  },
];

function Question({ title, description }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

const dataFr = [
  {
    title: <>Pourquoi s'inscrire à Gladys Plus ?</>,
    description: (
      <>
        Tu as envie d'accéder simplement et de façon sécurisée à ton instance
        Gladys de n'importe où dans le monde ? Avoir des sauvegardes
        quotidiennes de ton instance Gladys ? Soutenir un projet open-source
        français en pleine croissance ? Gladys Plus est fait pour toi !
      </>
    ),
  },
  {
    title: <>Est-ce que je peux me désabonner à tout moment ?</>,
    description: (
      <>
        Bien-sûr! Gladys c'est un projet open-source, pas une grosse entreprise
        sans scrupule 😄 Tu peux à tout moment annuler ton abonnement en un clic
        depuis l'interface de Gladys Plus (il y a un bouton pour se désabonner,
        il n'est pas caché, tu as juste à cliquer et hop tu es désabonné). Si
        seulement tous les abonnements étaient comme ça...
      </>
    ),
  },
  {
    title: <>Satisfait ou remboursé ?</>,
    description: (
      <>
        Bien entendu ! Si Gladys Plus ne te donne pas entière satisfaction,
        envoie moi un email et je te rembourserai directement, sans discussion.
        N'hésite pas à me donner ton retour dans le mail pour que je puisse
        améliorer le service 🙂
      </>
    ),
  },
  {
    title: <>Peux-tu parler du chiffrement de bout en bout ?</>,
    description: (
      <>
        J'ai passé beaucoup de temps à lire sur l'état de l'art en matière de
        chiffrement de bout en bout. J'ai notamment lu le{" "}
        <a href="https://manuals.info.apple.com/MANUALS/1000/MA1902/en_US/apple-platform-security-guide.pdf">
          Security White Paper d'Apple
        </a>{" "}
        sur le chiffrement de bout en bout d'iMessage, le white paper de{" "}
        <a href="https://www.dashlane.com/download/Dashlane_SecurityWhitePaper_March2021.pdf">
          Dashlane
        </a>
        , j'ai lu la documentation et discuté avec le fondateur d'
        <a href="https://support.insomnia.rest/article/159-end-to-end-encryption">
          Insomnia
        </a>{" "}
        et j'ai lu la documentation de ProtonMail à propos de leur
        implémentation du protocole{" "}
        <a href="https://en.wikipedia.org/wiki/Secure_Remote_Password_protocol">
          Remote Secure Password
        </a>
        . Gladys Plus chiffre vos commandes Gladys grâce à l'algorithme AES-GCM
        256bits et une clé unique générée à chaque message. Cette clé est
        ensuite chiffrée grâce à la clé publique de l'instance Gladys et
        l'algorithme RSA-OAEP 2048bits. Enfin, chaque message est signé grâce à
        l'algorithme ECDSA P-256, et accompagné d'une date d'expiration afin
        d'éviter les{" "}
        <a href="https://en.wikipedia.org/wiki/Replay_attack">Replay Attack</a>.
        Côté Gladys, l'utilisateur doit valider manuellement chaque clé publique
        afin d'éviter qu'un attaquant puisse prendre contrôle de votre Gladys
        grâce à une attaque{" "}
        <a href="https://en.wikipedia.org/wiki/Man-in-the-middle_attack">
          Man In The Middle
        </a>
        . Ainsi, si Gladys Plus est compromis, l'attaquant ne pourra absolument
        rien faire car sans clé privée il n'a pas contrôle sur votre Gladys.
      </>
    ),
  },
  {
    title: <>Pourquoi Gladys Plus est-il payant ?</>,
    description: (
      <>
        Gladys, tous ses services, même le code de Gladys Plus, le site web:
        tout est 100% open-source et gratuit à utiliser. Mais open-source ne
        veut pas dire que de mon côté je n'ai pas des frais récurrents:
        serveurs, domaines, communauté en ligne, services d'emails, abonnements,
        matériel, etc... Et c'est sans compter tout le temps que je passe sur le
        projet car je travaille à temps partiel sur Gladys ! 🙂 Ce projet
        respecte votre vie privée, et par conséquent{" "}
        <b>ne vit que de ces contributions</b>. Chaque contribution permet au
        projet d'aller plus loin, et montre qu'une alternative libre et
        respectueuse de la vie privée de ses utilisateurs est possible 🚀
      </>
    ),
  },
  {
    title: (
      <>
        Est-ce qu'il va y avoir plus de fonctionnalités sur Gladys et Gladys
        Plus ?
      </>
    ),
    description: (
      <>
        De plus en plus! Plus il y a de contributeurs à Gladys Plus, plus il est
        possible pour moi d'investir dans le projet, de passer du temps dessus,
        et de fournir un service professionnel. Par exemple, j'ai pu payer un
        designer professionnel pour refaire toute la charte graphique du projet:
        logo, illustrations, couleurs, il a tout refait. Et la communauté est
        unanime: son travail a totalement changé l'apparence du projet. Payer ce
        designer n'a uniquement été possible que grâce aux contributions de la
        communauté, et c'est ça qui est génial ! En fait, Gladys c'est un peu
        comme une entreprise décentralisée ou les patrons, c'est vous. Ainsi,
        toutes les décisions dans le projet sont faites de manière à favoriser
        les utilisateurs, pas un investisseur, une banque ou un publicitaire.
      </>
    ),
  },
];

function FAQ({ lang }) {
  const data = lang === "fr" ? dataFr : dataEn;
  return (
    <section id="faq" style={{ marginTop: "15px" }}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            {data.slice(0, 4).map((oneElement) => (
              <Question {...oneElement} />
            ))}
          </div>
          <div className="col col--6">
            {data.slice(4).map((oneElement) => (
              <Question {...oneElement} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQ;
