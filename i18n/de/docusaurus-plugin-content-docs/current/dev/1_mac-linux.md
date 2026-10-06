---
id: setup-development-environment-mac-linux
title: Entwicklungsumgebung unter Mac/Linux einrichten
description: "Richte eine Entwicklungsumgebung für Gladys Assistant unter Mac oder Linux ein: Installiere Node.js, das Server-Backend und das Frontend, um mitzuwirken."
sidebar_label: Mac/Linux
---

Hier findest du die Anleitung, wie du eine Entwicklungsumgebung für Gladys Assistant einrichtest.

## Server

Der Server ist ein Node.js-Backend.

### Systemabhängigkeiten installieren

Du brauchst:

- Node.js 22 LTS ([Download](https://nodejs.org/en/download/) unter macOS).
- Node.js 22 LTS unter Ubuntu/Debian:

  ```bash
  curl -sLO https://deb.nodesource.com/nsolid_setup_deb.sh
  sudo bash nsolid_setup_deb.sh 22
  sudo apt install nodejs -y
  ```
Alternativ kannst du [nvm](https://github.com/nvm-sh/nvm) verwenden, um Node.js-Versionen zu installieren und zu verwalten.

- sqlite3 ([sqlite in Homebrew](https://formulae.brew.sh/formula/sqlite) unter macOS, `sudo apt install sqlite3` unter Ubuntu/Debian).
- OpenSSL ([OpenSSL 3 in Homebrew](https://formulae.brew.sh/formula/openssl@3) unter macOS, `sudo apt install openssl` unter Ubuntu/Debian).

### Das Git-Repository von Gladys klonen

```
git clone https://github.com/GladysAssistant/Gladys gladys && cd gladys
```

### NPM-Abhängigkeiten installieren

```
cd server
```

Da du beim Entwickeln wahrscheinlich nicht jede einzelne Integration brauchst, empfehlen wir dir, im Ordner `server` eine Datei `.env` mit folgendem Inhalt anzulegen:

```
INSTALL_SERVICES_SILENT_FAIL=true
```

So erstellst du die Datei `.env` mit diesem Inhalt:

```bash
echo "INSTALL_SERVICES_SILENT_FAIL=true" > .env
```

Danach kannst du die Abhängigkeiten des Servers installieren:

```
npm install
```


### Datenbankmigration ausführen

```
npm run db-migrate:dev
```

### Server starten

```
npm start
```

Der Server sollte nun unter `http://localhost:1443` erreichbar sein.

## Frontend

Führe im Stammverzeichnis des Git-Repositorys Folgendes aus:

```
cd front
```

### NPM-Abhängigkeiten installieren

```
npm install
```

### Frontend starten

```
npm start
```

Das Frontend sollte nun unter `http://localhost:1444` erreichbar sein.

## Servertests starten

Wechsle in den Ordner `server`.

Und führe aus:

```
npm test
```

Den Linter startest du mit:

```
npm run eslint
```

## Servertests nur für einen Service starten

Um die Tests nur für einen einzelnen Service auszuführen, wechsle in den Ordner `server` und führe folgenden Befehl aus:

```
npm run test-service --service=tasmota
```
