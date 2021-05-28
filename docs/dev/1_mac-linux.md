---
id: setup-development-environment-mac-linux
title: Setup a Mac/Linux development environment
sidebar_label: Mac/Linux
---

You'll find here instructions to setup a development environment for Gladys 4.

## Server

The server is a Node.js app.

### Install system dependencies

You'll need:

- Node.js 14
- sqlite3
- openssl
- openzwave >= 1.6

On a Mac, to install open-zwave, run:

```
brew install open-zwave
```

(You need to have [Homebrew](https://brew.sh/) installed)

### Clone Gladys Git repo

```
git clone https://github.com/GladysAssistant/Gladys gladys && cd gladys
```

### Install NPM dependencies

```
cd server
```

```
npm install
```

### Start the server

```
npm start
```

The server should be accessible at http://localhost:1443.

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

The frontend should be accessible at http://localhost:1444.

## Start server tests

Go to the `server` folder.

And run:

```
npm test
```

## Start server tests only for one service

To run the tests just for one service, go to the `server` folder and run the command:

```
npm run test-service --service=tasmota
```
