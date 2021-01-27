---
id: netatmo
title: Netatmo
sidebar_label: Netatmo
---

## Prerequisites

### Step 1 - Compatible devices and Netatmo mobile applications

To be able to add your Netatmo devices in Gladys, they must first be added in their respective applications that you will have to download from the play store or the Apple store.
Below are listed only devices compatible with Gladys:

#### "Security" application ![Configure an app 1](/en/img/docs/configuration/netatmo/configure-netatmo-application-security.jpg)
- "NOC" outdoor surveillance cameras
- "NACamera" indoor surveillance cameras
- "NIS" sirens associated with indoor cameras
- "NACamDoorTag" door / window opening sensors

#### "Netatmo" application ![Configure an app 2](/en/img/docs/configuration/netatmo/configure-netatmo-application-netatmo.jpg)
- "NAMain" weather stations
- Rain gauges associated with weather stations
- Anemometers associated with weather stations
- Outdoor hygrometers associated with weather stations
- Indoor hygrometers associated with weather stations (up to 3)

#### "Energy" application ![Configure an app 3](/en/img/docs/configuration/netatmo/configure-netatmo-application-energie.jpg)
- "NRV" valves
- "NATherm1" thermostats

#### Application "Home Coach" ![Configure an app 4](/en/img/docs/configuration/netatmo/configure-netatmo-application-home-coach.jpg)
- "NHC" Healthy homes coach

### Step 2 - Netatmo connect
You must then go to the [Netatmo connect](https://dev.netatmo.com/) page and click on the "LOG IN" link to create an account with your email address and a password.
#### Creating an "app"
Then go to your [My app](https://dev.netatmo.com/apps/) page and click on the "Create" button to create a link to your Gladys account. Enter the necessary information (fields with an *) as the example below :
![Configure an api 1](/en/img/docs/configuration/netatmo/configure-netatmo-connect-1.jpg)

#### Retrieving connection client identifiers
By clicking on "Save", you will then have access to the necessary information in the box below (see [Step 1 of the tutorial](/en/docs/integrations/netatmo#etape-1--page-netatmo-connection))
![Configure an api 2](/en/img/docs/configuration/netatmo/configure-netatmo-connect-2.jpg)

## Tutorial

To add your Netatmo devices in Gladys, go to `Integrations / Netatmo`.
![Netatmo Integration](/en/img/docs/configuration/netatmo/integrations-netatmo.jpg)

### Step 1: Netatmo API connection
From the `Parameter` tab, 
![Netatmo Integration - To Parameter](/en/img/docs/configuration/netatmo/integrations-netatmo-vers-parametre.jpg)
Enter the information retrieved during [the previous step](/en/docs/integrations/netatmo#r%C3%A9cup%C3%A9ration-des-identifiants-clients-de-connection) : 
- Enter your email address for connecting to your "Netatmo connect" account
- The password of the same account
- The customer ID,
- The secret client,

Finally click on "Save".
After a few seconds you should now be connected with the Netatmo API.
! [Netatmo Integration - Parameter](/en/img/docs/configuration/netatmo/integrations-netatmo-parametre.jpg)

### Step 2: Discover Netatmo devices

In the `Netatmo device discovery` tab,
![Netatmo Integration - Discovery](/en/img/docs/configuration/netatmo/integrations-netatmo-decouverte-appareils.jpg)

You will find all the devices that you had previously configured on [the applications](/en/docs/integrations/netatmo#application-security). They are referenced by their name defined in their respective application. You can integrate these with a simple click on the "Add" button. They then disappear from the list.

By refreshing the page (F5 key or via the browser), the previously installed devices are found at the end of the list and the "Add" button is replaced by a "Already created" box. The latter is disabled for the moment and will be part of a future update.

![Netatmo Integration - Parameter](/en/img/docs/configuration/netatmo/integrations-netatmo-decouverte-appareils-deja-cree.jpg)

### Step 3: Define a room for the devices / Modify the functionalities

In the `Netatmo devices` tab, this time you will find the added devices with their characteristics.

![Netatmo Integration - Netatmo devices](/en/img/docs/configuration/netatmo/integrations-netatmo-appareils-netatmo.jpg)

#### 1) Define a room

To be able to display a device on the dashboard, a part must first be associated with it. Select it in the following drop-down menu:

And There you go !
