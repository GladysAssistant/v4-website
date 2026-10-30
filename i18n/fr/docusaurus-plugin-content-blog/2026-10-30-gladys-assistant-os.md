---
title: "Gladys Assistant OS : installez Gladys sur un mini-PC depuis une clé USB"
description: "Gladys Assistant OS est le nouvel installeur officiel de Gladys pour mini-PC : écrivez-le sur une clé USB, démarrez votre mini-PC dessus, répondez à quelques questions, et Gladys s'installe toute seule, mises à jour automatiques comprises. Aucune ligne de commande."
authors: pierregilles
image: /img/presentation/gladys-assistant-os-fr.jpg
slug: gladys-assistant-os
---

Salut à tous,

Je sors aujourd'hui **Gladys Assistant OS**, la nouvelle façon officielle d'installer Gladys sur un mini-PC 🎉

{/* truncate */}

L'idée est simple : vous écrivez Gladys Assistant OS sur une clé USB, vous démarrez votre mini-PC dessus, vous répondez à quelques questions, et Gladys s'installe toute seule. Pas de ligne de commande, pas de commande Docker à copier-coller.

![Le menu de démarrage de Gladys Assistant OS](../../../static/img/articles/gladys-assistant-os/grub-menu.png)

👉 [Installer Gladys sur un mini-PC avec Gladys Assistant OS](/fr/docs/installation/mini-pc/)

## Pourquoi un installeur ?

Quand j'ai sorti la [nouvelle image Raspberry Pi](/fr/blog/new-raspberry-pi-image/) en juin, je vous avais dit que je travaillais sur une image « Ubuntu + Gladys » pour mini-PC. La voilà !

Jusqu'ici, installer Gladys sur un mini-PC voulait dire installer Ubuntu Server soi-même (sans oublier de cocher la case OpenSSH), se connecter en SSH, installer Docker, copier une longue commande `docker run`, puis mettre en place Watchtower pour les mises à jour. Rien d'impossible, mais beaucoup d'étapes, et beaucoup d'entre vous restaient bloqués sur l'une d'elles.

Le mini-PC est l'installation que je recommande pour une maison connectée sur le long terme : il méritait une installation aussi simple que sur le Raspberry Pi.

## Ce que fait Gladys Assistant OS

Sous le capot, Gladys Assistant OS est un **Ubuntu Server 26.04 LTS** standard, préparé pour Gladys :

- L'installeur ne vous demande que votre **langue**, votre **clavier** et votre **compte**. Avec un seul disque, il n'y a même pas de disque à choisir.
- Au premier démarrage, il installe **Docker**, télécharge la **dernière version de Gladys** et la lance. Vous suivez la progression sur l'écran du mini-PC, ou depuis votre téléphone à l'adresse qu'il affiche.
- **Gladys se met à jour toute seule** dès qu'une nouvelle version sort, et Ubuntu installe automatiquement ses **mises à jour de sécurité**.
- Il détecte votre **fuseau horaire**, et Gladys est accessible à l'adresse **`http://gladysassistant.local`** depuis n'importe quel appareil de votre réseau, ou à l'adresse IP affichée sur l'écran du mini-PC si ce nom ne s'ouvre pas.
- Il est conçu pour être robuste : si la connexion Internet saute ou si le courant est coupé pendant qu'il installe Gladys au premier démarrage, il reprend simplement là où il s'était arrêté.

![Le premier démarrage de Gladys Assistant OS](../../../static/img/articles/gladys-assistant-os/setup-page.jpg)

L'image ne contient jamais Gladys elle-même : Gladys est téléchargée au premier démarrage, vous partez donc toujours de la dernière version, même avec une image téléchargée il y a quelques mois.

## Un Ubuntu normal, pas une boîte fermée

Gladys Assistant OS n'est pas un système verrouillé. C'est un Ubuntu Server comme un autre : vous pouvez vous y connecter en SSH, faire tourner d'autres containers à côté de Gladys, et vous gardez la main sur votre machine. Il n'y a aucun mot de passe par défaut : le seul compte est celui que vous créez pendant l'installation.

Et comme toujours avec Gladys, tout est open source : [GladysAssistant/ubuntu-server-gladys](https://github.com/GladysAssistant/ubuntu-server-gladys).

## Sur Proxmox aussi

Gladys Assistant OS fonctionne aussi dans une machine virtuelle **Proxmox VE**. J'ai réécrit le guide Proxmox autour de lui : créez la VM en mode UEFI, démarrez-la sur l'image, et Gladys s'installe de la même façon.

👉 [Installer Gladys sur Proxmox VE](/fr/docs/installation/proxmox/)

## Ce qu'il faut (pour l'instant)

Cette première version a quelques prérequis :

- un ordinateur **Intel ou AMD** (x86-64) qui démarre en mode **UEFI**, ce qui est le cas de quasiment tous les mini-PC. Sur un Raspberry Pi, continuez à utiliser l'[image Raspberry Pi](/fr/docs/installation/raspberry-pi/) ;
- un **câble Ethernet** : l'installeur ne configure pas le Wi-Fi ;
- un écran et un clavier, uniquement pendant l'installation.

Docker reste bien sûr disponible si vous installez Gladys sur une machine qui fait déjà tourner d'autres choses, comme un NAS ou un serveur : le [guide Docker](/fr/docs/installation/docker/) est toujours là.

Et si vous ne voulez pas vous occuper de l'installation du tout, le [kit de démarrage](/fr/starter-kit/) arrive avec Gladys déjà installée.

## De nouveaux guides d'installation

Pour l'occasion, j'ai réécrit la documentation d'installation pour que Gladys Assistant OS soit la première chose que vous voyez :

- [Commencer avec Gladys](/fr/docs/)
- [Installer Gladys sur un mini-PC avec Gladys Assistant OS](/fr/docs/installation/mini-pc/)
- [Installer Gladys sur Proxmox VE](/fr/docs/installation/proxmox/)

Si vous l'essayez, racontez-moi comment ça s'est passé sur [le forum](https://community.gladysassistant.com/) ! C'est une première version, et vos retours vont aider à la rendre encore plus simple 🙂
