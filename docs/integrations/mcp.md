---
id: mcp
title: Connect an MCP client to Gladys
sidebar_label: MCP
---

The Model Context Protocol (MCP) is an open protocol developed by Anthropic that allows exposing tools and functions that AI agents can use to retrieve information or interact with real-world devices.

## What does Gladys' MCP server allow?

Gladys Assistant integrates an MCP server that enables your compatible AI agents (Claude Desktop, Perplexity, Mistral Le Chat, etc.) to communicate with your smart home. Currently available capabilities include:

- 🌡️ Retrieve device states
  - temperature
  - humidity
  - open/closed (contact)
  - lamp
  - smart plug
  - air quality
  - carbon monoxide (CO)
  - carbon dioxide (CO₂)
  - energy
  - brightness
  - motion
  - PM10
  - PM2.5
  - angle
  - distance
  - leak
  - level
  - formaldehyde (HCHO)
  - precipitation
  - presence
  - pressure
  - rain
  - smoke
  - VOC (volatile organic compounds)
  - volume
- 📷 View your cameras and describe what it sees (if your client is compatible)
- 💡 Turn lights on/off
- 🔌 Control switches and outlets
- 🎬 Launch scenes

## System Architecture

The MCP system works with 2 components:

1. **The MCP client**: This is your AI agent (Claude Desktop, Perplexity, Mistral Le Chat...)
2. **The MCP server**: Integrated into Gladys, it exposes available functions that the client can call

By default, your agent and your Gladys instance must be on the same local network to communicate with each other.

If you are a Gladys Plus subscriber, you can use the Open API to continue accessing the MCP server outside your home. This Open API route is also necessary if your agent can only access MCP servers available online (for Mistral Le Chat for example).

## Configuration in Gladys

### Local MCP

Go to `Integrations` → `MCP` in Gladys.

#### MCP Server URL

The MCP server URL is visible in the interface:

```
http://YOUR_GLADYS_IP/api/v1/service/mcp/proxy
```

Authentication for your connection is done by adding the `Authorization` header with your local API key as the value (see below).

#### Generating a local API Key (`<LOCAL_API_KEY>`)

To secure the connection between your agent and Gladys, you must generate an API key:

1. In Gladys' MCP interface, at the bottom of the page, enter a name for your client (e.g., "Claude Desktop", "VS Code"...)
2. Click "Generate"
3. **Important**: Copy the generated key immediately, you won't be able to see it again
4. Add it to your client configuration by passing it in the `Authorization` header

You can revoke this key at any time if needed.

### Internet Access with Gladys Plus

If you want to use agents that require a public URL (Mistral Le Chat), you can go through Gladys Plus.

#### URL

Gladys Plus provides a secure and authenticated route:

```
https://api.gladysgateway.com/v1/api/mcp/<GLADYS_PLUS_API_KEY>
```

#### Generating a Gladys Plus API Key (`<GLADYS_PLUS_API_KEY>`)

You must generate an Open API key (be careful, not one from the configuration interface), to do this follow the [Gladys Plus documentation](https://gladysassistant.com/docs/plus/open-api/#generate-an-api-key)

## Configuring MCP Clients

### Optional - mcp-proxy (Claude Desktop and Perplexity)

Not all clients yet support MCP servers directly via HTTP (such as the free version of __Claude Desktop__ or __Perplexity__) and communicate via STDIO. You must therefore use [mcp-proxy](https://github.com/sparfenyuk/mcp-proxy) which bridges stdio and HTTP. It's a small software that must be installed on the same machine as the MCP client.

#### Installing mcp-proxy

Follow the installation instructions on the GitHub repository: [mcp-proxy Installation](https://github.com/sparfenyuk/mcp-proxy?tab=readme-ov-file#installation)

Once installed, find the full path of mcp-proxy:

```bash
# On macOS/Linux
which mcp-proxy

# On Windows
where.exe mcp-proxy
```

Note this path, you'll need it for configuration.

### Configuration for Claude Desktop

1. Start Claude Desktop
2. Go to **Settings → Developer → Local MCPs**
3. Click **"Edit Config"**
4. Modify the `claude_desktop_config.json` file:

```json
{
  "mcpServers": {
    "gladys": {
      "command": "/full/path/to/mcp-proxy",
      "args": [
        "http://<YOUR_GLADYS_IP>/api/v1/service/mcp/proxy",
        "--transport",
        "streamablehttp",
        "--header",
        "Authorization: <LOCAL_API_KEY>"
      ],
      "env": {}
    }
  }
}
```

Replace:
- `/full/path/to/mcp-proxy` with the path obtained from `which mcp-proxy`
- `<YOUR_GLADYS_IP>` with your Gladys IP address
- `<LOCAL_API_KEY>` with the key generated in Gladys

5. Save and restart Claude Desktop

If everything works, you should have access to all MCP functions in the chat.

> **💡 Tip:** You can also use the Gladys Plus URL `https://api.gladysgateway.com/v1/api/mcp/<GLADYS_PLUS_API_KEY>` instead of the local URL to access your Gladys from anywhere.

### Configuration for Perplexity

1. Start Perplexity
2. Go to **Settings** → **Connectors** → **Add Connector**
3. Select the **"Advanced"** tab
4. Give a name: "Gladys"
5. Configure:

```json
{
  "command": "/full/path/to/mcp-proxy",
  "args": [
    "http://<YOUR_GLADYS_IP>/api/v1/service/mcp/proxy",
    "--transport",
    "streamablehttp",
    "--header",
    "Authorization: <LOCAL_API_KEY>"
  ],
  "env": {}
}
```

Replace the same values as for Claude Desktop.

6. Save and wait for Perplexity to detect the functions

📖 More information: [Perplexity MCP Documentation](https://www.perplexity.ai/help-center/en/articles/11502712-local-and-remote-mcps-for-perplexity)

> **💡 Tip:** You can also use the Gladys Plus URL `https://api.gladysgateway.com/v1/api/mcp/<GLADYS_PLUS_API_KEY>` instead of the local URL to access your Gladys from anywhere.

### VS Code with GitHub Copilot

GitHub Copilot in VS Code natively supports MCP servers via HTTP.

1. Open Copilot Chat in VS Code
2. At the bottom, select **Agent** then click the ⚙️ icon (wrench)
3. Choose **"Add more Tools..."** from the dropdown
4. Select **"Add MCP Server"**
5. Choose the **"HTTP"** type
6. Enter the URL: `http://<YOUR_GLADYS_IP>/api/v1/service/mcp/proxy`
7. In headers, add:
   - Name: `Authorization`
   - Value: `<LOCAL_API_KEY>`
8. Give your server a name (e.g., "Gladys")

You can now chat with Copilot and ask it to interact with your home!

📖 More information: [VS Code MCP Documentation](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)

> **💡 Tip:** You can also use the Gladys Plus URL `https://api.gladysgateway.com/v1/api/mcp/<GLADYS_PLUS_API_KEY>` instead of the local URL to access your Gladys from anywhere.

### Mistral Le Chat **only** with Gladys Plus

Le Chat only allows connection to MCPs accessible on the internet.

1. Go to **Intelligence** → **Connectors**
2. Click **Add a connector**
3. In the **Custom MCP Connector** tab, complete the form with the URL and Gladys Plus API key `https://api.gladysgateway.com/v1/api/mcp/<GLADYS_PLUS_API_KEY>`

You can now interact with Gladys data in Le Chat

## Need Help?

Feel free to ask your questions on [the Gladys forum](https://community.gladysassistant.com/), the community is here to help you!
