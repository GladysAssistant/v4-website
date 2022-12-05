---
id: raspberry-pi
title: Installation sur un Raspberry Pi
sidebar_label: Raspberry Pi
---

Ce tutoriel vous explique comment installer Gladys sur Raspberry Pi !

Si vous avez un Raspberry Pi qui est déjà configuré (vous avez déjà installé Raspberry Pi OS), il est possible d'installer Gladys manuellement avec Docker [sur ce tutoriel](/fr/docs/installation/docker).

:::note
Avec la pénurie actuelle de Raspberry Pi, une bonne solution de remplacement est d'acheter un mini-PC, comme un Dell OptiPlex 3040, ou un Intel NUC.

Ces mini-PC ont l'avantage d'avoir un SSD intégré nativement, et d'être souvent plus stable niveau alimentation.

On en parle sur [le forum ici](https://community.gladysassistant.com/t/faire-tourner-gladys-sur-un-mac-mini-intel-pas-cher/7617/2?u=pierre-gilles).
:::

## Installation sur une carte micro-SD

Nous proposons 2 façons d'installer Gladys: sur une micro-SD, ou sur un disque externe SSD.

L'installation sur micro-SD est un bon moyen de commencer avec Gladys, mais elle a ses limites sur le long terme car une micro-SD n'est pas conçue pour supporter une telle charge de lecture/écriture et la SD risque d'être corrompue assez vite.

L'installation sur SSD est la façon recommandée d'installer Gladys pour le long terme.

<div class="videoContainer">
<iframe class="video" src="https://www.youtube.com/embed/yWAX-NAxjZQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Télécharger l'image Raspberry Pi OS

Nous mettons à disposition une image Raspberry Pi OS toute prête.

Pour Raspberry Pi 3, 4 et 400 :

<a class="button button--primary margin-bottom--md" href="https://gladysassistant.com/download/latest-64" rel="nofollow" >Télécharger Gladys Assistant OS Bullseye 64 bits</a>

Pour les Raspberry Pi plus anciens ( Raspberry Pi 1, 2 et Zero ) en architecture 32 bits :

<a class="button button--primary margin-bottom--md" href="https://gladysassistant.com/download/latest" rel="nofollow">Télécharger Gladys Assistant OS Bullseye 32 bits</a>

L'image Raspberry Pi OS est compressée dans un fichier zip, que vous devez dézipper afin d'arriver à un fichier `.img`.

### Cloner l'image sur une carte SD

Je vous conseille pour cela le super outil [Etcher](https://www.balena.io/etcher/) (compatible Linux/MacOS/Windows).

Installez Etcher, branchez votre carte SD à votre ordinateur, et clonez le fichier .img sur la carte.

![Etcher](../../../../../static/img/docs/fr/installation/etcher.png)

Débranchez votre carte SD de votre ordinateur et insérez-la dans votre Raspberry Pi.

### Branchez votre Raspberry Pi

Branchez votre Raspberry Pi au réseau et au secteur afin qu'il démarre.

Attendez quelques minutes que le Pi boot et que Gladys démarre.

**Attention :** Cette étape peut prendre un certain temps en fonction de la puissance de votre Raspberry Pi et de la vitesse de votre réseau, car l'image télécharge la dernière version de Gladys lors du premier démarrage.

### Accéder à Gladys

Vous pouvez accéder à Gladys en accédant à `http://gladys.local` sur n'importe quel navigateur sur le réseau.

Si cela ne marche pas, vous pouvez y accéder en tapant l'IP de votre Raspberry Pi sur votre navigateur. Pour trouver l'IP de votre Raspberry Pi, vous pouvez utiliser des apps comme ([Network Scanner](https://play.google.com/store/apps/details?id=com.easymobile.lan.scanner&hl=fr) sur Android ou [iNet](https://itunes.apple.com/fr/app/inet-network-scanner/id340793353?mt=8) sur iOS)

## Installer Gladys sur un SSD

Pour installer Gladys sur un SSD, j'ai fais un tutoriel vidéo assez complet sur le sujet :

<div class="videoContainer" style={{marginBottom: '2rem'}}>
<iframe class="video" src="https://www.youtube.com/embed/Zn7imzI0oYU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

:::warning
Si vous faites tourner Gladys sur un Raspberry Pi avec un disque externe et que vous souhaitez utiliser une clé USB Zigbee avec, votre Raspberry Pi risque d'avoir des problèmes d'alimentation pour alimenter en même temps le disque externe et la clé USB Zigbee.

Nous recommandons d'utiliser un hub USB alimenté de manière externe.
:::
