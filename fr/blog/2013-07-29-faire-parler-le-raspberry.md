---
id: faire-parler-le-raspberry
title: Faire parler le Raspberry Pi
description: Nous voila enfin dans le vif du sujet, donnons la voix à notre Rasp !
image: /fr/img/presentation/robotspeakinglow.jpg
author: Pierre-Gilles Leymarie
author_title: Fondateur de Gladys Assistant
author_url: https://twitter.com/pierregillesl
author_image_url: /fr/img/pierre-gilles.jpg
---

Pour faire parler notre Raspberry, nous allons utiliser plusieurs outils : La synthèse vocale de Google, le lecteur mpg321, et PHP.

<!--truncate-->

### Installez mpg321

Tapez dans un terminal :

```
sudo apt-get install mpg321
```

### Créez un fichier PHP

Appelons-le par exemple "speak.php", et mettons la ligne suivante : ( sans oublier les balises d'ouvertures et de fermetures de code PHP )

```
exec('mpg321 "http://translate.google.com/translate_tts?tl=fr&client=tw-ob&q=Bonjour"');
```

Ainsi, lorsqu'on va appeler le fichier PHP, la ligne de commande sera exécutée, et le lecteur mpg321 lancera le fichier mp3 que renvoit Google translate !

### Ajoutez l'utilisateur www-data au groupe audio

Si nous n'ajoutons pas l'utilisateur "www-data" au groupe audio, notre commande PHP ne fera aucun effet, et on ne pourra pas entendre le Raspberry parler !

Tapez donc dans un terminal :

```
sudo adduser www-data audio
```

### Testez !

Placez ce fichier PHP dans le dossier "/var/www" de votre Raspberry.
Puis, tapez dans un navigateur l'adresse de votre Raspberry, suivi du nom de votre fichier PHP, par exemple : http://IP_RASP/speak.php (bien entendu vous devez être sur le même réseau)
Normalement, si votre Raspberry est connecté à un haut-parleur/casque et à internet, vous devriez entendre "Bonjour" !

### Faire dire ce qu'on veut au Raspberry

Il suffit de remplacer "bonjour" par une variable dans notre fichier php

```
if(isset($_GET['text']))
{
	exec('mpg321 "http://translate.google.com/translate_tts?tl=fr&client=tw-ob&q='.urlencode($_GET['text']).'"');
}
```

Ainsi il vous suffira d'appeler l'adresse "http://IP_RASP/speak.php?text=" suivi du texte que vous voulez que votre Raspberry dise ( encodé pour une URL bien évidemment ), pour que le Raspberry s'exprime ! Pour encoder le texte pour une URL ( si vous voulez envoyer du texte accentué, avec des espaces ou caractères spéciaux, ... utilisez la fonction" urlencode()" en php ou "encodeURIComponent()" en JavaScript !

J'espère que ce tuto vous a plu, n'hésitez pas à poser des questions dans les commentaires si vous en avez ;)
