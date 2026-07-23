---
id: external-integrations
title: Créer une intégration externe
description: "La façon la plus simple de créer et publier une intégration Gladys Assistant. Sans pull request, sans review de code, sans attente : empaquetez votre intégration dans un conteneur Docker, publiez-la sur GitHub, et n'importe quel utilisateur peut l'installer en un clic."
sidebar_label: Intégrations externes (recommandé)
---

**Les intégrations externes sont la façon la plus simple et la plus rapide de créer une intégration pour Gladys Assistant, et de la publier à tous les utilisateurs en un clic.**

Il n'y a **aucune pull request à ouvrir, aucune review de code à attendre, et aucune validation du mainteneur**. Vous écrivez votre intégration dans le langage de votre choix, vous l'empaquetez dans une image Docker, vous publiez un dépôt GitHub public, et elle devient installable par n'importe qui, depuis n'importe quelle instance Gladys.

Cette page est un tutoriel complet, étape par étape, à destination des développeurs.

## Pourquoi les intégrations externes ?

Historiquement, ajouter une intégration à Gladys signifiait [contribuer au projet cœur](/fr/docs/dev/developing-a-service/) : forker le dépôt, coder le service dans la base de code de Gladys, écrire des tests unitaires, ouvrir une pull request, et attendre qu'un mainteneur la review et la merge. Ce chemin existe toujours et reste idéal pour les protocoles qui ont leur place dans le cœur, mais il a des frictions : il faut connaître les rouages internes de Gladys, respecter les conventions de code, et le mainteneur est un goulot d'étranglement.

Les intégrations externes suppriment ce goulot d'étranglement (une validation automatique du manifeste reste effectuée, mais sans humain dans la boucle) :

| | Intégration interne | Intégration externe |
| --- | --- | --- |
| Où vit le code | Dans le dépôt de Gladys | Votre propre dépôt GitHub |
| Langage | Node.js uniquement | N'importe quel langage (conteneur Docker) |
| Review nécessaire | Oui, un mainteneur doit merger votre PR | **Aucune review, aucune validation** |
| Publication | Livrée avec la prochaine version de Gladys | **Disponible immédiatement**, indexée automatiquement |
| Installation pour les utilisateurs | Intégrée | **En un clic** depuis le catalogue |
| Isolation | Tourne dans le processus Gladys | Tourne dans un **conteneur Docker sécurisé** |

Comme une intégration externe tourne dans son propre conteneur durci, supervisé par Gladys, un bug ou un crash dans votre code **reste confiné** : il ne peut pas faire tomber l'instance Gladys de l'utilisateur ni les autres intégrations. C'est cette garantie de stabilité qui permet de publier sans review.

## Comment ça marche

Une intégration externe est un **conteneur Docker** qui dialogue avec Gladys via deux canaux :

- Une **API REST hôte** exposée par Gladys sur `/api/integration/v1/*`, utilisée pour publier les appareils découverts, pousser les états des appareils, envoyer des images de caméra, et lire ou écrire votre configuration.
- Un **canal WebSocket**, utilisé par Gladys pour envoyer des commandes à votre intégration en temps réel (allumer un interrupteur, interroger un appareil, lancer un scan, capturer une image de caméra) et pour vous notifier des événements de cycle de vie des appareils (un appareil a été créé, modifié ou supprimé par l'utilisateur).

Vous n'avez à implémenter aucune de cette plomberie vous-même : le [SDK JavaScript officiel](https://github.com/GladysAssistant/integration-sdk-js) gère pour vous l'authentification, la connexion WebSocket, la reconnexion automatique avec backoff exponentiel, les accusés de réception des commandes, et la resynchronisation de l'état. Vous pouvez écrire votre intégration dans n'importe quel langage, mais le SDK vous fait gagner beaucoup de temps.

Au-delà des bases (appareils, états, configuration), la plateforme prend aussi en charge les **caméras**, les **services cloud OAuth2**, les **boutons d'action à la demande**, les **badges de transport local/cloud** (avec un état dégradé), la **découverte réseau médiée** (mDNS, SSDP, broadcast UDP), les **sous-conteneurs avec accès au matériel**, les **canaux de messagerie**, et les **webhooks entrants** (via Gladys Plus). Chacun de ces points est couvert dans sa propre section ci-dessous.

La plupart des intégrations sont de type `device` (elles exposent des appareils à Gladys). Un second type, `communication`, permet de construire un canal de messagerie à la place (un pont de chat ou de notifications, comme Telegram) ; voir [Canaux de messagerie](#canaux-de-messagerie).

Quelques règles de conception importantes à garder en tête :

- **Votre intégration ne crée ni ne supprime jamais d'appareils.** Elle *publie* les appareils qu'elle découvre, et l'utilisateur décide, depuis l'interface de Gladys, lesquels créer, modifier ou supprimer. Cela garde l'utilisateur aux commandes et l'interface cohérente.
- Gladys exécute votre conteneur avec des limites strictes : **256 Mo de mémoire, 0,5 CPU, un système de fichiers racine en lecture seule, aucune capacité Linux supplémentaire, et un unique volume `/data` accessible en écriture**. Concevez votre intégration pour vivre dans ces limites (les sous-conteneurs peuvent déclarer leurs propres limites, plus élevées, voir plus bas).

## Prérequis

- Une instance Gladys Assistant en version **4.84.0 ou ultérieure** (les intégrations externes ont été introduites dans cette version).
- [Docker](https://www.docker.com/) installé sur votre machine de développement.
- [Node.js 24 ou ultérieur](https://nodejs.org/) si vous utilisez le SDK JavaScript (le SDK requiert Node.js 20 ou ultérieur, mais la version 24 est recommandée).
- Un registre Docker public pour héberger votre image. L'option la plus simple est le [GitHub Container Registry](https://docs.github.com/packages/working-with-a-github-packages-registry/working-with-the-container-registry) (`ghcr.io`), qui garde votre image au même endroit que votre code, et sur lequel le template officiel publie automatiquement. Docker Hub ou n'importe quel autre registre public fonctionne aussi, tant que l'image est téléchargeable de façon anonyme.
- Un compte [GitHub](https://github.com/) pour publier votre dépôt.

## Étape 1 : Partir du template

La façon la plus rapide de démarrer est le dépôt template officiel :

👉 [GladysAssistant/integration-template-js](https://github.com/GladysAssistant/integration-template-js)

Cliquez sur **« Use this template »** sur GitHub pour créer votre propre dépôt. Il contient déjà une intégration fonctionnelle (des capteurs, un interrupteur, une lampe variable, une prise connectée, un détecteur de mouvement et une caméra), un `Dockerfile`, un manifeste valide, la documentation obligatoire `docs/en.md` et `docs/fr.md`, et un workflow GitHub Actions de publication prêt à l'emploi, pour que vous puissiez vous concentrer sur la logique de vos appareils.

## Étape 2 : Écrire votre intégration avec le SDK

Installez le SDK dans votre projet :

```bash
npm install @gladysassistant/integration-sdk
```

Voici un exemple complet et fonctionnel d'une intégration d'interrupteur virtuel :

```js
import {
  GladysIntegration,
  DEVICE_FEATURE_CATEGORIES,
  DEVICE_FEATURE_TYPES,
  logger,
} from "@gladysassistant/integration-sdk";

const gladys = new GladysIntegration();

// Appelé quand l'utilisateur demande à Gladys de scanner de nouveaux appareils.
// Publiez la liste complète des appareils que votre intégration peut offrir.
gladys.onScanRequest(async () => {
  const ids = gladys.externalIds("switch", "0x00158d0001a2b3c4");
  await gladys.publishDiscoveredDevices([
    {
      name: "Interrupteur virtuel",
      external_id: ids.device,
      features: [
        {
          name: "Marche/Arrêt",
          external_id: ids.feature("binary"),
          category: DEVICE_FEATURE_CATEGORIES.SWITCH,
          type: DEVICE_FEATURE_TYPES.SWITCH.BINARY,
          min: 0,
          max: 1,
          read_only: false,
          has_feedback: true,
          keep_history: true,
        },
      ],
    },
  ]);
});

// Appelé quand l'utilisateur allume ou éteint l'interrupteur depuis Gladys.
// Faites le vrai travail ici, puis confirmez le nouvel état à Gladys.
gladys.onSetValue(async (device, feature, value) => {
  // ... envoyez la commande à votre vrai appareil ici ...
  await gladys.publishState(feature.external_id, value);
});

// Réagissez aux changements de configuration faits par l'utilisateur.
gladys.onConfigUpdated(async (config) => {
  logger.info("Configuration mise à jour", config);
});

// Quittez proprement sur SIGTERM/SIGINT (arrêt, redémarrage ou mise à jour Docker).
gladys.handleShutdown();

// Authentifiez-vous, ouvrez le WebSocket, et resynchronisez.
await gladys.connect();
```

Voilà toute l'intégration. Le SDK lit les identifiants que Gladys injecte dans le conteneur sous forme de variables d'environnement, il n'y a donc aucune configuration à câbler à la main. Utiliser les constantes exportées `DEVICE_FEATURE_CATEGORIES`, `DEVICE_FEATURE_TYPES` et `DEVICE_FEATURE_UNITS` (plutôt que des chaînes brutes) garde vos fonctionnalités alignées avec les catégories, types et unités que Gladys comprend.

### L'API du SDK en un coup d'œil

Enregistrez vos gestionnaires d'événements **avant** d'appeler `connect()`.

**Connexion**

- `new GladysIntegration(options?)` : le constructeur lit par défaut `GLADYS_HOST_API_URL`, `GLADYS_INTEGRATION_TOKEN` et `GLADYS_INTEGRATION_SELECTOR` depuis l'environnement. Vous pouvez les surcharger (ainsi que les délais de reconnexion, le timeout des requêtes ou le logger) via `options`.
- `connect()` : s'authentifie, ouvre le WebSocket, resynchronise l'état, et continue de se reconnecter automatiquement (backoff exponentiel, de 1 s à 60 s).
- `disconnect()` : ferme proprement la connexion et arrête de se reconnecter.
- `handleShutdown(cleanup?)` : quitte proprement sur `SIGTERM`/`SIGINT`, en exécutant d'abord votre callback de nettoyage optionnel. Important pour que Docker puisse arrêter et redémarrer votre conteneur proprement.

**Appareils**

- `publishDiscoveredDevices(devices)` : publie la liste complète des appareils que vous proposez (affichée à l'utilisateur dans l'onglet Découverte).
- `getDevices()` : retourne les appareils réellement créés par l'utilisateur.
- `externalIds(type, platformId)` : retourne `{ device, feature(key) }`, la façon recommandée de construire des identifiants stables et correctement formatés pour un appareil et ses fonctionnalités.
- `externalId(suffix)` : l'aide de plus bas niveau si vous préférez construire un identifiant unique vous-même.

**État**

- `publishState(featureExternalId, value)` : publie une mise à jour d'état unique (un nombre ou un objet).
- `publishStates(states)` : publie un lot de mises à jour (jusqu'à 100 par requête). L'API hôte limite les mises à jour d'état à **300 états par minute** par intégration, publiez donc des *changements* d'état, pas des instantanés complets.

**Configuration et statut**

- `getConfig()` / `setConfig(partialConfig)` : lit et écrit vos valeurs de configuration.
- `getStatus()` : retourne la version de Gladys et le statut du service.
- `setConnectionStatus(connected, message?)` : rapporte votre statut de connexion applicatif (par exemple « token cloud expiré »), indépendamment du lien WebSocket avec Gladys.

**Événements (gestionnaires)**

- `onSetValue(cb)` : la valeur d'une fonctionnalité a changé (une commande de l'utilisateur).
- `onPoll(cb)` : Gladys vous demande d'interroger un appareil.
- `onScanRequest(cb)` : Gladys vous demande de découvrir des appareils.
- `onGetImage(cb)` : Gladys demande une image de caméra fraîche (voir Caméras).
- `onDeviceCreated(cb)` / `onDeviceUpdated(cb)` / `onDeviceDeleted(cb)` : événements de cycle de vie des appareils.
- `onConfigUpdated(cb)` : la configuration a changé.
- `onAction(key, cb)` : un bouton d'action du manifeste a été pressé (voir Actions).
- `onOAuthAuthorizeUrl(cb)` / `onOAuthCallback(cb)` : connexion OAuth2 cloud (voir OAuth2).
- `onHardwareUpdated(cb)` : une autorisation matérielle pour un sous-conteneur a changé.
- `onSendMessage(cb)` : délivrer un message à un contact (voir Canaux de messagerie).
- `onWebhook(key, cb)` / `onWebhookUpdated(cb)` : webhooks entrants (voir Webhooks entrants).

Les commandes sont acquittées automatiquement en cas de succès ; lever une exception dans un gestionnaire acquitte la commande en échec. Vous pouvez aussi inspecter l'état local directement via `gladys.devices`, `gladys.config` et `gladys.connected`.

Les capacités suivantes sont optionnelles. Passez directement à l'[Étape 3](#étape-3--écrire-le-manifeste) si vous n'avez besoin que des appareils, des états et de la configuration.

### Caméras

Les caméras utilisent la catégorie `camera` avec un type de fonctionnalité `image`, et disposent de leur propre canal dédié (les données d'image ne passent jamais par `publishState`, elles restent donc hors de l'historique des états et hors de la limite de 300 états par minute). Il existe deux chemins complémentaires :

- **Pousser** un instantané périodique avec `publishCameraImage(externalId, image)` (limité à 12 images par minute et par appareil).
- **Tirer** à la demande en répondant au gestionnaire `onGetImage`. Son accusé de réception est attendu jusqu'à **15 secondes** (au lieu des 5 standard), ce qui laisse le temps à une capture de type `ffmpeg` de s'exécuter.

```js
gladys.onGetImage(async (device) => {
  const jpeg = await captureSnapshot(device);
  return `image/jpg;base64,${jpeg.toString("base64")}`;
});

// Ou poussez un instantané de façon proactive :
await gladys.publishCameraImage(ids.device, `image/jpg;base64,${jpeg.toString("base64")}`);
```

Les images sont des chaînes `image/jpg;base64,...` et doivent rester sous 150 Ko.

### Services cloud OAuth2

Pour les fournisseurs cloud qui utilisent OAuth2, déclarez un champ de configuration de type `oauth2` dans votre manifeste, puis construisez l'URL d'autorisation et gérez le callback :

```js
let state;

gladys.onOAuthAuthorizeUrl(async (key, redirectUri) => {
  state = crypto.randomUUID();
  return `https://api.provider.com/oauth2/authorize?client_id=${gladys.config.client_id}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=read&state=${state}`;
});

gladys.onOAuthCallback(async (key, { code, state: returnedState, redirectUri }) => {
  if (returnedState !== state) throw new Error("état invalide");
  const tokens = await exchangeCodeForTokens(code, redirectUri);
  await gladys.setConfig({ access_token: tokens.access_token, refresh_token: tokens.refresh_token });
  await gladys.setConnectionStatus(true);
});
```

Le rafraîchissement du token est de la responsabilité de votre intégration. Quand il expire, signalez-le avec `setConnectionStatus(false, { en: "Token expired, please reconnect.", fr: "Token expiré, reconnectez-vous." })`.

### Boutons d'action

Déclarez `actions` dans votre manifeste pour exposer des opérations à la demande avec un résultat visible. Chaque action est rendue sous forme de bouton (avec un mini-formulaire optionnel) dans l'onglet Configuration :

```js
gladys.onAction("detect_protocol", async (fields) => {
  const version = await tryProtocolVersions(fields.ip);
  return { en: `Protocol ${version} detected`, fr: `Protocole ${version} détecté` };
});
```

La valeur résolue (une chaîne ou un objet multilingue) est affichée sous le bouton ; lever une exception affiche le message d'erreur à la place. Chaque action a son propre `timeout_seconds` (de 5 à 120, 30 par défaut).

### Transports local/cloud

Les intégrations à double canal (Tuya cloud + LAN, Shelly, eWeLink, etc.) peuvent atteindre le même appareil via différents transports, par appareil et changeant au fil du temps. Déclarez les canaux que vous prenez en charge dans le champ `transports` du manifeste, puis publiez le transport courant de chaque appareil :

```js
import { DEVICE_TRANSPORTS } from "@gladysassistant/integration-sdk";

await gladys.publishTransports([
  { external_id: ids.device, transport: DEVICE_TRANSPORTS.LOCAL },
]);
```

Les valeurs valides sont `local`, `cloud` et `unreachable`. Une clé de configuration réservée, `GLADYS_PREFER_LOCAL` (booléen, `true` par défaut), reflète la préférence de l'utilisateur et est accessible via `gladys.config` et `onConfigUpdated`.

Une entrée de transport peut aussi porter un **état dégradé**, orthogonal au transport lui-même, pour signaler une situation « ça marche, mais pas de façon nominale ». Ajoutez `degraded: true` et un `message` multilingue (avec `en` obligatoire, jusqu'à 200 caractères) :

```js
await gladys.publishTransports([
  {
    external_id: ids.device,
    transport: DEVICE_TRANSPORTS.CLOUD,
    degraded: true,
    message: { en: "Local session refused, falling back to cloud", fr: "Session locale refusée, repli sur le cloud" },
  },
]);
```

### Découverte réseau

Les conteneurs d'intégration tournent sur un réseau bridge isolé, si bien que le trafic broadcast LAN, mDNS et SSDP ne leur parvient jamais directement. La découverte est médiée par le cœur de Gladys : **le cœur capture (il a la position réseau), et votre intégration interprète (elle a la connaissance du protocole)**.

Déclarez les captures dont vous avez besoin dans le champ `network_discovery` du manifeste, puis demandez un scan à la demande (typiquement depuis `onScanRequest`) :

```js
gladys.onScanRequest(async () => {
  const announcements = await gladys.scanNetwork("udp-broadcast", { timeoutSeconds: 10 });
  const devices = announcements.map(({ source_ip, payload_base64 }) => {
    const announcement = decodePayload(Buffer.from(payload_base64, "base64"));
    const ids = gladys.externalIds("plug", announcement.id);
    return {
      name: `Appareil ${announcement.id}`,
      external_id: ids.device,
      params: [{ name: "IP_ADDRESS", value: source_ip }],
      features: [],
    };
  });
  await gladys.publishDiscoveredDevices(devices);
});
```

Les scans sont synchrones et bornés (`timeoutSeconds` de 1 à 30). Les types pris en charge sont `udp-broadcast` (écoute passive), `udp-active-broadcast` (le cœur envoie une charge utile que vous fournissez et relaie les réponses unicast, limité à une toutes les 10 secondes avec une charge utile jusqu'à 512 octets), `mdns` et `ssdp`. Pour `udp-active-broadcast`, passez le `port` et le `payload` à envoyer :

```js
const replies = await gladys.scanNetwork("udp-active-broadcast", {
  port: 6667,
  payload: buildProbe(),
  timeoutSeconds: 10,
});
```

### Sous-conteneurs et matériel

Certaines intégrations ont besoin de services compagnons (un broker MQTT, Frigate, un pont de protocole) ou d'un accès à un dongle USB ou à un Coral TPU. Déclarez-les dans le champ `containers` du manifeste (jusqu'à cinq), puis gérez leur cycle de vie via le SDK :

```js
await gladys.startContainer("mqtt", { env: { MQTT_PASSWORD: password } });

const containers = await gladys.getContainers();
const frigate = containers.find((c) => c.name === "frigate");
const coral = frigate.devices.find((d) => d.class === "coral-usb");
const detector = coral.granted && coral.available ? "edgetpu" : "cpu";
```

`getContainers()`, `startContainer(name, options?)`, `stopContainer(name)` et `restartContainer(name)` contrôlent les conteneurs compagnons. Quand l'utilisateur accorde ou révoque l'accès à un matériel, le gestionnaire `onHardwareUpdated` se déclenche pour que vous puissiez régénérer la configuration et redémarrer le conteneur concerné.

### Journalisation

Le SDK fournit un logger structuré pour que les logs de votre conteneur soient lisibles directement depuis `docker logs` :

```js
import { logger, createLogger } from "@gladysassistant/integration-sdk";

logger.info("Démarrage de l'intégration...");

const log = createLogger({ name: "weather-station" });
log.child("poll").debug("rafraîchissement");
```

Le niveau de log provient de la variable d'environnement `LOG_LEVEL` (`debug`, `info`, `warn`, `error`, `silent` ; `info` par défaut). Le SDK journalise aussi son propre cycle de vie de connexion sous le nom `gladys-sdk`, si bien que les problèmes de connectivité sont diagnostiquables sans aucune configuration supplémentaire.

### Canaux de messagerie

Au lieu d'exposer des appareils, une intégration peut être un **canal de messagerie** : mettez `"type": "communication"` dans le manifeste pour construire un pont de chat ou de notifications (Telegram, Matrix, etc.). Plutôt que des appareils, vous échangez des messages avec des **contacts** que les utilisateurs relient à leur compte Gladys :

```js
// Gladys vous demande de délivrer un message sortant à un contact.
gladys.onSendMessage(async (contact, message) => {
  await sendToProvider(contact.id, message.text);
});

// Reliez un contact du fournisseur à un utilisateur Gladys à partir d'un code d'appairage.
const contact = await gladys.linkContact(code, providerUserId, "Alice");

// Transférez un message entrant du fournisseur vers Gladys.
await gladys.publishMessage(contactId, "La maison est maintenant vide.");
```

- `onSendMessage(cb)` : Gladys vous demande de délivrer un message. Son premier argument est le `contact` cible (`{ id }` pour un canal bidirectionnel, ou les champs de contact de l'utilisateur pour un canal en envoi seul).
- `publishMessage(contactId, text, opts?)` : transfère un message entrant vers Gladys (texte du message jusqu'à 4096 caractères).
- `linkContact(code, contactId, name?)` : relie un contact du fournisseur à un utilisateur Gladys à partir d'un code d'appairage à usage unique (valable 15 minutes), et retourne le selector de l'utilisateur, son prénom et sa langue.
- `getContacts()` : liste les contacts actuellement reliés à ce canal.

Une intégration `communication` a un écran de Configuration (issu de son `config_schema`) mais pas d'onglet Appareils ni Découverte.

### Webhooks entrants (Gladys Plus)

Quand l'instance de l'utilisateur est connectée à **Gladys Plus**, votre intégration peut recevoir des **webhooks entrants** sur des URLs HTTPS publiques, ce qui est pratique pour les fournisseurs cloud qui poussent des événements ou qui ont besoin d'une URL de callback. Déclarez-en jusqu'à trois dans le champ `webhooks` du manifeste, puis traitez-les :

```js
// Fire-and-forget : acquitté immédiatement, les erreurs du gestionnaire sont ignorées.
gladys.onWebhook("events", async ({ body }) => {
  await refreshFromApi();
});

// Sync : vous retournez la réponse HTTP (statut de 200 à 499, corps jusqu'à 64 Ko).
gladys.onWebhook("callback", async ({ query }) => ({
  status: 200,
  contentType: "application/json",
  body: JSON.stringify({ "hub.challenge": query["hub.challenge"] }),
}));
```

- `getWebhooks()` : retourne `{ available, webhooks: [{ key, mode, url }] }`. L'URL publique n'existe que lorsque Gladys Plus est relié, enregistrez-la donc auprès du service tiers à l'exécution.
- `onWebhook(key, cb)` : le callback reçoit `{ method, query, body, contentType }`.
- `onWebhookUpdated(cb)` : se déclenche quand Gladys Plus est relié ou délié, ou qu'une URL change, pour que vous puissiez ré-enregistrer vos webhooks.

## Étape 3 : Écrire le manifeste

Chaque intégration externe est décrite par un unique fichier nommé `gladys-assistant-integration.json`, placé à la **racine de votre dépôt** :

```json
{
  "manifest_version": 1,
  "type": "device",
  "name": "Mon Intégration",
  "description": {
    "en": "Control my devices from Gladys Assistant.",
    "fr": "Contrôlez mes appareils depuis Gladys Assistant."
  },
  "version": "1.0.0",
  "docker_image": "ghcr.io/yourname/my-integration:1.0.0",
  "gladys_version": ">=4.84.0",
  "cover_image": "https://raw.githubusercontent.com/yourname/my-integration/main/cover.jpg",
  "transports": ["local", "cloud"],
  "config_schema": [
    {
      "key": "api_key",
      "type": "secret",
      "label": { "en": "API key", "fr": "Clé d'API" },
      "placeholder": { "en": "sk-1234...", "fr": "sk-1234..." },
      "required": true
    }
  ]
}
```

### Champs du manifeste

| Champ | Requis | Description |
| --- | --- | --- |
| `manifest_version` | Oui | Doit valoir `1`. |
| `type` | Oui | `"device"` (expose des appareils) ou `"communication"` (un canal de messagerie). |
| `name` | Oui | Nom d'affichage, de 3 à 30 caractères. |
| `description` | Oui | Un objet indexé par langue. `en` est obligatoire, chaque texte fait de 10 à 100 caractères. |
| `version` | Oui | [Version sémantique](https://semver.org/) stricte. L'incrémenter notifie les utilisateurs qu'une mise à jour est disponible. |
| `docker_image` | Oui | Une référence d'image bien formée avec un tag ou un digest explicite. Elle doit exister et être téléchargeable de façon anonyme. |
| `gladys_version` | Oui | Une plage semver (syntaxe npm) utilisée pour filtrer les instances compatibles. |
| `cover_image` | Non | URL HTTPS directe vers une image de couverture (voir les règles ci-dessous). |
| `config_schema` | Non | La liste des champs de configuration affichés à l'utilisateur. |
| `transports` | Non | Sous-ensemble non vide de `local` et `cloud`, si votre intégration est à double canal. |
| `actions` | Non | De 1 à 10 boutons d'action, chacun avec une `key`, un `label` multilingue, un `timeout_seconds` (de 5 à 120) et des `fields` optionnels. |
| `network_discovery` | Non | De 1 à 5 méthodes de capture médiée (`udp-broadcast`, `udp-active-broadcast`, `mdns`, `ssdp`). |
| `containers` | Non | Jusqu'à 5 conteneurs compagnons, chacun avec `name`, `docker_image`, `start` (`auto` ou `manual`), et optionnellement `env`, `volumes`, `ports`, `devices` (`coral-usb`, `coral-pcie`, `gpu`, `video`), `read_only`, `command`, `memory_mb` (de 32 à 4096), `cpu` (de 0,1 à 2), `shm_mb` (de 64 à 512). |
| `webhooks` | Non | Jusqu'à 3 webhooks entrants (Gladys Plus), chacun avec une `key`, un `label` multilingue, et un `mode` (`fire_and_forget` ou `sync`). |

### Le schéma de configuration

`config_schema` est une liste plate de champs. Chaque champ a une `key` (en minuscules, correspondant à `[a-z0-9_]`), un `type`, et un `label` multilingue (avec `en` obligatoire). Les types pris en charge sont `string`, `number`, `boolean`, `select`, `multi_select`, `secret`, `oauth2` et `section`. Selon le type, un champ peut aussi déclarer `placeholder` (pour `string`/`number`/`secret`), `required`, `default`, `min`/`max` (pour les nombres) et `options` (pour `select`/`multi_select`).

Un `select` ou un `multi_select` peut soit lister des `options` statiques, soit tirer ses choix dynamiquement des appareils de l'utilisateur avec `source: "devices"`, et s'afficher en `dropdown` ou en `radio` (`display`). Un champ `section` est purement présentationnel : il affiche une `description` et jusqu'à cinq liens de documentation (`links`), et ne stocke aucune valeur.

Gladys génère automatiquement le formulaire de configuration à partir de cette liste, vous n'écrivez donc jamais de code frontend. Les valeurs marquées `secret` sont stockées de façon sécurisée et ne sont jamais renvoyées au frontend.

### Règles de l'image de couverture

Si vous fournissez une `cover_image`, elle doit être :

- au format JPEG ou PNG,
- exactement de **800 x 534 pixels**,
- de moins de **150 Ko**,
- servie en HTTPS avec une URL directe (sans redirection).

L'option la plus simple est de commiter l'image directement dans votre dépôt GitHub et d'utiliser son URL brute (`https://raw.githubusercontent.com/...`), comme montré dans l'exemple de manifeste ci-dessus.

Une couverture manquante ou invalide ne rejette pas votre intégration : elle est indexée avec une image par défaut et signalée par un avertissement.

### Documentation (obligatoire)

Chaque intégration doit fournir deux fichiers de documentation à la racine de son dépôt : `docs/en.md` et `docs/fr.md`, d'au moins **300 caractères** chacun. Le store les ré-héberge et les affiche aux utilisateurs dans le catalogue, si bien qu'un dépôt sans ces fichiers est **rejeté**. Couvrez l'essentiel : ce que fait l'intégration, ses prérequis, comment la configurer, et le dépannage. Le template inclut déjà les deux fichiers, prêts à compléter.

## Étape 4 : Construire et tester en local

Vous pouvez tout itérer sur votre machine avant de publier quoi que ce soit.

**Exécuter l'intégration directement (boucle la plus rapide).** Pendant le développement, exécutez votre code comme un simple processus Node.js contre une instance Gladys en cours d'exécution. Installez votre intégration dans Gladys en mode développeur pour obtenir un token et un selector, puis démarrez-la avec les trois variables d'environnement que Gladys injecterait sinon :

```bash
npm install
GLADYS_HOST_API_URL="http://localhost:1443" \
GLADYS_INTEGRATION_TOKEN="<token>" \
GLADYS_INTEGRATION_SELECTOR="my-integration" \
LOG_LEVEL=debug \
npm start
```

**Construire l'image Docker** pour tester l'artefact réel, conteneurisé :

```bash
docker build -t ghcr.io/yourname/my-integration:1.0.0 .
```

**Ou construisez-la sur GitHub en un clic.** Si vous préférez ne pas construire en local (ou si vous n'avez pas de builder multi-architectures configuré), le template fournit aussi un workflow **Build** que vous pouvez lancer à la main : allez dans l'onglet **Actions**, sélectionnez **Build**, cliquez sur **Run workflow**, et définissez éventuellement un tag d'image (il prend par défaut le nom de votre branche). GitHub construit l'image multi-architectures (`linux/amd64` et `linux/arm64`) et la pousse sur `ghcr.io` sous ce tag, sans jamais toucher `:latest`. Vous pouvez ensuite installer ce tag précis dans votre instance Gladys pour tester une vraie image, sans Docker en local. C'est une image de test, pas une release : utilisez l'[Étape 5](#étape-5--publier-votre-intégration) quand vous êtes prêt à publier pour tout le monde.

**Valider votre manifeste hors ligne** avec exactement les vérifications que fait l'indexeur du store, avant d'attendre le cycle horaire :

```bash
npx github:GladysAssistant/integration-store .
```

Il se termine avec le code 0 si votre `gladys-assistant-integration.json` est valide, et affiche les raisons sinon.

Une fois installée dans Gladys, regardez le statut passer de `LOADING` à `RUNNING`, ouvrez l'onglet **Configuration** généré, lancez un **scan** depuis l'onglet **Découverte**, créez un appareil, et actionnez-le pour vérifier que votre gestionnaire `onSetValue` reçoit bien la commande.

### Les trois onglets de toute intégration externe

Gladys affiche une interface générique pour chaque intégration externe, avec trois onglets :

- **Appareils** : les appareils que l'utilisateur a créés, avec des contrôles standards.
- **Découverte** : les appareils que votre intégration a publiés, chacun avec un bouton « créer » en un clic.
- **Configuration** : le formulaire généré à partir de votre `config_schema`, vos boutons d'action, ainsi que les contrôles de supervision (démarrer, arrêter, redémarrer, mettre à jour, voir les logs, désinstaller).

### Environnement du conteneur

Gladys injecte ces variables d'environnement dans votre conteneur. Le SDK les lit pour vous :

- `GLADYS_HOST_API_URL` : l'URL de base de l'API hôte.
- `GLADYS_INTEGRATION_TOKEN` : le token bearer utilisé pour s'authentifier.
- `GLADYS_INTEGRATION_SELECTOR` : le selector unique de votre instance d'intégration.
- `TZ` : le fuseau horaire de l'instance Gladys.

## Étape 5 : Publier votre intégration

La publication est volontairement triviale. Il n'y a **aucune soumission, aucune review, et aucune attente d'un mainteneur**.

Si vous êtes parti du template officiel, toute la publication est automatisée par un workflow GitHub Actions :

1. **Ajoutez le topic GitHub** `gladys-assistant-integration` à votre dépôt (l'engrenage à côté de « About » sur la page d'accueil du dépôt). C'est ce qui permet à l'indexeur de le découvrir.

2. **Lancez le workflow Release** : allez dans l'onglet **Actions**, sélectionnez **Release**, cliquez sur **Run workflow**, et choisissez l'incrément de version (`patch`, `minor` ou `major`). Le workflow va alors :
   - incrémenter la version dans `package.json` et dans le manifeste (`version` et `docker_image`),
   - créer et pousser un tag git `vX.Y.Z`,
   - construire des images **multi-architectures** (`linux/amd64` et `linux/arm64`),
   - les publier sur `ghcr.io` avec les tags `:X.Y.Z` et `:latest` (pensez à rendre le package public).

Et c'est tout. Un indexeur automatisé (une GitHub Action qui tourne toutes les heures) découvre chaque dépôt public portant le topic, lit et valide le manifeste, vérifie que l'image Docker est téléchargeable, ré-héberge l'image de couverture, et publie un catalogue mis à jour. En moins d'une heure, **votre intégration apparaît dans le store de chaque instance Gladys**, installable en un clic.

**Publier manuellement** (sans le workflow du template) fonctionne aussi : construisez et poussez vous-même votre image multi-architectures sur un registre public, mettez à jour `version` et `docker_image` dans le manifeste, puis taguez et poussez :

```bash
docker push ghcr.io/yourname/my-integration:1.0.0
git tag v1.0.0
git push --tags
```

Pensez simplement à incrémenter `version` et `docker_image` dans le manifeste avant de taguer, sinon l'indexeur continue de servir l'ancienne version.

Le mainteneur ne valide rien et n'est jamais un goulot d'étranglement.

## Étape 6 : Les utilisateurs installent en un clic

Depuis le catalogue de Gladys, les intégrations externes apparaissent aux côtés des intégrations intégrées, avec un **badge communautaire** et un indicateur de statut en direct. Un utilisateur clique sur **Installer**, et Gladys télécharge votre image, démarre le conteneur, et affiche l'interface générée. Les utilisateurs peuvent aussi installer directement depuis une URL de dépôt GitHub, sans attendre le prochain cycle d'indexation.

## Mettre à jour votre intégration

Livrer une nouvelle version tient en un clic : relancez le workflow **Release** et choisissez le niveau d'incrément. Il reconstruit l'image multi-architectures, pousse les nouveaux tags, et met à jour le manifeste pour vous. Au prochain cycle d'indexation, les utilisateurs voient qu'une mise à jour est disponible et peuvent l'appliquer en un clic.

Si vous publiez manuellement, faites les deux mêmes choses à la main : construisez et poussez un nouveau tag d'image (par exemple `ghcr.io/yourname/my-integration:1.1.0`), puis incrémentez `version` et `docker_image` dans le manifeste et poussez.

## Dépannage

L'indexeur est totalement transparent. Si votre intégration n'apparaît pas dans le catalogue, consultez le fichier `rejected.json` publié : il liste chaque dépôt qui a échoué à la validation, avec la raison et un niveau de sévérité (manifeste invalide, référence d'image mal formée ou non téléchargeable, plage `gladys_version` incompatible, couverture trop lourde ou aux mauvaises dimensions, `docs/en.md` ou `docs/fr.md` manquant, etc.). Vous pouvez détecter la plupart de ces problèmes avant de publier en lançant `npx github:GladysAssistant/integration-store .` en local. Corrigez le problème, republiez, et attendez le prochain cycle.

## Modèle de sécurité

Les intégrations externes peuvent être exécutées sans review car le **bac à sable Docker est la première ligne de défense** :

- des limites de ressources (256 Mo de mémoire, 0,5 CPU, 100 processus) pour le conteneur principal,
- un système de fichiers racine en lecture seule sans capacité supplémentaire,
- un réseau bridge isolé,
- aucun accès direct aux périphériques de l'hôte (le matériel n'est accessible que via des sous-conteneurs explicitement autorisés par l'utilisateur).

En v1, il n'y a ni modération, ni liste de blocage, ni retrait manuel. Avant d'installer, les utilisateurs voient le nombre d'étoiles GitHub du dépôt, son ancienneté et le badge communautaire, et chaque installation affiche un avertissement clair.

Ce bac à sable limite les dégâts au niveau de l'hôte et empêche une intégration boguée de déstabiliser le cœur de Gladys. Il ne supprime pas l'accès applicatif que détient l'intégration : elle a son propre token, un accès à l'API REST et WebSocket qui lui est réservé, et, en v1, un accès réseau sortant complet. Une intégration malveillante peut donc agir dans les limites de cet accès, alors **n'installez que des images de confiance.**

## Des questions ?

Vous avez des questions ou vous voulez partager votre intégration ? Venez en parler [sur le forum](https://community.gladysassistant.com/), la communauté est là pour vous aider !
