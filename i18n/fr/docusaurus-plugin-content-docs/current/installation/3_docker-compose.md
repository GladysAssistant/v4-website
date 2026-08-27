---
id: docker-compose
title: Installer Gladys Assistant avec Docker Compose
description: "Installez Gladys Assistant manuellement avec Docker Compose sur un mini-PC, un NAS Synology, une VM Linux ou toute machine équipée de Docker."
sidebar_label: Installation avec Docker-Compose
---

Ce tutoriel vous explique comment installer Gladys manuellement avec Docker Compose, quelle que soit la machine sur laquelle vous faites tourner Gladys : Un mini-PC, un NAS Synology, une VM linux, peu importe.

## Prérequis

Pour installer Docker Compose, vous devez juste installer Docker :

```bash
curl -sSL https://get.docker.com | sh
```

Si vous voulez vérifier que docker compose est bien actif sur votre système, tapez :

```bash
sudo docker compose version
```

Dans mon cas, je vois bien affiché :

```bash
gladys@gladys:~$ docker compose version
Docker Compose version v2.24.5
```

## Créer le fichier de configuration Docker Compose

Ecrivez le texte suivant dans le fichier `gladys-compose.yml`.
```yaml
services:
  gladys:
    image: gladysassistant/gladys:v5
    container_name: gladys
    restart: always
    privileged: true
    network_mode: host
    cgroup: host
    logging:
      driver: "json-file"
      options:
        max-size: 10m
    environment:
      NODE_ENV: production
      SQLITE_FILE_PATH: /var/lib/gladysassistant/gladys-production.db
      SERVER_PORT: 80
      TZ: Europe/Paris
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - /var/lib/gladysassistant:/var/lib/gladysassistant
      - /dev:/dev
      - /run/udev:/run/udev:ro
      # Bus système de l'hôte : redémarrage/extinction depuis les paramètres
      # Système, et prérequis du Bluetooth (appairage Matter en BLE, capteurs)
      - /run/dbus:/run/dbus:ro
  watchtower:
    image: nickfedor/watchtower
    restart: always
    container_name: watchtower
    command: --cleanup --include-restarting
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
```

Sauvegardez ce fichier dans un répertoire de votre système.

## Configurer Gladys Assistant

Quelques paramètres que vous pouvez personnaliser :

- `SERVER_PORT: 80` → Vous pouvez modifier le port par défaut de l'interface Gladys.
- `TZ: Europe/Paris` → Pour modifier le fuseau horaire du conteneur. Vous trouverez toutes les valeurs possibles dans [cette liste](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

## Lancer Gladys Assistant

Pour lancer Gladys (et Watchtower), exécutez la commande suivante :

```bash
sudo docker compose -f gladys-compose.yml up -d
```

Note:

- `-d` => Cette option permet de lancer les containers de manière détachée. Ainsi, vous pouvez vous déconnecter et les containers continueront d'exister.

## Accéder à Gladys Assistant

Ouvrez **`http://gladysassistant.local`** dans votre navigateur. Gladys annonce ce nom sur votre réseau local en mDNS : vous y accédez depuis n'importe quel appareil du même réseau, sans jamais chercher d'adresse IP.

:::note
Vous devez être sur le même réseau que la machine.
:::

Si vous faites tourner plusieurs Gladys chez vous, vous pouvez renommer chacune depuis **Paramètres → Système → Adresse locale (mDNS)**. Le changement est appliqué immédiatement, sans redémarrage.

### Si `gladysassistant.local` ne s'ouvre pas

Le mDNS est intégré à macOS, iOS et Windows 10 et suivants, et fonctionne sur la plupart des réseaux domestiques. Quelques cas résistent encore : certaines versions d'Android, les réseaux invités, et les box dont l'isolation des clients est activée. Gladys ne s'annonce par ailleurs que lorsqu'elle tourne sur le réseau de l'hôte, ce que fait la commande ci-dessus.

Dans ce cas, saisissez plutôt l'IP de votre machine dans votre navigateur. Pour la trouver sur votre réseau local, vous pouvez utiliser des applications comme :

- [Network Scanner](https://play.google.com/store/apps/details?id=com.easymobile.lan.scanner&hl=fr) sur Android
- [iNet](https://itunes.apple.com/fr/app/inet-network-scanner/id340793353?mt=8) sur iOS
