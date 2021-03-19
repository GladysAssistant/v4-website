---
title: La shopping list de Gladys pour un Noël connecté !
description: J'espère que votre lettre au père Noël est pleine de Raspberry Pi et d'Arduinos ! ;) Petit tour d'horizon de ce qui est nécessaire pour commencer avec Gladys
author: Pierre-Gilles Leymarie
author_title: Fondateur de Gladys Assistant
author_url: https://twitter.com/pierregillesl
author_image_url: /fr/img/pierre-gilles.jpg

image: /img/presentation/noel-2015-cover.jpg

slug: shopping-list-gladys-noel-2015
---

Salut à tous ! Noël approche, j'espère que votre liste de cadeaux est pleine d'Arduinos, de Raspberry Pi et de gadgets pour vous et votre Gladys !
Si certains d'entre vous hésite encore à se lancer dans l'aventure Gladys, c'est peut-être l'occasion de s'équiper :) Voilà une petite shopping list de Noël spécial Gladys !

<!--truncate-->

## Le kit de base

Pour commencer avec Gladys, la seule chose qui vous faudra est un Raspberry Pi 2 ( avec le matériel pour le faire fonctionner bien entendu )

Pour cela, rien ne vaut un [kit de démarrage Raspberry Pi 2 ( 66€ )](https://amzn.to/30A9CH9) avec tout le nécessaire à l'intérieur ( 1 Raspberry Pi 2 + une carte micro SD classe 10 + une alimentation 2A + un boitier )

![Raspberry Pi Kit complet](../../../static/img/articles/fr/noel-2015/raspberry-kit.jpg)

Si vous voulez acheter tout séparement, il y a néanmoins quelques points à respecter :

- La carte micro SD doit être une classe 10, de nos jours ça ne coûte vraiment plus rien, la vitesse de votre Raspberry Pi et de Gladys dépendra de la vitesse de votre carte. En effet, si la carte est mauvaise, le démarrage de Raspbian et de Gladys sera plus lent, les requêtes SQL seront plus lentes, les mises à jour plus lentes, etc... Je vous conseille [ce modèle à 8€](http://amzn.to/1ISpZO6).
- Le Raspberry Pi doit être impérativement un Raspberry Pi 2, ne vous faites pas avoir en achetant un B ou un B+ maintenant dépassés ! Le nouveau Raspberry Pi 2 intègre 1go de RAM et un processeur Quad Core, ça serait dommage de s'en priver :) Vous pouvez le trouver [ici](http://amzn.to/1TAv3gO).
- L'alimentation doit être une 5V 2A. Faites attention, parfois l'alimentation n'est pas une 2A. Ca n'empêchera pas le Raspberry Pi de booter, mais vous risquez d'avoir des problèmes d'alimentation des ports USB ou des ports GPIOs si vous branchez plein de matériel. Par exemple [celle-ci](http://amzn.to/1Ogs1Jy) fera l'affaire.

## Du NFC pour communiquer avec Gladys

Vous voulez intéragir avec Gladys pour pas cher ? Avec quelques tags NFC collés un peu partout dans la maison, on peut déclencher des actions lorsqu'on rentre, lorsqu'on se couche, lorsqu'on regarde un film, les possibilités sont toujours infinies !

J'avais écris un tutoriel sur le sujet [ici](/fr/blog/gladys-and-nfc).

Vous trouverez les tags NFC [pour 4€ ici](http://amzn.to/1QQCbmU) !

![Tags NFC](../../../static/img/articles/fr/noel-2015/nfc-cover.jpg)

## Des ampoules connectées

J'avais parlé des ampoules connectées Mi-Light ( [ici](/fr/blog/controler-des-ampoules-connectees) ), un équivalent low-cost des Philips Hue. Elles ont l'avantage d'être multicolores, Wi-Fi, et avec une API très facile à utiliser. Je m'en sers au quotidien depuis pas mal de temps, et toujours rien à redire tout fonctionne parfaitement.

Vous trouverez les ampoules Mi-Light [pour 35€ ici](http://amzn.to/1gsN0PX), et le pont Wi-Fi [pour 18€ ici](http://amzn.to/1Ogrwzf).

![Milight Lamps](../../../static/img/articles/fr/noel-2015/milight_products_light.jpg)

## Commencer avec un Arduino

Si vous n'avez jamais manipulé d'arduino, un seul conseil : lancez vous! Je crois que j'en ai au moins une dizaine chez moi.. Sans compter les multiples cartes type esp8266 ( un module Wi-Fi ).

Le but de l'Arduino est très différent de celui du Raspberry Pi. L'objectif est d'avoir une carte qui consomme très peu ( et peu donc fonctionner sur batterie/pile ), et qui peut être connectée à une multitude de capteurs, mais aussi de moteurs, de cartes sans-fil ( Wi-Fi, Bluetooth, 433Mhz, 2,4Ghz, GSM, GPS ). Les possiblités sont un peu infinis ! L'Arduino se programme ensuite en C depuis un IDE gratuit et plutôt bien fait. Chaque capteur a sa librairie C qu'il suffit d'importer dans l'IDE pour se servir du capteur.

Pour commencer, je vous conseille d'acheter un Arduino Uno, bon point de départ en général pour bidouiller :) ( Pour 18€ [ici](http://amzn.to/1Dx5l3w) )

( Pour ceux qui veulent un arduino moins cher, il y a l'Arduino Nano assez équivalent au Uno, qu'on peut trouver pour 3/4€ [ici](http://amzn.to/1M82tlv) )

Si vous voulez vous amuser et faire une station météo comme dans [mon dernier tutoriel](/fr/blog/temperature-ethernet), il vous faudra en plus de l'Arduino une [ethernet shield](http://amzn.to/1lRuhjQ) et un [capteur température/humidité DHT11](http://www.gearbest.com/development-boards/pp_45175.html)

Après l'arduino peut vous servir à tout et n'importe quoi, il y a un paquets de tutoriels sur internet pour à peu prêt tout !

![Arduino Ethernet shield](../../../static/img/articles/fr/noel-2015/temperature-ethernet-cover.jpg)

## Des capteurs de mouvements

J'en avais parlé dans deux tutoriels, d'abord en écoutant les signaux 433Mhz depuis le Raspberry Pi, puis depuis un arduino pour alléger le CPU du Rpi. Le premier tutoriel peut être trouvé [ici](/fr/blog/utiliser-des-detecteurs-sans-fils), et le deuxième [ici](/fr/blog/connecter-un-arduino-au-raspberry-pi).

Pour vous équiper en capteurs de mouvements sans-fil, vous aurez besoin :

- Un décteur de mouvement sans-fil [pour 7€ ici](http://amzn.to/1gsNKor)
- Un récepteur 433Mhz [pour 3€ ici](http://amzn.to/1CRv0Jn)
- Un arduino Uno ou Nano

## Mes coups de coeurs

Pour finir, petite catégorie un peu fourre tout avec un peu tout et n'importe quoi, même des produits sans lien avec Gladys mais qui m'ont particulièrement plu :D

- [Xiaomi Mi-band](http://amzn.to/1OgvKqI) : Un bracelet connecté sympa que j'ai offert à mon père et que j'ai pu tester en profondeur ! L'avantage, c'est qu'il ne coûte pas cher (16€) et que la batterie dure 2 mois. Après il remonte surtout votre activité physique dans la journée, vous réveille en vibrant le matin, mais ne fait pas grand chose d'autres.
- [Wemo Insight Switch](http://amzn.to/1CG0WQr) : Des prises connectées Wi-Fi avec contrôle de la consommation. Elles fonctionnent plutôt pas mal, j'avais fais [un tutoriel](/fr/blog/controler-prises-wemo-insight-switch) dessus ! La seule reproche que je pourrais faire c'est que l'application n'est pas toujours hyper fluide, mais bon on passe pas notre vie dessus non plus.
- [Les géants du web - Octo Technology](http://amzn.to/1PWaWuB) : Un bouquin qui m'a pas mal plu sur les pratiques des grands acteurs du web d'aujourd'hui (Facebook, Google, Amazon) et les solutions techniques qu'ils ont mis en place pour marcher si bien avec autant d'utilisateurs ( ça parle déploiement continue, devOps, design for failure, feature flipping, sharding horizontal ). Je conseille !

## Ce que j'ai commandé moi

Je lis pas mal en ce moment tout ce qui est Lean Startup/GrowthHacking, du coup j'ai commandé pas mal de bouquins sur le sujet ! Voilà globalement ma liste de livres pour Noël si ça vous intéresse :)

- [ Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future](http://amzn.to/1OgxvEk)
- [Traction: How Any Startup Can Achieve Explosive Customer Growth](http://amzn.to/1OgxKz3)
- [Zero to One: Notes on Start Ups, or How to Build the Future](http://amzn.to/1OgxDUm)
- [Hooked: How to Build Habit-Forming Products](http://amzn.to/1OgxC2K)

## Conclusion

J'espère que ce billet un peu différent vous aura plu, c'est vrai que je suis pas toujours très clair sur ce qu'il faut avoir comme matos pour Gladys, ce qu'il faut pour commencer, pour aller plus loin. J'espère avoir clarifié certains points et vous avoir fait découvrir quelques bouquins sympas !

N'hésitez pas à dire ce que vous avez acheté pour Noël en commentaire ! :)
