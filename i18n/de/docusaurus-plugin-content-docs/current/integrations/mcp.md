---
id: mcp
title: Einen MCP-Client mit Gladys verbinden
sidebar_label: MCP
description: "Verbinde Claude Desktop, Perplexity oder Mistral über das Model Context Protocol (MCP) mit deinem Gladys-Smart-Home. Steuere Lampen, lies Sensoren aus, starte Szenen und sieh dir Kamerabilder an – direkt aus KI-Agenten."
---

Das Model Context Protocol (MCP) ist ein von Anthropic entwickeltes offenes Protokoll, mit dem sich Werkzeuge und Funktionen bereitstellen lassen, die KI-Agenten nutzen können, um Informationen abzurufen oder mit realen Geräten zu interagieren.

:::tip[Was kann ein KI-Agent in deinem Zuhause tun?]
Anwendungsfälle, lokaler vs. Fernzugriff und unterstützte Clients auf einer Seite: [Smart-Home-MCP-Server](/de/smart-home-mcp-server/).
:::

## Was ermöglicht der MCP-Server von Gladys?

Gladys Assistant enthält einen MCP-Server, über den deine kompatiblen KI-Agenten (Claude Desktop, Perplexity, Mistral Le Chat usw.) mit deinem Smart Home kommunizieren können. Derzeit stehen folgende Funktionen zur Verfügung:

- 🌡️ Gerätezustände abrufen (letzter Wert oder Werteverlauf)
  - Temperatur
  - Luftfeuchtigkeit
  - offen/geschlossen (Kontakt)
  - Lampe
  - smarte Steckdose
  - Luftqualität
  - Kohlenmonoxid (CO)
  - Kohlendioxid (CO₂)
  - Energie
  - Helligkeit
  - Bewegung
  - PM10
  - PM2.5
  - Winkel
  - Entfernung
  - Leck
  - Füllstand
  - Formaldehyd (HCHO)
  - Niederschlag
  - Anwesenheit
  - Luftdruck
  - Regen
  - Rauch
  - VOC (flüchtige organische Verbindungen)
  - Lautstärke
- 📷 Deine Kameras ansehen und beschreiben, was sie zeigen (sofern dein Client das unterstützt)
- 💡 Lampen ein-/ausschalten
- 🔌 Schalter und Steckdosen steuern
- 🎬 Szenen starten

## Systemarchitektur

Das MCP-System besteht aus 2 Komponenten:

1. **Der MCP-Client**: Das ist dein KI-Agent (Claude Desktop, Perplexity, Mistral Le Chat...)
2. **Der MCP-Server**: In Gladys integriert, stellt er die verfügbaren Funktionen bereit, die der Client aufrufen kann

Standardmäßig müssen sich dein Agent und deine Gladys-Instanz im selben lokalen Netzwerk befinden, um miteinander kommunizieren zu können.

Wenn du Gladys Plus abonniert hast, kannst du über die Open API auch außerhalb deines Zuhauses auf den MCP-Server zugreifen. Dieser Weg über die Open API ist außerdem nötig, wenn dein Agent nur auf online erreichbare MCP-Server zugreifen kann (zum Beispiel Mistral Le Chat).

## Einrichtung in Gladys

### Lokaler MCP

Öffne in Gladys `Integrationen` → `MCP`.

#### URL des MCP-Servers

Die URL des MCP-Servers wird in der Oberfläche angezeigt:

```
http://YOUR_GLADYS_IP/api/v1/service/mcp/proxy
```

Die Authentifizierung erfolgt, indem du den Header `Authorization` mit deinem lokalen API-Schlüssel als Wert hinzufügst (siehe unten).

#### Einen lokalen API-Schlüssel erzeugen (`<LOCAL_API_KEY>`)

Um die Verbindung zwischen deinem Agenten und Gladys abzusichern, musst du einen API-Schlüssel erzeugen:

1. Gib in der MCP-Oberfläche von Gladys unten auf der Seite einen Namen für deinen Client ein (z. B. „Claude Desktop“, „VS Code“...)
2. Klicke auf „Generieren“
3. **Wichtig**: Kopiere den erzeugten Schlüssel sofort, du kannst ihn danach nicht mehr einsehen
4. Trage ihn in die Konfiguration deines Clients ein, indem du ihn im Header `Authorization` übergibst

Du kannst diesen Schlüssel bei Bedarf jederzeit widerrufen.

### Zugriff über das Internet mit Gladys Plus

Wenn du Agenten nutzen möchtest, die eine öffentliche URL benötigen (Mistral Le Chat), kannst du den Weg über Gladys Plus gehen.

#### URL

Gladys Plus stellt eine sichere und authentifizierte Route bereit:

```
https://api.gladysgateway.com/v1/api/mcp/<GLADYS_PLUS_API_KEY>
```

#### Einen Gladys-Plus-API-Schlüssel erzeugen (`<GLADYS_PLUS_API_KEY>`)

Du musst einen Open-API-Schlüssel erzeugen (Achtung: nicht einen aus der Konfigurationsoberfläche). Folge dazu der [Gladys-Plus-Dokumentation](/de/docs/plus/open-api/#generate-a-new-api-key)

## MCP-Clients konfigurieren

### Optional – mcp-proxy (Claude Desktop und Perplexity)

Noch nicht alle Clients unterstützen MCP-Server direkt über HTTP (etwa die kostenlose Version von __Claude Desktop__ oder __Perplexity__), sondern kommunizieren über STDIO. Du musst daher [mcp-proxy](https://github.com/sparfenyuk/mcp-proxy) verwenden, das eine Brücke zwischen STDIO und HTTP schlägt. Es ist ein kleines Programm, das auf demselben Rechner wie der MCP-Client installiert werden muss.

#### mcp-proxy installieren

Folge der Installationsanleitung im GitHub-Repository: [mcp-proxy-Installation](https://github.com/sparfenyuk/mcp-proxy?tab=readme-ov-file#installation)

Ermittle nach der Installation den vollständigen Pfad zu mcp-proxy:

```bash
# Unter macOS/Linux
which mcp-proxy

# Unter Windows
where.exe mcp-proxy
```

Notiere dir diesen Pfad, du brauchst ihn für die Konfiguration.

### Konfiguration für Claude Desktop

1. Starte Claude Desktop
2. Öffne **Settings → Developer → Local MCPs**
3. Klicke auf **„Edit Config“**
4. Bearbeite die Datei `claude_desktop_config.json`:

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

Ersetze:
- `/full/path/to/mcp-proxy` durch den Pfad, den du mit `which mcp-proxy` ermittelt hast
- `<YOUR_GLADYS_IP>` durch die IP-Adresse deiner Gladys-Instanz
- `<LOCAL_API_KEY>` durch den in Gladys erzeugten Schlüssel

5. Speichere und starte Claude Desktop neu

Wenn alles funktioniert, stehen dir im Chat alle MCP-Funktionen zur Verfügung.

> **💡 Tipp:** Statt der lokalen URL kannst du auch die Gladys-Plus-URL `https://api.gladysgateway.com/v1/api/mcp/<GLADYS_PLUS_API_KEY>` verwenden, um von überall auf deine Gladys-Instanz zuzugreifen.

### Konfiguration für Perplexity

1. Starte Perplexity
2. Öffne **Settings** → **Connectors** → **Add Connector**
3. Wähle den Tab **„Advanced“**
4. Vergib einen Namen: „Gladys“
5. Konfiguriere:

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

Ersetze dieselben Werte wie bei Claude Desktop.

6. Speichere und warte, bis Perplexity die Funktionen erkannt hat

📖 Weitere Informationen: [Perplexity-MCP-Dokumentation](https://www.perplexity.ai/help-center/en/articles/11502712-local-and-remote-mcps-for-perplexity)

> **💡 Tipp:** Statt der lokalen URL kannst du auch die Gladys-Plus-URL `https://api.gladysgateway.com/v1/api/mcp/<GLADYS_PLUS_API_KEY>` verwenden, um von überall auf deine Gladys-Instanz zuzugreifen.

### VS Code mit GitHub Copilot

GitHub Copilot in VS Code unterstützt MCP-Server über HTTP von Haus aus.

1. Öffne den Copilot Chat in VS Code
2. Wähle unten **Agent** und klicke auf das Symbol ⚙️ (Werkzeug)
3. Wähle im Drop-down **„Add more Tools...“**
4. Wähle **„Add MCP Server“**
5. Wähle den Typ **„HTTP“**
6. Gib die URL ein: `http://<YOUR_GLADYS_IP>/api/v1/service/mcp/proxy`
7. Füge unter den Headern hinzu:
   - Name: `Authorization`
   - Wert: `<LOCAL_API_KEY>`
8. Gib deinem Server einen Namen (z. B. „Gladys“)

Jetzt kannst du mit Copilot chatten und ihn bitten, mit deinem Zuhause zu interagieren!

📖 Weitere Informationen: [VS-Code-MCP-Dokumentation](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)

> **💡 Tipp:** Statt der lokalen URL kannst du auch die Gladys-Plus-URL `https://api.gladysgateway.com/v1/api/mcp/<GLADYS_PLUS_API_KEY>` verwenden, um von überall auf deine Gladys-Instanz zuzugreifen.

### Mistral Le Chat **nur** mit Gladys Plus

Le Chat erlaubt nur Verbindungen zu MCP-Servern, die über das Internet erreichbar sind.

1. Öffne **Intelligence** → **Connectors**
2. Klicke auf **Add a connector**
3. Fülle im Tab **Custom MCP Connector** das Formular mit der URL und dem Gladys-Plus-API-Schlüssel aus: `https://api.gladysgateway.com/v1/api/mcp/<GLADYS_PLUS_API_KEY>`

Jetzt kannst du in Le Chat mit den Daten von Gladys interagieren

## Brauchst du Hilfe?

Stell deine Fragen gerne im [Gladys-Forum](https://community.gladysassistant.com/), die Community hilft dir weiter!
