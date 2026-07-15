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

External integrations remove that friction entirely:

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

- A **REST host API** exposed by Gladys at `/api/integration/v1/*`, used to publish discovered devices, push device states, and read or write your configuration.
- A **WebSocket channel**, used by Gladys to send commands to your integration in real time (turn a switch on, poll a device, start a scan) and to notify you of device lifecycle events (a device was created, updated, or deleted by the user).

You do not have to implement any of this plumbing yourself: the official [JavaScript SDK](https://github.com/GladysAssistant/integration-sdk-js) handles authentication, the WebSocket connection, automatic reconnection with exponential backoff, and state resynchronization for you.

A few important design rules to keep in mind:

- **Your integration never creates or deletes devices.** It *publishes* the devices it discovers, and the user decides, from the Gladys interface, which ones to create, modify, or delete. This keeps the user in control and the interface consistent.
- Gladys runs your container with strict limits: **256 MB of memory, 0.5 CPU, a read-only root filesystem, no extra Linux capabilities, and a single writable `/data` mount**. Design your integration to live within these limits.

## Prerequisites

- A Gladys Assistant instance running on version **4.62.0 or later** (external integrations were introduced in this version).
- [Docker](https://www.docker.com/) installed on your development machine.
- [Node.js 24 or later](https://nodejs.org/) if you use the JavaScript SDK.
- A public Docker registry to host your image. The simplest option is the [GitHub Container Registry](https://docs.github.com/packages/working-with-a-github-packages-registry/working-with-the-container-registry) (`ghcr.io`), which keeps your image in the same place as your code. Docker Hub or any other public registry works too.
- A [GitHub](https://github.com/) account to publish your repository.

## Step 1: Start from the template

The fastest way to get started is the official template repository:

👉 [GladysAssistant/integration-template-js](https://github.com/GladysAssistant/integration-template-js)

Click **"Use this template"** on GitHub to create your own repository. It already contains a working integration, a `Dockerfile`, and a valid manifest, so you can focus on your device logic.

## Step 2: Write your integration with the SDK

Install the SDK in your project:

```bash
npm install @gladysassistant/integration-sdk
```

Here is a complete, working example of a virtual switch integration:

```js
import { GladysIntegration } from "@gladysassistant/integration-sdk";

const gladys = new GladysIntegration();

// Called when the user asks Gladys to scan for new devices.
// Publish the full list of devices your integration can offer.
gladys.onScanRequest(async () => {
  await gladys.publishDiscoveredDevices([
    {
      name: "Virtual switch",
      external_id: gladys.externalId("switch"),
      features: [
        {
          name: "On/Off",
          external_id: gladys.externalId("switch:binary"),
          category: "switch",
          type: "binary",
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

// Authenticate, open the WebSocket, and resynchronize.
await gladys.connect();
```

That is the entire integration. The SDK reads the credentials Gladys injects into the container as environment variables, so there is no configuration to wire up by hand.

### The SDK API in a nutshell

Register your event handlers **before** calling `connect()`.

**Connection**

- `connect()`: authenticates, opens the WebSocket, resynchronizes state, and keeps reconnecting automatically.
- `disconnect()`: closes the connection cleanly.

**Devices**

- `publishDiscoveredDevices(devices)`: publishes the complete list of devices you offer (shown to the user in the Discovery tab).
- `getDevices()`: returns the devices the user actually created.
- `externalId(suffix)`: builds a correctly formatted external identifier for a device or a feature.

**State**

- `publishState(featureExternalId, value)`: publishes a single state update (a number or an object).
- `publishStates(states)`: publishes a batch of updates (up to 100 per request).

**Configuration**

- `getConfig()` / `setConfig(partialConfig)`: reads and writes your configuration values.
- `getStatus()`: returns the Gladys version and the service status.

**Events**

- `onSetValue(cb)`: a feature value changed (a command from the user).
- `onPoll(cb)`: Gladys asks you to poll a device.
- `onScanRequest(cb)`: Gladys asks you to discover devices.
- `onDeviceCreated(cb)` / `onDeviceUpdated(cb)` / `onDeviceDeleted(cb)`: device lifecycle events.
- `onConfigUpdated(cb)`: the configuration changed.

You can also inspect the local state directly: `gladys.devices`, `gladys.config`, `gladys.connected`, and listen to `gladys.on("connected")` and `gladys.on("disconnected")`.

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
| `docker_image` | Yes | A well-formed image reference with an explicit tag or digest. |
| `gladys_version` | Yes | A semver range (npm syntax) used to filter compatible instances. |
| `cover_image` | No | Direct HTTPS URL to a cover image (see rules below). |
| `config_schema` | No | The list of configuration fields shown to the user. |

### The config schema

`config_schema` is a flat list of fields. Each field supports these types: `string`, `number`, `boolean`, `select`, and `secret`. Gladys automatically generates the configuration form from this list, so you never write any frontend code. Values marked `secret` are stored securely and are never returned to the frontend.

### Cover image rules

If you provide a `cover_image`, it must be:

- JPEG or PNG,
- exactly **800 x 534 pixels**,
- under **150 KB**,
- served over HTTPS with a direct URL (no redirects).

The simplest option is to commit the image directly to your GitHub repository and use its raw URL (`https://raw.githubusercontent.com/...`), as shown in the manifest example above.

A missing or invalid cover does not reject your integration: it is indexed with a placeholder and flagged as a warning.

## Step 4: Build and test locally

Build your Docker image:

```bash
docker build -t ghcr.io/yourname/my-integration:1.0.0 .
```

You do not need to publish anything to test it. In Gladys, external integrations support a **developer install mode**: install directly from an image name plus an inline manifest. This lets you iterate locally before going public.

Once installed, watch the status move from `LOADING` to `RUNNING`, open the generated **Configuration** tab, run a **scan** from the **Discovery** tab, create a device, and toggle it to check that your `onSetValue` handler receives the command.

### The three tabs of every external integration

Gladys renders a generic interface for every external integration, with three tabs:

- **Devices**: the devices the user created, with standard controls.
- **Discovery**: the devices your integration published, each with a one-click "create" button.
- **Configuration**: the form generated from your `config_schema`, plus supervision controls (start, stop, restart, update, view logs, uninstall).

### Container environment

Gladys injects these environment variables into your container. The SDK reads them for you:

- `GLADYS_HOST_API_URL`: the base URL of the host API.
- `GLADYS_INTEGRATION_TOKEN`: the bearer token used to authenticate.
- `GLADYS_INTEGRATION_SELECTOR`: the unique selector of your integration instance.
- `TZ`: the timezone of the Gladys instance.

## Step 5: Publish your integration

Publishing is intentionally trivial. There is **no submission, no review, and no waiting on a maintainer**.

1. **Push your Docker image** to a public registry. The simplest option is the GitHub Container Registry (`ghcr.io`), which keeps the image in the same place as your code (remember to make the package public):

   ```bash
   docker push ghcr.io/yourname/my-integration:1.0.0
   ```

2. **Push your code** (with the `gladys-assistant-integration.json` manifest at the root) to a **public GitHub repository**.

3. **Add the GitHub topic** `gladys-assistant-integration` to your repository (Settings, or the gear next to "About" on the repository home page).

That is it. An automated indexer (a GitHub Action running hourly) discovers every public repository with that topic, reads and validates the manifest, re-hosts the cover image, and publishes an updated catalog. Within the hour, **your integration appears in the store of every Gladys instance**, installable in one click.

The maintainer approves nothing and is never a bottleneck.

## Step 6: Users install in one click

From the Gladys catalog, external integrations appear alongside the built-in ones, with a **community badge** and a live status indicator. A user clicks **Install**, and Gladys pulls your image, starts the container, and shows the generated interface. Users can also install directly from a GitHub repository URL, without waiting for the next index cycle.

## Updating your integration

Shipping a new version is a two-line change:

1. Build and push a new image tag, for example `ghcr.io/yourname/my-integration:1.1.0`.
2. Bump `version` and `docker_image` in the manifest, and push.

At the next index cycle, users see that an update is available and can apply it in one click.

## Troubleshooting

The indexer is fully transparent. If your integration does not appear in the catalog, check the published `rejected.json` file: it lists every repository that failed validation, along with the reason (invalid manifest, malformed image reference, incompatible `gladys_version` range, and so on). Fix the issue, push, and wait for the next cycle.

## Security model

External integrations are safe to run without review because the **Docker sandbox is the primary line of defense**:

- resource limits (256 MB memory, 0.5 CPU, 100 processes),
- a read-only root filesystem with no extra capabilities,
- an isolated bridge network,
- no access to the host devices.

In v1, there is no moderation, no blocklist, and no manual removal. Before installing, users can see the repository's GitHub stars, its age, and the community badge, and every installation shows a clear warning.

This sandbox limits host-level damage and keeps a buggy integration from destabilizing the Gladys core. It does not remove the application-level access the integration holds: it has its own token, access to the REST and WebSocket API scoped to it, and, in v1, full outbound network access. A malicious integration can therefore act within the bounds of that access, so **only install images you trust.**

## Questions?

Have questions or want to share your integration? Come talk about it [on the forum](https://community.gladysassistant.com/), the community is here to help you!
