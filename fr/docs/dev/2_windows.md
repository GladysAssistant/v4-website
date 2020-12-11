---
id: setup-development-environment-windows
title: Mettre en place un environnement de développement sous Windows
sidebar_label: Windows
---

Vous trouverez ici les instructions pour mettre en place un environnement de développemment Gladys 4 sur Windows.

## Pré-requis systèmes

Veuillez suivre les insctuctions de ces sites pour préparer votre système.

- [Windows Subsystem Linux](https://docs.microsoft.com/fr-fr/windows/wsl/install-win10)
- [Docker Desktop pour Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows)
- [Visual Studio Code](https://code.visualstudio.com/download)

### Configuration WSL

Assurez vous d'utiliser WSL2 en exécutant cette commande

```
wsl.exe --set-default-version 2
```

Depuis le Microsoft Store, recherchez et installez Ubuntu 20.04. Celà peut prendre du temps en fonction de votre connexion.

<img src="/fr/img/docs/dev/ms-store-ubuntu20.04.png" alt="Microsoft Store Ubuntu" />

Maintenant vous pouvez lancer Ubuntu, depuis le menu "Démarrer" exécutez Ubuntu 20.04 LTS.
La première fois Ubuntu vous demandera de créer un utilisateur.

### Dépendences systèmes

La première étape est de mettre à jour la distribution:

```bash
sudo apt update && sudo apt upgrade -y && sudo apt autoremove -y
```

- Installation des outils/librairies:

```bash
sudo apt install sqlite3 make g++ git coreutils tzdata nmap openssl gzip udev -y
```

- Installation de Node.js 12:

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

- Compilation d'Openzwave:

```bash
git clone https://github.com/OpenZWave/open-zwave.git
cd open-zwave
git checkout 5d18bbfb21d8cdc61ee6baae6f478c963297dfc5
make
sudo make install
sudo sh -c "echo '/usr/local/lib64' > /etc/ld.so.conf.d/openzwave.conf"
sudo ldconfig
cd && rm -rf open-zwave
```

## Le backend

Le backend est une serveur Node.js.

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

## Lancer VSCode

Vous pouvez lancer Visual Studio Code depuis ubuntu avec cette commande:

```
code .
```
