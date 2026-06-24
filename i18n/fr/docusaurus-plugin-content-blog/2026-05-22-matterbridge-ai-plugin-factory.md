---
title: "L'usine à plugins Matterbridge : rendez n'importe quel appareil compatible avec Gladys"
description: "Ouvrez un ticket GitHub décrivant votre appareil, et une usine pilotée par IA développe un plugin Matterbridge dans la nuit pour le rendre compatible avec Gladys."
authors: pierregilles
image: /img/presentation/matterbridge-ai-plugin-factory-fr.jpg
slug: matterbridge-ai-plugin-factory
---

Salut à tous,

Vous avez des appareils qui ne sont pas compatibles avec Gladys, et qui n'utilisent pas un protocole ouvert comme Zigbee ou Matter ? Pas de panique. J'ai créé une **usine à plugins Matterbridge** pilotée par une IA, qui développe automatiquement des plugins pour vos appareils. Aucune compétence en développement requise.

{/* truncate */}

> **Prérequis :** Matterbridge doit être installé et configuré. Si ce n'est pas encore le cas, suivez d'abord [ce tutoriel dans la documentation](/fr/docs/integrations/matterbridge/).

## Comment ça fonctionne ?

Vous ouvrez un ticket GitHub pour décrire votre appareil, l'IA développe le plugin dans la nuit, et vous n'avez plus qu'à le tester. Si quelque chose ne va pas, vous laissez un commentaire et l'IA itère.

## Étape 1 : créer un ticket GitHub

Rendez-vous sur le dépôt de l'usine : 👉 [matterbridge-ai-plugin-factory/issues](https://github.com/GladysAssistant/matterbridge-ai-plugin-factory/issues)

Cliquez sur **« New Issue »** :

![Créer un nouveau ticket](../../../static/img/articles/matterbridge-ai-plugin-factory/01.png)

Puis sélectionnez le template **« Plugin Request »** :

![Sélectionner le template Plugin Request](../../../static/img/articles/matterbridge-ai-plugin-factory/02.png)

Remplissez le formulaire :

- **Titre :** le nom du plugin que vous souhaitez
- **Liens :** si vous connaissez des plugins similaires sur d'autres projets (Home Assistant, Homebridge…), ajoutez les liens. Plus vous donnez de contexte, plus le résultat sera pertinent dès le premier essai.
- **Fonctionnalités :** décrivez ce que vous voulez contrôler. Exemples : température, on/off, humidité, luminosité…
- **Contexte additionnel :** champ optionnel, mais utile si votre appareil a des particularités.

![Remplir le formulaire de demande de plugin](../../../static/img/articles/matterbridge-ai-plugin-factory/03.png)

![Détails de la demande de plugin](../../../static/img/articles/matterbridge-ai-plugin-factory/04.png)

> **Astuce :** si vous ne savez pas quoi mettre dans les liens, précisez-le en description et demandez à l'IA de chercher elle-même. Mais plus vous êtes précis, meilleur sera le résultat.

## Étape 2 : installer et tester le plugin

L'usine tourne **chaque matin** et traite **un plugin par passage**. Une fois le vôtre développé, l'IA vous répond directement sur le ticket avec un lien de téléchargement :

![L'IA répond avec un lien de téléchargement](../../../static/img/articles/matterbridge-ai-plugin-factory/05.png)

Téléchargez le fichier, puis dans Matterbridge cliquez sur **« Upload + »** :

![Uploader le plugin dans Matterbridge](../../../static/img/articles/matterbridge-ai-plugin-factory/06.jpg)

Saisissez ensuite le nom du plugin dans le champ **« Plugin Name »** et cliquez sur **« Add + »** :

![Ajouter le plugin](../../../static/img/articles/matterbridge-ai-plugin-factory/07.jpg)

Le plugin est installé, vous pouvez le tester !

## Étape 3 : donner des retours

Si le plugin ne fonctionne pas comme attendu, laissez un commentaire sur le ticket GitHub. L'IA lira votre retour et corrigera le plugin au prochain passage :

![Laisser un retour sur le ticket](../../../static/img/articles/matterbridge-ai-plugin-factory/08.png)

---

N'hésitez pas à ouvrir des tickets, c'est fait pour ça ! Et si vous avez des questions sur le fonctionnement de l'usine, posez-les ici.
