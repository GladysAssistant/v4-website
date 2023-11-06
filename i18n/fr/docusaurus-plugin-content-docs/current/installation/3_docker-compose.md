---
id: docker-compose
title: Installation avec Docker Compose
sidebar_label: Docker Compose
---

Ce tutoriel vous explique comment installer Gladys manuellement avec Docker Compose, quel que soit la machine sur laquelle vous faites tourner Gladys : Un Raspberry Pi, un NAS Synology, une VM linux, peu importe.

## Requirements

Pour installer Docker Compose, vous devez d'abord installer Docker. Veuillez suivre la documentation [ici](/fr/docs/installation/docker).

### Installer Docker Compose

Vous devez installer Docker Compose v2 comme un plugin Docker. Pour faire cela, vous pouvez suivre la [documentation officielle](https://docs.docker.com/compose/install/#scenario-two-install-the-compose-plugin)

## Copier/Importer le fichier de configuration Gladys Docker Compose

Vous pouvez trouver un exemple de fichier Docker Compose dans notre repository Github : https://raw.githubusercontent.com/GladysAssistant/Gladys/master/docker/docker-compose.yml

Sauvegardez ce fichier dans un répertoire de votre système.

Quelques paramètres que vous pouvez changer :

- `SERVER_PORT: 80` => Vous pouvez changer le port par défaut de l'interface Gladys. 
- `TZ: Europe/Paris` => Pour changer le fuseau horaire du conteneur, vous pouvez modifier cette variable. Vous trouverez toutes les valeurs possibles sur [cette liste](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

## Lancer Gladys Assistant

Pour lancer Gladys (et Watchtower), exécutez la commande suivante :

```bash
docker compose up -d
```

Note:

- `-d` => Cette option permet de lancer les containers de manière détachée. Ainsi, vous pouvez vous déconnecter et les containers continueront d'exister.

## Accéder à Gladys Assistant sur le navigateur

Vous pouvez accéder à Gladys en saisissant l'IP de votre machine sur votre navigateur, vous devez être sur le même réseau que la machine attention !

Pour trouver l'IP de votre machine, si vous êtes sur le même réseau local, vous pouvez utiliser des apps comme ([Network Scanner](https://play.google.com/store/apps/details?id=com.easymobile.lan.scanner&hl=fr) sur Android ou [iNet](https://itunes.apple.com/fr/app/inet-network-scanner/id340793353?mt=8) sur iOS).
