---
title: "Nouvelle image Raspberry Pi + un tutoriel d'installation pas à pas"
description: "Une nouvelle image Raspberry Pi (Pi 3/4/5) est disponible dans Raspberry Pi Imager, avec un tout nouveau tutoriel d'installation pas à pas pour Gladys."
authors: pierregilles
image: /img/presentation/new-raspberry-pi-image-fr.jpg
slug: new-raspberry-pi-image
---

Salut à tous,

J'ai publié une **nouvelle image Gladys pour Raspberry Pi**, compatible avec les Pi 3, 4 et 5.

{/* truncate */}

Cette image est basée sur Raspberry Pi OS Trixie (Debian 13), en 64 bits. Elle est disponible directement dans Raspberry Pi Imager, dans la catégorie *Home automation*.

![Gladys dans Raspberry Pi Imager](../../../static/img/articles/new-raspberry-pi-image/01.jpg)

Pour l'occasion, j'ai aussi réécrit le tutoriel d'installation sur le site, avec toutes les étapes illustrées pas à pas :

👉 [Installer Gladys sur un Raspberry Pi](/fr/docs/installation/raspberry-pi/)

## Mon avis sur le Raspberry Pi

Je le dis franchement : je ne pense toujours pas que le Raspberry Pi soit la meilleure option sur le long terme — un mini-PC reste plus performant et plus fiable pour une installation quotidienne. Je déconseille aussi fortement l'utilisation d'une carte micro-SD : en pratique, la corruption des données arrive souvent au bout de quelques mois. Si vous partez sur un Pi, prévoyez plutôt un SSD NVMe.

Mais pour des utilisateurs qui ont déjà un Pi sous la main, c'est une excellente façon de découvrir Gladys sans se prendre la tête avec Docker ou la ligne de commande 🙂

## La suite

Je continue à mettre un gros focus sur la distribution et à chercher des moyens de rendre Gladys plus facile à installer, quel que soit le matériel que vous avez. L'objectif, c'est que le plus grand nombre puisse essayer Gladys et se faire sa propre opinion.

J'essaie de travailler sur une image « Ubuntu + Gladys » qui permettrait d'installer Gladys sur un mini-PC avec moins d'étapes qu'une installation Ubuntu classique. Si vous avez des idées pour rendre Gladys plus accessible et plus facile à installer, je suis preneur !

Le repo : [raspberry-pi-os-gladys](https://github.com/GladysAssistant/raspberry-pi-os-gladys)
