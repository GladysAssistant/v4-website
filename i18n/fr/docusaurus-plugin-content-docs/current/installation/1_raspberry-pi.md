---
id: raspberry-pi
title: Raspberry Pi
sidebar_label: Raspberry Pi
slug: /
---

Ce tutoriel vous explique comment installer Gladys sur Raspberry Pi !

<div class="videoContainer">
<iframe class="video" src="https://www.youtube.com/embed/yWAX-NAxjZQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Télécharger l'image Raspbian

Nous mettons à disposition une image Raspbian toute prête : <a href="https://gladysassistant.com/download/latest">Télécharger Gladys Assistant Raspberry Pi OS latest rev5</a>.

L'image Raspbian est compressée dans un fichier zip, que vous devez dézipper afin d'arriver à un fichier `.img`.

### Cloner l'image sur une carte SD

Je vous conseille pour cela le super outil [Etcher](https://etcher.io/) (compatible Linux/MacOS/Windows).

Installez Etcher, branchez votre carte SD à votre ordinateur, et clonez le fichier .img sur la carte.

![Etcher](../../../../../static/img/docs/fr/installation/etcher.png)

Débranchez votre carte SD de votre ordinateur et insérez-la dans votre Raspberry Pi.

### Branchez votre Raspberry Pi

Branchez votre Raspberry Pi au réseau et au secteur afin qu'il démarre.

Attendez quelques minutes que le Pi boot et que Gladys démarre.

### Accéder à Gladys

Vous pouvez accéder à Gladys en accédant à `http://gladys.local` sur n'importe quel navigateur sur le réseau.

Si cela ne marche pas, vous pouvez y accéder en tapant l'IP de votre Raspberry Pi sur votre navigateur. Pour trouver l'IP de votre Raspberry Pi, vous pouvez utiliser des apps comme ([Network Scanner](https://play.google.com/store/apps/details?id=com.easymobile.lan.scanner&hl=fr) sur Android ou [iNet](https://itunes.apple.com/fr/app/inet-network-scanner/id340793353?mt=8) sur iOS)
