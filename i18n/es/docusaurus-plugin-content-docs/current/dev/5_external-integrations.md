---
id: external-integrations
title: Desarrollar una integración externa
description: "La forma más sencilla de desarrollar y publicar una integración para Gladys Assistant. Sin pull request, sin revisión de código, sin esperas: empaqueta tu integración como un contenedor Docker, publícala en GitHub y cualquier usuario podrá instalarla con un solo clic."
sidebar_label: Integraciones externas (recomendado)
---

**Las integraciones externas son la forma más sencilla y rápida de crear una integración para Gladys Assistant y de publicarla para todos los usuarios con un solo clic.**

**No hay que abrir ningún pull request, ni esperar una revisión de código, ni conseguir la aprobación de un maintainer**. Escribes tu integración en el lenguaje que prefieras, la empaquetas como una imagen Docker, publicas un repositorio público en GitHub y, a partir de ese momento, cualquiera puede instalarla desde cualquier instancia de Gladys.

Esta página es un tutorial completo, paso a paso, para desarrolladores.

## ¿Por qué integraciones externas?

Antes, añadir una integración a Gladys significaba [contribuir al proyecto principal](/es/docs/dev/developing-a-service/): hacer un fork del repositorio, programar el servicio dentro del código de Gladys, escribir tests unitarios, abrir un pull request y esperar a que un maintainer lo revisara y lo fusionara. Ese camino sigue existiendo y es ideal para los protocolos que tienen su lugar en el núcleo, pero tiene sus fricciones: necesitas conocer las entrañas de Gladys, respetar las convenciones de código, y el maintainer se convierte en un cuello de botella.

Las integraciones externas eliminan ese cuello de botella (la validación automática del manifiesto se sigue ejecutando, pero sin ninguna persona de por medio):

| | Integración interna | Integración externa |
| --- | --- | --- |
| Dónde vive el código | Dentro del repositorio de Gladys | En tu propio repositorio de GitHub |
| Lenguaje | Solo Node.js | Cualquier lenguaje (contenedor Docker) |
| Revisión necesaria | Sí, un maintainer debe fusionar tu PR | **Sin revisión, sin aprobación** |
| Publicación | Llega con la siguiente versión de Gladys | **Disponible al instante**, indexada automáticamente |
| Instalación para los usuarios | Incluida | **Un clic** desde el catálogo |
| Aislamiento | Se ejecuta en el proceso de Gladys | Se ejecuta en un **contenedor Docker aislado** |

Como una integración externa se ejecuta en su propio contenedor reforzado, supervisado por Gladys, un fallo o un cuelgue de tu código **queda contenido**: no puede tumbar la instancia de Gladys del usuario ni las demás integraciones. Esta garantía de estabilidad es lo que permite publicar sin revisión de forma segura.

## Cómo funciona

Una integración externa es un **contenedor Docker** que se comunica con Gladys a través de dos canales:

- Una **API REST del host** que Gladys expone en `/api/integration/v1/*`, que sirve para publicar los dispositivos descubiertos, enviar los estados de los dispositivos y las imágenes de las cámaras, y leer o escribir tu configuración.
- Un **canal WebSocket**, que Gladys utiliza para enviar comandos a tu integración en tiempo real (encender un interruptor, consultar un dispositivo, lanzar un escaneo, capturar una imagen de cámara) y para notificarte los eventos del ciclo de vida de los dispositivos (el usuario ha creado, modificado o eliminado un dispositivo).

No tienes que implementar toda esta infraestructura tú mismo: el [SDK de JavaScript](https://github.com/GladysAssistant/integration-sdk-js) oficial se encarga por ti de la autenticación, la conexión WebSocket, la reconexión automática con backoff exponencial, la confirmación de los comandos y la resincronización del estado. Puedes escribir tu integración en cualquier lenguaje, pero el SDK te ahorra mucho trabajo.

Además de lo básico (dispositivos, estados, configuración), la plataforma también admite **cámaras** (incluido el **control PTZ**), **servicios en la nube con OAuth2**, **botones de acción bajo demanda**, **insignias de transporte local/nube** (con un estado degradado), **descubrimiento de red mediado** (mDNS, SSDP, broadcast UDP), **Wake-on-LAN**, **subcontenedores con acceso al hardware**, **canales de mensajería**, **proveedores meteorológicos**, **las coordenadas de las casas del usuario** y **webhooks entrantes** (a través de Gladys Plus). Cada uno de estos puntos se trata en su propia sección más abajo.

Una integración declara uno de **tres tipos** en su manifiesto:

- **`device`** (de lejos el más habitual): publica los dispositivos que descubre: sensores, interruptores, luces, cámaras, etc.
- **`communication`**: un canal de mensajería en lugar de dispositivos, es decir, un puente de chat o de notificaciones como Telegram; consulta [Canales de mensajería](#messaging-channels).
- **`weather`**: un proveedor meteorológico (Météo France, Open-Meteo, AccuWeather…) que responde a las peticiones meteorológicas del núcleo de Gladys y alimenta el widget del panel, el asistente de chat y los desencadenantes de escenas de alertas meteorológicas; consulta [Proveedores meteorológicos](#weather-providers).

Algunas reglas de diseño importantes que debes tener en cuenta:

- **Tu integración nunca crea ni elimina dispositivos.** *Publica* los dispositivos que descubre y es el usuario quien decide, desde la interfaz de Gladys, cuáles crea, modifica o elimina. Así el usuario mantiene el control y la interfaz sigue siendo coherente.
- Gladys ejecuta tu contenedor con límites estrictos: **256 MB de memoria, 0,5 CPU, un sistema de archivos raíz de solo lectura, ninguna capability de Linux adicional y un único montaje con escritura, `/data`**. Diseña tu integración para que funcione dentro de estos límites (los subcontenedores pueden declarar sus propios límites, más altos; ver más abajo).

## Requisitos previos

- Una instancia de Gladys Assistant en la versión **4.84.0 o superior** (las integraciones externas se introdujeron en esta versión). Los [proveedores meteorológicos](#weather-providers), las [coordenadas de las casas](#house-coordinates) y los [puertos con nombre y placeholders](#guiding-the-user-sections-and-placeholders) del formulario de configuración requieren la **4.85.0 o superior**; las capacidades más recientes —[categorías de la tienda](#store-categories), [cámaras PTZ](#motorized-ptz-cameras), [Wake-on-LAN](#wake-on-lan) y [vinculación de cuentas](#account-linking-without-a-redirect)— requieren la **4.86.0 o superior**. Ajusta en consecuencia el rango `gladys_version` de tu manifiesto.
- [Docker](https://www.docker.com/) instalado en tu equipo de desarrollo.
- [Node.js 24 o superior](https://nodejs.org/) si usas el SDK de JavaScript (el SDK requiere Node.js 20 o superior, pero se recomienda la 24).
- Un registro Docker público para alojar tu imagen. La opción más sencilla es el [GitHub Container Registry](https://docs.github.com/packages/working-with-a-github-packages-registry/working-with-the-container-registry) (`ghcr.io`), que guarda tu imagen en el mismo sitio que tu código y en el que la plantilla oficial publica automáticamente. Docker Hub o cualquier otro registro público también sirve, siempre que la imagen se pueda descargar de forma anónima.
- Una cuenta de [GitHub](https://github.com/) para publicar tu repositorio.

## Paso 1: Partir de la plantilla

La forma más rápida de empezar es el repositorio de plantilla oficial:

👉 [GladysAssistant/integration-template-js](https://github.com/GladysAssistant/integration-template-js)

Haz clic en **"Use this template"** en GitHub para crear tu propio repositorio. Ya contiene una integración que funciona (sensores, un interruptor, una luz regulable, un enchufe inteligente, un sensor de movimiento y una cámara), un `Dockerfile`, un manifiesto válido, la documentación obligatoria `docs/en.md` y `docs/fr.md`, y un workflow de publicación de GitHub Actions listo para usar, para que puedas centrarte en la lógica de tus dispositivos.

## Paso 2: Escribir tu integración con el SDK

Instala el SDK en tu proyecto:

```bash
npm install @gladysassistant/integration-sdk
```

Aquí tienes un ejemplo completo y funcional de una integración de interruptor virtual:

```js
import {
  GladysIntegration,
  DEVICE_FEATURE_CATEGORIES,
  DEVICE_FEATURE_TYPES,
  logger,
} from "@gladysassistant/integration-sdk";

const gladys = new GladysIntegration();

// Se llama cuando el usuario pide a Gladys que busque nuevos dispositivos.
// Publica la lista completa de dispositivos que tu integración puede ofrecer.
gladys.onScanRequest(async () => {
  const ids = gladys.externalIds("switch", "0x00158d0001a2b3c4");
  await gladys.publishDiscoveredDevices([
    {
      name: "Virtual switch",
      external_id: ids.device,
      features: [
        {
          name: "On/Off",
          external_id: ids.feature("binary"),
          category: DEVICE_FEATURE_CATEGORIES.SWITCH,
          type: DEVICE_FEATURE_TYPES.SWITCH.BINARY,
          min: 0,
          max: 1,
          read_only: false,
          has_feedback: true,
          keep_history: true,
        },
      ],
    },
  ]);
});

// Se llama cuando el usuario enciende o apaga el interruptor desde Gladys.
// Haz aquí el trabajo real y luego confirma el nuevo estado a Gladys.
gladys.onSetValue(async (device, feature, value) => {
  // ... envía aquí el comando a tu dispositivo real ...
  await gladys.publishState(feature.external_id, value);
});

// Reaccionar a los cambios de configuración hechos por el usuario.
gladys.onConfigUpdated(async (config) => {
  logger.info("Configuration updated", config);
});

// Salir limpiamente con SIGTERM/SIGINT (parada, reinicio o actualización de Docker).
gladys.handleShutdown();

// Autenticarse, abrir el WebSocket y resincronizar.
await gladys.connect();
```

Esa es toda la integración. El SDK lee las credenciales que Gladys inyecta en el contenedor como variables de entorno, así que no hay nada que configurar a mano. Usar las constantes exportadas `DEVICE_FEATURE_CATEGORIES`, `DEVICE_FEATURE_TYPES` y `DEVICE_FEATURE_UNITS` (en lugar de cadenas sin más) mantiene tus features alineadas con las categorías, tipos y unidades que Gladys entiende.

Estas constantes son una copia exacta de las del núcleo de Gladys y se resincronizan en cada versión del SDK: las últimas versiones han añadido las features de **cámaras PTZ**, los **sensores de red eléctrica** (`input-power`, `output-power`, un `power` con signo y los índices de importación/exportación), los **sensores de suministro a la casa** (la potencia que un inversor o una batería entrega a la casa, más su salida en modo aislado), la categoría **mantenimiento** (la vida útil restante de un consumible: cepillo de robot aspirador, bolsa de polvo, mopa…), los sensores de gas **NO₂, O₃ y SO₂** y, antes de eso, estaciones de carga, termos eléctricos, modos y estados de funcionamiento de termostatos, almacenamiento en baterías, válvulas de agua, timbres, y la velocidad del ventilador y la oscilación de los aires acondicionados. Mantener `@gladysassistant/integration-sdk` actualizado es la forma de obtenerlas (la versión actual es la `0.12.0`).

### La API del SDK en resumen

Registra tus handlers de eventos **antes** de llamar a `connect()`.

**Conexión**

- `new GladysIntegration(options?)`: por defecto, el constructor lee `GLADYS_HOST_API_URL`, `GLADYS_INTEGRATION_TOKEN` y `GLADYS_INTEGRATION_SELECTOR` del entorno. Puedes sobrescribirlos (así como los retardos de reconexión, el timeout de las peticiones o el logger) mediante `options`.
- `connect()`: se autentica, abre el WebSocket, resincroniza el estado y se reconecta automáticamente sin parar (backoff exponencial, de 1 s a 60 s).
- `disconnect()`: cierra la conexión limpiamente y deja de reconectarse.
- `handleShutdown(cleanup?)`: termina de forma ordenada con `SIGTERM`/`SIGINT`, ejecutando antes tu callback de limpieza opcional. Es importante para que Docker pueda detener y reiniciar tu contenedor limpiamente.

**Dispositivos**

- `publishDiscoveredDevices(devices)`: publica la lista completa de dispositivos que ofreces (que se muestra al usuario en la pestaña "Descubrimiento"), hasta **2000 dispositivos** por publicación. Volver a publicar un dispositivo que el usuario ya ha creado actualiza silenciosamente sus `params` (por ejemplo, una IP de la LAN que ha cambiado por DHCP) sin tocar su nombre ni sus features; un cambio estructural, en cambio, muestra un botón "Actualizar" en la pestaña "Descubrimiento".
- `getDevices()`: devuelve los dispositivos que el usuario ha creado realmente.
- `externalIds(type, platformId)`: devuelve `{ device, feature(key) }`, la forma recomendada de construir identificadores estables y bien formateados para un dispositivo y sus features.
- `externalId(suffix)`: el helper de más bajo nivel, si prefieres construir tú mismo un identificador individual.

**Estado**

- `publishState(featureExternalId, value)`: publica una única actualización de estado: un número, `{ text }` para una feature de texto, o `{ state, created_at }` para registrar un estado pasado.
- `publishStates(states)`: publica un lote de actualizaciones (hasta 100 por petición). La API del host limita las actualizaciones de estado a **300 estados por minuto** por integración, así que publica los *cambios* de estado, no instantáneas completas.

**Escenas y widgets**

- `publishSceneEvent(key, data?)`: dispara uno de los desencadenantes de escena que has declarado (consulta Desencadenantes y acciones de escenas).
- `requestWidgetRefresh(key)`: pide al núcleo que vuelva a obtener ya uno de tus widgets (consulta Widgets del panel).

El límite está pensado para cambios, así que guarda el último valor que enviaste para cada feature y publica solo lo que realmente ha cambiado:

```js
const lastValues = new Map();
const changed = readings.filter(({ id, value }) => lastValues.get(id) !== value);
changed.forEach(({ id, value }) => lastValues.set(id, value));
await gladys.publishStates(
  changed.map(({ id, value }) => ({ device_feature_external_id: id, state: value })),
);
```

**Configuración y estado**

- `getConfig()` / `setConfig(partialConfig)`: lee y escribe tus valores de configuración.
- `getStatus()`: devuelve la versión de Gladys.
- `setConnectionStatus(connected, message?)`: informa de tu estado de conexión a nivel de aplicación (por ejemplo, "token de la nube caducado"), independientemente del enlace WebSocket con Gladys.

**Eventos (handlers)**

- `onSetValue(cb)`: el valor de una feature ha cambiado (un comando del usuario).
- `onPoll(cb)`: Gladys te pide que consultes un dispositivo.
- `onScanRequest(cb)`: Gladys te pide que descubras dispositivos.
- `onGetImage(cb)`: Gladys pide una imagen reciente de una cámara (consulta Cámaras).
- `onDeviceCreated(cb)` / `onDeviceUpdated(cb)` / `onDeviceDeleted(cb)`: eventos del ciclo de vida de los dispositivos.
- `onConfigUpdated(cb)`: la configuración ha cambiado.
- `onAction(key, cb)`: se ha pulsado un botón de acción del manifiesto (consulta Acciones).
- `onOAuthAuthorizeUrl(cb)` / `onOAuthCallback(cb)`: inicio de sesión en la nube con OAuth2 (consulta OAuth2).
- `onHardwareUpdated(cb)`: ha cambiado una autorización de hardware para un subcontenedor.
- `onSendMessage(cb)`: entregar un mensaje a un contacto (consulta Canales de mensajería).
- `onWeatherGet(cb)` / `onWeatherGetImage(cb)`: Gladys pide el tiempo, o una imagen del proveedor (consulta Proveedores meteorológicos).
- `onWebhook(key, cb)` / `onWebhookUpdated(cb)`: webhooks entrantes (consulta Webhooks entrantes).
- `onSceneAction(key, cb)`: una escena ha llegado a una de las acciones de escena que has declarado (consulta Desencadenantes y acciones de escenas).
- `onWidgetGet(key, cb)` / `onWidgetAction(key, cb)` / `onWidgetGetImage(cb)`: contenido, pulsaciones de botones e imágenes de los widgets del panel (consulta Widgets del panel).

**Red**

- `scanNetwork(type, options?)`: ejecuta una captura de red mediada declarada en tu manifiesto (consulta Descubrimiento de red).
- `wakeOnLan(mac, options?)`: pide al núcleo que envíe un paquete mágico Wake-on-LAN desde la red del host (consulta Wake-on-LAN).

**Proveedores meteorológicos**

- `requestWeatherRefresh()`: un aviso "fire-and-forget" que pide al núcleo que vuelva a obtener tu información meteorológica ahora mismo, en lugar de esperar a su próxima comprobación programada (consulta Proveedores meteorológicos).

Los comandos se confirman automáticamente si todo va bien; si un handler lanza una excepción, el comando se confirma como fallido. También puedes consultar directamente el estado local mediante `gladys.devices`, `gladys.config` y `gladys.connected`, y escuchar los eventos `connected` y `disconnected`.

Todos los métodos devuelven una promesa, y los errores de la API del host se lanzan como un `GladysApiError` con `status`, `code` y `message`, para que puedas capturarlos y reaccionar con precisión.

Las siguientes capacidades son opcionales. Salta directamente al [Paso 3](#step-3-write-the-manifest) si solo necesitas dispositivos, estados y configuración.

### Cámaras

Las cámaras usan la categoría `camera` con un tipo de feature `image` y tienen su propio canal dedicado (los datos de imagen nunca pasan por `publishState`, así que no acaban en el historial de estados ni cuentan para el límite de 300 estados por minuto). Hay dos vías complementarias:

- **Push**: envía periódicamente una instantánea con `publishCameraImage(externalId, image)` (limitado a 12 imágenes por minuto y dispositivo).
- **Pull**: entrega imágenes bajo demanda respondiendo al handler `onGetImage`. Su confirmación se espera durante un máximo de **15 segundos** (en lugar de los 5 habituales), para que una captura del estilo de `ffmpeg` tenga tiempo de ejecutarse.

```js
gladys.onGetImage(async (device) => {
  const jpeg = await captureSnapshot(device);
  return `image/jpg;base64,${jpeg.toString("base64")}`;
});

// O envía una instantánea de forma proactiva:
await gladys.publishCameraImage(ids.device, `image/jpg;base64,${jpeg.toString("base64")}`);
```

Las imágenes son cadenas `image/jpg;base64,...` y deben pesar menos de 150 KB.

#### Cámaras motorizadas (PTZ) {/* #motorized-ptz-cameras */}

*Requiere Gladys 4.86.0 o superior.*

Mover una cámara motorizada no requiere ninguna infraestructura nueva: el control PTZ se compone de features de comando normales en el mismo dispositivo, y los comandos de movimiento llegan por `onSetValue` como cualquier otra feature. Gladys muestra una cruceta direccional y un selector de posiciones predefinidas en la vista en directo del widget de cámara, mostrando **solo los movimientos que has declarado**.

```js
const ids = gladys.externalIds("camera", "front-door");

await gladys.publishDiscoveredDevices([
  {
    name: "Front door",
    external_id: ids.device,
    features: [
      { name: "Image", external_id: ids.feature("image"), category: DEVICE_FEATURE_CATEGORIES.CAMERA,
        type: DEVICE_FEATURE_TYPES.CAMERA.IMAGE, min: 0, max: 1, read_only: true, has_feedback: false, keep_history: false },
      {
        name: "Move",
        external_id: ids.feature("move"),
        category: DEVICE_FEATURE_CATEGORIES.CAMERA,
        type: DEVICE_FEATURE_TYPES.CAMERA.MOVE,
        min: 0,
        max: 6,
        read_only: false,
        has_feedback: false,
        keep_history: false,
        // Los movimientos que esta cámara admite realmente (0, parar, siempre se admite
        // y nunca se incluye en la lista):
        supported_options: [
          { value: 1, label: { en: "Left", fr: "Gauche" }, sort_order: 1 },
          { value: 2, label: { en: "Right", fr: "Droite" }, sort_order: 2 },
        ],
      },
    ],
  },
]);
```

- **`CAMERA.MOVE`** es una única feature para todos los movimientos: el valor indica el movimiento (`0` parar —siempre admitido, nunca listado como opción—, `1` girar a la izquierda, `2` girar a la derecha, `3` inclinar hacia arriba, `4` inclinar hacia abajo, `5` acercar el zoom, `6` alejar el zoom), y `supported_options` (`[{ value, label, sort_order }]`) declara el subconjunto que admite esta cámara.
- **`CAMERA.PRESET`** recupera una posición guardada. La lista etiquetada de posiciones predefinidas está en `supported_options`, y el valor que se te devuelve es el entero de la opción, que tú traduces al token propio de tu protocolo.
- **`CAMERA.PAN_POSITION`, `CAMERA.TILT_POSITION`, `CAMERA.ZOOM_POSITION`** son features numéricas opcionales de lectura/escritura para las cámaras que informan de una posición absoluta, con sus límites declarados mediante `min`/`max` (la unidad la eliges tú: espacio ONVIF normalizado, grados…).

**Regla de seguridad**: limita siempre un movimiento continuo con un watchdog (unos 5 segundos) para que un comando de parada perdido nunca deje la cámara girando contra su tope mecánico, y prefiere un paso relativo cuando tu cámara lo admita.

Volver a publicar un dispositivo ya creado actualiza silenciosamente las `supported_options` de sus features, exactamente igual que sus `params`: una posición predefinida renombrada en la cámara aparece sin que el usuario tenga que hacer nada.

### Listas de opciones descubiertas en el dispositivo

*Requiere Gladys 4.86.0 o superior.*

Algunas capacidades son una lista de opciones que solo conoce el propio aparato: las aplicaciones instaladas en un televisor, sus fuentes HDMI, las habitaciones de un robot aspirador, las escenas guardadas en un dispositivo. El tipo de feature `text`/`select` cubre exactamente eso: una elección entre valores que tu integración descubre, declarados por dispositivo mediante `supported_options`:

```js
{
  name: "Application",
  external_id: ids.feature("app"),
  category: DEVICE_FEATURE_CATEGORIES.TEXT,
  type: DEVICE_FEATURE_TYPES.TEXT.SELECT,
  min: 0,
  max: 0,
  read_only: false,
  has_feedback: true,
  keep_history: false,
  supported_options: [
    { value: "netflix", label: { en: "Netflix" }, sort_order: 1 },
    { value: "youtube", label: { en: "YouTube" }, sort_order: 2 },
  ],
}
```

El estado es el valor de la opción seleccionada, guardado como cadena y sin historial. Reserva este tipo para las listas que ningún conjunto de valores genérico puede describir: las capacidades de tipo enumeración que los estándares ya cubren (modos de aire acondicionado, velocidades de ventilador, modos de termostato…) conservan su propia categoría y su propio tipo, con valores enteros.

### Servicios en la nube con OAuth2

Para los proveedores en la nube que usan OAuth2, declara en tu manifiesto un campo de configuración de tipo `oauth2`, luego construye la URL de autorización y gestiona el callback:

```js
let state;

gladys.onOAuthAuthorizeUrl(async (key, redirectUri) => {
  state = crypto.randomUUID();
  return `https://api.provider.com/oauth2/authorize?client_id=${gladys.config.client_id}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=read&state=${state}`;
});

gladys.onOAuthCallback(async (key, { code, state: returnedState, redirectUri }) => {
  if (returnedState !== state) throw new Error("state mismatch");
  const tokens = await exchangeCodeForTokens(code, redirectUri);
  await gladys.setConfig({ access_token: tokens.access_token, refresh_token: tokens.refresh_token });
  await gladys.setConnectionStatus(true);
});
```

Renovar el token es responsabilidad de tu integración. Cuando caduque, indícalo con `setConnectionStatus(false, { en: "Token expired, please reconnect.", fr: "Token expire, reconnectez-vous." })`.

**Nunca escribas la URI de redirección a fuego en el código**: usa la `redirectUri` que te pasa Gladys y devuélvela byte a byte en el intercambio del token. Los proveedores exigen ahora un callback HTTPS (Spotify lo impone desde 2025), algo que un Gladys accesible en `http://192.168.1.50:1443` nunca puede cumplir, así que el flujo pasa por una página HTTPS fija alojada por Gladys, que redirige el navegador de vuelta a la instancia. La consecuencia práctica para ti y para tus usuarios: **solo hay que declarar una única URI de redirección en el proveedor**, tanto si se accede a Gladys en local como a través de Gladys Plus. La pantalla "Configuración" muestra la URL exacta que hay que copiar en la aplicación de desarrollador del proveedor.

#### Vinculación de cuentas sin redirección {/* #account-linking-without-a-redirect */}

*Requiere Gladys 4.86.0 o superior.*

Algunos proveedores vinculan una cuenta **sin redirigir nunca de vuelta** a Gladys: un inicio de sesión por QR aprobado en la propia aplicación del fabricante (al estilo de Xiaomi Home), o un emparejamiento confirmado en el propio dispositivo. En ese caso, declara el campo como `account_link` en lugar de `oauth2`:

```json
{ "key": "account", "type": "account_link", "label": { "en": "Link my account", "fr": "Lier mon compte" } }
```

La pantalla "Configuración" muestra el mismo botón "Conectar", y `onOAuthAuthorizeUrl` se llama de la misma forma, pero `redirectUri` es `undefined` (no hay ninguna), no se necesita ningún `state` anti-CSRF (no hay ningún ida y vuelta que proteger) y `onOAuthCallback` nunca se llama. Devuelve la URL de inicio de sesión del proveedor, vigila tú mismo la aprobación (normalmente mediante long-polling al proveedor) y luego notifícala con `setConnectionStatus(true)`: es lo que controla la insignia de conexión que se muestra al usuario.

```js
gladys.onOAuthAuthorizeUrl(async () => {
  const { loginUrl, ticket } = await startQrLogin();
  waitForApproval(ticket).then(() => gladys.setConnectionStatus(true));
  return loginUrl;
});
```

Un campo `account_link` está prohibido en un `contact_schema`: vincular una cuenta de proveedor afecta a toda la integración, nunca a un único usuario.

### Botones de acción

Declara `actions` en tu manifiesto para ofrecer operaciones bajo demanda con un resultado visible. Cada acción aparece como un botón (con un mini formulario opcional) en la pestaña "Configuración":

```js
gladys.onAction("detect_protocol", async (fields) => {
  const version = await tryProtocolVersions(fields.ip);
  return { en: `Protocol ${version} detected`, fr: `Protocole ${version} detecte` };
});
```

El valor devuelto (una cadena o un objeto multilingüe) se muestra debajo del botón; si se lanza una excepción, se muestra en su lugar el mensaje de error. Cada acción tiene su propio `timeout_seconds` (de 5 a 120, 30 por defecto).

### Transportes local/nube

Las integraciones de doble canal (Tuya nube + LAN, Shelly, eWeLink, etc.) pueden llegar al mismo dispositivo por distintos transportes, que varían según el dispositivo y a lo largo del tiempo. Declara los canales que admites en el campo `transports` del manifiesto y luego publica el transporte actual de cada dispositivo:

```js
import { DEVICE_TRANSPORTS } from "@gladysassistant/integration-sdk";

await gladys.publishTransports([
  { external_id: ids.device, transport: DEVICE_TRANSPORTS.LOCAL },
]);
```

Los valores válidos son `local`, `cloud` y `unreachable`. Una clave de configuración reservada, `GLADYS_PREFER_LOCAL` (booleano, `true` por defecto), refleja la preferencia del usuario y está disponible mediante `gladys.config` y `onConfigUpdated`.

Una entrada de transporte también puede llevar un **estado degradado**, independiente del propio transporte, para indicar una situación de "funciona, pero no como debería". Añade `degraded: true` y un `message` multilingüe (con `en` obligatorio, hasta 200 caracteres):

```js
await gladys.publishTransports([
  {
    external_id: ids.device,
    transport: DEVICE_TRANSPORTS.CLOUD,
    degraded: true,
    message: { en: "Local session refused, falling back to cloud", fr: "Session locale refusée, repli sur le cloud" },
  },
]);
```

### Descubrimiento de red

Los contenedores de las integraciones se ejecutan en una red bridge aislada, así que el tráfico broadcast de la LAN, mDNS y SSDP nunca les llega directamente. Por eso el descubrimiento lo media el núcleo de Gladys: **el núcleo captura (tiene la posición adecuada en la red) y tu integración interpreta (conoce el protocolo)**.

Declara las capturas que necesitas en el campo `network_discovery` del manifiesto y luego solicita un escaneo cuando lo necesites (normalmente desde `onScanRequest`):

```js
gladys.onScanRequest(async () => {
  const announcements = await gladys.scanNetwork("udp-broadcast", { timeoutSeconds: 10 });
  const devices = announcements.map(({ source_ip, payload_base64 }) => {
    const announcement = decodePayload(Buffer.from(payload_base64, "base64"));
    const ids = gladys.externalIds("plug", announcement.id);
    return {
      name: `Device ${announcement.id}`,
      external_id: ids.device,
      params: [{ name: "IP_ADDRESS", value: source_ip }],
      features: [],
    };
  });
  await gladys.publishDiscoveredDevices(devices);
});
```

Los escaneos son síncronos y de duración limitada (`timeoutSeconds` de 1 a 30). Los tipos admitidos son `udp-broadcast` (escucha pasiva), `udp-active-broadcast` (el núcleo envía un payload que tú proporcionas y retransmite las respuestas unicast, limitado a un escaneo cada 10 segundos con un payload de hasta 512 bytes), `mdns` y `ssdp`. Para `udp-active-broadcast`, pasa el `port` y el `payload` que se debe enviar:

```js
const replies = await gladys.scanNetwork("udp-active-broadcast", {
  port: 6667,
  payload: buildProbe(),
  timeoutSeconds: 10,
});
```

### Wake-on-LAN {/* #wake-on-lan */}

*Requiere Gladys 4.86.0 o superior.*

El mismo problema de posición en la red, pero del lado de la emisión: un paquete mágico es un broadcast UDP, que nunca cruza el bridge hacia la LAN. Declara `"network_wake": true` en tu manifiesto (se muestra en la pantalla de instalación, como los demás contratos de autorización; un acceso no declarado recibe un `403`) y pide al núcleo que lo emita:

```js
await gladys.wakeOnLan("64:e4:d5:b4:12:66"); // se aceptan los formatos con ":", con "-" y sin separadores

// ¿El dispositivo ignora el broadcast limitado? Apunta al broadcast de la subred o ajusta el puerto:
await gladys.wakeOnLan("64:e4:d5:b4:12:66", { address: "192.168.1.255", port: 9 });
```

El núcleo construye siempre él mismo el paquete mágico estándar de 102 bytes (6 × `0xFF` seguidos de la MAC repetida 16 veces), así que nunca proporcionas el payload y el endpoint no es un proxy UDP genérico. Está limitado a **un despertar cada 2 segundos** por integración (`429` si se supera), lo que basta para el bucle habitual de "reintentar hasta que el dispositivo responda". Una llamada resuelta significa que el paquete se ha **emitido**, no que el dispositivo se haya despertado: consulta el dispositivo para confirmarlo.

### Subcontenedores y hardware

Algunas integraciones necesitan servicios complementarios (un broker MQTT, Frigate, un puente de protocolo) o acceso a un dongle USB o a una TPU Coral. Decláralos en el campo `containers` del manifiesto (hasta cinco) y gestiona su ciclo de vida mediante el SDK:

```js
await gladys.startContainer("mqtt", { env: { MQTT_PASSWORD: password } });

const containers = await gladys.getContainers();
const frigate = containers.find((c) => c.name === "frigate");
const coral = frigate.devices.find((d) => d.class === "coral-usb");
const detector = coral.granted && coral.available ? "edgetpu" : "cpu";
```

`getContainers()`, `startContainer(name, options?)`, `stopContainer(name)` y `restartContainer(name)` controlan los contenedores complementarios. Cuando el usuario concede o retira el acceso a un elemento de hardware, se dispara el handler `onHardwareUpdated` para que puedas regenerar la configuración y reiniciar el contenedor afectado.

Cada entrada de `container.ports` refleja tu declaración del manifiesto, más el puerto del host que Gladys ha asignado:

```js
// [{ container_port: 5000, protocol: "tcp", host_port: 42115, label: { en: "Frigate UI" },
//    name: "frigate_ui", browsable: true }]
const [{ host_port: frigatePort }] = frigate.ports;
```

El puerto del host lo **elige Gladys** (un puerto libre, que se conserva aunque el contenedor se vuelva a crear y que nunca se declara en el manifiesto), así que léelo aquí en lugar de suponer uno; vale `null` mientras el contenedor no se haya iniciado nunca. Dos campos opcionales del manifiesto completan la declaración de un puerto:

- `browsable` (`true` por defecto): un puerto que sirve una interfaz web recibe un enlace "Abrir `<label>`" en la pantalla de supervisión. Ponlo a `false` para un puerto que un navegador no puede abrir —por ejemplo, un endpoint WebSocket que espera a los dispositivos— y Gladys mostrará en su lugar una simple insignia `<label>: <host_port>`.
- `name` (`[a-z0-9_]`, de 2 a 20 caracteres, único en todo el manifiesto): permite referenciar el puerto del host asignado desde el placeholder `{{port:<name>}}` de tu formulario de configuración, para que puedas escribir una dirección de la instancia en una frase que se muestra al usuario (consulta [Guiar al usuario](#guiding-the-user-sections-and-placeholders)).

### Logs

El SDK incluye un logger estructurado para que los logs de tu contenedor se puedan leer directamente con `docker logs`:

```js
import { logger, createLogger } from "@gladysassistant/integration-sdk";

logger.info("Starting the integration...");

const log = createLogger({ name: "weather-station" });
log.child("poll").debug("refreshing");
```

El nivel de log viene de la variable de entorno `LOG_LEVEL` (`debug`, `info`, `warn`, `error`, `silent`; `info` por defecto). El SDK también registra su propio ciclo de vida de conexión con el nombre `gladys-sdk`, de modo que los problemas de conectividad se pueden diagnosticar sin ninguna configuración adicional. Por lo demás, permanece en silencio: define `DEBUG=gladys-integration-sdk` para obtener sus logs internos de depuración en stderr.

Dos garantías que conviene conocer: el SDK **no guarda nada en el disco** (todo se resincroniza al reconectarse y `/data` es completamente tuyo), e **ignora silenciosamente los tipos de mensaje que no conoce**, así que una versión más reciente de Gladys nunca rompe una integración más antigua.

### Canales de mensajería {/* #messaging-channels */}

En lugar de exponer dispositivos, una integración puede ser un **canal de mensajería**: define `"type": "communication"` en el manifiesto para crear un puente de chat o de notificaciones (Telegram, Matrix, etc.). En lugar de dispositivos, intercambias mensajes con **contactos** que los usuarios vinculan a su cuenta de Gladys:

```js
// Gladys te pide que entregues un mensaje saliente a un contacto.
gladys.onSendMessage(async (contact, message) => {
  // message.file es una imagen adjunta en base64, o null.
  await sendToProvider(contact.id, message.text, message.file);
});

// Vincular un contacto del proveedor a un usuario de Gladys a partir de un código de emparejamiento.
const contact = await gladys.linkContact(code, providerUserId, "Alice");

// Reenviar a Gladys un mensaje entrante del proveedor.
await gladys.publishMessage(contactId, "The house is now empty.");
```

- `onSendMessage(cb)`: Gladys te pide que entregues un mensaje. Su primer argumento es el `contact` de destino (`{ id }` en un canal bidireccional, o los campos de contacto del usuario en un canal solo de envío), y el mensaje lleva un `text` y un `file` opcional (una imagen adjunta en base64, o `null`).
- `publishMessage(contactId, text, opts?)`: reenvía a Gladys un mensaje entrante (texto del mensaje de hasta 4096 caracteres).
- `linkContact(code, contactId, name?)`: vincula un contacto del proveedor a un usuario de Gladys a partir de un código de emparejamiento de un solo uso (válido 15 minutos), y devuelve el selector, el nombre de pila y el idioma del usuario.
- `getContacts()`: lista los contactos vinculados actualmente a este canal.

Una integración `communication` declara a cuál de las **dos familias** pertenece, mediante el campo obligatorio `messaging` del manifiesto:

- **Canales de chat bidireccionales** (`"messaging": { "receive": true }`, bots al estilo de Telegram): el usuario vincula su cuenta con un código corto enviado en el canal y luego habla desde ahí con el cerebro de Gladys. `onSendMessage` recibe `{ id }`, el contacto vinculado.
- **Canales de notificación solo de envío** (`"messaging": { "receive": false }`, al estilo de los SMS de Free Mobile o de CallMeBot): no hay ninguna vía de entrada, así que tampoco hay código de vinculación. Cada usuario introduce sus propias credenciales en el bloque "Mi cuenta" de la pantalla "Configuración", descrito por el campo `contact_schema` del manifiesto (mismo formato plano que `config_schema`), y Gladys se las pasa a tu handler con cada mensaje saliente:

```json
"messaging": { "receive": false },
"contact_schema": [
  { "key": "username", "type": "string", "label": { "en": "Free Mobile login" }, "required": true },
  { "key": "access_token", "type": "secret", "label": { "en": "SMS API key" }, "required": true }
]
```

```js
gladys.onSendMessage(async (contact, message) => {
  // contact contiene los valores de contact_schema del usuario de destino
  await sendFreeMobileSms(contact.username, contact.access_token, message.text);
});
```

Gladys omite a los usuarios sin cuenta vinculada o sin credenciales configuradas, que nunca llegan a tu handler. Una integración `communication` tiene una pantalla "Configuración" (a partir de su `config_schema`), pero no tiene pestañas "Dispositivos" ni "Descubrimiento".

### Proveedores meteorológicos {/* #weather-providers */}

*Requiere Gladys 4.85.0 o superior.*

Define `"type": "weather"` en tu manifiesto y tu integración se convierte en un **proveedor meteorológico**: Météo France, Open-Meteo, AccuWeather, un servicio meteorológico nacional o tu propia agregación. Como un canal de mensajería, no tiene pestañas "Dispositivos" ni "Descubrimiento", y no publica ni dispositivos ni estados: responde a las peticiones meteorológicas del núcleo de Gladys a través de una **API de proveedor dedicada**, y Gladys alimenta con la respuesta el widget meteorológico del panel, el asistente de chat ("¿qué tiempo hará mañana?") y los desencadenantes de escenas de alertas meteorológicas.

Instalar una integración meteorológica **tiene prioridad sobre el servicio OpenWeather integrado sin ninguna configuración**, y al detenerla o desinstalarla, Gladys vuelve automáticamente a él. Cuando hay varios instalados, los usuarios también pueden fijar un proveedor concreto desde la configuración del widget meteorológico.

Todo pasa por un único handler, que devuelve el **formato meteorológico pivote**: una estructura independiente del proveedor, generalizada a partir de lo que exponen los grandes proveedores, para que el núcleo nunca tenga que conocer tu proveedor por su nombre:

```js
import {
  WEATHER_CONDITIONS,
  WEATHER_ALERT_SEVERITIES,
  WEATHER_ALERT_TYPES,
} from "@gladysassistant/integration-sdk";

gladys.onWeatherGet(async ({ latitude, longitude, language, units }) => {
  const data = await fetchProviderForecast(latitude, longitude, language, units);
  return {
    // Obligatorio: temperature, weather (la condición), datetime.
    temperature: data.current.temperature,
    weather: WEATHER_CONDITIONS.RAIN,
    datetime: new Date().toISOString(),
    // Campos actuales opcionales, que simplemente se omiten si tu proveedor no los tiene:
    apparent_temperature: data.current.feelsLike,
    humidity: 80, // los porcentajes van de 0 a 100
    pressure: 1013,
    wind_speed: 4.2,
    wind_direction: 220,
    uv_index: 3,
    sunrise: data.current.sunrise,
    sunset: data.current.sunset,
    is_day: data.current.isDay, // booleano estricto, controla la variante día/noche del icono
    // Previsiones (Gladys conserva hasta 24 horas y 8 días):
    hours: data.hours.map((h) => ({ temperature: h.temp, weather: toCondition(h), datetime: h.time })),
    days: data.days.map((d) => ({ temperature_min: d.min, temperature_max: d.max, datetime: d.date })),
    // Alertas al estilo CAP, hasta 10 (vigilancia de Météo France: amarillo -> moderate, naranja -> severe, rojo -> extreme):
    alerts: [
      {
        severity: WEATHER_ALERT_SEVERITIES.SEVERE,
        event: "Orages violents",
        type: WEATHER_ALERT_TYPES.THUNDERSTORM,
      },
    ],
  };
});
```

El contrato, punto por punto:

- **`units` es la preferencia del usuario que hace la petición**, `metric` (°C, m/s, hPa, mm, km) o `us` (°F, mph, in, mi): devuelve tus valores en ese sistema de unidades. Los porcentajes (`humidity`, `cloud_cover`, `precipitation_probability`) van siempre de 0 a 100, nunca como fracción entre 0 y 1.
- **`weather` es una condición del enum pivote** (`WEATHER_CONDITIONS`): `clear`, `partly-cloudy`, `cloud`, `fog`, `drizzle`, `rain`, `pouring`, `sleet`, `hail`, `snow`, `thunderstorm`, `wind`, `night`, `unknown`. Traduce a ella los códigos de tu proveedor; cualquier otro valor se convierte en `unknown` (icono neutro).
- **`is_day` transmite la señal día/noche**, un booleano estricto opcional en las condiciones actuales y en cada entrada de `hours`: `weather` describe la meteorología e `is_day` controla la variante de visualización. La condición `night` se sigue aceptando por compatibilidad, pero está **obsoleta para los proveedores**: una noche lluviosa es `weather: "rain", is_day: false`, no `"night"`.
- **Cada entrada de previsión tiene sus propios campos obligatorios**: `temperature`, `weather` y `datetime` para una entrada de `hours`; `temperature_min`, `temperature_max` y `datetime` para una entrada de `days`. `days` puede incluir o no el día actual: los consumidores filtran por fecha del calendario, así que nunca tienes que empezar por hoy.
- **Las alertas siguen CAP**: `severity` (`minor`, `moderate`, `severe`, `extreme`) y `event` son obligatorios; `description`, `start`, `end` y `type` son opcionales. El `type` de fenómeno (`wind`, `rain`, `flood`, `thunderstorm`, `snow`, `heat`, `cold`, `avalanche`, `coastal`, `fog`) permite a Gladys traducir la alerta y asignarle un icono, cosa que un texto libre no permite; un tipo no válido se descarta y la alerta se conserva, mostrada solo a partir de su `event`.
- **La confirmación se espera durante un máximo de 15 segundos** (en lugar de los 5 habituales), para que una llamada reciente a una API de terceros tenga tiempo de ejecutarse. Lanzar una excepción —proveedor no configurado, API caída— hace fallar el comando, y Gladys pasa al siguiente proveedor disponible.
- **El núcleo normaliza y limita el payload**: los campos desconocidos se descartan, los números deben ser finitos, las fechas deben poder interpretarse, los arrays se recortan (24 `hours`, 8 `days`, 10 `alerts`, 3 `images`) y los textos de las alertas se truncan (`event` hasta 100 caracteres, `description` hasta 5000; los boletines de vigilancia pueden ser largos).

Dos extensiones opcionales completan el tipo.

**Imágenes del proveedor** (un mapa de vigilancia, un radar de lluvia, una vista por satélite). El payload meteorológico solo declara **metadatos** —un array `images` de hasta tres entradas `{ key, label? }`, donde `key` cumple `^[a-z0-9][a-z0-9-]{0,31}$`— y los bytes se transfieren bajo demanda:

```js
gladys.onWeatherGetImage(async (key) => {
  const png = await fetchVigilanceMap(); // devuelve un Buffer
  return png.toString("base64"); // base64 EN BRUTO, sin ningún prefijo "data:"
});
```

Gladys valida los bytes decodificados (PNG o JPEG, hasta 500 KB), los guarda en caché durante 10 minutos por clave y los sirve al navegador desde su propio origen, de modo que las direcciones IP de tus usuarios nunca llegan a un servidor de terceros. Solo se puede solicitar una clave declarada en tu último payload meteorológico.

**El aviso de actualización.** Gladys vuelve a evaluar los desencadenantes de escenas de alertas meteorológicas en una comprobación programada cada 30 minutos, obtenida mediante `onWeatherGet` y comparada sobre las alertas normalizadas. Un proveedor que *sabe* que algo ha cambiado en origen puede hacerlo mejor, pero nunca enviando datos:

```js
onUpstreamVigilanceChange(() => gladys.requestWeatherRefresh());
```

`requestWeatherRefresh()` solo significa "vuelve a consultarme ahora": los datos vuelven a entrar por la vía habitual de `onWeatherGet`, así que la escena se dispara unos segundos después en lugar de en los próximos 30 minutos. No lleva ningún dato, no espera respuesta y está limitado a uno por minuto por integración (más allá, se descarta silenciosamente).

No necesitas nada más por tu parte: el desencadenante de escena de alertas meteorológicas pertenece al núcleo y funciona igual con cualquier proveedor.

### Widgets del panel

*Requiere Gladys 5.1.0 o superior.*

Mucho de lo que sabe una integración no es un dispositivo: una previsión de producción, un plan de carga, la gasolinera más barata de la zona, el estado de un robot aspirador. Declara hasta cinco `widgets` en tu manifiesto y Gladys los incluirá en el selector de widgets del editor del panel, en su propia sección, bajo el nombre de tu integración.

```json
"widgets": [
  {
    "key": "charging_plan",
    "label": { "en": "Charging plan", "fr": "Plan de charge" },
    "description": { "en": "When the car will charge tonight.", "fr": "Quand la voiture va charger cette nuit." },
    "icon": "battery-charging",
    "settings": [
      { "key": "car", "type": "select", "source": "devices", "label": { "en": "Car", "fr": "Voiture" } }
    ],
    "action_timeout_seconds": 30
  }
]
```

El manifiesto declara la **identidad** del widget: su `key`, su `label` multilingüe (de 3 a 30 caracteres), una `description` y un `icon` de Feather opcionales, y hasta diez `settings` por instancia con la gramática de `config_schema`. Los ajustes se guardan en el JSON del panel, que cualquier usuario de un panel compartido puede leer, por lo que ahí se rechazan los campos `secret`, `oauth2` y `account_link`. Un ajuste con `source: "devices"` es la forma prevista de vincular una instancia de widget a uno de tus dispositivos.

El **contenido** se genera en tiempo de ejecución, no se guarda en el manifiesto, así que un robot aspirador que está limpiando puede devolver una tarjeta distinta de la de uno que está en su base:

```js
gladys.onWidgetGet("charging_plan", async ({ settings, language, units }) => {
  const plan = await computePlan(settings.car);
  return {
    ttl_seconds: 300,
    components: [
      { type: "text", variant: "caption", text: { en: "Off-peak hours", fr: "Heures creuses" } },
      { type: "value", value: plan.targetPercent, unit: "%", label: { en: "Target", fr: "Objectif" }, color: "success" },
      { type: "chart", chart_type: "area", unit: "kW", now_marker: true, series: [{ points: plan.points }] },
      { type: "button", label: { en: "Charge now", fr: "Charger maintenant" }, style: "primary",
        action: { key: "charge_now", params: {} } },
    ],
  };
});
```

Gladys obtiene el contenido cuando un panel muestra el widget, lo guarda en caché por ajustes, idioma y unidades, y lo vuelve a obtener cuando expira `ttl_seconds` (de 10 a 3600 segundos, 60 por defecto). Tu handler se espera durante un máximo de 15 segundos.

**Tú describes qué mostrar; Gladys decide cómo se ve.** Nada de HTML, CSS, scripts, ni colores o tamaños personalizados. Envías un árbol de contenido con un vocabulario fijo y el núcleo lo renderiza, que es lo que da a cada widget el tema actual, el modo oscuro, el diseño móvil, el idioma y los formatos numéricos del usuario, y compatibilidad futura cuando la interfaz cambia.

El vocabulario tiene ocho tipos de componentes:

| `type` | Qué muestra |
| --- | --- |
| `text` | Un título (`heading`), un párrafo (`body`) o un pie atenuado (`caption`), como texto plano escapado. |
| `value` | Un mosaico: un valor corto, con `unit`, `label`, `icon` y `color` semántico opcionales. |
| `gauge` | Un arco radial del tamaño de un mosaico entre `min` y `max`. |
| `status` | De 1 a 10 filas de etiqueta/valor con un punto de color. |
| `chart` | De 1 a 4 series de hasta 300 puntos, o de 1 a 4 de tus `device_features` sobre un `interval`, con hasta 8 `annotations` y un `now_marker` opcional. |
| `card-list` | De 1 a 12 tarjetas en un `grid`, o de 1 a 8 filas en una `list`, cada una con título, fecha, imagen, insignia, descripción y hasta 3 enlaces. |
| `image` | Una imagen en un marco fijo de 16:9. |
| `button` | Un botón en forma de píldora con exactamente uno de estos: `action`, `device_feature` + `value`, o un `link` https. |

Los colores son un enum semántico (`neutral`, `primary`, `success`, `warning`, `danger`, `info`) que el núcleo adapta al tema en ambos modos; nunca un valor hexadecimal. Cada campo de texto acepta una cadena simple o un objeto multilingüe. Las fechas son cadenas ISO 8601 que el núcleo formatea según la configuración regional y la zona horaria del usuario.

Una tarjeta tiene además un **presupuesto de contenido**, para que un widget no pueda sobrecargarse por diseño: como máximo 8 componentes, 1 componente central (`chart`, `card-list` o `image`), 6 mosaicos, 2 textos de los cuales un `body`, 1 `status` y 4 botones. Todo lo que supere un límite se descarta en el orden del contenido, así que pon primero lo importante. El núcleo también impone el orden de visualización (cabecera, mosaicos, componente central, estados, botones), sea cual sea el orden en que lo envíes.

Tres cosas más que puede hacer un widget:

```js
// Un botón que te devuelve la llamada. `params` proceden del contenido que enviaste, nunca de lo que introduce el usuario.
gladys.onWidgetAction("charging_plan", async (actionKey, params, { settings }) => {
  await startCharge(settings.car);
  return { en: "Charging started", fr: "Charge lancée" };
});

// Una imagen declarada en el contenido, servida a través de Gladys en lugar de descargarse de un tercero.
gladys.onWidgetGetImage(async (imageKey) => toBase64(await renderMap(imageKey)));

// "Vuelve a consultarme ahora", cuando tus datos han cambiado antes de que expire el TTL.
gladys.requestWidgetRefresh("charging_plan");
```

- `onWidgetAction(key, cb)`: devuelve un mensaje toast opcional y se espera durante el `action_timeout_seconds` del widget (de 5 a 120, 30 por defecto). Tras una acción correcta, el núcleo descarta el contenido en caché y todos los paneles abiertos lo vuelven a cargar.
- `onWidgetGetImage(cb)`: se registra una sola vez para todas tus claves de imagen. Devuelve el base64 en bruto (sin prefijo `data:`) de un PNG, JPEG o WebP, de como máximo 300 KB decodificado y 4096 × 4096 píxeles. El núcleo valida y rechaza, nunca recomprime, así que redimensiona por tu parte. Una imagen validada se guarda en caché durante una hora por clave: cuando cambien los bytes, cambia la clave.
- `requestWidgetRefresh(key)`: "fire-and-forget", limitado a una llamada cada 10 segundos por widget. Los mosaicos y gráficos vinculados a una feature de dispositivo se actualizan solos y no necesitan ningún aviso.

Tu payload nunca se considera de confianza: el núcleo normaliza y limita todo antes de que llegue a la interfaz, descartando los tipos de componentes y campos desconocidos, truncando los textos, recortando los arrays y aceptando solo enlaces `https`. Ejecuta tu integración con `DEBUG=gladys-integration-sdk` y el SDK registrará lo que el núcleo descartaría o truncaría, o llama directamente a `validateWidgetContent(content)` y `validateWidgetImage(base64)` en tus tests.

#### Un formulario detrás de un botón {/* #a-form-behind-a-button */}

*Requiere Gladys 5.2.0 o posterior.*

En reposo, un widget sigue siendo de lectura y toque, pero un botón puede pedir algunos valores antes de actuar: el precio de una entrega de pellets introducido en la tableta de la pared, un número de minutos, una opción de una lista. Declara `fields` en su `action` (4 como máximo, de tipo `string`, `number`, `boolean` o `select`, con la gramática del `config_schema`):

```js
gladys.onWidgetGet("pellets", async () => ({
  components: [
    { type: "value", value: stock.bags, unit: "bags", label: { en: "Stock", fr: "Stock" } },
    {
      type: "button",
      label: { en: "Pallet delivered", fr: "Palette livrée" },
      icon: "truck",
      action: {
        key: "delivery",
        fields: [
          { key: "bags", type: "number", required: true, min: 1, max: 200, default: 72,
            label: { en: "Bags delivered", fr: "Sacs livrés" } },
          { key: "price_per_bag", type: "number", required: true, min: 0, max: 50, default: stock.lastPrice,
            label: { en: "Price per bag", fr: "Prix par sac" } },
        ],
      },
    },
  ],
}));

gladys.onWidgetAction("pellets", async (actionKey, params, { values }) => {
  await stock.recordDelivery(values.bags, values.price_per_bag); // validated by the core
  return { en: `${values.bags} bags added`, fr: `${values.bags} sacs ajoutés` };
});
```

Un toque en el botón abre el formulario dentro de la tarjeta, rellenado con los `default`, que son valores calculados en tiempo de ejecución: aquí, el último precio pagado. Gladys valida lo que ha escrito el usuario frente a tu declaración antes de que te llegue nada (clave desconocida, valor no válido, texto de más de 1000 caracteres o campo obligatorio ausente se rechazan, se aplican los valores por defecto), y te lo pasa en `values`, junto a `params` y nunca mezclado con ellos. `values` no existe en una acción sin `fields`.

Nada de `section`, `multi_select`, `secret`, `oauth2`, `account_link` ni `source` en estos campos: el contenido se genera en tiempo de ejecución, así que enumera tú mismo las opciones. Una declaración de `fields` no válida elimina el botón. Un valor introducido es un **evento** del usuario (ha habido una entrega, a este precio), nunca una escritura en tu configuración, que sigue reservada a los administradores.

Un núcleo más antiguo ignora `fields` y ejecuta la acción sin `values`: declara un rango `gladys_version` que empiece en `5.2.0`, o rechaza una acción recibida sin ellos.

### Desencadenantes y acciones de escenas

*Requiere Gladys 5.1.0 o superior.*

Una feature de dispositivo es un **estado**, y `POST /state` lo cubre bien. Lo que no cubre es lo que **ocurre**: una matrícula reconocida en la entrada, un timbre pulsado, una etiqueta NFC escaneada. Y escribir un valor no es lo mismo que ejecutar una **operación** con parámetros y un resultado, como "haz una instantánea y dame la imagen".

Declara `scene_triggers` y `scene_actions` en tu manifiesto (hasta 20 de cada) y aparecerán en el editor de escenas junto a los integrados, en una categoría "Integraciones". Cualquier tipo de integración puede declararlos.

```json
"scene_triggers": [
  {
    "key": "object_detected",
    "label": { "en": "Object detected", "fr": "Objet détecté" },
    "fields": [
      { "key": "camera", "type": "select", "source": "devices", "required": true,
        "label": { "en": "Camera", "fr": "Caméra" } },
      { "key": "zone", "type": "string", "label": { "en": "Zone", "fr": "Zone" } }
    ],
    "variables": [
      { "key": "label", "type": "string", "label": { "en": "Object type", "fr": "Type d'objet" } },
      { "key": "score", "type": "number", "label": { "en": "Confidence", "fr": "Confiance" } }
    ]
  }
],
"scene_actions": [
  {
    "key": "create_snapshot",
    "label": { "en": "Take a snapshot", "fr": "Prendre un instantané" },
    "timeout_seconds": 20,
    "fields": [
      { "key": "camera", "type": "select", "source": "devices", "required": true,
        "label": { "en": "Camera", "fr": "Caméra" } }
    ],
    "outputs": [{ "key": "image", "type": "string", "label": { "en": "Snapshot", "fr": "Instantané" } }]
  }
]
```

`fields` usa la misma gramática plana que `config_schema` (hasta 10 por declaración) y Gladys genera a partir de ella el formulario en el editor de escenas. En un desencadenante, esos campos son los **filtros** que configura el autor de la escena; un campo que se deja vacío coincide con cualquier valor. `variables` (hasta 20) son los detalles que lleva tu evento, expuestos a los pasos siguientes de la escena como `{{triggerEvent.data.<key>}}`. En una acción, `outputs` son los valores que devuelves, disponibles para los pasos posteriores.

Dispara un desencadenante con `publishSceneEvent`:

```js
await gladys.publishSceneEvent("object_detected", {
  camera: ids.device,
  label: "person",
  zone: "driveway",
  score: 0.92,
});
```

`data` es plano: como máximo 30 claves, cada una una cadena de hasta 1000 caracteres, un número finito, un booleano o `null`. Nunca un objeto anidado ni un array, porque un evento lleva detalles, no un payload que interpretar. El núcleo construye los filtros y las variables a partir de tu declaración, compara los filtros con lo que ha configurado cada autor de escena e inicia las escenas que coinciden. Envía un evento **por transición**, no una instantánea periódica: el límite es de 300 eventos por minuto por integración.

**Nunca sabes qué escenas existen.** Tú disparas un evento tipado y el núcleo se encarga de la coincidencia. No hay nada que pueda filtrarse, nada que resincronizar cuando te reconectas, y la configuración del usuario se queda en Gladys. Un `publishSceneEvent` resuelto significa "aceptado y evaluado una vez", no "se ha ejecutado una escena". La coincidencia se basa en la igualdad y la pertenencia sobre los campos declarados, nada más: ningún operador, ningún umbral, ninguna duración. Si necesitas `>` sobre un valor, ese valor es un estado y debe ir en una feature de dispositivo.

Gestiona una acción con `onSceneAction`:

```js
gladys.onSceneAction("create_snapshot", async (fields) => {
  const image = await grabSnapshot(fields.camera);
  return { image };
});
```

Los campos llegan **resueltos**: variables de escena sustituidas, valores por defecto aplicados y validados por el núcleo según tu declaración. Devuelve un objeto con tus `outputs` declarados (solo escalares, cadenas limitadas a 10 000 caracteres) o nada. Tu handler se espera durante el `timeout_seconds` declarado (de 5 a 120, 30 por defecto), contado desde el momento en que la escena llega a la acción. Lanzar una excepción solo hace fallar esa acción: la escena la registra y continúa. Una acción se emite una sola vez, sin cola y sin reintentos.

Una imagen no es un output: publícala mediante `publishCameraImage` y deja que la escena use las acciones de cámara del núcleo.

### Integraciones sin dispositivos: el tipo `provider`

*Requiere Gladys 5.1.0 o superior.*

Algunas integraciones no tienen ningún dispositivo. Un índice de precios de carburante, un feed de estrenos de cine, un puente que solo reenvía eventos: todo su contrato es lo que declaran. Estas usan `"type": "provider"`, que debe declarar al menos uno de `widgets`, `scene_triggers`, `scene_actions` o, desde Gladys 5.2.0, `energy_contracts`.

Una integración `provider` tiene las pantallas "Configuración", "Supervisión" y "Logs", pero no las pestañas "Dispositivos" ni "Descubrimiento", exactamente igual que los tipos `communication` y `weather`. Todo lo demás del manifiesto funciona igual.

Los widgets y las declaraciones de escenas son **capacidades, no tipos**: una integración `device` también puede declararlos y, por lo general, debería hacerlo. Una integración de robot aspirador publica sus dispositivos, un widget para su estado y una acción de escena "limpiar una habitación", todo desde el mismo manifiesto.

### Calendarios: el tipo `calendar` {/* #calendars-the-calendar-type */}

*Requiere Gladys 5.2.0 o posterior.*

Un proveedor de calendarios (un servidor CalDAV o Nextcloud, iCloud con una contraseña de aplicación, un feed ICS público para un horario escolar o la recogida de basura…) es una integración externa de tipo `"calendar"`. **La integración sincroniza, el núcleo almacena**: los calendarios y eventos que envías alimentan la vista de calendario, el disparador y las acciones de escena de calendario y el asistente, exactamente como los calendarios de la integración CalDAV interna. Gladys nunca escribe en el proveedor.

Los calendarios son datos personales, así que pertenecen a los usuarios. La página de la integración muestra a **cada usuario** un bloque «Mis calendarios»: los campos de tu `account_schema` opcional (con el formato del `config_schema`, con valores por usuario) y un botón para activarla. **Activar es dar el consentimiento**: solo sincronizas a los usuarios que han activado la integración, y cada uno tiene, en cada calendario que envías, un interruptor `sync` (omitir este calendario) y un interruptor `shared` (visible para el hogar, y solo entonces para las escenas).

```json
{
  "type": "calendar",
  "account_schema": [
    { "key": "server_url", "type": "string", "label": { "en": "Server URL" }, "required": true },
    { "key": "app_password", "type": "secret", "label": { "en": "App password" }, "required": true }
  ]
}
```

```js
const syncUser = async ({ user, config }) => {
  const client = await caldav.connect(config.server_url, config.app_password); // your provider code
  // Every id is user-scoped: ext:<selector>:<user_selector>:<provider id>.
  const id = (providerId) => gladys.externalId(`${user.selector}:${providerId}`);
  const calendars = await client.calendars();
  await gladys.publishCalendars(user.selector, calendars.map((c) => ({ external_id: id(c.url), name: c.name, color: c.color })));
  const skipped = new Set((await gladys.getCalendars(user.selector)).filter((c) => !c.sync).map((c) => c.external_id));
  for (const calendar of calendars) {
    if (skipped.has(id(calendar.url))) continue;
    const window = { from: startOfMonth, to: addMonths(startOfMonth, 12) };
    await gladys.publishCalendarEvents(
      id(calendar.url),
      (await client.events(calendar, window)).map((e) => ({
        external_id: id(e.uid + (e.recurrenceId || "")),
        name: e.summary,
        start: e.start, // an ISO date-time, or "2026-08-15" for a full-day event
        end: e.end, // exclusive on a full-day event, as in iCalendar
        full_day: e.allDay,
        location: e.location,
      })),
      window,
    );
  }
};

gladys.on("connected", async () => {
  for (const account of await gladys.getCalendarAccounts()) await syncUser(account);
});
gladys.onCalendarAccountUpdated(async (userSelector) => {
  const account = (await gladys.getCalendarAccounts()).find((a) => a.user.selector === userSelector);
  if (account) await syncUser(account);
  else stopSyncing(userSelector); // disabled: their calendars are already destroyed
});
```

Las reglas que mantienen una sincronización correcta:

- **Identificadores por usuario**: cada `external_id` de calendario y de evento empieza por `ext:<selector>:<user_selector>:` (255 caracteres como máximo). Dos usuarios que sincronizan el mismo calendario del proveedor nunca colisionan, y un evento publicado de nuevo bajo otro calendario del mismo usuario se mueve, no se duplica.
- **Quién es dueño de cada campo**: `name`, `description` y `color` son tuyos y se sobrescriben en cada envío. `sync`, `shared` y `selector` pertenecen al usuario y nunca se tocan. Un calendario enviado empieza siendo privado.
- **Una ventana sustituye su contenido**: con `window: { from, to }`, se borran tus eventos que se solapan con la ventana y no están en la lista, así que un borrado en el proveedor se propaga simplemente volviendo a publicar. Los eventos creados a mano en Gladys nunca se borran. Una ventana, una petición: por encima de 500 eventos, divide el periodo en subventanas disjuntas. Sin `window`, es un simple upsert.
- **Límites**: 50 calendarios por usuario, 500 eventos por petición, 30 escrituras de calendario por minuto y por integración. Despliega tú mismo las repeticiones, sobre un horizonte acotado.
- **Avisado en ambos sentidos**: `onCalendarAccountUpdated(userSelector)` se dispara cuando un usuario activa o desactiva la integración, cambia los valores de su cuenta o cambia un interruptor. Se pierde mientras estás desconectado, así que vuelve a leer `getCalendarAccounts()` y `getCalendars()` en cada conexión.

Solo ves tus propios calendarios, nunca los demás calendarios del usuario. El OAuth por usuario (Google Calendar, Outlook) no está disponible en esta primera versión: los campos `oauth2` y `account_link` se rechazan en un `account_schema`.

### Contratos de energía {/* #energy-contracts */}

*Requiere Gladys 5.2.0 o posterior.*

Desde Gladys 5.2, un contrato de energía es un conjunto de reglas interpretadas por un motor de tarificación en el núcleo (franjas horarias, días de la semana, estaciones, calendarios tarifarios, tramos de consumo, precios spot, cuotas fijas, impuestos, términos de potencia). Una integración puede publicar un contrato **por completo**, sin ningún cambio en Gladys, con el campo de capacidad `energy_contracts`, que puede usar cualquier tipo de integración:

- **plantillas** (`templates`): los contratos que ofrece, que aparecen en el asistente de contratos junto al catálogo de la comunidad. En modo `"rules"`, la plantilla lleva una definición de tarifa que calcula el motor. En modo `"delegated"`, la integración tarifica ella misma los intervalos de 30 minutos;
- **calendarios**: los valores fechados que leen las plantillas y que la integración mantiene: colores del día, festivos, días de punta, precios spot cada 30 o 15 minutos.

```json
"energy_contracts": {
  "templates": [
    { "key": "hydro-quebec-d", "name": { "en": "Hydro-Québec Rate D" }, "country": "CA", "currency": "CAD",
      "timezone": "America/Toronto", "pricing_mode": "rules", "version": "2026-04-01",
      "calendars": ["hq-critical-peaks"], "inputs": [{ "key": "subscribed_power", "type": "number", "unit": "kW" }],
      "tariff": { "tariff_version": 1, "calendars": ["hq-critical-peaks"], "components": ["…"] } },
    { "key": "octopus-agile", "name": { "en": "Octopus Agile" }, "country": "GB", "currency": "GBP",
      "timezone": "Europe/London", "pricing_mode": "delegated", "version": "1",
      "inputs": [{ "key": "region", "type": "select", "options": ["A", "B", "C"] }] }
  ],
  "calendars": [
    { "key": "hq-critical-peaks", "granularity": "day", "values": ["normal", "critical-peak"], "timezone": "America/Toronto" },
    { "key": "spot-fi", "granularity": "fifteen_minutes", "currency": "EUR", "timezone": "Europe/Helsinki" }
  ]
}
```

```js
// Feed a calendar: upsert by start. A changed value recomputes the costs that read it.
await gladys.publishEnergyCalendar("hq-critical-peaks", [{ date: "2026-01-12", value: "critical-peak" }]);
await gladys.publishEnergyCalendar("spot-fi", slots.map((s) => ({ starts_at: s.start, price: s.eurPerKwh })));

// Delegated pricing: one cost per half-hour interval of one billing period.
gladys.onEnergyPrice(async ({ contract, billing_period, cumulative_before, intervals }) => {
  const prices = await agile.getPrices(contract.inputs.region, intervals);
  return intervals.map(({ starts_at, kwh }) => ({ starts_at, cost: kwh * prices.get(starts_at), label: "Agile" }));
});
// The current price, for the dashboard widget and the scene condition.
gladys.onEnergyCurrent(async ({ contract }) => {
  const slot = await agile.getCurrentSlot(contract.inputs.region);
  return { price: slot.price, valid_until: slot.end, next_price: slot.nextPrice };
});
```

A tener en cuenta:

- **Hasta 20 plantillas y 10 calendarios.** La `key` de una plantilla no cambia nunca una vez publicada: los contratos la guardan.
- **Las claves de calendario son globales**: un calendario por clave en una instancia de Gladys, propiedad de la primera integración instalada que lo declara. Una clave nunca lleva un prefijo de proveedor, así que una plantilla escrita para `spot-fr` funciona sea cual sea la integración que alimente `spot-fr`. Su granularidad (`day`, `thirty_minutes` o `fifteen_minutes`) no cambia nunca.
- **Las entradas de calendario están acotadas**: 2000 por llamada, desde 5 años atrás hasta 7 días por delante, alineadas con la granularidad, con exactamente un `value` (entre los `values` declarados) o un `price` (por kWh, posiblemente negativo).
- **La tarificación delegada nunca se da por buena sin más**: cada intervalo pedido debe recibir exactamente un coste finito, por debajo de un límite de sentido común. Una respuesta no válida o una excepción falla como un timeout: los intervalos no reciben un nuevo coste (nunca un cero silencioso) y la siguiente ejecución lo vuelve a intentar, así que la misma petición debe dar la misma respuesta. Nunca recibes el contador ni su historial, solo los intervalos que tarificar.
- **Ciclo de vida**: una integración detenida mantiene calculados sus contratos `rules` mientras sus calendarios estén alimentados. Una desinstalación conserva los contratos y los calendarios.

La gramática de tarifas del modo `rules` se describe en [la especificación de los contratos de energía](https://github.com/GladysAssistant/Gladys/blob/master/docs/specs/energy-contracts.md) del repositorio de Gladys.

### Coordenadas de las casas {/* #house-coordinates */}

*Requiere Gladys 4.85.0 o superior.*

Una integración cuya lógica depende de dónde vive el usuario —calidad del aire, polen, restricciones de agua, mareas— puede leer las coordenadas de las casas configuradas en Gladys, en lugar de pedir al usuario que vuelva a escribir su latitud y longitud en tu formulario de configuración.

La ubicación de la vivienda es un dato personal sensible, así que el acceso es un **contrato de autorización**, como las capturas de red: declara `"location": true` en tu manifiesto (la petición se muestra entonces al usuario en la pantalla de instalación) y Gladys sirve `GET /house` en la API del host. Una integración que no lo haya declarado recibe un `403`.

El SDK de JavaScript todavía no encapsula este endpoint, así que llámalo con las credenciales que Gladys inyecta en tu contenedor:

```js
const response = await fetch(`${process.env.GLADYS_HOST_API_URL}/api/integration/v1/house`, {
  headers: { Authorization: `Bearer ${process.env.GLADYS_INTEGRATION_TOKEN}` },
});
const houses = await response.json();
// [{ id, name, selector, latitude, longitude }], ordenadas por nombre
```

`latitude` y `longitude` valen `null` cuando el usuario no ha ubicado la casa, y puede haber varias casas: gestiona ambos casos. Solo se devuelven estos cinco campos, nunca el modo de alarma, el código ni el retardo. Las coordenadas cambian pocas veces, así que obtenerlas al arrancar y al reconectarse es el patrón habitual.

Una integración `weather` no necesita ni este endpoint ni `location: true`: las coordenadas de la casa que se está mostrando viajan en las `options` de cada petición meteorológica.

### Webhooks entrantes (Gladys Plus)

Cuando la instancia del usuario está conectada a **Gladys Plus**, tu integración puede recibir **webhooks entrantes** en URL HTTPS públicas, lo que resulta práctico para los proveedores en la nube que envían eventos o necesitan una URL de callback. Declara hasta tres en el campo `webhooks` del manifiesto y luego gestiónalos:

```js
// Fire-and-forget: se confirma inmediatamente, los errores del handler se ignoran.
gladys.onWebhook("events", async ({ body }) => {
  await refreshFromApi();
});

// Síncrono: devuelves la respuesta HTTP (estado de 200 a 499, cuerpo de hasta 64 KB).
gladys.onWebhook("callback", async ({ query }) => ({
  status: 200,
  contentType: "application/json",
  body: JSON.stringify({ "hub.challenge": query["hub.challenge"] }),
}));
```

- `getWebhooks()`: devuelve `{ available, webhooks: [{ key, mode, url }] }`. La URL pública solo existe cuando Gladys Plus está vinculado, así que regístrala en el servicio de terceros en tiempo de ejecución.
- `onWebhook(key, cb)`: el callback recibe `{ method, query, body, contentType }`.
- `onWebhookUpdated(cb)`: se dispara cuando Gladys Plus se vincula o desvincula, o cuando cambia una URL, para que puedas volver a registrar tus webhooks.

## Paso 3: Escribir el manifiesto {/* #step-3-write-the-manifest */}

Cada integración externa se describe mediante un único archivo llamado `gladys-assistant-integration.json`, situado en la **raíz de tu repositorio**:

```json
{
  "manifest_version": 1,
  "type": "device",
  "name": "My Integration",
  "description": {
    "en": "Control my devices from Gladys Assistant.",
    "fr": "Contrôlez mes appareils depuis Gladys Assistant."
  },
  "version": "1.0.0",
  "docker_image": "ghcr.io/yourname/my-integration:1.0.0",
  "gladys_version": ">=4.86.0",
  "cover_image": "https://raw.githubusercontent.com/yourname/my-integration/main/cover.jpg",
  "categories": ["lighting", "energy"],
  "transports": ["local", "cloud"],
  "config_schema": [
    {
      "key": "api_key",
      "type": "secret",
      "label": { "en": "API key", "fr": "Clé d'API" },
      "placeholder": { "en": "sk-1234...", "fr": "sk-1234..." },
      "required": true
    }
  ]
}
```

### Campos del manifiesto

| Campo | Obligatorio | Descripción |
| --- | --- | --- |
| `manifest_version` | Sí | Debe ser `1`. |
| `type` | Sí | `"device"` (expone dispositivos), `"communication"` (un canal de mensajería), `"weather"` (un proveedor meteorológico), `"calendar"` (un proveedor de calendarios, Gladys 5.2.0 o posterior) o `"provider"` (sin dispositivos, solo capacidades). |
| `name` | Sí | Nombre visible, de 3 a 30 caracteres. |
| `description` | Sí | Un objeto con los idiomas como claves. `en` es obligatorio, y cada texto tiene de 10 a 100 caracteres. |
| `version` | Sí | [Versión semántica](https://semver.org/) estricta. Al incrementarla, se avisa a los usuarios de que hay una actualización disponible. |
| `docker_image` | Sí | Una referencia de imagen bien formada con una etiqueta o un digest explícito. Debe existir y poder descargarse de forma anónima. |
| `gladys_version` | Sí | Un rango semver (sintaxis npm) que sirve para filtrar las instancias compatibles. |
| `cover_image` | No | URL HTTPS directa a una imagen de portada (consulta las reglas más abajo). |
| `categories` | No | De 1 a 3 categorías del catálogo (ver más abajo). Requiere un rango `gladys_version` que empiece en `4.86.0`. |
| `config_schema` | No | La lista de campos de configuración que se muestran al usuario. |
| `transports` | No | Subconjunto no vacío de `local` y `cloud`, si tu integración es de doble canal. |
| `actions` | No | De 1 a 10 botones de acción, cada uno con una `key`, un `label` multilingüe, un `timeout_seconds` (de 5 a 120) y `fields` opcionales. |
| `network_discovery` | No | De 1 a 5 métodos de captura mediada (`udp-broadcast`, `udp-active-broadcast`, `mdns`, `ssdp`). |
| `containers` | No | Hasta 5 contenedores complementarios, cada uno con `name`, `docker_image`, `start` (`auto` o `manual`) y, opcionalmente, `env`, `volumes`, `ports` (hasta 3, cada uno con `container_port`, `protocol`, un `label` multilingüe, y `name` y `browsable` opcionales), `devices` (`coral-usb`, `coral-pcie`, `gpu`, `video`), `read_only`, `command`, `memory_mb` (de 32 a 4096), `cpu` (de 0,1 a 2), `shm_mb` (de 64 a 512). |
| `location` | No | `true` solicita acceso a las coordenadas de las casas del usuario (`GET /house`). Se muestra en la pantalla de instalación y se aplica en el servidor. |
| `network_wake` | No | `true` solicita permiso para enviar paquetes mágicos Wake-on-LAN a través del núcleo. Se muestra en la pantalla de instalación y se aplica en el servidor. |
| `messaging` | Obligatorio para `communication` | `{ "receive": true }` para un canal de chat bidireccional, `{ "receive": false }` para un canal de notificación solo de envío. Prohibido para los demás tipos. |
| `contact_schema` | Obligatorio cuando `messaging.receive` es `false` | Las credenciales por usuario de un canal solo de envío, con el mismo formato de campos que `config_schema` (sin los campos `oauth2`). Prohibido en los demás casos. |
| `webhooks` | No | Hasta 3 webhooks entrantes (Gladys Plus), cada uno con una `key`, un `label` multilingüe y un `mode` (`fire_and_forget` o `sync`). |
| `widgets` | No | De 1 a 5 widgets del panel, cada uno con una `key`, un `label` multilingüe, `description` e `icon` opcionales, hasta 10 `settings` y un `action_timeout_seconds` (de 5 a 120). Requiere un rango `gladys_version` que empiece en `5.1.0`. |
| `scene_triggers` | No | De 1 a 20 desencadenantes de escena, cada uno con una `key`, un `label` multilingüe, hasta 10 `fields` y hasta 20 `variables`. Requiere un rango `gladys_version` que empiece en `5.1.0`. |
| `scene_actions` | No | De 1 a 20 acciones de escena, cada una con una `key`, un `label` multilingüe, un `timeout_seconds` (de 5 a 120), hasta 10 `fields` y hasta 20 `outputs`. Requiere un rango `gladys_version` que empiece en `5.1.0`. |
| `account_schema` | No, solo tipo `calendar` | Los campos de cuenta por usuario de una integración de calendarios, con el mismo formato que el `config_schema` (sin `oauth2` ni `account_link`). Requiere un rango `gladys_version` que empiece en `5.2.0`. |
| `energy_contracts` | No | Hasta 20 `templates` de contratos de energía y 10 `calendars` tarifarios (ver [Contratos de energía](#energy-contracts)). Requiere un rango `gladys_version` que empiece en `5.2.0`. |

### Categorías de la tienda {/* #store-categories */}

*Requiere Gladys 4.86.0 o superior.*

Desde Gladys 4.86, el catálogo se puede explorar: una barra lateral de categorías, filtros por facetas (nativa, comunidad, local, nube, Gladys Plus) y una ordenación "Más recientes primero". El campo `categories` es lo que coloca tu integración en la estantería adecuada: un ámbito de uso, independiente del `type` técnico del manifiesto:

```json
"categories": ["lighting", "energy"],
"gladys_version": ">=4.86.0"
```

Las reglas:

- **De 1 a 3 categorías**, del vocabulario controlado: `climate`, `lighting`, `energy`, `security`, `multimedia`, `appliances`, `environment`, `protocols`, `network`, `notifications`, `assistants`, `services`.
- **`gladys_version` debe empezar en `4.86.0`** en cuanto declares el campo. Los núcleos más antiguos rechazan cualquier campo de manifiesto desconocido, así que el validador de la tienda rechaza un manifiesto que declare `categories` con un mínimo inferior: ambas cosas van juntas.
- Una clave desconocida se **descarta con una advertencia** en lugar de rechazar el manifiesto, de modo que una integración publicada con un vocabulario más reciente que el del Gladys en ejecución se sigue pudiendo instalar.
- Sin el campo, tu integración sigue visible en "Todas" y en la búsqueda, pero no está en ninguna estantería.

Las integraciones publicadas antes de la 4.86 se categorizaron una vez mediante un archivo de correspondencias de reserva mantenido en el [repositorio de la tienda](https://github.com/GladysAssistant/integration-store), pero **tu manifiesto siempre tiene prioridad** en cuanto declara el campo: es la ocasión de comprobar que las categorías que se te asignaron encajan de verdad y de ajustarlas si no es así.

### El esquema de configuración

`config_schema` es una lista plana de campos. Cada campo tiene una `key` (en minúsculas, que cumpla `[a-z0-9_]`), un `type` y un `label` multilingüe (con `en` obligatorio). Los tipos admitidos son `string`, `number`, `boolean`, `select`, `multi_select`, `secret`, `oauth2`, `account_link` y `section`. Según el tipo, un campo también puede declarar `placeholder` (para `string`/`number`/`secret`), `required`, `default`, `min`/`max` (para los números) y `options` (para `select`/`multi_select`).

Un `select` o `multi_select` puede enumerar `options` estáticas u obtener sus opciones dinámicamente de una `source`: `source: "devices"` enumera los dispositivos de tu integración (recibes el `external_id` elegido), y `source: "houses"` (Gladys 5.2.0 o posterior) enumera las casas de Gladys (recibes el `selector` de la casa elegida, que puedes comparar con `GET /house`). Elegir una casa de esta forma no requiere `location: true`: solo te llega la casa que ha elegido el usuario. Ambos se muestran como `dropdown` o `radio` (`display`). Un campo `section` es solo de presentación: muestra una `description` y hasta cinco `links` de documentación, y no guarda ningún valor.

Gladys genera automáticamente el formulario de configuración a partir de esta lista, así que nunca escribes código de frontend. Los valores marcados como `secret` se guardan de forma segura y nunca se devuelven al frontend.

### Guiar al usuario: secciones y placeholders {/* #guiding-the-user-sections-and-placeholders */}

Un formulario generado es compacto, pero por sí solo no ofrece al usuario ninguna ayuda para empezar: ante un campo "Client ID", primero tiene que saber que debe crear una aplicación en la plataforma de desarrolladores del fabricante. Para eso están los campos `section`: bloques puramente de presentación que dividen el formulario en capítulos, con un título, una `description` en texto plano (hasta 1000 caracteres por idioma) y hasta cinco `links` (solo HTTPS), que se abren en una pestaña nueva mostrando su dominio de destino:

```json
"config_schema": [
  {
    "key": "intro",
    "type": "section",
    "label": { "en": "Getting started", "fr": "Pour commencer" },
    "description": {
      "en": "Create a developer account to get your API key.",
      "fr": "Créez un compte développeur pour obtenir votre clé d'API."
    },
    "links": [{ "url": "https://open-meteo.com/en/docs", "label": { "en": "Open-Meteo docs" } }]
  },
  { "key": "api_key", "type": "secret", "label": { "en": "API key" }, "required": true }
]
```

Las secciones también se permiten en los `fields` de una acción y en un `contact_schema`, que comparten el mismo formato. No guardan ningún valor: su clave nunca aparece en `gladys.config`, en `onConfigUpdated` ni en los campos de un handler de acción.

Desde Gladys 4.85.0, el `label` y la `description` de una sección pueden incluir dos **placeholders de texto plano**, que el frontend de Gladys sustituye al renderizar el formulario:

| Placeholder | Se sustituye por |
| --- | --- |
| `{{gladys_host}}` | El nombre de host de la dirección que el navegador está usando para acceder a Gladys. |
| `{{port:<name>}}` | El puerto del host que Gladys ha asignado al puerto del subcontenedor que declara ese `name`. |

Son la forma declarativa de escribir una dirección de la propia instancia; el caso de un dispositivo que tiene que conectarse *a* Gladys, como un punto de carga OCPP:

```json
"containers": [
  {
    "name": "ocpp",
    "docker_image": "ghcr.io/acme/ocpp:1.2.0",
    "ports": [
      { "container_port": 9000, "name": "ocpp", "label": { "en": "OCPP endpoint" }, "browsable": false }
    ]
  }
],
"config_schema": [
  {
    "key": "charge_point",
    "type": "section",
    "label": { "en": "Connect your charge point" },
    "description": {
      "en": "Point your charge point to ws://{{gladys_host}}:{{port:ocpp}}/",
      "fr": "Pointez votre borne vers ws://{{gladys_host}}:{{port:ocpp}}/"
    }
  }
]
```

La sintaxis es exacta —sin espacios dentro de las llaves, sin expresiones, sin código inyectado— y conviene conocer cuatro reglas:

- un `{{port:<name>}}` que hace referencia a un nombre que ningún puerto de tu manifiesto declara **hace que se rechace el manifiesto**, tanto en el indexador de la tienda como en el servidor;
- `{{port:<name>}}` no se admite en un `contact_schema`: ese bloque es la única pantalla a la que llega un usuario que no es administrador, y su vista reducida no incluye el estado de los contenedores. `{{gladys_host}}` funciona en todas partes;
- un `{{port:<name>}}` válido cuyo puerto todavía no tiene un puerto del host asignado (el subcontenedor no se ha iniciado nunca) se deja tal cual en pantalla y se resuelve la próxima vez que se cargue la pantalla. Inicia el contenedor que publica el puerto antes de dirigir al usuario a esa frase;
- al acceder a través de Gladys Plus o de un proxy inverso, `{{gladys_host}}` se resuelve con el nombre de host del túnel o del proxy, no con la dirección LAN de la instancia. Si el dispositivo tiene que llegar a Gladys por la LAN, indícalo en la documentación de tu repositorio.

Para cualquier cosa más larga que un par de frases (capturas de pantalla, un paso a paso completo), el medio adecuado sigue siendo la documentación obligatoria del repositorio: la pantalla "Configuración" incluye un enlace permanente **"Documentación"** hacia ella, en el idioma del usuario, y es justo cuando más la necesita.

### Reglas de la imagen de portada

Si proporcionas una `cover_image`, debe:

- ser JPEG o PNG,
- medir exactamente **800 × 534 píxeles**,
- pesar menos de **150 KB**,
- servirse por HTTPS con una URL directa (sin redirecciones).

La opción más sencilla es hacer commit de la imagen directamente en tu repositorio de GitHub y usar su URL raw (`https://raw.githubusercontent.com/...`), como se muestra en el ejemplo de manifiesto anterior.

Una portada ausente o no válida no hace que se rechace tu integración: se indexa con una imagen por defecto y se marca con una advertencia.

### Documentación (obligatoria)

Cada integración debe incluir dos archivos de documentación en la raíz de su repositorio: `docs/en.md` y `docs/fr.md`, de al menos **300 caracteres** cada uno. La tienda los vuelve a alojar y los muestra a los usuarios en el catálogo, así que un repositorio que no los tenga se **rechaza**. Cubre lo esencial: qué hace la integración, sus requisitos previos, cómo configurarla y la resolución de problemas. La plantilla ya incluye ambos archivos, listos para rellenar.

El sitio web también existe en alemán y en español. Su página para tu integración usa la `description` y las etiquetas de configuración en alemán o en español de tu manifiesto cuando las proporcionas (una clave `"de"` o `"es"` junto a `"en"` y `"fr"`), y tu documentación en inglés en caso contrario.

## Paso 4: Compilar y probar en local

Puedes iterar por completo en tu equipo antes de publicar nada.

**Ejecuta la integración directamente (el ciclo más rápido).** Durante el desarrollo, ejecuta tu código como un simple proceso de Node.js contra una instancia de Gladys en marcha. Instala tu integración en Gladys en modo desarrollador para obtener un token y un selector, y luego iníciala con las tres variables de entorno que, de lo contrario, inyectaría Gladys:

```bash
npm install
GLADYS_HOST_API_URL="http://localhost:1443" \
GLADYS_INTEGRATION_TOKEN="<token>" \
GLADYS_INTEGRATION_SELECTOR="my-integration" \
LOG_LEVEL=debug \
npm start
```

**Compila la imagen Docker** para probar el artefacto real, en contenedor:

```bash
docker build -t ghcr.io/yourname/my-integration:1.0.0 .
```

Desde Gladys 4.86, el modo desarrollador instala esa imagen **directamente desde tu daemon Docker local**, con un manifiesto opcional y sin subir nada a ningún registro: compila en la máquina en la que se ejecuta Gladys y luego instala la etiqueta desde el enlace "Modo desarrollador: instalar desde una imagen Docker" del catálogo. Es la forma más rápida de probar un contenedor real.

**O compílala en GitHub con un clic.** Si prefieres no compilar en local (o no tienes configurado un builder multiarquitectura), la plantilla también incluye un workflow **Build** que puedes lanzar a mano: ve a la pestaña **Actions**, selecciona **Build**, haz clic en **Run workflow** y, opcionalmente, indica una etiqueta de imagen (por defecto, el nombre de tu rama). GitHub compila la imagen multiarquitectura (`linux/amd64` y `linux/arm64`) y la sube a `ghcr.io` con esa etiqueta, sin tocar nunca `:latest`. Después puedes instalar esa etiqueta exacta en tu instancia de Gladys para probar una compilación real, sin necesidad de Docker en local. Es una compilación de prueba, no una versión publicada: usa el [Paso 5](#step-5-publish-your-integration) cuando estés listo para publicar para todo el mundo.

**Valida tu manifiesto sin conexión** con exactamente las mismas comprobaciones que ejecuta el indexador de la tienda, en lugar de esperar al ciclo horario:

```bash
npx github:GladysAssistant/integration-store .
```

Termina con el código de salida 0 si tu `gladys-assistant-integration.json` es válido y, en caso contrario, muestra los motivos.

Una vez instalada en Gladys, observa cómo el estado pasa de `LOADING` a `RUNNING`, abre la pestaña **Configuración** generada, lanza un **escaneo** desde la pestaña **Descubrimiento**, crea un dispositivo y cámbialo de estado para comprobar que tu handler `onSetValue` recibe el comando.

### Las tres pestañas de toda integración externa

Gladys renderiza una interfaz genérica para cada integración externa, con tres pestañas:

- **Dispositivos**: los dispositivos que ha creado el usuario, con los controles estándar.
- **Descubrimiento**: los dispositivos que ha publicado tu integración, cada uno con un botón para crearlo con un clic.
- **Configuración**: el formulario generado a partir de tu `config_schema`, tus botones de acción, un enlace permanente a tu documentación y los controles de supervisión (iniciar, detener, reiniciar, actualizar, ver los logs, desinstalar).

Las integraciones `communication` y `weather` no exponen dispositivos, así que solo tienen la pestaña "Configuración".

### Entorno del contenedor

Gladys inyecta estas variables de entorno en tu contenedor. El SDK las lee por ti:

- `GLADYS_HOST_API_URL`: la URL base de la API del host.
- `GLADYS_INTEGRATION_TOKEN`: el token bearer que se usa para autenticarse.
- `GLADYS_INTEGRATION_SELECTOR`: el selector único de tu instancia de integración.
- `TZ`: la zona horaria de la instancia de Gladys.

## Paso 5: Publicar tu integración {/* #step-5-publish-your-integration */}

Publicar es deliberadamente trivial. **No hay ningún envío, ninguna revisión ni ninguna espera a un maintainer**.

Si has partido de la plantilla oficial, toda la publicación está automatizada mediante un workflow de GitHub Actions:

1. **Añade el topic de GitHub** `gladys-assistant-integration` a tu repositorio (el engranaje junto a "About" en la página principal del repositorio). Es lo que permite que el indexador lo descubra.

2. **Ejecuta el workflow Release**: ve a la pestaña **Actions**, selecciona **Release**, haz clic en **Run workflow** y elige el tipo de incremento de versión (`patch`, `minor` o `major`). El workflow entonces:
   - incrementa la versión en `package.json` y en el manifiesto (`version` y `docker_image`),
   - crea y sube una etiqueta git `vX.Y.Z`,
   - compila imágenes **multiarquitectura** (`linux/amd64` y `linux/arm64`),
   - las publica en `ghcr.io` con las etiquetas `:X.Y.Z` y `:latest` (recuerda hacer público el paquete).

Y ya está. Un indexador automático (una GitHub Action que se ejecuta cada hora) descubre todos los repositorios públicos con ese topic, lee y valida el manifiesto, comprueba que la imagen Docker se puede descargar, vuelve a alojar la imagen de portada y publica un catálogo actualizado. En menos de una hora, **tu integración aparece en la tienda de todas las instancias de Gladys**, instalable con un clic.

**Publicar manualmente** (sin el workflow de la plantilla) también funciona: compila y sube tú mismo tu imagen multiarquitectura a un registro público, actualiza `version` y `docker_image` en el manifiesto, y luego crea la etiqueta y súbela:

```bash
docker push ghcr.io/yourname/my-integration:1.0.0
git tag v1.0.0
git push --tags
```

Solo recuerda incrementar `version` y `docker_image` en el manifiesto antes de crear la etiqueta; de lo contrario, el indexador seguirá sirviendo la versión anterior.

El maintainer no aprueba nada y nunca es un cuello de botella.

## Paso 6: Los usuarios instalan con un clic

En el catálogo de Gladys, las integraciones externas aparecen junto a las integradas, con una **insignia de comunidad**, las insignias local/nube derivadas de tus `transports` y un indicador de estado en directo. Los usuarios exploran el catálogo por categoría (la tuya procede del campo `categories` de tu manifiesto), lo filtran y lo ordenan por las más recientes. Un usuario hace clic en **Instalar**, y Gladys descarga tu imagen, inicia el contenedor y muestra la interfaz generada. Los usuarios también pueden instalar directamente desde la URL de un repositorio de GitHub, sin esperar al siguiente ciclo de indexación.

Antes de la instalación, la pantalla muestra todo lo que ha declarado tu manifiesto: tu documentación, los subcontenedores que se ejecutarán y los puertos que publicarán, el hardware que solicitas, las capturas de red, el permiso de Wake-on-LAN, los webhooks y el acceso a las coordenadas de las casas. Declara solo lo que realmente usas: cada línea es una pregunta que el usuario tiene que responder antes de confiar en tu integración.

## Actualizar tu integración

Publicar una nueva versión es cuestión de un clic: vuelve a ejecutar el workflow **Release** y elige el nivel de incremento. Recompila la imagen multiarquitectura, sube las nuevas etiquetas y actualiza el manifiesto por ti. En el siguiente ciclo de indexación, los usuarios ven que hay una actualización disponible —con un contador en la cabecera de Gladys y una vista de actualizaciones dedicada que lista todas las integraciones que se pueden actualizar— y pueden aplicarla con un clic.

Si publicas manualmente, haz las mismas dos cosas a mano: compila y sube una nueva etiqueta de imagen (por ejemplo `ghcr.io/yourname/my-integration:1.1.0`), luego incrementa `version` y `docker_image` en el manifiesto y súbelo.

Seguir una nueva versión de Gladys es el mismo ejercicio breve: actualiza `@gladysassistant/integration-sdk` (las versiones del SDK son aditivas, así que el código existente sigue funcionando), declara los campos de manifiesto que necesitan las nuevas capacidades, sube el rango `gladys_version` en consecuencia, ejecuta `npx github:GladysAssistant/integration-store .` para validar y publica. Para la 4.86, eso significa `^0.12.0`, un campo `categories` y `">=4.86.0"`.

## Resolución de problemas

Instalar tu integración desde la URL de su repositorio (o en modo desarrollador) muestra los **errores de validación detallados** de tu manifiesto, campo por campo, para que puedas corregirlos sin esperar al siguiente ciclo de indexación.

El indexador es totalmente transparente. Si tu integración no aparece en el catálogo, consulta el archivo `rejected.json` publicado: lista todos los repositorios que no han superado la validación, junto con el motivo y un nivel de gravedad (manifiesto no válido, referencia de imagen mal formada o que no se puede descargar, rango `gladys_version` incompatible, `categories` declarado con un mínimo de `gladys_version` inferior a 4.86.0, portada demasiado pesada o con un tamaño incorrecto, ausencia de `docs/en.md` o `docs/fr.md`, etc.). También vale la pena leer las advertencias: una clave de categoría desconocida se descarta, y una integración que no declara ninguna se indexa sin categoría. Puedes detectar la mayoría de estos problemas antes de publicar ejecutando `npx github:GladysAssistant/integration-store .` en local. Corrige el problema, vuelve a publicar y espera al siguiente ciclo.

## Modelo de seguridad

Las integraciones externas se pueden ejecutar de forma segura sin revisión porque el **sandbox de Docker es la primera línea de defensa**:

- límites de recursos (256 MB de memoria, 0,5 CPU, 100 procesos) para el contenedor principal,
- un sistema de archivos raíz de solo lectura sin capabilities adicionales,
- una red bridge aislada,
- ningún acceso directo a los dispositivos del host (el hardware solo es accesible a través de subcontenedores explícitos autorizados por el usuario).

En la v1 no hay moderación, ni lista de bloqueo, ni retirada manual. Antes de instalar, los usuarios pueden ver las estrellas de GitHub del repositorio, su antigüedad y la insignia de comunidad, y cada instalación muestra una advertencia clara.

Este sandbox limita los daños a nivel del host e impide que una integración defectuosa desestabilice el núcleo de Gladys. Pero no elimina el acceso a nivel de aplicación del que dispone la integración: tiene su propio token, acceso a la API REST y WebSocket limitada a ella y, en la v1, acceso completo a la red saliente. Por tanto, una integración maliciosa puede actuar dentro de los límites de ese acceso, así que **instala solo imágenes en las que confíes.**

## ¿Preguntas?

¿Tienes preguntas o quieres compartir tu integración? Ven a contarlo [en el foro](https://community.gladysassistant.com/): ¡la comunidad está aquí para ayudarte!
