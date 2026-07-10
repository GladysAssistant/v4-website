---
id: camera
title: "IP camera integration: add any RTSP or HTTP camera to Gladys"
description: "Add IP cameras to Gladys Assistant using their RTSP or HTTP stream and view them live on your dashboard. Works with any camera brand, locally and without the cloud."
sidebar_label: Camera
keywords:
  - rtsp camera
  - ip camera home automation
  - camera integration
  - rtsp stream url
  - http camera stream
---

import JsonLd from '@site/src/components/seo/JsonLd';

Gladys supports cameras that expose a RTSP or HTTP stream. Because Gladys connects to the camera directly on your local network, your video feed stays at home and never transits through a manufacturer's cloud.

You'll first need to find RTSP/HTTP URL of the stream. 

:::note
You will find the URL in your device's user manual or on the manufacturer's website 
:::

Here is an example of a RTSP URL:

```
rtsp://username:password@192.168.1.20/live/ch00_0
```

Here is an example of an HTTP URL:

```
http://user:password@192.168.1.20/video?profile=0
```

If you can't find this information on your camera manual, try using this website: [https://www.ispyconnect.com/sources.aspx](https://www.ispyconnect.com/sources.aspx) (this is a database of cameras with their relevant connection information).

There is a even a built-in URL generator.

For example, this is for a Xiaomi camera:

![RTSP camera URL generator iSpyConnect](../../static/img/docs/en/configuration/camera/camera-ispy.jpg)

If you don't find the iformation you are looking for on this website, I suggest you to Google "your camera name + RTSP". This should bring up search results that you can use to see if there is an open stream available.

:::tip
Using a Reolink camera? We have a dedicated guide with the exact RTSP URL format for Reolink: [Reolink camera in Gladys](/docs/integrations/reolink).
:::

## Trying to display the stream in VLC

You can connect to your camera's stream with [VLC](https://www.videolan.org/vlc/).

Open VLC and click on "File" -> "Open a Network..."

![VLC open a network stream](../../static/img/docs/en/configuration/camera/camera-vlc-step-1.jpg)

Then, enter the URL of your RTSP or HTTP stream

![VLC open a network stream](../../static/img/docs/en/configuration/camera/camera-vlc-step-2.jpg)

Done! 

If the URL is correct, you should see your camera stream in VLC.

![VLC open a network stream](../../static/img/docs/en/configuration/camera/camera-vlc-step-3.jpg)

## Connecting your RTSP camera to Gladys Assistant

If you have managed to see your camera stream in VLC, it should work in Gladys Assistant as well.

Go to the "Integrations" tab in Gladys, then click on the "Camera" integration:

![Add a camera to Gladys Assistant](../../static/img/docs/en/configuration/camera/camera-step-1.jpg)

Click on "New"

![Add a camera to Gladys Assistant](../../static/img/docs/en/configuration/camera/camera-step-2.jpg)

Fill the form

![Add a camera to Gladys Assistant](../../static/img/docs/en/configuration/camera/camera-step-3.jpg)

You can then try the stream by clicking on "Test connection". If it doesn't work, are you sure that your Gladys hardware is on the same network as your camera? Are credentials correct?

Then, you can click on "Save".

![Add a camera to Gladys Assistant](../../static/img/docs/en/configuration/camera/camera-step-4.jpg)

## Add your camera to Gladys Assistant dashboard

Go to the Gladys dashboard and click on "Edit"

![Add a camera to Gladys Assistant](../../static/img/docs/en/configuration/camera/camera-step-5.jpg)

Click on "+", then choose the camera box

![Add a camera to Gladys Assistant](../../static/img/docs/en/configuration/camera/camera-step-6.jpg)

Select your camera, then click on "Save"

![Add a camera to Gladys Assistant](../../static/img/docs/en/configuration/camera/camera-step-7.jpg)

Voilà ! Your camera should be visible.

![Add a camera to Gladys Assistant](../../static/img/docs/en/configuration/camera/camera-step-8.jpg)

## Send a message to Gladys Assistant to see a camera image

Go to the "Chat" tab, and ask Gladys "Show me the camera in the XXXX" (where XXXX is the room where the camera is)

And... magic!

![Ask for a camera image in Gladys Assistant](../../static/img/docs/en/configuration/camera/chat-camera-en.jpg)

It should work in Telegram as well, if you have configured Telegram in Gladys.

## Frequently asked questions

### How do I find the RTSP URL of my camera?

Check your camera's user manual or the manufacturer's website first, as the path differs between brands. If you can't find it, the [iSpyConnect camera database](https://www.ispyconnect.com/sources.aspx) lists connection details and even generates URLs for most models, or you can search "your camera model + RTSP" online. For Reolink cameras, see our [dedicated Reolink guide](/docs/integrations/reolink).

### Which cameras work with Gladys?

Any IP camera that exposes a standard RTSP or HTTP stream works with Gladys, regardless of the brand. USB webcams are also supported. If your camera only works through a closed manufacturer app or cloud, it will not be compatible.

### Does Gladys send my camera feed to the cloud?

No. Gladys connects to your camera directly on your local network using its RTSP or HTTP stream, so the video stays inside your home. This is a core part of Gladys being a local and open source home automation solution.

### The stream won't connect, what should I check?

First confirm the URL works in [VLC](https://www.videolan.org/vlc/). If VLC can't open it either, check that the machine running Gladys is on the same network as the camera, that the credentials are correct, and that RTSP is enabled in the camera's settings.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I find the RTSP URL of my camera?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Check your camera's user manual or the manufacturer's website first, as the path differs between brands. If you can't find it, the iSpyConnect camera database lists connection details and even generates URLs for most models, or you can search for your camera model plus RTSP online.",
        },
      },
      {
        "@type": "Question",
        name: "Which cameras work with Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Any IP camera that exposes a standard RTSP or HTTP stream works with Gladys, regardless of the brand. USB webcams are also supported. If your camera only works through a closed manufacturer app or cloud, it will not be compatible.",
        },
      },
      {
        "@type": "Question",
        name: "Does Gladys send my camera feed to the cloud?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Gladys connects to your camera directly on your local network using its RTSP or HTTP stream, so the video stays inside your home. This is a core part of Gladys being a local and open source home automation solution.",
        },
      },
      {
        "@type": "Question",
        name: "The camera stream won't connect, what should I check?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "First confirm the URL works in VLC. If VLC can't open it either, check that the machine running Gladys is on the same network as the camera, that the credentials are correct, and that RTSP is enabled in the camera's settings.",
        },
      },
    ],
  }}
/>
