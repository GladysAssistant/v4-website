---
id: imou
title: "Imou in Gladys: RTSP URL and camera setup"
description: "Connect an Imou camera to Gladys Assistant over RTSP, locally and without the cloud. Includes the exact Imou RTSP URL format for the main and sub streams."
sidebar_label: Imou
keywords:
  - imou rtsp url
  - imou gladys
  - imou home automation
  - imou rtsp
  - connect imou camera
  - imou ranger 2 rtsp
  - imou local
---

import JsonLd from '@site/src/components/seo/JsonLd';

Imou cameras (a brand of Dahua) are an affordable, widely used choice, and most of them work with Gladys Assistant.

Imou cameras expose a standard **RTSP** stream, so they connect through the generic [camera integration](/docs/integrations/camera). Gladys talks to the camera directly on your local network, which means your video feed stays at home and never transits through the Imou cloud.

## Imou RTSP URL

Imou cameras expose two RTSP streams on port `554`: a high resolution **main** stream and a lighter **sub** stream. Replace `username`, `password` and the IP address with your own values:

```
# Main (high resolution) stream:
rtsp://username:password@192.168.1.20:554/cam/realmonitor?channel=1&subtype=0

# Sub (low resolution) stream:
rtsp://username:password@192.168.1.20:554/cam/realmonitor?channel=1&subtype=1
```

A few things worth knowing:

- The `channel=1` value is the channel number. On a standalone camera it is always `1`. If the camera is connected through an Imou/Dahua NVR, increment it for each channel (`channel=2`, `channel=3`, and so on).
- `subtype=0` is the main stream, `subtype=1` is the sub stream. For a smooth live view on your dashboard, the **sub** stream is often enough and puts less load on your Gladys server. Use the **main** stream when you want full resolution.
- The username is usually `admin`, and the password is the device password you set when pairing the camera in the Imou Life app (not your Imou account password).
- Some battery powered Imou models do not keep an RTSP stream running to save power. On those, RTSP may not be available and the camera cannot be added to Gladys.

## Enable RTSP on your Imou camera

On many Imou cameras RTSP (and ONVIF) has to be turned on before the stream responds:

1. Open the **Imou Life** app and select your camera.
2. Go to **Settings → Camera Settings** and look for **ONVIF** or **RTSP** (the exact wording depends on the model and firmware).
3. Enable it, and if the app asks you to set an ONVIF/RTSP password, note it down: that is the password you will use in the RTSP URL.

It is good practice to keep a dedicated password for the RTSP stream so you can change it at any time.

## Test the URL in VLC

Before adding the camera to Gladys, confirm your RTSP URL works in [VLC](https://www.videolan.org/vlc/): open **File → Open Network...**, paste the URL and check that the stream plays. If it works in VLC, it will work in Gladys.

## Add your Imou camera to Gladys

Once your RTSP URL is confirmed, adding the camera to Gladys takes a minute:

1. In Gladys, go to the **Integrations** tab and open the **Camera** integration.
2. Click **New**, then paste your Imou RTSP URL and give the camera a name.
3. Click **Test connection**, then **Save**.
4. Add the camera to your dashboard, and optionally ask Gladys to show it from the chat or on Telegram.

The full walkthrough with screenshots is on the [camera integration page](/docs/integrations/camera).

## Frequently asked questions

### What is the RTSP URL of an Imou camera?

Imou cameras expose two RTSP streams on port 554: the main (high resolution) stream at `rtsp://username:password@CAMERA_IP:554/cam/realmonitor?channel=1&subtype=0` and a lighter sub stream at `rtsp://username:password@CAMERA_IP:554/cam/realmonitor?channel=1&subtype=1`. Replace the username, password and IP with your own. The username is usually `admin` and the password is the device password set in the Imou Life app.

### Does the Imou Ranger 2 support RTSP?

Yes. The Imou Ranger 2 (and Ranger 2C) exposes a standard RTSP stream once RTSP/ONVIF is enabled in the Imou Life app, so it can be added to Gladys through the camera integration like any other RTSP camera.

### Does the Imou integration work without the cloud?

Yes. Gladys connects to your Imou camera directly over your local network using its RTSP stream, so the video never goes through the Imou cloud and keeps working without an internet connection.

### Why does my Imou RTSP URL not connect?

The most common causes are RTSP/ONVIF being disabled in the Imou Life app, a wrong password (use the device/ONVIF password, not your Imou account password), a wrong channel number (`channel=1` for a single camera), or a battery model that does not keep the stream running. Test the URL in VLC first: if VLC cannot open it either, the problem is with the URL or the camera, not with Gladys.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the RTSP URL of an Imou camera?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Imou cameras expose two RTSP streams on port 554: the main (high resolution) stream at rtsp://username:password@CAMERA_IP:554/cam/realmonitor?channel=1&subtype=0 and a lighter sub stream at rtsp://username:password@CAMERA_IP:554/cam/realmonitor?channel=1&subtype=1. Replace the username, password and IP with your own. The username is usually admin and the password is the device password set in the Imou Life app.",
        },
      },
      {
        "@type": "Question",
        name: "Does the Imou Ranger 2 support RTSP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The Imou Ranger 2 (and Ranger 2C) exposes a standard RTSP stream once RTSP/ONVIF is enabled in the Imou Life app, so it can be added to Gladys through the camera integration like any other RTSP camera.",
        },
      },
      {
        "@type": "Question",
        name: "Does the Imou integration work without the cloud?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Gladys connects to your Imou camera directly over your local network using its RTSP stream, so the video never goes through the Imou cloud and keeps working without an internet connection.",
        },
      },
      {
        "@type": "Question",
        name: "Why does my Imou RTSP URL not connect?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The most common causes are RTSP/ONVIF being disabled in the Imou Life app, a wrong password (use the device/ONVIF password, not your Imou account password), a wrong channel number (channel=1 for a single camera), or a battery model that does not keep the stream running. Test the URL in VLC first: if VLC cannot open it either, the problem is with the URL or the camera, not with Gladys.",
        },
      },
    ],
  }}
/>
