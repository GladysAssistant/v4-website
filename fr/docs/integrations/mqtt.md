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

Première étape, rendez-vous dans Gladys, rubrique `Intégrations`:

![Configurer un broker MQTT dans Gladys Assistant](/fr/img/docs/configuration/openweather/create-account-step-1.jpg)
