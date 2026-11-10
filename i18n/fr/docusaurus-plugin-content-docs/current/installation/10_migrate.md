---
id: migrate
title: Changer de machine (migrer Gladys vers un nouveau serveur)
description: "Vous remplacez votre mini-PC, votre Raspberry Pi ou votre serveur ? Voici comment déplacer Gladys Assistant vers une nouvelle machine grâce à une sauvegarde Gladys Plus, sans ré-appairer vos appareils, puis effacer proprement l'ancienne."
sidebar_label: Changer de machine
keywords:
  - migrer gladys
  - changer de serveur gladys
  - changer d'instance gladys
  - restaurer sauvegarde gladys plus
  - nouveau mini pc gladys
---

Vous remplacez la machine qui fait tourner Gladys (un vieux mini-PC, un Raspberry Pi, un NAS...) par une nouvelle ? Avec une **sauvegarde Gladys Plus**, vous retrouvez votre instance telle quelle sur la nouvelle machine : utilisateurs, maisons et pièces, appareils, scènes, tableaux de bord, configuration des intégrations et tout l'historique des capteurs.

Zigbee2mqtt et l'intégration Matter sont aussi restaurés : Gladys enregistre leur configuration dans sa base chaque nuit, vous n'avez donc **pas besoin de ré-appairer vos appareils**.

Il y a juste quelques précautions à prendre. Voici la procédure, dans l'ordre.

:::info[Ce qu'il vous faut]

- Un abonnement [Gladys Plus](/fr/plus/) qui inclut les sauvegardes, connecté à votre instance actuelle.
- La nouvelle machine, que vous installerez en suivant le guide habituel (par exemple [Gladys Assistant OS sur un mini-PC](/fr/docs/installation/mini-pc/)).

:::

## 1. Avant de changer (sur l'ancienne machine)

### Notez votre clé de sauvegarde

Dans votre instance actuelle, allez dans **Paramètres > Gladys Plus**, section **« Clé de sauvegarde »**, et cliquez sur l'œil pour l'afficher. Copiez-la en lieu sûr, en dehors de Gladys (dans un gestionnaire de mots de passe, par exemple).

Vos sauvegardes sont **chiffrées avec cette clé** : sans elle, il est impossible de les restaurer.

:::danger
Ne déconnectez pas Gladys Plus sur l'ancienne instance avant d'avoir noté la clé : la déconnexion **efface la clé de l'instance**.
:::

### Notez ce qui n'est pas dans la sauvegarde

- **Node-RED** : si vous l'utilisez, exportez vos flows (menu **☰ > Exporter > Tous les flux**). Ils ne font pas partie de la sauvegarde Gladys. L'export ne contient ni les identifiants de vos nœuds (mots de passe, jetons), ni les nœuds que vous avez installés depuis la palette : notez les nœuds supplémentaires que vous avez installés, pour les réinstaller sur la nouvelle machine, et gardez vos identifiants sous la main pour les ressaisir.
- **Matterbridge** : si vous l'utilisez, ses plugins et son identité Matter (dans `/var/lib/gladysassistant/matterbridge`) ne sont pas non plus dans la sauvegarde. Sur la nouvelle machine, il faudra réinstaller ses plugins et ré-appairer le pont avec vos contrôleurs Matter (Apple Maison, Google Home...).
- **MQTT** : si vous utilisez l'intégration MQTT avec le broker installé par Gladys (pour des Tasmota, des Shelly, etc.), notez par précaution le nom d'utilisateur et le mot de passe MQTT (**Intégrations > MQTT > Configuration**).

### N'appairez pas de nouvel appareil juste avant la migration

La configuration de Zigbee2mqtt est enregistrée dans Gladys **tous les soirs à 23h**, celle de Matter **à 4h du matin**. Un appareil Zigbee ou Matter appairé après la dernière sauvegarde de la nuit ne sera pas dans la sauvegarde : il faudra le ré-appairer sur la nouvelle machine.

### Lancez une sauvegarde manuelle

Allez dans **Paramètres > Sauvegardes** et cliquez sur **« Sauvegarder maintenant »**. Attendez que la nouvelle sauvegarde apparaisse dans la liste.

### Éteignez l'ancienne machine

**Les deux machines ne doivent jamais tourner en même temps** : elles piloteraient les mêmes appareils, vos scènes se déclencheraient en double, et elles partageraient la même connexion Gladys Plus.

Débranchez ensuite votre dongle Zigbee (et vos autres dongles USB) et branchez-le sur la nouvelle machine. Si votre coordinateur Zigbee est un modèle réseau (SLZB-06, etc.), il n'y a rien à déplacer.

## 2. Installer la nouvelle machine et restaurer la sauvegarde

Installez Gladys sur la nouvelle machine en suivant le guide correspondant. Sur un mini-PC, suivez [Installer Gladys Assistant avec Gladys Assistant OS](/fr/docs/installation/mini-pc/) : vous écrivez l'image sur une clé USB, vous démarrez le mini-PC dessus, vous répondez à quelques questions, et Gladys s'installe toute seule.

Quand Gladys affiche l'écran de bienvenue (sur [http://gladysassistant.local](http://gladysassistant.local) avec Gladys Assistant OS) :

1. Cliquez sur **« Restauration Gladys Plus »**, et **pas** sur « Créer un compte local ».
2. Connectez-vous avec votre compte Gladys Plus : e-mail, mot de passe et code de [double authentification](/fr/docs/plus/two-factor-authentication/).
3. Saisissez votre **clé de restauration** : c'est la clé de sauvegarde notée à l'étape 1.
4. Choisissez la sauvegarde la plus récente, puis cliquez sur **« Restaurer »** et **« Confirmer »**.

La restauration prend plus ou moins de temps selon la taille de votre historique. À la fin, Gladys redémarre toute seule. Vous vous connectez ensuite avec votre compte Gladys habituel, c'est-à-dire **l'e-mail et le mot de passe de votre ancienne instance**.

:::tip[La restauration échoue ?]
Vérifiez que la clé de restauration saisie est bien celle de l'ancienne instance : Gladys vous propose de la modifier et de réessayer. Vous pouvez aussi créer un compte local, connecter Gladys Plus plus tard dans **Paramètres > Gladys Plus**, puis restaurer la sauvegarde depuis **Paramètres > Sauvegardes**.
:::

## 3. Vérifications après la restauration

- **Zigbee2mqtt** : Gladys le réinstalle automatiquement avec sa configuration restaurée (réseau Zigbee et appareils), sans ré-appairage. Allez quand même dans **Intégrations > Zigbee2mqtt** vérifier le port USB du dongle : il peut porter un autre nom sur la nouvelle machine. Dans ce cas, sélectionnez le bon.
- **Matter** : le contrôleur de l'intégration Matter est restauré automatiquement depuis sa sauvegarde.
- **Matterbridge** (si vous l'utilisez) : réinstallez ses plugins et ré-appairez le pont avec vos contrôleurs Matter.
- **Intégrations du catalogue** : elles sont réinstallées automatiquement au démarrage. Gladys retélécharge leurs images, ce qui peut prendre quelques minutes.
- **MQTT** (si vous utilisez le broker installé par Gladys) : depuis Gladys 5.3.1, Gladys recrée automatiquement le broker avec vos identifiants enregistrés, vos appareils MQTT se reconnectent donc sans rien changer. Vérifiez dans **Intégrations > MQTT** que Gladys est bien connectée au broker.
- **Node-RED** : réinstallez les nœuds supplémentaires que vous utilisiez, réimportez vos flows et ressaisissez vos identifiants.
- **Adresse IP** : la nouvelle machine a une nouvelle adresse IP. Tout ce qui contacte Gladys par son IP (appareils MQTT, etc.) doit utiliser la nouvelle. Le plus simple : une fois l'ancienne machine éteinte, donnez à la nouvelle, dans les réglages de votre box, l'adresse IP fixe qu'avait l'ancienne (réservation DHCP).
- **Gladys Plus** : votre connexion Gladys Plus fait partie de la sauvegarde, c'est donc la nouvelle machine qui prend la place de l'ancienne. Vérifiez que l'instance est bien connectée dans **Paramètres > Gladys Plus**, et testez l'accès à distance sur [plus.gladysassistant.com](https://plus.gladysassistant.com). Le lendemain, vérifiez qu'une nouvelle sauvegarde apparaît dans **Paramètres > Sauvegardes**.

## 4. Effacer l'ancienne machine

Gardez-la éteinte quelques jours, le temps de vérifier que tout fonctionne : c'est votre plan B. **Ne la rallumez jamais avec Gladys qui tourne pendant que la nouvelle machine fonctionne.**

Gladys redémarre toute seule quand la machine démarre. Avant de rallumer l'ancienne machine pour l'effacer, **débranchez donc son câble réseau** (et ses dongles USB), et travaillez directement dessus, avec un écran et un clavier.

Ensuite, n'oubliez pas que son disque contient toujours votre base Gladys (utilisateurs, clés Gladys Plus, accès de vos intégrations). Donc :

- **si vous la donnez ou la revendez**, réinstallez un système en effaçant complètement le disque ;
- **si vous la gardez pour autre chose**, supprimez les conteneurs de Gladys, puis ses données. Sur Gladys Assistant OS, arrêtez d'abord Gladys et Watchtower :

```bash
sudo docker compose -f /opt/gladys/compose.yaml down
```

Supprimez ensuite les conteneurs :

```bash
sudo docker rm -f gladys gladys-z2m-zigbee2mqtt gladys-z2m-mqtt eclipse-mosquitto gladys-node-red gladys-matterbridge
```

Une fois les conteneurs supprimés, effacez les données :

```bash
sudo rm -rf /var/lib/gladysassistant
```

Adaptez la liste des conteneurs à ce que la commande `sudo docker ps -a` affiche chez vous : ne supprimez que les conteneurs installés par Gladys (par exemple, ajoutez `watchtower` s'il est installé, mais gardez un broker Mosquitto que vous auriez installé vous-même). Si vous avez installé Gladys vous-même avec Docker dans un autre dossier que `/var/lib/gladysassistant`, supprimez ce dossier-là.

Pas besoin de déconnecter Gladys Plus sur l'ancienne machine : c'est la nouvelle qui a repris la connexion.

## Besoin d'aide ?

Si vous bloquez à une étape, posez votre question sur le [forum de la communauté](https://community.gladysassistant.com/).
