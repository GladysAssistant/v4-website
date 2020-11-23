---
id: camera
title: Camera
sidebar_label: Camera
---

Gladys supports cameras that expose a RTSP or HTTP stream.

You'll first need to find in your user manual or on the camera's website the RTSP/HTTP URL of the stream.

Here is an example of a RTSP URL:

```
rtsp://username:password@192.168.1.20/live/ch00_0
```

Here is an example of an HTTP URL:

```
http://user:password@192.168.1.20/video?profile=0
```

If you don't find this information on your camera manual, you can use this website: [https://www.ispyconnect.com/sources.aspx](https://www.ispyconnect.com/sources.aspx), a database of cameras with their connection information.

There is a even a built-in URL generator.

For example, this is for a Xiaomi camera:

![RTSP camera URL generator iSpyConnect](/en/img/docs/configuration/camera/camera-ispy.png)

If you don't find anything on this website either, I suggest you to Google "your camera name + RTSP" to see if there is an open stream available.

## Trying to display the stream in VLC

It's possible to try connecting to the stream thanks to the great [VLC](https://www.videolan.org/vlc/) software.

Open VLC and click on "File" -> "Open a Network..."

![VLC open a network stream](/en/img/docs/configuration/camera/camera-vlc-step-1.png)

Then, enter the URL of your RTSP or HTTP stream

![VLC open a network stream](/en/img/docs/configuration/camera/camera-vlc-step-2.png)

Done! If the URL is correct, you should see your camera stream in VLC.

![VLC open a network stream](/en/img/docs/configuration/camera/camera-vlc-step-3.png)

## Connecting your RTSP camera to Gladys Assistant

As soon as your camera works in VLC, it should work in Gladys Assistant as well.

Go to the "Integrations" tab in Gladys, then click on the "Camera" integration:

![Add a camera to Gladys Assistant](/en/img/docs/configuration/camera/camera-step-1.png)

Click on "New"

![Add a camera to Gladys Assistant](/en/img/docs/configuration/camera/camera-step-2.png)

Fill the form

![Add a camera to Gladys Assistant](/en/img/docs/configuration/camera/camera-step-3.png)

You can then try the stream by clicking on "Test connection". If it doesn't work, are you sure that your Gladys hardware is on the same network as your camera? Are credentials correct?

Then, you can click on "Save".

![Add a camera to Gladys Assistant](/en/img/docs/configuration/camera/camera-step-4.png)

## Add your camera to Gladys Assistant dashboard

Visit Gladys dashboard and click on "Edit"

![Add a camera to Gladys Assistant](/en/img/docs/configuration/camera/camera-step-5.png)

Click on "+", then choose the camera box

![Add a camera to Gladys Assistant](/en/img/docs/configuration/camera/camera-step-6.png)

Select your camera, then click on "Save"

![Add a camera to Gladys Assistant](/en/img/docs/configuration/camera/camera-step-7.png)

Voilà ! Your camera should be visible

![Add a camera to Gladys Assistant](/en/img/docs/configuration/camera/camera-step-8.png)

## Send a message to Gladys Assistant to see a camera image

Go to the "Chat" tab, and ask Gladys "Show me the camera in the XXXX" (where XXXX is the room where the camera is)

And... magic!

![Ask for a camera image in Gladys Assistant](/en/img/docs/configuration/camera/chat-camera-en.png)

It should work in Telegram as well if you configured Telegram in Gladys.
