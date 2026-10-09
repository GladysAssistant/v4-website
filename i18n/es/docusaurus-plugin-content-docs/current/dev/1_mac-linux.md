---
id: setup-development-environment-mac-linux
title: Configurar un entorno de desarrollo en Mac/Linux
description: "Configura un entorno de desarrollo de Gladys Assistant en Mac o Linux: instala Node.js, el backend del servidor y el frontend para empezar a contribuir."
sidebar_label: Mac/Linux
---

A continuación encontrarás las instrucciones para configurar un entorno de desarrollo para Gladys Assistant.

## Servidor

El servidor es un backend en Node.js.

### Instalar las dependencias del sistema

Necesitarás:

- Node.js 22 LTS ([Descarga](https://nodejs.org/en/download/) en macOS).
- Node.js 22 LTS en Ubuntu/Debian:

  ```bash
  curl -sLO https://deb.nodesource.com/nsolid_setup_deb.sh
  sudo bash nsolid_setup_deb.sh 22
  sudo apt install nodejs -y
  ```
Como alternativa, puedes usar [nvm](https://github.com/nvm-sh/nvm) para instalar y gestionar las versiones de Node.js.

- sqlite3 ([sqlite en Homebrew](https://formulae.brew.sh/formula/sqlite) en macOS, `sudo apt install sqlite3` en Ubuntu/Debian).
- OpenSSL ([OpenSSL 3 en Homebrew](https://formulae.brew.sh/formula/openssl@3) en macOS, `sudo apt install openssl` en Ubuntu/Debian).

### Clonar el repositorio Git de Gladys

```
git clone https://github.com/GladysAssistant/Gladys gladys && cd gladys
```

### Instalar las dependencias NPM

```
cd server
```

Como probablemente no necesites ejecutar todas y cada una de las integraciones durante el desarrollo, te recomendamos crear un archivo `.env` en la carpeta `server` con el siguiente contenido:

```
INSTALL_SERVICES_SILENT_FAIL=true
```

Para crear el archivo `.env` con ese contenido:

```bash
echo "INSTALL_SERVICES_SILENT_FAIL=true" > .env
```

Después puedes instalar las dependencias del servidor:

```
npm install
```


### Ejecutar la migración de la base de datos

```
npm run db-migrate:dev
```

### Iniciar el servidor

```
npm start
```

El servidor debería estar accesible en `http://localhost:1443`.

## Frontend

En la raíz del repositorio Git, ejecuta:

```
cd front
```

### Instalar las dependencias NPM

```
npm install
```

### Iniciar el frontend

```
npm start
```

El frontend debería estar accesible en `http://localhost:1444`.

## Ejecutar los tests del servidor

Ve a la carpeta `server`.

Y ejecuta:

```
npm test
```

Puedes ejecutar el linter con:

```
npm run eslint
```

## Ejecutar los tests del servidor solo para un servicio

Para ejecutar los tests de un único servicio, ve a la carpeta `server` y ejecuta el comando:

```
npm run test-service --service=tasmota
```
