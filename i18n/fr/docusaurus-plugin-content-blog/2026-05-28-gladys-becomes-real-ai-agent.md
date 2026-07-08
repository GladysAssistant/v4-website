---
title: "Nouvelle architecture IA : Gladys devient un vrai agent IA 🤖"
description: "Gladys devient un vrai agent IA : il réfléchit, enchaîne les appels d'outils et agit pour réaliser des requêtes complexes, avec une interface de chat entièrement repensée."
authors: pierregilles
image: /img/presentation/gladys-becomes-real-ai-agent-fr.jpg
slug: gladys-becomes-real-ai-agent
---

Salut à tous,

Depuis que j'ai intégré l'IA dans Gladys, la promesse était là mais la réalité restait limitée : vous posiez une question, l'IA répondait. Une entrée, une sortie. Pas de réflexion intermédiaire, pas d'autonomie réelle. **Ce que je vous annonce aujourd'hui change ça en profondeur !**

![L'IA de Gladys : avant](../../../static/img/articles/gladys-becomes-real-ai-agent/01.png)

{/* truncate */}

## Gladys peut maintenant « réfléchir » avant de répondre

Vous connaissez peut-être Claude Code, l'agent de développement d'Anthropic qui, face à un problème complexe, décompose, itère, utilise des outils, s'adapte… jusqu'à trouver la solution. C'est exactement ce modèle que j'ai appliqué à Gladys.

![L'IA de Gladys : maintenant](../../../static/img/articles/gladys-becomes-real-ai-agent/02.png)

Désormais, quand vous posez une question à Gladys, elle ne cherche plus juste à formuler une réponse. Elle **agit.** Elle peut enchaîner plusieurs appels d'outils à la suite pour arriver à ses fins :

- Quel est le niveau de CO2 actuel dans le salon ?
- Allume les lumières du salon et coupe le ventilateur
- Montre-moi ma consommation d'énergie sur le dernier mois
- Crée une scène qui, tous les matins à 7h, m'envoie un message avec le niveau de CO2 dans le salon, la cuisine, et l'état de mes portes
- Crée une scène qui, quand il y a un mouvement dans mon garage, envoie à l'IA une photo de ma caméra et regarde si la voiture est bien ma Tesla Model 3 rouge. Si oui, l'IA ne me répond pas ; sinon, elle me prévient qu'une voiture inconnue est là.

Des requêtes qui auraient nécessité plusieurs manipulations manuelles avant, ou qui tout simplement ne fonctionnaient pas ! Ce travail s'appuie en partie sur le serveur MCP développé par [@bertrandda](https://community.gladysassistant.com/), que j'ai intégré dans cette nouvelle architecture. Merci à lui !

## Une interface repensée pour être vraiment utilisable

J'en ai profité pour refondre complètement l'interface de chat. Plus claire, plus fluide, réellement utilisable sur mobile.

![Interface de chat repensée](../../../static/img/articles/gladys-becomes-real-ai-agent/03.jpg)

![Le chat sur mobile](../../../static/img/articles/gladys-becomes-real-ai-agent/04.jpg)

Chaque appel d'outil est affiché de façon lisible dans la conversation, pour que vous compreniez ce que Gladys est en train de faire, et que vous puissiez diagnostiquer facilement si quelque chose ne se passe pas comme prévu.

![Les appels d'outils affichés dans la conversation](../../../static/img/articles/gladys-becomes-real-ai-agent/05.jpg)

### Telegram, Nextcloud Talk : ça marche aussi

Vous utilisez Gladys en mobilité via Telegram ou Nextcloud Talk ? L'agent amélioré est disponible sur ces canaux également. Vous avez donc accès à toute cette puissance depuis votre téléphone, sans ouvrir l'interface web.

![L'agent IA sur Telegram](../../../static/img/articles/gladys-becomes-real-ai-agent/06.jpg)

### Essayez maintenant, c'est gratuit

Tout d'abord, mettez à jour Gladys en v4.76.0. Ensuite, il vous faut Gladys Plus, et je vous offre [1 mois d'essai complet, sans carte bancaire](/fr/plus/). Chaque compte dispose de **3 000 requêtes par mois + 500 requêtes d'analyse d'images.** C'est largement suffisant pour explorer ce que l'agent sait faire, et je suis curieux de lire vos retours sur ce qui marche, ce qui surprend, et ce que vous aimeriez voir ensuite !

Pour le modèle d'IA, j'ai atteint avec cet outil les limites de Mistral Small 3.2, et pour l'instant je suis passé à Gemma 4, toujours chez Scaleway, hébergé en France, avec vos données entièrement privées 🔒

Bien sûr, il peut y avoir des bugs, et je suis preneur de vos retours 🙂
