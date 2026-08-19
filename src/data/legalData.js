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

// Consumer mediator appointed by the company, as required by article L. 616-1
// of the French consumer code. Its details have to appear both on the legal
// notice and in the terms of sale.
export const MEDIATOR = {
  name: "CM2C - Centre de la Médiation de la Consommation de Conciliateurs de Justice",
  address: "49 rue de Ponthieu, 75008 Paris, France",
  phone: "01 89 47 00 14",
  email: "litiges@cm2c.net",
  url: "https://www.cm2c.net/declarer-un-litige.php",
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
      updated: "Dernière mise à jour : 19 août 2026",
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
          title: "Durée de l'offre et résiliation",
          blocks: [
            {
              type: "p",
              text: "L'abonnement Gladys Plus fait l'objet d'une reconduction automatique. L'utilisateur peut résilier son abonnement à tout moment et en un clic depuis son compte Gladys Plus, ou en envoyant un email à hello@gladysassistant.com.",
            },
            {
              type: "p",
              text: "L'utilisateur dispose de 30 jours pour se faire rembourser si il n'est pas satisfait de la prestation, et ce sans justification.",
            },
            {
              type: "p",
              text: "Conformément à l'article L. 215-1 du Code de la consommation, pour les abonnements annuels, Gladys Assistant informe l'utilisateur par email, au plus tôt trois mois et au plus tard un mois avant le terme de la période en cours, de sa faculté de ne pas reconduire son abonnement. À défaut d'une telle information, l'utilisateur peut mettre fin gratuitement à son abonnement à tout moment à compter de la date de reconduction, et les sommes versées après cette date lui sont remboursées.",
            },
            {
              type: "p",
              text: "Conformément à l'article L. 215-1-1 du Code de la consommation, l'abonnement souscrit en ligne peut être résilié en ligne, depuis le compte Gladys Plus de l'utilisateur, aussi simplement qu'il a été souscrit.",
            },
          ],
        },
        {
          title: "Droit de rétractation pour l'abonnement Gladys Plus",
          blocks: [
            {
              type: "p",
              text: "Conformément à l'article L. 221-18 du Code de la consommation, l'utilisateur consommateur dispose d'un délai de 14 jours à compter de la conclusion du contrat pour exercer son droit de rétractation, sans avoir à motiver sa décision ni à supporter de pénalités.",
            },
            {
              type: "p",
              text: "Le service Gladys Plus étant accessible immédiatement, l'utilisateur demande expressément, lors de sa souscription, que son exécution commence avant l'expiration de ce délai. Il conserve son droit de rétractation, mais devra régler le montant correspondant au service déjà fourni jusqu'à la communication de sa décision, au prorata de la période d'abonnement écoulée.",
            },
            {
              type: "p",
              text: "Pour exercer ce droit, l'utilisateur notifie sa décision par email à hello@gladysassistant.com, ou au moyen du formulaire type figurant à la fin des présentes conditions. Le remboursement intervient dans un délai de 14 jours à compter de la réception de cette décision.",
            },
            {
              type: "p",
              text: "Indépendamment de ce droit légal, Gladys Assistant accorde commercialement un délai de 30 jours pour demander le remboursement intégral de l'abonnement, sans justification.",
            },
          ],
        },
        {
          title: "Livraison du matériel",
          blocks: [
            {
              type: "p",
              text: "Le kit de démarrage est préparé à la demande : le mini-PC est commandé auprès du fournisseur, installé et configuré individuellement, puis expédié via Mondial Relay.",
            },
            {
              type: "p",
              text: "La commande est généralement livrée sous 10 jours ouvrés à compter du paiement, et au plus tard 30 jours, conformément à l'article L. 216-1 du Code de la consommation. À défaut de livraison dans ce délai, l'utilisateur peut résoudre la commande dans les conditions prévues par le Code de la consommation et obtenir le remboursement intégral des sommes versées.",
            },
            {
              type: "p",
              text: "Les frais de livraison et les pays desservis sont indiqués lors du paiement, avant la validation de la commande.",
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
              text: "Pour exercer ce droit, l'utilisateur notifie sa décision de rétractation par email à hello@gladysassistant.com, ou au moyen du formulaire type figurant à la fin des présentes conditions. Le matériel doit être renvoyé au plus tard 14 jours après cette notification. Les frais de retour sont à la charge de l'utilisateur.",
            },
            {
              type: "p",
              text: "L'utilisateur peut essayer le matériel comme il l'aurait fait en magasin. Sa responsabilité n'est engagée qu'à l'égard de la dépréciation du matériel résultant de manipulations autres que celles nécessaires pour établir sa nature, ses caractéristiques et son bon fonctionnement.",
            },
            {
              type: "p",
              text: "Le remboursement porte sur le prix du matériel ainsi que sur les frais de livraison standard initialement facturés. Il intervient dans un délai de 14 jours à compter de la récupération du matériel ou de la preuve de son expédition, la date retenue étant celle du premier de ces faits.",
            },
          ],
        },
        {
          title: "Garanties légales",
          blocks: [
            {
              type: "p",
              text: "Le matériel vendu par Gladys Assistant (kit de démarrage) bénéficie des garanties légales suivantes, indépendamment de toute garantie commerciale :",
            },
            {
              type: "ul",
              items: [
                {
                  label: "Garantie légale de conformité :",
                  text: "articles L. 217-3 et suivants du Code de la consommation. Le consommateur dispose d'un délai de deux ans à compter de la délivrance du bien pour obtenir sa mise en conformité, sans frais et sans avoir à prouver le défaut pendant les vingt-quatre mois qui suivent la délivrance. Il peut choisir entre la réparation et le remplacement du bien, et obtenir une réduction du prix ou la résolution de la vente dans les cas prévus par la loi.",
                },
                {
                  label: "Prolongation de la garantie :",
                  text: "toute réparation intervenant dans le cadre de la garantie légale de conformité prolonge celle-ci de six mois. Si le consommateur demande la réparation mais que le vendeur impose le remplacement, la garantie légale de conformité est renouvelée pour deux ans à compter du remplacement.",
                },
                {
                  label: "Garantie des vices cachés :",
                  text: "articles 1641 et suivants du Code civil. Le consommateur peut obtenir la résolution de la vente ou une réduction du prix, dans un délai de deux ans à compter de la découverte du vice.",
                },
              ],
            },
            {
              type: "p",
              text: "Le service Gladys Plus, en tant que service numérique, bénéficie de la garantie légale de conformité des contenus et services numériques prévue aux articles L. 224-25-12 et suivants du Code de la consommation.",
            },
            {
              type: "p",
              text: "Pièces détachées : le mini-PC fourni dans le kit de démarrage est fabriqué par Beelink. Le fabricant ne communique pas de durée de disponibilité des pièces détachées pour ces modèles. Des pièces (ventilateur, câbles, cartes) peuvent être obtenues sur demande auprès de son service après-vente.",
            },
            {
              type: "p",
              text: "Ces garanties s'exercent par email à hello@gladysassistant.com. Elles s'appliquent indépendamment du droit de rétractation et de la garantie commerciale de remboursement de 30 jours.",
            },
          ],
        },
        {
          title: "Reprise des équipements usagés",
          blocks: [
            {
              type: "p",
              text: "Conformément à la réglementation relative aux déchets d'équipements électriques et électroniques (DEEE), l'utilisateur qui commande un kit de démarrage peut faire reprendre gratuitement un équipement usagé de type équivalent, dans la limite d'un appareil repris pour un appareil acheté. La demande se formule par email à hello@gladysassistant.com au moment de la commande ; les modalités de retour lui sont alors communiquées.",
            },
            {
              type: "p",
              text: "L'éco-participation applicable au matériel est acquittée en amont par le fabricant ou l'importateur qui l'a mis sur le marché français.",
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
          title: "Médiation de la consommation",
          blocks: [
            {
              type: "p",
              text: "Conformément à l'article L. 612-1 du Code de la consommation, tout consommateur a le droit de recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d'un litige qui l'oppose à un professionnel. Après avoir adressé une réclamation écrite à hello@gladysassistant.com et à défaut de solution satisfaisante, le consommateur peut saisir le médiateur désigné par Gladys Assistant :",
            },
            {
              type: "dl",
              items: [
                { term: "Médiateur", value: MEDIATOR.name },
                { term: "Adresse", value: MEDIATOR.address },
                { term: "Téléphone", value: MEDIATOR.phone },
                { term: "Email", value: MEDIATOR.email },
              ],
            },
            {
              type: "p",
              text: "Le litige peut également être déclaré en ligne :",
              link: { label: "www.cm2c.net", href: MEDIATOR.url },
            },
            {
              type: "p",
              text: "La saisine du médiateur doit intervenir dans un délai maximal d'un an à compter de la réclamation écrite adressée au professionnel. Le recours à la médiation est gratuit pour le consommateur.",
            },
          ],
        },
        {
          title: "Responsabilité",
          blocks: [
            {
              type: "p",
              text: "Gladys Assistant SAS est responsable de plein droit de la bonne exécution du service Gladys Plus, dans les conditions prévues par le Code de la consommation. Aucune stipulation des présentes ne peut avoir pour effet de supprimer ou de réduire le droit à réparation de l'utilisateur consommateur en cas de manquement de Gladys Assistant SAS à ses obligations.",
            },
            {
              type: "p",
              text: "Gladys Assistant SAS ne garantit pas que le service Gladys Plus sera exempt d'anomalies ou d'erreurs, ni qu'il fonctionnera sans interruption, ni qu'il est compatible avec un matériel ou une configuration particulière autre que ceux expressément validés sur le site. Sa disponibilité est décrite à l'article « Disponibilité » des présentes.",
            },
            {
              type: "p",
              text: "Le produit open-source Gladys Assistant, distribué gratuitement sous licence Apache 2.0, est fourni sans garantie conformément aux termes de cette licence. Il est distinct du service Gladys Plus.",
            },
            {
              type: "p",
              text: "Pour les utilisateurs professionnels n'agissant pas en qualité de consommateur, la réparation du préjudice subi ne pourra excéder le montant des sommes effectivement payées au titre de l'abonnement au cours des douze derniers mois, et Gladys Assistant SAS ne sera pas tenue des dommages indirects (commercial, financier, exploitation).",
            },
          ],
        },
        {
          title: "Droit applicable",
          blocks: [
            {
              type: "p",
              text: "Les présentes conditions générales de vente sont soumises au droit français. Les dispositions plus protectrices de la loi du pays de résidence habituelle du consommateur demeurent applicables.",
            },
          ],
        },
        {
          title: "Formulaire type de rétractation",
          blocks: [
            {
              type: "p",
              text: "(Veuillez compléter et renvoyer le présent formulaire uniquement si vous souhaitez vous rétracter du contrat.)",
            },
            {
              type: "ul",
              items: [
                "À l'attention de Gladys Assistant, 66 avenue des Champs-Élysées, 75008 Paris, France — hello@gladysassistant.com :",
                "Je vous notifie par la présente ma rétractation du contrat portant sur la vente du bien ci-dessous / pour la prestation de services ci-dessous :",
                "Commandé le (*) / reçu le (*) :",
                "Nom du consommateur :",
                "Adresse du consommateur :",
                "Signature du consommateur (uniquement en cas de notification du présent formulaire sur papier) :",
                "Date :",
                "(*) Rayez la mention inutile.",
              ],
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
    updated: "Last updated: 19 August 2026",
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
          {
            type: "p",
            text: "In accordance with article L. 215-1 of the French consumer code, for yearly subscriptions, Gladys Assistant informs the user by email, at the earliest three months and at the latest one month before the end of the current period, of their right not to renew their subscription. Failing that information, the user may terminate their subscription free of charge at any time from the renewal date onwards, and the amounts paid after that date are refunded.",
          },
          {
            type: "p",
            text: "In accordance with article L. 215-1-1 of the French consumer code, a subscription taken out online can be terminated online, from the user's Gladys Plus account, as simply as it was taken out.",
          },
        ],
      },
      {
        title: "Right of withdrawal for the Gladys Plus subscription",
        blocks: [
          {
            type: "p",
            text: "In accordance with article L. 221-18 of the French consumer code, a consumer has 14 days from the conclusion of the contract to exercise their right of withdrawal, without having to justify their decision nor to pay any penalty.",
          },
          {
            type: "p",
            text: "As the Gladys Plus service is available immediately, the user expressly requests, when subscribing, that its performance starts before that period ends. They keep their right of withdrawal, but will owe the amount corresponding to the service already provided until they communicate their decision, in proportion to the elapsed subscription period.",
          },
          {
            type: "p",
            text: "To exercise this right, the user notifies their decision by email at hello@gladysassistant.com, or using the model form at the end of these terms. The refund is issued within 14 days from the reception of that decision.",
          },
          {
            type: "p",
            text: "Independently of this legal right, Gladys Assistant commercially grants 30 days to ask for a full refund of the subscription, without any justification.",
          },
        ],
      },
      {
        title: "Delivery of the hardware",
        blocks: [
          {
            type: "p",
            text: "The starter kit is prepared to order: the mini-PC is ordered from the supplier, installed and configured individually, then shipped through Mondial Relay.",
          },
          {
            type: "p",
            text: "The order is usually delivered within 10 working days of the payment, and at the latest within 30 days, in accordance with article L. 216-1 of the French consumer code. Failing delivery within that period, the user may cancel the order under the conditions set by the French consumer code and be refunded in full.",
          },
          {
            type: "p",
            text: "Delivery costs and the countries served are shown at payment, before the order is confirmed.",
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
            text: "To exercise this right, the user notifies their withdrawal decision by email at hello@gladysassistant.com, or using the model form at the end of these terms. The hardware must be sent back no later than 14 days after that notification. Return shipping costs are at the user's expense.",
          },
          {
            type: "p",
            text: "The user may try out the hardware as they would have done in a shop. They are only liable for the depreciation of the hardware resulting from handling beyond what is necessary to establish its nature, characteristics and proper operation.",
          },
          {
            type: "p",
            text: "The refund covers the price of the hardware as well as the standard delivery costs initially charged. It is issued within 14 days from the recovery of the hardware or from the proof of its shipment, whichever comes first.",
          },
        ],
      },
      {
        title: "Legal guarantees",
        blocks: [
          {
            type: "p",
            text: "The hardware sold by Gladys Assistant (starter kit) comes with the following legal guarantees, independently of any commercial guarantee:",
          },
          {
            type: "ul",
            items: [
              {
                label: "Legal guarantee of conformity:",
                text: "articles L. 217-3 and following of the French consumer code. The consumer has two years from the delivery of the goods to obtain their conformity, free of charge and without having to prove the defect during the twenty-four months following delivery. They may choose between repair and replacement, and obtain a price reduction or the cancellation of the sale in the cases provided for by the law.",
              },
              {
                label: "Extension of the guarantee:",
                text: "any repair carried out under the legal guarantee of conformity extends it by six months. If the consumer asks for a repair but the seller imposes a replacement, the legal guarantee of conformity is renewed for two years from the replacement.",
              },
              {
                label: "Guarantee against hidden defects:",
                text: "articles 1641 and following of the French civil code. The consumer may obtain the cancellation of the sale or a price reduction, within two years from the discovery of the defect.",
              },
            ],
          },
          {
            type: "p",
            text: "The Gladys Plus service, as a digital service, comes with the legal guarantee of conformity for digital content and services provided for by articles L. 224-25-12 and following of the French consumer code.",
          },
          {
            type: "p",
            text: "Spare parts: the mini-PC supplied in the starter kit is manufactured by Beelink. The manufacturer does not state for how long spare parts remain available for these models. Parts (fan, cables, boards) can be obtained on request from its after-sales service.",
          },
          {
            type: "p",
            text: "These guarantees are exercised by email at hello@gladysassistant.com. They apply independently of the right of withdrawal and of the 30-day commercial refund guarantee.",
          },
        ],
      },
      {
        title: "Take-back of used equipment",
        blocks: [
          {
            type: "p",
            text: "In accordance with the regulation on waste electrical and electronic equipment (WEEE), a user ordering a starter kit can have an equivalent piece of used equipment taken back free of charge, one item for each item purchased. The request is made by email at hello@gladysassistant.com when ordering; the return terms are then sent to them.",
          },
          {
            type: "p",
            text: "The eco-contribution applying to the hardware is paid upstream by the manufacturer or the importer who placed it on the French market.",
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
        title: "Consumer mediation",
        blocks: [
          {
            type: "p",
            text: "In accordance with article L. 612-1 of the French consumer code, every consumer has the right to use a consumer mediator, free of charge, to settle a dispute with a professional amicably. After sending a written complaint to hello@gladysassistant.com and failing a satisfactory answer, the consumer may refer the matter to the mediator appointed by Gladys Assistant:",
          },
          {
            type: "dl",
            items: [
              { term: "Mediator", value: MEDIATOR.name },
              { term: "Address", value: MEDIATOR.address },
              { term: "Phone", value: MEDIATOR.phone },
              { term: "Email", value: MEDIATOR.email },
            ],
          },
          {
            type: "p",
            text: "The dispute can also be declared online:",
            link: { label: "www.cm2c.net", href: MEDIATOR.url },
          },
          {
            type: "p",
            text: "The mediator must be contacted within one year of the written complaint sent to the professional. Mediation is free of charge for the consumer.",
          },
        ],
      },
      {
        title: "Liability",
        blocks: [
          {
            type: "p",
            text: "Gladys Assistant SAS is liable as of right for the proper performance of the Gladys Plus service, under the conditions set by the French consumer code. No provision of these terms may remove or reduce a consumer's right to compensation should Gladys Assistant SAS fail to meet its obligations.",
          },
          {
            type: "p",
            text: 'Gladys Assistant SAS does not warrant that the Gladys Plus service will be free of anomalies or errors, nor that it will operate without interruption, nor that it is compatible with any hardware or configuration other than the ones expressly validated on the website. Its availability is described in the "Availability" article of these terms.',
          },
          {
            type: "p",
            text: "The open-source product Gladys Assistant, distributed free of charge under the Apache 2.0 license, is provided without warranty in accordance with the terms of that license. It is distinct from the Gladys Plus service.",
          },
          {
            type: "p",
            text: "For professional users not acting as consumers, the compensation for the damage suffered may not exceed the amounts actually paid for the subscription over the last twelve months, and Gladys Assistant SAS shall not be liable for indirect damages (commercial, financial, operational).",
          },
        ],
      },
      {
        title: "Governing law",
        blocks: [
          {
            type: "p",
            text: "These terms of sale are governed by French law. The more protective provisions of the law of the consumer's country of habitual residence remain applicable.",
          },
        ],
      },
      {
        title: "Model withdrawal form",
        blocks: [
          {
            type: "p",
            text: "(Please complete and return this form only if you wish to withdraw from the contract.)",
          },
          {
            type: "ul",
            items: [
              "To Gladys Assistant, 66 avenue des Champs-Élysées, 75008 Paris, France — hello@gladysassistant.com:",
              "I hereby give notice of my withdrawal from the contract for the sale of the following goods / for the provision of the following service:",
              "Ordered on (*) / received on (*):",
              "Name of the consumer:",
              "Address of the consumer:",
              "Signature of the consumer (only if this form is notified on paper):",
              "Date:",
              "(*) Delete as appropriate.",
            ],
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
      title: "Politique de confidentialité",
      description:
        "La politique de confidentialité du site gladysassistant.com et du service Gladys Plus : données collectées, bases légales, destinataires, durées de conservation et droits des utilisateurs.",
      heading: "Politique de confidentialité",
      updated: "Dernière mise à jour : 19 août 2026",
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
              text: "La présente politique de confidentialité a pour objet d’informer les utilisateurs sur les données collectées lors de leur utilisation du site gladysassistant.com et du service Gladys Plus.",
            },
            {
              type: "p",
              text: "Le logiciel open source Gladys Assistant, lui, s'installe et fonctionne chez l'utilisateur : les données de sa maison connectée (appareils, scénarios, historiques) restent sur son propre matériel et ne nous sont jamais transmises. Seules les statistiques d'usage décrites ci-dessous remontent à nos serveurs.",
            },
          ],
        },
        {
          title: "Responsable de traitement",
          blocks: [
            {
              type: "p",
              text: "Le responsable des traitements décrits ci-dessous est Gladys Assistant SAS, 66 avenue des Champs-Élysées, 75008 Paris, France. Toute question relative à ces traitements peut être adressée à hello@gladysassistant.com.",
            },
          ],
        },
        {
          title: "Données collectées, finalités et bases légales",
          blocks: [
            {
              type: "ul",
              items: [
                {
                  label: "Compte Gladys Plus :",
                  text: "adresse email et nom d'utilisateur, communiqués lors de l'inscription, pour créer et gérer le compte et fournir le service. Base légale : exécution du contrat.",
                },
                {
                  label: "Paiement et facturation :",
                  text: "les données de paiement sont traitées directement par Stripe, qui agit en qualité de responsable de traitement pour cette opération ; nous n'avons jamais accès au numéro de carte bancaire. Nous conservons les données de facturation. Bases légales : exécution du contrat et obligation légale comptable.",
                },
                {
                  label: "Sauvegardes :",
                  text: "les sauvegardes de l'instance Gladys de l'utilisateur sont chiffrées de bout en bout avant leur envoi ; nous ne pouvons pas en lire le contenu. Base légale : exécution du contrat.",
                },
                {
                  label: "Sécurité du service :",
                  text: "l'adresse IP peut être conservée temporairement en mémoire pour limiter le nombre d'appels à une ressource (rate-limiting) et protéger le service des attaques par déni de service. Base légale : intérêt légitime à assurer la sécurité du service.",
                },
                {
                  label: "Fonctionnalités d'IA :",
                  text: "lorsque l'utilisateur utilise l'assistant IA, ses requêtes sont transmises aux modèles Open-Weight hébergés chez Scaleway, en France, pour produire une réponse. Base légale : exécution du contrat.",
                },
                {
                  label: "Assistants vocaux :",
                  text: "si l'utilisateur active l'intégration Google Home ou Alexa, les commandes vocales transitent par les services de Google ou d'Amazon, soumis à leurs propres politiques de confidentialité. Base légale : exécution du contrat, à l'initiative de l'utilisateur.",
                },
                {
                  label: "Statistiques d'usage du logiciel open source :",
                  text: "une instance Gladys Assistant interroge périodiquement nos serveurs pour savoir si une nouvelle version est disponible. À cette occasion, nous enregistrons le pays, la région et le fuseau horaire déduits de l'adresse IP de la requête, le système d'exploitation, la version de Node.js, l'exécution ou non dans Docker, le nombre d'appareils connectés et la liste des intégrations utilisées. L'adresse IP elle-même n'est pas conservée, et ces données ne sont rattachées ni à un nom ni à un compte Gladys Plus. Base légale : intérêt légitime à connaître l'usage du projet et à alimenter ses statistiques publiques.",
                },
                {
                  label: "Formulaire de contact :",
                  text: "adresse email et contenu du message, pour traiter la demande. Base légale : intérêt légitime à répondre aux demandes qui nous sont adressées.",
                },
                {
                  label: "Newsletter :",
                  text: "adresse email, pour envoyer les actualités du projet. Base légale : consentement, retirable à tout moment via le lien de désinscription.",
                },
                {
                  label: "Mesure d'audience :",
                  text: "statistiques de visite du site, collectées via OpenPanel, une solution open source que nous hébergeons nous-mêmes, sans cookie ni identifiant déposé dans le navigateur. Base légale : intérêt légitime à mesurer l'audience du site.",
                },
              ],
            },
          ],
        },
        {
          title: "Destinataires des données",
          blocks: [
            {
              type: "p",
              text: "Les données ne sont ni vendues, ni louées, ni transmises à des fins publicitaires. Elles sont accessibles à Gladys Assistant SAS et aux prestataires techniques suivants, qui agissent sur nos instructions :",
            },
            {
              type: "ul",
              items: [
                "Cloudflare, pour l'hébergement du site et l'exécution des fonctions serveur (formulaire de contact, inscription à la newsletter, paiement)",
                "Stripe, pour le traitement des paiements",
                "Scaleway, pour l'hébergement des modèles d'IA en France",
                "l'hébergeur européen de l'infrastructure Gladys Plus (API, sauvegardes, relais)",
                "Amazon Web Services (Amazon SES), dans la région Irlande, pour l'envoi de la newsletter et des emails de service",
              ],
            },
            {
              type: "p",
              text: "Certains de ces prestataires sont établis hors de l'Union européenne, ou peuvent y traiter des données. Ces transferts sont encadrés par les clauses contractuelles types de la Commission européenne ou par une décision d'adéquation.",
            },
          ],
        },
        {
          title: "Durées de conservation",
          blocks: [
            {
              type: "ul",
              items: [
                "Données du compte Gladys Plus : pendant toute la durée de la relation commerciale, puis suppression",
                "Sauvegardes : les sauvegardes de plus de six mois sont supprimées et, passé le mois en cours, une seule sauvegarde par mois est conservée ; l'utilisateur peut les supprimer à tout moment depuis son compte",
                "Données de facturation : 10 ans, conformément aux obligations comptables",
                "Adresse IP utilisée pour le rate-limiting : quelques minutes, en mémoire uniquement, sans écriture sur disque",
                "Messages envoyés via le formulaire de contact : le temps nécessaire au traitement de la demande",
                "Adresse email inscrite à la newsletter : jusqu'au retrait du consentement",
                "Données de mesure d'audience : 13 mois au maximum",
              ],
            },
          ],
        },
        {
          title: "Stockage dans le navigateur",
          blocks: [
            {
              type: "p",
              text: "Le service Gladys Plus utilise le LocalStorage du navigateur de l'utilisateur pour stocker :",
            },
            {
              type: "ul",
              items: [
                "La clé privée qui permet de communiquer avec l'instance Gladys Assistant de l'utilisateur.",
                "Un token d'accès à Gladys Plus qui authentifie l'utilisateur.",
              ],
            },
            {
              type: "p",
              text: "Le site gladysassistant.com y stocke la devise détectée pour l'affichage des tarifs et, le cas échéant, les paramètres de campagne présents dans l'URL d'arrivée (utm_source, utm_medium, utm_campaign...), transmis avec la commande pour savoir d'où proviennent les souscriptions.",
            },
            {
              type: "p",
              text: "La mesure d'audience, elle, ne dépose ni cookie ni identifiant dans le navigateur : OpenPanel calcule un identifiant de visite côté serveur, en hachant l'adresse IP et le navigateur avec un sel renouvelé chaque jour. L'adresse IP n'est pas conservée et l'identifiant ne peut plus être rattaché à une visite antérieure au-delà de 24 heures. Aucun identifiant publicitaire n'est collecté et aucun cookie publicitaire n'est déposé.",
            },
          ],
        },
        {
          title: "Droits des utilisateurs",
          blocks: [
            {
              type: "p",
              text: "Conformément au Règlement général sur la protection des données, l'utilisateur dispose d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de ses données, ainsi que du droit de retirer son consentement à tout moment lorsque le traitement repose sur celui-ci, et du droit de définir des directives relatives au sort de ses données après son décès.",
            },
            {
              type: "p",
              text: "Ces demandes se font par courriel à l’adresse hello@gladysassistant.com. Nous nous engageons à y répondre dans un délai de trente (30) jours calendaires à compter de leur réception.",
            },
            {
              type: "p",
              text: "L'utilisateur qui estime, après nous avoir contactés, que ses droits ne sont pas respectés peut adresser une réclamation à la Commission nationale de l'informatique et des libertés (CNIL), 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 :",
              link: { label: "www.cnil.fr", href: "https://www.cnil.fr" },
            },
          ],
        },
      ],
    };
  }

  return {
    title: "Privacy policy",
    description:
      "The privacy policy of gladysassistant.com and of the Gladys Plus service: data collected, legal bases, recipients, retention periods and user rights.",
    heading: "Privacy policy",
    updated: "Last updated: 19 August 2026",
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
            text: "The purpose of this privacy policy is to inform users about the data collected when they use the gladysassistant.com website and the Gladys Plus service.",
          },
          {
            type: "p",
            text: "The open-source Gladys Assistant software itself is installed and runs at the user's home: their smart home data (devices, scenes, history) stays on their own hardware and is never sent to us. Only the usage statistics described below reach our servers.",
          },
        ],
      },
      {
        title: "Data controller",
        blocks: [
          {
            type: "p",
            text: "The controller of the processing described below is Gladys Assistant SAS, 66 avenue des Champs-Élysées, 75008 Paris, France. Any question about it can be sent to hello@gladysassistant.com.",
          },
        ],
      },
      {
        title: "Data collected, purposes and legal bases",
        blocks: [
          {
            type: "ul",
            items: [
              {
                label: "Gladys Plus account:",
                text: "email address and username, provided when signing up, to create and manage the account and provide the service. Legal basis: performance of the contract.",
              },
              {
                label: "Payment and invoicing:",
                text: "payment data is processed directly by Stripe, acting as a controller for that operation; we never have access to the card number. We keep the invoicing data. Legal bases: performance of the contract and accounting legal obligation.",
              },
              {
                label: "Backups:",
                text: "the backups of the user's Gladys instance are end-to-end encrypted before being sent; we cannot read their content. Legal basis: performance of the contract.",
              },
              {
                label: "Security of the service:",
                text: "the IP address may be kept temporarily in memory to limit the number of calls to a resource (rate-limiting) and protect the service against denial of service attacks. Legal basis: legitimate interest in keeping the service secure.",
              },
              {
                label: "AI features:",
                text: "when the user uses the AI assistant, their requests are sent to the Open-Weight models hosted at Scaleway, in France, to produce an answer. Legal basis: performance of the contract.",
              },
              {
                label: "Voice assistants:",
                text: "if the user enables the Google Home or Alexa integration, voice commands go through Google's or Amazon's services, subject to their own privacy policies. Legal basis: performance of the contract, at the user's initiative.",
              },
              {
                label: "Usage statistics of the open-source software:",
                text: "a Gladys Assistant instance periodically asks our servers whether a new version is available. On that occasion, we record the country, region and timezone derived from the IP address of the request, the operating system, the Node.js version, whether it runs in Docker, the number of connected devices and the list of integrations in use. The IP address itself is not kept, and this data is linked neither to a name nor to a Gladys Plus account. Legal basis: legitimate interest in knowing how the project is used and in feeding its public statistics.",
              },
              {
                label: "Contact form:",
                text: "email address and content of the message, to answer the request. Legal basis: legitimate interest in answering the requests sent to us.",
              },
              {
                label: "Newsletter:",
                text: "email address, to send news about the project. Legal basis: consent, which can be withdrawn at any time through the unsubscribe link.",
              },
              {
                label: "Analytics:",
                text: "website visit statistics, collected through OpenPanel, an open-source solution that we host ourselves, without any cookie or identifier stored in the browser. Legal basis: legitimate interest in measuring the audience of the website.",
              },
            ],
          },
        ],
      },
      {
        title: "Recipients of the data",
        blocks: [
          {
            type: "p",
            text: "The data is never sold, rented, or shared for advertising purposes. It is accessible to Gladys Assistant SAS and to the following technical providers, acting on our instructions:",
          },
          {
            type: "ul",
            items: [
              "Cloudflare, for the hosting of the website and the server functions (contact form, newsletter signup, payment)",
              "Stripe, for payment processing",
              "Scaleway, for hosting the AI models in France",
              "the European host of the Gladys Plus infrastructure (API, backups, relays)",
              "Amazon Web Services (Amazon SES), in the Ireland region, for sending the newsletter and service emails",
            ],
          },
          {
            type: "p",
            text: "Some of these providers are established outside the European Union, or may process data there. Such transfers are governed by the European Commission's standard contractual clauses or by an adequacy decision.",
          },
        ],
      },
      {
        title: "Retention periods",
        blocks: [
          {
            type: "ul",
            items: [
              "Gladys Plus account data: for the whole duration of the commercial relationship, then deleted",
              "Backups: backups older than six months are deleted and, beyond the current month, a single backup per month is kept; the user can delete them at any time from their account",
              "Invoicing data: 10 years, in accordance with accounting obligations",
              "IP address used for rate-limiting: a few minutes, in memory only, never written to disk",
              "Messages sent through the contact form: as long as needed to handle the request",
              "Email address signed up to the newsletter: until consent is withdrawn",
              "Analytics data: 13 months at most",
            ],
          },
        ],
      },
      {
        title: "Browser storage",
        blocks: [
          {
            type: "p",
            text: "The Gladys Plus service uses the LocalStorage of the user's browser to store:",
          },
          {
            type: "ul",
            items: [
              "The private key used to communicate with the user's Gladys Assistant instance.",
              "A Gladys Plus access token which authenticates the user.",
            ],
          },
          {
            type: "p",
            text: "The gladysassistant.com website stores there the currency detected to display prices and, where applicable, the campaign parameters present in the landing URL (utm_source, utm_medium, utm_campaign...), passed along with the order to know where subscriptions come from.",
          },
          {
            type: "p",
            text: "Analytics, on the other hand, stores neither a cookie nor an identifier in the browser: OpenPanel computes a visit identifier server-side, by hashing the IP address and the browser with a salt renewed every day. The IP address is not kept, and the identifier can no longer be tied to an earlier visit beyond 24 hours. No advertising identifier is collected and no advertising cookie is set.",
          },
        ],
      },
      {
        title: "User rights",
        blocks: [
          {
            type: "p",
            text: "In accordance with the General Data Protection Regulation, users have a right to access, rectify, erase, restrict, object to and port their data, as well as the right to withdraw their consent at any time where the processing is based on it, and the right to give instructions about what happens to their data after their death.",
          },
          {
            type: "p",
            text: "These requests are made by email at hello@gladysassistant.com. We undertake to answer them within thirty (30) calendar days from their reception.",
          },
          {
            type: "p",
            text: "A user who considers, after contacting us, that their rights are not respected may lodge a complaint with the French data protection authority (CNIL), 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07:",
            link: { label: "www.cnil.fr", href: "https://www.cnil.fr" },
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
      updated: "Dernière mise à jour : 19 août 2026",
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
            {
              type: "p",
              text: "Gladys Assistant ne dispose pas d'accueil téléphonique. Toute demande adressée à hello@gladysassistant.com reçoit une réponse sous 5 jours ouvrés.",
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
          title: "Médiation de la consommation",
          blocks: [
            {
              type: "p",
              text: "Conformément à l'article L. 616-1 du Code de la consommation, Gladys Assistant a désigné un médiateur de la consommation, que tout client consommateur peut saisir gratuitement après avoir adressé une réclamation écrite restée sans solution satisfaisante :",
            },
            {
              type: "dl",
              items: [
                { term: "Médiateur", value: MEDIATOR.name },
                { term: "Adresse", value: MEDIATOR.address },
                { term: "Téléphone", value: MEDIATOR.phone },
                { term: "Email", value: MEDIATOR.email },
              ],
            },
            {
              type: "p",
              text: "Le litige peut également être déclaré en ligne :",
              link: { label: "www.cm2c.net", href: MEDIATOR.url },
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
              text: "Le site utilise OpenPanel, une solution de mesure d'audience open source auto-hébergée par Gladys Assistant SAS, afin de comptabiliser les visites et d'améliorer le site. Elle ne dépose ni cookie ni identifiant dans le navigateur et ne conserve pas les adresses IP ; aucune donnée n'est revendue ni transmise à une régie publicitaire.",
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
    updated: "Last updated: 19 August 2026",
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
          {
            type: "p",
            text: "Gladys Assistant has no telephone support. Any request sent to hello@gladysassistant.com is answered within 5 working days.",
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
        title: "Consumer mediation",
        blocks: [
          {
            type: "p",
            text: "In accordance with article L. 616-1 of the French consumer code, Gladys Assistant has appointed a consumer mediator, whom any consumer customer may contact free of charge after a written complaint has been left without a satisfactory answer:",
          },
          {
            type: "dl",
            items: [
              { term: "Mediator", value: MEDIATOR.name },
              { term: "Address", value: MEDIATOR.address },
              { term: "Phone", value: MEDIATOR.phone },
              { term: "Email", value: MEDIATOR.email },
            ],
          },
          {
            type: "p",
            text: "The dispute can also be declared online:",
            link: { label: "www.cm2c.net", href: MEDIATOR.url },
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
            text: "The website uses OpenPanel, an open-source analytics solution self-hosted by Gladys Assistant SAS, to count visits and improve the website. It stores neither a cookie nor an identifier in the browser and does not keep IP addresses; no data is sold or shared with any advertising network.",
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
