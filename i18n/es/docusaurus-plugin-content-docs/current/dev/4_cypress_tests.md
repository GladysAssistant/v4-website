---
id: cypress-tests
title: Ejecutar los tests de Cypress en Gladys
description: "Ejecuta los tests end-to-end del frontend con Cypress en Gladys Assistant: inicia el backend, lanza el frontend y ejecuta la batería de tests."
sidebar_label: Tests del frontend
---

Usamos [Cypress](https://www.cypress.io/) para los tests end-to-end del frontend.

## Iniciar el backend

En la carpeta `server`, ejecuta:

```
npm run cypress
```

Esto creará una nueva base de datos SQLite solo para los tests e iniciará el backend.

## Abrir Cypress

En la carpeta `front`, inicia el frontend de Gladys:

```
npm run start:cypress
```

A continuación, puedes abrir la aplicación de Cypress:

```
npm run cypress:open
```

Esto abrirá la aplicación Electron de Cypress.

Desde ahí, puedes lanzar los tests manualmente y verlos ejecutarse en un navegador:

![Aplicación Electron de Cypress](../../../../../static/img/docs/en/dev/cypress-open.png)

## Ejecutar los tests en la línea de comandos

Puedes ejecutar los tests de Cypress en la línea de comandos con:

```
npm run cypress:run
```
