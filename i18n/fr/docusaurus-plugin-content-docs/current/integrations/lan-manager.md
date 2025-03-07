---
id: lan-manager
title: Gérer la présence en scannant votre réseau
sidebar_label: Lan-Manager
---

L'intégration LAN Manager vous permet de scanner votre réseau à intervalle régulier, afin de déterminer si vous êtes à la maison ou si vous n'êtes pas là, grâce à la présence de votre téléphone, tablette ou ordinateur.

:::note
Cette méthode peut générer des faux négatifs si votre téléphone n'est pas tout le temps connecté au Wi-Fi (mise en veille, par exemple).
Ce n'est donc pas une méthode très fiable.
:::

:::warning
Cette méthode ne fonctionne pas sur iPhone.

Sur iPhone, il est recommandé d'utiliser l'application "Raccourci" et d'envoyer une requête à Gladys lorsque vous quittez la maison.
:::

## Ajouter votre téléphone Android

1. Rendez-vous dans l'intégration **LAN Manager**.
2. Cliquez sur **Découverte LAN**, puis sur **Recherche sur le réseau**.
3. Créez l'appareil en cliquant sur **Sauvegarder**.

Si cette recherche ne donne rien, vérifiez :

- Que votre installation Gladys est bien sur le bon réseau.
- Que votre container Gladys tourne bien en "network=host" (ce qui est le cas si vous avez lancé Gladys avec le docker run officiel).
- Que le CIDR à scanner est correct (modifiable dans les paramètres de cette intégration).

## Gérer la présence dans les scènes

### Une scène "retour à la maison"

Nous allons maintenant créer une scène qui vous marque comme "présent à la maison" lorsque votre téléphone est détecté.

1. Rendez-vous dans l'onglet **Scènes**.
2. Créez une nouvelle scène en suivant cet exemple :

![Scène retour à la maison](../../../../../static/img/docs/fr/configuration/bluetooth/retour-maison-scene.png)

La logique est simple :

- **QUAND** "Le téléphone est détecté"
- **ALORS** "Mettre l'utilisateur Tony comme présent à la maison"

### Une scène "départ de la maison"

Pour gérer le départ, il est préférable d'utiliser une scène périodique qui vérifie si votre téléphone a été détecté récemment.

- Si **oui**, Gladys ne fait rien.
- Si **non**, Gladys vous marque comme **absent**.

Voici à quoi doit ressembler la scène :

![Scène départ de la maison](../../../../../static/img/docs/fr/configuration/bluetooth/depart-maison-scene.png)

Vous pouvez ajuster le délai selon vos besoins. Par exemple, si **10 minutes** est trop court pour être considéré absent, augmentez à **20 minutes** pour éviter les faux départs.

## Afficher la présence sur le tableau de bord

Pour suivre la présence des utilisateurs à la maison, utilisez la box **Utilisateurs présents** :

![Présence dashboard](../../../../../static/img/docs/fr/configuration/bluetooth/presence-dashboard.png)
