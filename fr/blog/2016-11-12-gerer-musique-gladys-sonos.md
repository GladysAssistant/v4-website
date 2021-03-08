---
title: Gérez votre musique dans Gladys avec des enceintes Sonos !
description: Gladys dans sa version 3.3 est désormais capable de gérer la musique ! Découvrez comment lire votre musique et vos playlists sur une enceinte Sonos.
author: Pierre-Gilles Leymarie
author_title: Fondateur de Gladys Assistant
author_url: https://twitter.com/pierregillesl
author_image_url: /fr/img/pierre-gilles.jpg

image: /img/presentation/gladys-sonos-cover.jpg

slug: gerer-musique-gladys-sonos
---

<div class="alert alert--danger" role="alert">
  Update: 21/07/2020: Ce tutoriel est destiné à Gladys v3, il ne fonctionne pas avec Gladys v4 ! 
</div>

Salut à tous !

Cela fait longtemps que beaucoup d'entre vous me demandait une gestion de la musique dans Gladys, c'est maintenant chose faite avec Gladys 3.3.

Cette version apporte un support de la musique dans Gladys de la même façon que j'ai fais pour les Device, de façon complètement abstraite au niveau du core de Gladys, avec des modules qui derrière font office de drivers vers des plateformes spécifiques ( ici je vais vous montrer comment j'ai connecté une enceinte Sonos Play:1 à Gladys !).

Qu'est ce que cela veut dire en terme de scripts ? d'interactions ?

Cela veut dire que Gladys est capable de **gérer la musique de façon native**, que ce soit dans les scripts, dans les scénarios, par les commandes textuels ou par la voix... Et ce quel que soit le module derrière !

<!--truncate-->

Par exemple, dans un script, vous pouvez désormais faire :

```javascript
gladys.music.pause({ room: 5 });
```

Pour simplement mettre en pause la musique dans la pièce d'ID 5. Jolie non ? :D Et il y a toute une myriade de commandes disponibles pour tous les usages (play, stop, previous, next, etc...).

## Les enceintes Sonos

Je suis donc parti sur une Sonos Play:1 en Blanc. Pour parler de l'enceinte en elle même, elle est de très bonne facture. La fabrication respire la qualité, les finitions sont très propre. Le plastique a un aspect soft-touch sur le haut sympa au touché, et la grille métallique donne un charme à l'enceinte.

<img alt="Sonos Play:1" src="/fr/img/articles/gladys-sonos/gladys-sonos.jpg" />

Au niveau du son, il est puissant. L'enceinte sonorise sans problèmes une pièce à elle toute seule. Mais ce qui est intéressant avec les Sonos, c'est tout l'aspect connecté et multi-room. Et c'est ça qui nous intéresse ici dans Gladys !

Niveau connectique, la Sonos Play:1 est connectée en Wi-Fi, mais possède une prise ethernet au dos pour tous ceux qui n'ont pas de Wi-Fi, ou qui ont un Wi-Fi instable.

Le principe de l'enceinte, c'est que vous allez pouvoir connecter n'importe quel service que vous utilisez ( Spotify, Deezer, SoundClound, Apple Music, etc... ) à votre Sonos, et ensuite vous pourrez jouer n'importe quel musique de vos différents catalogues, n'importe quel playlist créé depuis votre ordinateur, votre smartphone, c'est vraiment pratique. Si vous avez plusieurs Sonos dans plusieurs pièces, c'est le jackpot, vous pouvez tout contrôler de façon centralisée et jouer la même musique sur plusieurs enceintes.

<img alt="Sonos Play:1 box" src="/fr/img/articles/gladys-sonos/gladys-sonos-box.jpg" />

Ainsi en apportant la compatibilité Sonos, j'apporte aussi indirectement la compatibilité Spotify, Apple Music, Deezer dans Gladys vu qu'indirectement la musique jouée dans la maison provient de ces plateformes :D Deux en un donc !

## Configurer l'enceinte Sonos avec Gladys

Pour la configuration de l'enceinte en elle même, je vous laisse vous débrouiller comme des grands, le manuel Sonos est plutôt bien fait :)

Nous allons voir comment mettre en place l'enceinte dans Gladys ! Avant de commencer, votre enceinte Sonos doit être prête et connectée au même réseau que votre instance Gladys (Wi-Fi ou ethernet).

### Prérequis

Pour installer ce module, vous devez avoir Gladys en version 3.3 minimum. C'est la version qui apporte le support de la musique dans Gladys. Pour mettre à jour Gladys, rendez-vous dans les paramètres => `Mettre à jour Gladys`.

Je vous conseille aussi de mettre à jour les données Gladys pour aller chercher la box `Music` pour le dashboard. Même principe il suffit d'appuyer sur le bouton `Mettre à jour les données Gladys` dans les paramètres.

### Installation du module

Une fois Gladys en version 3.3, vous devez tout simplement aller dans la vue `Modules` sur le dashboard, aller dans `Store de modules` et cliquer sur le module `Sonos`. Vous devriez arriver sur ça :

<img alt="module sonos Gladys" src="/fr/img/articles/gladys-sonos/screenshot-gladys-store-sonos.jpg" />

Vous pouvez cliquer sur `Installer`. Une fois que l'installation est terminée, il faut désormais rebooter Gladys. Allez dans les `Paramètres` puis cliquez sur `Redémarrer Gladys`. Attendez le temps que l'interface soit de nouveau accessible.

### Configuration du module

Pour configurer le module, c'est très simple. Rendez-vous dans la page `Module`, puis cliquez sur le bouton `Configuration` sur la ligne du module Sonos. Cela va lancer la recherche de périphériques Sonos sur le réseau. Toutes les enceintes Sonos détectées seront ajoutées en tant que `Device` dans Gladys.

Dans la vue `Device` de Gladys, vous devriez voir apparaitre quelque chose comme ça :

<img alt="Sonos device Gladys" src="/fr/img/articles/gladys-sonos/sonos-device.jpg" />

Spécifiez à Gladys dans quelle pièce est située votre Sonos, cela vous permettra de dire à Gladys d'allumer la musique dans telle pièce et pas en citant l'ID du devicetype. ( ce qui est possible aussi, mais moins sexy à l'usage ).

### Ajouter la box Music sur le dashboard

Maintenant que tout fonctionne, vous pouvez ajouter la box music à votre dashboard pour pouvoir contrôler votre Sonos depuis votre dashboard Gladys.

Pour cela, rendez-vous dans l'onglet `Paramètre` => `Boxs`. Ajoutez une box, sélectionnez `Musique`. Pour les valeurs des X et Y, cela correspond à la position en coordonnée de la box sur le dashbord. Pour mettre la box en haut sur la colonne de gauche par exemple, mettez X = 1 et Y = 1. Si vous voulez que la box soit sur la colonne de droite, mettez X = 2, Y = 1. Enregistrez, et hop c'est bon !

<img alt="Box Musique Gladys" src="/fr/img/articles/gladys-sonos/screenshot-box-music-gladys.jpg" />

**Remarque :** J'ai eu un petit problème de cache navigateur quand j'ai installé la nouvelle box Musique sur mon Raspberry Pi... Cela peut arriver, ne paniquez pas si la box s'affiche bizarrement.

### Le contrôle dans les scripts

Comme je disais avant, vous pouvez désormais contrôler dans les scripts votre musique. Ainsi, avec un simple :

```javascript
gladys.music.next({ room: 5 });
```

Vous passez à la musique suivante dans l'enceinte Sonos située dans la pièce 5 ! Il y a plein de possibilités. Il y a bien entendu une API REST là dessus.

Vous pouvez faire une requête :

```
POST http://IP_GLADYS/music/pause
Body { "room": 5 }
```

Pour mettre en pause la musique.

Une requête :

```
GET /music/queue?room=5
```

Vous donneras les musiques actuellement dans la queue de lecture.

## Conclusion

Je vous avoue que je me suis bien amusé avec ce module dans Gladys ! Ce qui est vraiment sympa, c'est qu'en terme de scénario, c'est vraiment infini, on peut faire des choses vraiment funs. Vous voulez un réveil en musique ? Vous voulez que quand vous rentrez chez vous Gladys lance votre playlist Spotify ? Vous voulez impressionner vos amis avec des ambiances sons et lumières ? Grâce au module Gladys Philips Hue, couplé au module Sonos, on commence à pouvoir faire des interactions vraiment sympa!

Le futur selon moi va venir d'un autre accessoire que je test en ce moment même depuis quelques jours, un bracelet connecté ! Ce bracelet enregistre tout sur moi : mon sommeil, mon rythme cardiaque, mes mouvements. On peut imaginer Gladys mettre une ambiance calme les soirs où je rentre d'une journée crevante... On peut imaginer Gladys baisser les lumières en cas de tension. Gladys pourrait me prévenir le soir à l'heure exacte à laquelle je dois me coucher afin que je ne sois pas fatigué le lendemain en fonction de la durée de ma nuit dernière + mon premier rendez-vous le lendemain.. Le futur s'annonce fun dans Gladys !
