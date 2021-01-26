---
id: netatmo
title: Netatmo
sidebar_label: Netatmo
---

## Prérequis

### Etape 1 - Appareils compatibles et applications mobiles Netatmo

Pour pouvoir ajouter vos appareils Netatmo dans Gladys, ceux-ci doivent au préalable être ajoutés dans leurs applications respectives que vous devrez télécharger sur le play store ou l'apple store. 
Ci-dessous ne sont référencés que les appareils compatibles avec Gladys :

#### Application "Security" ![Configurer une app 1](/fr/img/docs/configuration/netatmo/configure-netatmo-application-security.jpg)
- Les caméras de surveillance extérieures "NOC"
- Les caméras de surveillance intérieures "NACamera"
- Les sirènes "NIS" associées aux caméras intérieures
- Les capteurs d'ouverture de portes/fenêtres "NACamDoorTag"

#### Application "Netatmo" ![Configurer une app 2](/fr/img/docs/configuration/netatmo/configure-netatmo-application-netatmo.jpg)
- Les stations météo "NAMain"
- Les pluviomètres associés aux stations météo
- Les anémomètres associés aux stations météo
- Les hygromètres extérieurs associés aux stations météo
- Les hygromètres intérieurs associés aux stations météo (jusque 3)

#### Application "Energie" ![Configurer une app 3](/fr/img/docs/configuration/netatmo/configure-netatmo-application-energie.jpg)
- Les vannes "NRV"
- Les thermostats "NATherm1"

#### Application "Home Coach" ![Configurer une app 4](/fr/img/docs/configuration/netatmo/configure-netatmo-application-home-coach.jpg)
- Les healthy homes coach "NHC"

### Etape 2 - Netatmo connect
Vous devez ensuite vous rendre sur la page [Netatmo connect](https://dev.netatmo.com/) et cliquer sur le lien "LOG IN" pour créer un compte avec votre adresse mail et un mot de passe.
#### Création d'une "app"
Rendez vous ensuite sur votre page [My app](https://dev.netatmo.com/apps/) et cliquer sur le bouton "Create" pour créer un lien vers votre compte Gladys. Entrez les informations nécessaires (champs avec une *) comme l'exemple ci-dessous :
![Configurer une api 1](/fr/img/docs/configuration/netatmo/configure-netatmo-connect-1.jpg)

#### Récupération des identifiants clients de connection
En cliquant sur "Save", vous aurez ensuite accès aux informations nécessaires dans le cadre en-dessous (voir [Etape 1 du tutoriel](/fr/docs/integrations/netatmo#etape-1--page-netatmo-connection))
![Configurer une api 2](/fr/img/docs/configuration/netatmo/configure-netatmo-connect-2.jpg)

## Tutoriel

Pour ajouter vos appareils Netatmo dans Gladys, allez dans `Intégrations / Netatmo`.
![Integration Netatmo](/fr/img/docs/configuration/netatmo/integrations-netatmo.jpg)

### Etape 1 : Connexion API Netatmo
Depuis l'onglet `Paramètre`, 
![Integration Netatmo - Vers Paramètre](/fr/img/docs/configuration/netatmo/integrations-netatmo-vers-parametre.jpg)
Entrez les informations récupérées lors de [l'étape précédente](/fr/docs/integrations/netatmo#r%C3%A9cup%C3%A9ration-des-identifiants-clients-de-connection) : 
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

Vous retrouvez tous les appareils que vous aviez précédemment configurés sur [les applications](/fr/docs/integrations/netatmo#application-security). Ils sont référencés par leur nom défini dans leur application respective. Vous pouvez intégrer ceux-ci d'un simple clique sur le bouton "Ajouter". Ils disparaissent alors de la liste. 

En effectuant un rafraichissement de la page (touche F5 ou via le navigateur), les appareils précédemment installés se retrouvent en fin de liste et le bouton "Ajouter" est remplacé par une case "Déjà créé". Cette dernière est désactivée pour le moment et fera partie d'une prochaine mise à jour.

![Integration Netatmo - Paramètre](/fr/img/docs/configuration/netatmo/integrations-netatmo-decouverte-appareils-deja-cree.jpg)

### Etape 3 : Définir une pièce aux appareils / Modification des fonctionnalités

Dans l'onglet `Appareils Netatmo`, vous retrouvez cette fois les appareils ajoutés avec leurs caractéristiques.

![Integration Netatmo - Appareils Netatmo](/fr/img/docs/configuration/netatmo/integrations-netatmo-appareils-netatmo.jpg)

#### 1) Définir une pièce

Pour pouvoir afficher un appareil sur le dashboard, il faut en premier lui associer une pièce. Sélectionner celle-ci dans le menu déroulant suivant :

Et voilà !
