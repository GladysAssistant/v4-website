---
id: mcp
title: Conectar un cliente MCP a Gladys
sidebar_label: MCP
description: "Conecta Claude Desktop, Perplexity o Mistral a tu hogar inteligente con Gladys mediante el Model Context Protocol (MCP). Controla luces, consulta sensores, inicia escenas y mira tus cámaras desde agentes de IA."
---

El Model Context Protocol (MCP) es un protocolo abierto desarrollado por Anthropic que permite exponer herramientas y funciones que los agentes de IA pueden usar para obtener información o interactuar con dispositivos del mundo real.

:::tip[¿Qué puede hacer un agente de IA en tu casa?]
Casos de uso, acceso local frente a acceso remoto y clientes compatibles, en una sola página: [Servidor MCP para el hogar inteligente](/es/smart-home-mcp-server/).
:::

## ¿Qué permite el servidor MCP de Gladys?

Gladys Assistant integra un servidor MCP que permite a tus agentes de IA compatibles (Claude Desktop, Perplexity, Mistral Le Chat, etc.) comunicarse con tu hogar inteligente. Actualmente están disponibles estas funciones:

- 🌡️ Obtener el estado de los dispositivos (último valor o historial de valores)
  - temperatura
  - humedad
  - abierto/cerrado (contacto)
  - lámpara
  - enchufe inteligente
  - calidad del aire
  - monóxido de carbono (CO)
  - dióxido de carbono (CO₂)
  - energía
  - luminosidad
  - movimiento
  - PM10
  - PM2.5
  - ángulo
  - distancia
  - fuga
  - nivel
  - formaldehído (HCHO)
  - precipitación
  - presencia
  - presión
  - lluvia
  - humo
  - COV (compuestos orgánicos volátiles)
  - volumen
- 📷 Ver tus cámaras y describir lo que muestran (si tu cliente es compatible)
- 💡 Encender/apagar luces
- 🔌 Controlar interruptores y enchufes
- 🎬 Iniciar escenas

## Arquitectura del sistema

El sistema MCP funciona con 2 componentes:

1. **El cliente MCP**: Es tu agente de IA (Claude Desktop, Perplexity, Mistral Le Chat...)
2. **El servidor MCP**: Integrado en Gladys, expone las funciones disponibles que el cliente puede llamar

Por defecto, tu agente y tu instancia de Gladys deben estar en la misma red local para comunicarse entre sí.

Si tienes una suscripción a Gladys Plus, puedes usar la Open API para seguir accediendo al servidor MCP fuera de casa. Este acceso mediante la Open API también es necesario si tu agente solo puede acceder a servidores MCP disponibles en internet (por ejemplo, Mistral Le Chat).

## Configuración en Gladys

### MCP local

En Gladys, ve a `Integraciones` → `MCP`.

#### URL del servidor MCP

La URL del servidor MCP se muestra en la interfaz:

```
http://YOUR_GLADYS_IP/api/v1/service/mcp/proxy
```

La autenticación de la conexión se realiza añadiendo la cabecera `Authorization` con tu clave de API local como valor (ver más abajo).

#### Generar una clave de API local (`<LOCAL_API_KEY>`)

Para proteger la conexión entre tu agente y Gladys, debes generar una clave de API:

1. En la interfaz MCP de Gladys, en la parte inferior de la página, introduce un nombre para tu cliente (p. ej., "Claude Desktop", "VS Code"...)
2. Haz clic en "Generar"
3. **Importante**: Copia la clave generada inmediatamente, no podrás volver a verla
4. Añádela a la configuración de tu cliente pasándola en la cabecera `Authorization`

Puedes revocar esta clave en cualquier momento si lo necesitas.

### Acceso por internet con Gladys Plus

Si quieres usar agentes que necesitan una URL pública (Mistral Le Chat), puedes pasar por Gladys Plus.

#### URL

Gladys Plus ofrece una ruta segura y autenticada:

```
https://api.gladysgateway.com/v1/api/mcp/<GLADYS_PLUS_API_KEY>
```

#### Generar una clave de API de Gladys Plus (`<GLADYS_PLUS_API_KEY>`)

Debes generar una clave de Open API (cuidado: no una de la interfaz de configuración). Para ello, sigue la [documentación de Gladys Plus](/es/docs/plus/open-api/#generate-a-new-api-key)

## Configurar los clientes MCP

### Opcional: mcp-proxy (Claude Desktop y Perplexity)

No todos los clientes admiten todavía servidores MCP directamente por HTTP (como la versión gratuita de __Claude Desktop__ o __Perplexity__) y se comunican por STDIO. Por eso debes usar [mcp-proxy](https://github.com/sparfenyuk/mcp-proxy), que hace de puente entre STDIO y HTTP. Es un pequeño programa que debe instalarse en la misma máquina que el cliente MCP.

#### Instalar mcp-proxy

Sigue las instrucciones de instalación del repositorio de GitHub: [Instalación de mcp-proxy](https://github.com/sparfenyuk/mcp-proxy?tab=readme-ov-file#installation)

Una vez instalado, busca la ruta completa de mcp-proxy:

```bash
# En macOS/Linux
which mcp-proxy

# En Windows
where.exe mcp-proxy
```

Anota esta ruta, la necesitarás para la configuración.

### Configuración para Claude Desktop

1. Inicia Claude Desktop
2. Ve a **Settings → Developer → Local MCPs**
3. Haz clic en **"Edit Config"**
4. Modifica el archivo `claude_desktop_config.json`:

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

Sustituye:
- `/full/path/to/mcp-proxy` por la ruta obtenida con `which mcp-proxy`
- `<YOUR_GLADYS_IP>` por la dirección IP de tu Gladys
- `<LOCAL_API_KEY>` por la clave generada en Gladys

5. Guarda y reinicia Claude Desktop

Si todo funciona, deberías tener acceso a todas las funciones MCP en el chat.

> **💡 Consejo:** También puedes usar la URL de Gladys Plus `https://api.gladysgateway.com/v1/api/mcp/<GLADYS_PLUS_API_KEY>` en lugar de la URL local para acceder a tu Gladys desde cualquier lugar.

### Configuración para Perplexity

1. Inicia Perplexity
2. Ve a **Settings** → **Connectors** → **Add Connector**
3. Selecciona la pestaña **"Advanced"**
4. Ponle un nombre: "Gladys"
5. Configura:

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

Sustituye los mismos valores que para Claude Desktop.

6. Guarda y espera a que Perplexity detecte las funciones

📖 Más información: [Documentación de MCP de Perplexity](https://www.perplexity.ai/help-center/en/articles/11502712-local-and-remote-mcps-for-perplexity)

> **💡 Consejo:** También puedes usar la URL de Gladys Plus `https://api.gladysgateway.com/v1/api/mcp/<GLADYS_PLUS_API_KEY>` en lugar de la URL local para acceder a tu Gladys desde cualquier lugar.

### VS Code con GitHub Copilot

GitHub Copilot en VS Code admite de forma nativa servidores MCP por HTTP.

1. Abre Copilot Chat en VS Code
2. En la parte inferior, selecciona **Agent** y haz clic en el icono ⚙️ (herramienta)
3. Elige **"Add more Tools..."** en el menú desplegable
4. Selecciona **"Add MCP Server"**
5. Elige el tipo **"HTTP"**
6. Introduce la URL: `http://<YOUR_GLADYS_IP>/api/v1/service/mcp/proxy`
7. En las cabeceras, añade:
   - Nombre: `Authorization`
   - Valor: `<LOCAL_API_KEY>`
8. Ponle un nombre a tu servidor (p. ej., "Gladys")

¡Ya puedes chatear con Copilot y pedirle que interactúe con tu casa!

📖 Más información: [Documentación de MCP de VS Code](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)

> **💡 Consejo:** También puedes usar la URL de Gladys Plus `https://api.gladysgateway.com/v1/api/mcp/<GLADYS_PLUS_API_KEY>` en lugar de la URL local para acceder a tu Gladys desde cualquier lugar.

### Mistral Le Chat **solo** con Gladys Plus

Le Chat solo permite conectarse a servidores MCP accesibles desde internet.

1. Ve a **Intelligence** → **Connectors**
2. Haz clic en **Add a connector**
3. En la pestaña **Custom MCP Connector**, completa el formulario con la URL y la clave de API de Gladys Plus: `https://api.gladysgateway.com/v1/api/mcp/<GLADYS_PLUS_API_KEY>`

Ya puedes interactuar con los datos de Gladys en Le Chat

## ¿Necesitas ayuda?

No dudes en hacer tus preguntas en [el foro de Gladys](https://community.gladysassistant.com/), ¡la comunidad está ahí para ayudarte!
