---
title: "Gladys 4.81 : volets roulants, quota IA et Zigbee2MQTT 🚀"
description: "Gladys 4.81 permet à l'agent IA et à Alexa de piloter vos volets roulants, ajoute l'affichage du quota IA, et apporte les identifiants Zigbee2MQTT ainsi que le support de nouveaux dongles."
authors: pierregilles
image: /img/presentation/gladys-4-81-shutters-ai-quota-zigbee2mqtt-fr.jpg
slug: gladys-4-81-shutters-ai-quota-zigbee2mqtt
---

Salut à tous !

La version 4.81 est là 😀 Cette version permet de piloter vos volets roulants depuis l'agent IA et Alexa, ajoute l'affichage de votre quota IA, apporte plusieurs améliorations Zigbee2MQTT, et tout un lot de corrections.

{/* truncate */}

## 🪟 Volets roulants

Les volets sont à l'honneur dans cette version :

- 🤖 Un nouvel outil `device.set-shutter` permet à l'agent IA de piloter directement vos volets : ouvrir, fermer, arrêter, ou les positionner entre 0 et 100 %. Vous pouvez désormais simplement demander à Gladys de « fermer les volets du salon à moitié ».
- 🗣️ Les volets et les rideaux sont maintenant pilotables via **Alexa**, avec l'ouverture/fermeture et le contrôle de la position.

## 🤖 IA

Un nouvel affichage du quota vous donne une visibilité complète sur votre utilisation de l'IA : vous pouvez désormais voir vos requêtes texte et image restantes, leurs dates de réinitialisation, ainsi que votre statut en temps réel dans **Intégrations → OpenAI**. Fini de deviner ce qu'il vous reste.

## 📡 Zigbee2MQTT

Deux belles améliorations pour les utilisateurs de Zigbee :

- 🔑 L'interface affiche désormais vos identifiants MQTT (hôte, port, nom d'utilisateur et mot de passe), avec un bouton pour afficher ou masquer le mot de passe et une copie en un clic, ce qui facilite grandement la connexion d'outils externes.
- 🔌 Ajout du support de plusieurs types de coordinateurs (dongles) manquants, notamment les modèles Home Assistant, SONOFF, SMLIGHT, Texas Instruments et ZigStar.

## 🎬 Scènes

Les actions **Demander à l'IA**, **Envoyer un message** et **Envoyer une image de caméra** sélectionnent désormais automatiquement le premier utilisateur et la première caméra disponibles, au lieu de laisser les champs vides. Une chose de moins à configurer lors de la création d'une scène.

## 💡 Philips Hue

Correction d'un bug où les ampoules Hue nouvellement appairées nécessitaient un redémarrage de Gladys avant de pouvoir être pilotées. Le pont se resynchronise désormais automatiquement, et les nouvelles ampoules sont immédiatement disponibles.

## 🐛 Corrections

- ✏️ Correction de la gestion des accents et caractères spéciaux dans les messages de scènes, les prompts IA, les notifications vocales et les SMS.
- 🌡️ Les paramètres système affichent désormais la **température du CPU**, avec des seuils en code couleur et un rafraîchissement automatique toutes les 30 secondes.

## ❤️ Merci aux contributeurs

Un grand merci à @Will_71 et @bertrandda pour leurs contributions à cette version. Et merci à toute la communauté Gladys pour vos retours, vos tests et vos idées qui permettent au projet de continuer à avancer ! 🚀

Comme toujours, Gladys se met à jour automatiquement dans les 24 h si vous utilisez Watchtower, sinon vous pouvez le faire en un clic dans les paramètres. Voir [la note de version complète](https://github.com/GladysAssistant/Gladys/releases/tag/v4.81.0).
