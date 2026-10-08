---
id: open-api
title: Open API
description: "Usa la Open API de Gladys Plus para enviar datos a tu hogar inteligente desde fuera de tu red: ubicación, valores de sensores y eventos, con una clave API segura."
sidebar_label: Open API
---

Ofrecemos en Gladys una Open API que permite a nuestros usuarios enviar datos desde fuera de su red.

Imagina que quiero enviar datos desde mi teléfono: mi ubicación, un evento cuando llego a casa, mi nivel de batería, un evento cuando mi teléfono está cerca de una etiqueta NFC, un evento cuando entro en una zona... Todo es posible con la Open API.

## Requisitos previos

Necesitas una suscripción de pago a Gladys Plus para usar la Open API.

Puedes suscribirte [aquí](/es/plus).

## Generar una nueva clave API {/* #generate-a-new-api-key */}

Primero, debes crear una nueva clave API en Gladys Plus.

Ve a [https://plus.gladysassistant.com/dashboard/settings/gateway-open-api](https://plus.gladysassistant.com/dashboard/settings/gateway-open-api).

Escribe un nombre para el dispositivo que usará tu clave API.

![Generar una clave de la Open API](../../../../../static/img/docs/en/plus/open-api/create-open-api-key.png)

Haz clic en "Generar", luego copia la clave API y guárdala en algún sitio: nunca volverá a mostrarse.

## Enviar un nuevo valor de sensor

Ahora, vamos a enviar un nuevo valor de sensor.

Escenario del tutorial: 

Supongamos que quieres enviar un evento cuando tu teléfono está en casa, y otro evento cuando tu teléfono ha salido de casa.

### Crear un dispositivo en Gladys

Puedes usar la integración "MQTT" para crear dispositivos, aunque no uses MQTT.

Vamos a crear un dispositivo para tu teléfono:

![Crear un dispositivo en Gladys Assistant](../../../../../static/img/docs/en/plus/open-api/create-device.png)

**Nota:** indica que tu teléfono es un sensor de movimiento, porque es un dispositivo binario ideal para este caso de uso. En realidad aquí no importa mucho, ya verás cómo lo usamos :)

Apunta el "external_id" de la función para más adelante, lo necesitaremos en la API.

### Enviar una petición a la API

Ahora, vamos a enviar una petición a la Open API para decir "mi teléfono está en casa".

Enviaremos:

```
POST https://api.gladysgateway.com/v1/api/device/state/YOUR_OPEN_API_KEY

Body:
{
	"device_feature_external_id": "mqtt:my-phone-presence",
	"state": 1
}
```

Puedes probar la API con [Insomnia](https://insomnia.rest/).

Si quieres decir lo contrario (mi teléfono ha salido de casa), puedes enviar:

```
POST https://api.gladysgateway.com/v1/api/device/state/YOUR_OPEN_API_KEY

Body:
{
	"device_feature_external_id": "mqtt:my-phone-presence",
	"state": 0
}
```

### Crear una escena en Gladys para marcar a tu usuario como "en casa"/"fuera de casa"

Puedes crear 2 escenas en Gladys para marcar a tu usuario como "fuera de casa" o "en casa" según si tu teléfono está cerca de casa:

![Escena de vuelta a casa](../../../../../static/img/docs/en/plus/open-api/back-at-home.png)

![Escena de salida de casa](../../../../../static/img/docs/en/plus/open-api/left-home.png)

## Usar Tasker o Atajos de iOS para activar esta API

En Android, puedes usar el fantástico [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&hl=fr&gl=US) para enviar una petición a la API cuando entras en casa o sales de ella (basándote en lo que quieras: ubicación GPS, activador NFC, detección de Wi-Fi o cualquier cosa que se te ocurra).

En iOS, puedes usar Atajos.

Ejemplo con iOS:

### Primer paso: instalar Atajos y crear un nuevo atajo

Instala la app "Atajos" desde el App Store. Está hecha por Apple y es gratuita.

Después, crea un nuevo atajo y añade una nueva acción web:

![Atajo de iOS para la Open API de Gladys Plus](../../../../../static/img/docs/en/plus/open-api/1.jpg)

Copia la URL de la Gateway y añade el cuerpo JSON.

- El atributo "device_feature_external_id" debe ser un campo de texto
- El atributo "state" debe ser un campo numérico

![Atajo de iOS para la Open API de Gladys Plus](../../../../../static/img/docs/en/plus/open-api/2.jpg)

Puedes crear otro atajo para el evento "fuera de casa" duplicando el anterior y cambiando 1 por 0.

![Atajo de iOS para la Open API de Gladys Plus](../../../../../static/img/docs/en/plus/open-api/3.jpg)

Ahora, podemos crear una automatización para que este atajo se ejecute automáticamente cuando llegues a casa:

![Atajo de iOS para la Open API de Gladys Plus](../../../../../static/img/docs/en/plus/open-api/4.jpg)

Puedes hacer lo mismo para cuando salgas de casa.

También puedes añadir el atajo a tu pantalla de inicio si quieres activarlo manualmente:

![Atajo de iOS para la Open API de Gladys Plus](../../../../../static/img/docs/en/plus/open-api/5.jpg)

## Enviar la ubicación del teléfono con Owntracks

También es posible enviar la ubicación de tu teléfono a Gladys usando la Open API y Owntracks:

[Lee el tutorial en la documentación](/es/docs/integrations/owntracks)
