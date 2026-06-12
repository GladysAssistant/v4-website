---
title: Gladys Assistant devient compatible avec Debian 11 et Ubuntu > 20.04 !
description: Nous avons travaillé récemment sur des todos long terme pour que Gladys reste compatible avec le maximum de systèmes possibles.
authors: pierregilles
image: /img/presentation/gladys-debian-11.jpg
slug: gladys-assistant-compatible-with-debian-11
---

Salut à tous,

Je suis heureux de lancer aujourd'hui la compatibilité avec Debian 11 et Ubuntu > 20.04.

Nous sortons aussi dans cette mise à jour un ensemble de petits correctifs pour permettre une installation plus facilitée sur les NAS Unraid et Synology.

Vous l'aurez compris, pas de nouvelles fonctionnalités majeures dans cette version, mais un ensemble d'améliorations long-terme pour permettre la distribution de Gladys à plus d'utilisateurs, et préparer les usages futurs.

{/* truncate */}

## Les nouveautés de Gladys Assistant 4.8.1

### Cgroup v1 et v2

Comme Gladys tourne entièrement dans Docker, on pourrait se demander : pourquoi Gladys ne fonctionne pas par défaut sur n'importe quel système ? C'est bien l'objectif de Docker: isoler le programme de la machine ?

Gladys fait un peu plus que juste tourner dans son container: elle créé aussi de nouveau containers pour certaines intégrations: MQTT et Zigbee2mqtt, qui sont des projets différents qui tournent dans leur propre container, à côté de Gladys.

Ainsi, Gladys appelle l'API de Docker, situé lui sur la machine hôte. Sur cette partie là uniquement, Gladys est "sensible" aux changements effectués sur l'OS hôte : si l'API de Docker fonctionne différemment sur l'hôte, alors il faut changer le code dans Gladys.

Dans notre cas ici, nous utilisons les Cgroup v1 dans Debian 10 pour déterminer l'ID du container courant ( celui qui fait tourner Gladys ).

Pour ce faire, nous lisons le fichier `/proc/self/cgroup`, et nous obtenons quelque-chose qui ressemble à ça :

```
3:rdma:/
12:cpuset:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
11:cpu,cpuacct:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
10:freezer:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
9:devices:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
8:blkio:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
7:perf_event:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
6:net_cls,net_prio:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
5:hugetlb:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
4:pids:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
2:memory:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
1:name=systemd:/docker/357e73ad015211a5acd76a8973b9287d4de75922e9802d94ba46b756f2bb5350
0::/system.slice/containerd.service
```

Ensuite, nous parsons ce fichier pour obtenir l'ID du container qui se trouve après `/docker/` dans ce fichier.

Sur Debian 11, Cgroup passe en v2 et le format du fichier change un peu:

```
3:rdma:/
0::/system.slice/docker-2bb2c94b0c395fc8fdff9fa4ce364a3be0dd05792145ffc93ce8d665d06521f1.scope
```

Nous avons dû adapter notre logique côté Gladys pour pouvoir gérer les anciens fichiers comme les nouveaux.

### Utilisation de volume Docker custom côté intégrations

Il est possible de lancer Gladys manuellement avec un `docker run`, et de choisir le dossier dans lequel vous voulez stocker les informations de Gladys côté hôte. On utilise pour cela un volume Docker.

Exemple:

```
-v /my_special_folder:/var/lib/gladysassistant
```

Désormais, les intégrations qui lancent des containers (MQTT & Zigbee2mqtt) utiliseront le même dossier pour leur données, même si ce dossier est modifié par l'utilisateur dans le `docker run`.

Ce changement était nécessaire pour les utilisateurs sur NAS Unraid ou Synology, car leur architecture de dossier est particulière, et ils ont besoin de stocker toutes les informations de ces containers dans des dossiers précis.

### Corrections de bugs

- Correction d'un bug assez important où la fréquence de rafraîchissement des appareils comme les caméras n'étaient pas forcément pris en compte après un changement, voir pire, la fréquence de rafraîchissement était prise en compte plusieurs fois, ce qui fait qu'une caméra dont la fréquence a été changée pouvait rafraîchir plusieurs fois par cycle. ([#1463](https://github.com/GladysAssistant/Gladys/pull/1463))

- Correction d'un bug dans les scènes où le bouton "essayer" de l'action "requête HTTP" ne prenait pas en compte les headers renseignés ([#1475](https://github.com/GladysAssistant/Gladys/pull/1475))

- Correction d'un bug où le nom d'un tableau de bord n'était pas mis à jour dans la liste quand le nom du tableau de bord en cours était renommé ([#1463](https://github.com/GladysAssistant/Gladys/pull/1463))

- Ajout des traductions sur les capteurs de vibrations ([#1461](https://github.com/GladysAssistant/Gladys/pull/1461))

## Comment mettre à jour ?

Si vous avez installé Gladys avec l’image Raspberry Pi OS officielle, vos instances se mettront à jour **automatiquement** dans les heures à venir. Cela peut prendre jusqu’à 24h, pas de panique.

Si vous avez installé Gladys avec Docker, vérifiez que vous utilisez bien Watchtower. Voir la [documentation](/fr/docs/installation/docker#mise-à-jour-automatique-avec-watchtower).

Avec Watchtower, Gladys se mettra automatiquement à jour.

## Remerciements aux contributeurs

Encore une fois, merci à tous ceux qui ont contribué à cette release ! On se retrouve sur [le forum](https://community.gladysassistant.com/) si vous voulez parler de cette release :)

## Supporter le projet

Il y a plein de façons de supporter le projet :

- Participer aux discussions sur le forum, aider les nouveaux.
- Contribuer au projet en proposant des nouvelles intégrations/fonctionnalités.
- Améliorer la documentation, qui est open-source.
- Faire un [don ponctuel](https://www.buymeacoffee.com/gladysassistant).
- S'inscrire à [Gladys Plus](/fr/plus).

Merci à tous ceux qui supportent Gladys 🙏
