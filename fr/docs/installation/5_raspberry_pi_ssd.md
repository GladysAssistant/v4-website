---
id: raspberry-pi-ssd
title: Evoluer son Raspberry Pi en bootant sur SSD
sidebar_label: Raspberry Pi Evo - SSD
---

Ce tutoriel vous explique comment récupérer votre installation Gladys sur un disque SSD en bootant votre Raspberry Pi ! Ce dernier n'a pour le moment été testé que sur le matériel ci-dessous. Il est tiré de l'article du site tom's HARDWARE : [How to Boot Raspberry Pi 4 From a USB SSD or Flash Drive](https://www.tomshardware.com/how-to/boot-raspberry-pi-4-usb)
#### Matériel utilisé :
  - Un Raspberry Pi 4 - 4Go,
  - Un SSD [Samsung Portable T5 - 500GB](https://www.amazon.fr/gp/product/B074MCM721/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1),
  - Un SSD [Samsung 860 EVO - 500GB](https://www.amazon.fr/gp/product/B078WQT6S6/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1)   

### Prérequis

- Avoir installé Gladys V4 à l'aide des instructions de l'article [Raspberry Pi](/fr/docs/installation/raspberry-pi),
- Pouvoir réaliser certaines opérations en ligne de commande sur le raspberry pi.

### Mise à jour

xxxxxxx

### Comparatifs de performance (pour vous donner l'envie)

***- Matériel utilisé :***
  - Un Raspberry Pi 4 - 4Go,
  - Une carte micro SD [Samsung Pro Plus Class 10 U3 64Go](https://www.amazon.fr/gp/product/B06XFBGYLW/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1) - après 1 an d'utilisation sur Gladys V4,
  - Une carte micro SD [SanDisk Extreme PLUS Class 10 U3 V30 64Go](https://www.amazon.fr/gp/product/B07FCMWCVB/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1) - après 6 mois d'utilisation sur Gladys V4 (installation "redondante" sans Gladys Plus),
  - Un SSD [Samsung Portable T5 - 500GB](https://www.amazon.fr/gp/product/B074MCM721/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1)
  - Un SSD [Samsung 860 EVO - 500GB](https://www.amazon.fr/gp/product/B078WQT6S6/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1)
  - [Boitier Externe USB POSUGEAR](https://www.amazon.fr/Bo%C3%AEtier-POSUGEAR-Externe-Compatible-Transparente/dp/B077XVTTJC/ref=pd_bxgy_img_2/258-1187749-0337958?tag=gladproj-21) - !! Attention !! Ne fonctionne pas avec le Samsung 860 EVO sur le port USB 3.0 du Pi 4
  - [Boitier Externe UGREEN USB 3.1 Gen 2 Type C](https://www.amazon.fr/gp/product/B07D2BHVBD/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1)

***- Préalable :***
Le test a été effectué avec l'image officielle Gladys V4.0.4 en coupant les container docker à l'allumage et après avoir réaliser les opérations nécessaires pour pouvoir booter sur les ports USB du raspberry pi.

**- Testing SSD :**
  - ***Test SSD Samsung 860 EVO :***
    - *Port USB2 :*
      - Ecriture =  30 à 31 MB/s
      - Lecture =  570 à 620 MB/s
    - *Port USB3.0 :*
      - Ecriture = 190 à 210 MB/s
      - Lecture = 560 à 610 MB/s
      - !! Attention !! Ne tourne pas en USB3.0 avec le boitier cité @pierre-gilles 

[details="En image"]
![Résultat perfs Pi4 4Go - SSD Samsung EVO 860 - USB3|306x500](upload://rr8DuiNvSjFtajVtaB2DIPkAs9N.jpeg) 
[/details]

  - ***Test SSD Samsung Portable T5 :***
    - *Port USB2 :*
      - Ecriture =  30 à 60 MB/s
      - Lecture =  530 à 590 MB/s
    - *Port USB3.0 :*
      - Ecriture =  190 à 220 MB/s
      - Lecture =  300 à 600 MB/s

[details="En image"]
![Résultat perfs Pi4 4Go - SSD Samsung T5 - USB3|469x500](upload://34F7QPtlPF5IoH4pGzjZRa36oaQ.jpeg) 
[/details]

**- Testing Micro SD :**
  - ***Test micro SD Samsung Pro Plus :***
      - Ecriture =  19 à 23 MB/s
      - Lecture =  44 à 46 MB/s
[details="En image"]
![Résultat perfs Pi4 4Go - Micro SD Samsung Pro Plus 64Go|569x500](upload://gsHLdOne26M7CAB03xSnZIt6N75.jpeg) 
[/details]

  - ***Test micro SD SanDisk Extreme PLUS :***
      - Ecriture = 30 à 40 MB/s
      - Lecture = 44 à 46 MB/s
[details="En image"]
![Résultat perfs Pi4 4Go - Micro SD Sandisk Extreme PLUS 64Go|663x499](upload://sR27YudQPATaW9behpvqsxfSwfu.jpeg) 
[/details]