---
id: mqtt
title: MQTT
sidebar_label: MQTT
---

Ce tutoriel a pour objectif de vous expliquer comment fonctionne le MQTT dans Gladys Assistant.

Le MQTT est un protocole "publish/subscribe" ("publier/s'abonner") qui est beaucoup utilisé en domotique car il est très léger et est implémenté sur de nombreuses plateformes de DIY (Arduino, ESP8266 NodeMCU) et dans la plupart des langages de programmations (Javascript/Node.js, Python, PHP, C/C++, Java, et j'en passe).

Concrètement, le MQTT vous permet d'envoyer une valeur d'un périphérique connecté (ex: un capteur de température faisant des relevés de température toutes les 10 minutes) vers Gladys, ou au contraire, d'envoyer depuis Gladys une commande domotique a un actionneur (Ex: envoyer l'ordre à un volant roulant de s'ouvrir).

Gladys implémente donc une API MQTT dans les deux sens:

- "Périphérique -> Gladys"
- "Gladys -> Périphérique"

L'API MQTT est décrite dans [la documentation MQTT](/fr/docs/api/mqtt-api).

## Configurer un broker MQTT dans Gladys Assistant

Le tutoriel qui va suivre implique que vous ayez installé Gladys Assistant 4 avec l'image Rasbian officielle tel que [décrit ici](/fr/docs/), ou que vous ayez Gladys installé via Docker.

Première étape, rendez-vous dans Gladys, rubrique `Intégrations`, et ouvrez l'intégration MQTT:

![Configurer un broker MQTT dans Gladys Assistant](/fr/img/docs/configuration/mqtt/configure-mqtt-broker-1.jpg)

Ensuite, rendez-vous dans l'onglet "Configuration" afin de configurer votre broker MQTT.

![Configurer un broker MQTT dans Gladys Assistant](/fr/img/docs/configuration/mqtt/configure-mqtt-broker-2.jpg)

Il y a 2 possibilités à cette étape:

- Soit vous laissez Gladys lancer toute seule un broker MQTT (via Docker). Cette option est recommandée, c'est la façon la plus simple d'utiliser le MQTT dans Gladys.
- Soit vous configurez vous même un broker MQTT (en local, ou distant). Cette option peut-être utile si vous avez déjà un broker MQTT qui tourne sur un serveur à vous, ou que vous voulez utiliser un broker MQTT en ligne.

Dans ce tutoriel, nous allons prendre l'option n°1.

Vous pouvez donc lancer la création du broker MQTT automatiquement par Gladys.

![Configurer un broker MQTT dans Gladys Assistant](/fr/img/docs/configuration/mqtt/configure-mqtt-broker-3.jpg)

Suivant votre connexion internet, et la puissance de votre machine, cela peut prendre en quelques secondes et quelques minutes.

Vous devriez ensuite voir cet écran:

![Configurer un broker MQTT dans Gladys Assistant](/fr/img/docs/configuration/mqtt/configure-mqtt-broker-4.jpg)

Nous avons donc un broker MQTT qui tourne, et qui est connecté à Gladys !

## Déclarer un périphérique MQTT dans Gladys

Dans ce tutoriel, nous allons prendre l'exemple d'un capteur de température placé dans la cuisine qui renvoie des valeurs de température toutes les 10 minutes à Gladys.

Tout d'abord, rendez-vous dans l'onglet "Appareils" de l'intégration MQTT, puis cliquez sur le bouton "Nouveau +" :

![Déclarer un péripérique MQTT dans Gladys Assistant](/fr/img/docs/configuration/mqtt/create-mqtt-device-1.jpg)

Remplissez le formulaire avec les informations de votre périphérique.

Remplissons le par exemple avec les informations suivantes:

- Nom: "Capteur de température"
- ID externe: `mqtt:cuisine:capteur-temperature`. Pour cet identifiant, celui-ci ne doit pas avoir d'espace et doit commencer par `mqtt:`. Je vous recommande de garder une convention à travers votre installation Gladys, comme par exemple `mqtt:pièce_de_la_maison:nom_du_peripherique`.
- Pièce: "Cuisine".

![Déclarer un péripérique MQTT dans Gladys Assistant](/fr/img/docs/configuration/mqtt/create-mqtt-device-2.jpg)

Ensuite, nous allons ajouter une fonctionnalité à ce périphérique.

En effet, dans Gladys, un périphérique "physique" peut avoir plusieurs "fonctionnalités". Certains constructeurs proposent des périphériques "multi-capteurs" (température/humidité/luminosité est un classique).

Dans la barre de recherche, cherchez "température" et sélectionnez "Capteur température/température".

Vous pouvez ensuite remplir le formulaire avec les informations suivantes:

- Nom: "Température". C'est ce nom qui va s'afficher sur le dashboard.
- ID externe de la fonctionnalité: `mqtt:cuisine:capteur-temperature:temperature`. Je vous conseille ici aussi de garder une convention comme par exemple `mqtt:pièce_de_la_maison:nom_du_peripherique:nom_de_la_fonctionnalite`.
- Unité: "°C"
- Valeur minimum: -50 (Disons que votre capteur de température va jusqu'à -50°C)
- Valeur maximum: 200 (Disons que votre capteur de température monte haut!)
- Est-ce un capteur?: Cette case sert à indiquer si votre périphérique fonctionne dans le sens "Périphérique -> Gladys" ou "Gladys -> Périphérique". Si vous mettez "Oui", alors ce périphérique est en "lecture seule", il ne fait que renvoyer des valeurs à Gladys. C'est le cas de notre capteur de température. Si vous mettez "non", ce périphérique est un actionneur qui peut être controlé par Gladys.
- Topic MQTT: C'est le topic dans lequel Gladys va "écouter" les nouvelles valeurs pour ce périphérique. Je vous conseille de le copier/coller quelque par pour plus tard.

![Déclarer un péripérique MQTT dans Gladys Assistant](/fr/img/docs/configuration/mqtt/create-mqtt-device-3.jpg)

![Déclarer un péripérique MQTT dans Gladys Assistant](/fr/img/docs/configuration/mqtt/create-mqtt-device-4.jpg)
