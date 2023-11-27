---
id: hardware
title: Maison connectée - Le guide ultime pour commencer
sidebar_label: Le guide ultime pour commencer
slug: /
---

Il est compliqué de savoir où commencer quand on débute en domotique. Quel matériel choisir ? Pour quel budget ? Quel protocole domotique mettre en place ?

Je vous propose ce tutoriel pour évoquer tous ces points ensemble et vous donner un point d’entrée pour créer votre maison connectée de zéro.

## Définir son projet de maison connectée

Le plus important est de définir les automatisations que vous voulez mettre en place à la maison : des lumières connectées ? Une alarme pour sécuriser la maison ? Faire des économies d’énergies en coupant les appareils inutilisés / le chauffage ?

J’aime personnellement faire un tableau (sur Excel, Google Sheet, ou Notion) découpé par pièce où je liste tous les appareils que j’ai envie de mettre.

![Tableau Notion Maison connectée](../../../../../static/img/docs/fr/installation/guide/notion-table-connected.png)

Par exemple:

**Salon**

| Nom                                            | Prix   | Lien                                                                                                                                                                   |
| ---------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Capteur ouverture/fenêtre Zigbee Sonoff        | 10,06€ | [Domadoo](https://www.domadoo.fr/fr/peripheriques/5320-sonoff-capteur-d-ouverture-de-portefenetre-zigbee-30-snzb-04-6920075776126.html?domid=17)                       |
| Capteur température/humidité Zigbee avec écran | 10,91€ | [Domadoo](https://www.domadoo.fr/fr/peripheriques/6614-sonoff-capteur-de-temperature-et-d-humidite-zigbee-30-avec-ecran.html?domid=17)                                 |
| Module volet roulant Zigbee                    | 39,92€ | [Domadoo](https://www.domadoo.fr/fr/peripheriques/5245-sunricher-module-volet-roulant-zigbee-30.html?domid=17)                                                         |
| Prise connectée pour télé avec consommation    | 16,99€ | [Domadoo](https://www.domadoo.fr/fr/peripheriques/6165-nous-prise-intelligente-zigbee-30-mesure-de-consommation-5907772033517.html?domid=17)                           |
| Ampoule IKEA Tradfi E27 couleur (plafonnier)   | 17,99€ | [IKEA](https://www.ikea.com/fr/fr/p/tradfri-ampoule-led-e27-806-lumen-connecte-sans-fil-a-variateur-dintensite-spectre-couleur-et-blanc-globe-70439158/)               |
| Télécommande IKEA STYRBAR (luminosité/couleur) | 9,99€  | [IKEA](https://www.ikea.com/fr/fr/p/styrbar-telecommande-connecte-blanc-30488363/)                                                                                     |
| Détecteur mouvement Zigbee Aqara P1            | 24,99€ | [Domadoo](https://www.domadoo.fr/fr/peripheriques/6138-aqara-detecteur-de-mouvement-et-luminosite-zigbee-30-aqara-motion-sensor-p1-ms-s02-6970504215979.html?domid=17) |

L’idée n’est pas forcément de se dire “Je vais mettre 300€ tout de suite pour tout couvrir”, mais plutôt d’organiser votre plan et ensuite d’équiper progressivement votre maison (sauf si vous venez d’emménager et que vous voulez équiper votre maison d’un coup)

## Choisir sa box domotique

Gladys Assistant est logiciel “auto-hébergé” ce qui signifie que tout tournera en local chez vous sur une box domotique.

C’est la force de Gladys !

Gladys tourne sur n’importe quel mini-PC sous Linux :

| Modèle                               | Prix   | Commentaire                                                                                                                                                                                                                                                                                                                                                                        | Lien                                                                                                                     |
| ------------------------------------ | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| Raspberry Pi 4                       | 56,90€ | La carte la plus connu du marché et le plus abordable. Facile à mettre en place avec notre image Raspberry Pi OS. Attention, utiliser une micro-SD peut présenter des risques sur le long terme (risque de corruption de disque). Peut-être un bon point d’entrée pour commencer sur Gladys pour pas cher !                                                                        | [Kubii](https://www.kubii.com/fr/cartes-raspberry-pi/2771-nouveau-raspberry-pi-4-modele-b-2gb-3272496308794.html?gladys) |
| Khadas VIM1S                         | 65,99€ | Une carte avec un stockage eMMC intégré. 2GB RAM / 16GB de stockage. Installation d’Ubuntu Server via leur BIOS personnalisé puis installation de Gladys en CLI avec Docker.                                                                                                                                                                                                       | [Amazon](https://amzn.to/3suD6Z3)                                                                                        |
| Beelink Mini S12 Pro                 | 185€   | Un mini-PC surpuissant: Quad Core Intel 12ème génération à basse consommation, 8/16GB de RAM, 256/512GB de SSD NVMe. Extrêmement stable sur le long terme, et très performant. Peu de bidouille à faire (c’est tout intégré dans un boitier, et alimentation fournie). Pour l’utiliser, installation d’Ubuntu Server via une clé USB bootable + installation de Gladys via Docker. | [Amazon](https://amzn.to/49RNnPI)                                                                                        |
| N’importe quel serveur, NAS, mini-PC |        | Tu as un NAS Synology ? Un Intel NUC ? N’importe quel serveur Linux, du moment qu’il peut faire tourner Docker, peut faire tourner Gladys. N’hésite pas à venir sur le forum si tu as des questions.                                                                                                                                                                               |                                                                                                                          |

**Note:** Si pour toi cette configuration est compliquée, je réfléchis à lancer une box domotique Gladys ou des kits de démarrages, si ça t’intéresse tu peux t’inscrire ici : [https://forms.gle/K3MfkaFp6eXTMdb2A](https://forms.gle/K3MfkaFp6eXTMdb2A)

## Installation de Gladys Assistant

Suivant la box que vous avez choisi, il faudra soit utiliser:

- Notre image Raspberry Pi OS: [Installation sur Raspberry Pi](/fr/docs/installation/raspberry-pi/)
- Notre [tutoriel d'installation via Docker](/fr/docs/installation/docker/)

## Configuration de votre maison connectée

Une fois que Gladys tourne chez vous, vous allez pouvoir y accéder via votre navigateur web et la configuration de votre maison.

![Configuration maison](../../../../../static/img/docs/fr/installation/guide/welcome-gladys.png)

Il vous suffit ici de suivre les étapes.

Nous allons d’abord créer le compte de l’administrateur principal de votre maison connectée:

![Créer compte local](../../../../../static/img/docs/fr/installation/guide/create-local-account.png)

Ensuite, Gladys vous demande quelques préférences :

![Créer compte local](../../../../../static/img/docs/fr/installation/guide/preferences.png)

Enfin, vous pouvez nommer votre maison:

![Créer maison](../../../../../static/img/docs/fr/installation/guide/configure-house.png)

Voilà ! Tun as maintenant un système de maison connecté Gladys chez toi.

Tu peux maintenant mettre en place les différentes intégrations présentes dans Gladys.

Si tu as des questions, rejoins-nous dès maintenant [sur le forum](https://community.gladysassistant.com/) !
