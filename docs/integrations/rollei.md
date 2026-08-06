---
id: rollei
title: "Rollei IPC-88 (Aldi camera) in Gladys: RTSP and ONVIF"
description: "How to connect a Rollei IPC-88 security camera, the cheap camera sold at Aldi, to Gladys Assistant. Enable ONVIF, find its RTSP URL, and view the stream locally."
sidebar_label: Rollei (Aldi camera)
keywords:
  - rollei ipc-88
  - rollei ipc 88
  - aldi camera
  - rollei camera aldi
  - rollei ipc-88 installation
  - rollei rtsp
  - aldi security camera
  - rollei onvif
---

import JsonLd from '@site/src/components/seo/JsonLd';

The **Rollei IPC-88** is the inexpensive indoor security camera regularly sold at **Aldi** for around 20 euros. Like most cameras in that price range it runs on the **Tuya** platform and is paired with the **Smart Life** app, but the good news is that it exposes an **ONVIF/RTSP** stream, so it can be added to Gladys Assistant and viewed entirely on your local network.

Gladys connects to cameras through their [RTSP stream](/docs/integrations/camera), directly over your LAN. Once the camera is in Gladys, the video feed stays at home: it does not transit through the Tuya or Rollei cloud, and it keeps working without an internet connection.

## Before you start

The IPC-88 has to be paired once with the **Smart Life** (or Tuya Smart) app, on your Wi-Fi network. That first pairing is mandatory: it is how the camera gets its Wi-Fi credentials. After that, everything we do here happens locally.

Two things worth knowing about this camera before you build anything around it:

- It is **mains powered and has no backup battery**, so it stops recording during a power cut. It is a good monitoring camera, not a substitute for a proper alarm system.
- Its infrared LEDs glow visibly red at night, and the audio quality is modest. At 20 euros, that is the trade-off.

## Step 1: enable ONVIF in the Smart Life app

The RTSP stream is not served until ONVIF is turned on:

1. Open the **Smart Life** app and select your Rollei IPC-88.
2. Open the camera **settings** (the pencil or gear icon, top right).
3. Look for the **ONVIF** entry and enable it.
4. If the app asks you to set an ONVIF username and password, note them down: those are the credentials you will use in the RTSP URL, not your Tuya account credentials.

If your firmware does not show any ONVIF entry, check for a firmware update in the app first: the option has been added to several Tuya camera firmwares over time.

## Step 2: find the RTSP URL of your camera

Tuya based cameras do not all use the same RTSP path, and it can change between firmware versions, so the reliable approach is to let an ONVIF tool tell you the exact URL:

1. Install an ONVIF client. **Onvier** (Android) is the one most users of this camera use, and **ONVIF Device Manager** works well on Windows.
2. Run a discovery scan on your local network: the camera appears with its IP address.
3. Connect to it (with the ONVIF credentials if you set some), and open the stream information: the tool displays the full RTSP URL of the main and sub streams.

The URL usually looks like this, on port `554`:

```text
rtsp://192.168.1.20:554/
rtsp://username:password@192.168.1.20:554/
```

A few notes:

- On many IPC-88 units, **no credentials are needed** in the URL at all: the plain `rtsp://CAMERA_IP:554/...` form works as is on the local network.
- Reserved characters in a username or password must be percent-encoded in the URL, otherwise it will not be parsed correctly. The most common one is `@`, which becomes `%40`, but the same applies to `:` (`%3A`), `/` (`%2F`), `?` (`%3F`), `#` (`%23`) and space (`%20`).
- Give the camera a **fixed IP address** (a DHCP reservation on your router is the simplest way). If its IP changes, the RTSP URL stored in Gladys stops working.
- If the camera exposes two streams, the lighter **sub** stream is usually enough for a dashboard tile and puts less load on your Gladys server.

## Step 3: test the URL in VLC

Before adding the camera to Gladys, confirm the URL works in [VLC](https://www.videolan.org/vlc/): open **File → Open Network...**, paste the URL and check that the stream plays. If VLC plays it, Gladys should too, as long as it supports the codec your camera uses.

If VLC shows nothing, work through the usual suspects:

- ONVIF is really enabled in the Smart Life app, and the camera has been restarted since.
- The IP address is the current one, and your computer is on the same network as the camera.
- The credentials, when the camera requires some, are the ONVIF ones and are correctly percent-encoded.
- The RTSP path is the one reported by the ONVIF tool, not one copied from another camera brand.

## Step 4: add the camera to Gladys

Once your RTSP URL is confirmed:

1. In Gladys, go to the **Integrations** tab and open the **Camera** integration.
2. Click **New**, paste your RTSP URL and give the camera a name.
3. Click **Test connection**, then **Save**.
4. Add the camera to a dashboard, and optionally ask Gladys to send you a snapshot in a scene or in a Telegram message.

The full walkthrough with screenshots is on the [camera integration page](/docs/integrations/camera).

## Other Aldi cameras

Aldi sells several camera families under the Rollei name, and they do not all behave the same way:

- **Indoor and outdoor Wi-Fi security cameras** (the IPC-88 and its siblings) are Tuya based and generally expose ONVIF/RTSP, so the method above applies.
- **Trail cameras** (game or wildlife cameras) record to an SD card and, on 4G models, send pictures by email or MMS. They have no live RTSP stream and no local network video, so they cannot be added to Gladys.

If you are shopping for a camera rather than trying to reuse one you already own, a model that documents its RTSP support up front will save you time. See the [Reolink](/docs/integrations/external/reolink/) and [Imou](/docs/integrations/imou) pages for two ranges that expose a predictable RTSP URL.

## Frequently asked questions

### Does the Rollei IPC-88 sold at Aldi support RTSP?

Yes. The Rollei IPC-88 is a Tuya based camera that exposes an ONVIF/RTSP stream once ONVIF is enabled in the Smart Life app. You then read its exact RTSP URL with an ONVIF client such as Onvier or ONVIF Device Manager, and use that URL in Gladys.

### What is the RTSP URL of a Rollei IPC-88?

It uses port 554 and generally takes the form `rtsp://CAMERA_IP:554/...`, often with no credentials required on the local network. The exact path depends on the firmware, so rather than guessing it, run an ONVIF discovery tool on your network: it reports the full RTSP URL of the main and sub streams for your unit.

### Can I use an Aldi camera without the cloud?

Once paired, yes for the video stream. The initial pairing goes through the Smart Life app and the Tuya cloud, but afterwards Gladys reads the RTSP stream directly on your local network, so the video never leaves your home and the camera keeps displaying in Gladys without an internet connection.

### Why does my Rollei camera not appear in the ONVIF scan?

The usual causes are ONVIF still disabled in the Smart Life app, a camera on a different network or VLAN than your computer (2.4 GHz guest networks are a classic trap), or a firmware that predates the ONVIF option. Enable ONVIF, restart the camera, check for a firmware update, and run the scan again from a device on the same network.

### Is the Rollei IPC-88 a good security camera?

It is a good value monitoring camera, but it has no backup battery, so it goes dark during a power cut, and its night vision LEDs are visible. For actual intrusion detection, pair it with door and motion sensors and use it as a visual check rather than as the alarm itself. See our [DIY home alarm system guide](/diy-home-alarm-system/).

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does the Rollei IPC-88 sold at Aldi support RTSP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The Rollei IPC-88 is a Tuya based camera that exposes an ONVIF/RTSP stream once ONVIF is enabled in the Smart Life app. You then read its exact RTSP URL with an ONVIF client such as Onvier or ONVIF Device Manager, and use that URL in Gladys.",
        },
      },
      {
        "@type": "Question",
        name: "What is the RTSP URL of a Rollei IPC-88?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It uses port 554 and generally takes the form rtsp://CAMERA_IP:554/..., often with no credentials required on the local network. The exact path depends on the firmware, so rather than guessing it, run an ONVIF discovery tool on your network: it reports the full RTSP URL of the main and sub streams for your unit.",
        },
      },
      {
        "@type": "Question",
        name: "Can I use an Aldi camera without the cloud?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Once paired, yes for the video stream. The initial pairing goes through the Smart Life app and the Tuya cloud, but afterwards Gladys reads the RTSP stream directly on your local network, so the video never leaves your home and the camera keeps displaying in Gladys without an internet connection.",
        },
      },
      {
        "@type": "Question",
        name: "Why does my Rollei camera not appear in the ONVIF scan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The usual causes are ONVIF still disabled in the Smart Life app, a camera on a different network or VLAN than your computer, or a firmware that predates the ONVIF option. Enable ONVIF, restart the camera, check for a firmware update, and run the scan again from a device on the same network.",
        },
      },
      {
        "@type": "Question",
        name: "Is the Rollei IPC-88 a good security camera?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is a good value monitoring camera, but it has no backup battery, so it goes dark during a power cut, and its night vision LEDs are visible. For actual intrusion detection, pair it with door and motion sensors and use it as a visual check rather than as the alarm itself.",
        },
      },
    ],
  }}
/>
