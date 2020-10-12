---
id: tasmota
title: Tasmota
sidebar_label: Tasmota
---

Tasmota est un firmware OpenSource pour des appareils basé sur des ESP8266.

Pour connecter vos appareils :
- installez Tasmota sur votre appareil
- configurez votre appareil
- allez dans `Intégrations / Tasmota` dans Gladys

## Installation du firmware Tasmota

Merci de suivre les instructions sur <a href="https://tasmota.github.io/docs/Getting-Started/" target="_blank">le guide d'installation de Tasmota</a>.

Il existe des multiples guides d'installation du firmware sur Internet, l'installation est spécifique à chaque appareil.

## Configuration du périphérique

Une fois que le firmware Tasmota est correctement installé, rendez-vous sur la page web du périphérique et configurez le protocole MQTT comme indiqué sur <a href="https://tasmota.github.io/docs/MQTT/" target="_blank">la page de configuration de MQTT pour Tasmota</a>.

Remplissez les informations selon votre agent (broker) MQTT, et saisissez l'identifiant unique du périphérique dans le champ <i>Topic</i>.

Cliquez sur le menu `Configuration`.

![Tasmota menu](/fr/img/docs/configuration/tasmota/tasmota-home.png)

Cliquez sur le menu `Configuration MQTT`.

![Tasmota configuration](/fr/img/docs/configuration/tasmota/tasmota-configuration.png)

Puis remplissez le formulaire avec vos informations :
- `Host` : l'adresse du broker MQTT
- `Port` : le port du broker
- `User` : l'identifiant pour se connecter au broker
- `Password` : le mot de passe pour se connecter au broker

![Tasmota MQTT](/fr/img/docs/configuration/tasmota/tamosta-mqtt.png)

## Ajouter un appareil dans Gladys

Une fois l'appareil configuré, il ne reste qu'à :
1. aller sur la page `Intégration -> Tasmota`
2. sélectionner le menu `Découverte MQTT`
3. cliquer sur le bouton `Scanner` en haut à droite (si le périphérique n'est pas déjà dans la liste)
4. enfin, cliquer sur `Sauvegarder`
5. et voilà !
