---
id: troubleshooting
title: "Dépannage de Gladys Assistant : problèmes fréquents et solutions"
description: "Mini-PC qui ne démarre pas sur la clé USB, Gladys ne s'ouvre pas, mot de passe oublié, mise à jour qui échoue, dongle Zigbee non détecté, scènes à la mauvaise heure : les solutions aux problèmes les plus fréquents de Gladys Assistant."
sidebar_label: Dépannage
keywords:
  - dépannage gladys assistant
  - gladys ne fonctionne pas
  - problème gladys assistant os
  - gladys mot de passe oublié
  - mise à jour gladys échoue
  - logs gladys
---

import JsonLd from '@site/src/components/seo/JsonLd';

Cette page rassemble les problèmes les plus fréquents avec Gladys Assistant et comment les résoudre. Si le vôtre n'y est pas, les [logs](#commencez-par-les-logs) et [le forum](https://community.gladysassistant.com/) sont l'étape suivante.

## Commencez par les logs

La plupart des problèmes laissent une trace dans les logs de Gladys : un message d'erreur nomme en général l'intégration ou l'appareil en cause. Vous pouvez les télécharger en un clic depuis **Paramètres > Système > Télécharger les logs**, ou les lire en ligne de commande si l'interface ne s'ouvre pas. Voir [comment télécharger les logs de Gladys](/fr/docs/installation/logs).

Si vous avez installé Gladys avec [Gladys Assistant OS](/fr/docs/installation/mini-pc), `sudo gladys-diagnostics` affiche aussi l'état de la machine : réseau, disque, Docker et Gladys. Lancez-le en SSH, ou sur le mini-PC lui-même après avoir appuyé sur **Ctrl+Alt+F2** pour obtenir une invite de connexion.

## Installation

### Le mini-PC ne démarre pas sur la clé USB

L'image de [Gladys Assistant OS](/fr/docs/installation/mini-pc) doit être écrite sur la clé USB avec un outil comme balenaEtcher : copier le fichier `.iso` sur la clé ne fonctionne pas. Ensuite, dans les réglages du BIOS (en général avec **Suppr** ou **F2** au démarrage), vérifiez que l'ordinateur démarre en mode **UEFI** (et non « Legacy » ou « CSM »), et placez la clé USB en premier dans l'ordre de démarrage. S'il refuse toujours de démarrer, désactivez le **Secure Boot** dans ces mêmes réglages.

### Gladys ne s'ouvre pas après l'installation

**Avec Gladys Assistant OS**, l'écran du mini-PC indique où en est l'installation. Au premier démarrage, il télécharge Gladys, ce qui peut prendre un moment selon votre connexion Internet : attendez que l'écran affiche **Gladys Assistant est prêt**. S'il affiche **Connexion Internet requise**, vérifiez le câble Ethernet et votre box : l'installation reprend toute seule. S'il affiche **La configuration ne peut pas continuer**, voir [la section « En cas de problème » du guide](/fr/docs/installation/mini-pc#en-cas-de-problème).

**Avec Docker**, vérifiez, dans cet ordre, que le conteneur tourne (`sudo docker ps`), qu'aucun autre serveur web n'utilise déjà le port 80, et qu'aucun pare-feu ne le bloque. Le [guide d'installation Docker](/fr/docs/installation/docker#gladys-ne-souvre-pas-après-linstallation--que-vérifier-) détaille chaque étape.

### `gladysassistant.local` ne s'ouvre pas

Certains réseaux bloquent le protocole mDNS derrière ce nom : certaines versions d'Android, les réseaux invités, les box avec isolation des clients. Utilisez plutôt l'adresse IP de la machine qui fait tourner Gladys, par exemple `http://192.168.1.20`. Avec Gladys Assistant OS, cette adresse est affichée sur l'écran du mini-PC. Voir [que faire si `gladysassistant.local` ne s'ouvre pas](/fr/docs/installation/docker#si-gladysassistantlocal-ne-souvre-pas).

## Connexion

### J'ai oublié mon mot de passe

Sur la page de connexion, cliquez sur **J'ai oublié mon mot de passe** et saisissez votre email. Gladys vous envoie un lien de réinitialisation, ou un code à usage unique, par Telegram ou Nextcloud Talk si vous avez configuré l'un des deux.

Sinon, le lien ou le code est écrit dans les logs de Gladys. Lancez ceci sur la machine qui fait tourner Gladys :

```bash
sudo docker logs gladys 2>&1 | grep "Forgot password"
```

Si vous avez fait trop d'essais, attendez 30 minutes ou redémarrez Gladys avec `sudo docker restart gladys`. Un autre administrateur peut aussi réinitialiser votre mot de passe depuis **Paramètres > Utilisateurs**.

Il s'agit du mot de passe de votre Gladys à la maison. Pour votre compte Gladys Plus, utilisez **J'ai oublié mon mot de passe** sur [plus.gladysassistant.com](https://plus.gladysassistant.com).

### Mon code de double authentification Gladys Plus est refusé, ou j'ai perdu mon téléphone

Vérifiez d'abord que votre téléphone règle sa date et son heure automatiquement : si son horloge décale de plus de 30 secondes environ, tous les codes qu'il génère sont refusés. Vous avez changé de téléphone, ou perdu votre application d'authentification et vos codes de récupération ? Depuis Gladys 5.3.1, vous pouvez récupérer l'accès à votre compte par vous-même, sans écrire au support. Voir [résoudre les problèmes de double authentification](/fr/docs/plus/two-factor-authentication).

## Mises à jour

### Comment mettre à jour Gladys ?

**Avec Gladys Assistant OS**, vous n'avez rien à faire : Gladys se met à jour toute seule dès qu'une nouvelle version sort. **Avec Docker**, si vous avez lancé [Watchtower](/fr/docs/installation/docker#mise-à-jour-automatique-avec-watchtower) comme indiqué dans le guide d'installation, Gladys se met aussi à jour toute seule.

Vous pouvez aussi mettre à jour manuellement : dans **Paramètres > Système**, cliquez sur **Vérifier les mises à jour**, puis sur **Mettre à jour maintenant** quand une nouvelle version est disponible.

### La mise à jour indique que mon conteneur utilise une « image figée »

Votre conteneur a été créé avec une version fixe, comme `gladysassistant/gladys:v4.80.0`, qui ne reçoit jamais de mise à jour. Recréez-le avec l'image `gladysassistant/gladys:v5`, en gardant les options de votre conteneur actuel : le même dossier de données, le même port et les mêmes variables d'environnement. Sur un [NAS Synology](/fr/docs/installation/synology), par exemple, elles diffèrent de la commande standard.

1. Supprimez le conteneur avec `sudo docker rm -f gladys`. Vos données restent dans leur dossier sur la machine (`/var/lib/gladysassistant` avec la [commande d'installation](/fr/docs/installation/docker#lancer-un-container-gladys-assistant)).
2. Relancez-le avec les mêmes options, et `gladysassistant/gladys:v5` comme image.

Avec [Docker Compose](/fr/docs/installation/docker-compose), indiquez `image: gladysassistant/gladys:v5` dans votre fichier, puis lancez `sudo docker compose -f gladys-compose.yml up -d` (avec le nom de votre fichier).

### La mise à jour échoue faute d'espace disque

Docker garde les images des versions précédentes. Supprimez celles qu'aucun conteneur n'utilise avec `sudo docker image prune -a`, puis réessayez.

## Appareils et scènes

### Mon dongle Zigbee n'est pas détecté, ou Zigbee2MQTT ne démarre pas

Dans **Intégrations > Zigbee2MQTT > Configuration**, Gladys liste les ports USB avec le nom de l'appareil branché sur chacun, et présélectionne le port et le modèle des dongles les plus courants. Si votre dongle n'apparaît pas dans la liste, vérifiez que la machine le voit avec `ls /dev/serial/by-id/`. Si Zigbee2MQTT ne passe pas au vert, Gladys vous indique pourquoi sur cette même page : voir les [erreurs Zigbee2MQTT les plus fréquentes et leurs solutions](/fr/docs/integrations/zigbee2mqtt#résoudre-les-erreurs-zigbee2mqtt-les-plus-fréquentes). Si Gladys tourne dans une machine virtuelle, le dongle doit lui être transmis (voir le [guide Proxmox](/fr/docs/installation/proxmox)).

### Un capteur n'affiche plus sa valeur sur le tableau de bord

Le tableau de bord masque par défaut les valeurs de plus de **48 heures**, pour que vous ne vous fiiez pas à un capteur qui ne remonte plus rien. Vérifiez les piles et la portée du capteur. S'il ne remonte que rarement par conception, augmentez le **Délai avant expiration d'un état** dans **Paramètres > Système**.

### Mes scènes programmées se lancent à la mauvaise heure

Les scènes programmées utilisent le fuseau horaire de Gladys : vérifiez-le dans **Paramètres > Système > Fuseau horaire**.

## Données et sauvegardes

### Le disque de ma machine se remplit

Gladys conserve l'historique de chaque capteur. Dans **Paramètres > Système**, réduisez **Conserver l'historique des états des appareils**, et supprimez les anciennes images Docker avec `sudo docker image prune -a`.

### Comment restaurer une sauvegarde ?

Avec [Gladys Plus](/fr/docs/plus/intro), Gladys est sauvegardée tous les jours, de manière chiffrée. Pour restaurer une sauvegarde, ouvrez **Paramètres > Sauvegardes** et cliquez sur **Restaurer**. Sur une nouvelle installation, choisissez **Restauration Gladys Plus** sur l'écran d'accueil. Dans les deux cas, il vous faut votre clé de sauvegarde : elle est affichée dans **Paramètres > Gladys Plus** de votre instance actuelle, notez-la donc avant d'en avoir besoin.

Vous remplacez la machine qui fait tourner Gladys ? Suivez le [guide pour changer de machine](/fr/docs/installation/migrate) : il liste ce qu'il faut noter avant de basculer, et récupère vos appareils Zigbee et Matter sans les réappairer.

## Toujours bloqué ?

[Créez un sujet sur le forum](https://community.gladysassistant.com/), décrivez ce que vous avez fait et ce qui se passe, et joignez vos [logs](/fr/docs/installation/logs). Avec Gladys Assistant OS, ajoutez aussi la sortie de `sudo gladys-diagnostics` : elle ne contient ni mot de passe ni secret. La communauté vous aidera à trouver la cause.

Avant de publier, relisez vos logs : si vous avez réinitialisé votre mot de passe récemment, retirez-en le lien ou le code de réinitialisation, ainsi que tout ce que vous ne voulez pas partager publiquement.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Le mini-PC ne démarre pas sur la clé USB",
        acceptedAnswer: {
          "@type": "Answer",
          text: "L'image de Gladys Assistant OS doit être écrite sur la clé USB avec un outil comme balenaEtcher : copier le fichier .iso sur la clé ne fonctionne pas. Ensuite, dans les réglages du BIOS (en général avec Suppr ou F2 au démarrage), vérifiez que l'ordinateur démarre en mode UEFI (et non Legacy ou CSM), et placez la clé USB en premier dans l'ordre de démarrage. S'il refuse toujours de démarrer, désactivez le Secure Boot dans ces mêmes réglages.",
        },
      },
      {
        "@type": "Question",
        name: "Gladys ne s'ouvre pas après l'installation",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Avec Gladys Assistant OS, l'écran du mini-PC indique où en est l'installation : attendez qu'il affiche Gladys Assistant est prêt. S'il affiche Connexion Internet requise, vérifiez le câble Ethernet et votre box : l'installation reprend toute seule. Avec Docker, vérifiez, dans cet ordre, que le conteneur tourne (sudo docker ps), qu'aucun autre serveur web n'utilise déjà le port 80, et qu'aucun pare-feu ne le bloque.",
        },
      },
      {
        "@type": "Question",
        name: "gladysassistant.local ne s'ouvre pas",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Certains réseaux bloquent le protocole mDNS derrière ce nom : certaines versions d'Android, les réseaux invités, les box avec isolation des clients. Utilisez plutôt l'adresse IP de la machine qui fait tourner Gladys, par exemple http://192.168.1.20. Avec Gladys Assistant OS, cette adresse est affichée sur l'écran du mini-PC.",
        },
      },
      {
        "@type": "Question",
        name: "J'ai oublié mon mot de passe",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sur la page de connexion, cliquez sur J'ai oublié mon mot de passe et saisissez votre email. Gladys vous envoie un lien de réinitialisation, ou un code à usage unique, par Telegram ou Nextcloud Talk si vous avez configuré l'un des deux. Sinon, le lien ou le code est écrit dans les logs de Gladys : lancez sudo docker logs gladys 2>&1 | grep \"Forgot password\" sur la machine qui fait tourner Gladys. Un autre administrateur peut aussi réinitialiser votre mot de passe depuis Paramètres > Utilisateurs.",
        },
      },
      {
        "@type": "Question",
        name: "Mon code de double authentification Gladys Plus est refusé, ou j'ai perdu mon téléphone",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vérifiez d'abord que votre téléphone règle sa date et son heure automatiquement : si son horloge décale de plus de 30 secondes environ, tous les codes qu'il génère sont refusés. Vous avez changé de téléphone, ou perdu votre application d'authentification et vos codes de récupération ? Depuis Gladys 5.3.1, vous pouvez récupérer l'accès à votre compte par vous-même, sans écrire au support : voir la page de résolution des problèmes de double authentification.",
        },
      },
      {
        "@type": "Question",
        name: "Comment mettre à jour Gladys ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Avec Gladys Assistant OS, vous n'avez rien à faire : Gladys se met à jour toute seule dès qu'une nouvelle version sort. Avec Docker, si vous avez lancé Watchtower comme indiqué dans le guide d'installation, Gladys se met aussi à jour toute seule. Vous pouvez aussi mettre à jour manuellement : dans Paramètres > Système, cliquez sur Vérifier les mises à jour, puis sur Mettre à jour maintenant quand une nouvelle version est disponible.",
        },
      },
      {
        "@type": "Question",
        name: "La mise à jour indique que mon conteneur utilise une image figée",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Votre conteneur a été créé avec une version fixe, comme gladysassistant/gladys:v4.80.0, qui ne reçoit jamais de mise à jour. Recréez-le avec l'image gladysassistant/gladys:v5, en gardant les options de votre conteneur actuel : le même dossier de données, le même port et les mêmes variables d'environnement. Supprimez le conteneur avec sudo docker rm -f gladys (vos données restent dans leur dossier sur la machine), puis relancez-le avec les mêmes options et l'image v5. Avec Docker Compose, indiquez l'image gladysassistant/gladys:v5 dans votre fichier, puis lancez sudo docker compose -f gladys-compose.yml up -d.",
        },
      },
      {
        "@type": "Question",
        name: "La mise à jour échoue faute d'espace disque",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Docker garde les images des versions précédentes. Supprimez celles qu'aucun conteneur n'utilise avec sudo docker image prune -a, puis réessayez.",
        },
      },
      {
        "@type": "Question",
        name: "Mon dongle Zigbee n'est pas détecté, ou Zigbee2MQTT ne démarre pas",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Dans Intégrations > Zigbee2MQTT > Configuration, Gladys liste les ports USB avec le nom de l'appareil branché sur chacun, et présélectionne le port et le modèle des dongles les plus courants. Si votre dongle n'apparaît pas dans la liste, vérifiez que la machine le voit avec ls /dev/serial/by-id/. Si Zigbee2MQTT ne passe pas au vert, Gladys vous indique pourquoi sur cette même page. Si Gladys tourne dans une machine virtuelle, le dongle doit lui être transmis.",
        },
      },
      {
        "@type": "Question",
        name: "Un capteur n'affiche plus sa valeur sur le tableau de bord",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Le tableau de bord masque par défaut les valeurs de plus de 48 heures, pour que vous ne vous fiiez pas à un capteur qui ne remonte plus rien. Vérifiez les piles et la portée du capteur. S'il ne remonte que rarement par conception, augmentez le Délai avant expiration d'un état dans Paramètres > Système.",
        },
      },
      {
        "@type": "Question",
        name: "Mes scènes programmées se lancent à la mauvaise heure",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Les scènes programmées utilisent le fuseau horaire de Gladys : vérifiez-le dans Paramètres > Système > Fuseau horaire.",
        },
      },
      {
        "@type": "Question",
        name: "Le disque de ma machine se remplit",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gladys conserve l'historique de chaque capteur. Dans Paramètres > Système, réduisez Conserver l'historique des états des appareils, et supprimez les anciennes images Docker avec sudo docker image prune -a.",
        },
      },
      {
        "@type": "Question",
        name: "Comment restaurer une sauvegarde ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Avec Gladys Plus, Gladys est sauvegardée tous les jours, de manière chiffrée. Pour restaurer une sauvegarde, ouvrez Paramètres > Sauvegardes et cliquez sur Restaurer. Sur une nouvelle installation, choisissez Restauration Gladys Plus sur l'écran d'accueil. Dans les deux cas, il vous faut votre clé de sauvegarde : elle est affichée dans Paramètres > Gladys Plus de votre instance actuelle, notez-la donc avant d'en avoir besoin. Pour remplacer la machine qui fait tourner Gladys, suivez le guide pour changer de machine.",
        },
      },
    ],
  }}
/>
