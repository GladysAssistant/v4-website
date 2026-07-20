---
id: external-integrations
title: Building an external integration
description: "The simplest way to build and publish a Gladys Assistant integration. No pull request, no code review, no waiting: package your integration as a Docker container, publish it on GitHub, and any user can install it in one click."
sidebar_label: External integrations (recommended)
---

**External integrations are the simplest and fastest way to create an integration for Gladys Assistant, and to publish it to every user in one click.**

There is **no pull request to open, no code review to wait for, and no maintainer approval**. You write your integration in the language you like, package it as a Docker image, publish a public GitHub repository, and it becomes installable by anyone, from any Gladys instance.

This page is a complete, step-by-step tutorial for developers.

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

On top of the basics (devices, states, configuration), the platform also supports **cameras**, **OAuth2 cloud services**, **on-demand action buttons**, **local/cloud transport badges**, **mediated network discovery** (mDNS, SSDP, UDP broadcast), and **sub-containers with hardware access**. Each of these is covered in its own section below.

A few important design rules to keep in mind:

- **Your integration never creates or deletes devices.** It *publishes* the devices it discovers, and the user decides, from the Gladys interface, which ones to create, modify, or delete. This keeps the user in control and the interface consistent.
- Gladys runs your container with strict limits: **256 MB of memory, 0.5 CPU, a read-only root filesystem, no extra Linux capabilities, and a single writable `/data` mount**. Design your integration to live within these limits (sub-containers can declare their own, higher limits, see below).

## Prerequisites

- A Gladys Assistant instance running on version **4.62.0 or later** (external integrations were introduced in this version).
- [Docker](https://www.docker.com/) installed on your development machine.
- [Node.js 24 or later](https://nodejs.org/) if you use the JavaScript SDK (the SDK requires Node.js 20 or later, but 24 is recommended).
- A public Docker registry to host your image. The simplest option is the [GitHub Container Registry](https://docs.github.com/packages/working-with-a-github-packages-registry/working-with-the-container-registry) (`ghcr.io`), which keeps your image in the same place as your code, and which the official template publishes to automatically. Docker Hub or any other public registry works too, as long as the image is anonymously pullable.
- A [GitHub](https://github.com/) account to publish your repository.

## Step 1: Start from the template

The fastest way to get started is the official template repository:

👉 [GladysAssistant/integration-template-js](https://github.com/GladysAssistant/integration-template-js)

Click **"Use this template"** on GitHub to create your own repository. It already contains a working integration (sensors, a switch, a dimmable light, a smart plug, a motion sensor and a camera), a `Dockerfile`, a valid manifest, and a ready-to-use GitHub Actions release workflow, so you can focus on your device logic.

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

That is the entire integration. The SDK reads the credentials Gladys injects into the container as environment variables, so there is no configuration to wire up by hand. Using the exported `DEVICE_FEATURE_CATEGORIES` and `DEVICE_FEATURE_TYPES` constants (instead of raw strings) keeps your features aligned with the categories and types Gladys understands.

### The SDK API in a nutshell

Register your event handlers **before** calling `connect()`.

**Connection**

- `new GladysIntegration(options?)`: the constructor reads `GLADYS_HOST_API_URL`, `GLADYS_INTEGRATION_TOKEN`, and `GLADYS_INTEGRATION_SELECTOR` from the environment by default. You can override them (and the reconnection delays or request timeout) through `options`.
- `connect()`: authenticates, opens the WebSocket, resynchronizes state, and keeps reconnecting automatically (exponential backoff, 1s to 60s).
- `disconnect()`: closes the connection cleanly and stops reconnecting.
- `handleShutdown(cleanup?)`: exits gracefully on `SIGTERM`/`SIGINT`, running your optional cleanup callback first. Important so Docker can stop and restart your container cleanly.

**Devices**

- `publishDiscoveredDevices(devices)`: publishes the complete list of devices you offer (shown to the user in the Discovery tab).
- `getDevices()`: returns the devices the user actually created.
- `externalIds(type, platformId)`: returns `{ device, feature(key) }`, the recommended way to build stable, correctly formatted identifiers for a device and its features.
- `externalId(suffix)`: the lower-level helper if you prefer to build a single identifier yourself.

**State**

- `publishState(featureExternalId, value)`: publishes a single state update (a number or an object).
- `publishStates(states)`: publishes a batch of updates (up to 100 per request). The host API rate-limits state updates at **300 states per minute** per integration, so publish state *changes*, not full snapshots.

**Configuration and status**

- `getConfig()` / `setConfig(partialConfig)`: reads and writes your configuration values.
- `getStatus()`: returns the Gladys version and the service status.
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

Commands acknowledge automatically on success; throwing from a handler acknowledges the command as failed. You can also inspect the local state directly through `gladys.devices`, `gladys.config`, and `gladys.connected`.

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

Scans are synchronous and bounded (`timeoutSeconds` from 1 to 30). Supported types are `udp-broadcast`, `mdns`, and `ssdp`.

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

### Logging

The SDK ships a structured logger so your container logs are readable straight from `docker logs`:

```js
import { logger, createLogger } from "@gladysassistant/integration-sdk";

logger.info("Starting the integration...");

const log = createLogger({ name: "weather-station" });
log.child("poll").debug("refreshing");
```

The log level comes from the `LOG_LEVEL` environment variable (`debug`, `info`, `warn`, `error`, `silent`; default `info`). The SDK also logs its own connection lifecycle under the `gladys-sdk` name, so connectivity problems are diagnosable without any extra setup.

## Step 3: Write the manifest

Every external integration is described by a single file named `gladys-assistant-integration.json`, placed at the **root of your repository**:

```json
{
  "manifest_version": 1,
  "type": "device",
  "name": "My Integration",
  "description": {
    "en": "Control my devices from Gladys Assistant.",
    "fr": "Controlez mes appareils depuis Gladys Assistant."
  },
  "version": "1.0.0",
  "docker_image": "ghcr.io/yourname/my-integration:1.0.0",
  "gladys_version": ">=4.62.0",
  "cover_image": "https://raw.githubusercontent.com/yourname/my-integration/main/cover.jpg",
  "transports": ["local", "cloud"],
  "config_schema": [
    {
      "key": "api_key",
      "type": "secret",
      "label": { "en": "API key", "fr": "Cle d'API" },
      "required": true
    }
  ]
}
```

### Manifest fields

| Field | Required | Description |
| --- | --- | --- |
| `manifest_version` | Yes | Must be `1`. |
| `type` | Yes | Must be `"device"` (the only supported value in v1). |
| `name` | Yes | Display name, 3 to 30 characters. |
| `description` | Yes | An object keyed by language. `en` is mandatory, each text is 10 to 100 characters. |
| `version` | Yes | Strict [semantic version](https://semver.org/). Bumping it notifies users an update is available. |
| `docker_image` | Yes | A well-formed image reference with an explicit tag or digest. It must exist and be anonymously pullable. |
| `gladys_version` | Yes | A semver range (npm syntax) used to filter compatible instances. |
| `cover_image` | No | Direct HTTPS URL to a cover image (see rules below). |
| `config_schema` | No | The list of configuration fields shown to the user. |
| `transports` | No | Non-empty subset of `local` and `cloud`, if your integration is dual-channel. |
| `actions` | No | 1 to 10 action buttons, each with a `key`, a multi-language `label`, a `timeout_seconds` (5 to 120), and optional `fields`. |
| `network_discovery` | No | 1 to 5 mediated capture methods (`udp-broadcast`, `mdns`, `ssdp`). |
| `containers` | No | Up to 5 companion containers, each with `name`, `docker_image`, `start` (`auto` or `manual`), and optional `env`, `volumes`, `ports`, `devices`, `memory_mb` (32 to 4096), `cpu` (0.1 to 2). |

### The config schema

`config_schema` is a flat list of fields. Each field has a `key` (lowercase, matching `[a-z0-9_]`), a `type`, and a multi-language `label` (with `en` mandatory). Supported types are `string`, `number`, `boolean`, `select`, `multi_select`, `secret`, and `oauth2`. Depending on the type, a field can also declare `placeholder`, `required`, `default`, `min`/`max` (for numbers), and `options` (for `select`/`multi_select`).

Gladys automatically generates the configuration form from this list, so you never write any frontend code. Values marked `secret` are stored securely and are never returned to the frontend.

### Cover image rules

If you provide a `cover_image`, it must be:

- JPEG or PNG,
- exactly **800 x 534 pixels**,
- under **150 KB**,
- served over HTTPS with a direct URL (no redirects).

The simplest option is to commit the image directly to your GitHub repository and use its raw URL (`https://raw.githubusercontent.com/...`), as shown in the manifest example above.

A missing or invalid cover does not reject your integration: it is indexed with a placeholder and flagged as a warning.

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
- **Configuration**: the form generated from your `config_schema`, your action buttons, plus supervision controls (start, stop, restart, update, view logs, uninstall).

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

From the Gladys catalog, external integrations appear alongside the built-in ones, with a **community badge** and a live status indicator. A user clicks **Install**, and Gladys pulls your image, starts the container, and shows the generated interface. Users can also install directly from a GitHub repository URL, without waiting for the next index cycle.

## Updating your integration

Shipping a new version is one click: run the **Release** workflow again and pick the bump level. It rebuilds the multi-architecture image, pushes the new tags, and updates the manifest for you. At the next index cycle, users see that an update is available and can apply it in one click.

If you publish manually, do the same two things by hand: build and push a new image tag (for example `ghcr.io/yourname/my-integration:1.1.0`), then bump `version` and `docker_image` in the manifest and push.

## Troubleshooting

The indexer is fully transparent. If your integration does not appear in the catalog, check the published `rejected.json` file: it lists every repository that failed validation, along with the reason and a severity level (invalid manifest, malformed or unpullable image reference, incompatible `gladys_version` range, oversized or wrongly-sized cover, and so on). You can catch most of these before publishing by running `npx github:GladysAssistant/integration-store .` locally. Fix the issue, release again, and wait for the next cycle.

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
