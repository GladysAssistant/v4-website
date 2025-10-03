---
id: wait-action
title: Attendre
sidebar_label: Attendre
---

Cette action vous permet d'attendre une durée fixe ou calculée.

## Variable simple fixe

Vous pouvez spécifier une durée d'attente fixe qui ne variera pas :

![Attendre](../../../../../static/img/docs/fr/scenes/wait-action/wait.png)

## Variable calculée

Vous pouvez définir une durée d'attente dynamique qui varie selon des variables ou des calculs mathématiques.

Par exemple, si vous avez récupéré la valeur d'un capteur plus tôt dans votre scène (avec l'action "Récupérer le dernier état"), vous pouvez utiliser cette variable comme base pour calculer votre temps d'attente :

![Attendre](../../../../../static/img/docs/fr/scenes/wait-action/wait-computed.png)

### Les fonctions mathématiques disponibles

Voir [Fonctions mathématiques disponibles](/fr/docs/scenes/math-functions/).
