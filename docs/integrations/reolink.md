---
id: reolink
title: "Reolink in Gladys: RTSP URL and camera setup"
description: "Connect a Reolink camera to Gladys Assistant over RTSP, locally and without the cloud. Includes the exact Reolink RTSP URL format for the main and sub streams."
sidebar_label: Reolink
keywords:
  - reolink rtsp url
  - reolink gladys
  - reolink home automation
  - reolink rtsp
  - connect reolink camera
  - reolink local
---

import JsonLd from '@site/src/components/seo/JsonLd';

Reolink cameras are an affordable, widely used choice, and they work great with Gladys Assistant. They are actually the cameras we [recommend for Gladys](/docs/installation/recommended-hardware).

Reolink cameras expose a standard **RTSP** stream, so they connect through the generic [camera integration](/docs/integrations/camera). Gladys talks to the camera directly on your local network, which means your video feed stays at home and never transits through the Reolink cloud.

## Reolink RTSP URL

Reolink exposes two RTSP streams on port `554`: a high resolution **main** stream and a lighter **sub** stream. Replace `username`, `password` and the IP address with your own values:

```
# Main (high resolution) stream, H.264:
rtsp://username:password@192.168.1.20:554/h264Preview_01_main

# Sub (low resolution) stream, H.264:
rtsp://username:password@192.168.1.20:554/h264Preview_01_sub
```

If your Reolink camera streams in H.265 (HEVC), swap the codec in the path:

```
rtsp://username:password@192.168.1.20:554/h265Preview_01_main
```

A few things worth knowing:

- The `01` in the path is the channel number. On a standalone camera it is always `01`. If the camera is connected through a Reolink NVR, increment it for each channel (`02`, `03`, and so on).
- For a smooth live view on your dashboard, the **sub** stream is often enough and puts less load on your Gladys server. Use the **main** stream when you want full resolution.
- Some battery powered Reolink models (for example the Argus range) do not expose an RTSP stream. On those, RTSP is not available and the camera cannot be added to Gladys.

## Enable RTSP on your Reolink camera

RTSP is enabled by default on most Reolink cameras, but if the stream does not respond you can check it:

1. Open the Reolink app (or the web interface at the camera's IP address) and log in.
2. Go to **Settings → Network → Advanced → Port Settings** (or **Server Settings** depending on the model).
3. Make sure **RTSP** is enabled and note the port (`554` by default).

It is also good practice to create a dedicated user for Gladys instead of using the `admin` account, so you can revoke it at any time.

## Test the URL in VLC

Before adding the camera to Gladys, confirm your RTSP URL works in [VLC](https://www.videolan.org/vlc/): open **File → Open Network...**, paste the URL and check that the stream plays. If it works in VLC, it will work in Gladys.

## Add your Reolink camera to Gladys

Once your RTSP URL is confirmed, adding the camera to Gladys takes a minute:

1. In Gladys, go to the **Integrations** tab and open the **Camera** integration.
2. Click **New**, then paste your Reolink RTSP URL and give the camera a name.
3. Click **Test connection**, then **Save**.
4. Add the camera to your dashboard, and optionally ask Gladys to show it from the chat or on Telegram.

The full walkthrough with screenshots is on the [camera integration page](/docs/integrations/camera).

## Frequently asked questions

### What is the RTSP URL of a Reolink camera?

Reolink cameras expose two RTSP streams on port 554: the main (high resolution) stream at `rtsp://username:password@CAMERA_IP:554/h264Preview_01_main` and a lighter sub stream at `rtsp://username:password@CAMERA_IP:554/h264Preview_01_sub`. Replace the username, password and IP with your own. If your camera uses H.265, swap `h264` for `h265` in the path.

### Does the Reolink integration work without the cloud?

Yes. Gladys connects to your Reolink camera directly over your local network using its RTSP stream, so the video never goes through the Reolink cloud and keeps working without an internet connection.

### Why does my Reolink RTSP URL not connect?

The most common causes are a wrong channel number (`01` for a single camera), the wrong codec (`h264` vs `h265`, main vs sub), incorrect credentials, or RTSP being disabled in the camera settings. Test the URL in VLC first: if VLC cannot open it either, the problem is with the URL or the camera, not with Gladys.

### Can I add a Reolink camera connected to a Reolink NVR?

Yes. Use the NVR's IP address and increment the channel number in the path for each camera, for example `h264Preview_02_main` for the second channel.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the RTSP URL of a Reolink camera?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Reolink cameras expose two RTSP streams on port 554: the main (high resolution) stream at rtsp://username:password@CAMERA_IP:554/h264Preview_01_main and a lighter sub stream at rtsp://username:password@CAMERA_IP:554/h264Preview_01_sub. Replace the username, password and IP with your own. If your camera uses H.265, swap h264 for h265 in the path.",
        },
      },
      {
        "@type": "Question",
        name: "Does the Reolink integration work without the cloud?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Gladys connects to your Reolink camera directly over your local network using its RTSP stream, so the video never goes through the Reolink cloud and keeps working without an internet connection.",
        },
      },
      {
        "@type": "Question",
        name: "Why does my Reolink RTSP URL not connect?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The most common causes are a wrong channel number, the wrong codec (h264 vs h265, main vs sub), incorrect credentials, or RTSP being disabled in the camera settings. Test the URL in VLC first: if VLC cannot open it either, the problem is with the URL or the camera, not with Gladys.",
        },
      },
      {
        "@type": "Question",
        name: "Can I add a Reolink camera connected to a Reolink NVR?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Use the NVR's IP address and increment the channel number in the path for each camera, for example h264Preview_02_main for the second channel.",
        },
      },
    ],
  }}
/>

