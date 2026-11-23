---
id: migrate-from-home-assistant
title: "Migrer de Home Assistant vers Gladys : gardez vos appareils Zigbee2MQTT"
description: "Vous passez de Home Assistant à Gladys Assistant ? Connectez Gladys au module Zigbee2MQTT de Home Assistant, ou transférez votre réseau Zigbee2MQTT dans Gladys, sans ré-appairer vos appareils. Et que faire des appareils ZHA."
sidebar_label: Migrer depuis Home Assistant
keywords:
  - migrer home assistant vers gladys
  - quitter home assistant
  - transférer zigbee2mqtt home assistant
  - migration module zigbee2mqtt
  - garder ses appareils zigbee sans ré-appairer
  - zha vers zigbee2mqtt
  - conbee ii migration home assistant
---

Vous passez de Home Assistant à Gladys ? Si vos appareils Zigbee tournent sur le **module complémentaire (add-on) Zigbee2MQTT** de Home Assistant (appelé *app* dans les versions récentes de Home Assistant), ils vous suivent : **vous n'avez pas besoin de les ré-appairer**.

Vous avez deux options :

- **Option A : Gladys se connecte au Zigbee2MQTT de Home Assistant.** Rien ne bouge : Zigbee2MQTT reste sur Home Assistant et Gladys le lit via MQTT. C'est le plus rapide pour tester Gladys.
- **Option B : vous migrez Zigbee2MQTT dans Gladys.** Gladys gère alors elle-même le broker MQTT et Zigbee2MQTT, et Home Assistant peut être éteint.

Vous pouvez enchaîner les deux : commencez par l'option A pour utiliser Gladys au quotidien, puis passez à l'option B quand vous êtes prêt à éteindre Home Assistant. Les appareils ajoutés dans Gladys sont rattachés par leur nom Zigbee2MQTT, et l'option B garde ces noms : normalement, vous n'avez pas à les ajouter de nouveau dans Gladys.

Pour les appareils appairés avec **ZHA** (l'intégration Zigbee intégrée à Home Assistant), c'est une autre histoire : voir [Les appareils appairés avec ZHA](#devices-paired-with-zha).

## Option A : connecter Gladys au Zigbee2MQTT de Home Assistant {/* #option-a-connect-gladys-to-the-zigbee2mqtt-of-home-assistant */}

1. **Créez un utilisateur MQTT pour Gladys.** Le module Mosquitto broker de Home Assistant accepte les utilisateurs de Home Assistant : créez un utilisateur dédié à Gladys dans **Paramètres > Personnes > Utilisateurs**. Vous pouvez aussi en ajouter un dans `logins`, dans la configuration du module Mosquitto.
2. Dans Gladys, allez dans **Intégrations > Zigbee2MQTT**, onglet `Configuration`. À l'étape 1 de l'assistant, cliquez sur **J'ai déjà un Zigbee2MQTT**.
3. Entrez :
   - l'**Adresse du broker MQTT** : `mqtt://IP_DE_HOME_ASSISTANT:1883` ;
   - l'**Utilisateur** et le **Mot de passe** que vous venez de créer ;
   - l'**Adresse de l'interface Zigbee2MQTT** (facultative). Sur Home Assistant, l'interface de Zigbee2MQTT ne s'ouvre en général que depuis la barre latérale de Home Assistant : laissez ce champ vide, sauf si vous avez ouvert son port dans les réglages réseau du module.
4. Cliquez sur **Se connecter**. Vos appareils apparaissent dans l'onglet `Découverte Zigbee` : [ajoutez-les dans Gladys](/fr/docs/integrations/zigbee2mqtt#add-devices).

:::warning
Gladys écoute le topic `zigbee2mqtt/#` : il faut que le topic de base de votre Zigbee2MQTT (`mqtt.base_topic`) soit resté `zigbee2mqtt`, la valeur par défaut du module.
:::

Un appareil affiche ses valeurs dès qu'il est ajouté, si Zigbee2MQTT les a envoyées depuis que Gladys s'y est connectée. Un capteur sur pile affiche ses valeurs à son prochain envoi : comptez jusqu'à une heure environ.

**Avantages :** cinq minutes de configuration, rien à casser, et un retour en arrière possible à tout moment.
**Inconvénient :** Home Assistant (Mosquitto et Zigbee2MQTT) continue de tourner. S'il tombe, votre réseau Zigbee tombe aussi.

## Option B : migrer Zigbee2MQTT dans Gladys {/* #option-b-move-zigbee2mqtt-into-gladys */}

Tout votre réseau Zigbee tient dans le dossier de données de Zigbee2MQTT et sur le coordinateur (votre clé Zigbee). Recopiez le dossier, déplacez la clé, et Gladys reprend le réseau tel quel.

:::info[Avant de commencer]

- Gladys est installée (par exemple avec [Gladys Assistant OS sur un mini-PC](/fr/docs/installation/mini-pc/)), et vous avez un accès SSH à sa machine.
- Vous gardez **la même clé Zigbee** que sous Home Assistant : les paramètres du réseau sont enregistrés dessus.
- Zigbee2MQTT n'est pas encore configuré dans Gladys. S'il l'est (vous avez testé l'option A, ou vous l'avez installé pour essayer), cliquez d'abord sur **Réinitialiser l'intégration** dans les **Réglages avancés** de l'onglet `Configuration`. Faites-le **avant** de copier les fichiers : la réinitialisation supprime le dossier Zigbee2MQTT de Gladys. Les appareils déjà ajoutés dans Gladys sont conservés.

:::

### 1. Arrêtez Zigbee2MQTT dans Home Assistant {/* #1-stop-zigbee2mqtt-in-home-assistant */}

Dans Home Assistant, arrêtez le module **Zigbee2MQTT** et désactivez son démarrage automatique (option *Start on boot*), pour qu'il reste arrêté. **Deux Zigbee2MQTT ne doivent jamais tourner sur le même réseau.**

### 2. Récupérez le dossier de Zigbee2MQTT {/* #2-get-the-zigbee2mqtt-folder */}

Avec le module **Samba share** ou **Terminal & SSH**, récupérez le dossier de Zigbee2MQTT. C'est le dossier `zigbee2mqtt` de la configuration de Home Assistant : `config/zigbee2mqtt` sur le partage Samba, `/homeassistant/zigbee2mqtt` (ou `/config/zigbee2mqtt`, selon la version du module) dans le terminal. Les fichiers qui comptent :

- `configuration.yaml`, et `devices.yaml` et `groups.yaml` s'ils existent ;
- `database.db` ;
- `coordinator_backup.json` ;
- `state.json` (facultatif : les derniers états connus).

Gardez une copie de ce dossier tel quel : c'est votre retour en arrière.

### 3. Copiez les fichiers sur la machine Gladys {/* #3-copy-the-files-to-the-gladys-machine */}

Copiez ces fichiers dans le dossier Zigbee2MQTT de Gladys : `/var/lib/gladysassistant/zigbee2mqtt/z2m/` sur une installation standard. Créez le dossier s'il n'existe pas encore :

```bash
sudo mkdir -p /var/lib/gladysassistant/zigbee2mqtt/z2m
```

Par exemple, depuis votre ordinateur, envoyez les fichiers dans votre dossier personnel sur la machine Gladys avec `scp` :

```bash
scp configuration.yaml database.db coordinator_backup.json state.json UTILISATEUR@IP_DE_GLADYS:~
```

Puis, sur la machine Gladys, déplacez-les dans le dossier (ajoutez `devices.yaml` et `groups.yaml` si vous en avez) :

```bash
sudo mv ~/configuration.yaml ~/database.db ~/coordinator_backup.json ~/state.json /var/lib/gladysassistant/zigbee2mqtt/z2m/
```

Si vous avez installé Gladys avec Docker dans un autre dossier que `/var/lib/gladysassistant`, utilisez votre dossier à la place.

### 4. Corrigez `configuration.yaml` {/* #4-edit-configurationyaml */}

Ouvrez `configuration.yaml` sur la machine Gladys (par exemple avec `sudo nano /var/lib/gladysassistant/zigbee2mqtt/z2m/configuration.yaml`) et corrigez ces lignes à la main :

```yaml
homeassistant:
  enabled: false
mqtt:
  base_topic: zigbee2mqtt
  server: mqtt://localhost:1884
```

- `server` doit pointer vers le broker MQTT de Gladys (port `1884`). Sinon, il pointe toujours vers le Mosquitto de Home Assistant : Gladys ne réécrit pas cette ligne. Si elle manque, ajoutez-la.
- `homeassistant` : écrivez `enabled: false` sous la section `homeassistant`. Ne remplacez pas la section par `homeassistant: false` : Zigbee2MQTT 2 refuse cette forme et ne démarre pas.
- Laissez le reste tel quel. Gladys réécrit tout seul, au démarrage, l'utilisateur et le mot de passe MQTT, le port série et l'adaptateur de la clé, et le port de l'interface web. La clé réseau, le PAN ID et le canal sont conservés.

### 5. Installez Zigbee2MQTT depuis Gladys {/* #5-install-zigbee2mqtt-from-gladys */}

Branchez la clé Zigbee sur la machine Gladys. Si Gladys tourne dans une machine virtuelle, passez-lui la clé (voir le [guide Proxmox](/fr/docs/installation/proxmox)).

Dans Gladys, allez dans **Intégrations > Zigbee2MQTT**, onglet `Configuration`, et suivez l'[assistant d'installation](/fr/docs/integrations/zigbee2mqtt#install-zigbee2mqtt-with-the-setup-wizard) : Gladys reconnaît les clés les plus courantes (ConBee II, SONOFF ZBDongle-P et ZBDongle-E…) ; sinon, choisissez son modèle dans la liste. Cliquez sur **Installer**.

Gladys garde le `configuration.yaml` qu'elle trouve dans le dossier : Zigbee2MQTT démarre donc sur votre réseau existant. Une fois le réseau prêt, le tableau de bord affiche le nombre d'appareils du réseau.

### 6. Vérifiez vos appareils {/* #6-check-your-devices */}

- Les appareils déjà ajoutés dans Gladys avec l'option A fonctionnent de nouveau tels quels.
- Les autres apparaissent dans l'onglet `Découverte Zigbee` : [ajoutez-les dans Gladys](/fr/docs/integrations/zigbee2mqtt#add-devices).

Les capteurs sur pile affichent leurs valeurs à leur prochain envoi.

### Revenir à Home Assistant {/* #go-back-to-home-assistant */}

Un souci ? Sur le tableau de bord de Gladys, cliquez sur **Arrêter** (Gladys s'en souvient et ne relance pas Zigbee2MQTT). Rebranchez la clé sur la machine Home Assistant, remettez votre copie du dossier si besoin, et relancez le module Zigbee2MQTT.

## Les appareils appairés avec ZHA {/* #devices-paired-with-zha */}

ZHA, c'est un autre cas :

- **ZHA ne passe pas par MQTT.** Gladys ne peut donc pas s'y connecter, et l'option A ne marche pas pour ces appareils.
- **Gladys gère un seul Zigbee2MQTT, donc une seule clé Zigbee.** Si vous utilisiez une clé pour Zigbee2MQTT et une autre pour ZHA, vous ne pourrez pas faire tourner les deux dans Gladys.

Le plus simple et le plus fiable : migrer le réseau Zigbee2MQTT (option B), puis ré-appairer dessus les appareils qui étaient sous ZHA, depuis l'onglet `Découverte Zigbee`, avec **Autoriser l'association**. C'est un peu de manipulation une fois, mais vous avez ensuite un seul réseau, et un maillage plus solide.

Si tous vos appareils Zigbee sont sous ZHA, arrêtez ZHA dans Home Assistant (ou éteignez Home Assistant), branchez la clé sur la machine Gladys, [installez Zigbee2MQTT](/fr/docs/integrations/zigbee2mqtt#install-zigbee2mqtt-with-the-setup-wizard) et ré-appairez vos appareils.

## Automatisations et tableaux de bord {/* #automations-and-dashboards */}

Vos automatisations et vos tableaux de bord ne suivent pas vos appareils : recréez-les dans Gladys avec les [scènes](/fr/docs/scenes/intro) et les [tableaux de bord](/fr/docs/dashboard/intro). Si vous utilisez du Z-Wave, voir l'[intégration Z-Wave JS UI](/fr/docs/integrations/zwavejs-ui).

## Besoin d'aide ? {/* #need-help */}

Si vous bloquez à une étape, posez votre question sur le [forum de la communauté](https://community.gladysassistant.com/).
