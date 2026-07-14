---
id: external-integrations
title: Creer une integration externe
description: "La facon la plus simple de creer et publier une integration Gladys Assistant. Sans pull request, sans review, sans attente : empaquetez votre integration dans un conteneur Docker, publiez-la sur GitHub, et n'importe quel utilisateur peut l'installer en un clic."
sidebar_label: Integrations externes (recommande)
---

**Les integrations externes sont la facon la plus simple et la plus rapide de creer une integration pour Gladys Assistant, et de la publier a tous les utilisateurs en un clic.**

Il n'y a **aucune pull request a ouvrir, aucune review de code a attendre, et aucune validation du mainteneur**. Vous ecrivez votre integration dans le langage que vous voulez, vous l'empaquetez dans une image Docker, vous publiez un depot GitHub public, et elle devient installable par n'importe qui, depuis n'importe quelle instance Gladys.

Cette page est un tutoriel complet, etape par etape, pour les developpeurs.

## Pourquoi les integrations externes ?

Historiquement, ajouter une integration a Gladys signifiait [contribuer au projet coeur](/fr/docs/dev/developing-a-service/) : forker le depot, coder le service dans le code de Gladys, ecrire des tests unitaires, ouvrir une pull request, et attendre qu'un mainteneur la relise et la merge. Ce chemin existe toujours et reste ideal pour les protocoles qui ont leur place dans le coeur, mais il a des frictions : il faut connaitre les rouages internes de Gladys, respecter les conventions de code, et le mainteneur est un goulot d'etranglement.

Les integrations externes suppriment entierement cette friction :

| | Integration coeur | Integration externe |
| --- | --- | --- |
| Ou vit le code | Dans le depot de Gladys | Votre propre depot GitHub |
| Langage | Node.js uniquement | N'importe quel langage (conteneur Docker) |
| Review requise | Oui, un mainteneur doit merger votre PR | **Aucune review, aucune validation** |
| Publication | Livree avec la prochaine version de Gladys | **Disponible instantanement**, indexee automatiquement |
| Installation pour les utilisateurs | Integree | **En un clic** depuis le catalogue |
| Isolation | Tourne dans le processus Gladys | Tourne dans un **conteneur Docker isole** |

Parce qu'une integration externe tourne dans son propre conteneur renforce, un bug ou un plantage dans votre code **ne peut jamais faire tomber l'instance Gladys de l'utilisateur**. C'est ce qui rend sa publication sure, sans review.

## Comment ca marche

Une integration externe est un **conteneur Docker** qui communique avec Gladys via deux canaux :

- Une **API REST hote** exposee par Gladys sur `/api/integration/v1/*`, utilisee pour publier les appareils decouverts, pousser les etats des appareils, et lire ou ecrire votre configuration.
- Un **canal WebSocket**, utilise par Gladys pour envoyer des commandes a votre integration en temps reel (allumer un interrupteur, interroger un appareil, lancer un scan) et pour vous notifier des evenements de cycle de vie des appareils (un appareil a ete cree, modifie ou supprime par l'utilisateur).

Vous n'avez pas a implementer toute cette tuyauterie vous-meme : le [SDK JavaScript officiel](https://github.com/GladysAssistant/integration-sdk-js) gere l'authentification, la connexion WebSocket, la reconnexion automatique avec backoff exponentiel, et la resynchronisation de l'etat pour vous.

Quelques regles de conception importantes a garder en tete :

- **Votre integration ne cree ni ne supprime jamais d'appareil.** Elle *publie* les appareils qu'elle decouvre, et c'est l'utilisateur qui decide, depuis l'interface de Gladys, lesquels creer, modifier ou supprimer. L'utilisateur garde le controle et l'interface reste coherente.
- Gladys lance votre conteneur avec des limites strictes : **256 Mo de memoire, 0,5 CPU, un systeme de fichiers racine en lecture seule, aucune capacite Linux supplementaire, et un unique point de montage `/data` accessible en ecriture**. Concevez votre integration pour vivre dans ces limites.

## Prerequis

- Une instance Gladys Assistant en version **4.62.0 ou superieure** (les integrations externes ont ete introduites dans cette version).
- [Docker](https://www.docker.com/) installe sur votre machine de developpement.
- [Node.js 20 ou superieur](https://nodejs.org/) si vous utilisez le SDK JavaScript.
- Un compte sur un [registre Docker](https://hub.docker.com/) public (Docker Hub, GitHub Container Registry, etc.) pour heberger votre image.
- Un compte [GitHub](https://github.com/) pour publier votre depot.

## Etape 1 : Partir du template

La facon la plus rapide de demarrer est le depot template officiel :

👉 [GladysAssistant/integration-template-js](https://github.com/GladysAssistant/integration-template-js)

Cliquez sur **"Use this template"** sur GitHub pour creer votre propre depot. Il contient deja une integration fonctionnelle, un `Dockerfile`, et un manifeste valide, pour que vous puissiez vous concentrer sur la logique de votre appareil.

## Etape 2 : Ecrire votre integration avec le SDK

Installez le SDK dans votre projet :

```bash
npm install @gladysassistant/integration-sdk
```

Voici un exemple complet et fonctionnel d'une integration d'interrupteur virtuel :

```js
import { GladysIntegration } from "@gladysassistant/integration-sdk";

const gladys = new GladysIntegration();

// Appele quand l'utilisateur demande a Gladys de scanner de nouveaux appareils.
// Publiez la liste complete des appareils que votre integration peut proposer.
gladys.onScanRequest(async () => {
  await gladys.publishDiscoveredDevices([
    {
      name: "Interrupteur virtuel",
      external_id: gladys.externalId("switch"),
      features: [
        {
          name: "Marche/Arret",
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

// Appele quand l'utilisateur allume ou eteint l'interrupteur depuis Gladys.
// Faites le vrai travail ici, puis confirmez le nouvel etat a Gladys.
gladys.onSetValue(async (device, feature, value) => {
  // ... envoyez la commande a votre vrai appareil ici ...
  await gladys.publishState(feature.external_id, value);
});

// Authentifie, ouvre le WebSocket, et resynchronise.
await gladys.connect();
```

C'est toute l'integration. Le SDK lit les identifiants que Gladys injecte dans le conteneur sous forme de variables d'environnement, donc il n'y a aucune configuration a brancher a la main.

### L'API du SDK en resume

Enregistrez vos gestionnaires d'evenements **avant** d'appeler `connect()`.

**Connexion**

- `connect()` : authentifie, ouvre le WebSocket, resynchronise l'etat, et se reconnecte automatiquement.
- `disconnect()` : ferme la connexion proprement.

**Appareils**

- `publishDiscoveredDevices(devices)` : publie la liste complete des appareils que vous proposez (affichee a l'utilisateur dans l'onglet Decouverte).
- `getDevices()` : renvoie les appareils que l'utilisateur a reellement crees.
- `externalId(suffix)` : construit un identifiant externe correctement formate pour un appareil ou une fonctionnalite.

**Etat**

- `publishState(featureExternalId, value)` : publie une mise a jour d'etat (un nombre ou un objet).
- `publishStates(states)` : publie un lot de mises a jour (jusqu'a 100 par requete).

**Configuration**

- `getConfig()` / `setConfig(partialConfig)` : lit et ecrit vos valeurs de configuration.
- `getStatus()` : renvoie la version de Gladys et le statut du service.

**Evenements**

- `onSetValue(cb)` : une valeur de fonctionnalite a change (une commande de l'utilisateur).
- `onPoll(cb)` : Gladys vous demande d'interroger un appareil.
- `onScanRequest(cb)` : Gladys vous demande de decouvrir des appareils.
- `onDeviceCreated(cb)` / `onDeviceUpdated(cb)` / `onDeviceDeleted(cb)` : evenements de cycle de vie des appareils.
- `onConfigUpdated(cb)` : la configuration a change.

Vous pouvez aussi inspecter l'etat local directement : `gladys.devices`, `gladys.config`, `gladys.connected`, et ecouter `gladys.on("connected")` et `gladys.on("disconnected")`.

## Etape 3 : Ecrire le manifeste

Chaque integration externe est decrite par un unique fichier nomme `gladys-assistant-integration.json`, place a la **racine de votre depot** :

```json
{
  "manifest_version": 1,
  "type": "device",
  "name": "Mon Integration",
  "description": {
    "en": "Control my devices from Gladys Assistant.",
    "fr": "Controlez mes appareils depuis Gladys Assistant."
  },
  "version": "1.0.0",
  "docker_image": "votrenom/mon-integration:1.0.0",
  "gladys_version": ">=4.62.0",
  "cover_image": "https://raw.githubusercontent.com/votrenom/mon-integration/main/cover.jpg",
  "config_schema": [
    {
      "key": "api_key",
      "type": "secret",
      "label": { "en": "API key", "fr": "Cle d'API" },
      "required": true
    }
  ]
}
```

### Les champs du manifeste

| Champ | Requis | Description |
| --- | --- | --- |
| `manifest_version` | Oui | Doit valoir `1`. |
| `type` | Oui | Doit valoir `"device"` (seule valeur supportee en v1). |
| `name` | Oui | Nom affiche, de 3 a 30 caracteres. |
| `description` | Oui | Un objet indexe par langue. `en` est obligatoire, chaque texte fait de 10 a 100 caracteres. |
| `version` | Oui | [Version semantique](https://semver.org/) stricte. L'augmenter notifie les utilisateurs qu'une mise a jour est disponible. |
| `docker_image` | Oui | Une reference d'image bien formee avec un tag ou un digest explicite. |
| `gladys_version` | Oui | Une plage semver (syntaxe npm) utilisee pour filtrer les instances compatibles. |
| `cover_image` | Non | URL HTTPS directe vers une image de couverture (voir les regles ci-dessous). |
| `config_schema` | Non | La liste des champs de configuration affiches a l'utilisateur. |

### Le schema de configuration

`config_schema` est une liste plate de champs. Chaque champ supporte ces types : `string`, `number`, `boolean`, `select`, et `secret`. Gladys genere automatiquement le formulaire de configuration a partir de cette liste, vous n'ecrivez donc aucun code frontend. Les valeurs marquees `secret` sont stockees de facon securisee et ne sont jamais renvoyees au frontend.

### Les regles de l'image de couverture

Si vous fournissez une `cover_image`, elle doit etre :

- au format JPEG ou PNG,
- exactement de **800 x 534 pixels**,
- de moins de **150 Ko**,
- servie en HTTPS avec une URL directe (sans redirection), sur un serveur public.

Une couverture manquante ou invalide ne rejette pas votre integration : elle est indexee avec une image par defaut et signalee en avertissement.

## Etape 4 : Construire et tester en local

Construisez votre image Docker :

```bash
docker build -t votrenom/mon-integration:1.0.0 .
```

Vous n'avez rien besoin de publier pour la tester. Dans Gladys, les integrations externes supportent un **mode d'installation developpeur** : installez directement a partir d'un nom d'image et d'un manifeste en ligne. Cela vous permet d'iterer en local avant de rendre l'integration publique.

Une fois installee, observez le statut passer de `LOADING` a `RUNNING`, ouvrez l'onglet **Configuration** genere, lancez un **scan** depuis l'onglet **Decouverte**, creez un appareil, et actionnez-le pour verifier que votre gestionnaire `onSetValue` recoit bien la commande.

### Les trois onglets de chaque integration externe

Gladys affiche une interface generique pour chaque integration externe, avec trois onglets :

- **Appareils** : les appareils crees par l'utilisateur, avec les controles standards.
- **Decouverte** : les appareils publies par votre integration, chacun avec un bouton "creer" en un clic.
- **Configuration** : le formulaire genere a partir de votre `config_schema`, plus les controles de supervision (demarrer, arreter, redemarrer, mettre a jour, voir les logs, desinstaller).

### L'environnement du conteneur

Gladys injecte ces variables d'environnement dans votre conteneur. Le SDK les lit pour vous :

- `GLADYS_HOST_API_URL` : l'URL de base de l'API hote.
- `GLADYS_INTEGRATION_TOKEN` : le token bearer utilise pour s'authentifier.
- `GLADYS_INTEGRATION_SELECTOR` : le selecteur unique de votre instance d'integration.
- `TZ` : le fuseau horaire de l'instance Gladys.

## Etape 5 : Publier votre integration

La publication est volontairement triviale. Il n'y a **aucune soumission, aucune review, et aucune attente d'un mainteneur**.

1. **Poussez votre image Docker** vers n'importe quel registre public :

   ```bash
   docker push votrenom/mon-integration:1.0.0
   ```

2. **Poussez votre code** (avec le manifeste `gladys-assistant-integration.json` a la racine) vers un **depot GitHub public**.

3. **Ajoutez le topic GitHub** `gladys-assistant-integration` a votre depot (dans les Settings, ou via l'engrenage a cote de "About" sur la page d'accueil du depot).

C'est tout. Un indexeur automatique (une GitHub Action qui tourne toutes les heures) decouvre chaque depot public portant ce topic, lit et valide le manifeste, re-heberge l'image de couverture, et publie un catalogue mis a jour. En moins d'une heure, **votre integration apparait dans le store de chaque instance Gladys**, installable en un clic.

Le mainteneur n'approuve rien et n'est jamais un goulot d'etranglement.

## Etape 6 : Les utilisateurs installent en un clic

Depuis le catalogue de Gladys, les integrations externes apparaissent a cote des integrations natives, avec un **badge communaute** et un indicateur de statut en direct. L'utilisateur clique sur **Installer**, et Gladys telecharge votre image, demarre le conteneur, et affiche l'interface generee. Les utilisateurs peuvent aussi installer directement depuis l'URL d'un depot GitHub, sans attendre le prochain cycle d'indexation.

## Mettre a jour votre integration

Livrer une nouvelle version tient en deux lignes :

1. Construisez et poussez un nouveau tag d'image, par exemple `votrenom/mon-integration:1.1.0`.
2. Augmentez `version` et `docker_image` dans le manifeste, et poussez.

Au prochain cycle d'indexation, les utilisateurs voient qu'une mise a jour est disponible et peuvent l'appliquer en un clic.

## Depannage

L'indexeur est totalement transparent. Si votre integration n'apparait pas dans le catalogue, consultez le fichier `rejected.json` publie : il liste chaque depot ayant echoue a la validation, avec la raison (manifeste invalide, reference d'image mal formee, plage `gladys_version` incompatible, etc.). Corrigez le probleme, poussez, et attendez le prochain cycle.

## Le modele de securite

Les integrations externes peuvent tourner sans review en toute securite car le **bac a sable Docker est la premiere ligne de defense** :

- des limites de ressources (256 Mo de memoire, 0,5 CPU, 100 processus),
- un systeme de fichiers racine en lecture seule sans capacite supplementaire,
- un reseau bridge isole,
- aucun acces aux peripheriques de l'hote.

En v1, il n'y a aucune moderation, aucune blocklist, et aucun retrait manuel. Avant d'installer, les utilisateurs voient le nombre d'etoiles GitHub du depot, son anciennete, et le badge communaute, et chaque installation affiche un avertissement clair. Parce que votre conteneur est totalement isole, meme une integration malveillante ou buggee ne peut pas compromettre le systeme coeur de Gladys.

## Des questions ?

Tu as des questions ou tu veux partager ton integration ? Viens en parler [sur le forum](https://community.gladysassistant.com/), la communaute est la pour t'aider !
