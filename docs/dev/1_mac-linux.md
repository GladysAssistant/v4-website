---
id: setup-development-environment-mac-linux
title: Setup a Mac/Linux development environment
sidebar_label: Mac/Linux
---

You'll find below the instructions on how to setup a development environment for Gladys 4.

## Server

The server is a Node.js app.

### Install system dependencies

You'll need:

- Node.js 14
- sqlite3
- openssl

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

Then run:

```
npm install
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

This will run Eslint + mocha tests. As it's painful to run eslint everytime, you can do:

```
npm run test-without-lint
```

If you want to run only mocha tests.

## Start server tests only for one service

To run the tests just for one service, go to the `server` folder and run the command:

```
npm run test-service --service=tasmota
```
