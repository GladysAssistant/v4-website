---
id: pilot-wire
title: "Module fil pilote Zigbee : piloter son chauffage électrique dans Gladys"
description: "Piloter ses radiateurs électriques avec un module fil pilote Zigbee (NodOn, Legrand) dans Gladys Assistant : ordres confort, éco et hors gel, en local via Zigbee2MQTT."
sidebar_label: Fil pilote (chauffage)
keywords:
  - fil pilote zigbee
  - module fil pilote zigbee
  - zigbee fil pilote
  - module zigbee radiateur fil pilote
  - nodon fil pilote
  - piloter chauffage électrique domotique
  - fil pilote gladys
---

import JsonLd from '@site/src/components/seo/JsonLd';

En France, la quasi-totalité des radiateurs électriques récents possède un **fil pilote** : un fil supplémentaire, généralement noir, par lequel le radiateur reçoit des ordres de marche. C'est le moyen le plus simple et le moins cher de rendre un chauffage électrique pilotable, sans changer les radiateurs.

Avec un **module fil pilote Zigbee** et Gladys Assistant, vous pilotez ces ordres depuis votre tableau de bord et vos scènes, entièrement en local : aucun abonnement, aucun cloud de fabricant, et le chauffage continue de fonctionner même si votre box internet tombe.

## Comment fonctionne le fil pilote

Le fil pilote ne transporte pas la puissance de chauffe : il transporte une **consigne**. Le radiateur garde son propre thermostat, réglé sur la température de confort, et le fil pilote lui dit quoi en faire.

Les ordres standards sont au nombre de quatre :

- **Confort** : le radiateur chauffe à la température réglée sur sa molette.
- **Éco** : il chauffe environ 3,5 °C en dessous de la consigne de confort.
- **Hors gel** : il maintient environ 7 °C, pour une absence longue.
- **Arrêt** : le radiateur ne chauffe plus.

Les modules et radiateurs dits « 6 ordres » ajoutent **Confort -1** et **Confort -2**, soit 1 °C et 2 °C sous la consigne de confort, utiles pour un abaissement doux plutôt qu'un passage franc en éco.

## Choisir un module fil pilote Zigbee

Un module fil pilote se place entre votre installation électrique et le radiateur : il reçoit les commandes en Zigbee et applique l'ordre correspondant sur le fil pilote. Deux modules reviennent régulièrement dans la communauté Gladys, tous deux reconnus par Zigbee2MQTT :

- **NodOn SIN-4-FP-21** : un micromodule à encastrer dans la boîte de connexion derrière le radiateur, ou à placer dans le tableau électrique. Compact, 6 ordres, et le plus utilisé.
- **Legrand 064882** : le module fil pilote de Legrand, dans la même logique, à intégrer au tableau ou en boîte d'encastrement.

Quelques points à regarder avant d'acheter :

- **6 ordres plutôt que 4** si vos radiateurs les gèrent : cela vous donne un abaissement progressif.
- **La place disponible** : derrière un radiateur, la boîte de connexion est souvent étroite. Vérifiez les dimensions du module, ou installez-le côté tableau.
- **Un module par radiateur** si vous voulez piloter chaque pièce indépendamment. Un seul module en tête de circuit pilote tous les radiateurs de ce circuit ensemble.

:::warning
L'installation d'un module fil pilote est une intervention sur votre installation électrique, en 230 V. Coupez le disjoncteur concerné avant toute manipulation, et si vous n'êtes pas à l'aise avec le câblage, faites appel à un électricien. Une erreur sur le fil pilote peut endommager le radiateur.
:::

## Appairer le module dans Gladys

Le module se connecte à Gladys via [Zigbee2MQTT](/fr/docs/integrations/zigbee2mqtt/), comme n'importe quel autre appareil Zigbee :

1. Dans Gladys, ouvrez `Intégrations / Zigbee2Mqtt`, puis le menu **Découvrir**.
2. Cliquez sur **Autoriser l'association**.
3. Mettez le module en mode appairage. Sur la plupart des modules, c'est un appui long sur le bouton de la façade, jusqu'à ce que la LED clignote.
4. Le module apparaît dans la liste avec ses fonctionnalités détectées. Nommez-le, affectez-le à une pièce, et enregistrez-le.
5. Repassez l'association en interdit une fois terminé, par sécurité.

Si le module n'apparaît pas, rapprochez-le du coordinateur pour l'appairage, ou vérifiez la section de dépannage de la [documentation Zigbee2MQTT](/fr/docs/integrations/zigbee2mqtt/).

## Piloter le chauffage depuis Gladys

Depuis Gladys 4.48, le **mode fil pilote** est une fonctionnalité à part entière : le module remonte un sélecteur de mode, et non une simple prise on/off.

- Sur le **tableau de bord**, ajoutez le module dans un widget « Appareils » : vous choisissez l'ordre (confort, éco, hors gel, arrêt) dans une liste déroulante.
- Dans les **scènes**, vous pouvez changer le mode d'un ou plusieurs radiateurs, ce qui est là que tout devient intéressant.

Quelques automatisations qui valent le détour :

- **Abaissement nocturne** : passer les chambres en éco à 23 h, retour en confort à 6 h 30, avec un [déclencheur planifié](/fr/docs/scenes/scheduled-trigger/).
- **Maison vide** : basculer tous les radiateurs en éco quand la [maison se vide](/fr/docs/scenes/house-empty/), et revenir en confort au retour.
- **Absence longue** : passer en hors gel pendant les vacances, et remettre le confort quelques heures avant le retour.
- **Jours rouges Tempo** : si vous êtes en [option EDF Tempo](/fr/docs/scenes/edf-tempo/), abaisser le chauffage sur les jours rouges est l'économie la plus rentable de toute la maison, puisque le chauffage est le premier poste de consommation.

Associez cela à un [suivi de votre consommation électrique](/fr/docs/integrations/enedis/) et vous voyez directement l'effet de ces scènes sur votre facture.

## Questions fréquentes

### Qu'est-ce qu'un module fil pilote Zigbee ?

C'est un petit module électrique qui se place entre votre installation et un radiateur électrique, et qui applique sur son fil pilote l'ordre que vous lui envoyez en Zigbee : confort, éco, hors gel ou arrêt. Il rend un radiateur classique pilotable depuis une solution domotique comme Gladys, sans remplacer le radiateur.

### Quel module fil pilote Zigbee choisir pour Gladys ?

Le NodOn SIN-4-FP-21 est le plus utilisé dans la communauté Gladys, et le Legrand 064882 remplit le même rôle. Les deux sont reconnus par Zigbee2MQTT et remontent leur mode fil pilote dans Gladys. Privilégiez un module 6 ordres si vos radiateurs les gèrent, et vérifiez la place disponible dans la boîte de connexion derrière le radiateur.

### Quels sont les ordres du fil pilote ?

Les quatre ordres standards sont Confort (le radiateur chauffe à la température de sa molette), Éco (environ 3,5 °C en dessous), Hors gel (environ 7 °C) et Arrêt. Les modules et radiateurs 6 ordres ajoutent Confort -1 et Confort -2, soit un abaissement de 1 °C et 2 °C.

### Le pilotage du chauffage fonctionne-t-il sans internet ?

Oui. Le module communique en Zigbee avec la clé USB branchée sur votre machine Gladys, et Gladys tourne chez vous. Les scènes de chauffage continuent donc de s'exécuter si votre box internet tombe, contrairement aux thermostats connectés qui dépendent du cloud de leur fabricant.

### Faut-il un module fil pilote par radiateur ?

Pour piloter chaque pièce indépendamment, oui : un module par radiateur. Si vous acceptez de piloter plusieurs radiateurs ensemble, un seul module placé en tête du circuit dans le tableau électrique suffit pour l'ensemble des radiateurs de ce circuit.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qu'est-ce qu'un module fil pilote Zigbee ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "C'est un petit module électrique qui se place entre votre installation et un radiateur électrique, et qui applique sur son fil pilote l'ordre que vous lui envoyez en Zigbee : confort, éco, hors gel ou arrêt. Il rend un radiateur classique pilotable depuis une solution domotique comme Gladys, sans remplacer le radiateur.",
        },
      },
      {
        "@type": "Question",
        name: "Quel module fil pilote Zigbee choisir pour Gladys ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le NodOn SIN-4-FP-21 est le plus utilisé dans la communauté Gladys, et le Legrand 064882 remplit le même rôle. Les deux sont reconnus par Zigbee2MQTT et remontent leur mode fil pilote dans Gladys. Privilégiez un module 6 ordres si vos radiateurs les gèrent, et vérifiez la place disponible dans la boîte de connexion derrière le radiateur.",
        },
      },
      {
        "@type": "Question",
        name: "Quels sont les ordres du fil pilote ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les quatre ordres standards sont Confort (le radiateur chauffe à la température de sa molette), Éco (environ 3,5 °C en dessous), Hors gel (environ 7 °C) et Arrêt. Les modules et radiateurs 6 ordres ajoutent Confort -1 et Confort -2, soit un abaissement de 1 °C et 2 °C.",
        },
      },
      {
        "@type": "Question",
        name: "Le pilotage du chauffage fonctionne-t-il sans internet ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Le module communique en Zigbee avec la clé USB branchée sur votre machine Gladys, et Gladys tourne chez vous. Les scènes de chauffage continuent donc de s'exécuter si votre box internet tombe, contrairement aux thermostats connectés qui dépendent du cloud de leur fabricant.",
        },
      },
      {
        "@type": "Question",
        name: "Faut-il un module fil pilote par radiateur ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pour piloter chaque pièce indépendamment, oui : un module par radiateur. Si vous acceptez de piloter plusieurs radiateurs ensemble, un seul module placé en tête du circuit dans le tableau électrique suffit pour l'ensemble des radiateurs de ce circuit.",
        },
      },
    ],
  }}
/>
