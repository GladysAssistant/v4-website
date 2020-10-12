---
id: continue-only-if-action
title: Continuer seulement si
sidebar_label: Continuer seulement si
---

Cette action vous permet de continuer ou non l'exécution de la scène suivant une condition donnée.

Prenons un exemple.

## Continuer la scène avec une condition sur la température d'une pièce

Imaginons que vous voulez faire une scène qui va chercher la température de la pièce, puis qui continue le scénario uniquement si la température est inférieur à 20°C.

La première étape dans votre scène est d'ajouter une action "récupérer le dernier état", et de sélectionner le capteur que vous voulez utiliser.

![Récupérer le dernier état scène](/fr/img/docs/scenes/get-last-device-state-action/get-last-device-state.jpg)

Ensuite, dans le bloc d'action suivant, vous pouvez ajouter une action "Continuer seulement si", en sélectionnant la variable récupéré précédemment.

En mettant la condition "capteur température cuisine < 20°C", cela nous donne ça:

![Continuer seulement si scène](/fr/img/docs/scenes/get-last-device-state-action/continue-only-if.jpg)
