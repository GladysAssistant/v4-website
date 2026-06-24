---
title: "Gladys 4.80 : Matter 1.5, Netatmo, Tuya et un agent IA plus puissant 🚀"
description: "Gladys 4.80 apporte le support de Matter 1.5 via une grosse mise à jour de Matter.js, des corrections Netatmo et Tuya, et un agent IA plus puissant avec un nouvel outil capteur."
authors: pierregilles
image: /img/presentation/gladys-4-80-matter-netatmo-tuya-ai-fr.jpg
slug: gladys-4-80-matter-netatmo-tuya-ai
---

Salut à tous !

Beaucoup de nouveautés en ce moment 😀 Cette version 4.80 apporte de nombreuses améliorations de stabilité, des corrections sur Matter, Netatmo et Tuya, ainsi que plusieurs nouveautés autour de l'IA.

{/* truncate */}

## 🤖 IA

L'agent IA continue de s'améliorer avec deux nouveautés :

- ➕ Ajout d'un nouvel outil `sensor.set-state`, permettant à l'agent de modifier directement l'état de certains capteurs lorsque demandé. Par exemple, vous pouvez utiliser l'IA pour lire une image de caméra regardant un compteur, et stocker la valeur lue dans un appareil virtuel. Vous pouvez aussi lire une plaque minéralogique automatiquement, et stocker le numéro lu dans un appareil virtuel !
- 🐞 Ajout d'un bouton permettant de télécharger le contexte de débogage de l'IA au format JSON, afin de faciliter le diagnostic des problèmes et les échanges avec la communauté.

Les bilans hebdomadaires générés par l'IA apparaissent désormais dans les tâches en arrière-plan (**Paramètres → Tâches**), ce qui permet de suivre leur exécution et d'identifier facilement une éventuelle erreur. Un délai aléatoire a également été ajouté avant leur génération afin d'éviter une surcharge simultanée des serveurs.

## 🏠 Matter

Cette version améliore encore la compatibilité Matter :

- 🌡️ Ajout de la remontée de la température locale sur les appareils compatibles.
- 🔄 Processus de connexion plus robuste.
- 📝 Journaux (logs) enrichis pour faciliter le débogage.
- 🌀 Plusieurs corrections sur les ventilateurs Matter.
- 🎛️ Correction d'un bug où l'identifiant unique d'un appareil était modifié lors de sa mise à jour.
- ⚡ Lecture de l'état initial des fonctionnalités des appareils au démarrage.
- ❗ Les erreurs lors de l'enregistrement d'un appareil sont maintenant affichées directement dans l'interface.

Matter.js a également été mis à jour vers la version [0.17.3](https://github.com/matter-js/matter.js/blob/main/CHANGELOG.md#0170-2026-05-20), une avancée majeure apportant notamment :

- La prise en charge de la spécification **Matter 1.5 / 1.5.1**, améliorant la compatibilité avec les appareils les plus récents.
- Une réduction de la consommation de mémoire de **20 à 50 %**, permettant à Gladys de fonctionner de manière encore plus fluide.

## 📡 Intégrations

### Tuya

L'intégration Tuya continue de gagner en maturité : une nouvelle couche de mapping commune pour améliorer la gestion des appareils en mode local et cloud, et un assistant permettant de créer automatiquement un ticket GitHub lorsqu'un appareil est partiellement ou non supporté.

### Netatmo

Deux améliorations importantes : restauration du rafraîchissement automatique des tokens OAuth, et une reconnexion automatique plus résiliente en cas d'erreur d'authentification, y compris lors des appels à l'API métier.

### Zigbee2MQTT

Les appareils Zigbee affichent désormais leur adresse IEEE ainsi qu'un lien direct pour ouvrir l'équipement dans Zigbee2MQTT, ce qui facilite le diagnostic et la configuration. Pensez à ajouter l'URL de votre interface Zigbee2mqtt dans les paramètres pour profiter de cette fonctionnalité 😉

## 🐛 Corrections

- Correction d'un bug sur les scènes utilisant le déclencheur **prochain lever de soleil**.
- Correction d'un problème empêchant la sauvegarde d'un appareil lorsque `energy_parent_id` était invalide.

## ❤️ Merci aux contributeurs

Un grand merci à tous ceux qui ont participé à cette version : @cicoub13, @Terdious et @Will_71. Et merci à toute la communauté Gladys pour vos retours, vos tests et vos contributions qui permettent au projet de continuer à avancer rapidement ! 🚀

Comme toujours, Gladys se met à jour automatiquement dans les 24 h si vous utilisez Watchtower, sinon vous pouvez le faire en un clic dans les paramètres. Voir [la note de version complète](https://github.com/GladysAssistant/Gladys/releases/tag/v4.80.0).
