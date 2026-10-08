---
id: developing-a-service
title: Contribuir a Gladys Assistant
description: "Contribuye al núcleo de Gladys Assistant: descubre el stack de código abierto (Preact, Node.js, SQLite, DuckDB) y aprende a añadir funciones al backend, mejorar la interfaz de usuario y escribir tests."
sidebar_label: Contribuir a Gladys Assistant
---

Gladys Assistant es un proyecto de código abierto y todo su código está disponible en [Github](https://github.com/GladysAssistant/Gladys).

Cualquiera puede leer y modificar este código para corregir un error, añadir funciones al backend o a la interfaz de usuario y mejorar el proyecto.

:::tip[¿Quieres crear una integración? Empieza por las integraciones externas]
La forma **más sencilla y rápida** de crear una integración, y de publicarla para todos los usuarios con un solo clic, es crear una [**integración externa**](/es/docs/dev/external-integrations/). Sin pull request, sin revisión de código y sin aprobación de los mantenedores: la escribes en el lenguaje que prefieras, la empaquetas como un contenedor Docker y la publicas en GitHub.

**Esta página trata sobre cómo contribuir al propio núcleo de Gladys**: corregir errores, añadir funciones al backend, mejorar la interfaz de usuario y, para los protocolos abiertos que realmente tienen su sitio en el núcleo, añadir una integración nativa.
:::

## Qué puedes aportar

- **Corregir un error**, en cualquier parte del backend o del frontend.
- **Añadir una función al backend**: una nueva acción de escena, un nuevo endpoint REST, una nueva capacidad en la API de Gladys.
- **Mejorar la interfaz de usuario**: nuevos widgets del panel de control, mejores pantallas, accesibilidad y traducciones.
- **Añadir o mejorar una integración del núcleo** para un protocolo abierto (Zigbee, Matter, MQTT). Para todo lo demás, es preferible una [integración externa](/es/docs/dev/external-integrations/).

## Tecnologías utilizadas

Gladys es un proyecto Node.js bastante estándar que utiliza:

- [Preact.js](https://preactjs.com/) para el frontend (como React, pero más ligero)
- Node.js [Express](https://expressjs.com/) como framework del backend
- [SQLite](https://www.sqlite.org/index.html) para la base de datos
- [DuckDB](https://duckdb.org/) para almacenar series temporales (datos de sensores).
- [Sequelize](https://sequelize.org/) como ORM para la base de datos y las migraciones
- [Mocha](https://mochajs.org/) para los tests del backend
- [Cypress](https://www.cypress.io/) para los tests de integración del frontend

## Configurar un entorno de desarrollo

Tenemos dos tutoriales según tu plataforma:

- [Configurar un entorno de desarrollo en macOS/Linux](/es/docs/dev/setup-development-environment-mac-linux/)
- [Configurar un entorno de desarrollo en Windows](/es/docs/dev/setup-development-environment-windows/)

## Estructura de directorios

### El servidor Node.js Express

El backend se encuentra en el directorio **server**. Las carpetas con las que trabajarás más a menudo son:

- `server/lib`: la API de Gladys, es decir, la lógica de negocio principal (dispositivos, usuarios, escenas, habitaciones, etc.). Aquí es donde se implementa la mayor parte de las funciones del backend.
- `server/api`: los controladores y rutas REST que exponen la API de Gladys al frontend.
- `server/services`: las integraciones nativas (del núcleo).
- `server/models`: los modelos de Sequelize.
- `server/migrations`: las migraciones de la base de datos.
- `server/utils`: las utilidades compartidas.

Aquí tienes una breve explicación de todas las carpetas del backend ubicadas en el directorio **server**:

![Server architecture Gladys](../../../../../static/img/docs/fr/dev/server_architecture.png)

### El frontend Preact.js

La aplicación Preact se generó con [preact-cli](https://github.com/preactjs/preact-cli):

![Frontend architecture Gladys](../../../../../static/img/docs/fr/dev/frontend_architecture.png)

## Trabajar en el backend

Cuando añades una función al backend, normalmente:

1. Implementas la lógica en el módulo correspondiente de `server/lib` (la API de Gladys). Un módulo nunca debe acceder a la base de datos con SQL en bruto: utiliza los modelos y el resto de la API de Gladys. Si falta alguna capacidad, añade una nueva función a la API.
2. La expones, si es necesario, mediante una ruta REST en `server/api`.
3. La cubres con tests unitarios (consulta [Probar tus cambios](#testing-your-changes) más abajo).

Algunas convenciones que se aplican en todo el código:

- **Los comentarios JSDoc en las funciones son obligatorios.** Documentan el código y además sirven para la comprobación de tipos.
- Coloca las llamadas `require()` a módulos de terceros **dentro** de la función que los usa, no al principio del archivo, para que un módulo NPM defectuoso nunca pueda bloquear todo el proceso.

### Integraciones del núcleo (protocolos abiertos)

Las integraciones nativas se encuentran en el directorio [server/services](https://github.com/GladysAssistant/Gladys/tree/master/server/services), con una carpeta por servicio. Cada una tiene un `package.json` (con los campos obligatorios `os` y `cpu`) y un `index.js` que exporta una factory que expone al menos una función `start()` y una función `stop()`:

```js
module.exports = function ExampleService(gladys) {
  async function start() {
    // start the service
  }
  async function stop() {
    // stop the service
  }
  return Object.freeze({ start, stop });
};
```

El argumento `gladys` te da acceso a toda la API de Gladys. Registra tu servicio añadiéndolo a [server/services/index.js](https://github.com/GladysAssistant/Gladys/blob/master/server/services/index.js).

Esta vía solo merece la pena para protocolos abiertos que tengan su sitio en el núcleo. Para todo lo demás, una [integración externa](/es/docs/dev/external-integrations/) es más rápida de crear, no necesita revisión y se instala con un clic.

## Trabajar en la interfaz de usuario

La interfaz de Gladys 4 es una aplicación [Preact](https://preactjs.com/) ubicada en el directorio **front**. El código está organizado así:

- `front/src/routes`: las páginas, con una carpeta por pantalla.
- `front/src/components`: los componentes de interfaz reutilizables.
- `front/src/actions`: el estado de la aplicación y las acciones que lo modifican.
- `front/src/config/i18n`: las traducciones (`en.json`, `fr.json`, `de.json`, etc.).
- `front/src/routes/integration/all`: las pantallas de cada integración.

Para añadir una función a la interfaz, añade o edita una ruta y sus componentes, conecta el estado a través de `actions` y añade cada texto que uses a todos los archivos `front/src/config/i18n/<lang>.json` para que la interfaz siga completamente traducida (el inglés y el francés son los idiomas de referencia).

## Probar tus cambios {/* #testing-your-changes */}

Uno de los objetivos principales de Gladys Assistant es ser un software ultraestable y fiable, por lo que todo el código de Gladys debe estar probado.

- **Backend (Mocha):** los tests se encuentran en el directorio [server/test](https://github.com/GladysAssistant/Gladys/tree/master/server/test). Para ejecutarlos, lanza `npm test` en el directorio `server`. Mientras desarrollas, puedes centrarte en un único test añadiéndole `.only` (asegúrate de quitarlo antes de hacer el commit). Tus tests nunca deben llamar a APIs reales: simula (mock) todas las llamadas a módulos de terceros, por ejemplo con [proxyquire](https://github.com/GladysAssistant/Gladys/blob/master/server/test/services/example/index.test.js#L5).
- **Frontend (Cypress):** consulta la página dedicada a los [tests de Cypress](/es/docs/dev/cypress-tests/).

## Calidad del código

Usamos una configuración de `eslint` bastante estricta.

Usa `VSCode` para desarrollar y ver los problemas de linting en tiempo real, o ejecuta `npm run eslint` en el directorio `server` (y en `front`) para ver todos los errores de linting.

## Enviar tu contribución

Cuando tu cambio esté listo y probado, ¡enhorabuena! Puedes abrir una pull request en GitHub.

Lee: [Crear una PR en GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

## ¿Preguntas?

¿Tienes preguntas? ¡Ven a comentarlas [en el foro](https://community.gladysassistant.com/)!
