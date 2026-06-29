---
id: enedis
title: "API Enedis : suivez la consommation de votre Linky dans Gladys"
description: "Connectez l'API Enedis Data Connect pour suivre la consommation de votre compteur Linky dans Gladys Assistant. Accédez à vos données électriques en tant que particulier via Gladys Plus, sans contrat entreprise (France)."
sidebar_label: Enedis
keywords:
  - api enedis
  - enedis api
  - api linky
  - api enedis particulier
  - enedis data connect
  - linky consommation
  - suivre sa consommation électrique
---

import JsonLd from '@site/src/components/seo/JsonLd';

Enedis est le gestionnaire du réseau de distribution d'électricité français, et c'est aussi l'entreprise qui installe les compteurs communicants Linky dans les foyers. Enedis expose une API, appelée Data Connect, qui permet de récupérer les données de consommation électrique mesurées par votre compteur Linky.

Le souci : cette API est uniquement proposée aux entreprises, après signature d'un contrat et un processus de certification. En tant que particulier, vous ne pouvez pas demander un accès direct à l'API Enedis.

C'est là que Gladys intervient. Nous avons une structure juridique, "Gladys Assistant SAS", qui est certifiée pour accéder à l'API Enedis Data Connect et autorisée à la mettre à disposition des particuliers. Avec Gladys, vous pouvez donc suivre la consommation de votre Linky via l'API officielle Enedis, sans monter votre propre entreprise.

Cette intégration est disponible via [Gladys Plus](/fr/plus). Une fois connectée, votre consommation quotidienne est récupérée automatiquement et stockée dans votre propre instance Gladys : vous gardez votre historique et pouvez construire vos propres graphiques et [scènes](/fr/docs/scenes/intro/) par-dessus.

:::note
Cette intégration est uniquement utilisable en France, Enedis étant le gestionnaire du réseau de distribution d'électricité français.
:::

## Se connecter à Enedis dans Gladys

Rendez-vous sur [plus.gladysassistant.com](https://plus.gladysassistant.com), et cliquez sur l'intégration "Enedis":

![Enedis icône](../../../../../static/img/docs/fr/configuration/enedis/enedis-integration-icone.jpg)

Cliquez sur le bouton "J'accède à mon espace client Enedis":

![Intégration Enedis Gladys consentement](../../../../../static/img/docs/fr/configuration/enedis/enedis-integration-clic.jpg)

Côté Enedis, acceptez le consentement et cliquez sur "Valider".

![Enedis consentement](../../../../../static/img/docs/fr/configuration/enedis/enedis-consentement.jpg)

Vous devriez arriver sur Gladys, qui se synchronisera avec votre compte Enedis.

La première synchronisation peut prendre un certain temps selon la charge sur l'API Enedis, je vous conseille de quitter Gladys et de revenir plus tard 🙂

## Visualiser votre consommation électrique

Dans Gladys, vous retrouvez votre compteur électrique dans "Compteurs" :

![Intégration Enedis Gladys, mes compteurs](../../../../../static/img/docs/fr/configuration/enedis/enedis-compteur.jpg)

Sur le tableau de bord, vous pouvez créer un nouveau graphique, et sélectionnez "Consommation journalière" :

![Intégration Enedis Gladys, consommation journalière](../../../../../static/img/docs/fr/configuration/enedis/graphique-consommation-quotidienne.jpg)

Choisissez "Histogramme", vous devriez voir ce graphique sur votre tableau de bord :

![Intégration Enedis Gladys, graphique](../../../../../static/img/docs/fr/configuration/enedis/enedis-graphique.jpg)

À partir de là, la donnée se comporte comme n'importe quel autre appareil Gladys : vous pouvez créer des automatisations, recevoir une alerte quand votre consommation est anormalement élevée, ou la croiser avec vos autres capteurs. Elle se marie bien avec les fonctionnalités de [suivi de consommation énergétique](/fr/docs/integrations/energy-monitoring/).

## Foire aux questions

### Comment accéder à l'API Enedis en tant que particulier ?

L'API Enedis Data Connect n'est pas ouverte directement aux particuliers : Enedis ne signe de contrat d'API qu'avec des entreprises certifiées. La façon concrète d'accéder à vos propres données Linky via l'API officielle, sans créer d'entreprise, est de passer par un prestataire certifié. Gladys Assistant SAS est certifiée : avec [Gladys Plus](/fr/plus), vous connectez votre compte Enedis une fois et Gladys récupère votre consommation pour vous.

### L'API Enedis est-elle gratuite ?

Pour un particulier, la donnée elle-même est gratuite : vous autorisez simplement l'accès à votre propre consommation, mesurée par votre compteur Linky. Le coût, c'est le service qui la récupère et la stocke. Avec Gladys, l'intégration Enedis est incluse dans [Gladys Plus](/fr/plus).

### Quelles données le compteur Linky expose-t-il ?

Via Data Connect, vous pouvez accéder à votre consommation quotidienne, et selon votre contrat à votre courbe de charge à la demi-heure, votre puissance maximale et les informations de votre contrat. Dans Gladys, la consommation quotidienne est récupérée et stockée pour que vous puissiez la visualiser sur des jours, des semaines et des mois.

### Puis-je stocker mes données Linky en local ?

Oui. Une fois que Gladys a récupéré votre consommation depuis l'API Enedis, la donnée est stockée dans votre propre instance Gladys. Vous gardez tout votre historique même si vous déconnectez plus tard l'intégration, et vous pouvez construire des graphiques, des scènes et des alertes en local par-dessus.

### Je n'arrive pas à faire le consentement Enedis ?

La plateforme Enedis est parfois hors-ligne pour des mises à jour du côté d'Enedis. Souvent, la meilleure chose à faire est de réessayer plus tard.

Si cela ne fonctionne toujours pas, vérifiez que votre compte Enedis est bien fonctionnel : est-ce vous arrivez à voir vos données de consommation électrique dans Enedis ? Si ce n'est pas le cas, le souci se trouve probablement chez Enedis.

### Je n'ai plus de données sur les précédents jours ?

L'API Enedis se met à jour tous les matins en théorie.

Néanmoins, en pratique les données ne sont pas toujours disponibles à la même heure, et certain jours (les jours fériés par exemple), les données ne sont pas disponibles.

Si toutefois, vous observez des trous sur votre tableau de bord qui persiste dans le temps, merci de mettre un message sur [le forum](https://community.gladysassistant.com/).

### La synchronisation ne se fait plus ?

Votre consentement est valide 2 ans, et doit être renouvellé si vous voulez que Gladys continue à récupérer vos données.

Si votre compte ne se synchronise plus, en cas de doutes je vous conseille de refaire un consentement en cliquant sur le bouton bleu "J'accède à mon espace client Enedis".

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Comment accéder à l'API Enedis en tant que particulier ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'API Enedis Data Connect n'est pas ouverte directement aux particuliers : Enedis ne signe de contrat d'API qu'avec des entreprises certifiées. Pour accéder à vos propres données Linky via l'API officielle sans créer d'entreprise, vous passez par un prestataire certifié. Gladys Assistant SAS est certifiée : avec Gladys Plus, vous connectez votre compte Enedis une fois et Gladys récupère votre consommation pour vous.",
        },
      },
      {
        "@type": "Question",
        name: "L'API Enedis est-elle gratuite ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pour un particulier, la donnée elle-même est gratuite : vous autorisez l'accès à votre propre consommation, mesurée par votre compteur Linky. Le coût, c'est le service qui la récupère et la stocke. Avec Gladys, l'intégration Enedis est incluse dans Gladys Plus.",
        },
      },
      {
        "@type": "Question",
        name: "Quelles données le compteur Linky expose-t-il ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Via Data Connect, vous pouvez accéder à votre consommation quotidienne, et selon votre contrat à votre courbe de charge à la demi-heure, votre puissance maximale et les informations de votre contrat. Dans Gladys, la consommation quotidienne est récupérée et stockée pour la visualiser sur des jours, des semaines et des mois.",
        },
      },
      {
        "@type": "Question",
        name: "Puis-je stocker mes données Linky en local ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Une fois que Gladys a récupéré votre consommation depuis l'API Enedis, la donnée est stockée dans votre propre instance Gladys. Vous gardez tout votre historique même si vous déconnectez plus tard l'intégration, et vous pouvez construire des graphiques, des scènes et des alertes en local par-dessus.",
        },
      },
    ],
  }}
/>
