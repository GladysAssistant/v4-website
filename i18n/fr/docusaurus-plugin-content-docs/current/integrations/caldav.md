---
id: caldav
title: CalDAV
sidebar_label: CalDAV
---

Pour synchroniser votre calendrier Gladys avec les serveurs compatibles (Google Agenda, iCloud, Nextcloud...)

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
