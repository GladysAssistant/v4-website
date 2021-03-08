---
id: intro
title: Les scènes dans Gladys Assistant
sidebar_label: Introduction
---

Dans Gladys Assistant, il est possible de créer des **scènes** : un ensemble d'**actions** exécutées à la suite ou en parallèle.

Les scènes sont entièrement personnalisées : c'est l'utilisateur qui compose dans l'éditeur de scène de Gladys cette suite d'action.

Ces scènes peuvent être déclenchées manuellement, ou automatiquement via un **déclencheur**.

Quelques exemples :

- Une scène "éteindre toute la maison", qui couperait toutes les lumières de la maison. Cette scène est utile en déclenchement manuel si l'on veut pouvoir tout couper à la maison à distance.
- Une scène "Alerte intrusion", qui envoie un message Telegram à l'utilisateur. Cette scène serait configurée pour s'exécuter après un déclencheur "Si un mouvement est détecté".

## Créer une scène

Pour créer une scène, vous pouvez vous rendre dans l'onglet "Scènes" de votre interface Gladys, et cliquer sur le bouton "Nouveau +".

![Créer une scène](../../static/img/docs/scenes/intro/scenes-intro-1.jpg)

Ensuite, vous pouvez choisir un nom pour votre scène, ainsi qu'une icône. Cette icône n'est utile que dans l'interface de Gladys.

![Créer une scène](../../static/img/docs/scenes/intro/scenes-intro-2.jpg)

Vous voilà maintenant dans l'éditeur de scène. Analysons ensemble chaque partie de l'éditeur :

![Créer une scène](../../static/img/docs/scenes/intro/scenes-intro-3.jpg)

1. Les déclencheurs : si vous ajoutez des déclencheurs à votre scène (ce qui est optionnel), ils apparaitront ici. Une même scène peut être déclenchée par plusieurs déclencheurs différents. Ces déclencheurs sont tous indépendants. Ajouter plusieurs déclencheurs veut tout simplement dire : "Quand cet évènement se produit OU Quand cet évènement se produit OU..."
2. Un bloc d'actions : une scène est découpée en un ou plusieurs blocs d'actions. Lorsque vous ajoutez des actions à ce bloc d'actions, toutes les actions dans le bloc s'exécuteront en parallèle. Si vous ajoutez des actions au bloc d'action suivant (non visible sur cette capture d'écran), la scène attendra que le bloc d'action n°1 soit fini avant de passer au suivant. Ainsi, vous pouvez paralléliser les différentes actions, et pas seulement faire du séquentiel, puissant non ?
3. Exécuter : Ce bouton vous permet de tester l'exécution de la scène. Ce bouton ne prend pas en compte les déclencheurs, il exécute uniquement les blocs d'actions.
4. Enregistrer : Ce bouton enregistre la scène.
5. Supprimer : Ce bouton supprime la scène.
6. Ajouter déclencheur : Ce bouton vous permet d'ajouter un déclencheur à la scène. Vous pouvez ajouter autant de déclencheurs que vous voulez.
7. Ajouter action : Ce bouton ajoute une action au bloc d'action.
8. Cliquer sur le titre de la scène pour l'éditer.
