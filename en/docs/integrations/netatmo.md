---
id: netatmo
title: Netatmo
sidebar_label: Netatmo
---

## Prerequisites

### Step 1 - Compatible devices and mobile applications Netatmo

To be able to add your Netatmo devices in Gladys, they must first be added in their respective applications that you will have to download from the play store or the Apple store.
Below are listed only devices compatible with Gladys:

#### "Security" application :
![Configure an app 1](/en/img/docs/configuration/netatmo/configure-netatmo-application-security.jpg)
- "NOC" outdoor surveillance cameras
- "NACamera" indoor surveillance cameras
- "NIS" sirens associated with indoor cameras
- "NACamDoorTag" door / window opening sensors

#### "Netatmo" application :
![Configure an app 2](/en/img/docs/configuration/netatmo/configure-netatmo-application-netatmo.jpg)
- "NAMain" weather stations
- Rain gauges associated with weather stations
- Anemometers associated with weather stations
- Outdoor hygrometers associated with weather stations
- Indoor hygrometers associated with weather stations (up to 3)

#### "Energy" application :
![Configure an app 3](/en/img/docs/configuration/netatmo/configure-netatmo-application-energie.jpg)
- "NRV" valves
- "NATherm1" thermostats

#### "Home Coach" application :
![Configure an app 4](/en/img/docs/configuration/netatmo/configure-netatmo-application-home-coach.jpg)
- "NHC" Healthy homes coach

### Step 2 - Netatmo connect

Then, you must go to the [Netatmo connect](https://dev.netatmo.com/) page and click on the "LOG IN" link to create an account with your email address and a password.

#### Creating an "app"

Go to your [My app](https://dev.netatmo.com/apps/) page and click on the "Create" button to create a link to your Gladys account. Enter the necessary information (fields with an \*) as the example below :
![Configure an api 1](/en/img/docs/configuration/netatmo/configure-netatmo-connect-1.jpg)

#### Retrieving connection client credentials

By clicking on "Save", you will then have access to the necessary information in the box below (see [Step 1 of the tutorial](/en/docs/integrations/netatmo#step-1---compatible-devices-and-mobile-applications-netatmo))
![Configure an api 2](/en/img/docs/configuration/netatmo/configure-netatmo-connect-2.jpg)

## Tutorial

To add your Netatmo devices in Gladys, go to `Integrations / Netatmo`.
![Netatmo Integration](/en/img/docs/configuration/netatmo/integrations-netatmo.jpg)

### Step 1: Netatmo API connection

From the `Settings` tab,
![Netatmo Integration - To Parameter](/en/img/docs/configuration/netatmo/integrations-netatmo-vers-parametre.jpg)
Enter the information retrieved during [the previous step](/en/docs/integrations/netatmo#step-2---netatmo-connect) :

- Enter your email address for connecting to your "Netatmo connect" account
- The password of the same account
- The customer ID,
- The secret client,

Finally click on "Save".
After a few seconds you should now be connected with the Netatmo API.
![Netatmo Integration - Parameter](/en/img/docs/configuration/netatmo/integrations-netatmo-parametre.jpg)

### Step 2: Discovery Netatmo devices

In the `Discovery Netatmo devices` tab,
![Netatmo Integration - Discovery](/en/img/docs/configuration/netatmo/integrations-netatmo-decouverte-appareils.jpg)

You will find all the devices that you had previously configured on the different applications [from step 1 of the prerequisites](/en/docs/integrations/netatmo#step-1---compatible-devices-and-mobile-applications-netatmo). They are referenced by their name defined in their respective application. You can integrate them with a simple click on the "Add" button. The button then changes to "Already created".

![Netatmo Integration - Discovery - Already created](/en/img/docs/configuration/netatmo/integrations-netatmo-decouverte-appareils-deja-cree.jpg)

On this page you will also find an "Update datas" button to refresh the device names if they are changed in Netatmo applications.

![Netatmo Integration - Discovery - Update](/en/img/docs/configuration/netatmo/integrations-netatmo-decouverte-appareils-mettre-a-jour.jpg)


### Step 3: Define a room for the devices / Modify the functionalities

In the `Netatmo devices` tab, this time you will find the added devices with their characteristics.

![Netatmo Integration - Netatmo devices](/en/img/docs/configuration/netatmo/integrations-netatmo-appareils-netatmo.jpg)

#### 1) Define a room

To be able to display a device on the dashboard, you must first associated a room to it. Select it in the following drop-down menu:
![Netatmo Integration - Netatmo devices - Select room](/en/img/docs/configuration/netatmo/integrations-netatmo-appareils-netatmo-selection-piece.jpg)

Then click on the "Save" button.

#### 2) Modify features

You can change the display name of the features that will appear on the home page. In addition, some features can be displayed in different ways. Click on the "Modify" button of a device plug :

- The index health of the Home Coach: 
![Integration Netatmo - Home Coach Index](/en/img/docs/configuration/netatmo/integrations-netatmo-appareils-netatmo-modifier-home-coach.jpg)
  - Display in numbers from 0 to 4:

  ![Integration Netatmo - Home Coach Index-Number](/en/img/docs/configuration/netatmo/integrations-netatmo-dashboard-home-coach-index-number.jpg)

  - Or display in state:

  ![Integration Netatmo - Homes Coach Index-State](/en/img/docs/configuration/netatmo/integrations-netatmo-dashboard-home-coach-index-string.jpg)

- The wind angle of the weather station anemometer 
![Integration Netatmo - Anemometer Angle](/en/img/docs/configuration/netatmo/integrations-netatmo-appareils-netatmo-modifier-anemometre.jpg)

  - Display in degrees:

  ![Integration Netatmo - Anemometer Angle-Degrees](/en/img/docs/configuration/netatmo/integrations-netatmo-dashboard-anemometre-angle-degrees.jpg)

  - Or display in cardinal point:

  ![Integration Netatmo - Anemometer Angle-Cardinal Point](/en/img/docs/configuration/netatmo/integrations-netatmo-dashboard-anemometre-angle-point-cardinal.jpg)

  Don't forget to save your changes before leaving the page !!

## Progress and forecast of service evolution

### February 2021

To date, the following devices :
- Smoke detector "NSD",
- Bell "NDB"

Cannot be traced back to Gladys for the moment because the API does not offer status feedback. However, the "webhooks" are under development via Gladys Plus. For all those who have a subscription, it will soon be possible to retrieve the status feedbacks of these devices.

The status feedbacks of all the devices seen in [step 1 of the prerequisites](/en/docs/integrations/netatmo#step-1---compatible-devices-and-mobile-applications-netatmo) are functional. The controls are being programmed.

You're done! You can now add the devices and features you want to enjoy on your home page or create your alert scenes.



