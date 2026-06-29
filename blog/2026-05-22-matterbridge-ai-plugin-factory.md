---
title: "The Matterbridge AI Plugin Factory: Make Any Device Work With Gladys"
description: "Open a GitHub ticket describing your device, and an AI-powered factory builds a Matterbridge plugin overnight to make it work with Gladys."
authors: pierregilles
image: /img/presentation/matterbridge-ai-plugin-factory-en.jpg
slug: matterbridge-ai-plugin-factory
---

Hey everyone,

Do you have devices that aren't compatible with Gladys and don't use an open protocol like Zigbee or Matter? Don't worry. I've built an **AI-powered Matterbridge plugin factory** that automatically develops plugins for your devices. No development skills required.

{/* truncate */}

> **Prerequisite:** Matterbridge must be installed and configured. If it isn't yet, first follow [this tutorial in the documentation](/docs/integrations/matterbridge/).

## How does it work?

You open a GitHub ticket describing your device, the AI develops the plugin overnight, and all you have to do is test it. If something is wrong, you leave a comment and the AI iterates.

## Step 1: Create a GitHub ticket

Head over to the factory repository: 👉 [matterbridge-ai-plugin-factory/issues](https://github.com/GladysAssistant/matterbridge-ai-plugin-factory/issues)

Click **"New Issue"**:

![Create a new issue](../static/img/articles/matterbridge-ai-plugin-factory/01.png)

Then select the **"Plugin Request"** template:

![Select the Plugin Request template](../static/img/articles/matterbridge-ai-plugin-factory/02.png)

Fill in the form:

- **Title:** the name of the plugin you want
- **Links:** if you know of similar plugins on other projects (Home Assistant, Homebridge…), add the links. The more context you provide, the more relevant the result will be on the first try.
- **Features:** describe what you want to control. Examples: temperature, on/off, humidity, brightness…
- **Additional context:** optional, but useful if your device has any quirks.

![Fill in the plugin request form](../static/img/articles/matterbridge-ai-plugin-factory/03.png)

![Plugin request details](../static/img/articles/matterbridge-ai-plugin-factory/04.png)

> **Tip:** if you don't know what to put in the links, say so in the description and ask the AI to search on its own. But the more precise you are, the better the result.

## Step 2: Install and test the plugin

The factory runs **every morning** and processes **one plugin per run**. Once yours is developed, the AI replies directly on the ticket with a download link:

![The AI replies with a download link](../static/img/articles/matterbridge-ai-plugin-factory/05.png)

Download the file, then in Matterbridge click **"Upload +"**:

![Upload the plugin in Matterbridge](../static/img/articles/matterbridge-ai-plugin-factory/06.jpg)

Then enter the plugin name in the **"Plugin Name"** field and click **"Add +"**:

![Add the plugin](../static/img/articles/matterbridge-ai-plugin-factory/07.jpg)

The plugin is installed, you can test it!

## Step 3: Give feedback

If the plugin doesn't work as expected, leave a comment on the GitHub ticket. The AI will read your feedback and fix the plugin on the next run:

![Leave feedback on the ticket](../static/img/articles/matterbridge-ai-plugin-factory/08.png)

---

Don't hesitate to open tickets, that's exactly what it's for! And if you have questions about how the factory works, ask away.
