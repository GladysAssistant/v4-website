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

### Cloner le repo Gladys

```
git clone https://github.com/GladysAssistant/Gladys gladys && cd gladys
```

### Installer les dépendances NPM serveurs

```
cd server
```

Lorsque vous installez les dépendances serveurs, Gladys va installer toutes les dépendances, y compris celles des intégrations.

Lorsque vous développez sur votre machine, vous n'avez pas forcément besoin d'installer toutes les intégrations car certaines ne sont que compatibles Linux (et vous développez probablement sur MacOS ou Windows).

Nous vous recommandons de créer un fichier `.env` dans le dossier `server` avec le contenu suivant :

```
INSTALL_SERVICES_SILENT_FAIL=true
```

Ce qui va indiquer à Gladys que l'installation des intégrations n'est pas obligatoire pour développer.

Ensuite lancez :

```
npm install
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

Ce qui va lancer ESLint + les tests Mocha.

Comme c'est un peu lourd de lancer ESLint à chaque fois que vous lancez un test, il est possible de lancer les tests Mocha uniquement avec la commande suivante :

```
npm run test-without-lint
```

## Lancer les tests d'un seul service

Pour lancer les tests d'un seul service, placez vous dans le dossier `server`, et lancez la commande:

```
npm run test-service --service=tasmota
```
