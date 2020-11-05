---
title: Bilan du mois de Mai pour le projet Gladys !
description: "Un premier tutoriel vidéo publié, Gladys 3.6 sortie riche en nouvelles features, une plateforme développeur qui est sur les rails: Un mois de Mai très chargé pour le projet !"
author: Pierre-Gilles Leymarie
author_title: Fondateur de Gladys Assistant
author_url: https://twitter.com/pierregillesl
author_image_url: /fr/img/pierre-gilles.jpg

image: /img/presentation/gladys-3-6-cover-2.jpg

id: bilan-mois-mai-pour-le-projet-gladys
---

Salut à tous,

Après un long week-end à bosser sur Gladys, sur la plateforme développeur et sur mon premier tutoriel vidéo, je suis heureux de vous annoncer la sortie de Gladys 3.6 !

J'aimerais revenir sur toutes ces nouveautés avec vous dans un article bilan de ce mois de Mai très chargé pour le projet.

<!--truncate-->

## Un premier tutoriel vidéo

J'en parlais dans ma newsletter, je me suis équipé en matériel afin de filmer des tutoriels vidéos autour de Gladys. L'objectif dans un premier temps à été de filmer la base de la base : L'installation de Gladys sur un Raspberry Pi. Pour ceux qui n'ont pas vu la vidéo, elle est disponible sur YouTube:

<div class="embed-responsive embed-responsive-16by9">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/rx1PmlMGh38" frameborder="0" allowfullscreen=""></iframe>
</div>

De nombreux débutants étaient en effet bloqués à l'installation de Gladys, car sans aucunes connaissances du monde Linux ce n'est pas toujours facile de commencer avec Gladys. J'espère que cette première vidéo permettra aux plus débutants de commencer sur le projet plus simplement :)

## Une plateforme développeur qui avance

J'en parle beaucoup, notamment [sur mon blog perso](https://pierregillesleymarie.com/), je suis entrain de réécrire entièrement la plateforme développeur afin d'avoir une véritable plateforme évolutive et beaucoup plus ouverte que celle actuelle. Cette plateforme est 100% open-source, et je blog régulièrement à propos de son développement sur mon blog. N'hésitez pas à aller jeter un coup d'oeil aux articles si le développement backend avec Node.js/PostgreSQL/Redis vous intéresse.

Côté front-end, la plateforme est écrite en React, et l'interface ressemblera à ça (petit teasing!):

<img alt="Developer Platform Gladys" src="/fr/img/articles/gladys-3-6/dev-platform.png" />

<img alt="Developer Platform Gladys" src="/fr/img/articles/gladys-3-6/dev-platform2.png" />

Vous pouvez jeter un oeil au [Github](https://github.com/gladysassistant/dev-plaftorm-backend) et aux commits, ça bosse :p

## Un serveur de build

Je me suis équipé d'un petit [Raspberry Pi Zero W (Wireless)](http://amzn.to/2qwlB4x) afin d'automatiser mes builds Gladys.

Et franchement, ce Raspberry Pi est juste génial. J'ai configuré le Wi-Fi dessus, installé Node.js, cloné mon repo avec mes scripts de builds Gladys, et en quelques minutes, j'avais un petit serveur qui dès que je le branche au secteur, se connecte tout seul à ma box internet, et peut builder la nouvelle version de Gladys si une nouvelle version est disponible. Petite cerise sur le gateau, il se charge tout seul d'uploader le .tar.gz une fois le build terminé. En gros: je ne fais plus rien :D

J'ai hâte de tester le branchement du module caméra Raspberry Pi afin de faire un petit boitier de vidéo surveillance Wi-Fi :)

Et surtout, quel design! Et quel encombrement!

import InstagramEmbed from 'react-instagram-embed';

<InstagramEmbed
url='https://www.instagram.com/p/BUjd0rNgemP/'
maxWidth={320}
hideCaption={false}
containerTagName='div'
protocol=''
injectScript
/>

## Gladys 3.6

La grande nouvelle de cet article, c'est la sortie de Gladys 3.6\. Cette nouvelle version apporte 2 principales features:

### La gestion native du calcul de temps d'itinéraire

L'ajout d'une gestion native du calcul de temps d'itinéraire. De la même manière que Gladys gère de façon "abstraite" la météo, la musique, les devices, Gladys gère désormais de façon abstraite le calcul de temps d'itinéraire.

Et j'en ai profité pour implémenter un premier module de calcul de temps d'itinéraire avec l'API Google Maps, déjà disponible sur Gladys !

### L'Auto Wake Up

C'était une feature très très attendue en "automatique", elle était possible depuis longtemps sous forme de script, mais je l'ai maintenant rendue accessible à tous directement dans Gladys.

Le principe? Gladys peut désormais vous réveiller automatiquement **au bon moment** super simplement en fonction de votre calendrier et du trafic sur la route pour aller à votre premier rendez-vous. Le fonctionnement derrière est assez simple d'apparence mais est le résultat de tout le travail que nous avons accompli dans Gladys jusque-là. Chaque brique apportée dans les derniers mois à été utilisée.

Voilà comment fonctionne la feature:

- A Minuit, Gladys récupère le premier événement de la journée sur votre calendrier (si vous avez synchronisé votre calendrier Google par exemple)
- Gladys récupère votre position (si vous avez configuré la géolocalisation via votre smartphone par exemple, ou créé un script qui crée une location quand vous rentrez à la maison)
- Grâce à l'événement (contenant l'adresse de l'événement) + votre position, Gladys calcule le temps de transport. Ce temps de transport est "théorique" à ce stade là de la nuit, car à minuit le trafic est très réduit.
- Gladys connait vos préférences, vous avez renseigné dans les paramètres que vous avez besoin de 30 minutes de préparation le matin.
- Gladys peut donc calculer une heure de réveil "théorique", en faisant tout simplement heure du RDV - temps de transport - temps de préparation. Cela donne **un ordre d'idée** à Gladys de votre heure de lever.
- Ensuite, si le réveil est prévu dans plus de 2 heures (ce qui est souvent le cas à minuit si vous travaillez à 8h), Gladys re-programme un nouveau calcul dans 2 heures
- Si le réveil est prévu dans plus d'une heure et moins de 2 heures, Gladys recalculera dans 1 heure le trafic
- Enfin, si le réveil est prévu dans moins d'une heure, Gladys va calculer toutes les 10 minutes le trafic, **afin de pouvoir réagir à une brusque augmentation des bouchons sur la route**.
- Dès que Gladys détecte que ça devient critique, elle vous réveille!

Le calcul est effectué avec une marge de 10 minutes, ainsi vous ne pouvez pas être reveillé en retard. Dans le pire des cas, vous êtes réveillé avec 10 minutes d'avance :) Dans le meilleur cas, vous êtes reveillé à la seconde près (et oui, vous allez enfin pouvoir vous réveiller à 7h 14 minutes et 34 secondes pour arriver à la seconde près au bureau!)

> Mais comment je définis le moyen de transport ?

Bonne question, pour l'instant le moyen de transport est la voiture par défaut, mais les différentes options sont déjà prêtes, je voulais juste vous demander ce que vous trouviez le plus simple pour définir votre moyen de transport pour aller à un événement.

En gros, la contrainte est qu'il faut enregistrer cette donnée dans l'événement, car pour moi on ne va pas forcément tous les jours à chaque événement avec le même type de transport. Hors dans pas mal de systèmes de calendriers, il n'y a pas forcément de case "moyen de transport". J'ai pensé à une solution, pas forcément la plus propre mais je pense la plus universelle et la plus facile à mettre en place chez vous, c'est de rajouter dans vos événements directement dans le titre un code qui corresponde à votre moyen de transport.

- "#transit" => Transport en commun
- "#car" => Voiture
- "#foot" => A pied

**Exemple:** Vous créez un event dans votre calendrier avec pour titre: "Travail #transit" => pour dire que vous allez au travail en transport en commun.

Bref, c'est une proposition encore à débattre (sur le forum!)

### Installer cette mise à jour

Comme toujours, pour installer cette mise à jour, vous n'avez qu'à lancer le script `rpi-update.sh`.

## Des packs vidéos + ebooks pour débutants

J'ai fait un sondage ce mois-ci afin de voir si vous étiez intéressés par des packs de tutoriels vidéos, voir d'un ebook autour de Gladys disponible en supplément de ce qui existe en échange d'une participation financière. Le sondage est toujours disponible [ici](https://goo.gl/forms/EdeqXhrxJWYxj7Cf1) si vous voulez lire/relire le long message que j'avais mis dedans, ou même donner votre avis :)

A l'issue de ce sondage, la réponse est claire: Vous êtes tous très intéressés par des vidéos sur Gladys ( + 90% des réponses ), et une très grande majorité trouve ça normale de rémunérer le travail que ça représente derrière. J'ai reçu beaucoup de messages d'encouragements dans le formulaire, merci encore à tous ça fait chaud au coeur :)

J'aimerais juste revenir sur le fait que ces packs soient payant: L'objectif n'est pas de restreindre l'accès à la documentation Gladys. Le projet est open-source, absolument tout est ouvert, et tout restera ouvert! Je pense juste que beaucoup aimeraient commencer dans Gladys, mais par manque de temps où de motivations, n'ont pas le temps de faire des recherches, d'apprendre à se servir de Linux, de comprendre Node.js, de comprendre les protocoles domotiques, etc... L'objectif pour moi ici est de fournir un ou plusieurs packs "clé en main", où le travail de recherche, de synthétisation de l'information, de mise en forme est fait de mon côté. L'objectif n'est pas de limiter l'accès à la documentation, bien au contraire.

Bien entendu, toute la documentation est et restera open-source, je continue toujours d'écrire des articles, je réponds toujours sur le forum, et les vidéos "de base" seront probablement gratuites elles aussi :) Rien ne change de ce côté là, pas de panique!

## Maker Faire Paris 2017

La Maker Faire, c'est un super événement où plein de Makers se retrouvent pour exposer leurs projets.

J'y étais en 2016, j'y serais en 2017, et c'est le week-end du 9, 10 et 11 Juin à Paris !

N'hésitez pas à venir me voir sur le stand Gladys, j'avais vraiment apprécié l'an dernier de rencontrer "en vrai" tout ceux à qui je parle tous les jours sur le forum. Ca fait toujours chaud au coeur de parler avec des utilisateurs de Gladys, et si vous pouviez tous venir ça serait juste génial :)

Plus de renseignements sur Maker Faire Paris ici => [http://paris.makerfaire.com/](http://paris.makerfaire.com/)

## Conclusion

Et encore un long article à propos de Gladys, qui clotûre un long week-end à travailler sur le projet :) 4 jours non-stop de travail sur Gladys pour ma part, mais quel avancement en 4 jours!

J'ai hâte de pouvoir sortir cette nouvelle plateforme développeur, et hâte d'avoir vos retours sur ces nouvelles features :)

A bientôt sur le projet!
