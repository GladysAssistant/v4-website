---
id: openweather
title: OpenWeather
description: "Zeige mit OpenWeather Wettervorhersagen in Gladys Assistant an: Erstelle ein Konto, hole dir deinen API-Schlüssel und füge deinem Dashboard ein Wetter-Widget hinzu."
sidebar_label: OpenWeather
---

Mit dieser Integration kannst du die Wettervorhersage in Gladys Assistant anzeigen.

:::info[Seit Gladys 4.85 kann das Wetter auch aus einer externen Integration kommen]

Wetteranbieter lassen sich jetzt als [externe Integrationen](/de/docs/integrations/external/) umsetzen. Diese decken jeden Anbieter ab (Météo France, Open-Meteo, AccuWeather…) und unterstützen Wetterwarnungen, Bilder des Anbieters und die Szenen-Auslöser für Wetterwarnungen. Wird eine solche Integration installiert, hat sie automatisch Vorrang vor diesem eingebauten OpenWeather-Dienst, weshalb er im Katalog nun als veraltet markiert ist.

:::

## Ein OpenWeather-Konto erstellen

Um OpenWeather einzurichten, öffne zuerst [https://openweathermap.org/api](https://openweathermap.org/api).

Klicke unter „Current Weather Data“ auf „Subscribe“.

![OpenWeather-Konto erstellen](../../../../../static/img/docs/en/configuration/openweather/create-account-step-1.jpg)

Klicke dann auf „Get API key“

![OpenWeather-Konto erstellen](../../../../../static/img/docs/en/configuration/openweather/create-account-step-2.jpg)

Gib deine Daten ein, um ein Konto zu erstellen.

![OpenWeather-Konto erstellen](../../../../../static/img/docs/en/configuration/openweather/create-account-step-3.jpg)

Fülle dieses Fenster aus, wie du möchtest. Dein Vorname reicht völlig :)

![OpenWeather-Konto erstellen](../../../../../static/img/docs/en/configuration/openweather/create-account-step-4.jpg)

Bestätige deine E-Mail-Adresse, danach erhältst du eine weitere E-Mail mit deinem API-Schlüssel.

![OpenWeather-Konto erstellen](../../../../../static/img/docs/en/configuration/openweather/create-account-step-5.jpg)

Dieser API-Schlüssel ist nicht sofort gültig, **du musst etwas warten**.

## Den API-Schlüssel in Gladys Assistant eintragen

Öffne „Integrationen“ -> „OpenWeather“. Gib deinen API-Schlüssel ein und klicke auf „Speichern“.

![OpenWeather-API-Schlüssel in Gladys Assistant hinzufügen](../../../../../static/img/docs/en/configuration/openweather/add-api-key.jpg)

## Ein Wetter-Widget zum Dashboard hinzufügen

Öffne das Dashboard und klicke auf „Bearbeiten“.

![OpenWeather in Gladys Assistant einrichten](../../../../../static/img/docs/en/configuration/openweather/configure-gladys-1.jpg)

Füge ein Wetter-Widget hinzu.

![OpenWeather in Gladys Assistant einrichten](../../../../../static/img/docs/en/configuration/openweather/configure-gladys-2.jpg)

Wähle dein Haus aus. Breiten- und Längengrad deines Hauses werden verwendet, um das Wetter abzurufen.

Klicke auf „Speichern“.

![OpenWeather in Gladys Assistant einrichten](../../../../../static/img/docs/en/configuration/openweather/configure-gladys-3.jpg)

Voilà!

![OpenWeather in Gladys Assistant einrichten](../../../../../static/img/docs/en/configuration/openweather/configure-gladys-4.jpg)
