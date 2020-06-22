---
id: setup-development-environnement
title: Environnement de développement
sidebar_label: Environnement de développement
---

Vous trouverez ici les instructions pour mettre en place un environnement de développemment Gladys 4.

## Le backend

Le backend est une serveur Node.js.

### Installer les dépendances systèmes nécessaires

Comme prérequis système, il vous faut:

- Node.js >= 10
- sqlite3
- openssl
- openzwave + libopenzwave1.5-dev

Une bonne aide pour mettre en place son environnement peut-être d'aller regarder le [fichier de configuration de CircleCI](https://github.com/GladysAssistant/Gladys/blob/master/.circleci/config.yml).

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
