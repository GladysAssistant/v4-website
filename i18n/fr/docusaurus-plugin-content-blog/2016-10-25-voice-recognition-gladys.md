---
title: De la reconnaissance vocale sur Raspberry Pi avec Gladys ? Oui !
description: Vous avez toujours rêvé de voir la reconnaissance vocale arriver dans Gladys ? C'est maintenant chose faite !
author: Pierre-Gilles Leymarie
author_title: Fondateur de Gladys Assistant
author_url: https://twitter.com/pierregillesl
author_image_url: /img/pierre-gilles.jpg

image: /img/presentation/gladys-voice-cover.jpg

slug: voice-recognition-gladys
---

<div class="alert alert--danger" role="alert">
  Update: 21/07/2020: Ce tutoriel a été écrit il y a plusieurs années, il ne concerne pas Gladys v4 ! 
</div>

Salut à tous !

Vous êtes nombreux à me demander depuis le début du projet quand la reconnaissance vocale sera disponible. Lorsque le projet a commencé il y a maintenant plus de trois ans, les technologies n'étaient pas prêtes : la reconnaissance vocale de l'époque était décevante, sur Linux je n'en parle même pas, et c'était compliqué d'écouter H24 dans la pièce de l'utilisateur pour attendre une commande. Il y avait des solutions sous Windows, mais elle étaient peu flexible, et nécessitaient d'avoir un PC complet allumé en continu.

Sauf que depuis, les choses ont pas mal changées ! Les systèmes que l'ont voit autour de nous ont réglés le problème de "l'écoute H24" en proposant une solution hybride : Le système attend un mot clé ( le fameux "ok google", "Alexa", "Hey Siri" ) en écoutant en local et en faisant passer le son par un modèle entrainé à reconnaître uniquement ce hotword, puis lorsque le mot clé est détecté, le son est streamé vers un serveur qui lui est capable de reconnaitre une phrase
complète.

<!--truncate-->

## La reconnaissance vocale

J'ai donc opté pour cette même solution hybride, grâce à la fabuleuse lib [Snowboy](https://github.com/Kitt-AI/snowboy) qui fait de la détection de hotword en local avec des réseaux de neurones. Le principe est simple : Sur leur site, on peut entrainer un modèle en répétant plusieurs fois devant son micro le mot clé que l'on veut utiliser pour la détection, puis il est possible de télécharger ce modèle et de l'utiliser en local avec leur librairie.

Snowboy a de gros avantages :

- Il tourne en local
- Il tourne sur le Raspberry Pi, et même sur le Raspberry Pi B première génération, le programme consomme moins de 10% du CPU.
- Il a un module Node.js natif

Bref, tout pour s'en servir avec Gladys !

Et là où Snowboy est intéressant, c'est qu'il est possible de créer un modèle communautaire pour avoir le maximum d'enregistrement d'un mot clé et donc une reconnaissance optimale.

Et c'est là où j'ai besoin de vous ! Pour avoir le meilleur modèle possible, et devenir un mot clé "communautaire" sur la plateforme snowboy, **il me faut 2 000 enregistrements** du mot clé `Gladys` sur la plateforme. Largement faisable :)

Vous pouvez donc vous connecter sur [le site](https://snowboy.kitt.ai), puis une fois connecté vous pouvez vous rendre sur [ce lien](https://snowboy.kitt.ai/hotword/884) et ajouter votre pierre à l'édifice en enregistrant 3 fois le mot Gladys depuis le site ! :) Merci d'avance à tous ceux qui vont le faire !

Mais du coup, que se passe-t-il lorsque le mot clé est reconnu ?

Et bien exactement comme je disais, une fois que le mot clé est reconnu dans la pièce, votre voix est streamée vers un service de reconnaissance vocale ( en ligne malheureusement, les solutions locales type pocketsphinx ne sont pas satisfaisantes à mon goût ) puis le service stream à Gladys la réponse en texte.

Pour cette première beta de ce service de reconnaissance vocale dans Gladys, j'ai utilisé Google Speech API, qui donne vraiment des résultats excellents. Soyez rassuré, Google n'écoute pas H24 chez vous avec cette solution.. Il faut dire "Gladys" puis seulement lorsque vous entendez le son qui marque le début de la reconnaissance vocale, votre voix est streamée. A l'avenir si l'on trouve d'autres API on pourra mettre plusieurs possibilités :)

## L'analyse du texte

Une fois que nous avons reçu la réponse du service sous forme d'un texte, il faut savoir ce que l'on en fait ! Comment détecter que la commande "Fais moi un café" veut dire qu'il faut lancer la machine à café ?

Et bien rappelez-vous, il y a quelques mois, je vous avais demandé lors d'un sondage : "Et vous, si vous pouviez parler à Gladys, que lui demanderiez-vous ?" ( Sondage disponible [ici](https://docs.google.com/forms/d/e/1FAIpQLSfDDj2Gkx5kqPWuUup-ZCx-90aNxLp4ej6QyutUv-VD6no_wg/viewform), vous pouvez encore y répondre si vous avez envie de voir certaines phrases dans Gladys ! )

L'objectif de ce sondage était de récolter un maximum de phrases, puis d'entrainer un modèle à partir de ce lot de données pour apprendre à classifier ces phrases. L'objectif est juste d'apposer un tag sur chaque phrase. La liste des phrases qui entrainent le modèle actuel dans Gladys est [sur GitHub](https://github.com/gladysassistant/gladys-data/blob/master/sentences/fr.json). Vous pouvez proposer des PR, elles sont les bienvenues :)

Ainsi, grâce à vos contributions, lorsque le texte est détecté, il est passé dans le modèle ( le modèle est généré en local chez vous lorsque vous installez Gladys, et à chaque mise à jour des données Gladys ), puis il est classifié, et enfin le service correspondant à la commande est appelé.

Vous pouvez d'ailleurs envoyer des messages textuels à Gladys, via le dashboard en faisant Ctrl + espace, où via l'API Gladys en faisant une requête sur la route :

```
GET /brain/classify?q=VOTRE_PHRASE&token=VOTRE_ACCESS_TOKEN_GLADYS
```

## Mettre ça en place chez vous

Bon, maintenant que vous avez bien l'eau à la bouche, comment mettre tout ça en place ?

### La reconnaissance de texte

Tout ce qui est reconnaissance/classification de texte est inclus **nativement** dans Gladys. Vous avez Gladys, vous avez donc la classification :)

Pour tester tout ça, rendez-vous sur le dashboard et faites `Ctrl + espace`. Pour pouvez surveiller les logs de Gladys pour voir comment se passe la reconnaissance ( `pm2 logs gladys` sur le Raspberry Pi )

Si rien ne marche, c'est peut-être que votre modèle n'est pas entrainé ! Pour télécharger un pack de phrases tout frais et re-entrainer le modèle, rendez-vous dans les `Paramètres` puis `Mettre à jour les données Gladys`.

Attention, les données sont téléchargées dans la langue de votre user. Seuls anglais et français sont disponibles.

### La reconnaissance vocale

J'ai mis la reconnaissance vocale sous la forme d'un module séparé, car pour moi ça n'a rien à faire dans le core de Gladys. Il faut voir ça comme un petit agent très léger que l'on peut installer n'importe où. L'objectif de le séparer de Gladys est que du coup on peut l'installer sur plein de machines ( voir même sur un poste fixe, sur un Raspberry Pi Zero que l'on scotch derrière un meuble, enfin on fait ce que l'on veut !) pour pouvoir faire de la reconnaissance vocale depuis n'importe quelle pièce, vers une instance Gladys principale qui va gérer les commandes.

L'agent de reconnaissance vocale Gladys est disponible [sur GitHub](https://github.com/gladysassistant/gladys-voice), et pour l'installer toutes les instructions sont dans le README !

Attention, ce n'est pas un module Gladys comme les modules qui sont sur le Store Gladys, c'est un simple agent qui écoute, reconnait la voix, la transforme en texte, et l'envoie à Gladys via une requête HTTP. C'est donc un simple client !

### Demo

Une petite démonstration de ce que ça donne chez moi !

<blockquote class="twitter-tweet" data-lang="fr"><p lang="en" dir="ltr">First demo of Gladys voice recognition system! Excited?! <a href="https://t.co/RZRVSIQnWN">pic.twitter.com/RZRVSIQnWN</a></p>&mdash; Gladys Assistant (@gladysassistant) <a href="https://twitter.com/gladysassistant/status/783751152571678721">5 octobre 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

## Conclusion

Petit à petit, pas à pas, on commence à se rapprocher du JARVIS que l'on cherche tous!

Je compte sur vous pour tester intensivement ce module, pour contribuer au modèle Snowboy et à mon lot de données de phrases pour Gladys. C'est aussi ça l'open-source, c'est grâce à chaque petite contribution individuelle que le projet peut avancer !
