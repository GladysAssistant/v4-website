---
id: raspberry-pi
title: Raspberry Pi
sidebar_label: Raspberry Pi
---

Ce tutoriel vous explique comment installer Gladys sur Raspberry Pi !

### Télécharger l'image Raspbian

Nous mettons à disposition une image Raspbian toute prête.

<p>
<a class="button button--outline button--primary" href="https://mirror-fr-2.gladysassistant.com/releases/gladys-4.0.0-beta-raspbian-buster.img.zip">Télécharger Gladys Raspbian Buster 4.0.0 Beta</a>
</p>

L'image Raspbian est compressée dans un fichier zip, que vous devez dézipper afin d'arriver à un fichier `.img`.

### Cloner l'image sur une carte SD

Je vous conseille pour cela le super outil [Etcher](https://etcher.io/) (compatible Linux/MacOS/Windows).

Installez Etcher, branchez votre carte SD à votre ordinateur, et clonez le fichier .img sur la carte.

<img src="/fr/img/docs/installation/etcher.png" alt="Etcher" class="img-responsive" />

### Branchez votre Raspberry Pi

Branchez votre Raspberry Pi au réseau et au secteur afin qu'il démarre.

Attendez quelques minutes que le Pi boot et que Gladys démarre.

### Accéder à Gladys

Vous pouvez accéder à Gladys en accédant à [http://gladys.local](http://gladys.local) sur n'importe quel navigateur sur le réseau.

Si cela ne marche pas, vous pouvez y accéder en tapant l'IP de votre Raspberry Pi sur votre navigateur. Pour trouver l'IP de votre Raspberry Pi, vous pouvez utiliser des apps comme ([Network Scanner](https://play.google.com/store/apps/details?id=com.easymobile.lan.scanner&hl=fr) sur Android ou [iNet](https://itunes.apple.com/fr/app/inet-network-scanner/id340793353?mt=8) sur iOS)
