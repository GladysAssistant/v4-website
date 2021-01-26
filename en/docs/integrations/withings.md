---
id: withings
title: Withings
sidebar_label: Withings
---

This integration allows you to retrieve data from Withings devices in Gladys Assistant.

## Prerequisite

To integrate the data from your Withings devices you must first have configured them in your Withings account (https://account.withings.com/connectionwou/account_login).


If your devices support multi-users it is necessary to configure one Withings account per user, details available here: https://support.withings.com/hc/fr/articles/218554788-Body-Param%C3%A9trer-la-balance-pour-plusieurs-utilisateurs.

## Withings partner account configuration

Creation of a 'partner' account to exchange data with Gladys: https://account.withings.com/partner/account_login
After you have authenticated with your user account fill out the form like this:

![Créez un compte Withings partner](/en/img/docs/configuration/withings/withings-partner-config.png)

WARNING: you will have to adapt the callback url with the url you use to access Gladys, an HTTP url can only be used in Dev 'environment', an https url is necessary to use the Prod environment.

Then click on "Validate".

The client_id and secret_id keys will be copied into the Withings integration in Gladys.

## Withings integration in Gladys

In Gladys go to the Withings settings page:
![Configuration intégration Withings dans Gladys](/en/img/docs/configuration/withings/withings-settings-config-0.png)

Go to the 'Settings' menu and fill in the fields:
1. client_id of the Withings partner account
2. client_secret of the Withings partner account
![Configuration intégration Withings dans Gladys](/en/img/docs/configuration/withings/withings-settings-config-1.png)

Then click on "Connect Now".

You are redirected to the withigs authorization site:
![Configuration intégration Withings dans Gladys](/en/img/docs/configuration/withings/withings-settings-config-2.png)

Click on "Authorize".

You are back on the Gladys interface, if everything went well you will see the next page:
![Configuration intégration Withings dans Gladys](/en/img/docs/configuration/withings/withings-settings-config-3.png)

You can click on the "Devices" link in the left menu to view the syncronized devices:
![Configuration intégration Withings dans Gladys](/en/img/docs/configuration/withings/withings-settings-config-4.png)

You can now go to Gladys' "Dashboard" page, click on "Edit" to add the "Health" box to your dashboard:
1. Select the list of devices/measures you wish to see on this box
![Configuration intégration Withings dans Gladys](/en/img/docs/configuration/withings/withings-dashboard-config.png)

Back on Gladys' "Dashboard", the health box will be displayed:
![Configuration intégration Withings dans Gladys](/en/img/docs/configuration/withings/withings-dashboard-box.png)

That's it!

