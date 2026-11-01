---
id: two-factor-authentication
title: "Autenticación de doble factor (2FA): solucionar problemas"
description: "¿Tu código 2FA de Gladys Plus es rechazado, has cambiado de teléfono o has perdido tu aplicación de autenticación? Así puedes resolver los problemas de doble factor más habituales."
sidebar_label: Problemas de 2FA
---

Para proteger tu casa, cada cuenta de Gladys Plus está protegida con una **autenticación de doble factor (2FA)**: además de tu contraseña, Gladys Plus te pide un **código de 6 dígitos** generado por una aplicación de autenticación en tu teléfono (Google Authenticator, Microsoft Authenticator, 2FAS, Ente Auth...). Este código cambia cada 30 segundos.

Este código se te pide cuando inicias sesión en [plus.gladysassistant.com](https://plus.gladysassistant.com), cuando conectas tu instancia local de Gladys a Gladys Plus (en **Ajustes > Gladys Plus** de tu instancia) y para algunas acciones sensibles (generar códigos de recuperación, cambiar de aplicación de doble factor, restablecer tu contraseña).

En esta página encontrarás los problemas más frecuentes y cómo resolverlos.

## Mi código 2FA es rechazado

Si Gladys muestra "**El código de doble factor no es válido**", comprueba los siguientes puntos uno a uno: en la gran mayoría de los casos, el problema es uno de ellos.

### 1. La hora de tu teléfono no es correcta

Los códigos 2FA se calculan a partir de la hora actual. **Si el reloj de tu teléfono tiene un desfase de más de unos 30 segundos, todos los códigos que genera son rechazados**, aunque parezcan perfectamente normales.

Comprueba que tu teléfono ajusta la fecha y la hora automáticamente:

- **iPhone**: Ajustes > General > Fecha y hora > activa **"Ajuste automático"**.
- **Android**: Ajustes > Sistema > Fecha y hora > activa **"Establecer la hora automáticamente"** (el menú exacto puede variar según la marca de tu teléfono).

Después, vuelve a intentarlo con un código nuevo. Solo cuenta el reloj de tu teléfono: el reloj de tu instancia de Gladys no influye en los códigos 2FA.

### 2. Estás usando la entrada equivocada en tu aplicación

Si has configurado la 2FA varias veces (por ejemplo, tras un restablecimiento o para hacer una prueba), es posible que tu aplicación de autenticación contenga **varias entradas relacionadas con Gladys**. Solo la más reciente funciona: las antiguas generan códigos que son rechazados.

Prueba los códigos de cada entrada de Gladys, una tras otra. Cuando encuentres la correcta, puedes borrar de tu aplicación las entradas de Gladys obsoletas de esa misma cuenta, para evitar confusiones. Conserva las entradas de tus otras cuentas de Gladys Plus, si tienes varias.

Comprueba también que inicias sesión con la dirección de correo correcta: cada cuenta de Gladys Plus tiene su propia 2FA.

### 3. El código caducó mientras lo escribías

Un código solo es válido durante poco tiempo. Si el código está a punto de cambiar (la mayoría de las aplicaciones muestran una pequeña cuenta atrás), **espera al siguiente código** e introdúcelo enseguida.

### 4. El código no se introdujo correctamente

El código está formado por **6 dígitos, sin espacios**. Algunas aplicaciones muestran el código como `123 456`: escribe los 6 dígitos sin el espacio. Si copias y pegas el código, comprueba que no se haya copiado ningún espacio ni carácter de más.

### 5. Demasiados intentos

Tras varios códigos erróneos seguidos, Gladys Plus puede rechazar temporalmente nuevos intentos ("Demasiados intentos fallidos"). Espera unos minutos y vuelve a intentarlo con un código nuevo.

## He cambiado de teléfono o he reinstalado mi aplicación

Los códigos 2FA se generan a partir de un secreto guardado **en tu aplicación de autenticación**. Si cambias de teléfono o desinstalas la aplicación, este secreto solo te acompaña si tu aplicación sincroniza o hace copia de seguridad de tus cuentas: si no, la nueva aplicación no generará códigos válidos.

### Comprueba primero si tu aplicación puede restaurar tus cuentas

Algunas aplicaciones de autenticación guardan tus cuentas en línea: por ejemplo, Google Authenticator cuando está vinculado a tu cuenta de Google, Microsoft Authenticator con su copia de seguridad en la nube, Ente Auth o 2FAS con su copia de seguridad. Instala la misma aplicación en tu nuevo teléfono y después inicia sesión o restaura la copia de seguridad. Si tu entrada de Gladys vuelve a aparecer, sus códigos funcionan como antes: no tienes que hacer nada más.

Si no, depende de si todavía tienes tu antiguo teléfono.

### Todavía tienes tu antiguo teléfono

Es el caso más sencillo. Tienes dos opciones:

- **Transferir tus cuentas** de la antigua aplicación a la nueva, con la función de exportación de tu aplicación de autenticación (la mayoría ofrecen una, por ejemplo "Transferir cuentas" en Google Authenticator).
- **Registrar tu nueva aplicación en Gladys Plus**: inicia sesión en [plus.gladysassistant.com](https://plus.gladysassistant.com), ve a **Ajustes > Seguridad** y haz clic en **"Cambiar mi aplicación de doble factor"**. Escanea el código QR con tu nueva aplicación y, para confirmar, introduce un código de tu nueva aplicación **y** un código de tu antigua aplicación. Una vez confirmado, solo se aceptará tu nueva aplicación.

¡Conserva tu antiguo teléfono hasta que el cambio esté confirmado!

### Ya no tienes tu antiguo teléfono

Si tu aplicación no ha podido restaurar tu entrada de Gladys, ya no puedes generar códigos 2FA, pero todavía puedes iniciar sesión con un **código de recuperación** (ver más abajo). Después, [contáctanos](#contacto) para que restablezcamos la 2FA de tu cuenta: podrás configurar tu nueva aplicación en tu próximo inicio de sesión.

## Usar un código de recuperación

Los códigos de recuperación son **códigos de un solo uso** que te permiten iniciar sesión cuando ya no tienes acceso a tu aplicación de autenticación. Se muestran **una sola vez**: cuando activas la 2FA y cada vez que generas un nuevo juego de códigos.

Para usar uno, en la pantalla del código 2FA, busca **"¿Ha perdido el acceso a su aplicación de doble factor?"**, haz clic en **"Utilizar un código de recuperación"** e introduce uno de tus códigos. Cada código solo puede usarse una vez: táchalo después de usarlo.

### Generar códigos de recuperación (¡antes de necesitarlos!)

Si nunca guardaste tus códigos de recuperación, o si ya has usado la mayoría, genera un nuevo juego **ahora mismo**, mientras todavía tienes acceso a tu aplicación de autenticación:

1. Inicia sesión en [plus.gladysassistant.com](https://plus.gladysassistant.com).
2. Ve a **Ajustes > Seguridad**.
3. Haz clic en **"Generar códigos de recuperación"** e introduce un código de tu aplicación 2FA para confirmar.
4. **Guarda estos códigos en un lugar seguro**, fuera de tu teléfono: en un gestor de contraseñas o impresos en papel. No se volverán a mostrar.

Generar un nuevo juego de códigos invalida inmediatamente tus códigos de recuperación anteriores.

## Después de restablecer la 2FA

Gladys Plus está cifrado de extremo a extremo. Cuando se restablece tu 2FA, tus claves de cifrado cambian, por lo que **tu acceso a tu instancia de Gladys se revoca automáticamente** por motivos de seguridad: tu instancia solo acepta las claves que has autorizado en tu casa.

Es normal: en plus.gladysassistant.com vuelve a aparecer la página "¡Un último paso!". Para recuperar tu acceso, abre tu instancia de Gladys **en local**, vuelve a iniciar sesión en **Ajustes > Gladys Plus** y vuelve a autorizar a tu usuario en la sección "Usuarios remotos". El [tutorial de conexión](/es/docs/plus/connect-gladys-plus/) explica cada paso con capturas de pantalla.

## Contacto

¿Ninguna de las soluciones anteriores ha funcionado? Escríbenos a [hello@gladysassistant.com](mailto:hello@gladysassistant.com) **desde la dirección de correo de tu cuenta de Gladys Plus**, para que podamos identificar tu cuenta, y cuéntanos lo que ya has probado.

También puedes hacer tu pregunta en el [foro de la comunidad](https://community.gladysassistant.com/).
