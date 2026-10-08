---
id: setup-development-environment-windows
title: Configurar un entorno de desarrollo en Windows
description: "Configura un entorno de desarrollo de Gladys Assistant en Windows con WSL2, Docker Desktop y VS Code para empezar a contribuir al proyecto."
sidebar_label: Windows
---

A continuación encontrarás las instrucciones para configurar un entorno de desarrollo para Gladys 4.

## Requisitos del sistema

Sigue estos enlaces para preparar tu sistema operativo.

- [Subsistema de Windows para Linux](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
- [Docker Desktop para Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows)
- [Visual Studio Code](https://code.visualstudio.com/download)

### Configuración de WSL

Asegúrate de que tu sistema usa WSL2 ejecutando el siguiente comando:

```
wsl.exe --set-default-version 2
```

En Microsoft Store, busca e instala la última versión LTS de Ubuntu. Esto puede tardar un poco, según la velocidad de tu conexión.

![Microsoft Store Ubuntu](../../../../../static/img/docs/en/dev/ms-store-ubuntu20.04.png)

Ya puedes ejecutar Ubuntu: abre Ubuntu LTS desde el menú Inicio.
La primera vez que inicies Ubuntu, se te pedirá que crees un usuario.

### Instalar las dependencias del sistema

Lo primero es actualizar la distribución ejecutando estos comandos:

```bash
sudo apt update && sudo apt upgrade -y && sudo apt autoremove -y
```

- Instalación de las bibliotecas:

  ```bash
  sudo apt install sqlite3 make g++ git coreutils tzdata nmap openssl gzip udev -y
  ```

- Instalación de Node.js 22:

  ```bash
  curl -sLO https://deb.nodesource.com/nsolid_setup_deb.sh
  sudo bash nsolid_setup_deb.sh 22
  sudo apt install nodejs -y
  ```
  También puedes usar [nvm](https://github.com/nvm-sh/nvm) para instalar y gestionar las versiones de Node.js.

## Servidor

El servidor es una aplicación Node.js.

### Clonar el repositorio Git de Gladys

```
git clone https://github.com/GladysAssistant/Gladys gladys && cd gladys
```

### Instalar las dependencias NPM

```
cd server
```

Como probablemente no necesites ejecutar todas y cada una de las integraciones mientras desarrollas, te recomendamos crear un archivo `.env` en la carpeta `server` con el siguiente contenido:

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

Esto ejecutará los tests de Mocha.

Puedes ejecutar el linter con:

```
npm run eslint
```

## Ejecutar los tests del servidor para un solo servicio

Para ejecutar los tests de un solo servicio, ve a la carpeta `server` y ejecuta el comando:

```
npm run test-service --service=tasmota
```

## Iniciar VS Code

Puedes abrir Visual Studio Code desde Ubuntu ejecutando el comando:

```
code .
```
