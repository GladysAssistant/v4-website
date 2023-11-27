---
id: continue-only-if-action
title: Continuer seulement si
sidebar_label: Continuer seulement si
---

Cet action vous permet de continuer ou non l'exécution de la scène suivant une condition donnée.

Prenons un exemple :

## Continuer la scène avec une condition sur la température d'une pièce

Imaginons que vous voulez faire une scène qui va chercher la température de la pièce, puis qui continue le scénario uniquement si la température est inférieure à 20°C.

La première étape dans votre scène est d'ajouter une action "Récupérer le dernier état", et de sélectionner le capteur que vous voulez utiliser.

![Récupérer le dernier état scène](../../../../../static/img/docs/fr/scenes/get-last-device-state-action/get-last-device-state.jpg)

Ensuite, dans le bloc d'action suivant, vous pouvez ajouter une action "Continuer seulement si" en sélectionnant la variable récupérée précédemment.

En mettant la condition "capteur température cuisine < 20°C", cela nous donne çela:

![Continuer seulement si scène](../../../../../static/img/docs/fr/scenes/get-last-device-state-action/continue-only-if.jpg)
