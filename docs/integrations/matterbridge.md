---
id: matterbridge
title: Matterbridge
description: "Connect devices that have neither a native nor an external integration to Gladys Assistant with Matterbridge: enable the container, install plugins and pair them over Matter."
sidebar_label: Matterbridge
---

:::tip
To add a device or a service that has no native integration, [external integrations](/docs/integrations/external/) are the recommended path: you install them in one click from Gladys, and anyone can [create one](/docs/dev/external-integrations/).

Most of the devices Matterbridge used to be recommended for now have an external integration that talks to them directly, without a Matter bridge in between: [Overkiz](/docs/integrations/external/overkiz/) for Somfy TaHoma, TaHoma Switch and Connexoon, [Shelly](/docs/integrations/external/shelly/) for Shelly devices. Start by [browsing the catalog](/docs/integrations/external/): Matterbridge is the fallback when nothing there covers your device.
:::

[Matterbridge](https://github.com/Luligu/matterbridge) is a Matter bridge that allows you to connect non-Matter devices to a Matter ecosystem. Thanks to its many plugins, Matterbridge can expose devices from various manufacturers to Gladys via the Matter protocol.

## Enable Matterbridge

In Gladys, go to `Integrations / Matterbridge`.

![Integration list](../../static/img/docs/en/configuration/matterbridge/matterbridge-integration-list.png)

Gladys needs to install a Docker container to run Matterbridge. Don't worry, everything has been automated.

Click the **Enable** button to start the Matterbridge container.

![Enable Matterbridge](../../static/img/docs/en/configuration/matterbridge/mattebridge-activate-integration.png)

After a few moments (depending on your hardware and bandwidth), Matterbridge will be operational.

## Usage

Once Matterbridge is running, you can access its web interface to:

- Install plugins
- Configure your devices
- Get the Matter pairing code

Check the [official Matterbridge documentation](https://github.com/Luligu/matterbridge) for more details on plugin configuration and for the list of available plugins.

Once a plugin exposes your devices, pair the bridge in Gladys from the [Matter integration](/docs/integrations/matter/): copy the pairing code shown by Matterbridge, and add it in `Integrations / Matter`.
