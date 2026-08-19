// Content of the legal pages: terms of sale (CGV), privacy policy and legal
// notice (mentions légales). The French version is the reference text; the
// English one is a courtesy translation, which is why the English pages carry
// a disclaimer pointing back to the French version.
import { formatPrice } from "../components/plus/pricing";

// Identity of the company, displayed on the legal notice. The identifiers come
// from the national business register (SIREN, RCS registration and legal form
// as published in the BODACC). There is no VAT number: the company falls under
// the French small-business VAT exemption ("franchise en base de TVA"), which
// is why the legal notice and the terms of sale carry the article 293 B
// mention instead. Fields left empty are simply not rendered.
export const COMPANY = {
  name: "Gladys Assistant",
  address: "66 avenue des Champs-Élysées, 75008 Paris, France",
  email: "hello@gladysassistant.com",
  publicationDirector: "Pierre-Gilles Leymarie",
  shareCapital: "1 000 €",
  rcs: "Paris 947 826 814",
  siren: "947 826 814",
};

export function getTermsContent(lang, prices) {
  const { currency } = prices;
  const liteMonthly = formatPrice(prices.lite.monthly, currency);
  const liteYearly = formatPrice(prices.lite.yearly, currency);
  const plusMonthly = formatPrice(prices.plus.monthly, currency);
  const plusYearly = formatPrice(prices.plus.yearly, currency);

  if (lang === "fr") {
    return {
      title: "Conditions générales de ventes de Gladys Plus",
      description: "Les conditions générales de ventes de Gladys Plus",
      heading: "Conditions générales de ventes",
      sections: [
        {
          title: "Préambule",
          blocks: [
            {
              type: "p",
              text: "Gladys Plus est un service fourni par Gladys Assistant SAS, 66 avenue des Champs-Elysées 75008 Paris.",
            },
            {
              type: "p",
              text: "Ce service est un service complémentaire au produit open-source Gladys Assistant, qui apporte des fonctionnalités comme le contrôle à distance ou les sauvegardes automatisées.",
            },
          ],
        },
        {
          title: "Caractéristiques des services offerts",
          blocks: [
            {
              type: "p",
              text: "En souscrivant à Gladys Plus, l'utilisateur souscrit à un service qui lui donne accès à :",
            },
            {
              type: "ul",
              items: [
                "Un accès à distance chiffré de bout en bout à son instance Gladys Assistant via le Gladys Gateway",
                "Un service de sauvegardes quotidiennes automatisées",
                "Une intégration avec les assistants vocaux Google Home et Alexa",
                "Une API HTTP ouverte pour connecter des services tiers",
                "Un streaming de caméra à distance (chiffré de bout en bout)",
                "Une intégration Enedis pour suivre sa consommation électrique",
                "Des modèles d'IA Open-Weight (hébergés en France chez Scaleway) pour interagir avec l'IA dans Gladys",
                "Une API Owntracks pour le suivi de localisation",
              ],
            },
            {
              type: "p",
              text: "La souscription au service Gladys Plus n'apporte pas de garanties sur le produit open-source Gladys Assistant qui est entièrement gratuit et développé par la communauté open-source Gladys Assistant, sans aucune affiliations entre les deux.",
            },
            {
              type: "p",
              text: "Le produit open-source Gladys Assistant est distribué sous license Apache 2.0, sans aucune garantie sur son fonctionnement.",
            },
          ],
        },
        {
          title: "Tarif des prestations",
          blocks: [
            {
              type: "p",
              text: "Gladys Plus est disponible en deux formules :",
            },
            {
              type: "ul",
              items: [
                {
                  label: "Gladys Plus Lite :",
                  text: `${liteMonthly}/mois ou ${liteYearly}/an - Accès aux fonctionnalités essentielles (accès à distance, API ouverte, assistant vocaux avec Google Home/Alexa)`,
                },
                {
                  label: "Gladys Plus :",
                  text: `${plusMonthly}/mois ou ${plusYearly}/an - Accès à toutes les fonctionnalités (incluant sauvegardes, Enedis, modèles d'IA Open-Weight, streaming caméra)`,
                },
              ],
            },
            {
              type: "p",
              text: "TVA non applicable, article 293 B du Code général des impôts. Les tarifs affichés sont les tarifs définitifs, aucune taxe n'est ajoutée au moment du paiement.",
            },
          ],
        },
        {
          title: "Durée de l'offre et résilation",
          blocks: [
            {
              type: "p",
              text: "L'abonnement Gladys Plus fait l'objet d'une reconduction automatique. L'utilisateur peut résilier son abonnement à tout moment et en un clic depuis son compte Gladys Plus, ou en envoyant un email à hello@gladysassistant.com.",
            },
            {
              type: "p",
              text: "L'utilisateur dispose de 30 jours pour se faire rembourser si il n'est pas satisfait de la prestation, et ce sans justification.",
            },
          ],
        },
        {
          title: "Droit de rétractation pour les achats de matériel",
          blocks: [
            {
              type: "p",
              text: "Conformément aux dispositions légales en vigueur, l'utilisateur dispose d'un délai de 14 jours à compter de la réception du matériel (kit de démarrage Gladys) pour exercer son droit de rétractation sans avoir à justifier de motifs ni à payer de pénalités.",
            },
            {
              type: "p",
              text: "Pour exercer ce droit, l'utilisateur doit notifier sa décision de rétractation par email à hello@gladysassistant.com. Le matériel doit être retourné dans son emballage d'origine, en parfait état, complet et accompagné de tous les accessoires. Les frais de retour sont à la charge de l'utilisateur.",
            },
            {
              type: "p",
              text: "Le remboursement sera effectué dans un délai de 14 jours à compter de la réception du matériel retourné, après vérification de son état.",
            },
          ],
        },
        {
          title: "Disponibilité",
          blocks: [
            {
              type: "p",
              text: "Etant développé et maintenu par un individuel, la disponibilité du produit est dite au \"best-effort\", sans SLA garanti. Néanmoins, depuis 2019 nous n'avons quasiment pas connu d'interruption de service.",
            },
          ],
        },
        {
          title: "Responsabilité",
          blocks: [
            {
              type: "p",
              text: "L'utilisateur garantit \"Gladys Assistant SAS\" contre tout recours de quelque nature qu'il soit émanant de tiers. Dans l'hypothèse où la responsabilité de Gladys Assistant SAS serait engagée, la réparation du préjudice subi ne pourra excéder le montant de l'abonnement annuel, calculée sur les douze dernier mois effectivement payés par l'utilisateur Gladys Plus. Par ailleurs, en aucun cas Gladys Assistant SAS ne sera responsable des dommages indirects (commercial, financier, exploitation) que subirait l'utilisateur, ce dernier étant son propre assureur à défaut d'avoir contracté des assurances appropriées. La présente clause est considérée comme essentielle et déterminante par Gladys Assistant SAS qui n'aurait pas contracté sans elle. Gladys Assistant SAS ne garantit pas que le service Gladys Plus sera exempt d'anomalies ou d'erreurs, ni que celles-ci pourront être corrigées, ni que le service Gladys Plus fonctionnera sans interruption ou pannes, ni encore qu'il est compatible avec un matériel ou une configuration particulière autre que celle expressément validée sur le site.",
            },
          ],
        },
      ],
    };
  }

  return {
    title: "Gladys Plus terms of sale",
    description: "The terms of sale of Gladys Plus",
    heading: "Terms of sale",
    sections: [
      {
        title: "Preamble",
        blocks: [
          {
            type: "p",
            text: "Gladys Plus is a service provided by Gladys Assistant SAS, 66 avenue des Champs-Elysées 75008 Paris, France.",
          },
          {
            type: "p",
            text: "This service complements the open-source product Gladys Assistant, and brings features such as remote access or automated backups.",
          },
        ],
      },
      {
        title: "Features of the services offered",
        blocks: [
          {
            type: "p",
            text: "By subscribing to Gladys Plus, the user subscribes to a service which gives access to:",
          },
          {
            type: "ul",
            items: [
              "End-to-end encrypted remote access to their Gladys Assistant instance through the Gladys Gateway",
              "An automated daily backup service",
              "An integration with the Google Home and Alexa voice assistants",
              "An open HTTP API to connect third-party services",
              "Remote camera streaming (end-to-end encrypted)",
              "An Enedis integration to monitor electricity consumption",
              "Open-Weight AI models (hosted in France at Scaleway) to interact with AI in Gladys",
              "An Owntracks API for location tracking",
            ],
          },
          {
            type: "p",
            text: "Subscribing to the Gladys Plus service does not provide any warranty on the open-source product Gladys Assistant, which is entirely free and developed by the Gladys Assistant open-source community, with no affiliation between the two.",
          },
          {
            type: "p",
            text: "The open-source product Gladys Assistant is distributed under the Apache 2.0 license, without any warranty regarding its operation.",
          },
        ],
      },
      {
        title: "Pricing",
        blocks: [
          { type: "p", text: "Gladys Plus is available in two plans:" },
          {
            type: "ul",
            items: [
              {
                label: "Gladys Plus Lite:",
                text: `${liteMonthly}/month or ${liteYearly}/year - Access to the essential features (remote access, open API, voice assistants with Google Home/Alexa)`,
              },
              {
                label: "Gladys Plus:",
                text: `${plusMonthly}/month or ${plusYearly}/year - Access to all the features (including backups, Enedis, Open-Weight AI models, camera streaming)`,
              },
            ],
          },
          {
            type: "p",
            text: "VAT is not applicable, article 293 B of the French general tax code. The prices displayed are final prices, no tax is added at checkout.",
          },
        ],
      },
      {
        title: "Duration of the offer and cancellation",
        blocks: [
          {
            type: "p",
            text: "The Gladys Plus subscription is automatically renewed. The user can cancel their subscription at any time, in one click from their Gladys Plus account, or by sending an email to hello@gladysassistant.com.",
          },
          {
            type: "p",
            text: "The user has 30 days to get a refund if they are not satisfied with the service, without having to justify their decision.",
          },
        ],
      },
      {
        title: "Right of withdrawal for hardware purchases",
        blocks: [
          {
            type: "p",
            text: "In accordance with the applicable legal provisions, the user has 14 days from the reception of the hardware (Gladys starter kit) to exercise their right of withdrawal, without having to justify their decision nor to pay any penalty.",
          },
          {
            type: "p",
            text: "To exercise this right, the user must notify their withdrawal decision by email at hello@gladysassistant.com. The hardware must be returned in its original packaging, in perfect condition, complete and with all its accessories. Return shipping costs are at the user's expense.",
          },
          {
            type: "p",
            text: "The refund will be issued within 14 days from the reception of the returned hardware, once its condition has been checked.",
          },
        ],
      },
      {
        title: "Availability",
        blocks: [
          {
            type: "p",
            text: 'As it is developed and maintained by a single individual, the availability of the product is provided on a "best-effort" basis, with no guaranteed SLA. That said, since 2019 we have experienced almost no service interruption.',
          },
        ],
      },
      {
        title: "Liability",
        blocks: [
          {
            type: "p",
            text: 'The user indemnifies "Gladys Assistant SAS" against any claim of any nature whatsoever from third parties. Should the liability of Gladys Assistant SAS be engaged, the compensation for the damage suffered may not exceed the amount of the yearly subscription, calculated over the last twelve months actually paid by the Gladys Plus user. Furthermore, Gladys Assistant SAS shall in no case be liable for indirect damages (commercial, financial, operational) suffered by the user, the latter being their own insurer if they failed to take out appropriate insurance. This clause is considered essential and decisive by Gladys Assistant SAS, which would not have entered into the contract without it. Gladys Assistant SAS does not warrant that the Gladys Plus service will be free of anomalies or errors, nor that these could be corrected, nor that the Gladys Plus service will operate without interruption or failure, nor that it is compatible with any particular hardware or configuration other than the ones expressly validated on the website.',
          },
        ],
      },
      {
        blocks: [
          {
            type: "note",
            text: "Gladys Plus is operated from France, under French and European law. Should this English text and the French version differ, the French version prevails:",
            link: {
              label: "Conditions générales de ventes",
              href: "/fr/plus/terms/",
            },
          },
        ],
      },
    ],
  };
}

export function getPrivacyContent(lang) {
  if (lang === "fr") {
    return {
      title: "Politique de confidentialités de Gladys Plus",
      description: "La politique de confidentialité de Gladys Plus",
      heading: "Politique de confidentialité de Gladys Plus",
      sections: [
        {
          title: "Préambule",
          blocks: [
            {
              type: "p",
              text: "Nous mettons tout en place pour protéger la vie privée des utilisateurs de Gladys Plus.",
            },
            {
              type: "p",
              text: "La présente politique de confidentialité a pour objet d’informer les utilisateurs du service Gladys Plus sur les données collectées pendant leur utilisation.",
            },
          ],
        },
        {
          title: "Données collectées en cas d’utilisation de Gladys Plus",
          blocks: [
            {
              type: "p",
              text: "Lors de son inscription, l'utilisateur communique son adresse email ainsi qu'un nom d'utilisateur.",
            },
            {
              type: "p",
              text: "Afin de protéger le service Gladys Plus des attaques par dénie de service (DOS), l'adresse IP de l'utilisateur Gladys Plus peut-être stockée temporairement en mémoire par les serveurs Gladys Plus afin de compatibiliser le nombre d'appel à une ressource pendant un temps donné. Ce procédé, dit de \"rate-limiting\", ne stocke pas l'adresse IP sur un disque physique mais uniquement en mémoire pendant une courte durée, ceci afin d'assurer la sécurité du service.",
            },
          ],
        },
        {
          title: "Utilisation des cookies",
          blocks: [
            {
              type: "p",
              text: "Gladys Plus utilise le LocalStorage du navigateur de l'utilisateur pour stocker :",
            },
            {
              type: "ul",
              items: [
                "La clé privée qui permet de communiquer avec l'instance Gladys Assistant de l'utilisateur.",
                "Un token d'accès à Gladys Plus qui authentifie l'utilisateur.",
              ],
            },
          ],
        },
        {
          title: "Conservation des données et délais",
          blocks: [
            {
              type: "p",
              text: "Les données récoltées sont conservées valablement pendant toute la durée de la relation commerciale entre les Parties.",
            },
            {
              type: "p",
              text: "Le Prestataire s’engage à rendre effective toute éventuelle demande motivée de consultation, modification, opposition, et/ou suppression des données, en répondant à ces demandes dans un délai de trente (30) jours calendaires à compter de la réception de la demande. Ces demandes se font par courriel à l’adresse hello@gladysassistant.com.",
            },
          ],
        },
      ],
    };
  }

  return {
    title: "Gladys Plus privacy policy",
    description: "The privacy policy of Gladys Plus",
    heading: "Privacy policy of Gladys Plus",
    sections: [
      {
        title: "Preamble",
        blocks: [
          {
            type: "p",
            text: "We do everything we can to protect the privacy of Gladys Plus users.",
          },
          {
            type: "p",
            text: "The purpose of this privacy policy is to inform the users of the Gladys Plus service about the data collected while they use it.",
          },
        ],
      },
      {
        title: "Data collected when using Gladys Plus",
        blocks: [
          {
            type: "p",
            text: "When signing up, the user provides their email address as well as a username.",
          },
          {
            type: "p",
            text: 'In order to protect the Gladys Plus service against denial of service (DOS) attacks, the IP address of the Gladys Plus user may be temporarily stored in memory by the Gladys Plus servers, so as to count the number of calls to a resource over a given period of time. This process, called "rate-limiting", does not store the IP address on a physical disk but only in memory for a short duration, in order to keep the service secure.',
          },
        ],
      },
      {
        title: "Use of cookies",
        blocks: [
          {
            type: "p",
            text: "Gladys Plus uses the LocalStorage of the user's browser to store:",
          },
          {
            type: "ul",
            items: [
              "The private key used to communicate with the user's Gladys Assistant instance.",
              "A Gladys Plus access token which authenticates the user.",
            ],
          },
        ],
      },
      {
        title: "Data retention",
        blocks: [
          {
            type: "p",
            text: "The data collected is kept for the whole duration of the commercial relationship between the Parties.",
          },
          {
            type: "p",
            text: "The Provider undertakes to act on any justified request to access, modify, object to and/or delete the data, by answering these requests within thirty (30) calendar days from the reception of the request. These requests are made by email at hello@gladysassistant.com.",
          },
        ],
      },
      {
        blocks: [
          {
            type: "note",
            text: "Gladys Plus is operated from France, under French and European law. Should this English text and the French version differ, the French version prevails:",
            link: {
              label: "Politique de confidentialité",
              href: "/fr/plus/privacy/",
            },
          },
        ],
      },
    ],
  };
}

export function getLegalNoticeContent(lang) {
  if (lang === "fr") {
    return {
      title: "Mentions légales",
      description:
        "Mentions légales du site gladysassistant.com : éditeur, hébergeur, propriété intellectuelle et données personnelles.",
      heading: "Mentions légales",
      sections: [
        {
          title: "Éditeur du site",
          blocks: [
            {
              type: "p",
              text: "Le site gladysassistant.com est édité par :",
            },
            {
              type: "dl",
              items: [
                { term: "Raison sociale", value: COMPANY.name },
                {
                  term: "Forme juridique",
                  value:
                    "Société par actions simplifiée à associé unique (SASU)",
                },
                { term: "Siège social", value: COMPANY.address },
                { term: "Capital social", value: COMPANY.shareCapital },
                { term: "RCS", value: COMPANY.rcs },
                { term: "SIREN", value: COMPANY.siren },
                {
                  term: "TVA",
                  value:
                    "Non applicable, article 293 B du Code général des impôts (franchise en base de TVA)",
                },
                {
                  term: "Directeur de la publication",
                  value: COMPANY.publicationDirector,
                },
                { term: "Contact", value: COMPANY.email },
              ],
            },
          ],
        },
        {
          title: "Hébergement",
          blocks: [
            {
              type: "p",
              text: "Le site gladysassistant.com est hébergé par Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, États-Unis.",
            },
            {
              type: "p",
              text: "L'infrastructure du service Gladys Plus (API, sauvegardes, relais) est hébergée dans des centres de données européens. Les modèles d'IA Open-Weight utilisés par Gladys Plus sont hébergés par Scaleway, en France.",
            },
          ],
        },
        {
          title: "Propriété intellectuelle",
          blocks: [
            {
              type: "p",
              text: "Le logiciel Gladys Assistant est un logiciel open source distribué sous licence Apache 2.0. Son code source est disponible publiquement :",
              link: {
                label: "github.com/GladysAssistant/Gladys",
                href: "https://github.com/GladysAssistant/Gladys",
              },
            },
            {
              type: "p",
              text: "Les autres éléments du site (textes, illustrations, photographies, logo et marque Gladys Assistant) sont la propriété de Gladys Assistant SAS et ne peuvent être reproduits sans autorisation préalable.",
            },
          ],
        },
        {
          title: "Conditions générales de vente",
          blocks: [
            {
              type: "p",
              text: "Les conditions applicables à l'abonnement Gladys Plus et aux achats de matériel sont détaillées dans les",
              link: {
                label: "conditions générales de vente",
                to: "/plus/terms/",
              },
            },
          ],
        },
        {
          title: "Données personnelles",
          blocks: [
            {
              type: "p",
              text: "Le traitement des données personnelles des utilisateurs est décrit dans la",
              link: {
                label: "politique de confidentialité",
                to: "/plus/privacy/",
              },
            },
            {
              type: "p",
              text: "Conformément au Règlement général sur la protection des données (RGPD), l'utilisateur dispose d'un droit d'accès, de rectification, d'opposition, de portabilité et de suppression de ses données. Ces demandes peuvent être adressées par courriel à hello@gladysassistant.com.",
            },
          ],
        },
        {
          title: "Mesure d'audience",
          blocks: [
            {
              type: "p",
              text: "Le site utilise OpenPanel, une solution de mesure d'audience open source auto-hébergée par Gladys Assistant SAS, afin de comptabiliser les visites et d'améliorer le site. Un identifiant technique est stocké dans le navigateur pour distinguer les visites ; aucune donnée n'est revendue ni transmise à une régie publicitaire.",
            },
          ],
        },
      ],
    };
  }

  return {
    title: "Legal notice",
    description:
      "Legal notice of gladysassistant.com: publisher, hosting, intellectual property and personal data.",
    heading: "Legal notice",
    sections: [
      {
        title: "Website publisher",
        blocks: [
          { type: "p", text: "gladysassistant.com is published by:" },
          {
            type: "dl",
            items: [
              { term: "Company name", value: COMPANY.name },
              {
                term: "Legal form",
                value:
                  "Simplified joint-stock company with a sole shareholder (SASU), under French law",
              },
              { term: "Registered office", value: COMPANY.address },
              { term: "Share capital", value: COMPANY.shareCapital },
              { term: "Trade register (RCS)", value: COMPANY.rcs },
              { term: "SIREN", value: COMPANY.siren },
              {
                term: "VAT",
                value:
                  "Not applicable, article 293 B of the French general tax code (small-business VAT exemption)",
              },
              {
                term: "Publication director",
                value: COMPANY.publicationDirector,
              },
              { term: "Contact", value: COMPANY.email },
            ],
          },
        ],
      },
      {
        title: "Hosting",
        blocks: [
          {
            type: "p",
            text: "gladysassistant.com is hosted by Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, United States.",
          },
          {
            type: "p",
            text: "The Gladys Plus infrastructure (API, backups, relays) runs in European data centers. The Open-Weight AI models used by Gladys Plus are hosted by Scaleway, in France.",
          },
        ],
      },
      {
        title: "Intellectual property",
        blocks: [
          {
            type: "p",
            text: "The Gladys Assistant software is open source, distributed under the Apache 2.0 license. Its source code is publicly available:",
            link: {
              label: "github.com/GladysAssistant/Gladys",
              href: "https://github.com/GladysAssistant/Gladys",
            },
          },
          {
            type: "p",
            text: "The other elements of the website (texts, illustrations, photographs, the Gladys Assistant logo and trademark) are the property of Gladys Assistant SAS and may not be reproduced without prior authorization.",
          },
        ],
      },
      {
        title: "Terms of sale",
        blocks: [
          {
            type: "p",
            text: "The conditions applying to the Gladys Plus subscription and to hardware purchases are detailed in the",
            link: { label: "terms of sale", to: "/plus/terms/" },
          },
        ],
      },
      {
        title: "Personal data",
        blocks: [
          {
            type: "p",
            text: "How the personal data of users is processed is described in the",
            link: { label: "privacy policy", to: "/plus/privacy/" },
          },
          {
            type: "p",
            text: "In accordance with the General Data Protection Regulation (GDPR), users have a right to access, rectify, object to, port and delete their data. These requests can be sent by email to hello@gladysassistant.com.",
          },
        ],
      },
      {
        title: "Analytics",
        blocks: [
          {
            type: "p",
            text: "The website uses OpenPanel, an open-source analytics solution self-hosted by Gladys Assistant SAS, to count visits and improve the website. A technical identifier is stored in the browser to distinguish visits; no data is sold or shared with any advertising network.",
          },
        ],
      },
      {
        blocks: [
          {
            type: "note",
            text: "Gladys Assistant is a French company, operating under French and European law. Should this English text and the French version differ, the French version prevails:",
            link: { label: "Mentions légales", href: "/fr/legal-notice/" },
          },
        ],
      },
    ],
  };
}
