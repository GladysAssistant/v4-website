---
id: setup-development-environment-windows
title: Setup a Windows development environment
sidebar_label: Windows
---

You'll find below the instructions on how to setup a development environment for Gladys 4.

## System prerequisites

Please follow these links to prepare your OS.

- [Windows Subsystem for Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
- [Docker Desktop for Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows)
- [Visual Studio Code](https://code.visualstudio.com/download)

### WSL Configuration

Please ensure your system uses WSL2 by running following command:

```
wsl.exe --set-default-version 2
```

From the Microsoft Store, search and install the latest Ubuntu LTS version. This can take some time, depending on your connection speed.

![Microsoft Store Ubuntu](../../static/img/docs/en/dev/ms-store-ubuntu20.04.png)

Now you can run Ubuntu; from your start menu please launch Ubuntu LTS.
The first time you run Ubuntu, you will be asked to create a user.

### Install system dependencies

First thing to do is to update distribution by running theses commands:

```bash
sudo apt update && sudo apt upgrade -y && sudo apt autoremove -y
```

- Libraries installation:

  ```bash
  sudo apt install sqlite3 make g++ git coreutils tzdata nmap openssl gzip udev -y
  ```

- Node.js 22 Installation:

  ```bash
  curl -sLO https://deb.nodesource.com/nsolid_setup_deb.sh
  sudo bash nsolid_setup_deb.sh 22
  sudo apt install nodejs -y
  ```
  Alternatively you can use [nvm](https://github.com/nvm-sh/nvm) to install and manage nodejs version.

## Server

The server is a Node.js app.

### Clone Gladys Git repo

```
git clone https://github.com/GladysAssistant/Gladys gladys && cd gladys
```

### Install NPM dependencies

```
cd server
```

As you probaly don't need to run every single integration when developing, we recommend you create a `.env` file in the `server` folder with the following content:

```
INSTALL_SERVICES_SILENT_FAIL=true
```

To create the `.env` file with the previous content:

```bash
echo "INSTALL_SERVICES_SILENT_FAIL=true" > .env
```

Then you can install server dependencies:

```
npm install
```

### Run DB migration

```
npm run db-migrate:dev
```

### Start the server

```
npm start
```

The server should be accessible at `http://localhost:1443`.

## Frontend

At the root of the git repo, do:

```
cd front
```

### Install NPM dependencies

```
npm install
```

### Start the frontend

```
npm start
```

The frontend should be accessible at `http://localhost:1444`.

## Start server tests

Go to the `server` folder.

And run:

```
npm test
```

This will run Mocha tests.

You can run the linter with:

```
npm run eslint
```

## Start server tests only for a single service

To run the tests just for a single service, go to the `server` folder and run the command:

```
npm run test-service --service=tasmota
```

## Start VSCode

You can launch Visual Studio Code from ubuntu by running command:

```
code .
```
