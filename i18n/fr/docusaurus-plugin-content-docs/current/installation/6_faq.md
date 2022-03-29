---
id: faq
title: FAQ
sidebar_label: FAQ
---

### Quels sont les identifiants par défaut de l'image Rasperry Pi OS pour se connecter en SSH ?

L'image Raspberry Pi OS proposée se base sur l'image officielle de la fondation Raspberry Pi.

Pour se connecter en SSH, les identifiants sont les mêmes que ceux de l'image de la fondation :

- **Login** : pi
- **Mot de passe** : raspberry

### Comment mettre à jour Gladys ?

Si tu as installé Gladys avec l'image Raspberry Pi OS, Gladys se mettra automatiquement à jour grâce à [Watchtower](https://containrrr.dev/watchtower/).

Watchtower est un container Docker qui tourne à côté de Gladys, et qui vérifie toutes les 24h si il y a une nouvelle mise à jour de Gladys.

Si tu as installé Gladys manuellement, regarde l'onglet "Docker" de cette documentation pour mettre en place Watchtower 🙂

### Qui utilise Gladys Assistant 4 ?

La v4 de Gladys Assistant est sortie en [Novembre 2020](/fr/blog/lancement-gladys-assistant-4/). Depuis, vous êtes des centaines à utiliser Gladys Assistant, et l'objectif est de passer à des milliers dans les prochains mois !

Gladys Assistant est installée par tout type d'utilisateurs :

- Des novices complet, qui veulent automatiser leur maison avec un produit simple, puissant et respectueux de leur vie privée.
- Des développeurs qui trouvent ça fou de pouvoir coder pour leur maison et qui contribuent à ce projet open-source !
- Des pros, qui gère des parcs de capteurs impressionants (Oui, on parle de toi [@Terdious](https://community.gladysassistant.com/u/terdious/summary) 😛)

### Comment contribuer au projet ?

Gladys Assistant est entièrement open-source et disponible sur [GitHub](https://github.com/GladysAssistant/gladys).

Toute PR est la bienvenue 🙂

Si tu veux contribuer, n'hésite pas à venir sur [la communauté](https://community.gladysassistant.com/) pour parler du développement sur lequel tu veux te lancer. Ca permettra de voir avec les autres développeurs si quelqu'un d'autre ne travail pas déjà dessus, et surtout de discuter "spécifications" avec de partir dans le développement !

### C'est quoi la philosophie du projet ?

L'objectif du projet, c'est de créer un logiciel de domotique :

- **Respectueux de la vie privée**, les données sont stockées en local chez l'utilisateur.
- **Simple à utiliser**. L'expérience utilisateur est notre priorité. Gladys a été développé avec le souci du détail, chaque fonctionnalité a été pensée avant d'être développée. Ce n'est pas les contraintes techniques qui définissent nos choix produits, c'est notre exigence produit qui nous force à trouver des solutions techniques.
- **Design**. La belle interface de Gladys Assistant est la signature du projet, et nous passons beaucoup de temps à faire en sorte que cela reste le cas.
- **Performant**. Gladys doit être capable d'encaisser une certaine charge sans compromettre la fluidité de l'interface.
- **Léger**. Nous souhaitons que le logiciel ait une empreinte minimale sur le système de l'utilisateur. Nous passons beaucoup de temps à analyser les dépendances que nous utilisons, afin de fournir un produit léger.
- **Stable**. Gladys doit rester stable, sur le long terme. Nous voulons que nos utilisateurs utilisent Gladys pendant des années, sans interruption de services, avec des mises à jour en continu et sans accroc.
- **Sécurisé** : Nous mettons toutes les bonnes pratiques en place pour que Gladys soit sécurisée. Nous avons des processus automatisée en place pour garantir que des régressions de sécurités ne sont pas introduits dans chaque version de Gladys.
