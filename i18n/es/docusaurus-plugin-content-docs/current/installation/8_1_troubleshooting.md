---
id: troubleshooting
title: "Solución de problemas de Gladys Assistant: problemas frecuentes y soluciones"
description: "Gladys no se abre, contraseña olvidada, actualización que falla, dongle Zigbee no detectado, escenas a la hora equivocada, sensores que desaparecen del panel: las soluciones a los problemas más frecuentes de Gladys Assistant."
sidebar_label: Solución de problemas
keywords:
  - solución de problemas gladys assistant
  - gladys no funciona
  - gladys contraseña olvidada
  - actualización gladys falla
  - registros gladys
---

import JsonLd from '@site/src/components/seo/JsonLd';

Esta página reúne los problemas más frecuentes con Gladys Assistant y cómo resolverlos. Si el tuyo no aparece, los [registros](#empieza-por-los-registros) y [el foro](https://community.gladysassistant.com/) son el siguiente paso.

## Empieza por los registros

La mayoría de los problemas dejan rastro en los registros de Gladys: un mensaje de error suele nombrar la integración o el dispositivo afectado. Puedes descargarlos con un clic desde **Configuración > Sistema > Descargar registros**, o leerlos desde la línea de comandos si la interfaz no se abre. Consulta [cómo descargar los registros de Gladys](/es/docs/installation/logs).

## Acceso e inicio de sesión

### Gladys no se abre después de la instalación

Comprueba, en este orden, que el contenedor está en marcha (`sudo docker ps`), que ningún otro servidor web usa ya el puerto 80 y que ningún cortafuegos lo bloquea. La [guía de instalación con Docker](/es/docs/installation/docker#gladys-no-se-abre-después-de-la-instalación-qué-debo-comprobar) detalla cada paso.

### `gladysassistant.local` no se abre

Algunas redes bloquean el protocolo mDNS que hay detrás de ese nombre: algunas versiones de Android, las redes de invitados, los routers con aislamiento de clientes. Usa en su lugar la dirección IP de la máquina en la que se ejecuta Gladys, por ejemplo `http://192.168.1.20`. Consulta [qué hacer si `gladysassistant.local` no se abre](/es/docs/installation/docker#si-gladysassistantlocal-no-se-abre).

### Olvidé mi contraseña

En la página de inicio de sesión, haz clic en **Olvidé mi contraseña** e introduce tu email. Gladys te envía un enlace para restablecerla, o un código de un solo uso, por Telegram o Nextcloud Talk si has configurado alguno de los dos.

Si no, el enlace o el código se escribe en los registros de Gladys. Ejecuta esto en la máquina en la que se ejecuta Gladys:

```bash
sudo docker logs gladys 2>&1 | grep "Forgot password"
```

Si lo has intentado demasiadas veces, espera 30 minutos o reinicia Gladys con `sudo docker restart gladys`. Otro administrador también puede restablecer tu contraseña desde **Configuración > Usuarios**.

## Actualizaciones

### ¿Cómo actualizo Gladys?

Si iniciaste [Watchtower](/es/docs/installation/docker#auto-upgrade-gladys-with-watchtower) como se indica en la guía de instalación, Gladys se actualiza sola con cada nueva versión. También puedes actualizar manualmente: en **Configuración > Sistema**, haz clic en **Buscar actualizaciones** y luego en **Actualizar ahora** cuando haya una nueva versión disponible.

### La actualización dice que mi contenedor usa una «imagen fija»

Tu contenedor se creó con una versión fija, como `gladysassistant/gladys:v4.80.0`, que nunca recibe actualizaciones. Vuelve a crearlo con la imagen del comando de instalación, `gladysassistant/gladys:v5`: elimina el contenedor con `sudo docker rm -f gladys` (tus datos en `/var/lib/gladysassistant` se conservan) y vuelve a ejecutar el [comando de instalación](/es/docs/installation/docker#start-gladys).

### La actualización falla por falta de espacio en disco

Docker guarda las imágenes de las versiones anteriores. Elimina las que ningún contenedor usa con `sudo docker image prune -a` y vuelve a intentarlo.

## Dispositivos y escenas

### Mi dongle Zigbee no se detecta o Zigbee2MQTT no arranca

Comprueba que el dongle aparece en la máquina con `ls /dev/serial/by-id/` y después consulta los [errores habituales de Zigbee2MQTT y sus soluciones](/es/docs/integrations/zigbee2mqtt#solucionar-los-errores-habituales-de-zigbee2mqtt). Si Gladys se ejecuta en una máquina virtual, hay que pasarle el dongle (consulta la [guía de Proxmox](/es/docs/installation/proxmox)).

### Un sensor ya no muestra su valor en el panel

El panel oculta por defecto los valores de más de **48 horas**, para que no te fíes de un sensor que ha dejado de informar. Comprueba las pilas y el alcance del sensor. Si por diseño informa muy de vez en cuando, aumenta el **Tiempo de caducidad de un estado** en **Configuración > Sistema**.

### Mis escenas programadas se ejecutan a la hora equivocada

Configura tu zona horaria en **Configuración > Sistema > Zona horaria**: es la que usan las escenas programadas. Comprueba también la variable `TZ` de tu [comando de instalación](/es/docs/installation/docker#start-gladys), que fija la hora del contenedor.

## Datos y copias de seguridad

### El disco de mi máquina se llena

Gladys guarda el historial de cada sensor. En **Configuración > Sistema**, reduce **Conservar el historial de estados de los dispositivos** y elimina las imágenes Docker antiguas con `sudo docker image prune -a`.

### ¿Cómo restauro una copia de seguridad?

Con [Gladys Plus](/es/docs/plus/intro), Gladys se respalda cada día de forma cifrada. Para restaurar una copia, abre **Configuración > Copias de seguridad** y haz clic en **Restaurar copia de seguridad**. En una instalación nueva, elige **Restaurar copia de seguridad de Gladys Plus** en la pantalla de bienvenida. En ambos casos necesitas tu clave de copia de seguridad, que aparece en los ajustes de Gladys Plus al configurarlo.

## ¿Sigues atascado?

[Crea un tema en el foro](https://community.gladysassistant.com/), describe lo que has hecho y lo que ocurre, y adjunta tus [registros](/es/docs/installation/logs). La comunidad te ayudará a encontrar la causa.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Gladys no se abre después de la instalación",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Comprueba, en este orden, que el contenedor está en marcha (sudo docker ps), que ningún otro servidor web usa ya el puerto 80 y que ningún cortafuegos lo bloquea. La guía de instalación con Docker detalla cada paso.",
        },
      },
      {
        "@type": "Question",
        name: "gladysassistant.local no se abre",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Algunas redes bloquean el protocolo mDNS que hay detrás de ese nombre: algunas versiones de Android, las redes de invitados, los routers con aislamiento de clientes. Usa en su lugar la dirección IP de la máquina en la que se ejecuta Gladys, por ejemplo http://192.168.1.20.",
        },
      },
      {
        "@type": "Question",
        name: "Olvidé mi contraseña",
        acceptedAnswer: {
          "@type": "Answer",
          text: "En la página de inicio de sesión, haz clic en Olvidé mi contraseña e introduce tu email. Gladys te envía un enlace para restablecerla, o un código de un solo uso, por Telegram o Nextcloud Talk si has configurado alguno de los dos. Si no, el enlace o el código se escribe en los registros de Gladys: ejecuta sudo docker logs gladys 2>&1 | grep \"Forgot password\" en la máquina en la que se ejecuta Gladys. Otro administrador también puede restablecer tu contraseña desde Configuración > Usuarios.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo actualizo Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Si iniciaste Watchtower como se indica en la guía de instalación, Gladys se actualiza sola con cada nueva versión. También puedes actualizar manualmente: en Configuración > Sistema, haz clic en Buscar actualizaciones y luego en Actualizar ahora cuando haya una nueva versión disponible.",
        },
      },
      {
        "@type": "Question",
        name: "La actualización dice que mi contenedor usa una imagen fija",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tu contenedor se creó con una versión fija, como gladysassistant/gladys:v4.80.0, que nunca recibe actualizaciones. Vuelve a crearlo con la imagen del comando de instalación, gladysassistant/gladys:v5: elimina el contenedor con sudo docker rm -f gladys (tus datos en /var/lib/gladysassistant se conservan) y vuelve a ejecutar el comando de instalación.",
        },
      },
      {
        "@type": "Question",
        name: "La actualización falla por falta de espacio en disco",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Docker guarda las imágenes de las versiones anteriores. Elimina las que ningún contenedor usa con sudo docker image prune -a y vuelve a intentarlo.",
        },
      },
      {
        "@type": "Question",
        name: "Mi dongle Zigbee no se detecta o Zigbee2MQTT no arranca",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Comprueba que el dongle aparece en la máquina con ls /dev/serial/by-id/ y después consulta los errores habituales de Zigbee2MQTT y sus soluciones en la documentación de Zigbee2MQTT. Si Gladys se ejecuta en una máquina virtual, hay que pasarle el dongle.",
        },
      },
      {
        "@type": "Question",
        name: "Un sensor ya no muestra su valor en el panel",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El panel oculta por defecto los valores de más de 48 horas, para que no te fíes de un sensor que ha dejado de informar. Comprueba las pilas y el alcance del sensor. Si por diseño informa muy de vez en cuando, aumenta el Tiempo de caducidad de un estado en Configuración > Sistema.",
        },
      },
      {
        "@type": "Question",
        name: "Mis escenas programadas se ejecutan a la hora equivocada",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Configura tu zona horaria en Configuración > Sistema > Zona horaria: es la que usan las escenas programadas. Comprueba también la variable TZ de tu comando de instalación, que fija la hora del contenedor.",
        },
      },
      {
        "@type": "Question",
        name: "El disco de mi máquina se llena",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Gladys guarda el historial de cada sensor. En Configuración > Sistema, reduce Conservar el historial de estados de los dispositivos y elimina las imágenes Docker antiguas con sudo docker image prune -a.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo restauro una copia de seguridad?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Con Gladys Plus, Gladys se respalda cada día de forma cifrada. Para restaurar una copia, abre Configuración > Copias de seguridad y haz clic en Restaurar copia de seguridad. En una instalación nueva, elige Restaurar copia de seguridad de Gladys Plus en la pantalla de bienvenida. En ambos casos necesitas tu clave de copia de seguridad, que aparece en los ajustes de Gladys Plus al configurarlo.",
        },
      },
    ],
  }}
/>
