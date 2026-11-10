---
id: troubleshooting
title: "Solución de problemas de Gladys Assistant: problemas frecuentes y soluciones"
description: "Mini-PC que no arranca desde la memoria USB, Gladys no se abre, contraseña olvidada, actualización que falla, dongle Zigbee no detectado, escenas a la hora equivocada: las soluciones a los problemas más frecuentes de Gladys Assistant."
sidebar_label: Solución de problemas
keywords:
  - solución de problemas gladys assistant
  - gladys no funciona
  - problema gladys assistant os
  - gladys contraseña olvidada
  - actualización gladys falla
  - registros gladys
---

import JsonLd from '@site/src/components/seo/JsonLd';

Esta página reúne los problemas más frecuentes con Gladys Assistant y cómo resolverlos. Si el tuyo no aparece, los [registros](#empieza-por-los-registros) y [el foro](https://community.gladysassistant.com/) son el siguiente paso.

## Empieza por los registros

La mayoría de los problemas dejan rastro en los registros de Gladys: un mensaje de error suele nombrar la integración o el dispositivo afectado. Puedes descargarlos con un clic desde **Configuración > Sistema > Descargar registros**, o leerlos desde la línea de comandos si la interfaz no se abre. Consulta [cómo descargar los registros de Gladys](/es/docs/installation/logs).

Si instalaste Gladys con [Gladys Assistant OS](/es/docs/installation/mini-pc), `sudo gladys-diagnostics` muestra además el estado de la máquina: red, disco, Docker y Gladys. Ejecútalo por SSH, o en el propio mini-PC tras pulsar **Ctrl+Alt+F2** para que aparezca una pantalla de inicio de sesión.

## Instalación

### El mini-PC no arranca desde la memoria USB

La imagen de [Gladys Assistant OS](/es/docs/installation/mini-pc) debe grabarse en la memoria USB con una herramienta como balenaEtcher: copiar el archivo `.iso` en la memoria no funciona. Después, en los ajustes de la BIOS (normalmente con **Supr** (_Del_) o **F2** al encender), comprueba que el ordenador arranca en modo **UEFI** (y no en modo "Legacy" o "CSM") y pon la memoria USB en primer lugar en el orden de arranque. Si sigue sin arrancar, desactiva el **Secure Boot** en esos mismos ajustes.

### Gladys no se abre después de la instalación

**Con Gladys Assistant OS**, la pantalla del mini-PC indica en qué punto está la instalación. En el primer arranque descarga Gladys, lo que puede tardar un rato según tu conexión a internet: espera a que la pantalla muestre **Gladys Assistant está listo**. Si muestra **Se requiere conexión a Internet**, comprueba el cable Ethernet y tu router: la configuración se reanuda por sí sola. Si muestra **La configuración no puede continuar**, consulta [la sección de solución de problemas de la guía](/es/docs/installation/mini-pc#solución-de-problemas).

**Con Docker**, comprueba, en este orden, que el contenedor está en marcha (`sudo docker ps`), que ningún otro servidor web usa ya el puerto 80 y que ningún cortafuegos lo bloquea. La [guía de instalación con Docker](/es/docs/installation/docker#gladys-no-se-abre-después-de-la-instalación-qué-debo-comprobar) detalla cada paso.

### `gladysassistant.local` no se abre

Algunas redes bloquean el protocolo mDNS que hay detrás de ese nombre: algunas versiones de Android, las redes de invitados, los routers con aislamiento de clientes. Usa en su lugar la dirección IP de la máquina en la que se ejecuta Gladys, por ejemplo `http://192.168.1.20`. Con Gladys Assistant OS, esta dirección aparece en la pantalla del mini-PC. Consulta [qué hacer si `gladysassistant.local` no se abre](/es/docs/installation/docker#si-gladysassistantlocal-no-se-abre).

## Inicio de sesión

### Olvidé mi contraseña

En la página de inicio de sesión, haz clic en **Olvidé mi contraseña** e introduce tu email. Gladys te envía un enlace para restablecerla, o un código de un solo uso, por Telegram o Nextcloud Talk si has configurado alguno de los dos.

Si no, el enlace o el código se escribe en los registros de Gladys. Ejecuta esto en la máquina en la que se ejecuta Gladys:

```bash
sudo docker logs gladys 2>&1 | grep "Forgot password"
```

Si lo has intentado demasiadas veces, espera 30 minutos o reinicia Gladys con `sudo docker restart gladys`. Otro administrador también puede restablecer tu contraseña desde **Configuración > Usuarios**.

Se trata de la contraseña de tu Gladys en casa. Para tu cuenta de Gladys Plus, usa **He olvidado mi contraseña** en [plus.gladysassistant.com](https://plus.gladysassistant.com).

### Mi código de doble factor de Gladys Plus es rechazado, o he perdido mi teléfono

Comprueba primero que tu teléfono ajusta la fecha y la hora automáticamente: si su reloj se desvía más de unos 30 segundos, todos los códigos que genera son rechazados. ¿Has cambiado de teléfono, o has perdido tu aplicación de autenticación y tus códigos de recuperación? Desde Gladys 5.3.1, puedes recuperar el acceso a tu cuenta por tu cuenta, sin escribir al soporte. Consulta [solucionar problemas de doble factor](/es/docs/plus/two-factor-authentication).

## Actualizaciones

### ¿Cómo actualizo Gladys?

**Con Gladys Assistant OS**, no tienes que hacer nada: Gladys se actualiza solo en cuanto sale una nueva versión. **Con Docker**, si iniciaste [Watchtower](/es/docs/installation/docker#auto-upgrade-gladys-with-watchtower) como se indica en la guía de instalación, Gladys también se actualiza solo.

También puedes actualizar manualmente: en **Configuración > Sistema**, haz clic en **Buscar actualizaciones** y luego en **Actualizar ahora** cuando haya una nueva versión disponible.

### La actualización dice que mi contenedor usa una «imagen fija»

Tu contenedor se creó con una versión fija, como `gladysassistant/gladys:v4.80.0`, que nunca recibe actualizaciones. Vuelve a crearlo con la imagen `gladysassistant/gladys:v5`, conservando las opciones de tu contenedor actual: la misma carpeta de datos, el mismo puerto y las mismas variables de entorno. En un [NAS Synology](/es/docs/installation/synology), por ejemplo, son distintas de las del comando estándar.

1. Elimina el contenedor con `sudo docker rm -f gladys`. Tus datos se quedan en su carpeta de la máquina (`/var/lib/gladysassistant` con el [comando de instalación](/es/docs/installation/docker#start-gladys)).
2. Vuelve a iniciarlo con las mismas opciones y `gladysassistant/gladys:v5` como imagen.

Con [Docker Compose](/es/docs/installation/docker-compose), indica `image: gladysassistant/gladys:v5` en tu archivo y ejecuta `sudo docker compose -f gladys-compose.yml up -d` (con el nombre de tu archivo).

### La actualización falla por falta de espacio en disco

Docker guarda las imágenes de las versiones anteriores. Elimina las que ningún contenedor usa con `sudo docker image prune -a` y vuelve a intentarlo.

## Dispositivos y escenas

### Mi dongle Zigbee no se detecta o Zigbee2MQTT no arranca

En **Integraciones > Zigbee2MQTT > Configuración**, Gladys muestra los puertos USB con el nombre del dispositivo conectado a cada uno, y preselecciona el puerto y el modelo de los dongles más comunes. Si tu dongle no aparece en la lista, comprueba que la máquina lo ve con `ls /dev/serial/by-id/`. Si Zigbee2MQTT no se pone en verde, Gladys te indica el motivo en esa misma página: consulta los [errores habituales de Zigbee2MQTT y sus soluciones](/es/docs/integrations/zigbee2mqtt#solucionar-los-errores-habituales-de-zigbee2mqtt). Si Gladys se ejecuta en una máquina virtual, hay que pasarle el dongle (consulta la [guía de Proxmox](/es/docs/installation/proxmox)).

### Un sensor ya no muestra su valor en el panel

El panel oculta por defecto los valores de más de **48 horas**, para que no te fíes de un sensor que ha dejado de informar. Comprueba las pilas y el alcance del sensor. Si por diseño informa muy de vez en cuando, aumenta el **Tiempo de caducidad de un estado** en **Configuración > Sistema**.

### Mis escenas programadas se ejecutan a la hora equivocada

Las escenas programadas usan la zona horaria de Gladys: compruébala en **Configuración > Sistema > Zona horaria**.

## Datos y copias de seguridad

### El disco de mi máquina se llena

Gladys guarda el historial de cada sensor. En **Configuración > Sistema**, reduce **Conservar el historial de estados de los dispositivos** y elimina las imágenes Docker antiguas con `sudo docker image prune -a`.

### ¿Cómo restauro una copia de seguridad?

Con [Gladys Plus](/es/docs/plus/intro), Gladys se respalda cada día de forma cifrada. Para restaurar una copia, abre **Configuración > Copias de seguridad** y haz clic en **Restaurar copia de seguridad**. En una instalación nueva, elige **Restaurar copia de seguridad de Gladys Plus** en la pantalla de bienvenida. En ambos casos necesitas tu clave de copia de seguridad: aparece en **Configuración > Gladys Plus** de tu instancia actual, así que apúntala antes de necesitarla.

¿Vas a sustituir la máquina en la que se ejecuta Gladys? Sigue la [guía para cambiar de máquina](/es/docs/installation/migrate): enumera lo que debes apuntar antes del cambio y recupera tus dispositivos Zigbee y Matter sin volver a emparejarlos.

## ¿Sigues atascado?

[Crea un tema en el foro](https://community.gladysassistant.com/), describe lo que has hecho y lo que ocurre, y adjunta tus [registros](/es/docs/installation/logs). Con Gladys Assistant OS, añade también la salida de `sudo gladys-diagnostics`: no contiene ninguna contraseña ni ningún secreto. La comunidad te ayudará a encontrar la causa.

Antes de publicar, revisa tus registros: si has restablecido tu contraseña hace poco, quita de ellos el enlace o el código de restablecimiento, así como cualquier otra cosa que no quieras compartir públicamente.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "El mini-PC no arranca desde la memoria USB",
        acceptedAnswer: {
          "@type": "Answer",
          text: "La imagen de Gladys Assistant OS debe grabarse en la memoria USB con una herramienta como balenaEtcher: copiar el archivo .iso en la memoria no funciona. Después, en los ajustes de la BIOS (normalmente con Supr o F2 al encender), comprueba que el ordenador arranca en modo UEFI (y no en modo Legacy o CSM) y pon la memoria USB en primer lugar en el orden de arranque. Si sigue sin arrancar, desactiva el Secure Boot en esos mismos ajustes.",
        },
      },
      {
        "@type": "Question",
        name: "Gladys no se abre después de la instalación",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Con Gladys Assistant OS, la pantalla del mini-PC indica en qué punto está la instalación: espera a que muestre Gladys Assistant está listo. Si muestra Se requiere conexión a Internet, comprueba el cable Ethernet y tu router: la configuración se reanuda por sí sola. Con Docker, comprueba, en este orden, que el contenedor está en marcha (sudo docker ps), que ningún otro servidor web usa ya el puerto 80 y que ningún cortafuegos lo bloquea.",
        },
      },
      {
        "@type": "Question",
        name: "gladysassistant.local no se abre",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Algunas redes bloquean el protocolo mDNS que hay detrás de ese nombre: algunas versiones de Android, las redes de invitados, los routers con aislamiento de clientes. Usa en su lugar la dirección IP de la máquina en la que se ejecuta Gladys, por ejemplo http://192.168.1.20. Con Gladys Assistant OS, esta dirección aparece en la pantalla del mini-PC.",
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
        name: "Mi código de doble factor de Gladys Plus es rechazado, o he perdido mi teléfono",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Comprueba primero que tu teléfono ajusta la fecha y la hora automáticamente: si su reloj se desvía más de unos 30 segundos, todos los códigos que genera son rechazados. ¿Has cambiado de teléfono, o has perdido tu aplicación de autenticación y tus códigos de recuperación? Desde Gladys 5.3.1, puedes recuperar el acceso a tu cuenta por tu cuenta, sin escribir al soporte: consulta la página de solución de problemas de doble factor.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo actualizo Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Con Gladys Assistant OS, no tienes que hacer nada: Gladys se actualiza solo en cuanto sale una nueva versión. Con Docker, si iniciaste Watchtower como se indica en la guía de instalación, Gladys también se actualiza solo. También puedes actualizar manualmente: en Configuración > Sistema, haz clic en Buscar actualizaciones y luego en Actualizar ahora cuando haya una nueva versión disponible.",
        },
      },
      {
        "@type": "Question",
        name: "La actualización dice que mi contenedor usa una imagen fija",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tu contenedor se creó con una versión fija, como gladysassistant/gladys:v4.80.0, que nunca recibe actualizaciones. Vuelve a crearlo con la imagen gladysassistant/gladys:v5, conservando las opciones de tu contenedor actual: la misma carpeta de datos, el mismo puerto y las mismas variables de entorno. Elimina el contenedor con sudo docker rm -f gladys (tus datos se quedan en su carpeta de la máquina) y vuelve a iniciarlo con las mismas opciones y la imagen v5. Con Docker Compose, indica la imagen gladysassistant/gladys:v5 en tu archivo y ejecuta sudo docker compose -f gladys-compose.yml up -d.",
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
          text: "En Integraciones > Zigbee2MQTT > Configuración, Gladys muestra los puertos USB con el nombre del dispositivo conectado a cada uno, y preselecciona el puerto y el modelo de los dongles más comunes. Si tu dongle no aparece en la lista, comprueba que la máquina lo ve con ls /dev/serial/by-id/. Si Zigbee2MQTT no se pone en verde, Gladys te indica el motivo en esa misma página. Si Gladys se ejecuta en una máquina virtual, hay que pasarle el dongle.",
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
          text: "Las escenas programadas usan la zona horaria de Gladys: compruébala en Configuración > Sistema > Zona horaria.",
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
          text: "Con Gladys Plus, Gladys se respalda cada día de forma cifrada. Para restaurar una copia, abre Configuración > Copias de seguridad y haz clic en Restaurar copia de seguridad. En una instalación nueva, elige Restaurar copia de seguridad de Gladys Plus en la pantalla de bienvenida. En ambos casos necesitas tu clave de copia de seguridad: aparece en Configuración > Gladys Plus de tu instancia actual, así que apúntala antes de necesitarla. Para sustituir la máquina en la que se ejecuta Gladys, sigue la guía para cambiar de máquina.",
        },
      },
    ],
  }}
/>
