---
id: netatmo
title: Netatmo
sidebar_label: Netatmo
---

## Prérequis

### Etape 1 - Appareils compatibles et applications mobiles Netatmo

Pour pouvoir ajouter vos appareils Netatmo dans Gladys, ceux-ci doivent au préalable être ajoutés dans leurs applications respectives que vous devrez télécharger sur le play store ou l'apple store.
Ci-dessous ne sont référencés que les appareils compatibles avec Gladys :

#### Application "Energie" [Play Store](https://play.google.com/store/apps/details?id=com.netatmo.thermostat) : 
![Configurer une app 1](../../../../../static/img/docs/fr/configuration/netatmo/netatmo-application-energy.jpg)
- Les thermostats "NATherm1"

### Etape 2 - Netatmo connect

Vous devez ensuite vous rendre sur la page [Netatmo connect](https://dev.netatmo.com/) et cliquer sur le lien "LOG IN" pour créer un compte avec votre adresse mail et un mot de passe.

#### Création d'une "app"

Rendez vous sur votre page [My app](https://dev.netatmo.com/apps/) et cliquer sur le bouton "Create" pour créer un lien vers votre compte Gladys. Entrez les informations nécessaires (champs avec une \*) comme dans l'exemple ci-dessous :
![Configurer une api 1](../../../../../static/img/docs/fr/configuration/netatmo/netatmo-connect-1.jpg)

#### Récupération des identifiants clients de connection

En cliquant sur "Save", vous aurez ensuite accès aux informations nécessaires dans le cadre en-dessous (voir [Etape 1 du tutoriel](/fr/docs/integrations/netatmo#etape-1--connexion-api-netatmo))

![Configurer une api 2](../../../../../static/img/docs/fr/configuration/netatmo/netatmo-connect-2.jpg)

## Tutoriel

Pour ajouter vos appareils Netatmo dans Gladys, allez dans `Intégrations / Netatmo`.

![Integration Netatmo](../../../../../static/img/docs/fr/configuration/netatmo/fr-netatmo-integrations.jpg)

### Etape 1.1 : Identifiants de connexion à l'API Netatmo

Depuis l'onglet `Configuration`, entrez les informations récupérées lors de [l'étape précédente](/fr/docs/integrations/netatmo#etape-2---netatmo-connect) :
- Le client ID,
- Le client secret
![Integration Netatmo - Configuration - Déconnecté](../../../../../static/img/docs/fr/configuration/netatmo/fr-netatmo-integrations-setup-disconnected.jpg)


Enfin cliquez sur le bouton "Sauvegarder la configuration et connexion à Netatmo".
[Vous serez alors redirigé vers le site de Netatmo pour pouvoir accepter la connexion depuis Gladys.](fr/docs/integrations/netatmo/#etape-12--autorisation-de-connexion-de-lapplication-gladys-%C3%A0-votre-compte-netatmo)

### Etape 1.2 : Autorisation de connexion de l'application Gladys à votre compte Netatmo
Il est important de noter qu'en cliquant sur "OUI, J'ACCEPTE", vous autorisez Gladys a accéder en lecture et en écriture pour tous les appareils actuellement supportés ainsi qu'en lecture à tous les appareils qui ne sont pas encore supportés dans le but de faciliter leur intégration future. Aucune donnée ni aucun accès n'est partagé à l'extérieur de votre instance Gladys locale.
![Integration Netatmo - Configuration - Connecté](../../../../../static/img/docs/fr/configuration/netatmo/fr-netatmo-authorize-access.jpg)

Pour toute nouvelle intégration d'appareils non encore pris en charge, vous devrez à nouveau passer par cette étape pour accepter l'écriture (commandes) sur ces nouveaux appareils.

### Etape 1.3 : Validation et connexion de l'application
Après acceptation, vous serez redirigé sur votre précédente page de Gladys, vous devriez maintenant être connecté avec l'API Netatmo. 

![Integration Netatmo - Configuration - Connecté](../../../../../static/img/docs/fr/configuration/netatmo/fr-netatmo-integrations-setup-connected.jpg)

(En cas d'erreur veuillez consulter le chapitre "Erreurs pouvant être rencontrées" - A rédiger)

### Etape 2.1 : Découverte des appareils Netatmo compatibles

Dans l'onglet `Découverte Netatmo`, vous retrouvez tous les appareils compatibles que vous aurez précédemment configurés sur l'application dédiée [de l'étape 1 des prérequis](/fr/docs/integrations/netatmo#etape-1---appareils-compatibles-et-applications-mobiles-netatmo).

![Integration Netatmo - Découverte](../../../../../static/img/docs/fr/configuration/netatmo/fr-netatmo-integrations-discovery-with-devices.jpg)


Les appareils actuellement compatibles sont [(Passer à l'étape suivante)](/fr/docs/integrations/netatmo#etape-22--découverte-des-appareils-netatmo-non-compatibles) :
- **Le concentrateur (NAPlug)**, vous y trouverez le nom de l'appareil configuré dans l'application Netatmo, le modèle, son ID Netatmo, la pièce dans laquelle l'appareil est rattaché dans l'application et les fonctionnalités actuellement supportées.

![Integration Netatmo - Découverte NAPlug](../../../../../static/img/docs/fr/configuration/netatmo/fr-netatmo-integrations-discovery-NAPlug.jpg)

- **Le thermostat (NATherm1)**, vous y trouverez le nom de l'appareil configuré dans l'application Netatmo, le modèle, le pont auquel il est connecté, son ID Netatmo, la pièce dans laquelle l'appareil est rattaché dans l'application et les fonctionnalités actuellement supportées.

![Integration Netatmo - Découverte](../../../../../static/img/docs/fr/configuration/netatmo/fr-netatmo-integrations-discovery-NATherm1.jpg)

Vous pouvez sélectionner la pièce Gladys dans laquelle ils sont installés puis intégrer ceux-ci d'un simple clique sur le bouton "Sauvegarder". Le bouton passent alors en "Déjà créé".

![Integration Netatmo - Découverte - Déjà créé](../../../../../static/img/docs/fr/configuration/netatmo/fr-netatmo-integrations-discovery-already-created.jpg)

Sur cette page vous retrouvé également en haut un bouton "Rafraichir" pour effectuer un rafraichissement des fonctionnalités des appareils en cas de changement de ces derniers dans les applications Netatmo ou en cas de nouvelle prise en charge dans Gladys.

![Integration Netatmo - Découverte - Rafraichir](../../../../../static/img/docs/fr/configuration/netatmo/fr-netatmo-integrations-discovery-refresh.jpg)

### Etape 2.2 : Découverte des appareils Netatmo non compatibles

Vous pourrez également retrouver les appareils en votre possession qui ne sont pas encore compatibles avec Gladys.
![Integration Netatmo - Découverte - Non compatibles](../../../../../static/img/docs/fr/configuration/netatmo/fr-netatmo-integrations-discovery-device-unknown.jpg)

Vous pourrez effectuer une demande de prise en charge pour ces appreils par l'intermédiaire du bouton "Proposer ce périphérique" qui vous amenera sur la page Github pour créer directement une issue de demande d'ajout avec les propriétés du nouvel appareil.
:::warning
N'oubliez pas de remplacer les données 'sensible' comme l'id de l'appareil, de la maison, de la pièce ou du concentrateur.
:::

![Integration Netatmo - Découverte - Issue Github](../../../../../static/img/docs/fr/configuration/netatmo/fr-netatmo-issue-github-device-unknown.jpg)

### Etape 3 : Onglet "Appareils" Définir une pièce aux appareils et modification des fonctionnalités

Dans l'onglet `Appareils`, vous retrouvez les appareils ajoutés avec leurs caractéristiques.

![Integration Netatmo - Appareils Netatmo](../../../../../static/img/docs/fr/configuration/netatmo/netatmo-integrations-appareils-netatmo.jpg)

#### 1) Définir une pièce

Pour pouvoir afficher un appareil sur le dashboard, il faut en premier lieu lui associer une pièce. Sélectionner celle-ci dans le menu déroulant suivant :
![Netatmo Integration - Netatmo devices - Select room](../../../../../static/img/docs/fr/configuration/netatmo/netatmo-integrations-appareils-netatmo-selection-piece.jpg)
Puis cliquer sur le bouton "Sauvegarder".

#### 2) Modifier les fonctionnalités

Vous pouvez modifier le nom d'affichage des fonctionnalités qui apparaitront sur la page d'accueil. De plus certaines fonctionnalités peuvent être affichées de différentes manière. Cliquer sur le bouton "Modifier" d'une fiche d'appareil :

  N'oubliez pas de sauvegarder vos modifications avant de quitter la page !!

## Avancement et prévision d'évolution du service

### Janvier 2023

A ce jour, les appareils suivants :
- Détecteur de fumée "NSD",
- Sonnette "NDB"

Ne peuvent être remontés vers Gladys car l'API ne propose pas de retour d'état. Toutefois, les "webhooks" sont en cours de développement via Gladys Plus. Pour tout ceux qui disposent d'un abonnement, il serait prochainement possible de récupérer les retours d'états de ces appareils.

Les retours d'états de tous les appareils vue à [l'étape 1 des prérequis](/fr/docs/integrations/netatmo#etape-1---appareils-compatibles-et-applications-mobiles-netatmo) sont fonctionnels. Les commandes sont en cours de programmation.

Et voilà ! Vous pouvez maintenant ajouter les appareils et fonctionnalités dont vous souhaitez profiter sur votre page d'accueil ou encore créer vos scènes d'alertes.
