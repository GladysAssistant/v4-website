---
id: melcloud
title: "MELCloud in Gladys: control your Mitsubishi air conditioning"
description: "Connect MELCloud to Gladys Assistant to control your Mitsubishi Electric air conditioning and heat pumps: on/off, mode, target temperature, and automations in scenes."
sidebar_label: MELCloud
keywords:
  - melcloud
  - melcloud gladys
  - melcloud mitsubishi
  - mitsubishi air conditioning home automation
  - melcloud integration
  - control mitsubishi ac
---

import JsonLd from '@site/src/components/seo/JsonLd';

MELCloud is Mitsubishi Electric's cloud service that allows you to control your Mitsubishi air conditioning units and heat pumps remotely. With this integration, you can control your Mitsubishi AC directly from Gladys Assistant, and use it in your automations.

## Prerequisites

- A Mitsubishi air conditioning unit compatible with MELCloud
- A MELCloud account (create one at [app.melcloud.com](https://app.melcloud.com))
- Your AC unit must be configured and working in the MELCloud app

## Connect MELCloud to Gladys

Go to `Integrations -> MELCloud` in Gladys.

### Step 1: Configure your MELCloud account

In the `Setup` tab, enter your MELCloud credentials:

- **Email**: Your MELCloud account email
- **Password**: Your MELCloud account password

Click on `Save configuration` to connect Gladys to your MELCloud account.

![MELCloud configuration](../../static/img/docs/en/configuration/melcloud/1-melcloud-account.png)

### Step 2: Discover and add your devices

Once connected, go to the `MELCloud discover` tab to see all your available devices.

For each device you want to add to Gladys:

1. Select the room where the device is located
2. Click on `Save` to add the device to Gladys

The device will appear in the `Devices` tab with its features:

- **Switch (On/Off)**: Turn the AC on or off
- **Mode**: Change the operating mode (cooling, heating, etc.)
- **Target temperature**: Set the desired temperature

![Add MELCloud device](../../static/img/docs/en/configuration/melcloud/2-add-melcloud-device.png)

### Step 3: Add to your dashboard

To control your AC from the dashboard, go to `Dashboard` and edit your dashboard to add the device features you want to display.

![Configure dashboard](../../static/img/docs/en/configuration/melcloud/3-configure-dashboard.png)

### Step 4: Control your AC

You can now control your Mitsubishi AC directly from the Gladys dashboard:

- Toggle the AC on/off
- Adjust the target temperature

![Control AC](../../static/img/docs/en/configuration/melcloud/4-control-ac.png)

## Using in scenes

You can also use your MELCloud devices in Gladys scenes to automate your air conditioning. For example:

- Turn on the AC when the temperature rises above a certain threshold
- Turn off the AC when you leave home
- Set a specific temperature at a scheduled time

## Frequently asked questions

### What is MELCloud?

MELCloud is Mitsubishi Electric's cloud service used to control compatible Mitsubishi air conditioning units and heat pumps from a phone or computer. The Gladys MELCloud integration connects to that service so you can control the same units from Gladys and use them in your home automations.

### Can I control my Mitsubishi air conditioning with Gladys?

Yes. Once MELCloud is connected, Gladys exposes your Mitsubishi units with their main features: switch them on or off, change the mode (cooling, heating, etc.) and set the target temperature, from the dashboard, the chat or a scene.

### Can I automate my Mitsubishi AC in scenes?

Yes. MELCloud devices can be used in Gladys scenes: for example turn the AC on when the temperature rises above a threshold, turn it off when everyone leaves home, or set a specific temperature at a scheduled time.

### My devices are not appearing

Make sure your devices are properly configured in the MELCloud app and that you can control them from there. Then try refreshing the discovery in Gladys.

### Connection issues

If you have connection issues, verify that:

- Your MELCloud credentials are correct
- Your MELCloud account is active
- You have internet connectivity

If you have any questions, ask on [the forum](https://community.gladysassistant.com/).

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is MELCloud?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "MELCloud is Mitsubishi Electric's cloud service used to control compatible Mitsubishi air conditioning units and heat pumps from a phone or computer. The Gladys MELCloud integration connects to that service so you can control the same units from Gladys and use them in your home automations.",
        },
      },
      {
        "@type": "Question",
        name: "Can I control my Mitsubishi air conditioning with Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Once MELCloud is connected, Gladys exposes your Mitsubishi units with their main features: switch them on or off, change the mode (cooling, heating, etc.) and set the target temperature, from the dashboard, the chat or a scene.",
        },
      },
      {
        "@type": "Question",
        name: "Can I automate my Mitsubishi AC in scenes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. MELCloud devices can be used in Gladys scenes: for example turn the AC on when the temperature rises above a threshold, turn it off when everyone leaves home, or set a specific temperature at a scheduled time.",
        },
      },
    ],
  }}
/>
