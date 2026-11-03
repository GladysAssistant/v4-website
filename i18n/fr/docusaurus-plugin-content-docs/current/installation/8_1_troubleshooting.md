---
id: troubleshooting
title: "Dépannage de Gladys Assistant : problèmes fréquents et solutions"
description: "Gladys ne s'ouvre pas, mot de passe oublié, mise à jour qui échoue, dongle Zigbee non détecté, scènes à la mauvaise heure, capteurs absents du tableau de bord : les solutions aux problèmes les plus fréquents de Gladys Assistant."
sidebar_label: Dépannage
keywords:
  - dépannage gladys assistant
  - gladys ne fonctionne pas
  - gladys mot de passe oublié
  - mise à jour gladys échoue
  - logs gladys
---

import JsonLd from '@site/src/components/seo/JsonLd';

Cette page rassemble les problèmes les plus fréquents avec Gladys Assistant et comment les résoudre. Si le vôtre n'y est pas, les [logs](#commencez-par-les-logs) et [le forum](https://community.gladysassistant.com/) sont l'étape suivante.

## Commencez par les logs

La plupart des problèmes laissent une trace dans les logs de Gladys : un message d'erreur nomme en général l'intégration ou l'appareil en cause. Vous pouvez les télécharger en un clic depuis **Paramètres > Système > Télécharger les logs**, ou les lire en ligne de commande si l'interface ne s'ouvre pas. Voir [comment télécharger les logs de Gladys](/fr/docs/installation/logs).

## Accès et connexion

### Gladys ne s'ouvre pas après l'installation

Vérifiez, dans cet ordre, que le conteneur tourne (`sudo docker ps`), qu'aucun autre serveur web n'utilise déjà le port 80, et qu'aucun pare-feu ne le bloque. Le [guide d'installation Docker](/fr/docs/installation/docker#gladys-ne-souvre-pas-après-linstallation--que-vérifier-) détaille chaque étape.

### `gladysassistant.local` ne s'ouvre pas

Certains réseaux bloquent le protocole mDNS derrière ce nom : certaines versions d'Android, les réseaux invités, les box avec isolation des clients. Utilisez plutôt l'adresse IP de la machine qui fait tourner Gladys, par exemple `http://192.168.1.20`. Voir [que faire si `gladysassistant.local` ne s'ouvre pas](/fr/docs/installation/docker#si-gladysassistantlocal-ne-souvre-pas).

### J'ai oublié mon mot de passe

Sur la page de connexion, cliquez sur **J'ai oublié mon mot de passe** et saisissez votre email. Gladys vous envoie un lien de réinitialisation, ou un code à usage unique, par Telegram ou Nextcloud Talk si vous avez configuré l'un des deux.

Sinon, le lien ou le code est écrit dans les logs de Gladys. Lancez ceci sur la machine qui fait tourner Gladys :

```bash
sudo docker logs gladys 2>&1 | grep "Forgot password"
```

Si vous avez fait trop d'essais, attendez 30 minutes ou redémarrez Gladys avec `sudo docker restart gladys`. Un autre administrateur peut aussi réinitialiser votre mot de passe depuis **Paramètres > Utilisateurs**.

## Mises à jour

### Comment mettre à jour Gladys ?

Si vous avez lancé [Watchtower](/fr/docs/installation/docker#mise-à-jour-automatique-avec-watchtower) comme indiqué dans le guide d'installation, Gladys se met à jour toute seule à chaque nouvelle version. Vous pouvez aussi mettre à jour manuellement : dans **Paramètres > Système**, cliquez sur **Vérifier les mises à jour**, puis sur **Mettre à jour maintenant** quand une nouvelle version est disponible.

### La mise à jour indique que mon conteneur utilise une « image figée »

Votre conteneur a été créé avec une version fixe, comme `gladysassistant/gladys:v4.80.0`, qui ne reçoit jamais de mise à jour. Recréez-le avec l'image de la commande d'installation, `gladysassistant/gladys:v5` : supprimez le conteneur avec `sudo docker rm -f gladys` (vos données dans `/var/lib/gladysassistant` sont conservées), puis relancez la [commande d'installation](/fr/docs/installation/docker#lancer-un-container-gladys-assistant).

### La mise à jour échoue faute d'espace disque

Docker garde les images des versions précédentes. Supprimez celles qu'aucun conteneur n'utilise avec `sudo docker image prune -a`, puis réessayez.

## Appareils et scènes

### Mon dongle Zigbee n'est pas détecté, ou Zigbee2MQTT ne démarre pas

Vérifiez que le dongle apparaît sur la machine avec `ls /dev/serial/by-id/`, puis consultez les [erreurs Zigbee2MQTT les plus fréquentes et leurs solutions](/fr/docs/integrations/zigbee2mqtt#résoudre-les-erreurs-zigbee2mqtt-les-plus-fréquentes). Si Gladys tourne dans une machine virtuelle, le dongle doit lui être transmis (voir le [guide Proxmox](/fr/docs/installation/proxmox)).

### Un capteur n'affiche plus sa valeur sur le tableau de bord

Le tableau de bord masque par défaut les valeurs de plus de **48 heures**, pour que vous ne vous fiiez pas à un capteur qui ne remonte plus rien. Vérifiez les piles et la portée du capteur. S'il ne remonte que rarement par conception, augmentez le **Délai avant expiration d'un état** dans **Paramètres > Système**.

### Mes scènes programmées se lancent à la mauvaise heure

Réglez votre fuseau horaire dans **Paramètres > Système > Fuseau horaire** : c'est celui qu'utilisent les scènes programmées. Vérifiez aussi la variable `TZ` de votre [commande d'installation](/fr/docs/installation/docker#lancer-un-container-gladys-assistant), qui règle l'heure du conteneur.

## Données et sauvegardes

### Le disque de ma machine se remplit

Gladys conserve l'historique de chaque capteur. Dans **Paramètres > Système**, réduisez **Conserver l'historique des états des appareils**, et supprimez les anciennes images Docker avec `sudo docker image prune -a`.

### Comment restaurer une sauvegarde ?

Avec [Gladys Plus](/fr/docs/plus/intro), Gladys est sauvegardée tous les jours, de manière chiffrée. Pour restaurer une sauvegarde, ouvrez **Paramètres > Sauvegardes** et cliquez sur **Restaurer**. Sur une nouvelle installation, choisissez **Restauration Gladys Plus** sur l'écran d'accueil. Dans les deux cas, il vous faut votre clé de sauvegarde, affichée dans les paramètres Gladys Plus au moment de la configuration.

## Toujours bloqué ?

[Créez un sujet sur le forum](https://community.gladysassistant.com/), décrivez ce que vous avez fait et ce qui se passe, et joignez vos [logs](/fr/docs/installation/logs). La communauté vous aidera à trouver la cause.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Gladys ne s'ouvre pas après l'installation",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Vérifiez, dans cet ordre, que le conteneur tourne (sudo docker ps), qu'aucun autre serveur web n'utilise déjà le port 80, et qu'aucun pare-feu ne le bloque. Le guide d'installation Docker détaille chaque étape.",
        },
      },
      {
        "@type": "Question",
        name: "gladysassistant.local ne s'ouvre pas",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Certains réseaux bloquent le protocole mDNS derrière ce nom : certaines versions d'Android, les réseaux invités, les box avec isolation des clients. Utilisez plutôt l'adresse IP de la machine qui fait tourner Gladys, par exemple http://192.168.1.20.",
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
        name: "Comment mettre à jour Gladys ?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si vous avez lancé Watchtower comme indiqué dans le guide d'installation, Gladys se met à jour toute seule à chaque nouvelle version. Vous pouvez aussi mettre à jour manuellement : dans Paramètres > Système, cliquez sur Vérifier les mises à jour, puis sur Mettre à jour maintenant quand une nouvelle version est disponible.",
        },
      },
      {
        "@type": "Question",
        name: "La mise à jour indique que mon conteneur utilise une image figée",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Votre conteneur a été créé avec une version fixe, comme gladysassistant/gladys:v4.80.0, qui ne reçoit jamais de mise à jour. Recréez-le avec l'image de la commande d'installation, gladysassistant/gladys:v5 : supprimez le conteneur avec sudo docker rm -f gladys (vos données dans /var/lib/gladysassistant sont conservées), puis relancez la commande d'installation.",
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
          text: "Vérifiez que le dongle apparaît sur la machine avec ls /dev/serial/by-id/, puis consultez les erreurs Zigbee2MQTT les plus fréquentes et leurs solutions dans la documentation Zigbee2MQTT. Si Gladys tourne dans une machine virtuelle, le dongle doit lui être transmis.",
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
          text: "Réglez votre fuseau horaire dans Paramètres > Système > Fuseau horaire : c'est celui qu'utilisent les scènes programmées. Vérifiez aussi la variable TZ de votre commande d'installation, qui règle l'heure du conteneur.",
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
          text: "Avec Gladys Plus, Gladys est sauvegardée tous les jours, de manière chiffrée. Pour restaurer une sauvegarde, ouvrez Paramètres > Sauvegardes et cliquez sur Restaurer. Sur une nouvelle installation, choisissez Restauration Gladys Plus sur l'écran d'accueil. Dans les deux cas, il vous faut votre clé de sauvegarde, affichée dans les paramètres Gladys Plus au moment de la configuration.",
        },
      },
    ],
  }}
/>
