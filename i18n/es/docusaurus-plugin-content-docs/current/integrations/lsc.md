---
id: lsc
title: "Cámara LSC en Gladys: RTSP y configuración local"
description: "Cómo conectar una cámara LSC Smart Connect a Gladys Assistant. Las cámaras LSC se basan en Tuya, así que la disponibilidad de RTSP depende del modelo: así puedes comprobarlo y conectarla."
sidebar_label: Cámara LSC
keywords:
  - cámara lsc
  - cámara lsc rtsp
  - lsc smart connect
  - cámara lsc gladys
  - cámara lsc domótica
  - cámara lsc hogar inteligente
  - cámara lsc onvif
---

import JsonLd from '@site/src/components/seo/JsonLd';

LSC Smart Connect es la marca de hogar inteligente que vende Action. Sus cámaras son baratas y **se basan en Tuya**, y eso es lo más importante que debes saber antes de intentar conectar una a Gladys Assistant.

Gladys se conecta a las cámaras a través de su [flujo RTSP o HTTP](/es/docs/integrations/camera), directamente en tu red local, por lo que el vídeo se queda en casa y nunca pasa por la nube. El problema con LSC es que la mayoría de las cámaras basadas en Tuya solo transmiten a la nube de Tuya/LSC y **no exponen un flujo RTSP estándar** de serie. Algunos modelos son compatibles con ONVIF/RTSP, así que el primer paso es averiguar cuál tienes.

## ¿Tu cámara LSC es compatible con RTSP?

No hay una única respuesta para toda la gama LSC, así que comprueba tu modelo concreto:

- Busca en la caja o en la app LSC Smart Connect una mención a **ONVIF** o **RTSP**. Las cámaras compatibles con ONVIF casi siempre exponen un flujo RTSP.
- Busca el número de modelo exacto junto con "RTSP" u "ONVIF" para ver lo que cuentan otros usuarios.
- Si tu cámara es compatible con ONVIF/RTSP, normalmente hay un ajuste para activarlo (y a veces para definir una contraseña específica para el flujo) en la app o en una pequeña interfaz web en la dirección IP de la cámara.

Si el modelo no expone ni RTSP/ONVIF ni un flujo HTTP accesible en tu red local, no se puede añadir directamente a Gladys, porque solo se comunica con la nube de Tuya.

## URL RTSP de LSC que puedes probar

Cuando tu cámara LSC (basada en Tuya) expone RTSP, generalmente usa el puerto `554` con una de estas rutas habituales. Sustituye `username`, `password` y la dirección IP por tus propios valores:

```text
rtsp://username:password@192.168.1.20:554/
rtsp://username:password@192.168.1.20:554/live/ch00_0
rtsp://username:password@192.168.1.20:554/onvif1
```

Los caracteres reservados del nombre de usuario o de la contraseña deben codificarse con porcentaje en la URL; de lo contrario, no se interpretará correctamente. El más habitual es `@`, que se convierte en `%40`, pero lo mismo se aplica a `:` (`%3A`), `/` (`%2F`), `?` (`%3F`), `#` (`%23`) y al espacio (`%20`). En caso de duda, define una contraseña para el flujo que solo contenga letras y números.

La ruta exacta depende del chipset, así que si la primera URL no responde, prueba las otras. Una herramienta de descubrimiento ONVIF (o la sección ONVIF de la app de la cámara) también te dará la ruta RTSP exacta de tu modelo.

## Probar la URL en VLC

Antes de añadir la cámara a Gladys, comprueba que tu URL RTSP funciona en [VLC](https://www.videolan.org/vlc/): abre **Medio → Abrir ubicación de red...**, pega la URL y comprueba que el flujo se reproduce. VLC es una buena forma de validar la URL, las credenciales y la ruta de red: si el flujo se reproduce ahí, también debería funcionar en Gladys, siempre que Gladys sea compatible con el códec y el tipo de flujo que usa tu cámara.

Si ninguna de las URL se reproduce en VLC, es un indicio claro de que tu modelo no expone RTSP, pero no es una prueba. Descarta primero los sospechosos habituales:

- Las credenciales están en la URL y correctamente codificadas con porcentaje (si no, VLC puede mostrar su propia ventana de autenticación en lugar de reproducir).
- La contraseña es la contraseña específica del flujo/ONVIF si la app te pidió definir una, no la contraseña de tu cuenta LSC.
- La ruta del flujo corresponde a tu modelo: las rutas dependen del chipset, así que prueba las tres anteriores y cualquier ruta que indique una herramienta de descubrimiento ONVIF.
- La cámara es accesible desde tu ordenador (misma red, IP correcta, puerto `554` no bloqueado).
- RTSP/ONVIF está activado en la app o en la interfaz web de la cámara, cuando existe esa opción.

## Añadir tu cámara LSC a Gladys

Una vez que tengas una URL RTSP que funcione, añadir la cámara a Gladys lleva un minuto:

1. En Gladys, ve a la pestaña **Integraciones** y abre la integración **Cámara**.
2. Haz clic en **Nueva**, pega tu URL RTSP de LSC y dale un nombre a la cámara.
3. Haz clic en **Probar la conexión** y después en **Guardar**.
4. Añade la cámara a tu panel de control y, si quieres, pídele a Gladys que te la muestre desde el chat o en Telegram.

La guía completa con capturas de pantalla está en la [página de la integración de cámaras](/es/docs/integrations/camera).

## ¿Prefieres una cámara que siempre funcione en local?

Si todavía estás buscando y quieres una cámara que funcione en local con Gladys sin conjeturas, las [cámaras Reolink](/es/docs/integrations/external/reolink/) exponen un flujo RTSP documentado (Reolink publica el formato de la URL y la [lista de modelos compatibles](https://support.reolink.com/hc/en-us/articles/900000617826/), que abarca la mayor parte de su gama con cable), y son las cámaras que [recomendamos para Gladys](/es/docs/installation/recommended-hardware).

## Preguntas frecuentes

### ¿Puedo conectar una cámara LSC a Gladys?

Depende del modelo. Las cámaras LSC Smart Connect se basan en Tuya, y muchas solo transmiten a la nube de Tuya/LSC, sin flujo RTSP. Si tu modelo concreto es compatible con ONVIF o RTSP, puedes añadirlo a Gladys mediante la integración de cámaras usando su URL RTSP. Busca en la caja, en la app o a partir del número de modelo una mención a ONVIF/RTSP.

### ¿Las cámaras LSC exponen un flujo RTSP?

Solo algunas. LSC es una marca Tuya, y las cámaras Tuya estándar no exponen RTSP por defecto. Los modelos LSC con el distintivo ONVIF suelen hacerlo, en el puerto 554. Prueba la URL en VLC para confirmarlo antes de añadir la cámara a Gladys.

### ¿La integración de la cámara LSC funciona sin la nube?

Cuando tu cámara LSC expone un flujo RTSP, sí: Gladys se conecta a ella directamente a través de tu red local y el vídeo nunca pasa por la nube de LSC o de Tuya. Las cámaras que solo transmiten a la nube de Tuya no se pueden usar en local.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Puedo conectar una cámara LSC a Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Depende del modelo. Las cámaras LSC Smart Connect se basan en Tuya, y muchas solo transmiten a la nube de Tuya/LSC, sin flujo RTSP. Si tu modelo concreto es compatible con ONVIF o RTSP, puedes añadirlo a Gladys mediante la integración de cámaras usando su URL RTSP. Busca en la caja, en la app o a partir del número de modelo una mención a ONVIF/RTSP.",
        },
      },
      {
        "@type": "Question",
        name: "¿Las cámaras LSC exponen un flujo RTSP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Solo algunas. LSC es una marca Tuya, y las cámaras Tuya estándar no exponen RTSP por defecto. Los modelos LSC con el distintivo ONVIF suelen hacerlo, en el puerto 554. Prueba la URL en VLC para confirmarlo antes de añadir la cámara a Gladys.",
        },
      },
      {
        "@type": "Question",
        name: "¿La integración de la cámara LSC funciona sin la nube?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cuando tu cámara LSC expone un flujo RTSP, sí: Gladys se conecta a ella directamente a través de tu red local y el vídeo nunca pasa por la nube de LSC o de Tuya. Las cámaras que solo transmiten a la nube de Tuya no se pueden usar en local.",
        },
      },
    ],
  }}
/>
