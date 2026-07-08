---
title: "Gladys 4.69 : Zigbee2mqtt passe sur Ember et suivi énergétique Tasmota"
description: "Gladys 4.69 ajoute le nouveau driver Ember de Zigbee2mqtt, le suivi énergétique Tasmota, et un affichage plus clair des capteurs d'ouverture sur le tableau de bord."
authors: pierregilles
image: /img/presentation/gladys-4-69-zigbee2mqtt-ember-fr.jpg
slug: gladys-4-69-zigbee2mqtt-ember
---

Salut à tous,

Une nouvelle version de Gladys Assistant est disponible 🥳, avec le nouveau driver Ember de Zigbee2mqtt et le suivi énergétique Tasmota.

{/* truncate */}

## Zigbee2mqtt : le nouveau driver Ember

Zigbee2mqtt propose désormais un nouveau driver, **Ember**, pour certains dongles comme le Sonoff ZBDongle-E. L'intégration Zigbee2mqtt dans Gladys vous permet maintenant de sélectionner ce driver Ember pour les dongles compatibles.

Si vous utilisez EZSP, Zigbee2mqtt ne touchera pas à votre installation sans action de votre part, pour éviter de casser votre installation. **La stabilité est une valeur très importante du projet**, et cette mise à jour a été pensée pour ne pas impacter votre quotidien.

Si vous souhaitez passer à Ember, c'est possible, mais il faudra sûrement mettre à jour le firmware de votre dongle Zigbee avant. Par exemple, pour le Sonoff Dongle-E, l'intégration vous offre la possibilité de sélectionner le driver de votre choix entre « Ember » (le nouveau par défaut) et l'ancien EZSP :

![Sélection du driver Zigbee](../../../static/img/articles/gladys-4-69-zigbee2mqtt-ember/01.png)

Si vous testez le nouveau driver et que votre firmware n'est pas compatible, pas de panique, vous verrez un message clair :

![Message d'incompatibilité du firmware](../../../static/img/articles/gladys-4-69-zigbee2mqtt-ember/02.png)

Vous pourrez alors soit mettre à jour le firmware, soit repartir sur EZSP en attendant. Un grand merci à [@cicoub13](https://community.gladysassistant.com/) pour cette contribution !

## Dashboard : amélioration de l'affichage des capteurs d'ouverture

L'affichage des capteurs d'ouverture de porte sur le dashboard a été amélioré pour une meilleure lisibilité. Désormais, on affiche « Ouvert/Fermé » au lieu de la petite icône de cadenas qui n'était pas très lisible.

## Tasmota : ajout du suivi énergétique

Les appareils Tasmota sont désormais intégrés au suivi de l'énergie. Merci [@Terdious](https://community.gladysassistant.com/) pour ce développement 🙌

---

Pour mettre à jour, c'est automatique, ou vous pouvez forcer la mise à jour dans les paramètres. Bonne fin de semaine à tous !
