---
title: L'IA OpenAI GPT-3 disponible dans Gladys Assistant
description: La puissance de l'intelligence artificielle disponible dans Gladys.
authors: pierregilles
image: /img/presentation/open-ai-gpt-3-release.jpg
slug: open-ai-gpt-3-in-gladys-assistant
---

:::info[Article de janvier 2023 — l'IA de Gladys a beaucoup changé depuis]
Gladys ne repose plus sur OpenAI. L'assistant IA fonctionne aujourd'hui avec des **modèles open-weight hébergés en France** (Scaleway) via [Gladys Plus](/fr/plus/) : vos requêtes restent en Europe.

Elle ne se contente plus non plus de répondre à des questions : Gladys **pilote réellement votre maison** désormais. Elle allume les lumières, lit les capteurs, affiche vos caméras, et peut lancer ou même créer des scènes pour vous.

👉 Consultez la [documentation IA actuelle](/fr/docs/integrations/openai/) pour découvrir ce que Gladys sait faire aujourd'hui.
:::

Salut à tous !

A part si vous vivez dans une grotte, vous avez probablement entendu parler de ChatGPT/GPT-3, une intelligence artificielle développée par OpenAI.

Sur internet, tout le monde a tenté de discuter avec cette IA, que ce soit pour voir si elle allait nous remplacer au travail, faire mieux que nous a des examens d'universités, ou juste pour voir sa réaction quand on lui pose des questions alambiquées.

De mon côté, je pense que cette IA est un outil formidable, une sorte de moteur de recherche sur-puissant, accessible au language, qui a accès à un dataset impressionnant !

{/* truncate */}

## Quel rapport avec Gladys ?

Dans Gladys, nous avons toujours eu un onglet "Discussion", qui permet d'envoyer des demandes à Gladys: "Allume la lumière du salon", "Montre moi la caméra du jardin", "Quelle est la température dans la salle de bain ?".

Sur le principe, cet onglet fonctionne de la même manière que GPT-3 : nous avons entraîné un réseau de neurone sur un ensemble de données, pour lui "apprendre" à répondre à des commandes utilisateurs.

La différence entre l'implémentation actuelle dans Gladys, et GPT-3, c'est la taille des données d'entrées.

Là où Gladys a été entraînée sur quelques commandes, GPT-3 a été entraîné sur 175 milliards de paramètres, notamment :

- Des petabytes de pages web crawlées pendant 8 ans
- Tout le contenu de Reddit ayant plus de 3 upvotes
- Plein de livres
- Tout Wikipédia

Pour entraîner ce modèle, OpenAI a utilisé un cluster de 10 000 cartes graphiques Nvidia V100. Monstrueux !

Une fois entraîné, ce modèle est tellement gros qu'il faut un serveur avec au moins 175 Go de mémoire vive pour le faire tourner 🤯

Bref, vous l'avez compris, GPT-3 est à un niveau impressionnant difficilement atteignable à notre petite échelle.

## Intégration OpenAI GPT-3 dans Gladys

Ce modèle, OpenAI ne l'a pas créé pour eux, il est disponible via une API ( payante, car les 10 000 Nvidia V100 il faut les payer ^^).

C'est cette API que j'ai intégrée dans Gladys !

J'ai fais des tests pour voir si GPT-3 pouvait avoir un intérêt dans le cadre de la domotique, et franchement c'est bluffant.

J'ai travaillé le "prompt" que j'envoie à GPT-3 pour délimiter le cadre des interactions possibles, et ça marche super bien !

GPT-3 arrive à classifier chaque demande, et peut répondre à plein de questions car je le rappelle GPT-3 a accès à du contenu venant de partout sur internet.

Mais assez parlé...

## Démonstration

Les basiques, demandons à Gladys de contrôler des appareils de la maison :

![Contrôle du logement avec Gladys et GPT-3](../../../static/img/articles/fr/openai-gpt-3-release/command-control.jpg)

Tiens, j'ai une question de domotique, qu'en penses Gladys ?

![Question consommation électrique à Gladys et GPT-3](../../../static/img/articles/fr/openai-gpt-3-release/consommation-electrique.jpg)

Je ne me souviens plus comment on affiche les logs d'un container Docker...

![Logs Docker - Gladys et GPT-3](../../../static/img/articles/fr/openai-gpt-3-release/docker-logs.jpg)

Un peu de culture générale, qui est Jules Verne ?

![Culture générale, Jules Verne - Gladys et GPT-3](../../../static/img/articles/fr/openai-gpt-3-release/jules-verne.jpg)

Science-fiction, késako ?

![Culture générale, science-fiction - Gladys et GPT-3](../../../static/img/articles/fr/openai-gpt-3-release/science-fiction.jpg)

C'est quand même dingue, est-ce qu'on serait pas en avance avec Gladys ?

![10 prochaines années - Gladys et GPT-3](../../../static/img/articles/fr/openai-gpt-3-release/ia-next-10-year.jpg)

Mais c'est pas dangereux tout ça ? J'ai vu i-Robot, et les humains se faisaient enfermer chez eux !

![IA rebelle - Gladys et GPT-3](../../../static/img/articles/fr/openai-gpt-3-release/ia-rebelle.jpg)

Ouf, on est passé pas loin d'une catastrophe là !!

Ah attend, Gladys je dois faire à manger, tu te souviens comment on fait les oeufs durs ?

![Oeufs durs - Gladys et GPT-3](../../../static/img/articles/fr/openai-gpt-3-release/boiled-eggs.jpg)

Bon, les oeufs c'est sympa mais il fait froid là, c'est une fondue qu'on veut !!

![Fondue - Gladys et GPT-3](../../../static/img/articles/fr/openai-gpt-3-release/fromage-fondue.jpg)

Bref, vous l'aurez compris, c'est archi-puissant GPT-3 😁

## Comment tester ?

L'API GPT-3 étant payante, je propose cette intégration à tous les utilisateurs [Gladys Plus](/fr/plus).

Si vous voulez tester, il faut passer à Gladys Plus, et en bonus vous soutiendrez la croissance d'un projet français 🇫🇷

Pas d'excuses !

➡️ ➡️ [En savoir plus sur Gladys Plus](/fr/plus) ⬅️ ⬅️

Vous devez être en Gladys Assistant v4.15 pour profiter de cette intégration, et vous retrouverez l'intégration dans l'onglet "Intégrations" :

![Intégration Open-AI Gladys](../../../static/img/articles/fr/openai-gpt-3-release/open-ai-integration.jpg)

## La suite

Pour l'instant, cette intégration est une alpha, le but est de recueillir vos retours et vous permettre de tester.

Cette intégration n'a pour l'instant aucun impact sur votre système domotique, si vous lui demandez d'allumer la lumière, elle vous répondra mais ne fera pas l'action.

Suivant vos retours, on pourra intégrer GTP-3 entièrement avec Gladys.

Alors, vous en pensez quoi ?

J'attends vos retour sur [le forum](https://community.gladysassistant.com/t/lia-openai-gpt-3-disponible-dans-gladys-assistant/7888) !

## Comment mettre à jour ?

Pour mettre à jour Gladys, nous recommandons d'utiliser Watchtower : il met à jour votre conteneur automatiquement dès qu'une nouvelle version est disponible. Voir la [documentation](/fr/docs/installation/docker#mise-à-jour-automatique-avec-watchtower).
