---
id: docker
title: Installer Gladys avec Docker sur Debian, Ubuntu et plus
description: "Installez Gladys Assistant avec Docker sur Debian, Ubuntu ou n'importe quel système (mini-PC, NAS, serveur Linux, VM) en une seule commande. Gratuit, open-source et auto-hébergé."
sidebar_label: Installation avec Docker
keywords:
  - installer gladys docker
  - installer gladys debian
  - installer gladys ubuntu
  - gladys assistant docker
  - domotique auto-hébergée docker
---

import JsonLd from '@site/src/components/seo/JsonLd';

Ce tutoriel vous explique comment installer Gladys manuellement avec Docker, quelle que soit la machine sur laquelle vous faites fonctionner Gladys. Les étapes sont les mêmes sur Debian et sur Ubuntu.

## Installer Docker

:::tip[Sur Debian, installez d'abord `curl` et `sudo`]
Ubuntu est livré avec `curl` et `sudo`, mais une installation minimale de Debian n'a souvent ni l'un ni l'autre, et les commandes ci-dessous ont besoin des deux. Connectez-vous en root avec `su -`, puis lancez :

```bash
apt update && apt install -y curl sudo
usermod -aG sudo votre-utilisateur
```

Remplacez `votre-utilisateur` par votre nom d'utilisateur, déconnectez-vous puis reconnectez-vous, et continuez ci-dessous. La suite de ce guide est identique sur Debian et sur Ubuntu.
:::

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
-v /run/dbus:/run/dbus:ro \
gladysassistant/gladys:v5
```

**Note :**

- **sudo** : Dépend de votre installation. Si vous êtes sur une installation standard d'Ubuntu Server, Gladys a besoin des droits d'administrateurs et donc d'être en "privileged" pour accéder aux ports USB.

- `-e TZ=Europe/Paris` => Pour changer le fuseau horaire du conteneur, vous pouvez modifier cette variable. Vous trouverez toutes les valeurs possibles sur [cette liste](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

- `-v /var/lib/gladysassistant` : Le dossier de destination où Gladys va stocker toutes ses données. Vous pouvez changer la partie à gauche des ":" pour modifier le dossier de destination.

- `-v /run/dbus:/run/dbus:ro` : Donne à Gladys l'accès au bus système de la machine hôte. C'est ce qui permet de redémarrer ou d'éteindre la machine depuis les paramètres Système, et c'est le prérequis pour le Bluetooth : l'appairage d'un appareil Matter en BLE comme la lecture des capteurs Bluetooth passent par BlueZ, qui n'est joignable que par ce bus. BlueZ doit être installé sur la machine hôte (`sudo apt install bluez` sous Debian et Ubuntu).

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

## Questions fréquentes

### Sur quels systèmes puis-je faire tourner Gladys avec Docker ?

L'installation avec Docker fonctionne sur tout système qui fait tourner Docker : un mini-PC, un NAS (Synology, Unraid), un serveur Linux, un Raspberry Pi ou une machine virtuelle. La même commande lance Gladys sur tous ces systèmes.

### Puis-je installer Gladys sur Debian ou Ubuntu ?

Oui, et les étapes sont les mêmes sur les deux : installez Docker avec le script officiel, puis lancez le conteneur Gladys avec la commande ci-dessus. Toute version de Debian ou d'Ubuntu prise en charge par Docker fonctionne, sur un mini-PC, un serveur ou une machine virtuelle. Sur une installation minimale de Debian, installez d'abord `curl` et `sudo` (voir l'encadré en haut de cette page).

### Gladys ne s'ouvre pas après l'installation : que vérifier ?

1. **Le conteneur tourne-t-il ?** `sudo docker ps` doit afficher `gladys` avec le statut `Up`. S'il n'apparaît pas ou redémarre en boucle, lisez ses logs avec `sudo docker logs gladys --tail=100` (voir [comment télécharger les logs de Gladys](/fr/docs/installation/logs)).
2. **Le port 80 est-il déjà pris ?** Gladys écoute sur le port 80 de la machine. Si un autre serveur web (Apache, Nginx…) l'utilise déjà, Gladys ne peut pas démarrer. Arrêtez ce serveur, ou déplacez Gladys sur un autre port : supprimez le conteneur avec `sudo docker rm -f gladys` (vos données dans `/var/lib/gladysassistant` sont conservées), relancez la [commande d'installation](#lancer-un-container-gladys-assistant) avec `-e SERVER_PORT=8080` **à la place de** `-e SERVER_PORT=80`, puis ouvrez `http://IP-DE-LA-MACHINE:8080`.
3. **Un pare-feu bloque-t-il l'accès ?** Si `ufw` est activé, autorisez le port utilisé par Gladys : `sudo ufw allow 80/tcp` (ou `8080/tcp` si vous l'avez changé).
4. **`gladysassistant.local` ne répond pas ?** Utilisez plutôt l'adresse IP de la machine, comme expliqué [plus haut](#si-gladysassistantlocal-ne-souvre-pas).

### Comment mettre à jour Gladys installée avec Docker ?

Le plus simple est de lancer le conteneur Watchtower présenté ci-dessus. Il surveille les nouvelles images de Gladys et met votre conteneur à jour automatiquement à chaque nouvelle version : vous n'avez rien à faire à la main.

### Puis-je faire tourner Gladys sur un NAS Synology ou Unraid ?

Oui. Tant que votre NAS peut faire tourner des conteneurs Docker, vous pouvez y lancer Gladys avec la même commande. C'est une façon populaire d'auto-héberger Gladys sur du matériel que vous possédez déjà.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Sur quels systèmes puis-je faire tourner Gladys avec Docker ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'installation avec Docker fonctionne sur tout système qui fait tourner Docker : un mini-PC, un NAS (Synology, Unraid), un serveur Linux, un Raspberry Pi ou une machine virtuelle. La même commande lance Gladys sur tous ces systèmes.",
        },
      },
      {
        "@type": "Question",
        name: "Puis-je installer Gladys sur Debian ou Ubuntu ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui, et les étapes sont les mêmes sur les deux : installez Docker avec le script officiel, puis lancez le conteneur Gladys avec la commande ci-dessus. Toute version de Debian ou d'Ubuntu prise en charge par Docker fonctionne, sur un mini-PC, un serveur ou une machine virtuelle. Sur une installation minimale de Debian, installez d'abord curl et sudo (voir l'encadré en haut de cette page).",
        },
      },
      {
        "@type": "Question",
        name: "Gladys ne s'ouvre pas après l'installation : que vérifier ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vérifiez d'abord que le conteneur tourne avec sudo docker ps, et lisez ses logs avec sudo docker logs gladys s'il n'apparaît pas ou redémarre en boucle. Vérifiez ensuite qu'aucun autre serveur web (Apache, Nginx) n'utilise déjà le port 80, ou déplacez Gladys sur un autre port : supprimez le conteneur avec sudo docker rm -f gladys (vos données sont conservées) et relancez la commande d'installation avec -e SERVER_PORT=8080 à la place de -e SERVER_PORT=80. Si le pare-feu ufw est activé, autorisez le port utilisé par Gladys, par exemple sudo ufw allow 80/tcp. Enfin, si gladysassistant.local ne s'ouvre pas, utilisez l'adresse IP de la machine.",
        },
      },
      {
        "@type": "Question",
        name: "Comment mettre à jour Gladys installée avec Docker ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le plus simple est de lancer le conteneur Watchtower présenté ci-dessus. Il surveille les nouvelles images de Gladys et met votre conteneur à jour automatiquement à chaque nouvelle version : vous n'avez rien à faire à la main.",
        },
      },
      {
        "@type": "Question",
        name: "Puis-je faire tourner Gladys sur un NAS Synology ou Unraid ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Oui. Tant que votre NAS peut faire tourner des conteneurs Docker, vous pouvez y lancer Gladys avec la même commande. C'est une façon populaire d'auto-héberger Gladys sur du matériel que vous possédez déjà.",
        },
      },
    ],
  }}
/>
