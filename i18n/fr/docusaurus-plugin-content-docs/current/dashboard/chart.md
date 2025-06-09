---
id: chart
title: Afficher un graphique sur le tableau de bord
sidebar_label: Graphique
---

## Prérequis

Vous devez avoir configuré au moins un capteur envoyant des données dans Gladys.

## Configuration

Allez sur le tableau de bord de Gladys et cliquez sur le bouton "Éditer".

Ajoutez un widget "Graphique" :

![Éditer le tableau de bord](../../../../../static/img/docs/fr/dashboard/chart/add-chart.png)

Sélectionnez les appareils que vous souhaitez afficher, puis configurez le reste du widget :

- **Nom** : Sera affiché en haut du widget sur le tableau de bord
- **Type de graphique** : Il est possible d'afficher plusieurs types de graphiques dans Gladys (Ligne, Histogramme, Aire, Ligne droite, Binaire)
- **Afficher les axes** : Nous proposons deux types d'affichage, un affichage plus design sans les axes et un avec les axes
- **Afficher la variation** : Si sélectionné, le graphique affichera la variation relative entre la première et la dernière valeur sur l'intervalle sélectionné

![Configurer le graphique](../../../../../static/img/docs/fr/dashboard/chart/configure-chart.png)

Si vous souhaitez regrouper les données par intervalle de temps, vous pouvez modifier cette option dans les paramètres avancés :

![Regrouper par intervalle de temps](../../../../../static/img/docs/fr/dashboard/chart/group-by.png)

## Exemples de graphiques

Imaginons que vous souhaitiez afficher la consommation énergétique d'un de vos appareils, le graphique "histogramme" est particulièrement adapté pour cela :

![Affichage histogramme](../../../../../static/img/docs/fr/dashboard/chart/bar.jpg)

Vous pouvez également afficher ces données sous forme d'une courbe "aire", sans les axes pour un affichage plus design :

![Affichage aire sans axes](../../../../../static/img/docs/fr/dashboard/chart/area-without-axes.jpg)

Ou avec les axes pour plus de lisibilité :

![Affichage aire avec axes](../../../../../static/img/docs/fr/dashboard/chart/area-with-axes.jpg)

Les possibilités sont infinies !
