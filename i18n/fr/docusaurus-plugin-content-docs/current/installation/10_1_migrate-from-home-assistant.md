---
id: migrate-from-home-assistant
title: "Migrer de Home Assistant vers Gladys : Zigbee2MQTT, Z-Wave, Matter"
description: "Vous passez de Home Assistant à Gladys Assistant ? Ce que vous gardez et ce que vous refaites : transférez votre réseau Zigbee2MQTT sans ré-appairer vos appareils, gardez votre clé Z-Wave, partagez vos appareils Matter, retrouvez vos appareils MQTT, puis éteignez Home Assistant."
sidebar_label: Migrer depuis Home Assistant
keywords:
  - migrer home assistant vers gladys
  - quitter home assistant
  - passer de home assistant à gladys
  - transférer zigbee2mqtt home assistant
  - migration module zigbee2mqtt
  - garder ses appareils zigbee sans ré-appairer
  - zha vers zigbee2mqtt
  - migration z-wave js
  - partager appareil matter home assistant
---

Vous passez de Home Assistant à Gladys ? La plupart de vos appareils vous suivent **sans être ré-appairés** : le réseau Zigbee2MQTT, le réseau Z-Wave, les appareils Matter et les appareils MQTT. Ce qui reste derrière, c'est ce que vous avez construit dans Home Assistant : automatisations, tableaux de bord et historique.

Pas besoin de tout basculer en une soirée : Gladys peut tourner à côté de Home Assistant, connectée aux mêmes appareils, pendant que vous recréez vos scènes. Vous éteignez Home Assistant à la fin.

## Ce que vous gardez, ce que vous refaites {/* #what-you-keep-what-you-redo */}

| Dans Home Assistant | Dans Gladys | À ré-appairer ? |
| --- | --- | --- |
| Module Zigbee2MQTT | [Intégration Zigbee2MQTT](#zigbee2mqtt) : Gladys s'y connecte, puis le reprend | Non |
| ZHA | [Intégration Zigbee2MQTT](#devices-paired-with-zha) | Oui |
| Z-Wave JS ou Z-Wave JS UI | [Intégration Z-Wave JS UI](#z-wave), avec la même clé | Non |
| Matter | [Intégration Matter](#matter), avec un code partagé par Home Assistant | Non |
| Appareils MQTT (ESPHome, OpenMQTTGateway, DIY…) | [Intégration MQTT](#mqtt-devices-and-other-integrations), découverte Home Assistant | Non |
| Tasmota, ESPHome, Shelly, Philips Hue, Netatmo, Tuya… | [Leur intégration dans Gladys](#mqtt-devices-and-other-integrations) | Non, dans la plupart des cas |
| Automatisations, scripts | [Scènes](#automations-dashboards-and-history) | À recréer |
| Tableaux de bord | [Tableaux de bord](#automations-dashboards-and-history) | À recréer |
| Historique | Non transféré | — |

## L'ordre conseillé {/* #the-recommended-order */}

1. **Installez Gladys à côté de Home Assistant**, sur une autre machine ou dans une autre machine virtuelle : par exemple [Gladys Assistant OS sur un mini-PC](/fr/docs/installation/mini-pc/).
2. **Connectez Gladys à ce que fait tourner Home Assistant** : le module Zigbee2MQTT, le broker MQTT, les appareils Matter. Rien ne bouge, et vous pouvez revenir en arrière à tout moment.
3. **Recréez vos scènes et vos tableaux de bord** dans Gladys, et utilisez-la au quotidien pendant quelque temps.
4. **Déplacez les radios** (clé Zigbee, clé Z-Wave) sur la machine Gladys, une par une.
5. **Éteignez Home Assistant**, une fois que plus rien n'en dépend (voir [Éteindre Home Assistant](#turn-home-assistant-off)).

:::warning
Une clé Zigbee ou une clé Z-Wave est pilotée par **un seul logiciel à la fois**. Ne laissez jamais Home Assistant et Gladys piloter la même radio : arrêtez le module dans Home Assistant avant de la démarrer dans Gladys.
:::

## Zigbee2MQTT {/* #zigbee2mqtt */}

Si vos appareils Zigbee tournent sur le **module complémentaire (add-on) Zigbee2MQTT** de Home Assistant (appelé *app* dans les versions récentes de Home Assistant), vous avez deux options :

- **Option A : Gladys se connecte au Zigbee2MQTT de Home Assistant.** Rien ne bouge : Zigbee2MQTT reste sur Home Assistant et Gladys le lit via MQTT. C'est le plus rapide pour tester Gladys.
- **Option B : vous migrez Zigbee2MQTT dans Gladys.** Gladys gère alors elle-même le broker MQTT et Zigbee2MQTT, et Home Assistant n'a plus besoin de tourner.

Vous pouvez enchaîner les deux : commencez par l'option A, puis passez à l'option B quand vous êtes prêt. Les appareils ajoutés dans Gladys sont rattachés par leur nom Zigbee2MQTT, et l'option B garde ces noms : normalement, vous n'avez pas à les ajouter de nouveau dans Gladys.

### Option A : connecter Gladys au Zigbee2MQTT de Home Assistant {/* #option-a-connect-gladys-to-the-zigbee2mqtt-of-home-assistant */}

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

### Option B : migrer Zigbee2MQTT dans Gladys {/* #option-b-move-zigbee2mqtt-into-gladys */}

Tout votre réseau Zigbee tient dans le dossier de données de Zigbee2MQTT et sur le coordinateur (votre clé Zigbee). Recopiez le dossier, déplacez la clé, et Gladys reprend le réseau tel quel.

:::info[Avant de commencer]

- Vous avez un accès SSH à la machine Gladys.
- Vous gardez **la même clé Zigbee** que sous Home Assistant : les paramètres du réseau sont enregistrés dessus.
- Zigbee2MQTT n'est pas encore configuré dans Gladys. S'il l'est (vous avez utilisé l'option A, ou vous l'avez installé pour essayer), cliquez d'abord sur **Réinitialiser l'intégration** dans les **Réglages avancés** de l'onglet `Configuration`. Faites-le **avant** de copier les fichiers : la réinitialisation supprime le dossier Zigbee2MQTT de Gladys. Les appareils déjà ajoutés dans Gladys sont conservés.

:::

#### 1. Arrêtez Zigbee2MQTT dans Home Assistant {/* #1-stop-zigbee2mqtt-in-home-assistant */}

Dans Home Assistant, arrêtez le module **Zigbee2MQTT** et désactivez son option **Lancer au démarrage**, pour qu'il reste arrêté. **Deux Zigbee2MQTT ne doivent jamais tourner sur le même réseau.**

#### 2. Récupérez le dossier de Zigbee2MQTT {/* #2-get-the-zigbee2mqtt-folder */}

Avec le module **Samba share** ou **Terminal & SSH**, récupérez le dossier de Zigbee2MQTT. C'est le dossier `zigbee2mqtt` de la configuration de Home Assistant : `config/zigbee2mqtt` sur le partage Samba, `/homeassistant/zigbee2mqtt` (ou `/config/zigbee2mqtt`, selon la version du module) dans le terminal. Les fichiers qui comptent :

- `configuration.yaml`, et `devices.yaml` et `groups.yaml` s'ils existent ;
- `database.db` ;
- `coordinator_backup.json` ;
- `state.json` (facultatif : les derniers états connus).

Gardez une copie de ce dossier tel quel : c'est votre retour en arrière.

#### 3. Copiez les fichiers sur la machine Gladys {/* #3-copy-the-files-to-the-gladys-machine */}

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

#### 4. Corrigez `configuration.yaml` {/* #4-edit-configurationyaml */}

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

#### 5. Installez Zigbee2MQTT depuis Gladys {/* #5-install-zigbee2mqtt-from-gladys */}

Branchez la clé Zigbee sur la machine Gladys. Si Gladys tourne dans une machine virtuelle, passez-lui la clé (voir le [guide Proxmox](/fr/docs/installation/proxmox)).

Dans Gladys, allez dans **Intégrations > Zigbee2MQTT**, onglet `Configuration`, et suivez l'[assistant d'installation](/fr/docs/integrations/zigbee2mqtt#install-zigbee2mqtt-with-the-setup-wizard) : Gladys reconnaît les clés les plus courantes (ConBee II, SONOFF ZBDongle-P et ZBDongle-E…) ; sinon, choisissez son modèle dans la liste. Cliquez sur **Installer**.

Gladys garde le `configuration.yaml` qu'elle trouve dans le dossier : Zigbee2MQTT démarre donc sur votre réseau existant. Une fois le réseau prêt, le tableau de bord affiche le nombre d'appareils du réseau.

#### 6. Vérifiez vos appareils {/* #6-check-your-devices */}

- Les appareils déjà ajoutés dans Gladys avec l'option A fonctionnent de nouveau tels quels.
- Les autres apparaissent dans l'onglet `Découverte Zigbee` : [ajoutez-les dans Gladys](/fr/docs/integrations/zigbee2mqtt#add-devices).

Les capteurs sur pile affichent leurs valeurs à leur prochain envoi.

#### Revenir à Home Assistant {/* #go-back-to-home-assistant */}

Un souci ? Sur le tableau de bord de Gladys, cliquez sur **Arrêter** (Gladys s'en souvient et ne relance pas Zigbee2MQTT). Rebranchez la clé sur la machine Home Assistant, remettez votre copie du dossier si besoin, et relancez le module Zigbee2MQTT.

### Les appareils appairés avec ZHA {/* #devices-paired-with-zha */}

ZHA (l'intégration Zigbee intégrée à Home Assistant), c'est un autre cas :

- **ZHA ne passe pas par MQTT.** Gladys ne peut donc pas s'y connecter, et l'option A ne marche pas pour ces appareils.
- **Gladys gère un seul Zigbee2MQTT, donc une seule clé Zigbee.** Si vous utilisiez une clé pour Zigbee2MQTT et une autre pour ZHA, vous ne pourrez pas faire tourner les deux dans Gladys.

Le plus simple et le plus fiable : migrer le réseau Zigbee2MQTT (option B), puis ré-appairer dessus les appareils qui étaient sous ZHA, depuis l'onglet `Découverte Zigbee`, avec **Autoriser l'association**. C'est un peu de manipulation une fois, mais vous avez ensuite un seul réseau, et un maillage plus solide.

Si tous vos appareils Zigbee sont sous ZHA, arrêtez ZHA dans Home Assistant (ou éteignez Home Assistant), branchez la clé sur la machine Gladys, [installez Zigbee2MQTT](/fr/docs/integrations/zigbee2mqtt#install-zigbee2mqtt-with-the-setup-wizard) et ré-appairez vos appareils.

## Z-Wave {/* #z-wave */}

Gladys parle au Z-Wave via [Z-Wave JS UI](/fr/docs/integrations/zwavejs-ui), en MQTT. Votre réseau Z-Wave (les appareils et leurs numéros de nœud) est enregistré **sur la clé Z-Wave elle-même** : branchée sur un autre Z-Wave JS UI, la clé emporte ses appareils avec elle.

**Pour tester Gladys d'abord :** si Home Assistant utilise le module **Z-Wave JS UI**, activez sa passerelle MQTT, connectée au Mosquitto de Home Assistant, avec les réglages donnés dans le [guide Z-Wave JS UI](/fr/docs/integrations/zwavejs-ui#configurer-z-wave-js-ui), puis connectez Gladys à ce broker. Le module officiel **Z-Wave JS** n'a pas de passerelle MQTT : Gladys ne peut pas s'y connecter.

**Pour déplacer la clé :**

1. **Notez les clés de sécurité** de votre réseau : dans l'onglet **Configuration** du module Z-Wave JS (les clés S0, S2 et Long Range), ou dans **Settings > Z-Wave** de Z-Wave JS UI. Sans elles, les appareils appairés de façon sécurisée (serrures, alarmes…) ne répondent plus.
2. **Arrêtez le module** dans Home Assistant et désactivez son option **Lancer au démarrage**.
3. **Installez Z-Wave JS UI** sur la machine Gladys, avec Docker (voir la [documentation de Z-Wave JS UI](https://zwave-js.github.io/zwave-js-ui/#/getting-started/docker)), à côté d'un broker MQTT : celui qu'installe l'[intégration MQTT](/fr/docs/integrations/mqtt) de Gladys convient. Branchez la clé.
4. Dans Z-Wave JS UI, entrez **les mêmes clés de sécurité** dans **Settings > Z-Wave**, puis les réglages MQTT et Gateway du [guide Z-Wave JS UI](/fr/docs/integrations/zwavejs-ui#configurer-z-wave-js-ui).
5. Dans Gladys, connectez l'[intégration Z-Wave JS UI](/fr/docs/integrations/zwavejs-ui#connecter-gladys-à-z-wave-js-ui) au broker, puis ajoutez vos appareils depuis l'onglet **Découverte Z-Wave JS UI**.

Gladys identifie les appareils Z-Wave par leur numéro de nœud, que la clé conserve : les appareils ajoutés dans Gladys avant le déplacement continuent de fonctionner. Les noms donnés dans Home Assistant ne suivent pas : renommez les appareils dans Gladys.

## Matter {/* #matter */}

Un appareil Matter peut être piloté par plusieurs contrôleurs à la fois (multi-admin). Pas besoin, donc, de le retirer de Home Assistant pour l'ajouter dans Gladys :

1. Dans Home Assistant, ouvrez l'appareil et cliquez sur **Partager l'appareil**, puis de nouveau sur **Partager l'appareil** : Home Assistant affiche un QR code et un code de partage. Le code expire au bout de quelques minutes : entrez-le tout de suite dans Gladys.
2. Dans Gladys, allez dans **Intégrations > Matter**, onglet **Ajouter un appareil**, entrez ce code, puis ajoutez l'appareil depuis l'onglet **Appareils** (voir le [guide Matter](/fr/docs/integrations/matter#configuration-dans-gladys-assistant)).

Gladys devient un contrôleur de l'appareil, à côté de Home Assistant : l'appareil continue de fonctionner avec Gladys une fois Home Assistant éteint.

:::warning[Appareils Thread]
Un appareil Matter over Thread a besoin d'un **routeur de bordure Thread** sur votre réseau, et Gladys n'en est pas un. Si le vôtre est celui de Home Assistant (le module OpenThread Border Router, avec une clé Home Assistant Connect ZBT-1 ou ZBT-2, par exemple), vos appareils Thread ne répondent plus quand vous éteignez Home Assistant. Avant cela, lisez [Si votre appareil utilise uniquement Thread](/fr/docs/integrations/matter#si-votre-appareil-utilise-thread-uniquement), et demandez sur le forum en cas de doute.
:::

## Appareils MQTT et autres intégrations {/* #mqtt-devices-and-other-integrations */}

**Appareils MQTT.** Depuis Gladys 4.86, l'[intégration MQTT](/fr/docs/integrations/mqtt) comprend le protocole de **découverte Home Assistant** : les appareils qui publient leur configuration sur le topic `homeassistant/` du broker (ESPHome en MQTT, OpenMQTTGateway, montages DIY…) apparaissent d'eux-mêmes dans son onglet **Découverte**. Vous pouvez d'abord connecter l'intégration MQTT au Mosquitto de Home Assistant, puis faire pointer vos appareils vers le broker de Gladys avant d'éteindre Home Assistant.

N'ajoutez pas vos appareils Zigbee depuis cet onglet : Zigbee2MQTT peut aussi publier des messages de découverte Home Assistant, mais utilisez pour eux l'intégration Zigbee2MQTT, qui les gère entièrement.

**Appareils qui ont leur intégration.** Beaucoup de marques ont leur intégration dans Gladys, native ou communautaire : [Tasmota](/fr/docs/integrations/tasmota), [ESPHome](/fr/docs/integrations/external/esphome), [Shelly](/fr/docs/integrations/external/shelly), [Philips Hue](/fr/docs/integrations/external/philips-hue), [Netatmo](/fr/docs/integrations/external/netatmo), [Tuya](/fr/docs/integrations/external/tuya), caméras… Cherchez la vôtre dans le [catalogue des intégrations](/fr/docs/integrations/), et ajoutez vos appareils depuis celle-ci : ils restent appairés à leur pont, leur cloud ou votre Wi-Fi, il n'y a donc rien à ré-appairer.

## Automatisations, tableaux de bord et historique {/* #automations-dashboards-and-history */}

Tout cela reste dans Home Assistant :

- **Automatisations et scripts** : recréez-les sous forme de [scènes](/fr/docs/scenes/intro). Activez-les dans Gladys seulement une fois désactivées dans Home Assistant, sinon elles s'exécutent deux fois.
- **Tableaux de bord** : recréez-les dans Gladys avec les [tableaux de bord](/fr/docs/dashboard/intro).
- **Historique** : l'historique de vos capteurs n'est pas transféré. Gladys commence à l'enregistrer quand vous ajoutez un appareil.
- **Node-RED** : si vous utilisez le module Node-RED, vous pouvez exporter vos flows et les importer dans l'[intégration Node-RED](/fr/docs/integrations/node-red) de Gladys. Les nœuds Home Assistant ne fonctionnent plus : remplacez-les par des nœuds MQTT.

## Éteindre Home Assistant {/* #turn-home-assistant-off */}

Avant d'éteindre Home Assistant pour de bon, vérifiez que :

- chaque radio (clé Zigbee, clé Z-Wave) est branchée sur la machine Gladys, et son module est arrêté dans Home Assistant ;
- plus aucun appareil n'utilise le broker Mosquitto de Home Assistant (Tasmota, Shelly, ESPHome…) : faites-les pointer vers le broker de Gladys ;
- vos appareils Thread ont un routeur de bordure autre que Home Assistant (voir [Matter](#matter)) ;
- vos scènes tournent dans Gladys.

Gardez une sauvegarde de Home Assistant pendant quelques semaines : c'est votre plan B.

## Besoin d'aide ? {/* #need-help */}

Si vous bloquez à une étape, posez votre question sur le [forum de la communauté](https://community.gladysassistant.com/).
