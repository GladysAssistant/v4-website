---
id: turn-on-off-the-switches-action
title: Allumer/éteindre des prises télécommandées dans une scène
sidebar_label: Allumer/éteindre des prises dans une scène
---

Que ce soit pour contrôler une simple lampe de chevet, un bande de LED, ou même une machine à café, les prises télécommandées sont très utilisées en domotique.

Dans Gladys, vous pouvez contrôler vos prises télécommandées, que ce soit sur le dashboard ou dans les scènes.

Nous verrons ici un exemple concret.

Prenons les cafetière filtres très basique que l'on peut trouver dans le commerce pour une dizaine d'euro. Ces cafetières ont l'avantages d'avoir un bouton on/off physique, qui peut rester en position "allumé" permanente.

Avec une prise télécommandées devant, il devient possible de contrôler la machine, et donc de faire du café sur commande !

## Faire du café automatiquement tous les matins de la semaine avec Gladys

On peut donc imaginer la scène suivante:

```
Déclencheur: "Du lundi au vendredi, à 7h"
Actions:
    - Allumer la prise "machine à café"
    - Attendre 30 secondes (que le café soit préparé)
    - Eteindre la prise "machine à café"
```

Dans Gladys, la scène va ressembler à ça:

![Faire du café automatiquement tous les matins de la semaine avec Gladys](/fr/img/docs/scenes/turn-on-off-the-switches-action/screenshot.png)

Comme vous voulez le voir, il y a en premier un déclencheur qui se déclenche sur tous les jours de la semaine hors week-end (de lundi à vendredi).

Ensuite, la scène allume la prise, attend 30 secondes, puis éteins la prise.

Super simple, non ?
