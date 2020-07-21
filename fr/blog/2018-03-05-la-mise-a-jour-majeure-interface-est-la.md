---
title: La mise à jour majeure de l'interface de Gladys est là !
description: Après plusieurs mois de travail, la mise à jour majeure de l'interface Gladys, Gladys 3.8.0, est maintenant disponible.
author: Pierre-Gilles Leymarie
author_title: Fondateur de Gladys Assistant
author_url: https://twitter.com/pierregillesl
author_image_url: /fr/img/pierre-gilles.jpg

image: /fr/img/presentation/gladys-3-8-0-cover.jpg

id: la-mise-a-jour-majeure-interface-est-la
---

Salut à tous,

En décembre dernier, alors que j'organisais le premier meetup Gladys à Paris, @C4rlit0 et @LepetitGeek (deux membres très actifs du forum, maintenant modérateurs) sont venus me voir pour me dire qu'ils bossaient sur une grosse pull request.

Ils bossaient sur la mise à jour complète du thème de l'UI Gladys, un sacré morceau !

Quelques semaines après l'événement, la PR a atterit sur le repos Gladys, et depuis là on a bossé ensemble afin de sortir cette release majeure. L'objectif n'était pas seulement de rafraîchir l'interface, mais aussi de corriger de nombreux points qui gênaient les utilisateurs et les développeurs de Gladys.

Je suis heureux de vous annoncer que cette mise à jour est désormais disponible ! 🚀
Retour dans cette article sur toutes les améliorations de cette mise à jour, et les étapes à suivre pour passer à Gladys 3.8.

<!--truncate-->

## Les nouveautés

### Un thème tout beau tout neuf

Le principal changement de cette mise à jour, c'est le thème qui est désormais beaucoup plus moderne. Gladys 3.8.0, c'est désormais ça :

![Gladys 3.8 UI](/fr/img/articles/gladys-3-8/macbook-dashboard-2018.jpg)

Pas mal non ? 😉

### Plein de nouvelles boxs

Comme vous pouvez le voir sur le screenshot, il y a plein de nouvelles boxs sur le dashboard de Gladys. La raison à cela, c'est que le processus de développements des boxs est désormais bien plus simple.

Aujourd'hui, pour créer une box dans le core de Gladys, il suffit juste de créer un petit fichier HTML dans un dossier spécifique dans Gladys, et ensuite de déclarer cette box à Gladys. Un tutoriel complet sur la création de box est en cours de rédaction par @LePetitGeek.

On a donc développé pour commencer 9 types de boxs:

- La box calendrier
- La box météo
- La box "chat" pour discuter avec Gladys
- La box "caméra" qui permet d'afficher ce que voit une caméra IP (même la caméra du Raspberry Pi fait l'affaire, je ferais un tuto si vous êtes intéressé! Dites le en commentaire si cela vous intéresse)
- La box "Qui est à la maison ?" qui récapitule les utilisateurs présents à la maison
- La box "Graph" qui affiche des données de capteurs en vue graph
- La box "Musique"
- La box "Event" qui permet de lancer des événements Gladys
- La box "mode" qui permet de changer le mode de la maison en 1 clic

Et ce n'est que le début! Vu que désormais c'est très simple de développer une box, on en fera sûrement de nouvelles !

### Les alarmes de type "réveil"

Il y a une semaine sur le forum, je recevais un feedback de @Jojo, qui me disait qu'il n'arrivait pas à comprendre l'utilité de demander à Gladys de nous réveiller, étant donné que derrière il fallait forcément créer un scénario manuellement sur cette alarme.

![Feedback forum alarm](/fr/img/articles/gladys-3-8/feedback-forum-alarm.jpg" alt="Feedback forum alarm" />

Et il avait raison !

Le problème avec Gladys à l'époque est qu'il n'y avait pas de moyen d'identifier une alarme de type "Réveil" (une alarme destiné à vous réveiller), et une alarme qui servait juste à effectuer une action récurrente, ou à lancer un scénario récurrent.

Gladys 3.8 corrige ce problème, et apporte à la table "Alarm" un attribut "isWakeUp" qui permet de définir si une alarme est un réveil ou pas. La nuance, c'est que Gladys ne déclenchera pas le même event lorsque l'alarme sonnera.

Si l'alarme est un réveil, Gladys déclenchera désormais un event "user-need-to-wake-up", sinon Gladys continuera de déclencher des event de type "alarm".

Cela veut dire que désormais **vous pouvez créer un seul scénario de réveil** sur l'événement "user-need-to-wake-up", et ensuite à chaque fois que vous demandez à Gladys "Réveille moi demain à 8h", Gladys automatiquement vous réveillera avec votre scénario de réveil !

### Plein de corrections, améliorations !

Cette mise à jour apporte un lot de corrections et d'améliorations assez importante. Par exemple, jusque là, afin d'avoir la météo sur l'écran d'accueil, il fallait forcément être en HTTPS afin de pouvoir géolocaliser l'utilisateur. Ce n'est plus le cas. Maintenant, si l'utilisateur n'est pas géolocalisable, il y a un fallback sur la latitude et la longitude de la maison de l'utilisateur.

Pour voir toutes les nouveautés de cette mise à jour, rendez-vous sur le [CHANGELOG](https://github.com/gladysassistant/Gladys/blob/master/CHANGELOG.md).

### Une nouvelle image Raspbian

Enfin, une grosse nouveauté de cette mise à jour, est que l'image Raspbian Gladys a été mise à jour et rebuildée de 0 !

Désormais, Gladys tourne sur :

- Raspbian Stretch dernière version (compatible avec le Pi Zero W !)
- Node.js 8 LTS
- MariaDB dernière version
- Nginx dernière version
- Open-Zwave dernière version

Bref, tout est neuf, on repart sur des bases saines et à jour.

## Mettre à jour

Si vous n'avez jamais installé Gladys, ou alors que vous ne souhaitez pas conserver vos données de votre ancienne installation, il vous suffit d'installer Gladys depuis l'image disponible sur la page d'installation ! Pour les autres, voilà la procédure à suivre.

### Effectuez un backup de MySQL

La première étape pour migrer de l'ancienne image à la nouvelle, est d'effectuer un backup de MySQL sur votre installation acutelle. Pour cela, exécutez en SSH sur votre Raspberry Pi la commande :

```
mysqldump -uroot -proot gladys > backup-gladys.sql
```

**Attention** : Si vous avez modifié le mot de passe MySQL, pensez à modifier cette commande.

Ensuite, récupérez ce fichier de backup en local sur votre machine (le fichier `backup-gladys.sql`). Pour cela vous pouvez utilisez des outils comme [FileZilla](https://filezilla-project.org/), ou en SFTP. Si vous avez besoin d'aide, vous pouvez suivre [ce genre de tutoriel](http://raspberrypis.net/transferer-facilement-des-fichiers-sur-son-raspberry-pi/).

### Flashez votre carte SD

Maintenant, vous pouvez installer la nouvelle version de Gladys sur votre carte SD. Pour cela, téléchargez sur la page [installation](https://gladysassistant.com/fr/installation/) du site la nouvelle image Raspbian.

Ensuite, clonez-là sur une carte SD (soit une nouvelle, soit la même qu'avant si vous n'en avez qu'une). Vous pouvez suivre le [tutoriel d'installation de Gladys](https://www.youtube.com/watch?v=rx1PmlMGh38), rien n'a changé tout est pareil :)

### Importez votre ancienne base de donnée

L'étape la plus importante, il faut désormais importer vos anciennes données dans cette nouvelle image.

Connectez vous en SSH à votre Raspberry Pi sur la nouvelle carte SD.

Stoppez Gladys:

```
pm2 stop gladys
```

Supprimez la base de donnée actuelle:

```
mysql -uroot -proot -e 'DROP DATABASE gladys;'
```

Créez à nouveau la base de donnée:

```
mysql -uroot -proot -e 'CREATE DATABASE gladys CHARACTER SET utf8 COLLATE utf8_general_ci;'
```

Importez votre ancienne base de donnée (Il faut pour cela avoir copié le fichier de backup sur votre Raspberry Pi):

```
mysql -uroot -proot gladys < backup-gladys.sql
```

Enfin, lancez un init de Gladys :

```
cd gladys && node init.js
```

PS: Si vous obtenez des erreurs lors de ce init.js, ignorez les.

Finalement, relancez Gladys :

```
pm2 restart gladys
```

C'est bon, votre installation devrait être à jour !

### Les modules

Attention, après la mise à jour les modules ne seront plus installés sur votre installation. Pour les installer, rendez-vous dans l'interface et cliquez sur "Mettre à jour" un par un sur chaque module, ce qui réinstallera chaque module dans sa dernière version.

En cas de soucis, n'hésitez pas à les désinstaller/réinstaller.

Deuxième point, si vous aviez installé des modules externe type module bluetooth ou module xiaomi, pensez à garder leur configuration et à les réinstaller.

## Conclusion

Je suis super heureux de pouvoir enfin sortir cette release. J'espère qu'elle se passera bien chez vous et qu'elle vous plaira :)

A l'occasion de cette importante release pour le projet, le Gladys Starter Pack est en promotion à 34€ au lieu de 49€ avec le code promo "GLADYS_3_8" ! Disponible ici => [https://gladysassistant.com/fr/gladys-starter-pack/](/fr/gladys-starter-pack/). L'occasion de commencer sur Gladys avec cette super release, et de soutenir le projet :)
