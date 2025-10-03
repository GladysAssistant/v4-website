---
id: setup-development-environment-mac-linux
title: Mettre en place un environnement de développement sous Mac/Linux
sidebar_label: Mac/Linux
---

Vous trouverez ici les instructions pour mettre en place un environnement de développemment Gladys 4.

## Le backend

Le backend est une serveur Node.js.

### Installer les dépendances systèmes nécessaires

Comme prérequis système, il vous faut :

- Node.js 18 LTS ([Télécharger](https://nodejs.org/en/download/)) sur MacOs.
  Sur Ubuntu/Debian :
```bash
curl -sLO https://deb.nodesource.com/nsolid_setup_deb.sh
sudo bash nsolid_setup_deb.sh 18
sudo apt install nodejs -y
```

Alternative, vous pouvez utilisez [nvm](https://github.com/nvm-sh/nvm) pour installer et gérer les versions de nodejs installées.

- sqlite3 ([sqlite Homebrew](https://formulae.brew.sh/formula/sqlite) sur MacOS, `sudo apt install sqlite3` sur Ubuntu/Debian).
- openssl ([OpenSSL 3 Homebrew](https://formulae.brew.sh/formula/openssl@3) sur MacOS, `sudo apt install openssl` sur Ubuntu/Debian).

### Cloner le repo Gladys

```
git clone https://github.com/GladysAssistant/Gladys gladys && cd gladys
```

### Installer les dépendances NPM serveurs

```
cd server
```

Lorsque vous installez les dépendances serveurs, Gladys va installer toutes les dépendances, y compris celles des intégrations.

Lorsque vous développez sur votre machine, vous n'avez pas forcément besoin d'installer toutes les intégrations, nous vous recommandons de créer un fichier `.env` dans le dossier `server` avec le contenu suivant :

```
INSTALL_SERVICES_SILENT_FAIL=true
```

Pour créer le fichier `.env` avec le contenu précédent :

```bash
echo "INSTALL_SERVICES_SILENT_FAIL=true" > .env
```

Ce qui va indiquer à Gladys que l'installation des intégrations n'est pas obligatoire pour développer.

Ensuite lancez :

```
npm install
```

### Lancer la migration de DB

```
npm run db-migrate:dev
```

### Démarrer le serveur

```
npm start
```

Le serveur devrait être accessible à `http://localhost:1443`.

## Le frontend

A la racine du repo git, faites :

```
cd front
```

### Installer les dépendances

```
npm install
```

### Démarrer le frontend

```
npm start
```

Le frontend devrait être accessible à `http://localhost:1444`.

## Lancer les tests serveurs

Placez vous dans le dossier `server`.

Lancez :

```
npm test
```

Ce qui va lancer les tests mochas.

Pour faire tourner le linter :

```
npm run eslint
```

## Lancer les tests d'un seul service

Pour lancer les tests d'un seul service, placez vous dans le dossier `server`, et lancez la commande :

```
npm run test-service --service=tasmota
```
