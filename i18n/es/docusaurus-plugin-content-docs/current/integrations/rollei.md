---
id: rollei
title: "Rollei IPC-88 (cámara de Aldi) en Gladys: RTSP y ONVIF"
description: "Cómo conectar la Rollei IPC-88, la cámara de seguridad barata que vende Aldi, a Gladys Assistant. Activa ONVIF, encuentra su URL RTSP y mira el vídeo en local."
sidebar_label: Rollei (cámara de Aldi)
keywords:
  - rollei ipc-88
  - rollei ipc 88
  - cámara aldi
  - cámara rollei aldi
  - instalación rollei ipc-88
  - rollei rtsp
  - cámara de seguridad aldi
  - rollei onvif
---

import JsonLd from '@site/src/components/seo/JsonLd';

La **Rollei IPC-88** es la cámara de seguridad de interior económica que **Aldi** vende con regularidad por unos 20 euros. Como la mayoría de las cámaras de esa gama de precio, funciona con la plataforma **Tuya** y se empareja con la app **Smart Life**. La buena noticia es que ofrece un flujo **ONVIF/RTSP**, así que puedes añadirla a Gladys Assistant y verla completamente en tu red local.

Gladys se conecta a las cámaras a través de su [flujo RTSP](/es/docs/integrations/camera), directamente en tu red local. Una vez que la cámara está en Gladys, el vídeo se queda en casa: no pasa por la nube de Tuya ni de Rollei y sigue funcionando sin conexión a internet.

## Antes de empezar

La IPC-88 debe emparejarse una vez con la app **Smart Life** (o Tuya Smart) en tu red Wi-Fi. Este primer emparejamiento es obligatorio: es así como la cámara obtiene las credenciales de tu Wi-Fi. Después, todo lo que hacemos aquí ocurre en local.

Dos cosas que conviene saber sobre esta cámara antes de montar nada a su alrededor:

- **Se alimenta de la red eléctrica y no tiene batería de respaldo**, así que deja de grabar durante un corte de luz. Es una buena cámara de vigilancia, pero no sustituye a un verdadero sistema de alarma.
- Sus LED infrarrojos brillan en rojo de forma visible por la noche, y la calidad del audio es modesta. Por 20 euros, ese es el precio a pagar.

## Paso 1: activar ONVIF en la app Smart Life

El flujo RTSP no está disponible hasta que activas ONVIF:

1. Abre la app **Smart Life** y selecciona tu Rollei IPC-88.
2. Abre los **ajustes** de la cámara (el icono del lápiz o del engranaje, arriba a la derecha).
3. Busca la opción **ONVIF** y actívala.
4. Si la app te pide definir un usuario y una contraseña ONVIF, anótalos: son las credenciales que usarás en la URL RTSP, no las de tu cuenta Tuya.

Si tu firmware no muestra ninguna opción ONVIF, comprueba primero en la app si hay una actualización de firmware: esta opción se ha ido añadiendo con el tiempo a varios firmwares de cámaras Tuya.

## Paso 2: encontrar la URL RTSP de tu cámara

Las cámaras basadas en Tuya no usan todas la misma ruta RTSP, y esta puede cambiar entre versiones de firmware, así que lo más fiable es dejar que una herramienta ONVIF te indique la URL exacta:

1. Instala un cliente ONVIF. **Onvier** (Android) es el que usan la mayoría de los usuarios de esta cámara, y **ONVIF Device Manager** funciona bien en Windows.
2. Lanza una búsqueda en tu red local: la cámara aparece con su dirección IP.
3. Conéctate a ella (con las credenciales ONVIF si las definiste) y abre la información del flujo: la herramienta muestra la URL RTSP completa del flujo principal y del flujo secundario.

La URL suele tener este aspecto, en el puerto `554`:

```text
rtsp://192.168.1.20:554/
rtsp://username:password@192.168.1.20:554/
```

Algunas observaciones:

- En muchas IPC-88 **no hace falta ninguna credencial** en la URL: la forma simple `rtsp://CAMERA_IP:554/...` funciona tal cual en la red local.
- Los caracteres reservados en un usuario o una contraseña deben codificarse con porcentajes en la URL; si no, no se interpretará correctamente. El más habitual es `@`, que se convierte en `%40`, pero lo mismo se aplica a `:` (`%3A`), `/` (`%2F`), `?` (`%3F`), `#` (`%23`) y al espacio (`%20`).
- Asigna a la cámara una **dirección IP fija** (lo más sencillo es una reserva DHCP en tu router). Si su IP cambia, la URL RTSP guardada en Gladys dejará de funcionar.
- Si la cámara ofrece dos flujos, el flujo **secundario**, más ligero, suele bastar para un bloque del panel y carga menos tu servidor Gladys.

## Paso 3: probar la URL en VLC

Antes de añadir la cámara a Gladys, comprueba que la URL funciona en [VLC](https://www.videolan.org/vlc/): abre **Medio → Abrir ubicación de red...**, pega la URL y comprueba que el vídeo se reproduce. Si VLC lo reproduce, Gladys también debería hacerlo, siempre que admita el códec que usa tu cámara.

Si VLC no muestra nada, revisa los sospechosos habituales:

- ONVIF está realmente activado en la app Smart Life, y la cámara se ha reiniciado desde entonces.
- La dirección IP es la actual, y tu ordenador está en la misma red que la cámara.
- Las credenciales, cuando la cámara las exige, son las de ONVIF y están correctamente codificadas con porcentajes.
- La ruta RTSP es la que indica la herramienta ONVIF, no una copiada de otra marca de cámaras.

## Paso 4: añadir la cámara a Gladys

Una vez confirmada tu URL RTSP:

1. En Gladys, ve a la pestaña **Integraciones** y abre la integración **Cámara**.
2. Haz clic en **Nuevo**, pega tu URL RTSP y ponle un nombre a la cámara.
3. Haz clic en **Probar la conexión** y después en **Guardar**.
4. Añade la cámara a un panel y, si quieres, pide a Gladys que te envíe una captura en una escena o en un mensaje de Telegram.

La guía completa con capturas de pantalla está en la [página de la integración de cámaras](/es/docs/integrations/camera).

## Otras cámaras de Aldi

Aldi vende varias familias de cámaras con la marca Rollei, y no todas se comportan igual:

- Las **cámaras de seguridad Wi-Fi de interior y exterior** (la IPC-88 y sus hermanas) están basadas en Tuya y suelen ofrecer ONVIF/RTSP, así que el método anterior funciona.
- Las **cámaras de caza** (fototrampeo) graban en una tarjeta SD y, en los modelos 4G, envían fotos por correo electrónico o MMS. No tienen flujo RTSP en directo ni vídeo en la red local, así que no se pueden añadir a Gladys.

Si vas a comprar una cámara en lugar de reutilizar una que ya tienes, un modelo que documente claramente su compatibilidad con RTSP te ahorrará tiempo. Consulta las páginas de [Reolink](/es/docs/integrations/external/reolink/) e [Imou](/es/docs/integrations/imou) para conocer dos gamas que ofrecen una URL RTSP predecible.

## Preguntas frecuentes

### ¿La Rollei IPC-88 que vende Aldi es compatible con RTSP?

Sí. La Rollei IPC-88 es una cámara basada en Tuya que ofrece un flujo ONVIF/RTSP en cuanto se activa ONVIF en la app Smart Life. Después puedes obtener su URL RTSP exacta con un cliente ONVIF como Onvier u ONVIF Device Manager y usar esa URL en Gladys.

### ¿Cuál es la URL RTSP de una Rollei IPC-88?

Usa el puerto 554 y suele tener la forma `rtsp://CAMERA_IP:554/...`, a menudo sin necesidad de credenciales en la red local. La ruta exacta depende del firmware, así que, en lugar de adivinarla, lanza una herramienta de búsqueda ONVIF en tu red: te mostrará la URL RTSP completa del flujo principal y del secundario de tu cámara.

### ¿Puedo usar una cámara de Aldi sin la nube?

Una vez emparejada, sí, en lo que respecta al flujo de vídeo. El emparejamiento inicial pasa por la app Smart Life y la nube de Tuya, pero después Gladys lee el flujo RTSP directamente en tu red local, así que el vídeo nunca sale de tu casa y la cámara se sigue mostrando en Gladys sin conexión a internet.

### ¿Por qué mi cámara Rollei no aparece en la búsqueda ONVIF?

Las causas habituales son: ONVIF sigue desactivado en la app Smart Life, la cámara está en una red o VLAN distinta de la de tu ordenador (las redes de invitados de 2,4 GHz son una trampa clásica) o el firmware es anterior a la opción ONVIF. Activa ONVIF, reinicia la cámara, busca una actualización de firmware y vuelve a lanzar la búsqueda desde un dispositivo de la misma red.

### ¿La Rollei IPC-88 es una buena cámara de seguridad?

Es una cámara de vigilancia con una buena relación calidad-precio, pero no tiene batería de respaldo, así que se apaga durante un corte de luz, y sus LED de visión nocturna son visibles. Para detectar intrusiones de verdad, combínala con sensores de puerta y de movimiento y úsala como comprobación visual, no como la alarma en sí. Consulta nuestra [guía para montar un sistema de alarma casero](/es/diy-home-alarm-system/).

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿La Rollei IPC-88 que vende Aldi es compatible con RTSP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí. La Rollei IPC-88 es una cámara basada en Tuya que ofrece un flujo ONVIF/RTSP en cuanto se activa ONVIF en la app Smart Life. Después puedes obtener su URL RTSP exacta con un cliente ONVIF como Onvier u ONVIF Device Manager y usar esa URL en Gladys.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuál es la URL RTSP de una Rollei IPC-88?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Usa el puerto 554 y suele tener la forma rtsp://CAMERA_IP:554/..., a menudo sin necesidad de credenciales en la red local. La ruta exacta depende del firmware, así que, en lugar de adivinarla, lanza una herramienta de búsqueda ONVIF en tu red: te mostrará la URL RTSP completa del flujo principal y del secundario de tu cámara.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo usar una cámara de Aldi sin la nube?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Una vez emparejada, sí, en lo que respecta al flujo de vídeo. El emparejamiento inicial pasa por la app Smart Life y la nube de Tuya, pero después Gladys lee el flujo RTSP directamente en tu red local, así que el vídeo nunca sale de tu casa y la cámara se sigue mostrando en Gladys sin conexión a internet.",
        },
      },
      {
        "@type": "Question",
        name: "¿Por qué mi cámara Rollei no aparece en la búsqueda ONVIF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las causas habituales son: ONVIF sigue desactivado en la app Smart Life, la cámara está en una red o VLAN distinta de la de tu ordenador o el firmware es anterior a la opción ONVIF. Activa ONVIF, reinicia la cámara, busca una actualización de firmware y vuelve a lanzar la búsqueda desde un dispositivo de la misma red.",
        },
      },
      {
        "@type": "Question",
        name: "¿La Rollei IPC-88 es una buena cámara de seguridad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es una cámara de vigilancia con una buena relación calidad-precio, pero no tiene batería de respaldo, así que se apaga durante un corte de luz, y sus LED de visión nocturna son visibles. Para detectar intrusiones de verdad, combínala con sensores de puerta y de movimiento y úsala como comprobación visual, no como la alarma en sí.",
        },
      },
    ],
  }}
/>
