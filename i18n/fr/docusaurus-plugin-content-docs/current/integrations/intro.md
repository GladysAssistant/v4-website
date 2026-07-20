---
id: intro
title: Les intégrations Gladys Assistant
sidebar_label: Introduction
slug: /integrations/
description: "Gladys Assistant supporte Zigbee (Zigbee2MQTT), Matter, MQTT, Shelly, Sonos, caméras et des milliers d'appareils. Protocoles ouverts d'abord, plus les intégrations externes pour ajouter n'importe quel appareil ou service en un clic."
---

Gladys Assistant est un projet **open-source**, développé et maintenu par une **communauté passionnée de domotique**.  
Notre mission : rendre la maison connectée **simple, locale et respectueuse de la vie privée**.

Le code source est entièrement disponible sur [GitHub](https://github.com/GladysAssistant/Gladys).

## Notre vision

Connecter des appareils à Gladys ne doit pas dépendre d'un cloud fermé ou d'un seul fabricant. Nous misons d'abord sur les **protocoles ouverts**, sur **Matter et Zigbee** comme standard à long terme, et sur les **intégrations externes** pour tout le reste.

Concrètement, cela se traduit par deux approches complémentaires :

1. **Des intégrations natives** pour les protocoles ouverts (Zigbee, Matter, MQTT), intégrées à Gladys
2. **Des intégrations externes** : des intégrations communautaires empaquetées dans des conteneurs Docker et installables en un clic, pour couvrir n'importe quel autre appareil ou service

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

## Les intégrations externes

Votre appareil ou service n'est pas couvert par une intégration native ? Les **intégrations externes** sont le moyen le plus rapide de l'ajouter, et n'importe qui peut en créer et en publier une.

Une intégration externe est un petit programme empaqueté dans un **conteneur Docker** et publié sur un dépôt GitHub public. Gladys l'exécute dans un bac à sable sécurisé et dialogue avec elle via une API dédiée. Du point de vue de l'utilisateur :

- Parcourez le catalogue des intégrations communautaires directement dans Gladys
- Installez celle dont vous avez besoin en **un clic** : Gladys télécharge l'image, la démarre, et génère son interface
- Ou installez-la directement depuis une URL de dépôt GitHub

Comme chacune tourne dans son propre conteneur isolé, les intégrations externes peuvent être écrites dans n'importe quel langage et publiées par n'importe qui, sans review, tout en restant sûres pour votre instance Gladys.

Vous voulez en créer une ? Les intégrations externes sont conçues pour être la **façon la plus simple de créer et publier une intégration**, sans pull request et sans validation. Consultez le [guide développeur des intégrations externes](/fr/docs/dev/external-integrations/).

## Autres options

Pour des montages personnalisés ou expérimentaux, vous pouvez aussi utiliser :

- [Node-RED](/fr/docs/integrations/node-red/) et MQTT pour construire vos propres automatisations
- Le [forum](https://community.gladysassistant.com/) pour discuter d'un appareil ou d'un besoin d'intégration précis

## Une question, une idée ?

Rejoignez la [communauté Gladys](https://community.gladysassistant.com/) !

Que vous souhaitiez poser une question, tester une nouvelle intégration ou en suggérer une, vous êtes les bienvenus.
