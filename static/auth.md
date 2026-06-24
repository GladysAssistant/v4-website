# auth.md

You are an agent. This document describes how to authenticate with **Gladys Assistant** to control a user's smart home via the **Model Context Protocol (MCP)**.

Gladys is a self-hosted home automation platform. Credentials are **API keys provisioned by the user** in their Gladys instance — there is no programmatic OAuth registration endpoint on `gladysassistant.com`.

## Step 1 — Discover

Fetch the Protected Resource Metadata:

```http
GET https://gladysassistant.com/.well-known/oauth-protected-resource
```

Fetch the Authorization Server metadata:

```http
GET https://gladysassistant.com/.well-known/oauth-authorization-server
```

Read `resource`, `scopes_supported`, `bearer_methods_supported`, and the `agent_auth` block. The PRM is authoritative if anything in this file conflicts with it.

## Step 2 — Pick a method

Gladys supports one registration method for agents:

| Method | When to use |
| --- | --- |
| **API key (human-provisioned)** | Always. The user generates a key in their Gladys UI and gives it to you. |

Gladys does **not** support `identity_assertion` (ID-JAG) or automated `service_auth` claim ceremonies on this domain.

## Step 3 — Register (human-provisioned API key)

Ask the user to generate an API key in Gladys:

1. Open Gladys → **Integrations** → **MCP**
2. Enter a client name (e.g. "Claude Desktop")
3. Click **Generate** and copy the key immediately (it is shown only once)

Documentation:

- Local MCP (same network): https://gladysassistant.com/docs/integrations/mcp/
- Remote MCP (Gladys Plus): https://gladysassistant.com/docs/plus/open-api/

For Gladys Plus remote access, the user must subscribe at https://gladysassistant.com/plus/ and generate an Open API key at https://plus.gladysassistant.com/dashboard/settings/gateway-open-api

## Step 4 — Use credentials

### Local network

```http
POST http://GLADYS_IP/api/v1/service/mcp/proxy
Authorization: <LOCAL_API_KEY>
```

### Remote (Gladys Plus)

```http
GET https://api.gladysgateway.com/v1/api/mcp/<GLADYS_PLUS_API_KEY>
Authorization: <GLADYS_PLUS_API_KEY>
```

Send the API key in the `Authorization` header. No `Bearer` prefix is required for local keys; use the key value directly.

### Scopes

The key grants access to MCP tools exposed by the user's Gladys instance: device states, lights, switches, scenes, and cameras (depending on configuration).

## Step 5 — Revoke

The user can revoke any API key at any time in Gladys → **Integrations** → **MCP**. Treat a `401` or `403` response as a signal to ask the user for a new key.

## Supported languages

- Gladys product UI: English, French, German
- This documentation: English and French at https://gladysassistant.com/docs/
