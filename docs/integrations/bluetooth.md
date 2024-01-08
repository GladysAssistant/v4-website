---
id: bluetooth
title: Manage presence with Bluetooth detection
sidebar_label: Bluetooth
---

# Manage presence with Bluetooth detection

**Bluetooth** integration is useful for presence management.

There are Bluetooth key rings like the [NUT key ring](https://www.amazon.fr/NUT-%C3%89crou-Mini-Bluetooth-Tracker/dp/B01M664D98/ref=sr_1_1?tag=gladproj-21) that constantly signal their presence via Bluetooth.

With this kind of key fob, Gladys can detect when you are (or are not) at home, simply by scanning for nearby bluetooth devices.

**Note:** This trick doesn't work with all Bluetooth devices. It only works with Bluetooth devices that transmit continuously, and that don't obfuscate their Bluetooth address, as most phones do, for example. Generally speaking, the "dumber" the device, the better it works! For example, I had a Fitbit Force 2 bracelet, and it worked. However, it doesn't work with an Apple Watch.

## Configure your Bluetooth device

Go to `Integration -> Bluetooth`, `Discover` tab. Scan the surrounding Bluetooth devices, and look for the device you want to add.

![Configure bluetooth device](../../static/img/docs/en/configuration/bluetooth/configure-device.png)

Then activate the `Use this device as a presence detector` option.

Give this device a unique name, and add it to Gladys.

This screen should appear:

![Configure bluetooth device](../../static/img/docs/en/configuration/bluetooth/device-list.png)

Now go to the `Presence scanner` screen, and check that your configuration looks like this:

![Configure bluetooth device](../../static/img/docs/en/configuration/bluetooth/presence-scanner.png)

All set on the Bluetooth side!

## Manage presence in scenes

### A "homecoming" scene

Now we're going to create a scene that will mark you as "present at home" when this Nut keyring is detected.

Go to the `Scenes` tab, and create a scene like this one:

![Return home scene](../../static/img/docs/en/configuration/bluetooth/back-at-home-scene.png)

The scene is very simple.

WHEN "the key fob is detected" THEN "put user 'Tony' as present at home".

### A "leaving home" scene

To manage leaving the house, I recommend making a periodically executed scene that will check whether your NUT keyring has recently been detected at home, or not.

If yes, Gladys will do nothing. If not, Gladys will mark the user as absent.

The scene should look like this:

![Scene leaving home](../../static/img/docs/en/configuration/bluetooth/left-home-scene.png)

You can play around with the settings to suit your home. If you feel that 10 minutes is too short to be put as absent, you can extend it to 20 minutes to avoid "false positives" 😀

## Display presence on the dashboard

You can now add a **Users present** widget to your dashboard to display the presence of different users at home.

Go to Gladys' dashboard and click on the `edit` button to modify the dashboard.

![edit_dashbord](<../../static/img/docs/en/configuration/bluetooth/edit dashboard.png>)

Click on `add +` then select the `Users present` widget, which you can move to a column.

Select the user(s) you wish to display, and click on `Save`.

That's it! Your widget is now visible on the dashboard.

![Presence dashboard](../../static/img/docs/en/configuration/bluetooth/user-presence-dashboard.png)

Please post a message on [the forum](https://en-community.gladysassistant.com), if you need any help.