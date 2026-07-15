---
id: external-integrations
title: Créer une intégration externe
description: "La façon la plus simple de créer et publier une intégration Gladys Assistant. Sans pull request, sans review, sans attente : empaquetez votre intégration dans un conteneur Docker, publiez-la sur GitHub, et n'importe quel utilisateur peut l'installer en un clic."
sidebar_label: Intégrations externes (recommandé)
---

**Les intégrations externes sont la façon la plus simple et la plus rapide de créer une intégration pour Gladys Assistant, et de la publier à tous les utilisateurs en un clic.**

Il n'y a **aucune pull request à ouvrir, aucune review de code à attendre, et aucune validation du mainteneur**. Vous écrivez votre intégration dans le langage que vous voulez, vous l'empaquetez dans une image Docker, vous publiez un dépôt GitHub public, et elle devient installable par n'importe qui, depuis n'importe quelle instance Gladys.

Cette page est un tutoriel complet, étape par étape, pour les développeurs.

## Pourquoi les intégrations externes ?

Historiquement, ajouter une intégration à Gladys signifiait [contribuer directement au code de Gladys](/fr/docs/dev/developing-a-service/) : forker le dépôt, coder le service dans le code de Gladys, écrire des tests unitaires, ouvrir une pull request, et attendre qu'un mainteneur la relise et la merge. Ce chemin existe toujours et reste idéal pour les protocoles qui ont leur place directement dans Gladys, mais il a des frictions : il faut connaître les rouages internes de Gladys, respecter les conventions de code, et le mainteneur est un goulot d'étranglement.

Les intégrations externes suppriment ce goulot d'étranglement (une validation automatique du manifeste subsiste, mais sans aucune intervention humaine) :

| | Intégration interne | Intégration externe |
| --- | --- | --- |
| Où vit le code | Dans le dépôt de Gladys | Votre propre dépôt GitHub |
| Langage | Node.js uniquement | N'importe quel langage (conteneur Docker) |
| Review requise | Oui, un mainteneur doit merger votre PR | **Aucune review, aucune validation** |
| Publication | Livrée avec la prochaine version de Gladys | **Disponible instantanément**, indexée automatiquement |
| Installation pour les utilisateurs | Intégrée | **En un clic** depuis le catalogue |
| Isolation | Tourne dans le processus Gladys | Tourne dans un **conteneur Docker isolé** |

Parce qu'une intégration externe tourne dans son propre conteneur renforcé, supervisé par Gladys, un bug ou un plantage dans votre code **reste confiné au conteneur** : il ne peut pas faire tomber l'instance Gladys de l'utilisateur ni les autres intégrations. C'est cette garantie de stabilité qui rend sa publication sûre, sans review.

## Comment ça marche

Une intégration externe est un **conteneur Docker** qui communique avec Gladys via deux canaux :

- Une **API REST hôte** exposée par Gladys sur `/api/integration/v1/*`, utilisée pour publier les appareils découverts, pousser les états des appareils, et lire ou écrire votre configuration.
- Un **canal WebSocket**, utilisé par Gladys pour envoyer des commandes à votre intégration en temps réel (allumer un interrupteur, interroger un appareil, lancer un scan) et pour vous notifier des événements de cycle de vie des appareils (un appareil a été créé, modifié ou supprimé par l'utilisateur).

Vous n'avez pas à implémenter toute cette tuyauterie vous-même : le [SDK JavaScript officiel](https://github.com/GladysAssistant/integration-sdk-js) gère l'authentification, la connexion WebSocket, la reconnexion automatique avec backoff exponentiel, et la resynchronisation de l'état pour vous.

Quelques règles de conception importantes à garder en tête :

- **Votre intégration ne crée ni ne supprime jamais d'appareil.** Elle *publie* les appareils qu'elle découvre, et c'est l'utilisateur qui décide, depuis l'interface de Gladys, lesquels créer, modifier ou supprimer. L'utilisateur garde le contrôle et l'interface reste cohérente.
- Gladys lance votre conteneur avec des limites strictes : **256 Mo de mémoire, 0,5 CPU, un système de fichiers racine en lecture seule, aucune capacité Linux supplémentaire, et un unique point de montage `/data` accessible en écriture**. Concevez votre intégration pour vivre dans ces limites.

## Prérequis

- Une instance Gladys Assistant en version **4.62.0 ou supérieure** (les intégrations externes ont été introduites dans cette version).
- [Docker](https://www.docker.com/) installé sur votre machine de développement.
- [Node.js 24 ou supérieur](https://nodejs.org/) si vous utilisez le SDK JavaScript.
- Un registre Docker public pour héberger votre image. Le plus simple est le [GitHub Container Registry](https://docs.github.com/packages/working-with-a-github-packages-registry/working-with-the-container-registry) (`ghcr.io`) : votre image reste au même endroit que votre code. Docker Hub ou tout autre registre public fonctionnent aussi.
- Un compte [GitHub](https://github.com/) pour publier votre dépôt.

## Étape 1 : Partir du template

La façon la plus rapide de démarrer est le dépôt template officiel :

👉 [GladysAssistant/integration-template-js](https://github.com/GladysAssistant/integration-template-js)

Cliquez sur **"Use this template"** sur GitHub pour créer votre propre dépôt. Il contient déjà une intégration fonctionnelle, un `Dockerfile`, et un manifeste valide, pour que vous puissiez vous concentrer sur la logique de votre appareil.

## Étape 2 : Écrire votre intégration avec le SDK

Installez le SDK dans votre projet :

```bash
npm install @gladysassistant/integration-sdk
```

Voici un exemple complet et fonctionnel d'une intégration d'interrupteur virtuel :

```js
import { GladysIntegration } from "@gladysassistant/integration-sdk";

const gladys = new GladysIntegration();

// Appelé quand l'utilisateur demande à Gladys de scanner de nouveaux appareils.
// Publiez la liste complète des appareils que votre intégration peut proposer.
gladys.onScanRequest(async () => {
  await gladys.publishDiscoveredDevices([
    {
      name: "Interrupteur virtuel",
      external_id: gladys.externalId("switch"),
      features: [
        {
          name: "Marche/Arrêt",
          external_id: gladys.externalId("switch:binary"),
          category: "switch",
          type: "binary",
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

// Authentifie, ouvre le WebSocket, et resynchronise.
await gladys.connect();
```

C'est toute l'intégration. Le SDK lit les identifiants que Gladys injecte dans le conteneur sous forme de variables d'environnement, donc il n'y a aucune configuration à brancher à la main.

### L'API du SDK en résumé

Enregistrez vos gestionnaires d'événements **avant** d'appeler `connect()`.

**Connexion**

- `connect()` : authentifie, ouvre le WebSocket, resynchronise l'état, et se reconnecte automatiquement.
- `disconnect()` : ferme la connexion proprement.

**Appareils**

- `publishDiscoveredDevices(devices)` : publie la liste complète des appareils que vous proposez (affichée à l'utilisateur dans l'onglet Découverte).
- `getDevices()` : renvoie les appareils que l'utilisateur a réellement créés.
- `externalId(suffix)` : construit un identifiant externe correctement formaté pour un appareil ou une fonctionnalité.

**État**

- `publishState(featureExternalId, value)` : publie une mise à jour d'état (un nombre ou un objet).
- `publishStates(states)` : publie un lot de mises à jour (jusqu'à 100 par requête).

**Configuration**

- `getConfig()` / `setConfig(partialConfig)` : lit et écrit vos valeurs de configuration.
- `getStatus()` : renvoie la version de Gladys et le statut du service.

**Événements**

- `onSetValue(cb)` : une valeur de fonctionnalité a changé (une commande de l'utilisateur).
- `onPoll(cb)` : Gladys vous demande d'interroger un appareil.
- `onScanRequest(cb)` : Gladys vous demande de découvrir des appareils.
- `onDeviceCreated(cb)` / `onDeviceUpdated(cb)` / `onDeviceDeleted(cb)` : événements de cycle de vie des appareils.
- `onConfigUpdated(cb)` : la configuration a changé.

Vous pouvez aussi inspecter l'état local directement : `gladys.devices`, `gladys.config`, `gladys.connected`, et écouter `gladys.on("connected")` et `gladys.on("disconnected")`.

## Étape 3 : Écrire le manifeste

Chaque intégration externe est décrite par un unique fichier nommé `gladys-assistant-integration.json`, placé à la **racine de votre dépôt** :

```json
{
  "manifest_version": 1,
  "type": "device",
  "name": "Mon Integration",
  "description": {
    "en": "Control my devices from Gladys Assistant.",
    "fr": "Contrôlez mes appareils depuis Gladys Assistant."
  },
  "version": "1.0.0",
  "docker_image": "ghcr.io/votrenom/mon-integration:1.0.0",
  "gladys_version": ">=4.62.0",
  "cover_image": "https://raw.githubusercontent.com/votrenom/mon-integration/main/cover.jpg",
  "config_schema": [
    {
      "key": "api_key",
      "type": "secret",
      "label": { "en": "API key", "fr": "Clé d'API" },
      "required": true
    }
  ]
}
```

### Les champs du manifeste

| Champ | Requis | Description |
| --- | --- | --- |
| `manifest_version` | Oui | Doit valoir `1`. |
| `type` | Oui | Doit valoir `"device"` (seule valeur supportée en v1). |
| `name` | Oui | Nom affiché, de 3 à 30 caractères. |
| `description` | Oui | Un objet indexé par langue. `en` est obligatoire, chaque texte fait de 10 à 100 caractères. |
| `version` | Oui | [Version sémantique](https://semver.org/) stricte. L'augmenter notifie les utilisateurs qu'une mise à jour est disponible. |
| `docker_image` | Oui | Une référence d'image bien formée avec un tag ou un digest explicite. |
| `gladys_version` | Oui | Une plage semver (syntaxe npm) utilisée pour filtrer les instances compatibles. |
| `cover_image` | Non | URL HTTPS directe vers une image de couverture (voir les règles ci-dessous). |
| `config_schema` | Non | La liste des champs de configuration affichés à l'utilisateur. |

### Le schéma de configuration

`config_schema` est une liste plate de champs. Chaque champ supporte ces types : `string`, `number`, `boolean`, `select`, et `secret`. Gladys génère automatiquement le formulaire de configuration à partir de cette liste, vous n'écrivez donc aucun code frontend. Les valeurs marquées `secret` sont stockées de façon sécurisée et ne sont jamais renvoyées au frontend.

### Les règles de l'image de couverture

Si vous fournissez une `cover_image`, elle doit être :

- au format JPEG ou PNG,
- exactement de **800 x 534 pixels**,
- de moins de **150 Ko**,
- servie en HTTPS via une URL directe (sans redirection).

Le plus simple est de committer l'image directement dans votre dépôt GitHub et d'utiliser son URL brute (`https://raw.githubusercontent.com/...`), comme dans l'exemple de manifeste ci-dessus.

Une couverture manquante ou invalide ne rejette pas votre intégration : elle est indexée avec une image par défaut et signalée en avertissement.

## Étape 4 : Construire et tester en local

Construisez votre image Docker :

```bash
docker build -t ghcr.io/votrenom/mon-integration:1.0.0 .
```

Vous n'avez rien besoin de publier pour la tester. Dans Gladys, les intégrations externes supportent un **mode d'installation développeur** : installez directement à partir d'un nom d'image et d'un manifeste en ligne. Cela vous permet d'itérer en local avant de rendre l'intégration publique.

Une fois installée, observez le statut passer de `LOADING` à `RUNNING`, ouvrez l'onglet **Configuration** généré, lancez un **scan** depuis l'onglet **Découverte**, créez un appareil, et actionnez-le pour vérifier que votre gestionnaire `onSetValue` reçoit bien la commande.

### Les trois onglets de chaque intégration externe

Gladys affiche une interface générique pour chaque intégration externe, avec trois onglets :

- **Appareils** : les appareils créés par l'utilisateur, avec les contrôles standards.
- **Découverte** : les appareils publiés par votre intégration, chacun avec un bouton "créer" en un clic.
- **Configuration** : le formulaire généré à partir de votre `config_schema`, plus les contrôles de supervision (démarrer, arrêter, redémarrer, mettre à jour, voir les logs, désinstaller).

### L'environnement du conteneur

Gladys injecte ces variables d'environnement dans votre conteneur. Le SDK les lit pour vous :

- `GLADYS_HOST_API_URL` : l'URL de base de l'API hôte.
- `GLADYS_INTEGRATION_TOKEN` : le token bearer utilisé pour s'authentifier.
- `GLADYS_INTEGRATION_SELECTOR` : le sélecteur unique de votre instance d'intégration.
- `TZ` : le fuseau horaire de l'instance Gladys.

## Étape 5 : Publier votre intégration

La publication est volontairement triviale. Il n'y a **aucune soumission, aucune review, et aucune attente d'un mainteneur**.

1. **Poussez votre image Docker** vers un registre public. Le plus simple est le GitHub Container Registry (`ghcr.io`), qui garde l'image au même endroit que votre code (pensez à rendre le package public) :

   ```bash
   docker push ghcr.io/votrenom/mon-integration:1.0.0
   ```

2. **Poussez votre code** (avec le manifeste `gladys-assistant-integration.json` à la racine) vers un **dépôt GitHub public**.

3. **Ajoutez le topic GitHub** `gladys-assistant-integration` à votre dépôt (dans les Settings, ou via l'engrenage à côté de "About" sur la page d'accueil du dépôt).

C'est tout. Un indexeur automatique (une GitHub Action qui tourne toutes les heures) découvre chaque dépôt public portant ce topic, lit et valide le manifeste, ré-héberge l'image de couverture, et publie un catalogue mis à jour. En moins d'une heure, **votre intégration apparaît dans le store de chaque instance Gladys**, installable en un clic.

Le mainteneur n'approuve rien et n'est jamais un goulot d'étranglement.

## Étape 6 : Les utilisateurs installent en un clic

Depuis le catalogue de Gladys, les intégrations externes apparaissent à côté des intégrations natives, avec un **badge communauté** et un indicateur de statut en direct. L'utilisateur clique sur **Installer**, et Gladys télécharge votre image, démarre le conteneur, et affiche l'interface générée. Les utilisateurs peuvent aussi installer directement depuis l'URL d'un dépôt GitHub, sans attendre le prochain cycle d'indexation.

## Mettre à jour votre intégration

Livrer une nouvelle version tient en deux lignes :

1. Construisez et poussez un nouveau tag d'image, par exemple `ghcr.io/votrenom/mon-integration:1.1.0`.
2. Augmentez `version` et `docker_image` dans le manifeste, et poussez.

Au prochain cycle d'indexation, les utilisateurs voient qu'une mise à jour est disponible et peuvent l'appliquer en un clic.

## Dépannage

L'indexeur est totalement transparent. Si votre intégration n'apparaît pas dans le catalogue, consultez le fichier `rejected.json` publié : il liste chaque dépôt ayant échoué à la validation, avec la raison (manifeste invalide, référence d'image mal formée, plage `gladys_version` incompatible, etc.). Corrigez le problème, poussez, et attendez le prochain cycle.

## Le modèle de sécurité

Les intégrations externes peuvent tourner sans review en toute sécurité car le **bac à sable Docker est la première ligne de défense** :

- des limites de ressources (256 Mo de mémoire, 0,5 CPU, 100 processus),
- un système de fichiers racine en lecture seule sans capacité supplémentaire,
- un réseau bridge isolé,
- aucun accès aux périphériques de l'hôte.

En v1, il n'y a aucune modération, aucune blocklist, et aucun retrait manuel. Avant d'installer, les utilisateurs voient le nombre d'étoiles GitHub du dépôt, son ancienneté, et le badge communauté, et chaque installation affiche un avertissement clair.

Ce bac à sable limite les dégâts au niveau de l'hôte et empêche une intégration buggée de déstabiliser le cœur de Gladys. Il ne supprime pas pour autant l'accès applicatif dont dispose l'intégration : elle possède un token qui lui est propre, l'accès à l'API REST et WebSocket qui lui est dédiée, et, en v1, un accès réseau sortant complet. Une intégration malveillante peut donc agir dans les limites de cet accès : **n'installez que des images en lesquelles vous avez confiance.**

## Des questions ?

Tu as des questions ou tu veux partager ton intégration ? Viens en parler [sur le forum](https://community.gladysassistant.com/), la communauté est là pour t'aider !
