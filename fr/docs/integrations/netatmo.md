---
id: netatmo
title: Netatmo
sidebar_label: Netatmo
---

## Prérequis

### Etape 1 - Appareils compatibles et applications mobiles Netatmo

Pour pouvoir ajouter vos appareils Netatmo dans Gladys, ceux-ci doivent au préalable être ajoutés dans leurs applications respectives que vous devrez télécharger sur le play store ou l'apple store.
Ci-dessous ne sont référencés que les appareils compatibles avec Gladys :

#### Application "Security" :
![Configurer une app 1](/fr/img/docs/configuration/netatmo/configure-netatmo-application-security.jpg)
- Les caméras de surveillance extérieures "NOC"
- Les caméras de surveillance intérieures "NACamera"
- Les sirènes "NIS" associées aux caméras intérieures
- Les capteurs d'ouverture de portes/fenêtres "NACamDoorTag"

#### Application "Netatmo" :
![Configurer une app 2](/fr/img/docs/configuration/netatmo/configure-netatmo-application-netatmo.jpg)
- Les stations météo "NAMain"
- Les pluviomètres associés aux stations météo
- Les anémomètres associés aux stations météo
- Les hygromètres extérieurs associés aux stations météo
- Les hygromètres intérieurs associés aux stations météo (jusque 3)

#### Application "Energie" :
![Configurer une app 3](/fr/img/docs/configuration/netatmo/configure-netatmo-application-energie.jpg)
- Les vannes "NRV"
- Les thermostats "NATherm1"

#### Application "Home Coach" :
![Configurer une app 4](/fr/img/docs/configuration/netatmo/configure-netatmo-application-home-coach.jpg)
- Les healthy homes coach "NHC"

### Etape 2 - Netatmo connect

Vous devez ensuite vous rendre sur la page [Netatmo connect](https://dev.netatmo.com/) et cliquer sur le lien "LOG IN" pour créer un compte avec votre adresse mail et un mot de passe.

#### Création d'une "app"

Rendez vous ensuite sur votre page [My app](https://dev.netatmo.com/apps/) et cliquer sur le bouton "Create" pour créer un lien vers votre compte Gladys. Entrez les informations nécessaires (champs avec une \*) comme l'exemple ci-dessous :
![Configurer une api 1](/fr/img/docs/configuration/netatmo/configure-netatmo-connect-1.jpg)

#### Récupération des identifiants clients de connection

En cliquant sur "Save", vous aurez ensuite accès aux informations nécessaires dans le cadre en-dessous (voir [Etape 1 du tutoriel](/fr/docs/integrations/netatmo#etape-1--connexion-api-netatmo))
![Configurer une api 2](/fr/img/docs/configuration/netatmo/configure-netatmo-connect-2.jpg)

## Tutoriel

Pour ajouter vos appareils Netatmo dans Gladys, allez dans `Intégrations / Netatmo`.
![Integration Netatmo](/fr/img/docs/configuration/netatmo/integrations-netatmo.jpg)

### Etape 1 : Connexion API Netatmo

Depuis l'onglet `Paramètre`,
![Integration Netatmo - Vers Paramètre](/fr/img/docs/configuration/netatmo/integrations-netatmo-vers-parametre.jpg)
Entrez les informations récupérées lors de [l'étape précédente](/fr/docs/integrations/netatmo#etape-2---netatmo-connect) :

- Entrez votre adresse mail de connection à votre compte "Netatmo connect"
- Le mot de passe de ce même compte
- Le client ID,
- Le client secret,

Enfin cliquez sur "Sauvegarder".
Après quelques secondes, vous devriez maintenant être connecté avec l'API Netatmo.
![Integration Netatmo - Paramètre](/fr/img/docs/configuration/netatmo/integrations-netatmo-parametre.jpg)

### Etape 2 : Découverte des appareils Netatmo

Dans l'onglet `Découverte appareils Netatmo`,
![Integration Netatmo - Découverte](/fr/img/docs/configuration/netatmo/integrations-netatmo-decouverte-appareils.jpg)

Vous retrouvez tous les appareils que vous aviez précédemment configurés sur les différentes applications [de l'étape 1 des prérequis](/fr/docs/integrations/netatmo#etape-1---appareils-compatibles-et-applications-mobiles-netatmo). Ils sont référencés par leur nom défini dans leur application respective. Vous pouvez intégrer ceux-ci d'un simple clique sur le bouton "Ajouter". Le bouton passent alors en "Déjà créé".

![Integration Netatmo - Découverte - Déjà créé](/fr/img/docs/configuration/netatmo/integrations-netatmo-decouverte-appareils-deja-cree.jpg)

Sur cette page vous retrouvé également un bouton "Mettre à jour" pour effectuer un rafraichissement des noms des appareils en cas de changement de ces derniers dans les applications Netatmo.

![Integration Netatmo - Découverte - Mettre à jour](/fr/img/docs/configuration/netatmo/integrations-netatmo-decouverte-appareils-mettre-a-jour.jpg)


### Etape 3 : Définir une pièce aux appareils et modification des fonctionnalités

Dans l'onglet `Appareils Netatmo`, vous retrouvez cette fois les appareils ajoutés avec leurs caractéristiques.

![Integration Netatmo - Appareils Netatmo](/fr/img/docs/configuration/netatmo/integrations-netatmo-appareils-netatmo.jpg)

#### 1) Définir une pièce

Pour pouvoir afficher un appareil sur le dashboard, il faut en premier lieu lui associer une pièce. Sélectionner celle-ci dans le menu déroulant suivant :
![Netatmo Integration - Netatmo devices - Select room](/fr/img/docs/configuration/netatmo/integrations-netatmo-appareils-netatmo-selection-piece.jpg)
Puis cliquer sur le bouton "Sauvegarder".

#### 2) Modifier les fonctionnalités

Vous pouvez modifier le nom d'affichage des fonctionnalités qui apparaitront sur la page d'accueil. De plus certaines fonctionnalités peuvent être affichées de différentes manière. Cliquer sur le bouton "Modifier" d'une fiche d'appareil :

- L'indice de santé du Home Coach :

![Integration Netatmo - Home Coach Index](/fr/img/docs/configuration/netatmo/integrations-netatmo-appareils-netatmo-modifier-home-coach.jpg)

  - Affichage en chiffre de 0 à 4 :

  ![Integration Netatmo - Home Coach Index-Number](/fr/img/docs/configuration/netatmo/integrations-netatmo-dashboard-home-coach-index-number.jpg)

  - Ou affichage en état :

  ![Integration Netatmo - Homes Coach Index-State](/fr/img/docs/configuration/netatmo/integrations-netatmo-dashboard-home-coach-index-string.jpg)

- L'angle du vent de l'anémomètre de la station météo :

![Integration Netatmo - Anemometer Angle](/fr/img/docs/configuration/netatmo/integrations-netatmo-appareils-netatmo-modifier-anemometre.jpg)

  - Affichage en degré :

  ![Integration Netatmo - Anemometer Angle-Degrees](/fr/img/docs/configuration/netatmo/integrations-netatmo-dashboard-anemometre-angle-degrees.jpg)

  - Ou affichage en point cardinal :

  ![Integration Netatmo - Anemometer Angle-Cardinal Point](/fr/img/docs/configuration/netatmo/integrations-netatmo-dashboard-anemometre-angle-point-cardinal.jpg)

  N'oubliez pas de sauvegarder vos modifications avant de quitter la page !!

## Avancement et prévision d'évolution du service

### Février 2021

A ce jour, les appareils suivants :
- Détecteur de fumée "NSD",
- Sonnette "NDB"

Ne peuvent être remontés vers Gladys pour le moment car l'API ne propose pas de retour d'état. Toutefois, les "webhooks" sont en cours de développement via Gladys Plus. Pour tout ceux qui disposent d'un abonnement, il serait prochainement possible de récupérer les retours d'états de ces appareils.

Les retours d'états de tous les appareils vue à [l'étape 1 des prérequis](/fr/docs/integrations/netatmo#etape-1---appareils-compatibles-et-applications-mobiles-netatmo) sont fonctionnels. Les commandes sont en cours de programmation.

Et voilà ! Vous pouvez maintenant ajouter les appareils et fonctionnalités dont vous souhaitez profiter sur votre page d'accueil ou encore créer vos scènes d'alertes.
