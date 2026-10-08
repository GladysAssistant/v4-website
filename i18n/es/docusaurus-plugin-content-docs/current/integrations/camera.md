---
id: camera
title: "Integración de cámaras IP: añade cualquier cámara RTSP o HTTP a Gladys"
description: "Añade cámaras IP a Gladys Assistant mediante su flujo RTSP o HTTP y míralas en directo en tu panel de control. Funciona con cualquier marca de cámara, en local y sin la nube."
sidebar_label: Cámara
keywords:
  - cámara rtsp
  - cámara ip domótica
  - cámara ip hogar inteligente
  - integración de cámaras
  - url flujo rtsp
  - flujo de cámara http
---

import JsonLd from '@site/src/components/seo/JsonLd';

Gladys es compatible con las cámaras que ofrecen un flujo RTSP o HTTP. Como Gladys se conecta directamente a la cámara en tu red local, tu vídeo se queda en casa y nunca pasa por la nube de un fabricante.

Primero tendrás que encontrar la URL RTSP/HTTP del flujo.

:::note
Encontrarás la URL en el manual de usuario de tu dispositivo o en la web del fabricante.
:::

Este es un ejemplo de URL RTSP:

```
rtsp://username:password@192.168.1.20/live/ch00_0
```

Este es un ejemplo de URL HTTP:

```
http://user:password@192.168.1.20/video?profile=0
```

Si no encuentras esta información en el manual de tu cámara, prueba con esta web: [https://www.ispyconnect.com/cameras](https://www.ispyconnect.com/cameras) (es una base de datos de cámaras con sus datos de conexión).

Incluso incluye un generador de URL.

Por ejemplo, este es el de una cámara Xiaomi:

![Generador de URL de cámaras RTSP iSpyConnect](../../../../../static/img/docs/en/configuration/camera/camera-ispy.jpg)

Si no encuentras en esta web la información que buscas, te sugiero que busques en Google "nombre de tu cámara + RTSP". Los resultados de búsqueda deberían ayudarte a saber si hay un flujo abierto disponible.

:::tip
Tenemos guías específicas, con el formato exacto de la URL RTSP, para las marcas de cámaras más habituales:

- [Reolink](/es/docs/integrations/external/reolink/)
- [Imou](/es/docs/integrations/imou)
- [LSC Smart Connect (Action)](/es/docs/integrations/lsc)
- [Rollei IPC-88 (Aldi)](/es/docs/integrations/rollei)
:::

## Probar el flujo en VLC

Puedes conectarte al flujo de tu cámara con [VLC](https://www.videolan.org/vlc/).

Abre VLC y haz clic en "Medio" -> "Abrir ubicación de red..."

![VLC abrir un flujo de red](../../../../../static/img/docs/en/configuration/camera/camera-vlc-step-1.jpg)

Luego, introduce la URL de tu flujo RTSP o HTTP.

![VLC abrir un flujo de red](../../../../../static/img/docs/en/configuration/camera/camera-vlc-step-2.jpg)

¡Listo!

Si la URL es correcta, deberías ver el vídeo de tu cámara en VLC.

![VLC abrir un flujo de red](../../../../../static/img/docs/en/configuration/camera/camera-vlc-step-3.jpg)

## Conectar tu cámara RTSP a Gladys Assistant

Si has conseguido ver el flujo de tu cámara en VLC, también debería funcionar en Gladys Assistant.

Ve a la pestaña "Integraciones" de Gladys y haz clic en la integración "Cámara":

![Añadir una cámara a Gladys Assistant](../../../../../static/img/docs/en/configuration/camera/camera-step-1.jpg)

Haz clic en "Nueva".

![Añadir una cámara a Gladys Assistant](../../../../../static/img/docs/en/configuration/camera/camera-step-2.jpg)

Rellena el formulario.

![Añadir una cámara a Gladys Assistant](../../../../../static/img/docs/en/configuration/camera/camera-step-3.jpg)

Puedes probar el flujo haciendo clic en "Probar la conexión". Si no funciona: ¿estás seguro de que el equipo donde se ejecuta Gladys está en la misma red que tu cámara? ¿Son correctas las credenciales?

Después, puedes hacer clic en "Guardar".

![Añadir una cámara a Gladys Assistant](../../../../../static/img/docs/en/configuration/camera/camera-step-4.jpg)

## Añadir tu cámara al panel de control de Gladys Assistant

Ve al panel de control de Gladys y haz clic en "Editar".

![Añadir una cámara a Gladys Assistant](../../../../../static/img/docs/en/configuration/camera/camera-step-5.jpg)

Haz clic en "+" y elige el widget de cámara.

![Añadir una cámara a Gladys Assistant](../../../../../static/img/docs/en/configuration/camera/camera-step-6.jpg)

Selecciona tu cámara y haz clic en "Guardar".

![Añadir una cámara a Gladys Assistant](../../../../../static/img/docs/en/configuration/camera/camera-step-7.jpg)

¡Voilà! Tu cámara debería verse ahora.

![Añadir una cámara a Gladys Assistant](../../../../../static/img/docs/en/configuration/camera/camera-step-8.jpg)

## Enviar un mensaje a Gladys Assistant para ver la imagen de una cámara

Ve a la pestaña "Chat" y pídele a Gladys: "Muéstrame la cámara del XXXX" (donde XXXX es la habitación en la que está la cámara).

Y... ¡magia!

![Pedir la imagen de una cámara en Gladys Assistant](../../../../../static/img/docs/en/configuration/camera/chat-camera-en.jpg)

También debería funcionar en Telegram, si has configurado Telegram en Gladys.

## Preguntas frecuentes

### ¿Cómo encuentro la URL RTSP de mi cámara?

Consulta primero el manual de usuario de tu cámara o la web del fabricante, ya que la ruta cambia según la marca. Si no la encuentras, la [base de datos de cámaras de iSpyConnect](https://www.ispyconnect.com/cameras) recoge los datos de conexión e incluso genera las URL de la mayoría de los modelos; también puedes buscar en internet "modelo de tu cámara + RTSP". Para las cámaras Reolink, consulta nuestra [guía específica de Reolink](/es/docs/integrations/external/reolink/).

### ¿Qué cámaras funcionan con Gladys?

Cualquier cámara IP que ofrezca un flujo RTSP o HTTP estándar funciona con Gladys, sea cual sea la marca. Las webcams USB también son compatibles. Si tu cámara solo funciona a través de una aplicación o una nube cerradas del fabricante, no será compatible.

### ¿Envía Gladys el vídeo de mi cámara a la nube?

No. Gladys se conecta directamente a tu cámara en tu red local mediante su flujo RTSP o HTTP, así que el vídeo se queda dentro de tu casa. Es una parte fundamental de que Gladys sea una solución de domótica local y de código abierto.

### El flujo no se conecta, ¿qué debo comprobar?

Primero confirma que la URL funciona en [VLC](https://www.videolan.org/vlc/). Si VLC tampoco puede abrirla, comprueba que la máquina donde se ejecuta Gladys esté en la misma red que la cámara, que las credenciales sean correctas y que RTSP esté activado en los ajustes de la cámara.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Cómo encuentro la URL RTSP de mi cámara?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Consulta primero el manual de usuario de tu cámara o la web del fabricante, ya que la ruta cambia según la marca. Si no la encuentras, la base de datos de cámaras de iSpyConnect recoge los datos de conexión e incluso genera las URL de la mayoría de los modelos; también puedes buscar en internet el modelo de tu cámara junto con RTSP.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué cámaras funcionan con Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cualquier cámara IP que ofrezca un flujo RTSP o HTTP estándar funciona con Gladys, sea cual sea la marca. Las webcams USB también son compatibles. Si tu cámara solo funciona a través de una aplicación o una nube cerradas del fabricante, no será compatible.",
        },
      },
      {
        "@type": "Question",
        name: "¿Envía Gladys el vídeo de mi cámara a la nube?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Gladys se conecta directamente a tu cámara en tu red local mediante su flujo RTSP o HTTP, así que el vídeo se queda dentro de tu casa. Es una parte fundamental de que Gladys sea una solución de domótica local y de código abierto.",
        },
      },
      {
        "@type": "Question",
        name: "El flujo de la cámara no se conecta, ¿qué debo comprobar?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Primero confirma que la URL funciona en VLC. Si VLC tampoco puede abrirla, comprueba que la máquina donde se ejecuta Gladys esté en la misma red que la cámara, que las credenciales sean correctas y que RTSP esté activado en los ajustes de la cámara.",
        },
      },
    ],
  }}
/>
