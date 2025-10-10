---
id: intro
title: Les intégrations Gladys Assistant
sidebar_label: Introduction
slug: /integrations/
---

Gladys Assistant est un projet **open-source**, développé et maintenu par une **communauté passionnée de domotique**.  
Notre mission : rendre la maison connectée **simple, locale et respectueuse de la vie privée**.

Le code source est entièrement disponible sur [GitHub](https://github.com/GladysAssistant/Gladys).

## 🌐 Les intégrations disponibles

Cette documentation regroupe **toutes les intégrations compatibles avec Gladys Assistant**.  
Elles permettent de connecter vos appareils et services préférés à votre installation domotique.

Les principales intégrations sont :

- [Zigbee2MQTT](/fr/docs/integrations/zigbee2mqtt/)
- [Matter](/fr/docs/integrations/matter/)
- [MQTT](/fr/docs/integrations/mqtt/)

Et la bonne nouvelle ?  
**N’importe qui peut développer une intégration Gladys !**  
👉 Suivez simplement [ce tutoriel](/fr/docs/dev/developing-a-service/) pour créer la vôtre.

## 🚀 Le futur des intégrations dans Gladys Assistant

Notre vision est claire : **Matter est l’avenir de la domotique**.  
Ce protocole open-source, 100 % local, est soutenu par les plus grands acteurs du secteur.  
Il est moderne, sécurisé, et fonctionne sur plusieurs technologies (Wi-Fi, Thread, Ethernet…).

En savoir plus ? Découvrez l’[article de lancement de Matter](/fr/blog/gladys-assistant-4-58-with-matter-support/).

## 🧩 Les appareils "legacy"

La domotique évolue rapidement, et beaucoup d’utilisateurs possèdent encore des appareils non compatibles avec Matter.

Heureusement, un projet open-source incroyable, [Matterbridge](https://github.com/Luligu/matterbridge), permet de **connecter ces appareils “legacy” à votre écosystème Matter**.  
Nous l’utilisons notamment pour gérer des équipements comme :

- Les volets roulants [Somfy](/fr/docs/integrations/somfy-tahoma/)
- Les appareils des anciennes générations de [Shelly](/fr/docs/integrations/shelly/)

Tu veux connecter un appareil spécifique ?

💡 Il suffit parfois d’écrire un petit plugin Matterbridge en quelques lignes de JavaScript pour l’intégrer à Gladys.

Tu peux aussi utiliser [Node-RED](/fr/docs/integrations/node-red/) et MQTT pour intégrer des appareils non-compatibles Gladys.

## 💬 Une question, une idée, une envie d’aider ?

Rejoins la [communauté Gladys](https://community.gladysassistant.com/) !

Que tu souhaites poser une question, contribuer au développement ou proposer une nouvelle intégration, **tu es le bienvenu**.
