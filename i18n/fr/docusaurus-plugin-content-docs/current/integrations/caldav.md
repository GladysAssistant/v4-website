---
id: caldav
title: "CalDAV dans Gladys : synchroniser iCloud, Google Agenda, Synology et Nextcloud"
description: "Connectez votre agenda à Gladys Assistant en CalDAV. Configuration pas à pas pour iCloud, Google Agenda, Synology et Nextcloud, mot de passe d'application inclus, pour déclencher des scènes selon vos événements."
sidebar_label: CalDAV
keywords:
  - caldav
  - caldav google agenda
  - caldav icloud
  - caldav nextcloud
  - caldav synology
  - mot de passe caldav
---

import JsonLd from '@site/src/components/seo/JsonLd';

CalDAV est un standard ouvert qui permet à des applications de lire et de synchroniser les événements d'un agenda hébergé sur un serveur de calendrier. La plupart des services le prennent en charge, dont iCloud, Google Agenda, le calendrier Synology et Nextcloud : c'est donc un moyen pratique et universel de récupérer votre agenda existant dans une autre application.

Dans Gladys, vous utilisez CalDAV pour synchroniser votre agenda avec ces services externes. Une fois vos événements dans Gladys, vous pouvez vous en servir pour déclencher des [scènes](/fr/docs/scenes/intro/) : allumer le chauffage avant une réunion, envoyer un rappel au début d'un événement, ou changer le mode de la maison quand vous êtes en vacances.

La plupart des services demandent un mot de passe d'application dédié, et non le mot de passe principal de votre compte. Les étapes ci-dessous montrent comment le générer et où le coller pour chaque service.

## Services disponibles (testés & autres)

1. [iCloud](#icloud)
2. [Google Agenda](#google-agenda)
3. [Calendrier Synology](#calendrier-synology)
4. [Nextcloud](#nextcloud)
5. [Autres](#autres)

### iCloud

Connectez vous avec votre compte Apple : [https://appleid.apple.com](https://appleid.apple.com)

Cliquez sur "Générer un mot de passe"

![iCloud](../../../../../static/img/docs/fr/configuration/caldav/apple_1_app_password.png)

Entrez le nom voulu associé à votre mot de passe

![iCloud](../../../../../static/img/docs/fr/configuration/caldav/apple_2_password_modal.png)

Puis notez le mot de passe généré

Dans Gladys rejoignez la page de configuration CalDAV

![iCloud](../../../../../static/img/docs/fr/configuration/caldav/apple_3_integration.png)

1. Choisissez "Calendrier iCloud"
2. Laissez l'URL par défaut
3. Entrez votre Apple ID (normalement l'adresse email associée à votre compte Apple)
4. Collez ici le mot de passe précédement généré

![iCloud](../../../../../static/img/docs/fr/configuration/caldav/apple_4_apple_config.png)

Cliquez sur "Sauvegarder". S'il y a un message de validation, votre calendrier est prêt à être synchronisé. Si une erreur apparait, vérfiez les étapes précédentes et recommencez.

### Google Agenda

Connectez vous avec votre compte Google : [https://myaccount.google.com/](https://myaccount.google.com/)

Rejoignez le panneau sécurité puis cliquez sur "Mot de passe des applications"

![Google Agenda](../../../../../static/img/docs/fr/configuration/caldav/google_1_app_password.png)

1. Sélectionnez "Agenda" comme application
2. Sélectionnez "Autre" comme appareil
3. Une fois le nom entré ("Gladys" par exemple), cliquez sur "Générer" et notez le mot de passe créé

![Google Agenda](../../../../../static/img/docs/fr/configuration/caldav/google_2_generate.png)

Dans Gladys rejoignez la page de configuration CalDAV

![Google Agenda](../../../../../static/img/docs/fr/configuration/caldav/apple_3_integration.png)

1. Choississez "Google Agenda"
2. Laissez l'URL par défaut
3. Entrez l'email de votre compte Google
4. Collez ici le mot de passe précédement généré

![Google Agenda](../../../../../static/img/docs/fr/configuration/caldav/google_4_google_config.png)

Cliquez sur "Sauvegarder". S'il y a un message de validation, votre calendrier est prêt à être synchronisé. Si une erreur apparait, vérfiez les étapes précédentes et recommencez.

### Calendrier Synology

Depuis votre Synology, ouvrez l'application "Calendar"

![Synology](../../../../../static/img/docs/fr/configuration/caldav/synology_1_app_calendar.png)

1. Au niveau du calendrier cliquez sur la petit flèche
2. Puis cliquez sur "Compte CalDAV"

![Synology](../../../../../static/img/docs/fr/configuration/caldav/synology_2_app_calendar.png)

Copiez l'url qui se trouve au niveau de "macOS / iOS"

![Synology](../../../../../static/img/docs/fr/configuration/caldav/synology_3_calendar_url.png)

Dans Gladys rejoignez la page de configuration CalDAV

![Synology](../../../../../static/img/docs/fr/configuration/caldav/apple_3_integration.png)

1. Choisissez "Synlogy Calendar"
2. Collez ici l'url copiée précédement
3. Entrez votre nom d'utilisateur Synology
4. Entrez ici le mot de passe de votre compte

![Synology](../../../../../static/img/docs/fr/configuration/caldav/apple_4_apple_config.png)

Cliquez sur "Sauvegarder". S'il y a un message de validation, votre calendrier est prêt à être synchronisé. Si une erreur apparait, vérfiez les étapes précédentes et recommencez.

### Nextcloud

1. Sur votre instance Nextcloud rejoignez la page de configuration, puis l'onglet sécurité
2. En bas entrez "Gladys" et cliquez sur "Créer un nouveau mot de passe d'application"

Notez le mot de passe créé

![Nextcloud](../../../../../static/img/docs/fr/configuration/caldav/nextcloud_1_app_password.png)

Dans l'application Agenda cliquez sur "Paramètres & Importation"

![Nextcloud](../../../../../static/img/docs/fr/configuration/caldav/nextcloud_2_config.png)

Puis "Copiez l'adresse CalDAV principale"

![Nextcloud](../../../../../static/img/docs/fr/configuration/caldav/nextcloud_3_config_url.png)

Dans Gladys rejoignez la page de configuration CalDAV

![Nextcloud](../../../../../static/img/docs/fr/configuration/caldav/apple_3_integration.png)

1. Choisissez "Autre"
2. Collez ici l'url copiée précédement
3. Entrez votre pseudo Nexcloud
4. Collez ici le mot de passe précédement généré

![Nextcloud](../../../../../static/img/docs/fr/configuration/caldav/apple_4_apple_config.png)

Cliquez sur "Sauvegarder". S'il y a un message de validation, votre calendrier est prêt à être synchronisé. Si une erreur apparait, vérfiez les étapes précédentes et recommencez.

### Autres

Pour tout autre service

1. Entrez l'URL CalDAV de votre service
2. Entrez votre nom d'utilisateur ou votre adresse email
3. Entrez le mot de passe de votre compte

![Autre service](../../../../../static/img/docs/fr/configuration/caldav/other_config.png)

## Foire aux questions

### Qu'est-ce que le CalDAV ?

CalDAV est un standard ouvert, construit au-dessus de WebDAV, qui permet à des applications d'accéder aux données d'un agenda et de les synchroniser depuis un serveur de calendrier. Il est pris en charge par la plupart des fournisseurs d'agenda, ce qui permet à une application comme Gladys de lire vos événements depuis iCloud, Google Agenda, Synology ou Nextcloud sans intégration spécifique à chaque service.

### Faut-il le mot de passe de mon compte ou un mot de passe d'application ?

Pour la plupart des services, il faut un mot de passe d'application dédié, et non le mot de passe principal de votre compte. iCloud, Google et Nextcloud permettent tous de générer un mot de passe spécifique pour Gladys depuis leurs paramètres de sécurité, que vous pouvez révoquer à tout moment sans changer votre mot de passe principal. Les étapes ci-dessus montrent où le générer pour chaque service.

### Comment connecter Google Agenda en CalDAV ?

Connectez-vous à votre compte Google, ouvrez les paramètres de sécurité et créez un mot de passe d'application pour "Agenda". Ensuite, dans Gladys, allez sur la page de configuration CalDAV, choisissez "Google Agenda", laissez l'URL par défaut, entrez votre email Google et collez le mot de passe d'application généré. Gladys synchronisera vos événements.

### Comment connecter mon agenda iCloud ?

Connectez-vous sur appleid.apple.com et générez un mot de passe d'application. Dans Gladys, ouvrez la page de configuration CalDAV, choisissez "Calendrier iCloud", laissez l'URL par défaut, entrez l'email de votre Apple ID et collez le mot de passe. Si cela ne fonctionne pas, vérifiez bien que vous avez généré un mot de passe d'application et non votre mot de passe Apple ID habituel.

### Puis-je utiliser CalDAV avec n'importe quel autre service d'agenda ?

Oui. Si votre service prend en charge CalDAV, choisissez "Autre" dans Gladys, puis entrez son URL CalDAV, votre nom d'utilisateur ou email et votre mot de passe. Cela couvre les serveurs auto-hébergés comme Baïkal ou Radicale, et la plupart des fournisseurs qui exposent un point d'accès CalDAV.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Qu'est-ce que le CalDAV ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "CalDAV est un standard ouvert, construit au-dessus de WebDAV, qui permet à des applications d'accéder aux données d'un agenda et de les synchroniser depuis un serveur de calendrier. Il est pris en charge par la plupart des fournisseurs d'agenda, ce qui permet à une application comme Gladys de lire vos événements depuis iCloud, Google Agenda, Synology ou Nextcloud sans intégration spécifique à chaque service.",
        },
      },
      {
        "@type": "Question",
        name: "Faut-il le mot de passe de mon compte ou un mot de passe d'application pour CalDAV ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pour la plupart des services, il faut un mot de passe d'application dédié, et non le mot de passe principal de votre compte. iCloud, Google et Nextcloud permettent tous de générer un mot de passe spécifique pour Gladys depuis leurs paramètres de sécurité, que vous pouvez révoquer à tout moment sans changer votre mot de passe principal.",
        },
      },
      {
        "@type": "Question",
        name: "Comment connecter Google Agenda en CalDAV ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Connectez-vous à votre compte Google, ouvrez les paramètres de sécurité et créez un mot de passe d'application pour Agenda. Ensuite, dans Gladys, allez sur la page de configuration CalDAV, choisissez Google Agenda, laissez l'URL par défaut, entrez votre email Google et collez le mot de passe d'application généré. Gladys synchronisera vos événements.",
        },
      },
      {
        "@type": "Question",
        name: "Comment connecter mon agenda iCloud en CalDAV ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Connectez-vous sur appleid.apple.com et générez un mot de passe d'application. Dans Gladys, ouvrez la page de configuration CalDAV, choisissez Calendrier iCloud, laissez l'URL par défaut, entrez l'email de votre Apple ID et collez le mot de passe. Si cela ne fonctionne pas, vérifiez que vous avez généré un mot de passe d'application et non votre mot de passe Apple ID habituel.",
        },
      },
      {
        "@type": "Question",
        name: "Puis-je utiliser CalDAV avec n'importe quel autre service d'agenda ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Si votre service prend en charge CalDAV, choisissez Autre dans Gladys, puis entrez son URL CalDAV, votre nom d'utilisateur ou email et votre mot de passe. Cela couvre les serveurs auto-hébergés comme Baikal ou Radicale, et la plupart des fournisseurs qui exposent un point d'accès CalDAV.",
        },
      },
    ],
  }}
/>
