---
id: lan-manager
title: Manage presence by scanning your Wi-Fi network
sidebar_label: Lan-Manager
---

The LAN Manager integration lets you scan your network at regular intervals to determine whether you’re home or away by detecting the presence of your phone, tablet, or computer.

:::note
This method may result in false negatives if your phone is not always connected to Wi-Fi (for instance, if it goes into sleep mode).
:::

:::warning
This method does not work on iPhones.

For iPhone, I recommend using the “Shortcuts” app to send a request to Gladys when you leave home.
:::

## Adding Your Phone

Go to the “LAN Manager” integration, then click “LAN Discovery” and select “Network Search.”

Then create the device by clicking on "Save."

If this search doesn’t yield any results, check the following:

- That your Gladys installation is on the correct network
- That your Gladys container is running in “network=host” mode, which is the case if you launched Gladys using the official docker run command
- That the CIDR range to scan is correct (this can be modified in the integration settings)

## Manage presence in scenes

### A "homecoming" scene

We are now going to create a `scene` that will mark a user as "present at home" when your phone is detected.

Go to the "Scenes" tab, and create a scene like this:

![Return home scene](../../static/img/docs/en/configuration/bluetooth/back-at-home-scene.png)

The scene is very simple.

WHEN "Phone is detected" THEN "put user 'Tony' as present at home".

### A "leaving home" scene

To manage the departure of the user from the house, we recommend you make a scene executed periodically, which will check if your phone has been detected recently at home.

If Gladys detects the device's presence, it won't do anything. If not, Gladys will mark the user as absent.

The scene should look like this:

![Scene leaving home](../../static/img/docs/en/configuration/bluetooth/left-home-scene.png)

You can play around with the settings to suit your home. If you feel that 10 minutes is too short to be put as absent, you can extend it to 20 minutes to avoid "false positives" 😀

## Display presence on the dashboard

You can display the presence of selected users on the dashboard. To do so, you can use the "Users present" widget:

![Presence dashboard](../../static/img/docs/en/configuration/bluetooth/user-presence-dashboard.png)
