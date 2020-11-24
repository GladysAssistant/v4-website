---
id: setup-development-environnement
title: Setup a development environnement
sidebar_label: Setup a development environnement
---

You'll find here instructions to setup a development environnement for Gladys 4.

## Server

The server is a Node.js app.

### Install system dependencies

You'll need:

- Node.js 12
- sqlite3
- openssl
- openzwave + libopenzwave1.5-dev

for assistance, help can be found at [CircleCI config file](https://github.com/GladysAssistant/Gladys/blob/master/.circleci/config.yml).

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

### Start DB migration

```
npm run db-migrate:dev
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
