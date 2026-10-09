---
id: openweather
title: OpenWeather
description: "Muestra las previsiones meteorológicas en Gladys Assistant con OpenWeather: crea una cuenta, obtén tu clave API y añade un widget del tiempo a tu panel de control."
sidebar_label: OpenWeather
---

Esta integración te permite mostrar la previsión meteorológica en Gladys Assistant.

:::info[Desde Gladys 4.85, el tiempo también puede venir de una integración externa]

Los proveedores meteorológicos ahora pueden crearse como [integraciones externas](/es/docs/integrations/external/), que admiten cualquier proveedor (Météo France, Open-Meteo, AccuWeather…) y son compatibles con las alertas meteorológicas, las imágenes del proveedor y los desencadenadores de escena de alertas meteorológicas. Al instalar una, esta tiene prioridad automáticamente sobre este servicio OpenWeather integrado, por lo que ahora aparece marcado como obsoleto en el catálogo.

:::

## Crear una cuenta en OpenWeather

Para configurar OpenWeather, ve primero a [https://openweathermap.org/api](https://openweathermap.org/api).

Haz clic en "Subscribe" debajo de "Current Weather Data".

![Crear una cuenta en OpenWeather](../../../../../static/img/docs/en/configuration/openweather/create-account-step-1.jpg)

Después, haz clic en "Get API key"

![Crear una cuenta en OpenWeather](../../../../../static/img/docs/en/configuration/openweather/create-account-step-2.jpg)

Introduce tus datos para crear una cuenta.

![Crear una cuenta en OpenWeather](../../../../../static/img/docs/en/configuration/openweather/create-account-step-3.jpg)

Rellena esta ventana como quieras. Con tu nombre basta :)

![Crear una cuenta en OpenWeather](../../../../../static/img/docs/en/configuration/openweather/create-account-step-4.jpg)

Confirma tu correo electrónico y recibirás otro correo con tu clave API.

![Crear una cuenta en OpenWeather](../../../../../static/img/docs/en/configuration/openweather/create-account-step-5.jpg)

Esta clave API no es válida inmediatamente, **tendrás que esperar un poco**.

## Introducir la clave API en Gladys Assistant

Ve a "Integraciones" -> "OpenWeather". Introduce tu clave API y haz clic en "Guardar".

![Añadir la clave API de OpenWeather en Gladys Assistant](../../../../../static/img/docs/en/configuration/openweather/add-api-key.jpg)

## Añadir un widget del tiempo al panel de control

Ve al panel de control y haz clic en "Editar".

![Configurar OpenWeather en Gladys Assistant](../../../../../static/img/docs/en/configuration/openweather/configure-gladys-1.jpg)

Añade un widget del tiempo.

![Configurar OpenWeather en Gladys Assistant](../../../../../static/img/docs/en/configuration/openweather/configure-gladys-2.jpg)

Selecciona tu casa. Se usarán la latitud y la longitud de tu casa para obtener el tiempo.

Haz clic en "Guardar".

![Configurar OpenWeather en Gladys Assistant](../../../../../static/img/docs/en/configuration/openweather/configure-gladys-3.jpg)

¡Listo!

![Configurar OpenWeather en Gladys Assistant](../../../../../static/img/docs/en/configuration/openweather/configure-gladys-4.jpg)
