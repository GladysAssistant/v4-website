---
title: Créez votre propre objet connecté !
description: A nous de créer nos propres objets connectés, avec un arduino, quelques capteurs, pour environ 10€, pour ajouter encore plus de possibilités à Gladys !
author: Pierre-Gilles Leymarie
author_title: Fondateur de Gladys Assistant
author_url: https://twitter.com/pierregillesl
author_image_url: /fr/img/pierre-gilles.jpg

image: /img/presentation/connectedobjectlow.jpg

id: creez-votre-propre-objet-connecte
---

On parle de plus en plus des objets connectés, mais cela reste encore des gadgets cher, et pas très "bidouille"... Nous allons ici créer un objet connecté très simple, composé d'un accéléromètre et d'un émetteur 433Mhz (piloté par un arduino), qui va être capable d'envoyer son orientation ( Si l'objet est dans le bon sens, retourné, sur le côté, si l'objet est à l'envers ), et ainsi déclencher des actions en fonction de son sens. On peut imaginer un cube, à qui chaque face est associé une action ( passer la maison en mode nuit sur une face, ouvrir tous les stores sur une autre, lancer un scénario, etc... ) Dès que le cube serait tourné, un signal serait envoyé au Raspberry qui interpréterait l'action et déclencherait un scénario.  
Mais ce n'est qu'un exemple parmi tant d'autre ! Le but ici est de créer une base d'objet connecté. On peut très bien remplacer l'accéléromètre par un capteur de température pour faire un thermomètre connecté, ou par n'importe quel capteur/moteur.

J'en profite pour vous mettre une petite photo du rendu final (enfin final, sur la breadbord de développement !)

<img alt="Assemblage de l'objet connecté" src="/fr/img/articles/creez-votre-propre-objet-connecte/finalisation.jpg" />

<!--truncate-->

## Le matériel

Pour le matériel, je suis quasiment passé entièrement par Tinydeal, un fournisseur chinois que je recommande très fortement. Les prix sont très attractifs, la qualité est au rendez-vous, et en des dizaines de commandes à mon actif je n'ai jamais eu un seul pépin... ( la livraison prend environ 3 semaine )

- Un arduino Nano ( acheté 3€98 [ici](http://amzn.to/1M82tlv) ).  
  J'ai pris cet arduino car c'était un bon compromis entre le arduino Uno ( trop cher, et trop gros ), et le choix de juste prendre un Atmega "nu" ( ce que je ferais sûrement dans un prochain tutoriel ). Si vous voulez un arduino encore moins cher il y a l'arduino Pro Mini à 3€80 [ici](http://www.tinydeal.com/fr/pro-mini-atmega328p-microcontroller-board-p-115635.html), qui à l'avantage de prendre encore moins de place, d'être moins cher, et qui est équivalent au Nano, le port USB en moins ( des adaptateurs USB sont disponible pour 1/2€ pour pouvoir charger le programme sur la carte )
- Un accéléromètre ( acheté pour 2€50 [ici](http://www.tinydeal.com/fr/gy-291-digital-3-axis-acceleration-of-gravity-tilt-module-p-115214.html) )
- Un émetteur RF 433Mhz ( acheté pour 2€98 [ici](http://www.tinydeal.com/fr/433mhz-rf-transmitter-receiver-link-kit-green-p-119800.html) )
- Un connecteur de pile 9V ( acheté pour 0€46 [ici](https://www.banggood.com/fr/search/9v-connector-arduino.html) )

Pour récapituler, on se retrouve avec un objet connecté à 10,11€ .. Plutôt honnête !

## Le montage

Le montage n'est pas très compliqué en soit, on va connecter l'accéléromètre et l'émetteur 433Mhz à l'arduino.

Pour connecter l'accéléromètre, on branche les ports de l'accéléromètre (en premier) au ports suivant de l'arduino :  
-GND => GND  
-VCC => 3V3  
-SDA => A4  
-SDL => A5

<img alt="Objet connecté final" src="/fr/img/articles/creez-votre-propre-objet-connecte/assemblage.jpg" />

Pour connecter l'émetteur 433Mhz, on branche les ports de l'émetteur (en premier) au ports suivant de l'arduino :  
-VCC => 5V  
-GND => GND  
-ATAD => D10

Enfin, on connecte le connecteur pour batterie 9V pour pouvoir alimenter notre objet connecté avec une pile 9V :

- fil rouge => VIN
- fil noir => GND

Pour que l'objet ait une portée suffisante, je vous conseille de fixer une antenne au port "ANT" de l'émetteur, de taille 17,2cm de préférence.

<img alt="Objet connecté DIY" src="/fr/img/articles/creez-votre-propre-objet-connecte/objet_connecte_final.jpg" />

## Le logiciel

Le logiciel est très simple, j'ai utilisé plusieurs librairies (dont je remercie chaleureusement les développeurs) qu'il faut télécharger et importer sur le logiciel arduino avant d'utiliser le code que je fourni plus bas :

- [Adafruit_Sensor](https://github.com/adafruit/Adafruit_Sensor), une librairie globale qui permet d'utiliser la librairie pour l'accéléromètre.
- [Adafruit_ADXL345_U](https://github.com/adafruit/Adafruit_ADXL345), qui permet d'utiliser les données de l'accéléromètre.
- [RCSwitch](https://code.google.com/p/rc-switch/downloads/list), qui permet d'envoyer des signaux lisible en 433Mhz.
- [Jeelib](https://github.com/jcw/jeelib), qui va nous servir à utiliser simplement des watchdogEvent pour mettre en sommeil l'arduino lorsqu'il n'est pas utilisé, et ainsi économiser de la batterie.

Pour importer les librairies, téléchargez-les ( sur github faites "Download zip" à droite ), puis placez le dossier ( en le renommant sans le "-master" de github ) dans "Documents/arduino/libraries", puis relancez votre logiciel arduino, elles seront importées automatiquement.

Le programme pour l'arduino de cet objet connecté est disponible en téléchargement [ici](https://gist.github.com/gladysassistant/b0a1d6f24d266437b87e).  
Pensez bien avant de charger le code sur l'arduino de bien modifier le type de carte ( Outils => type de carte => Arduino Nano Atmega 328 ), puis chargez le code sur la carte !

Ici, le code fait tout simplement deux choses : lorsque l'objet est posé à l'endroit, il envoit le signal "2" en 433Mhz, et lorsqu'il est posé à l'envers, le signal "1" ( seulement lors des changements de sens, et pas en continu ). Pour expliquer en détail le programme, l'arduino vérifie le sens du capteur, si il y a changement de sens il émet un signal, puis il dort pour 2 secondes, et ainsi de suite.

## Autonomie de l'objet

Pour que l'objet soit utilisable, il faut que son autonomie soit correct, il est ridicule de changer la pile toutes les semaines!

J'ai donc mesuré la consommation du montage, lors du sommeil de la carte. Malgré l'utilisation de Watchdog, l'appareil consomme encore 6mAH en sommeil, ce qui est beaucoup trop ici pour être utilisé au quotidien. Si l'on a une pile 9V de 1000mAH, cela fait une autonomie d'environ 1000/6 = 166H = 6,9 jours.

Cette consommation élevée est dû à la carte Arduino Nano qui consomme beaucoup ( sûrement à cause de sa LED allumée en permanence ). Pour palier à ça, j'ai commandé et reçu un Atmega 328 nu (ainsi que tout le matériel pour remplacer l'arduino), j'essaierais par la suite de faire le même montage avec, pour voir si la consommation pourrait être réduite. Sinon, l'erreur est peut-être logiciel, je testerais d'autres librairies ! ( Si vous avez des tuyaux en matière d'économies d'énergies sur arduino je suis preneur ).

## Récupérer le signal depuis Gladys

La récupération du signal depuis Gladys est automatique, c'est les mêmes signaux que les détecteurs de mouvements sans-fil. A vous de donner les codes que vous souhaitez à votre objet connecté ( le numéro qu'il émet ), puis de les traiter derrière une fois reçue dans Gladys.

## Conclusion

Nous avons assez rapidement créé notre propre objet connecté. Sur une breadbord, le rendu prend certes un peu de place, mais en compressant le tout, utilisant un Atmega nu, et créant une petite boite, je pense que l'on peut arriver à un tout petit appareil intégrable facilement sur n'importe quel objet. On pourrait remplacer le 433Mhz par du 2,4Ghz, qui à l'avantage d'avoir plus de portée, ou par du bluetooth pour faire des interactions avec un smartphone ou une tablette, mais j'ai voulu ici montrer un exemple simple et qui fonctionnait déjà de base avec Gladys.

Comme toujours n'hésitez pas si vous avez des questions ou des remarques, et si l'article vous a plus partagez-le, c'est toujours un plaisir d'avoir des réactions, des conseils, des améliorations de pleins de gens !
