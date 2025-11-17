---
id: docker
title: Installation avec Docker
sidebar_label: Installation avec Docker
---

Ce tutoriel vous explique comment installer Gladys manuellement avec Docker, quelle que soit la machine sur laquelle vous faites fonctionner Gladys.

## Installer Docker

Si Docker n'est pas encore installé sur votre machine, vous pouvez l'installer en faisant :

```bash
curl -sSL https://get.docker.com | sh
```

Pour vérifier que Docker fonctionne bien, lancez la commande suivante :

```
sudo docker ps
```

Vous devriez voir une liste des conteneurs qui fonctionnent sur la machine. Comme vous venez d'installer Docker, cette liste doit être vide normalement.

Si vous avez un problème lors de l'installation de Docker, je vous conseille de vous rendre sur la [documentation Docker](https://docs.docker.com/) et de lire la documentation liée à votre système.

## Lancer un container Gladys Assistant

Pour lancer Gladys, exécutez la commande suivante :

```bash
sudo docker run -d \
--log-driver json-file \
--log-opt max-size=10m \
--cgroupns=host \
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
-v /run/udev:/run/udev:ro \
gladysassistant/gladys:v4
```

**Note :**

- **sudo** : Dépend de votre installation. Si vous êtes sur une installation standard d'Ubuntu Server, Gladys a besoin des droits d'administrateurs et donc d'être en "privileged" pour accéder aux ports USB.

- `-e TZ=Europe/Paris` => Pour changer le fuseau horaire du conteneur, vous pouvez modifier cette variable. Vous trouverez toutes les valeurs possibles sur [cette liste](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

- `-v /var/lib/gladysassistant` : Le dossier de destination où Gladys va stocker toutes ses données. Vous pouvez changer la partie à gauche des ":" pour modifier le dossier de destination.

- Cette image a été buildée pour toutes les architectures connues du marché. Vous pouvez donc lancer cette commande que vous soyez sur un Raspberry Pi, sur un NAS Synology, sur une VM Ubuntu, etc... Tout est possible !

- Le `--network=host` n'est pas forcément adapté à tous les systèmes, il ne fonctionne pas sous MacOS ou Windows par exemple.

## Mise à jour automatique avec Watchtower

Vous pouvez utiliser Watchtower pour mettre automatiquement Gladys à jour quand une nouvelle version est disponible. Pour cela, lancez le conteneur :

```bash
sudo docker run -d \
  --name watchtower \
  --restart=always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  nickfedor/watchtower \
  --cleanup --include-restarting
```

## Accéder à Gladys Assistant sur le navigateur

Vous pouvez accéder à Gladys en saisissant l'IP de votre machine sur votre navigateur, vous devez être sur le même réseau que la machine attention !

Pour trouver l'IP de votre machine, si vous êtes sur le même réseau local, vous pouvez utiliser des apps comme ([Network Scanner](https://play.google.com/store/apps/details?id=com.easymobile.lan.scanner&hl=fr) sur Android ou [iNet](https://itunes.apple.com/fr/app/inet-network-scanner/id340793353?mt=8) sur iOS).
