---
title: Utiliser des détecteurs sans-fils
description: Comment utiliser des détecteurs sans-fils avec votre Raspberry Pi ?
image: /assets/images/presentation/wirelessmotionlow.jpg
author: Pierre-Gilles Leymarie
author_title: Fondateur de Gladys Assistant
author_url: https://twitter.com/pierregillesl
author_image_url: /fr/img/pierre-gilles.jpg
id: utiliser-des-detecteurs-sans-fils
---

Les détecteurs sans-fils permettent d'utiliser un nombre infini de détecteurs sur votre installation (Détecteurs de mouvements, mais aussi détecteurs d'ouvertures de portes, etc.. )

<!--truncate-->

## Le matériel

Pour ce tuto, j'ai utilisé :

- Un récepteur 433Mhz ([acheté ici](http://amzn.to/1CRv0Jn))
- Un détecteur de mouvements sans-fil 433Mhz ( [acheté ici](http://amzn.to/1gsNKor) )
- Ou bien un détecteur d'ouverture de porte sans-fil 433Mhz( [acheté ici](http://amzn.to/1IwYkqS) )

## L'installation

Connectez le récepteur 433Mhz selon le schéma suivant :

<img alt="Récepteur RF 433Mhz Raspberry Pi" src="/fr/img/articles/utiliser-des-detecteurs-sans-fils/recepteur_RF_light.jpg" />

## Le software

J'aurais souhaité faire cette partie directement en NodeJS, mais je n'ai pas trouvé d'équivalent à RCswitch-pi. Le code de détection est donc en C, et communique avec la base de donnée en faisant des requêtes HTTP avec libcurl.

Update, nouveau tutoriel : Désormais je reçois les signaux directement depuis un [arduino](/fr/blog/connecter-un-arduino-au-raspberry-pi), cela permet de ne pas surcharger le CPU du raspberry pi

Installez libcurl avec la commande suivante :

```
apt-get install libcurl4-openssl-dev
```

Vérifiez que WiringPi et Rcswitch-pi sont bien installés sur votre Raspberry. Si non, installez-les comme dans [le tuto 9#](/fr/blog/gerer-les-appareils-electrique) !

### Le code

J'ai utilisé un script de [NinjaBlocks](http://ninjablocks.com/blogs/how-to/7506204-adding-433-to-your-raspberry-pi) que j'ai adapté !

Le code ci-dessous est à titre indicatif et pour comprendre, mais vous pouvez télécharger la dernière version de Gladys, et tout sera inclus dedans !

Sinon vous pouvez aussi télécharger le zip avec tous les fichiers [ici](/assets/files/433_sensors.zip)

Pour installer le zip manuellement, décompressez le ( par exemple dans "home/pi"), puis placez vous dans le dossier, puis faites un "make"

Pour lancer le code, lancer la commande (dans le répertoire) :

```
sudo ./RFSniffer
```

Explication : Ici le programme attend sans fin un signal 433Mhz, dès qu'il en reçoit un il envoit l'ID du capteur avec un requête HTTP, pour informer Gladys !

### Conclusion

Maintenant que nous sommes capable de recevoir des signaux 433Mhz sans-fil, notre plateforme Gladys est 100% sans fil ! Et compatible avec les capteurs de mouvements conventionnels.
