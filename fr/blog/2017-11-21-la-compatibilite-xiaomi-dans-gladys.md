---
slug: gladys-devient-compatible-xiaomi-home
title: Gladys devient compatible Xiaomi Home !
description: Découvrez comment intégrer les périphériques Xiaomi Home chez vous et comment mettre en place le fameux mode romantique !
author: Pierre-Gilles Leymarie
author_title: Fondateur de Gladys Assistant
author_url: https://twitter.com/pierregillesl
author_image_url: /fr/img/pierre-gilles.jpg
image: /img/presentation/xiaomi-home.jpg
---

<div class="alert alert--danger" role="alert">
  Update: 21/07/2020: Ce tutoriel est destiné à Gladys v3, il ne fonctionne pas avec Gladys v4 ! 
</div>

Salut à tous,

Pour ceux qui ne connaissent pas les produits Xiaomi Home, c'est tout une gamme domotique composé d'un gateway Wi-Fi connecté à la box internet, et d'un ensemble de périphériques eux connectés en Zigbee au gateway. Le même combo que les ampoules Philips Hue en quelques sortes. Leurs gros avantage, c'est que non seulement la technologie est robuste, a une bonne portée, n'est pas énergivore pour les devices, mais en plus c'est low-cost ! On parle de quelques euros pour chaque capteur.

Et je suis heureux de vous annoncer qu'une première version de ce module Xiaomi Home est maintenant disponible !

<!--truncate-->

## Le Hardware

Voilà pour l'instant le hardware que je supporte. Notez que le gateway est indispensable, et ensuite c'est à vous de voir en fonction de votre installation.

- [Xiaomi Gateway - 24€](https://fr.gearbest.com/living-appliances/pp_344667.html?wid=55)
- [Xiaomi Aqara Capteur d'humidité + Température - 7€](https://fr.gearbest.com/access-control/pp_626702.html?wid=55)
- [Xiaomi bouton connecté - 6€](https://fr.gearbest.com/smart-light-bulb/pp_257679.html?wid=55)
- [Xiaomi Aqara détecteur ouverture porte et fenêtre - 6€](https://fr.gearbest.com/sale/xiaomi-aqara/)

Mon grand favori étant le bouton Xiaomi qui vous permet de détecter 4 pressions différentes et de déclencher des scénarios en conséquence, comme par exemple le fameux mode romantique qui m'avait valu [un article](https://www.raspberrypi.org/blog/gladys-project-home-assistant/) sur le site de la fondation Raspberry Pi 😃

<iframe width="560" height="315" src="https://www.youtube.com/embed/gkPph-2-oBQ" frameborder="0" allowfullscreen></iframe>

## Installation

Le module est disponible sur [GitHub](https://github.com/gladysassistant/gladys-xiaomi-home).

- Téléchargez l'app Mi Home sur le [Play Store](https://play.google.com/store/apps/details?id=com.xiaomi.smarthome&hl=fr) ou [l'App Store](https://itunes.apple.com/us/app/mi-home-xiaomi-smarthome/id957323480?mt=8)
- Lors de la création de votre compte, définissez votre région à "Mainland China" pour pouvoir utiliser ces produits (sinon vous ne pourrez pas utiliser les produits Xiaomi Home ). Vous pouvez changer cette région dans "Settings" -> "Locale" sinon.
- Suivez la configuration dans l'app, connectez votre Xiaomi Gateway, et installez tous vos périphériques Xiaomi selon leur manuel d'installation.
- Mettez à jour le gateway à la dernière version
- Passez le Gateway Xiaomi en mode développeur de la façon suivante :
- Cliquez sur le gateway :

![Click on gateway](../static/img/articles/compatibilite-xiaomi-home-gladys/1_click_on_gateway.jpg)

- Puis cliquez sur les trois petits points :

![Click on three dots](../static/img/articles/compatibilite-xiaomi-home-gladys/2_click_on_3_dots.jpg)

- Cliquez sur "About" :

![Click on about](../static/img/articles/compatibilite-xiaomi-home-gladys/3_click_about.jpg)

- Cliquez plusieurs fois sur la zone suivante afin d'afficher les menus cachés :

![Click on zone](../static/img/articles/compatibilite-xiaomi-home-gladys/4_click_on_zone.jpg)

- Cliquez sur le menu en chinois suivant :

![Click on menu](../static/img/articles/compatibilite-xiaomi-home-gladys/5_click_menu.jpg)

- Enfin, activez le mode développeur :

![Activate dev mode](../static/img/articles/compatibilite-xiaomi-home-gladys/6_activate_dev_mode.jpg)

## Configuration de Xiaomi Home dans Gladys

Connectez vous au Raspberry Pi chez vous (en SSH ou sur un écran), et exécutez la commande suivante :

```
git clone https://github.com/gladysassistant/gladys-xiaomi-home
```

Déplacez vous dans le dossier :

```
cd gladys-xiaomi-home
```

Puis installez les dépendances :

```
yarn install
```

Ensuite, éditez le fichier `config.js` :

```
nano config.js
```

Remplacez `localhost` par l'IP de votre instance Gladys et `your-gladys-token` par un token de sécurité Gladys. Pour rappel, vous pouvez récupérer ce token dans l'onglet "Paramètres" => "Sécurité" de votre dashboard Gladys.

![Security Token Gladys](../static/img/articles/compatibilite-xiaomi-home-gladys/token_gladys.jpg)

Enfin, lancez Gladys Xiaomi Home :

```
pm2 start /home/pi/gladys-xiaomi-home/app.js --name gladys-xiaomi-home
```

Cela va lancer le programme en arrière plan grâce à [PM2](https://github.com/Unitech/pm2), et si votre Raspberry Pi redémarre le programme redémarrera au démarrage aussi.

Pour rappel, si vous voulez suivre les logs, vous pouvez faire :

```
pm2 logs gladys-xiaomi-home
```

Afin que vos périphériques apparaissent dans Gladys, il faut désormais qu'il remonte une information, ils seront automatiquement créé dans Gladys à la volée. Par exemple pour le bouton Xiaomi, il faut le presser au moins une fois pour le voir dans l'interface.

## Utiliser Xiaomi Home avec Gladys

Bon, afin d'apprendre à utiliser le Xiaomi Home, nous allons mettre en place ensemble le mode romantique que j'ai montré en vidéo !

D'abord, assurez-vous que vos périphériques apparaissent bien dans Gladys :

![Security Token Gladys](../static/img/articles/compatibilite-xiaomi-home-gladys/devices_in_gladys.jpg)

### Créez le script romantique

Puis, créez un script correspondant à l'action de votre mode romantique dans l'onglet "Script" du dashboard Gladys :

![Security Token Gladys](../static/img/articles/compatibilite-xiaomi-home-gladys/create_script.jpg)

Pour le contenu du script, voilà le mien mais il est complètement lié à mon installation. Je vais le disséquer avec vous pour apprendre à en faire un pour chez vous :

```javascript
gladys.music
  .setVolume({ room: 1, volume: 40 }) // on met le volume de la Sonos à 40
  .then(() => {
    gladys.music.playPlaylist({
      room: 1,
      identifier: "file:///jffs/settings/savedqueues.rsq#9",
    }); // on lance la playlist romantique
    gladys.deviceType.exec({ devicetype: 10, value: 56 }); // on baisse la luminosité à 56 sur une lampe
    gladys.deviceType.exec({ devicetype: 6, value: 40 }); // on baisse la luminosité à 40 sur la lampe principal
    gladys.deviceType.exec({ devicetype: 7, value: 900 }); // on change la "hue" à 900
    gladys.deviceType.exec({ devicetype: 8, value: 180 }); // on change la "saturation" à 180
  });
```

#### La musique avec MP3-Player

Si vous n'avez pas d'enceintes Sonos et que vous voulez jouer un son sur le Raspberry Pi directement, vous pouvez utiliser le module Gladys MP3-Player. Suivez les instructions d'installation.

Ensuite, dans un script, pour lancer de la musique, vous pouvez faire :

```
gladys.music.play({room: 1});
```

En remplaçant "1" par l'ID de la pièce dans laquelle vous avez placer le device MP3 Player dans Gladys (en gros, la pièce où est votre Raspberry Pi)

Si vous voulez faire pause sur la musique dans le script, faites :

```
gladys.music.pause({room: 1});
```

Si vous voulez spécifier quelle musique jouer, faites :

```
gladys.music.play({room: 1, uri: '/home/pi/music/romantic.mp3'});
```

Vous pouvez même jouer une URL distante:

```
gladys.music.play({room: 1, uri: 'https://www.mfiles.co.uk/mp3-downloads/Beethoven-Symphony5-1.mp3'});
```

(Oui, cette commande fonctionne vraiment, testez chez vous :D Je précise que la musique est libre de droit, c'est du classique)

#### La musique avec Sonos

Si vous avez une Sonos et que vous voulez récupérer l'identifier d'une playlist de chez vous, rendez-vous à l'URL "/music/playlist" de votre Raspberry Pi. Vous devriez tomber sur ça =>

![Get URI playlist sonos Gladys](../static/img/articles/compatibilite-xiaomi-home-gladys/get_uri_playlist_sonos.jpg)

Récupérer l'URI correspondant à votre playlist, et pour jouer la musique dans le script mettez :

```
gladys.music.playPlaylist({room: 1, identifier: 'REPLACE_HERE'});
```

Pensez là aussi à remplacer le "1" par l'ID de votre pièce où est située votre Sonos dans Gladys.

#### Les lumières

Pour les lumières, que vous utilisiez des Philips Hue, des Milight, c'est plus ou moins pareil !

Cela peut-être géré soit dans un script, soit directement dans le scénario.

Pour le faire dans le script, il n'y a qu'une commande à connaître :

```
gladys.deviceType.exec({devicetype: 10, value: 40});
```

Cette commande va passer la valeur du deviceType d'ID "10" à 40 (ici, la luminosité). Comment connaitre l'ID du deviceType ? Pour cela, rendez-vous dans l'onglet "Devices" puis "Mes Devices". Cliquez sur "Edit" du device de votre choix, exemple ici pour ma lampe de salon :

![Get devicetype id Gladys](../static/img/articles/compatibilite-xiaomi-home-gladys/get_devicetype_id.jpg)

Je récupère l'ID "10" de mon deviceType "brightness", et comme je peux le voir la luminosity s'exprime de 0 à 100. Ici pour passer la luminosité à 40% je fais donc :

```
gladys.deviceType.exec({devicetype: 10, value: 40});
```

Simple, non ? :)

### Créez le scénario

Maintenant, il faut créer un scénario qui se lance lors de l'appui sur le bouton Xiaomi.

Tout d'abord, allez dans l'onglet "Scenario" et cliquez sur "Nouveau" :

![Get devicetype id Gladys](../static/img/articles/compatibilite-xiaomi-home-gladys/s_1_create_scenario.jpg)

Ensuite, cliquez sur "Device", vous devriez arriver sur un écran comme ci-dessous. Sélectionnez votre bouton Xiaomi, et sélectionnez quelle valeur vous voulez surveiller.

La valeur 1 correspond à un clic simple.
La valeur 2 correspond à un double clic.
La valeur 3 correspond à une longue pression.
La valeur 4 correspond à une longue pression puis relâchement.

![Get devicetype id Gladys](../static/img/articles/compatibilite-xiaomi-home-gladys/s_2_select_trigger.jpg)

Skippez la partie "condition", et passez directement aux "Actions". Cliquez sur "Exécuter un script" :

![Get devicetype id Gladys](../static/img/articles/compatibilite-xiaomi-home-gladys/s_3_execute_script.jpg)

Enfin, sélectionnez le script que nous avons créé précedemment et cliquez sur "Enregistrer".

![Get devicetype id Gladys](../static/img/articles/compatibilite-xiaomi-home-gladys/s_4_execute_script.jpg)

C'est bon, votre script est prêt !

Vous pouvez le tester en appuyant sur votre bouton.

Et BAM !

![Gladys Romantic](../static/img/articles/compatibilite-xiaomi-home-gladys/gladys_romantic.gif)

## Conclusion

Bien entendu, tout ça n'est qu'un exemple de ce qui est possible de faire avec un peu d'imagination et ces périphériques Xiaomi. Je vous les recommande vraiment!

Fun fact, le bouton Xiaomi est assez sensible, et il m'est arrivé de déclencher plusieurs fois le mode par erreur juste en déposant des feuilles sur mon bureau, ou en posant le bouton autre part. Afin d'arrêter d'embêter mes colocs avec ce mode, j'ai fini par créer un mode "abort" qui se déclenche lorsque je double clic sur le bouton 😂

Si vous avez d'autres idées/questions/remarques, n'hésitez pas en commentaire!

PS: J'organise un meetup Gladys sur Paris le Mercredi 13 Décembre, pour s'inscrire [c'est ici](https://www.eventbrite.fr/e/billets-meetup-gladys-project-un-assistant-domotique-intelligent-open-source-39826425912) ! N'hésitez pas à me contacter si vous souhaitez un talk Gladys dans votre entreprise/établissement/conférence.
