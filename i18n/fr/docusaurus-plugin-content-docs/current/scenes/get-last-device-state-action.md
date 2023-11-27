---
id: get-last-device-state-action
title: Récupérer le dernier état
sidebar_label: Récupérer le dernier état
---

Cette action vous permet d'aller chercher le dernier état d'un périphérique géré par Gladys, et stocker cet état dans une variable.

Prenons un exemple :

## Ajouter une condition sur la température d'une pièce

Imaginons que vous voulez faire une scène qui va chercher la température de la pièce, puis qui continue le scénario uniquement si la température est inférieure à 20°C.

La première étape dans votre scène est d'ajouter une action "Récupérer le dernier état", et de sélectionner le capteur que vous voulez utiliser.

![Récupérer le dernier état scène](../../../../../static/img/docs/fr/scenes/get-last-device-state-action/get-last-device-state.jpg)

Ensuite, dans le bloc d'action suivant, vous pouvez ajouter une action "Continuer seulement si" en sélectionnant la variable récupérée précédemment.

En mettant la condition "capteur température cuisine < 20°C", cela nous donne çela:

![Continuer seulement si scène](../../../../../static/img/docs/fr/scenes/get-last-device-state-action/continue-only-if.jpg)
