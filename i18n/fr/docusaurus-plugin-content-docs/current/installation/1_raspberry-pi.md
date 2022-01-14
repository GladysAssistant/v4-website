---
id: raspberry-pi
title: Installer Gladys Assistant sur un Raspberry Pi
sidebar_label: Raspberry Pi
slug: /
---

Ce tutoriel vous explique comment installer Gladys sur Raspberry Pi !

Si vous avez un Raspberry Pi qui est déjà configuré (vous avez déjà installé Raspberry Pi OS), il est possible d'installer Gladys manuellement avec Docker [sur ce tutoriel](/fr/docs/installation/docker).

<div class="videoContainer">
<iframe class="video" src="https://www.youtube.com/embed/yWAX-NAxjZQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Télécharger l'image Raspberry Pi OS

Nous mettons à disposition une image Raspberry Pi OS toute prête, à télécharger ici :

<a class="button button--primary margin-bottom--md" href="https://gladysassistant.com/download/latest" rel="nofollow">Cliquez-ici pour télécharger Gladys Assistant Raspberry Pi OS rev5</a>

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
