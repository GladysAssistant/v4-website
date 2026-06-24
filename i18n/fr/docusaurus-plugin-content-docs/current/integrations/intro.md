---
id: intro
title: Les intégrations Gladys Assistant
sidebar_label: Introduction
slug: /integrations/
description: "Gladys Assistant supporte Zigbee (Zigbee2MQTT), Matter, MQTT, Shelly, Sonos, caméras et des milliers d'appareils. Protocoles ouverts d'abord, avec Matterbridge et une usine à plugins IA pour le matériel legacy."
---

Gladys Assistant est un projet **open-source**, développé et maintenu par une **communauté passionnée de domotique**.  
Notre mission : rendre la maison connectée **simple, locale et respectueuse de la vie privée**.

Le code source est entièrement disponible sur [GitHub](https://github.com/GladysAssistant/Gladys).

## Notre vision

Connecter des appareils à Gladys ne doit pas dépendre d'un cloud fermé ou d'un seul fabricant. Nous misons d'abord sur les **protocoles ouverts**, sur **Matter** comme standard à long terme, et sur des **solutions concrètes** pour tout le reste.

Concrètement, cela se traduit par trois approches complémentaires :

1. **Des intégrations natives** pour les protocoles ouverts (Zigbee, Matter, MQTT…)
2. **Matterbridge** pour intégrer les appareils legacy ou propriétaires dans votre écosystème Matter
3. **Une usine à plugins pilotée par IA** pour développer automatiquement de nouveaux plugins Matterbridge quand votre appareil n'est pas encore supporté

## Les protocoles ouverts en priorité

Ce sont les intégrations que nous recommandons pour toute nouvelle installation :

- [Zigbee2MQTT](/fr/docs/integrations/zigbee2mqtt/) : des milliers d'appareils Zigbee, en local, sans cloud
- [Matter](/fr/docs/integrations/matter/) : le standard industriel, 100 % local, porté par les plus grands acteurs
- [MQTT](/fr/docs/integrations/mqtt/) : la colle universelle pour le DIY et les capteurs sur mesure

Parcourez cette documentation pour les guides dédiés : [Shelly](/fr/docs/integrations/shelly/), [Sonos](/fr/docs/integrations/sonos/), [caméras](/fr/docs/integrations/camera/), et bien d'autres dans le menu latéral.

## Matter : l'avenir de la domotique

**Matter est l'avenir de la domotique.**  
Ce protocole open-source et local est soutenu par les plus grands acteurs du secteur. Il est moderne, sécurisé, et fonctionne en Wi-Fi, Thread et Ethernet.

En savoir plus ? Consultez la [documentation Matter](/fr/docs/integrations/matter/).

## Les appareils legacy avec Matterbridge

La domotique évolue vite. Beaucoup d'utilisateurs possèdent encore des appareils non compatibles Matter.

[Matterbridge](https://github.com/Luligu/matterbridge) est un pont open-source qui expose des appareils non-Matter vers Gladys via Matter. Nous l'utilisons notamment pour :

- Les volets roulants [Somfy](/fr/docs/integrations/somfy-tahoma/)
- Les appareils des anciennes générations [Shelly](/fr/docs/integrations/shelly/)

Consultez la [documentation Matterbridge](/fr/docs/integrations/matterbridge/) pour l'activer dans Gladys.

## L'usine à plugins Matterbridge

Votre appareil n'est pas encore supporté, et il n'utilise pas un protocole ouvert comme Zigbee ou Matter ?

Nous avons créé une **[usine à plugins Matterbridge pilotée par IA](https://community.gladysassistant.com/t/lusine-a-plugins-matterbridge-rendez-nimporte-quel-appareil-compatible-avec-gladys/10234)**. Aucune compétence en développement requise :

1. **Ouvrez un ticket GitHub** sur le [dépôt de l'usine](https://github.com/GladysAssistant/matterbridge-ai-plugin-factory/issues) et décrivez votre appareil
2. **L'IA développe le plugin** dans la nuit
3. **Téléchargez et installez-le** dans Matterbridge, puis testez-le dans Gladys
4. **Laissez un retour** sur le ticket si quelque chose ne va pas : l'IA itère au passage suivant

:::note
Matterbridge doit être installé et configuré au préalable. Suivez la [documentation Matterbridge](/fr/docs/integrations/matterbridge/) si ce n'est pas encore fait.
:::

L'usine produit déjà des plugins pour les grands écosystèmes (Philips Hue, Tasmota, ESPHome, Netatmo, Tado, SwitchBot, et bien d'autres). Le pipeline tourne chaque matin : plus nous recevons de demandes, plus vite Gladys couvre de nouveaux appareils.

## Autres options

Pour des montages personnalisés ou expérimentaux, vous pouvez aussi utiliser :

- [Node-RED](/fr/docs/integrations/node-red/) et MQTT pour construire vos propres automatisations
- Le [forum](https://community.gladysassistant.com/) pour discuter d'un appareil ou d'un besoin d'intégration précis

## Une question, une idée ?

Rejoignez la [communauté Gladys](https://community.gladysassistant.com/) !

Que vous souhaitiez poser une question, tester un nouveau plugin ou suggérer une intégration, vous êtes les bienvenus.
