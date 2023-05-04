---
id: enedis
title: Visualiser sa consommation électrique dans Gladys avec Enedis
sidebar_label: Enedis
---

Enedis propose une API qui permet de récupérer les données de consommation électrique venant d'un compteur Linky d'un foyer.

Cette API est uniquement proposé aux entreprises, après signature d'un contrat et d'un processus de certification.

Côté Gladys, nous avons une structure juridique, "Gladys Assistant SAS", qui nous permet d'avoir accès à cette API et nous autorise à la mettre à disposition des particuliers.

Cette API est mise à disposition via [Gladys Plus](/fr/plus).

## Se connecter à Enedis dans Gladys

Rendez-vous sur [plus.gladysassistant.com](https://plus.gladysassistant.com), et cliquez sur l'intégration "Enedis":

![Enedis icône](../../../../../static/img/docs/fr/configuration/enedis/enedis-integration-icone.jpg)

Cliquez sur le bouton "J'accède à mon espace client Enedis":

![Intégration Enedis Gladys consentement](../../../../../static/img/docs/fr/configuration/enedis/enedis-integration-clic.jpg)

Côté Enedis, acceptez le consentement et cliquez sur "Valider".

![Enedis consentement](../../../../../static/img/docs/fr/configuration/enedis/enedis-consentement.jpg)

Vous devriez arriver sur Gladys, qui se synchronisera avec votre compte Enedis.

La première synchronisation peut prendre un certain temps selon la charge sur l'API Enedis, je vous conseiller de quitter Gladys et de revenir plus tard 🙂

## Visualiser votre consommation électrique

Dans Gladys, vous retrouvez votre compteur électrique dans "Compteurs" :

![Intégration Enedis Gladys, mes compteurs](../../../../../static/img/docs/fr/configuration/enedis/enedis-compteur.jpg)

Sur le tableau de bord, vous pouvez créer un nouveau graphique, et sélectionnez "Consommation journalière" :

![Intégration Enedis Gladys, consommation journalière](../../../../../static/img/docs/fr/configuration/enedis/graphique-consommation-quotidienne.jpg)

Choisissez "Histogramme", et vous devriez voir ce graphique sur votre tableau de bord :

![Intégration Enedis Gladys, graphique](../../../../../static/img/docs/fr/configuration/enedis/enedis-graphique.jpg)

## FAQ

### Je n'arrive pas à faire le consentement Enedis ?

La plateforme Enedis est parfois hors-ligne pour des mises à jour du côté d'Enedis. Souvent, la meilleure chose à faire est de re-essayer plus tard.

Si cela ne fonctionne toujours pas, vérifiez que votre compte Enedis est bien fonctionnel : est-ce vous arrivez à voir vos données de consommation électrique dans Enedis ? Si non, le souci se trouve probablement chez Enedis.

### Je n'ai plus de données sur les précédents jours ?

L'API Enedis se met à jour tous les matins en théorie.

Néanmoins, en pratique les données ne sont pas toujours disponibles à la même heure, et certain jours (les jours fériés par exemple), les données ne sont pas disponibles.

Si toutefois, vous observez des trous sur votre tableau de bord, qui persiste dans le temps, merci de mettre un message sur [le forum](https://community.gladysassistant.com/).

### La synchronisation ne se fait plus ?

Votre consentement est valide 2 ans, et doit être renouvellé si vous voulez que Gladys continue à récupérer vos données.

Si votre compte ne se synchronise plus, en cas de doutes je vous conseille de refaire un consentement en cliquant sur le bouton bleu "J'accède à mon espace client Enedis".
