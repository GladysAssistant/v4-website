---
id: raspberry-pi
title: Raspberry Pi
sidebar_label: Raspberry Pi
---

Ce tutoriel vous explique comment installer Gladys sur Raspberry Pi !

<div class="videoContainer">
<iframe class="video" src="https://www.youtube.com/embed/yWAX-NAxjZQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

### Télécharger l'image Raspbian

Nous mettons à disposition une image Raspbian toute prête : <a href="https://cdn.elephantcdn.com/gh/gladysassistant/gladys/releases/download/v4.0.4/gladys-4.0.4-rev4.img.zip">Télécharger Gladys Assistant Raspberry Pi OS v4.0.4-rev4</a>.

L'image Raspbian est compressée dans un fichier zip, que vous devez dézipper afin d'arriver à un fichier `.img`.

### Cloner l'image sur une carte SD

Je vous conseille pour cela le super outil [Etcher](https://etcher.io/) (compatible Linux/MacOS/Windows).

Installez Etcher, branchez votre carte SD à votre ordinateur, et clonez le fichier .img sur la carte.

<img src="/fr/img/docs/installation/etcher.png" alt="Etcher"  />

Débranchez votre carte SD de votre ordinateur et insérez-la dans votre Raspberry Pi.

### Branchez votre Raspberry Pi

Branchez votre Raspberry Pi au réseau et au secteur afin qu'il démarre.

Attendez quelques minutes que le Pi boot et que Gladys démarre.

### Accéder à Gladys

Vous pouvez accéder à Gladys en accédant à `http://gladys.local` sur n'importe quel navigateur sur le réseau.

Si cela ne marche pas, vous pouvez y accéder en tapant l'IP de votre Raspberry Pi sur votre navigateur. Pour trouver l'IP de votre Raspberry Pi, vous pouvez utiliser des apps comme ([Network Scanner](https://play.google.com/store/apps/details?id=com.easymobile.lan.scanner&hl=fr) sur Android ou [iNet](https://itunes.apple.com/fr/app/inet-network-scanner/id340793353?mt=8) sur iOS)
