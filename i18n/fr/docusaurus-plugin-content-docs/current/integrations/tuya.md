---
id: tuya
title: Tuya
sidebar_label: Tuya
---

## Connecter Tuya à Gladys

1. Créer un compte sur [iot.tuya.com](http://iot.tuya.com).

2. Créer un project cloud dans la section « Cloud » → « Development » → « Create Cloud Project »

![Tuya Gladys integration, create cloud project](../../../../../static/img/docs/en/configuration/tuya/create-cloud-project.jpg)

3. Choisissez un nom de projet, renseignez les différents champs :

* Project Name : Le nom de votre project (ex: Gladys)
* Industry : Smart Home ;
* Development method : Smart Home ;
* Data Center : Central Europe Data Center (même si vous vivez en Europe de l’Ouest, c’est mieux, sinon sélectionnez le datacenter le plus proche de chez vous).

Cliquez sur « Create ».

![Tuya Gladys integration, create project](../../../../../static/img/docs/en/configuration/tuya/create-project.png)


4. Autorisez les services API suivants :
   (Elles sont normalement sélectionnées par default)
* IoT Core 
* Authorization Token Management 
* Smart Home Scene Linkage 
* Data Dashboard Service

![Tuya Gladys integration, select api services](../../../../../static/img/docs/en/configuration/tuya/select-api-services.png)

5. Copier les informations d’« Access key » et de « Secret Key » dans Gladys

![Tuya Gladys integration, access id and access secret](../../../../../static/img/docs/en/configuration/tuya/access-secret-key.jpeg)

6. Allez sur l’onglet Devices puis Link Tuya App Account et cliquez sur le bouton Add App Account à droite.

![Tuya Gladys integration, lint account](../../../../../static/img/docs/en/configuration/tuya/link-account.png)

7. Scannez le QR Code avec votre application Smart Life en vous rendant dans Profil puis sur le scanner de codes situé en haut à droite.

![Tuya Gladys integration, qr code](../../../../../static/img/docs/en/configuration/tuya/qr-code.png)

8. Sélectionnez Automatic Link puis Read, Write and Manage et validez avec OK .

![Tuya Gladys integration, link account auth](../../../../../static/img/docs/en/configuration/tuya/link-account-auth.png)

9. Copier l’information « App account UID » dans Gladys.

![Tuya Gladys integration, app account uid](../../../../../static/img/docs/en/configuration/tuya/link-account-auth.png)

10. Enregistrer la configuration sur Gladys, allez dans l’onglet « Découverte Tuya » et TADAM… vos appareils sont apparus 🙂

![Tuya Gladys integration, save configuration](../../../../../static/img/docs/en/configuration/tuya/save-configuration.jpeg)

## FAQ
