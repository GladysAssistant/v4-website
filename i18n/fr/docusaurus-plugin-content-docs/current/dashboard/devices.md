---
id: devices
title: Afficher ses appareils sur le tableau de bord
description: "Pilotez vos appareils et affichez les valeurs de vos capteurs directement depuis le tableau de bord de Gladys Assistant avec le widget Appareils."
sidebar_label: Appareils
---

Dans Gladys Assistant, vous pouvez contrôler vos appareils directement depuis le tableau de bord, et afficher les valeurs de vos capteurs dans l'interface.

## Pré-requis

Vous devez avoir ajouté au moins quelques appareils à Gladys, sinon cela a peu d'intérêt 😄

## Configuration

Rendez-vous sur le tableau de bord de Gladys, et cliquez sur "Editer".

Sélectionnez le widget "Appareils", et cliquez sur le bouton +.

![Ajouter le widget appareils à Gladys](../../../../../static/img/docs/fr/dashboard/devices/select-widget.png)

Ensuite, sélectionnez les appareils que vous voulez afficher.

Vous pouvez donner un nom au widget, mais c'est optionnel.

![Sélectionnez les appareils à afficher](../../../../../static/img/docs/fr/dashboard/devices/choose-device-and-name.png)

Cliquez sur "Sauvegarder".

## Utilisation

Vous pouvez maintenant voir vos appareils sur le tableau de bord, voir leurs dernières valeurs si c'est un capteur, ou contrôler directement vos appareils.

![Appareils](../../../../../static/img/docs/fr/dashboard/devices/devices-with-value.png)

## Si aucun valeur n'est affichée

Si vos appareils affichent "pas de valeur récente", cela signifie que le capteur n'a pas envoyé de valeur depuis plus de 48 heures.

![Pas de valeur récente](../../../../../static/img/docs/fr/dashboard/devices/no-recent-value.png)

Vous pouvez changer ce délai dans les paramètres de Gladys (`Paramètres` -> `Système` -> `Délai avant expiration d'un état`)

![Délai avant expiration d'un état](../../../../../static/img/docs/fr/dashboard/devices/delay-before-expiring.png)
