---
id: lsc
title: "LSC camera in Gladys: RTSP and local setup"
description: "How to connect an LSC Smart Connect camera to Gladys Assistant. LSC cameras are Tuya based, so RTSP availability depends on the model: here is how to check and connect."
sidebar_label: LSC camera
keywords:
  - lsc camera
  - lsc camera rtsp
  - lsc smart connect
  - lsc camera gladys
  - lsc camera home automation
  - lsc camera onvif
---

import JsonLd from '@site/src/components/seo/JsonLd';

LSC Smart Connect is the smart home brand sold by Action. Its cameras are inexpensive and **Tuya based**, which is the key thing to know before trying to connect one to Gladys Assistant.

Gladys connects to cameras through their [RTSP or HTTP stream](/docs/integrations/camera), directly on your local network, so the video feed stays at home and never transits through the cloud. The catch with LSC is that most Tuya based cameras only stream to the Tuya/LSC cloud and **do not expose a standard RTSP stream** out of the box. A subset of models are ONVIF/RTSP compatible, so the first step is to find out which one you have.

## Does your LSC camera support RTSP?

There is no single answer for the whole LSC range, so check your specific model:

- Look on the box or in the LSC Smart Connect app for an **ONVIF** or **RTSP** mention. ONVIF compatible cameras almost always expose an RTSP stream.
- Search the exact model number together with "RTSP" or "ONVIF" to see what other users report.
- If your camera is ONVIF/RTSP capable, there is usually a setting to enable it (and sometimes to set a dedicated stream password) in the app or a small web interface at the camera's IP address.

If the model has no RTSP or ONVIF option, it cannot be added to Gladys directly, because it only talks to the Tuya cloud.

## LSC RTSP URL to try

When your LSC (Tuya based) camera does expose RTSP, it generally uses port `554` with one of these common paths. Replace `username`, `password` and the IP address with your own values:

```
rtsp://username:password@192.168.1.20:554/
rtsp://username:password@192.168.1.20:554/live/ch00_0
rtsp://username:password@192.168.1.20:554/onvif1
```

The exact path depends on the chipset, so if the first URL does not respond, try the others. An ONVIF discovery tool (or the ONVIF section of the camera's app) will also give you the precise RTSP path for your model.

## Test the URL in VLC

Before adding the camera to Gladys, confirm your RTSP URL works in [VLC](https://www.videolan.org/vlc/): open **File → Open Network...**, paste the URL and check that the stream plays. If it works in VLC, it will work in Gladys. If none of the URLs play in VLC, your model most likely does not expose RTSP.

## Add your LSC camera to Gladys

Once you have a working RTSP URL, adding the camera to Gladys takes a minute:

1. In Gladys, go to the **Integrations** tab and open the **Camera** integration.
2. Click **New**, then paste your LSC RTSP URL and give the camera a name.
3. Click **Test connection**, then **Save**.
4. Add the camera to your dashboard, and optionally ask Gladys to show it from the chat or on Telegram.

The full walkthrough with screenshots is on the [camera integration page](/docs/integrations/camera).

## Prefer a camera that always works locally?

If you are still shopping and want a camera that is guaranteed to work locally with Gladys, [Reolink cameras](/docs/integrations/reolink) expose a documented RTSP stream on every wired model and are the cameras we [recommend for Gladys](/docs/installation/recommended-hardware).

## Frequently asked questions

### Can I connect an LSC camera to Gladys?

It depends on the model. LSC Smart Connect cameras are Tuya based, and many only stream to the Tuya/LSC cloud with no RTSP stream. If your specific model is ONVIF or RTSP compatible, you can add it to Gladys through the camera integration using its RTSP URL. Check the box, the app, or the model number for an ONVIF/RTSP mention.

### Do LSC cameras expose an RTSP stream?

Only some of them. LSC is a Tuya brand, and standard Tuya cameras do not expose RTSP by default. ONVIF badged LSC models usually do, on port 554. Test the URL in VLC to confirm before adding the camera to Gladys.

### Does the LSC camera integration work without the cloud?

When your LSC camera exposes an RTSP stream, yes: Gladys connects to it directly over your local network and the video never goes through the LSC or Tuya cloud. Cameras that only stream to the Tuya cloud cannot be used locally.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I connect an LSC camera to Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the model. LSC Smart Connect cameras are Tuya based, and many only stream to the Tuya/LSC cloud with no RTSP stream. If your specific model is ONVIF or RTSP compatible, you can add it to Gladys through the camera integration using its RTSP URL. Check the box, the app, or the model number for an ONVIF/RTSP mention.",
        },
      },
      {
        "@type": "Question",
        name: "Do LSC cameras expose an RTSP stream?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Only some of them. LSC is a Tuya brand, and standard Tuya cameras do not expose RTSP by default. ONVIF badged LSC models usually do, on port 554. Test the URL in VLC to confirm before adding the camera to Gladys.",
        },
      },
      {
        "@type": "Question",
        name: "Does the LSC camera integration work without the cloud?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "When your LSC camera exposes an RTSP stream, yes: Gladys connects to it directly over your local network and the video never goes through the LSC or Tuya cloud. Cameras that only stream to the Tuya cloud cannot be used locally.",
        },
      },
    ],
  }}
/>
