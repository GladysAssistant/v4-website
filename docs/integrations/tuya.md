---
id: tuya
title: Tuya
sidebar_label: Tuya
---

## Connect Tuya in Gladys

1. Create an account on [iot.tuya.com](http://iot.tuya.com).

2. Create a new cloud project in the « Cloud » → « Development » → « Create Cloud Project » section.

![Tuya Gladys integration, create cloud project](../../static/img/docs/en/configuration/tuya/create-cloud-project.jpg)

3. Choose a name for your project, and fill in the different fields:

- Project Name : Name of your project (for example "Gladys");
- Industry : Smart Home ;
- Development method : Smart Home ;
- Data Center : Central Europe Data Center (even if you live in Western Europe, it's better).

Click on « Create ».

![Tuya Gladys integration, create project](../../static/img/docs/en/configuration/tuya/create-project.png)

4. Authorize the following API services:
   (It's selected by default)

- IoT Core
- Authorization Token Management
- Smart Home Scene Linkage
- Data Dashboard Service

![Tuya Gladys integration, select api services](../../static/img/docs/en/configuration/tuya/select-api-services.png)

5. Copy the information from "Access ID" and "Access Secret" in Gladys

![Tuya Gladys integration, access id and access secret](../../static/img/docs/en/configuration/tuya/access-secret-key.jpeg)

6. Go to the Devices tab then Link Tuya App Account and click on the Add App Account button on the right.

![Tuya Gladys integration, lint account](../../static/img/docs/en/configuration/tuya/link-account.png)

7. Scan the QR Code with your Smart Life application by going to Profile then on the code scanner at the top right.

![Tuya Gladys integration, qr code](../../static/img/docs/en/configuration/tuya/qr-code.png)

8. Select Automatic Link then Read, Write and Manage and validate with OK.

![Tuya Gladys integration, link account auth](../../static/img/docs/en/configuration/tuya/link-account-auth.png)

9. Copy the information "App account UID" in Gladys

![Tuya Gladys integration, app account uid](../../static/img/docs/en/configuration/tuya/link-account-auth.png)

10. Save the configuration on Gladys, go to the "Tuya Discovery" tab and TADAM... your devices have appeared 🙂

![Tuya Gladys integration, save configuration](../../static/img/docs/en/configuration/tuya/save-configuration.jpeg)

## FAQ

### Is the scan not working?

On the forum, Francis66 had this issue, and he resolved it this way:

- I no longer had access rights to the API resources
  - Access to Cloud Develop Base Resource and IoT Core was lost because the trial period had expired.
- For the region: I had selected Western Europe instead of Central Europe.

If you have any questions, ask it on [our forum](https://en-community.gladysassistant.com/).
