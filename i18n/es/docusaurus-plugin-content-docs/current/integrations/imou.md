---
id: imou
title: "Imou en Gladys: URL RTSP y configuración de la cámara"
description: "Conecta una cámara Imou a Gladys Assistant por RTSP, en local y sin la nube. Incluye el formato exacto de la URL RTSP de Imou para el flujo principal y el secundario."
sidebar_label: Imou
keywords:
  - imou rtsp url
  - imou gladys
  - imou domótica
  - imou hogar inteligente
  - imou rtsp
  - conectar cámara imou
  - imou ranger 2 rtsp
  - imou local
---

import JsonLd from '@site/src/components/seo/JsonLd';

Las cámaras Imou (una marca de Dahua) son una opción asequible y muy extendida, y la mayoría funcionan con Gladys Assistant.

Las cámaras Imou ofrecen un flujo **RTSP** estándar, por lo que se conectan a través de la [integración de cámaras](/es/docs/integrations/camera) genérica. Gladys se comunica directamente con la cámara en tu red local, lo que significa que tu vídeo se queda en casa y nunca pasa por la nube de Imou.

## URL RTSP de Imou

Las cámaras Imou ofrecen dos flujos RTSP en el puerto `554`: un flujo **principal** de alta resolución y un flujo **secundario** más ligero. Sustituye `username`, `password` y la dirección IP por tus propios valores:

```text
# Flujo principal (alta resolución):
rtsp://username:password@192.168.1.20:554/cam/realmonitor?channel=1&subtype=0

# Flujo secundario (baja resolución):
rtsp://username:password@192.168.1.20:554/cam/realmonitor?channel=1&subtype=1
```

Algunas cosas que conviene saber:

- El valor `channel=1` es el número de canal. En una cámara independiente siempre es `1`. Si la cámara está conectada a través de un NVR Imou/Dahua, increméntalo para cada canal (`channel=2`, `channel=3`, etc.).
- `subtype=0` es el flujo principal y `subtype=1` el flujo secundario. Para una visualización en directo fluida en tu panel de control, el flujo **secundario** suele bastar y carga menos tu servidor Gladys. Usa el flujo **principal** cuando quieras la resolución completa.
- El nombre de usuario suele ser `admin`, y la contraseña es la contraseña del dispositivo que definiste al emparejar la cámara en la aplicación Imou Life (no la contraseña de tu cuenta Imou).
- Los caracteres reservados del nombre de usuario o de la contraseña deben codificarse en la URL (codificación porcentual); de lo contrario, no se interpretará correctamente. El más habitual es `@`, que se convierte en `%40`, pero lo mismo ocurre con `:` (`%3A`), `/` (`%2F`), `?` (`%3F`), `#` (`%23`) y el espacio (`%20`). En caso de duda, elige una contraseña que solo contenga letras y números.
- Algunos modelos Imou con batería no mantienen un flujo RTSP activo para ahorrar energía. En ellos, es posible que RTSP no esté disponible y que la cámara no se pueda añadir a Gladys.

## Activar RTSP en tu cámara Imou

En muchas cámaras Imou hay que activar RTSP (y ONVIF) antes de que el flujo responda:

1. Abre la aplicación **Imou Life** y selecciona tu cámara.
2. Ve a **Ajustes → Ajustes de la cámara** y busca **ONVIF** o **RTSP** (el nombre exacto depende del modelo y del firmware).
3. Actívalo y, si la aplicación te pide definir una contraseña ONVIF/RTSP, anótala: es la contraseña que usarás en la URL RTSP.

Es buena práctica usar una contraseña específica para el flujo RTSP, para poder cambiarla en cualquier momento.

## Probar la URL en VLC

Antes de añadir la cámara a Gladys, comprueba que tu URL RTSP funciona en [VLC](https://www.videolan.org/vlc/): abre **Medio → Abrir ubicación de red...**, pega la URL y comprueba que el flujo se reproduce. VLC es una buena forma de validar la URL, las credenciales y la conexión de red: si el flujo se reproduce ahí, también debería funcionar en Gladys, siempre que Gladys admita el códec y el tipo de flujo que usa tu cámara.

Si VLC no reproduce el flujo, eso no significa necesariamente que la cámara no tenga RTSP. Comprueba lo siguiente antes de rendirte:

- Las credenciales están en la URL y correctamente codificadas (si no, VLC puede abrir sin avisar su propio cuadro de autenticación).
- La contraseña es la del dispositivo/ONVIF, no la de tu cuenta Imou.
- La ruta del flujo corresponde a tu modelo (valores de `channel` y `subtype`, y el número de canal si pasas por un NVR).
- La cámara es accesible desde tu ordenador (misma red, IP correcta, puerto `554` no bloqueado).
- RTSP/ONVIF está realmente activado en la aplicación Imou Life.

## Añadir tu cámara Imou a Gladys

Una vez confirmada tu URL RTSP, añadir la cámara a Gladys te llevará un minuto:

1. En Gladys, ve a la pestaña **Integraciones** y abre la integración **Cámara**.
2. Haz clic en **Nuevo**, pega tu URL RTSP de Imou y ponle un nombre a la cámara.
3. Haz clic en **Probar la conexión** y después en **Guardar**.
4. Añade la cámara a tu panel de control y, si quieres, pídele a Gladys que te la muestre desde el chat o por Telegram.

El tutorial completo con capturas de pantalla está en la página de la [integración de cámaras](/es/docs/integrations/camera).

## Preguntas frecuentes

### ¿Cuál es la URL RTSP de una cámara Imou?

Las cámaras Imou ofrecen dos flujos RTSP en el puerto 554: el flujo principal (alta resolución) en `rtsp://username:password@CAMERA_IP:554/cam/realmonitor?channel=1&subtype=0` y un flujo secundario más ligero en `rtsp://username:password@CAMERA_IP:554/cam/realmonitor?channel=1&subtype=1`. Sustituye el nombre de usuario, la contraseña y la IP por tus propios valores. El nombre de usuario suele ser `admin` y la contraseña es la contraseña del dispositivo definida en la aplicación Imou Life.

### ¿La Imou Ranger 2 es compatible con RTSP?

Sí. La Imou Ranger 2 (y la Ranger 2C) ofrece un flujo RTSP estándar una vez activado RTSP/ONVIF en la aplicación Imou Life, por lo que se puede añadir a Gladys a través de la integración de cámaras como cualquier otra cámara RTSP.

### ¿La integración de Imou funciona sin la nube?

Sí. Gladys se conecta a tu cámara Imou directamente en tu red local usando su flujo RTSP, así que el vídeo nunca pasa por la nube de Imou y sigue funcionando sin conexión a internet.

### ¿Por qué no se conecta mi URL RTSP de Imou?

Las causas más habituales son: RTSP/ONVIF está desactivado en la aplicación Imou Life, la contraseña es incorrecta (usa la contraseña del dispositivo/ONVIF, no la de tu cuenta Imou), el número de canal es incorrecto (`channel=1` para una sola cámara) o se trata de un modelo con batería que no mantiene el flujo activo. Prueba primero la URL en VLC: si VLC tampoco puede abrirla, el problema está en la URL o en la cámara, no en Gladys.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cuál es la URL RTSP de una cámara Imou?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las cámaras Imou ofrecen dos flujos RTSP en el puerto 554: el flujo principal (alta resolución) en rtsp://username:password@CAMERA_IP:554/cam/realmonitor?channel=1&subtype=0 y un flujo secundario más ligero en rtsp://username:password@CAMERA_IP:554/cam/realmonitor?channel=1&subtype=1. Sustituye el nombre de usuario, la contraseña y la IP por tus propios valores. El nombre de usuario suele ser admin y la contraseña es la contraseña del dispositivo definida en la aplicación Imou Life.",
        },
      },
      {
        "@type": "Question",
        name: "¿La Imou Ranger 2 es compatible con RTSP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La Imou Ranger 2 (y la Ranger 2C) ofrece un flujo RTSP estándar una vez activado RTSP/ONVIF en la aplicación Imou Life, por lo que se puede añadir a Gladys a través de la integración de cámaras como cualquier otra cámara RTSP.",
        },
      },
      {
        "@type": "Question",
        name: "¿La integración de Imou funciona sin la nube?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. Gladys se conecta a tu cámara Imou directamente en tu red local usando su flujo RTSP, así que el vídeo nunca pasa por la nube de Imou y sigue funcionando sin conexión a internet.",
        },
      },
      {
        "@type": "Question",
        name: "¿Por qué no se conecta mi URL RTSP de Imou?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las causas más habituales son: RTSP/ONVIF está desactivado en la aplicación Imou Life, la contraseña es incorrecta (usa la contraseña del dispositivo/ONVIF, no la de tu cuenta Imou), el número de canal es incorrecto (channel=1 para una sola cámara) o se trata de un modelo con batería que no mantiene el flujo activo. Prueba primero la URL en VLC: si VLC tampoco puede abrirla, el problema está en la URL o en la cámara, no en Gladys.",
        },
      },
    ],
  }}
/>
