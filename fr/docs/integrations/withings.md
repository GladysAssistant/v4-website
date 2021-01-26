---
id: withings
title: Withings
sidebar_label: Withings
---

Cette intégration vous permet de récupérer les données des appareils Withings dans Gladys Assistant.

## Pré requis

Pour intégrer les données de vos appareils Withings vous devez au préalable les avoir configuréssur votre compte withings (https://account.withings.com/connectionwou/account_login).


Si vos appareils supporte le multi utilisateurs il est nécéssaire de configurer un compte Withings par utilisateur, détails disponible ici: https://support.withings.com/hc/fr/articles/218554788-Body-Param%C3%A9trer-la-balance-pour-plusieurs-utilisateurs.

## Configuration compte partner Withings

Création d'un compte 'partner' pour permettre l'échange de données vers Gladys: https://account.withings.com/partner/account_login
Après vous être authentifié avec votre compte utilisateur remplissez le formulaire comme ceci:

![Créez un compte Withings partner](/fr/img/docs/configuration/withings/withings-partner-config.png)

ATTENTION: vous devrez adapter l'url de callback avec l'url que vous utilisez pour accéder à Gladys, une url HTTP ne peut être utilisé que en 'environnement' Dev, une url https est nécésaire pour utiliser l'environnement Prod.

Puis cliquez sur "Valider".

Les clé client_id et secret_id seront à copier dans l'intégration Withings dans Gladys.

## Intégration Withings dans Gladys

Dans Gladys rejoignez la page de configuration Withings:
![Configuration intégration Withings dans Gladys](/fr/img/docs/configuration/withings/withings-settings-config-0.png)

Allez dans le menu 'Configuration' et renseigner les champs:
1. client_id du compte Withings partner
2. client_secret du compte Withings partner
![Configuration intégration Withings dans Gladys](/fr/img/docs/configuration/withings/withings-settings-config-1.png)

Puis cliquez sur "Connecter maintenant".

Vous êtes redirigé vers le site d'authorisation de withigs:
![Configuration intégration Withings dans Gladys](/fr/img/docs/configuration/withings/withings-settings-config-2.png)

Cliquer sur"Authoriser".

Vous êtes de retour sur l'interface Gladys, si tout c'est bien passé vous verrez la page suivante:
![Configuration intégration Withings dans Gladys](/fr/img/docs/configuration/withings/withings-settings-config-3.png)

Vous pouvez cliquer sur le lien "Appareils" du menu gauche pour visualiser les appareils syncrhonisés:
![Configuration intégration Withings dans Gladys](/fr/img/docs/configuration/withings/withings-settings-config-4.png)

Vous pouvez désormais aller sur la page de "Tableau de bord" de Gladys, cliquer sur "Editer" pour ajouter la box de type "Santé" à votre tableau de bord:
1. Sélectionner la liste des appareils/mesures que vous souhaitez voir apparaitre sur cette box
![Configuration intégration Withings dans Gladys](/fr/img/docs/configuration/withings/withings-dashboard-config.png)

De retour sur le "Tableau de bord" de Gladys, la box santé sera affichée:
![Configuration intégration Withings dans Gladys](/fr/img/docs/configuration/withings/withings-dashboard-box.png)

Voilà !

