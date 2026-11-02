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

Si tu aplicación no ha podido restaurar tu entrada de Gladys, ya no puedes generar códigos 2FA. Aun así, puedes reemplazar tu aplicación tú mismo, con tus **códigos de recuperación**:

1. Inicia sesión en [plus.gladysassistant.com](https://plus.gladysassistant.com) con un código de recuperación (ver [Usar un código de recuperación](#usar-un-código-de-recuperación) más abajo).
2. Ve a **Ajustes > Seguridad**, tarjeta **"Su aplicación de doble factor"**, y haz clic en **"Cambiar mi aplicación de doble factor"**.
3. Escanea el código QR con tu nueva aplicación e introduce el código que muestra.
4. Para el código de la aplicación actual, haz clic en **"¿Ha perdido su aplicación actual? Utilice un código de recuperación en su lugar."** e introduce **otro** de tus códigos de recuperación.
5. Haz clic en **"Reemplazar mi aplicación de doble factor"**.

Necesitas, por tanto, dos códigos de recuperación: uno para iniciar sesión y otro para reemplazar la aplicación. El segundo solo se consume si el reemplazo se realiza: si el código de tu nueva aplicación es rechazado, puedes volver a intentarlo sin perder ningún código. Tus demás códigos de recuperación siguen siendo válidos, pero recuerda [generar un nuevo juego](#generar-códigos-de-recuperación-antes-de-necesitarlos) una vez configurada tu nueva aplicación.

¿No te quedan códigos de recuperación, o solo uno? Consulta [Ya no me quedan códigos de recuperación](#no-recovery-codes-left).

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

## Ya no me quedan códigos de recuperación {#no-recovery-codes-left}

¿Has perdido a la vez tu aplicación de autenticación y tus códigos de recuperación? Desde Gladys 5.3.1, puedes recuperar el acceso a tu cuenta sin escribir al soporte. Elige la solución que corresponde a tu situación:

- **Tu Gladys está en tu casa y conectada a Gladys Plus**: [genera nuevos códigos de recuperación desde tu Gladys](#recovery-codes-from-gladys).
- **Otra persona de tu cuenta de Gladys Plus es administradora** y todavía tiene acceso a su aplicación 2FA: puede [restablecer tu doble autenticación](#reset-by-another-admin).
- **Ninguna Gladys está conectada a tu cuenta** (Gladys apagada, averiada, perdida o nunca instalada): [restablece tu doble autenticación por correo electrónico](#reset-by-email).

### Generar nuevos códigos desde tu Gladys {#recovery-codes-from-gladys}

Tu Gladys, físicamente en tu casa, ya es un dispositivo de confianza de tu cuenta de Gladys Plus: puede sustituir a tu aplicación 2FA, el tiempo justo para darte un nuevo juego de códigos de recuperación.

1. Abre tu Gladys **en local**, desde tu red doméstica, con su dirección local (por ejemplo su dirección IP). Esta acción no está disponible desde plus.gladysassistant.com: la idea es precisamente estar en casa.
2. Inicia sesión con una cuenta **administrador** de tu Gladys.
3. Ve a **Ajustes > Usuarios**. Debajo de tu usuario, en la sección **"Acceso remoto · Gladys Plus"**, haz clic en **"Códigos de recuperación"**.
4. Introduce **tu contraseña de Gladys** (la de tu instancia local, no la de Gladys Plus) y haz clic en **"Generar"**.
5. Gladys muestra **10 nuevos códigos de recuperación, una sola vez**: cópialos o descárgalos y guárdalos en un lugar seguro. No se guarda nada en tu Gladys.

Tus códigos de recuperación anteriores dejan de funcionar inmediatamente, y Gladys Plus te avisa por correo electrónico. Tu contraseña de Gladys Plus sigue siendo necesaria para iniciar sesión: estos códigos solo sustituyen a tu aplicación 2FA. Después, inicia sesión en [plus.gladysassistant.com](https://plus.gladysassistant.com) con uno de estos códigos y reemplaza tu aplicación 2FA como se explica en [Ya no tienes tu antiguo teléfono](#ya-no-tienes-tu-antiguo-teléfono).

Bueno saberlo:

- El botón **"Códigos de recuperación"** solo aparece si tu Gladys ya conoce tu cuenta de Gladys Plus, es decir, si las huellas de tus claves de cifrado se muestran debajo de tu usuario.
- ¿No eres administrador de tu Gladys? Pídeselo a la persona que gestiona Gladys en tu casa: puede generar estos códigos por ti, introduciendo **su propia** contraseña de Gladys, y después dártelos.

### Hacer que otro administrador restablezca tu 2FA {#reset-by-another-admin}

Si tu cuenta de Gladys Plus tiene otro administrador que todavía tiene acceso a su aplicación 2FA, puede restablecer tu doble autenticación desde Gladys Plus:

1. Inicia sesión en [plus.gladysassistant.com](https://plus.gladysassistant.com) y va a **Ajustes > Usuarios**.
2. Debajo de tu usuario, en la sección **"Acceso remoto · Gladys Plus"**, hace clic en **"Restablecer la autenticación de dos factores"**.
3. Introduce el código de **su propia** aplicación 2FA y hace clic en **"Restablecer"**.

Recibes un aviso por correo electrónico. Después, inicia sesión con tu contraseña: Gladys Plus te pide inmediatamente que configures una nueva aplicación de autenticación y que guardes nuevos códigos de recuperación. Tus claves de cifrado y tu acceso a tu Gladys no cambian.

Un administrador no puede restablecer su propia doble autenticación de esta forma.

### Restablecer tu 2FA por correo electrónico, cuando ninguna Gladys está conectada {#reset-by-email}

Si ninguna Gladys está conectada a tu cuenta de Gladys Plus (nunca instalada, hardware averiado o perdido, corte de luz prolongado...), puedes restablecer tu doble autenticación por correo electrónico, de inmediato:

1. En [plus.gladysassistant.com](https://plus.gladysassistant.com), inicia sesión con tu dirección de correo electrónico y tu contraseña.
2. En la pantalla del código 2FA, debajo de **"¿Ha perdido el acceso a su aplicación de doble factor?"**, haz clic en **"¿Ninguna Gladys conectada? Restablezca su doble autenticación por correo electrónico."**
3. Abre el correo que recibes y haz clic en el enlace. Solo funciona **una vez** y caduca al cabo de **una hora** (solo puedes pedir uno por minuto: revisa también tu carpeta de spam).
4. En la página que se abre, haz clic en **"Restablecer mi doble autenticación"**.
5. Inicia sesión con tu contraseña: Gladys Plus te pide que configures una nueva aplicación de autenticación y que guardes nuevos códigos de recuperación.

Tu antigua aplicación y tus antiguos códigos de recuperación dejan de funcionar, y recibes un aviso por correo electrónico una vez hecho el restablecimiento. Tus claves de cifrado no cambian.

**¿También has olvidado tu contraseña?** Empieza por "He olvidado mi contraseña": la página de restablecimiento de contraseña, abierta desde el correo que recibes, ofrece el mismo enlace debajo de los campos de doble factor. Una vez restablecida tu 2FA, vuelve a esa página para elegir tu nueva contraseña: el enlace de restablecimiento de contraseña sigue siendo válido durante dos horas.

**¿Tu Gladys está conectada?** En ese caso, el restablecimiento por correo electrónico se rechaza, a propósito: tu Gladys, en tu casa, es el último recurso de tu cuenta, y un administrador de tu Gladys puede [generar nuevos códigos de recuperación](#recovery-codes-from-gladys) en su lugar. Esta comprobación se hace al pedir el enlace y al hacer clic en él: si tu Gladys vuelve a conectarse entre medias, el enlace se rechaza, pero sigue siendo válido mientras ninguna Gladys esté conectada.

## Después de restablecer la contraseña o la 2FA

**Restablecer tu doble autenticación** (por un administrador o por correo electrónico) no cambia ni tus claves de cifrado ni tu acceso a tu Gladys: una vez configurada tu nueva aplicación, todo funciona como antes.

**Restablecer tu contraseña de Gladys Plus** ("He olvidado mi contraseña"), en cambio, genera nuevas claves de cifrado. Gladys Plus está cifrado de extremo a extremo, y tu Gladys solo acepta las claves que has autorizado en tu casa: **tu acceso remoto se revoca, por tanto, automáticamente** por motivos de seguridad. Es normal, no hay nada roto: en plus.gladysassistant.com, una página te explica qué hacer.

Para recuperar tu acceso, un administrador de tu Gladys abre tu instancia **en local** y va a **Ajustes > Usuarios**. Debajo de tu usuario, en la sección **"Acceso remoto · Gladys Plus"**, comprueba que las huellas de tus nuevas claves coinciden con las que se muestran en tu página de Gladys Plus y activa el interruptor **"Autorizado"**.

## Contacto

¿Ninguna de las soluciones anteriores ha funcionado? Escríbenos a [hello@gladysassistant.com](mailto:hello@gladysassistant.com) **desde la dirección de correo de tu cuenta de Gladys Plus**, para que podamos identificar tu cuenta, y cuéntanos lo que ya has probado.

También puedes hacer tu pregunta en el [foro de la comunidad](https://community.gladysassistant.com/).
