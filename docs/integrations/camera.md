---
id: camera
title: Camera
sidebar_label: Camera
---

Gladys supports cameras that expose a RTSP or HTTP stream.

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
