---
id: docker
title: Docker
sidebar_label: Docker
---

## Sur Raspberry Pi

Ce tutoriel vous explique comment installer Gladys avec Docker sur Raspberry Pi.

### Installer Docker sur Raspberry Pi

```bash
curl -sSL https://get.docker.com | sh
sudo usermod -aG docker pi
```

Ensuite, fermez votre session SSH puis reconnectez vous à votre Raspberry Pi.

### Lancer Gladys

Si vous avez déjà lancé l'alpha auparavant, pensez à supprimer votre dossier `/var/lib/gladysassistant`, car nous avons fais des modifications à ce niveau entre l'alpha et la beta. Attention: vous perdrez les données de l'alpha!

Pour lancer Gladys, exécutez la commande suivante sur votre Raspberry Pi:

```bash
docker run -d \
--log-opt max-size=10m \
--restart=always \
--privileged \
--network=host \
--name gladys \
-e NODE_ENV=production \
-e SERVER_PORT=80 \
-e TZ=Europe/Paris \
-e SQLITE_FILE_PATH=/var/lib/gladysassistant/gladys-production.db \
-v /var/run/docker.sock:/var/run/docker.sock \
-v /var/lib/gladysassistant:/var/lib/gladysassistant \
-v /dev:/dev \
gladysassistant/gladys:v4
```

Note:

- `-e TZ=Europe/Paris` => Pour changer le fuseau horaire du container, vous pouvez modifier cette variable. Vous trouverez toutes les valeurs possibles sur [cette list](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

## Mise à jour automatique avec Watchtower

Vous pouvez utiliser Watchtower pour mettre automatiquement Gladys à jour quand une nouvelle version est disponible. Pour cela, lancez le container:

```
docker run -d \
  --name watchtower \
  --restart=always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  containrrr/watchtower \
  --cleanup --include-restarting
```

### Accéder à Gladys

Vous pouvez accéder à Gladys en tapant l'IP de votre Raspberry Pi sur votre navigateur. Pour trouver l'IP de votre Raspberry Pi, vous pouvez utiliser des apps comme ([Network Scanner](https://play.google.com/store/apps/details?id=com.easymobile.lan.scanner&hl=fr) sur Android ou [iNet](https://itunes.apple.com/fr/app/inet-network-scanner/id340793353?mt=8) sur iOS)

## Sur n'importe quel système

Docker s'installe sur n'importe quel système, et vous permet de faire tourner Gladys n'impote où :

- Un NAS Synology
- Une VM Linux
- Un PC Windows
- Sous MacOS
- N'importe où !

### Installer Docker

Je vous conseille de vous rendre sur la [documentation docker](https://docs.docker.com/), et de lire la documentation lié à votre système.

### Lancer Gladys

Pour lancer Gladys, exécutez la commande suivante sur votre Raspberry Pi:

```bash
docker run -d \
--log-opt max-size=10m \
--restart=always \
--privileged \
--network=host \
--name gladys \
-e NODE_ENV=production \
-e SERVER_PORT=80 \
-e TZ=Europe/Paris \
-e SQLITE_FILE_PATH=/var/lib/gladysassistant/gladys-production.db \
-v /var/run/docker.sock:/var/run/docker.sock \
-v /var/lib/gladysassistant:/var/lib/gladysassistant \
-v /dev:/dev \
gladysassistant/gladys:v4
```

Vous pouvez adapter dans la commande les ports exposés suivant votre système.

Le `--network=host` n'est pas forcément adapté à tous les systèmes, il ne fonctionne pas sous MacOS ou Windows par exemple.
