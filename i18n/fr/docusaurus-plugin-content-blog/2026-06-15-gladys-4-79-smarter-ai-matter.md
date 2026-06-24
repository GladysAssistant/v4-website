---
title: "Gladys 4.79 : IA plus maline, assistant vocal amélioré et plus d'appareils Matter"
description: "Gladys 4.79 rend l'agent IA plus malin avec les outils Web Request et Compare Times, améliore l'assistant vocal, et supporte plus d'appareils Matter."
authors: pierregilles
image: /img/presentation/gladys-4-79-smarter-ai-matter-fr.jpg
slug: gladys-4-79-smarter-ai-matter
---

Salut à tous,

La version v4.79 de Gladys est sortie 🙂 — avec un agent IA plus malin, un assistant vocal amélioré, et le support de plus d'appareils Matter.

{/* truncate */}

## 🤖 Intelligence artificielle

Cette version apporte plusieurs améliorations à l'agent IA :

- **Création de scènes :** correction du schéma et augmentation du timeout pour corriger un bug de création de scène remonté par @GBoulvin et @Jluc.
- **Meilleure gestion des erreurs :** des retours plus clairs quand l'IA ne répond pas.
- **Appels d'outils via Telegram :** on voit désormais les appels d'outils via Telegram, comme sur le web.

![Les appels d'outils sur Telegram](../../../static/img/articles/gladys-4-79-smarter-ai-matter/01.png)

- **Nouveaux outils :**
  - **Web Request :** l'agent peut interroger des APIs ou des pages web. C'est un besoin personnel que j'ai implémenté, et c'est ultra pratique !
  - **Compare Times :** comparaison d'horaires.

Ces nouveaux outils permettent de faire des choses très puissantes — par exemple aller chercher les horaires d'ouverture d'un commerce et vous dire s'il est actuellement ouvert ! Super pratique dans les scènes via l'action « Demander à l'IA ». Les possibilités sont infinies.

## 🎙️ Assistant vocal

- **Bouton Stop** pour interrompre une réponse en cours.
- **Détection du microphone :** si aucun son n'a été enregistré, Gladys affiche un message d'erreur.

## 🏠 Matter

Support étendu pour de nouveaux types d'appareils : aspirateurs, capteurs NO₂ (indice de dioxyde d'azote) et ventilateurs.

## 📡 Zigbee2mqtt

- Mise à jour vers Zigbee2mqtt 2.12.0
- Support de la télécommande SONOFF SNZB-01M (4 boutons)

## 🔧 Node-RED

Un sélecteur de version permet de passer à une version majeure de Node-RED directement depuis l'interface Gladys.

![Sélecteur de version Node-RED](../../../static/img/articles/gladys-4-79-smarter-ai-matter/02.png)

Pratique pour passer à la v5 qui vient de sortir ! ⚠️ Attention, vérifiez bien que les modules que vous utilisez sont compatibles avec la v5.

## 🎬 Scènes

- Champ de valeur élargi pour les seuils de capteurs
- Bouton Retour pour naviguer plus facilement dans l'éditeur de scènes

## ☁️ Gladys Plus

Lorsqu'un utilisateur distant est supprimé sur Gladys Plus, l'utilisateur local correspondant est automatiquement supprimé sur votre instance.

---

📋 [Changelog complet](https://github.com/GladysAssistant/Gladys/releases/tag/v4.79.0)

Comme toujours, la mise à jour est automatique sous 24 h si vous utilisez Watchtower, ou vous pouvez la faire manuellement dans **Paramètres → Système**. Bonne mise à jour à tous ! 🎉
