---
id: external-integrations
title: Building an external integration
description: "The simplest way to build and publish a Gladys Assistant integration. No pull request, no code review, no waiting: package your integration as a Docker container, publish it on GitHub, and any user can install it in one click."
sidebar_label: External integrations (recommended)
---

**External integrations are the simplest and fastest way to create an integration for Gladys Assistant, and to publish it to every user in one click.**

There is **no pull request to open, no code review to wait for, and no maintainer approval**. You write your integration in the language you like, package it as a Docker image, publish a public GitHub repository, and it becomes installable by anyone, from any Gladys instance.

This page is a complete, step-by-step tutorial for developers.

:::tip[New in Gladys 4.85 (SDK 0.11.0)]

- **[Weather providers](#weather-providers)**: a new `weather` integration type. Answer one handler with the pivot weather format, and your provider feeds the dashboard widget, the chat assistant and the weather-alert scene triggers — taking precedence over the built-in OpenWeather with zero configuration.
- **[House coordinates](#house-coordinates)**: declare `location: true` and read the coordinates of the user's houses, instead of asking for a latitude and a longitude again.
- **[Named ports and form placeholders](#guiding-the-user-sections-and-placeholders)**: `{{gladys_host}}` and `{{port:<name>}}` in your section texts, to spell out an address of the instance itself.
- **[Non-browsable ports](#sub-containers-and-hardware)**: `browsable: false` for a port that serves no web UI.
- **[A single HTTPS redirect URI for OAuth2](#oauth2-cloud-services)**, whether the user reaches Gladys locally or through Gladys Plus.
- **More device categories** in the SDK constants: charging station, water heater, thermostat mode and operating state, battery storage, water valve, doorbell, air-conditioning fan speed and swing.

:::

## Why external integrations?

Historically, adding an integration to Gladys meant [contributing to the core project](/docs/dev/developing-a-service/): forking the repository, coding the service in the Gladys codebase, writing unit tests, opening a pull request, and waiting for a maintainer to review and merge it. That path still exists and is great for protocols that belong in the core, but it has friction: you need to know the Gladys internals, respect the coding conventions, and the maintainer is a bottleneck.

External integrations remove that bottleneck (automated manifest validation still runs, but with no human in the loop):

| | Internal integration | External integration |
| --- | --- | --- |
| Where the code lives | Inside the Gladys repository | Your own GitHub repository |
| Language | Node.js only | Any language (Docker container) |
| Review required | Yes, a maintainer must merge your PR | **No review, no approval** |
| Publishing | Ships with the next Gladys release | **Available instantly**, indexed automatically |
| Installation for users | Built in | **One click** from the catalog |
| Isolation | Runs in the Gladys process | Runs in a **sandboxed Docker container** |

Because an external integration runs in its own hardened container, supervised by Gladys, a bug or a crash in your code **stays contained**: it cannot take down the user's Gladys instance or the other integrations. This stability guarantee is what makes it safe to publish without review.

## How it works

An external integration is a **Docker container** that talks to Gladys through two channels:

- A **REST host API** exposed by Gladys at `/api/integration/v1/*`, used to publish discovered devices, push device states, send camera images, and read or write your configuration.
- A **WebSocket channel**, used by Gladys to send commands to your integration in real time (turn a switch on, poll a device, start a scan, capture a camera image) and to notify you of device lifecycle events (a device was created, updated, or deleted by the user).

You do not have to implement any of this plumbing yourself: the official [JavaScript SDK](https://github.com/GladysAssistant/integration-sdk-js) handles authentication, the WebSocket connection, automatic reconnection with exponential backoff, command acknowledgments, and state resynchronization for you. You can write your integration in any language, but the SDK saves you a lot of work.

On top of the basics (devices, states, configuration), the platform also supports **cameras**, **OAuth2 cloud services**, **on-demand action buttons**, **local/cloud transport badges** (with a degraded state), **mediated network discovery** (mDNS, SSDP, UDP broadcast), **sub-containers with hardware access**, **messaging channels**, **weather providers**, **the coordinates of the user's houses**, and **incoming webhooks** (through Gladys Plus). Each of these is covered in its own section below.

An integration declares one of **three types** in its manifest:

- **`device`** (by far the most common): it publishes the devices it discovers — sensors, switches, lights, cameras, and so on.
- **`communication`**: a messaging channel instead of devices, a chat or notification bridge like Telegram; see [Messaging channels](#messaging-channels).
- **`weather`**: a weather provider (Météo France, Open-Meteo, AccuWeather…) that answers the weather requests of the Gladys core and feeds the dashboard widget, the chat assistant and the weather-alert scene triggers; see [Weather providers](#weather-providers).

A few important design rules to keep in mind:

- **Your integration never creates or deletes devices.** It *publishes* the devices it discovers, and the user decides, from the Gladys interface, which ones to create, modify, or delete. This keeps the user in control and the interface consistent.
- Gladys runs your container with strict limits: **256 MB of memory, 0.5 CPU, a read-only root filesystem, no extra Linux capabilities, and a single writable `/data` mount**. Design your integration to live within these limits (sub-containers can declare their own, higher limits, see below).

## Prerequisites

- A Gladys Assistant instance running on version **4.84.0 or later** (external integrations were introduced in this version). The most recent capabilities — [weather providers](#weather-providers), [house coordinates](#house-coordinates), and the [named ports and placeholders](#guiding-the-user-sections-and-placeholders) of the configuration form — require **4.85.0 or later**, so set the `gladys_version` range of your manifest accordingly.
- [Docker](https://www.docker.com/) installed on your development machine.
- [Node.js 24 or later](https://nodejs.org/) if you use the JavaScript SDK (the SDK requires Node.js 20 or later, but 24 is recommended).
- A public Docker registry to host your image. The simplest option is the [GitHub Container Registry](https://docs.github.com/packages/working-with-a-github-packages-registry/working-with-the-container-registry) (`ghcr.io`), which keeps your image in the same place as your code, and which the official template publishes to automatically. Docker Hub or any other public registry works too, as long as the image is anonymously pullable.
- A [GitHub](https://github.com/) account to publish your repository.

## Step 1: Start from the template

The fastest way to get started is the official template repository:

👉 [GladysAssistant/integration-template-js](https://github.com/GladysAssistant/integration-template-js)

Click **"Use this template"** on GitHub to create your own repository. It already contains a working integration (sensors, a switch, a dimmable light, a smart plug, a motion sensor and a camera), a `Dockerfile`, a valid manifest, the required `docs/en.md` and `docs/fr.md` documentation, and a ready-to-use GitHub Actions release workflow, so you can focus on your device logic.

## Step 2: Write your integration with the SDK

Install the SDK in your project:

```bash
npm install @gladysassistant/integration-sdk
```

Here is a complete, working example of a virtual switch integration:

```js
import {
  GladysIntegration,
  DEVICE_FEATURE_CATEGORIES,
  DEVICE_FEATURE_TYPES,
  logger,
} from "@gladysassistant/integration-sdk";

const gladys = new GladysIntegration();

// Called when the user asks Gladys to scan for new devices.
// Publish the full list of devices your integration can offer.
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

// Called when the user turns the switch on or off from Gladys.
// Do the real work here, then confirm the new state back to Gladys.
gladys.onSetValue(async (device, feature, value) => {
  // ... send the command to your real device here ...
  await gladys.publishState(feature.external_id, value);
});

// React to configuration changes made by the user.
gladys.onConfigUpdated(async (config) => {
  logger.info("Configuration updated", config);
});

// Exit cleanly on SIGTERM/SIGINT (Docker stop, restart, or update).
gladys.handleShutdown();

// Authenticate, open the WebSocket, and resynchronize.
await gladys.connect();
```

That is the entire integration. The SDK reads the credentials Gladys injects into the container as environment variables, so there is no configuration to wire up by hand. Using the exported `DEVICE_FEATURE_CATEGORIES`, `DEVICE_FEATURE_TYPES`, and `DEVICE_FEATURE_UNITS` constants (instead of raw strings) keeps your features aligned with the categories, types, and units Gladys understands.

Those constants are a verbatim mirror of the ones in the Gladys core, resynchronized at every SDK release: the latest versions added **charging stations**, **water heaters**, **thermostat modes and operating states**, **battery storage**, **water valves**, **doorbells**, and the **fan speed and swing** of air conditioners. Keeping `@gladysassistant/integration-sdk` up to date is how you get them (the current version is `0.11.0`).

### The SDK API in a nutshell

Register your event handlers **before** calling `connect()`.

**Connection**

- `new GladysIntegration(options?)`: the constructor reads `GLADYS_HOST_API_URL`, `GLADYS_INTEGRATION_TOKEN`, and `GLADYS_INTEGRATION_SELECTOR` from the environment by default. You can override them (and the reconnection delays, request timeout, or logger) through `options`.
- `connect()`: authenticates, opens the WebSocket, resynchronizes state, and keeps reconnecting automatically (exponential backoff, 1s to 60s).
- `disconnect()`: closes the connection cleanly and stops reconnecting.
- `handleShutdown(cleanup?)`: exits gracefully on `SIGTERM`/`SIGINT`, running your optional cleanup callback first. Important so Docker can stop and restart your container cleanly.

**Devices**

- `publishDiscoveredDevices(devices)`: publishes the complete list of devices you offer (shown to the user in the Discovery tab), up to **2,000 devices** per publication. Re-publishing a device the user already created silently updates its `params` (a LAN IP that moved in DHCP, for example) without touching its name or its features; a structural change shows an "Update" button in the Discovery tab instead.
- `getDevices()`: returns the devices the user actually created.
- `externalIds(type, platformId)`: returns `{ device, feature(key) }`, the recommended way to build stable, correctly formatted identifiers for a device and its features.
- `externalId(suffix)`: the lower-level helper if you prefer to build a single identifier yourself.

**State**

- `publishState(featureExternalId, value)`: publishes a single state update — a number, `{ text }` for a text feature, or `{ state, created_at }` to record a past state.
- `publishStates(states)`: publishes a batch of updates (up to 100 per request). The host API rate-limits state updates at **300 states per minute** per integration, so publish state *changes*, not full snapshots.

The limit is sized for changes, so keep the last value you sent for each feature and publish only what actually moved:

```js
const lastValues = new Map();
const changed = readings.filter(({ id, value }) => lastValues.get(id) !== value);
changed.forEach(({ id, value }) => lastValues.set(id, value));
await gladys.publishStates(
  changed.map(({ id, value }) => ({ device_feature_external_id: id, state: value })),
);
```

**Configuration and status**

- `getConfig()` / `setConfig(partialConfig)`: reads and writes your configuration values.
- `getStatus()`: returns the Gladys version.
- `setConnectionStatus(connected, message?)`: reports your application-level connection status (for example, "cloud token expired"), independent of the WebSocket link to Gladys.

**Events (handlers)**

- `onSetValue(cb)`: a feature value changed (a command from the user).
- `onPoll(cb)`: Gladys asks you to poll a device.
- `onScanRequest(cb)`: Gladys asks you to discover devices.
- `onGetImage(cb)`: Gladys asks for a fresh camera image (see Cameras).
- `onDeviceCreated(cb)` / `onDeviceUpdated(cb)` / `onDeviceDeleted(cb)`: device lifecycle events.
- `onConfigUpdated(cb)`: the configuration changed.
- `onAction(key, cb)`: a manifest action button was pressed (see Actions).
- `onOAuthAuthorizeUrl(cb)` / `onOAuthCallback(cb)`: OAuth2 cloud login (see OAuth2).
- `onHardwareUpdated(cb)`: a hardware grant for a sub-container changed.
- `onSendMessage(cb)`: deliver a message to a contact (see Messaging channels).
- `onWeatherGet(cb)` / `onWeatherGetImage(cb)`: Gladys asks for the weather, or for a provider image (see Weather providers).
- `onWebhook(key, cb)` / `onWebhookUpdated(cb)`: incoming webhooks (see Incoming webhooks).

**Weather providers**

- `requestWeatherRefresh()`: fire-and-forget nudge asking the core to re-pull your weather right now, instead of waiting for its next scheduled check (see Weather providers).

Commands acknowledge automatically on success; throwing from a handler acknowledges the command as failed. You can also inspect the local state directly through `gladys.devices`, `gladys.config`, and `gladys.connected`, and listen to the `connected` and `disconnected` events.

Every method returns a promise, and host API errors are thrown as a `GladysApiError` carrying `status`, `code`, and `message`, so you can catch them and react precisely.

The following capabilities are optional. Skip straight to [Step 3](#step-3-write-the-manifest) if you only need devices, states and configuration.

### Cameras

Cameras use the `camera` category with an `image` feature type, and have their own dedicated channel (image data never goes through `publishState`, so it stays out of the states history and out of the 300 states/minute limit). There are two complementary paths:

- **Push** a periodic snapshot with `publishCameraImage(externalId, image)` (rate-limited to 12 images/minute per device).
- **Pull** on demand by answering the `onGetImage` handler. Its acknowledgment is awaited for up to **15 seconds** (instead of the standard 5), so an `ffmpeg`-style capture has time to run.

```js
gladys.onGetImage(async (device) => {
  const jpeg = await captureSnapshot(device);
  return `image/jpg;base64,${jpeg.toString("base64")}`;
});

// Or push a snapshot proactively:
await gladys.publishCameraImage(ids.device, `image/jpg;base64,${jpeg.toString("base64")}`);
```

Images are `image/jpg;base64,...` strings and must stay under 150 KB.

### OAuth2 cloud services

For cloud providers that use OAuth2, declare a config field of type `oauth2` in your manifest, then build the authorization URL and handle the callback:

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

Refreshing the token is your integration's responsibility. When it expires, report it with `setConnectionStatus(false, { en: "Token expired, please reconnect.", fr: "Token expire, reconnectez-vous." })`.

**Never hardcode the redirect URI**: use the `redirectUri` Gladys hands you, and give it back byte for byte in the token exchange. Providers now require an HTTPS callback (Spotify has enforced it since 2025), which a Gladys reached at `http://192.168.1.50:1443` can never satisfy, so the flow goes through a fixed HTTPS page hosted by Gladys, which bounces the browser back to the instance. The practical consequence for you and your users: **a single redirect URI has to be declared at the provider**, whether Gladys is reached locally or through Gladys Plus. The Configuration screen shows the exact URL to copy into the provider's developer application.

### Action buttons

Declare `actions` in your manifest to expose on-demand operations with a visible result. Each action renders as a button (with an optional mini-form) in the Configuration tab:

```js
gladys.onAction("detect_protocol", async (fields) => {
  const version = await tryProtocolVersions(fields.ip);
  return { en: `Protocol ${version} detected`, fr: `Protocole ${version} detecte` };
});
```

The resolved value (a string or a multi-language object) is displayed under the button; throwing displays the error message instead. Each action has its own `timeout_seconds` (5 to 120, default 30).

### Local/cloud transports

Dual-channel integrations (Tuya cloud + LAN, Shelly, eWeLink, and so on) can reach the same device through different transports, per device and changing over time. Declare the channels you support in the manifest `transports` field, then publish the current transport of each device:

```js
import { DEVICE_TRANSPORTS } from "@gladysassistant/integration-sdk";

await gladys.publishTransports([
  { external_id: ids.device, transport: DEVICE_TRANSPORTS.LOCAL },
]);
```

Valid values are `local`, `cloud`, and `unreachable`. A reserved config key, `GLADYS_PREFER_LOCAL` (boolean, default `true`), reflects the user's preference and is available through `gladys.config` and `onConfigUpdated`.

A transport entry can also carry a **degraded state**, orthogonal to the transport itself, to signal a "works, but not nominal" condition. Add `degraded: true` and a multi-language `message` (with `en` mandatory, up to 200 characters):

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

### Network discovery

Integration containers run on an isolated bridge network, so LAN broadcast, mDNS, and SSDP traffic never reaches them directly. Discovery is mediated by the Gladys core: **the core captures (it has the network position), and your integration interprets (it has the protocol knowledge)**.

Declare the captures you need in the manifest `network_discovery` field, then request a scan on demand (typically from `onScanRequest`):

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

Scans are synchronous and bounded (`timeoutSeconds` from 1 to 30). Supported types are `udp-broadcast` (passive listening), `udp-active-broadcast` (the core sends a payload you provide and relays the unicast replies, rate-limited to one every 10 seconds with a payload up to 512 bytes), `mdns`, and `ssdp`. For `udp-active-broadcast`, pass the `port` and the `payload` to send:

```js
const replies = await gladys.scanNetwork("udp-active-broadcast", {
  port: 6667,
  payload: buildProbe(),
  timeoutSeconds: 10,
});
```

### Sub-containers and hardware

Some integrations need companion services (an MQTT broker, Frigate, a protocol bridge) or access to a USB dongle or a Coral TPU. Declare them in the manifest `containers` field (up to five), then manage their lifecycle through the SDK:

```js
await gladys.startContainer("mqtt", { env: { MQTT_PASSWORD: password } });

const containers = await gladys.getContainers();
const frigate = containers.find((c) => c.name === "frigate");
const coral = frigate.devices.find((d) => d.class === "coral-usb");
const detector = coral.granted && coral.available ? "edgetpu" : "cpu";
```

`getContainers()`, `startContainer(name, options?)`, `stopContainer(name)`, and `restartContainer(name)` control the companion containers. When the user grants or revokes access to a piece of hardware, the `onHardwareUpdated` handler fires so you can regenerate configuration and restart the relevant container.

Each entry of `container.ports` mirrors your manifest declaration, plus the host port Gladys allocated:

```js
// [{ container_port: 5000, protocol: "tcp", host_port: 42115, label: { en: "Frigate UI" },
//    name: "frigate_ui", browsable: true }]
const [{ host_port: frigatePort }] = frigate.ports;
```

The host port is **chosen by Gladys** (a free port, persisted across recreations, never declared in the manifest), so read it here rather than assuming one; it is `null` as long as the container has never started. Two optional manifest fields complete a port declaration:

- `browsable` (default `true`): a port serving a web UI gets an "Open `<label>`" link on the supervision screen. Set it to `false` for a port a browser cannot open — a WebSocket endpoint waiting for devices, for instance — and Gladys shows a plain `<label>: <host_port>` badge instead.
- `name` (`[a-z0-9_]`, 2 to 20 characters, unique across the whole manifest): makes the allocated host port referenceable from the `{{port:<name>}}` placeholder of your configuration form, so you can spell out an address of the instance in a sentence shown to the user (see [Guiding the user](#guiding-the-user-sections-and-placeholders)).

### Logging

The SDK ships a structured logger so your container logs are readable straight from `docker logs`:

```js
import { logger, createLogger } from "@gladysassistant/integration-sdk";

logger.info("Starting the integration...");

const log = createLogger({ name: "weather-station" });
log.child("poll").debug("refreshing");
```

The log level comes from the `LOG_LEVEL` environment variable (`debug`, `info`, `warn`, `error`, `silent`; default `info`). The SDK also logs its own connection lifecycle under the `gladys-sdk` name, so connectivity problems are diagnosable without any extra setup. It stays quiet otherwise: set `DEBUG=gladys-integration-sdk` to get its internal debug logs on stderr.

Two guarantees worth knowing: the SDK **persists nothing on disk** (everything resynchronizes on reconnection, and `/data` stays entirely yours), and it **silently ignores message types it does not know**, so a newer Gladys never breaks an older integration.

### Messaging channels

Instead of exposing devices, an integration can be a **messaging channel**: set `"type": "communication"` in the manifest to build a chat or notification bridge (Telegram, Matrix, and so on). Rather than devices, you exchange messages with **contacts** that users link to their Gladys account:

```js
// Gladys asks you to deliver an outgoing message to a contact.
gladys.onSendMessage(async (contact, message) => {
  // message.file is an attached image in base64, or null.
  await sendToProvider(contact.id, message.text, message.file);
});

// Link a provider contact to a Gladys user from a pairing code.
const contact = await gladys.linkContact(code, providerUserId, "Alice");

// Forward an incoming message from the provider to Gladys.
await gladys.publishMessage(contactId, "The house is now empty.");
```

- `onSendMessage(cb)`: Gladys asks you to deliver a message. Its first argument is the target `contact` (`{ id }` for a bidirectional channel, or the user's contact fields for a send-only channel), and the message carries a `text` and an optional `file` (an attached image in base64, or `null`).
- `publishMessage(contactId, text, opts?)`: forwards an incoming message to Gladys (message text up to 4096 characters).
- `linkContact(code, contactId, name?)`: links a provider contact to a Gladys user from a single-use pairing code (valid 15 minutes), and returns the user selector, first name, and language.
- `getContacts()`: lists the contacts currently linked to this channel.

A `communication` integration declares which of the **two families** it belongs to, through the mandatory `messaging` manifest field:

- **Bidirectional chat channels** (`"messaging": { "receive": true }`, Telegram-style bots): the user links their account with a short code sent in the channel, then talks to the Gladys brain from it. `onSendMessage` receives `{ id }`, the linked contact.
- **Send-only notification channels** (`"messaging": { "receive": false }`, Free Mobile SMS or CallMeBot style): there is no incoming path at all, so no linking code either. Each user enters their own credentials in the "My account" block of the Configuration screen, described by the manifest `contact_schema` (same flat format as `config_schema`), and Gladys passes them to your handler with every outgoing message:

```json
"messaging": { "receive": false },
"contact_schema": [
  { "key": "username", "type": "string", "label": { "en": "Free Mobile login" }, "required": true },
  { "key": "access_token", "type": "secret", "label": { "en": "SMS API key" }, "required": true }
]
```

```js
gladys.onSendMessage(async (contact, message) => {
  // contact holds the target user's contact_schema values
  await sendFreeMobileSms(contact.username, contact.access_token, message.text);
});
```

Users without a linked account or configured credentials are skipped by Gladys and never reach your handler. A `communication` integration has a Configuration screen (from its `config_schema`) but no Devices or Discovery tab.

### Weather providers

*Requires Gladys 4.85.0 or later.*

Set `"type": "weather"` in your manifest and your integration becomes a **weather provider**: Météo France, Open-Meteo, AccuWeather, a national meteorological service, or your own aggregation. Like a messaging channel, it has no Devices and no Discovery tab, publishes no device and no state — it answers the weather requests of the Gladys core through a **dedicated provider API**, and Gladys feeds the dashboard weather widget, the chat assistant ("what's the weather like tomorrow?") and the weather-alert scene triggers with the answer.

Installing a weather integration **takes precedence over the built-in OpenWeather service with zero configuration**, and stopping or uninstalling it falls back automatically. Users can also pin a specific provider from the configuration of the weather widget, when several are installed.

Everything goes through one handler, which resolves the **pivot weather format** — a provider-agnostic structure, generalized from what the major providers expose, so the core never has to know your provider by name:

```js
import {
  WEATHER_CONDITIONS,
  WEATHER_ALERT_SEVERITIES,
  WEATHER_ALERT_TYPES,
} from "@gladysassistant/integration-sdk";

gladys.onWeatherGet(async ({ latitude, longitude, language, units }) => {
  const data = await fetchProviderForecast(latitude, longitude, language, units);
  return {
    // Required: temperature, weather (the condition), datetime.
    temperature: data.current.temperature,
    weather: WEATHER_CONDITIONS.RAIN,
    datetime: new Date().toISOString(),
    // Optional current fields, simply dropped when your provider has none:
    apparent_temperature: data.current.feelsLike,
    humidity: 80, // percentages are 0-100
    pressure: 1013,
    wind_speed: 4.2,
    wind_direction: 220,
    uv_index: 3,
    sunrise: data.current.sunrise,
    sunset: data.current.sunset,
    is_day: data.current.isDay, // strict boolean, drives the day/night icon variant
    // Forecasts (Gladys keeps up to 24 hours and 8 days):
    hours: data.hours.map((h) => ({ temperature: h.temp, weather: toCondition(h), datetime: h.time })),
    days: data.days.map((d) => ({ temperature_min: d.min, temperature_max: d.max, datetime: d.date })),
    // CAP-style alerts, up to 10 (Météo France vigilance: yellow -> moderate, orange -> severe, red -> extreme):
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

The contract, point by point:

- **`units` is the requesting user's preference**, `metric` (°C, m/s, hPa, mm, km) or `us` (°F, mph, in, mi): return your values in that unit system. Percentages (`humidity`, `cloud_cover`, `precipitation_probability`) are always 0 to 100, never a 0-1 fraction.
- **`weather` is a condition of the pivot enum** (`WEATHER_CONDITIONS`): `clear`, `partly-cloudy`, `cloud`, `fog`, `drizzle`, `rain`, `pouring`, `sleet`, `hail`, `snow`, `thunderstorm`, `wind`, `night`, `unknown`. Map your provider's codes onto it; anything else is coerced to `unknown` (neutral icon).
- **`is_day` carries the day/night signal**, an optional strict boolean on the current conditions and on each `hours` entry: `weather` keeps the meteorology, `is_day` drives the rendering variant. The `night` condition is still accepted for compatibility but is **deprecated for providers** — a rainy night is `weather: "rain", is_day: false`, not `"night"`.
- **Each forecast entry has its own required fields**: `temperature`, `weather` and `datetime` for an `hours` entry; `temperature_min`, `temperature_max` and `datetime` for a `days` entry. `days` may or may not include the current day: consumers filter by calendar date, so you never have to lead with today.
- **Alerts follow CAP**: `severity` (`minor`, `moderate`, `severe`, `extreme`) and `event` are required, `description`, `start`, `end` and `type` are optional. The phenomenon `type` (`wind`, `rain`, `flood`, `thunderstorm`, `snow`, `heat`, `cold`, `avalanche`, `coastal`, `fog`) lets Gladys translate and iconify the alert where free text cannot; an invalid type is dropped and the alert is kept, rendered from its `event` alone.
- **The acknowledgment is awaited for up to 15 seconds** (instead of the standard 5), so a fresh third-party API call has time to run. Throwing — provider not configured, API down — fails the command, and Gladys falls through to the next available provider.
- **The payload is normalized and bounded by the core**: unknown fields are dropped, numbers must be finite, dates must parse, arrays are capped (24 `hours`, 8 `days`, 10 `alerts`, 3 `images`), and alert strings are truncated (`event` up to 100 characters, `description` up to 5,000 — vigilance bulletins run long).

Two optional extensions complete the type.

**Provider images** (a vigilance map, a rain radar, a satellite view). The weather payload only ever declares **metadata** — an `images` array of up to three `{ key, label? }` entries, where `key` matches `^[a-z0-9][a-z0-9-]{0,31}$` — and the bytes travel on demand:

```js
gladys.onWeatherGetImage(async (key) => {
  const png = await fetchVigilanceMap(); // returns a Buffer
  return png.toString("base64"); // RAW base64, without any "data:" prefix
});
```

Gladys validates the decoded bytes (PNG or JPEG, up to 500 KB), caches them for 10 minutes per key, and serves them to the browser from its own origin, so your users' IP addresses never reach a third-party server. Only a key declared in your last weather payload can be requested.

**The freshness nudge.** Gladys re-evaluates the weather-alert scene triggers on a 30-minute scheduled check, pulled through `onWeatherGet` and diffed on the normalized alerts. A provider that *knows* something changed upstream can do better — never by pushing data:

```js
onUpstreamVigilanceChange(() => gladys.requestWeatherRefresh());
```

`requestWeatherRefresh()` means only "re-pull me now": the data re-enters through the regular `onWeatherGet` path, so the scene fires seconds later instead of within 30 minutes. It carries nothing, expects no answer, and is rate-limited to one per minute per integration (silently dropped beyond).

Nothing else is required on your side: the weather-alert scene trigger is owned by the core and works identically with every provider.

### House coordinates

*Requires Gladys 4.85.0 or later.*

An integration whose logic depends on where the user lives — air quality, pollen, water restrictions, tides — can read the coordinates of the houses configured in Gladys, instead of asking the user to type their latitude and longitude again in your configuration form.

The home location is sensitive personal data, so access is an **authorization contract**, like the network captures: declare `"location": true` in your manifest (the request is then shown to the user on the install screen) and Gladys serves `GET /house` on the host API. An integration that did not declare it gets a `403`.

The JavaScript SDK does not wrap this endpoint yet, so call it with the credentials Gladys injects into your container:

```js
const response = await fetch(`${process.env.GLADYS_HOST_API_URL}/api/integration/v1/house`, {
  headers: { Authorization: `Bearer ${process.env.GLADYS_INTEGRATION_TOKEN}` },
});
const houses = await response.json();
// [{ id, name, selector, latitude, longitude }], sorted by name
```

`latitude` and `longitude` are `null` when the user has not located the house, and several houses can exist: handle both cases. Only these five fields are returned — never the alarm mode, code or delay. Coordinates change rarely, so fetching them at startup and on reconnection is the nominal pattern.

A `weather` integration needs neither this endpoint nor `location: true`: the coordinates of the house being displayed travel in the `options` of every weather request.

### Incoming webhooks (Gladys Plus)

When the user's instance is connected to **Gladys Plus**, your integration can receive **incoming webhooks** on public HTTPS URLs, which is handy for cloud providers that push events or need a callback URL. Declare up to three in the manifest `webhooks` field, then handle them:

```js
// Fire-and-forget: acknowledged immediately, handler errors are swallowed.
gladys.onWebhook("events", async ({ body }) => {
  await refreshFromApi();
});

// Sync: you return the HTTP response (status 200 to 499, body up to 64 KB).
gladys.onWebhook("callback", async ({ query }) => ({
  status: 200,
  contentType: "application/json",
  body: JSON.stringify({ "hub.challenge": query["hub.challenge"] }),
}));
```

- `getWebhooks()`: returns `{ available, webhooks: [{ key, mode, url }] }`. The public URL only exists when Gladys Plus is linked, so register it with the third-party service at runtime.
- `onWebhook(key, cb)`: the callback receives `{ method, query, body, contentType }`.
- `onWebhookUpdated(cb)`: fires when Gladys Plus is linked or unlinked, or a URL changes, so you can re-register your webhooks.

## Step 3: Write the manifest

Every external integration is described by a single file named `gladys-assistant-integration.json`, placed at the **root of your repository**:

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
  "gladys_version": ">=4.84.0",
  "cover_image": "https://raw.githubusercontent.com/yourname/my-integration/main/cover.jpg",
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

### Manifest fields

| Field | Required | Description |
| --- | --- | --- |
| `manifest_version` | Yes | Must be `1`. |
| `type` | Yes | `"device"` (exposes devices), `"communication"` (a messaging channel) or `"weather"` (a weather provider). |
| `name` | Yes | Display name, 3 to 30 characters. |
| `description` | Yes | An object keyed by language. `en` is mandatory, each text is 10 to 100 characters. |
| `version` | Yes | Strict [semantic version](https://semver.org/). Bumping it notifies users an update is available. |
| `docker_image` | Yes | A well-formed image reference with an explicit tag or digest. It must exist and be anonymously pullable. |
| `gladys_version` | Yes | A semver range (npm syntax) used to filter compatible instances. |
| `cover_image` | No | Direct HTTPS URL to a cover image (see rules below). |
| `config_schema` | No | The list of configuration fields shown to the user. |
| `transports` | No | Non-empty subset of `local` and `cloud`, if your integration is dual-channel. |
| `actions` | No | 1 to 10 action buttons, each with a `key`, a multi-language `label`, a `timeout_seconds` (5 to 120), and optional `fields`. |
| `network_discovery` | No | 1 to 5 mediated capture methods (`udp-broadcast`, `udp-active-broadcast`, `mdns`, `ssdp`). |
| `containers` | No | Up to 5 companion containers, each with `name`, `docker_image`, `start` (`auto` or `manual`), and optional `env`, `volumes`, `ports` (up to 3, each with `container_port`, `protocol`, a multi-language `label`, an optional `name` and `browsable`), `devices` (`coral-usb`, `coral-pcie`, `gpu`, `video`), `read_only`, `command`, `memory_mb` (32 to 4096), `cpu` (0.1 to 2), `shm_mb` (64 to 512). |
| `location` | No | `true` requests access to the coordinates of the user's houses (`GET /house`). Shown on the install screen, enforced server-side. |
| `messaging` | Mandatory for `communication` | `{ "receive": true }` for a bidirectional chat channel, `{ "receive": false }` for a send-only notification channel. Forbidden for the other types. |
| `contact_schema` | Mandatory when `messaging.receive` is `false` | The per-user credentials of a send-only channel, same field format as `config_schema` (minus `oauth2` fields). Forbidden otherwise. |
| `webhooks` | No | Up to 3 incoming webhooks (Gladys Plus), each with a `key`, a multi-language `label`, and a `mode` (`fire_and_forget` or `sync`). |

### The config schema

`config_schema` is a flat list of fields. Each field has a `key` (lowercase, matching `[a-z0-9_]`), a `type`, and a multi-language `label` (with `en` mandatory). Supported types are `string`, `number`, `boolean`, `select`, `multi_select`, `secret`, `oauth2`, and `section`. Depending on the type, a field can also declare `placeholder` (for `string`/`number`/`secret`), `required`, `default`, `min`/`max` (for numbers), and `options` (for `select`/`multi_select`).

A `select` or `multi_select` can either list static `options` or pull its choices dynamically from the user's devices with `source: "devices"`, and render as a `dropdown` or `radio` (`display`). A `section` field is presentational only: it shows a `description` and up to five documentation `links`, and stores no value.

Gladys automatically generates the configuration form from this list, so you never write any frontend code. Values marked `secret` are stored securely and are never returned to the frontend.

### Guiding the user: sections and placeholders

A generated form is compact, but on its own it gives the user no onboarding guidance — in front of a "Client ID" field, they first need to know they have to create an application on the manufacturer's developer platform. That is what `section` fields are for: purely presentational blocks that split the form into chapters, with a title, a plain-text `description` (up to 1,000 characters per language) and up to five `links` (HTTPS only), opened in a new tab with their target domain displayed:

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

Sections are also allowed in an action's `fields` and in a `contact_schema`, which share the same format. They store no value: their key never appears in `gladys.config`, in `onConfigUpdated`, or in an action handler's fields.

Since Gladys 4.85.0, the `label` and `description` of a section can embed two **plain-text placeholders**, substituted by the Gladys frontend when it renders the form:

| Placeholder | Substituted with |
| --- | --- |
| `{{gladys_host}}` | The hostname of the address the browser currently uses to reach Gladys. |
| `{{port:<name>}}` | The host port Gladys assigned to the sub-container port declaring that `name`. |

They are the declarative way to spell out an address of the instance itself — the case of a device that has to connect *to* Gladys, like an OCPP charge point:

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

The syntax is exact — no space inside the braces, no expression, no injected code — and four rules are worth knowing:

- a `{{port:<name>}}` referencing a name declared by no port of your manifest **rejects the manifest**, both in the store indexer and on the server;
- `{{port:<name>}}` is refused in a `contact_schema`: that block is the one screen a non-admin user reaches, and their reduced view carries no container state. `{{gladys_host}}` works everywhere;
- a valid `{{port:<name>}}` whose port has no assigned host port yet (the sub-container has never started) is left as is on screen, and resolves the next time the screen is loaded. Start the container that publishes the port before pointing the user at the sentence;
- browsing through Gladys Plus or a reverse proxy, `{{gladys_host}}` resolves to the tunnel or proxy hostname, not to the LAN address of the instance. If the device has to reach Gladys over the LAN, say so in your repository documentation.

For anything longer than a couple of sentences (screenshots, a full step-by-step), the right medium remains the mandatory repository documentation: the Configuration screen carries a permanent **"Documentation"** link to it, in the user's language, and that is exactly when they need it most.

### Cover image rules

If you provide a `cover_image`, it must be:

- JPEG or PNG,
- exactly **800 x 534 pixels**,
- under **150 KB**,
- served over HTTPS with a direct URL (no redirects).

The simplest option is to commit the image directly to your GitHub repository and use its raw URL (`https://raw.githubusercontent.com/...`), as shown in the manifest example above.

A missing or invalid cover does not reject your integration: it is indexed with a placeholder and flagged as a warning.

### Documentation (required)

Every integration must ship two documentation files at the root of its repository: `docs/en.md` and `docs/fr.md`, each at least **300 characters**. The store re-hosts them and shows them to users in the catalog, so a repository without them is **rejected**. Cover the essentials: what the integration does, its prerequisites, how to configure it, and troubleshooting. The template already includes both files, ready to fill in.

## Step 4: Build and test locally

You can iterate entirely on your machine before publishing anything.

**Run the integration directly (fastest loop).** During development, run your code as a plain Node.js process against a running Gladys instance. Install your integration in Gladys in developer mode to obtain a token and a selector, then start it with the three environment variables Gladys would otherwise inject:

```bash
npm install
GLADYS_HOST_API_URL="http://localhost:1443" \
GLADYS_INTEGRATION_TOKEN="<token>" \
GLADYS_INTEGRATION_SELECTOR="my-integration" \
LOG_LEVEL=debug \
npm start
```

**Build the Docker image** to test the real, containerized artifact:

```bash
docker build -t ghcr.io/yourname/my-integration:1.0.0 .
```

**Or build it on GitHub in one click.** If you would rather not build locally (or you do not have a multi-architecture builder set up), the template also ships a **Build** workflow you can run by hand: go to the **Actions** tab, select **Build**, click **Run workflow**, and optionally set an image tag (it defaults to your branch name). GitHub builds the multi-architecture image (`linux/amd64` and `linux/arm64`) and pushes it to `ghcr.io` under that tag, without ever touching `:latest`. You can then install that exact tag in your Gladys instance to test a real build, with no local Docker required. This is a test build, not a release: use [Step 5](#step-5-publish-your-integration) when you are ready to publish for everyone.

**Validate your manifest offline** with the exact checks the store indexer runs, before waiting for the hourly cycle:

```bash
npx github:GladysAssistant/integration-store .
```

It exits with status 0 if your `gladys-assistant-integration.json` is valid, and prints the reasons otherwise.

Once installed in Gladys, watch the status move from `LOADING` to `RUNNING`, open the generated **Configuration** tab, run a **scan** from the **Discovery** tab, create a device, and toggle it to check that your `onSetValue` handler receives the command.

### The three tabs of every external integration

Gladys renders a generic interface for every external integration, with three tabs:

- **Devices**: the devices the user created, with standard controls.
- **Discovery**: the devices your integration published, each with a one-click "create" button.
- **Configuration**: the form generated from your `config_schema`, your action buttons, a permanent link to your documentation, plus supervision controls (start, stop, restart, update, view logs, uninstall).

`communication` and `weather` integrations expose no device, so they only get the Configuration tab.

### Container environment

Gladys injects these environment variables into your container. The SDK reads them for you:

- `GLADYS_HOST_API_URL`: the base URL of the host API.
- `GLADYS_INTEGRATION_TOKEN`: the bearer token used to authenticate.
- `GLADYS_INTEGRATION_SELECTOR`: the unique selector of your integration instance.
- `TZ`: the timezone of the Gladys instance.

## Step 5: Publish your integration

Publishing is intentionally trivial. There is **no submission, no review, and no waiting on a maintainer**.

If you started from the official template, the whole release is automated by a GitHub Actions workflow:

1. **Add the GitHub topic** `gladys-assistant-integration` to your repository (the gear next to "About" on the repository home page). This is what makes the indexer discover it.

2. **Run the Release workflow**: go to the **Actions** tab, select **Release**, click **Run workflow**, and choose the version bump (`patch`, `minor`, or `major`). The workflow then:
   - bumps the version in `package.json` and in the manifest (`version` and `docker_image`),
   - creates and pushes a `vX.Y.Z` git tag,
   - builds **multi-architecture** images (`linux/amd64` and `linux/arm64`),
   - publishes them to `ghcr.io` with the `:X.Y.Z` and `:latest` tags (remember to make the package public).

That is it. An automated indexer (a GitHub Action running hourly) discovers every public repository with the topic, reads and validates the manifest, verifies the Docker image is pullable, re-hosts the cover image, and publishes an updated catalog. Within the hour, **your integration appears in the store of every Gladys instance**, installable in one click.

**Publishing manually** (without the template's workflow) works too: build and push your multi-architecture image to a public registry yourself, update `version` and `docker_image` in the manifest, then tag and push:

```bash
docker push ghcr.io/yourname/my-integration:1.0.0
git tag v1.0.0
git push --tags
```

Just remember to bump `version` and `docker_image` in the manifest before you tag, otherwise the indexer keeps serving the old version.

The maintainer approves nothing and is never a bottleneck.

## Step 6: Users install in one click

From the Gladys catalog, external integrations appear alongside the built-in ones, with a **community badge**, the local/cloud badges derived from your `transports`, and a live status indicator. A user clicks **Install**, and Gladys pulls your image, starts the container, and shows the generated interface. Users can also install directly from a GitHub repository URL, without waiting for the next index cycle.

Before installing, the screen shows everything your manifest declared: your documentation, the sub-containers that will run and the ports they will publish, the hardware you request, the network captures, the webhooks, and the access to the house coordinates. Declare only what you actually use — each line is a question the user has to answer before trusting your integration.

## Updating your integration

Shipping a new version is one click: run the **Release** workflow again and pick the bump level. It rebuilds the multi-architecture image, pushes the new tags, and updates the manifest for you. At the next index cycle, users see that an update is available — with a counter in the Gladys header and a dedicated updates view listing every integration to upgrade — and can apply it in one click.

If you publish manually, do the same two things by hand: build and push a new image tag (for example `ghcr.io/yourname/my-integration:1.1.0`), then bump `version` and `docker_image` in the manifest and push.

## Troubleshooting

Installing your integration from its repository URL (or in developer mode) shows the **detailed validation errors** of your manifest, field by field, so you can fix them without waiting for the next index cycle.

The indexer is fully transparent. If your integration does not appear in the catalog, check the published `rejected.json` file: it lists every repository that failed validation, along with the reason and a severity level (invalid manifest, malformed or unpullable image reference, incompatible `gladys_version` range, oversized or wrongly-sized cover, missing `docs/en.md` or `docs/fr.md`, and so on). You can catch most of these before publishing by running `npx github:GladysAssistant/integration-store .` locally. Fix the issue, release again, and wait for the next cycle.

## Security model

External integrations are safe to run without review because the **Docker sandbox is the primary line of defense**:

- resource limits (256 MB memory, 0.5 CPU, 100 processes) for the main container,
- a read-only root filesystem with no extra capabilities,
- an isolated bridge network,
- no direct access to the host devices (hardware is only reachable through explicit, user-granted sub-containers).

In v1, there is no moderation, no blocklist, and no manual removal. Before installing, users can see the repository's GitHub stars, its age, and the community badge, and every installation shows a clear warning.

This sandbox limits host-level damage and keeps a buggy integration from destabilizing the Gladys core. It does not remove the application-level access the integration holds: it has its own token, access to the REST and WebSocket API scoped to it, and, in v1, full outbound network access. A malicious integration can therefore act within the bounds of that access, so **only install images you trust.**

## Questions?

Have questions or want to share your integration? Come talk about it [on the forum](https://community.gladysassistant.com/), the community is here to help you!
