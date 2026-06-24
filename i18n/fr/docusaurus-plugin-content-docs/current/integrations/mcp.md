---
id: mcp
title: Connecter un client MCP à Gladys
sidebar_label: MCP
description: "Connectez Claude Desktop, Perplexity ou Mistral à votre domotique Gladys via le Model Context Protocol (MCP). Contrôlez les lumières, lisez les capteurs, lancez des scènes depuis vos agents IA."
---

Le Model Context Protocol (MCP) est un protocole ouvert développé par Anthropic qui permet d'exposer des outils et fonctions que les agents IA peuvent utiliser pour obtenir des informations ou interagir avec des appareils du monde réel.

## Que permet le serveur MCP de Gladys ?

Gladys Assistant intègre un serveur MCP qui permet à vos agents IA compatibles (Claude Desktop, Perplexity, Mistral Le Chat etc...) de communiquer avec votre maison connectée. À ce jour voici les capacités disponibles :

- 🌡️ Récupérer les états d'appareils (dernière valeur ou historique de valeurs)
  - température
  - humidité
  - ouverture
  - lampe
  - prise connectée
  - qualité de l’air
  - monoxyde de carbone (CO)
  - dioxyde de carbone (CO₂)
  - énergie
  - luminosité
  - mouvement
  - PM10
  - PM2.5
  - angle
  - distance
  - fuite
  - niveau
  - formaldéhyde (HCHO)
  - précipitations
  - présence
  - pression
  - pluie
  - fumée
  - COV (composés organiques volatils)
  - volume
- 📷 Regarder vos caméras et décrire ce qu'il voit (si votre client est compatible)
- 💡 Allumer/éteindre les lumières
- 🔌 Contrôler les prises et commutateurs
- 🎬 Lancer des scènes

## Architecture du système

Le système MCP fonctionne avec 2 composants :

1. **Le client MCP** : C'est votre agent IA (Claude Desktop, Perplexity, Mistral Le Chat...)
2. **Le serveur MCP** : Intégré dans Gladys, il expose les fonctions disponibles, que le client peut appeler

Par défaut, votre agent et votre instance Gladys doivent être sur le même réseau local pour communiquer ensemble.

Si vous êtes abonnés Gladys Plus, vous pouvez utiliser l'Open API pour continuer d'accéder au serveur MCP en dehors de chez vous. Cette route Open API est également nécessaire si votre agent ne peut accéder qu'à des serveurs MCP disponible en ligne (pour Mistral Le Chat par exemple).

## Configuration dans Gladys

### MCP Local

Rendez-vous dans `Intégrations` → `MCP` dans Gladys.

#### URL du serveur MCP

L'URL du serveur MCP est visible dans l'interface :

```
http://VOTRE_IP_GLADYS/api/v1/service/mcp/proxy
```

L'authentification de votre connexion se fait en ajoutant le header `Authorization` avec pour valeur votre clé API locale (voir ci dessous).

#### Génération d'une clé API local (`<CLE_API_LOCALE>`)

Pour sécuriser la connexion entre votre agent et Gladys, vous devez générer une clé API :

1. Dans l'interface MCP de Gladys, en bas de la page, entrez un nom pour votre client (ex: "Claude Desktop", "VS Code"...)
2. Cliquez sur "Générer"
3. **Important** : Copiez immédiatement la clé générée, vous ne pourrez plus la voir ensuite
4. Ajoutez la dans la configuration de votre client en la passant dans le header `Authorization`

Vous pourrez révoquer cette clé à tout moment si nécessaire.

### Accès depuis Internet avec Gladys Plus

Si vous souhaitez utiliser des agents qui nécessitent une URL publique (Mistral Le Chat), vous pouvez passer par Gladys Plus.

#### URL

Gladys Plus met à disposition une route sécurisée et authentifiée :

```
https://api.gladysgateway.com/v1/api/mcp/<CLE_API_GLADYS_PLUS>
```

#### Génération d'une clé API Gladys Plus (`<CLE_API_GLADYS_PLUS>`)

Vous devez générer un clé API Open API (attention pas une depuis l'interface de configuration), pour cela suivez la [documentation Gladys Plus](https://gladysassistant.com/fr/docs/plus/open-api/#g%C3%A9n%C3%A9rer-une-cl%C3%A9-dapi)

## Configuration des clients MCP

### Optionnel - mcp-proxy (Claude Desktop et Perplexity)

Tous les clients ne supportent pas encore directement les serveurs MCP via HTTP (comme __Claude Desktop__ version gratuite ou __Perplexity__) et communique via STDIO. Il faut donc utiliser [mcp-proxy](https://github.com/sparfenyuk/mcp-proxy) qui fait le pont entre stdio et HTTP. C'est un petit logiciel qui doit être installé sur la même machine que le client MCP.

#### Installation de mcp-proxy

Suivez les instructions d'installation sur le dépôt GitHub : [mcp-proxy Installation](https://github.com/sparfenyuk/mcp-proxy?tab=readme-ov-file#installation)

Une fois installé, trouvez le chemin complet de mcp-proxy :

```bash
# Sur macOS/Linux
which mcp-proxy

# Sur Windows
where.exe mcp-proxy
```

Notez ce chemin, vous en aurez besoin pour la configuration.

### Configuration pour Claude Desktop

1. Démarrez Claude Desktop
2. Allez dans **Paramètres → Développeur → MCP Locaux**
3. Cliquez sur **"Modifier la Config"**
4. Modifiez le fichier `claude_desktop_config.json` :

```json
{
  "mcpServers": {
    "gladys": {
      "command": "/chemin/complet/vers/mcp-proxy",
      "args": [
        "http://<VOTRE_IP_GLADYS>/api/v1/service/mcp/proxy",
        "--transport",
        "streamablehttp",
        "--header",
        "Authorization: <CLE_API_LOCALE>"
      ],
      "env": {}
    }
  }
}
```

Remplacez :
- `/chemin/complet/vers/mcp-proxy` par le chemin obtenu avec `which mcp-proxy`
- `<VOTRE_IP_GLADYS>` par l'adresse IP de votre Gladys
- `<CLE_API_LOCALE>` par la clé générée dans Gladys

5. Sauvegardez et redémarrez Claude Desktop

Si tout fonctionne, vous devriez avoir accès à toutes les fonctions MCP dans le chat.

> **💡 Astuce :** Vous pouvez aussi utiliser l'URL Gladys Plus `https://api.gladysgateway.com/v1/api/mcp/<CLE_API_GLADYS_PLUS>` au lieu de l'URL locale pour accéder à votre Gladys depuis n'importe où.

### Configuration pour Perplexity

1. Démarrez Perplexity
2. Allez dans **Paramètres** → **Connecteurs** → **Ajouter un connecteur**
3. Sélectionnez l'onglet **"Avancé"**
4. Donnez un nom : "Gladys"
5. Configurez :

```json
{
  "command": "/chemin/complet/vers/mcp-proxy",
  "args": [
    "http://<VOTRE_IP_GLADYS>/api/v1/service/mcp/proxy",
    "--transport",
    "streamablehttp",
    "--header",
    "Authorization: <CLE_API_LOCALE>"
  ],
  "env": {}
}
```

Remplacez les mêmes valeurs que pour Claude Desktop.

6. Sauvegardez et attendez que Perplexity détecte les fonctions

📖 Plus d'informations : [Documentation Perplexity MCP](https://www.perplexity.ai/help-center/en/articles/11502712-local-and-remote-mcps-for-perplexity)

> **💡 Astuce :** Vous pouvez aussi utiliser l'URL Gladys Plus `https://api.gladysgateway.com/v1/api/mcp/<CLE_API_GLADYS_PLUS>` au lieu de l'URL locale pour accéder à votre Gladys depuis n'importe où.

### VS Code avec GitHub Copilot

GitHub Copilot dans VS Code supporte nativement les serveurs MCP via HTTP.

1. Ouvrez le Chat Copilot dans VS Code
2. En bas, sélectionnez **Agent** puis cliquez sur l'icône ⚙️ (clé à molette)
3. Choisissez **"Add more Tools..."** dans la liste déroulante
4. Sélectionnez **"Add MCP Server"**
5. Choisissez le type **"HTTP"**
6. Entrez l'URL : `http://<VOTRE_IP_GLADYS>/api/v1/service/mcp/proxy`
7. Dans les en-têtes (headers), ajoutez :
   - Nom : `Authorization`
   - Valeur : `<CLE_API_LOCALE>`
8. Donnez un nom à votre serveur (ex: "Gladys")

Vous pouvez maintenant discuter avec Copilot et lui demander d'interagir avec votre maison !

📖 Plus d'informations : [Documentation VS Code MCP](https://code.visualstudio.com/docs/copilot/chat/mcp-servers)

> **💡 Astuce :** Vous pouvez aussi utiliser l'URL Gladys Plus `https://api.gladysgateway.com/v1/api/mcp/<CLE_API_GLADYS_PLUS>` au lieu de l'URL locale pour accéder à votre Gladys depuis n'importe où.

### Mistral Le Chat **uniquement** avec Gladys Plus

Le Chat ne permet de se connecter qu'à des MCP accessibles sur internet.

1. Allez dans **Intelligence** → **Connecteurs**
2. Cliquez sur **Ajouter un connecteur**
3. Dans l’onglet **Connecteur MCP personnalisé**, complétez le formulaire avec l'URL et la clé API Gladys Plus `https://api.gladysgateway.com/v1/api/mcp/<CLE_API_GLADYS_PLUS>`

Vous pouvez maintenant interagir avec les données de Gladys dans Le Chat

## Besoin d'aide ?

N'hésitez pas à poser vos questions sur [le forum Gladys](https://community.gladysassistant.com/), la communauté est là pour vous aider !
