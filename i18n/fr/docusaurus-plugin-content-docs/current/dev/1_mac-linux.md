---
id: setup-development-environment-mac-linux
title: Mettre en place un environnement de développement sous Mac/Linux
sidebar_label: Mac/Linux
---

Vous trouverez ici les instructions pour mettre en place un environnement de développemment Gladys 4.

## Le backend

Le backend est une serveur Node.js.

### Installer les dépendances systèmes nécessaires

Comme prérequis système, il vous faut:

- Node.js 14
- sqlite3
- openssl
- openzwave >= 1.6

Sur Mac, pour installer open-zwave, lancez:

```
brew install open-zwave
```

(Il faut avoir [Homebrew](https://brew.sh/index_fr) d'installé)

### Cloner le repo Gladys

```
git clone https://github.com/GladysAssistant/Gladys gladys && cd gladys
```

### Installer les dépendances NPM serveurs

```
cd server
```

```
npm install
```

### Lancer la migration de DB

```
npm run db-migrate:dev
```

### Lancer le serveur

```
npm start
```

Le serveur devrait être accessible à http://localhost:1443.

## Le frontend

A la racine du repo git, faites:

```
cd front
```

### Installer les dépendances

```
npm install
```

### Lancer le frontend

```
npm start
```

Le frontend devrait être accessible à http://localhost:1444.

## Lancer les tests serveurs

Placez vous dans le dossier `server`.

Lancez:

```
npm test
```

## Lancer les tests d'un seul service

Pour lancer les tests d'un seul service, placez vous dans le dossier `server`, et lancez la commande:

```
npm run test-service --service=tasmota
```
