---
id: connect-gladys-plus
title: Conecta tu instancia de Gladys a Gladys Plus
description: "Tutorial paso a paso, con capturas de pantalla, para conectar tu instancia local de Gladys Assistant a tu cuenta de Gladys Plus."
sidebar_label: Conectar tu instancia
---

Cuando creas una cuenta de [Gladys Plus](/es/plus/), queda un último paso por completar: **conectar tu instancia local de Gladys (la que está instalada en tu casa) a tu cuenta de Gladys Plus.**

Mientras no completes este paso, [plus.gladysassistant.com](https://plus.gladysassistant.com) muestra una página "**¡Un último paso!**": es totalmente normal, ¡no hay nada roto! Tu cuenta de Gladys Plus está activa, simplemente todavía no sabe a qué instancia de Gladys debe conectarse.

![Página "Un último paso" en Gladys Plus](../../../../../static/img/docs/en/plus/connect-gladys-plus/link-gateway-user.png)

Este tutorial te guía en este paso, con capturas de pantalla.

## Requisitos previos

- Una instancia de Gladys instalada y en funcionamiento en tu casa (consulta la [documentación de instalación](/es/docs/) si lo necesitas).
- Una cuenta de Gladys Plus (creada en [gladysassistant.com/plus](https://gladysassistant.com/plus/)).

## Paso 1: Abre tu instancia de Gladys en local

Abre tu instancia de Gladys **desde tu red doméstica**, con su dirección local habitual: por ejemplo `http://192.168.1.30` (la dirección IP de tu Raspberry Pi o de la máquina donde está instalado Gladys), o la dirección que te indicó tu método de instalación.

Inicia sesión con tu **cuenta local de Gladys** (la cuenta que creaste al instalar Gladys; puede ser distinta de tu cuenta de Gladys Plus).

## Paso 2: Ve a los ajustes

Haz clic en tu foto de perfil, arriba a la derecha, y después en **"Ajustes"**.

![Abrir los ajustes de Gladys](../../../../../static/img/docs/en/plus/connect-gladys-plus/open-settings.png)

## Paso 3: Abre la pestaña "Gladys Plus"

En los ajustes, haz clic en la pestaña **"Gladys Plus"** del menú de la izquierda y después en **"Ya tengo una cuenta"**.

![Pestaña "Gladys Plus" en los ajustes](../../../../../static/img/docs/en/plus/connect-gladys-plus/settings-gladys-plus.png)

## Paso 4: Inicia sesión con tu cuenta de Gladys Plus

Introduce el **correo electrónico y la contraseña de tu cuenta de Gladys Plus** (las mismas credenciales que en [plus.gladysassistant.com](https://plus.gladysassistant.com)) y haz clic en "Iniciar sesión".

![Formulario de inicio de sesión de Gladys Plus](../../../../../static/img/docs/en/plus/connect-gladys-plus/login-gladys-plus.png)

Si es la primera vez que te conectas, Gladys te pedirá que configures la autenticación de dos factores (2FA) para proteger tu cuenta y, a continuación, te mostrará tu **clave de copia de seguridad**: guárdala en un lugar seguro fuera de Gladys (por ejemplo, en un gestor de contraseñas), ya que la necesitarás para restaurar tus copias de seguridad cifradas.

## Paso 5: Autoriza a tu usuario en local

Sin salir de la pestaña "Gladys Plus", desplázate hacia abajo hasta la sección **"Usuarios remotos"**: ahí aparecen todos los usuarios de tu cuenta de Gladys Plus. **Autoriza a tu usuario activando el interruptor que hay junto a su nombre.**

![Autorizar a un usuario remoto en local](../../../../../static/img/docs/en/plus/connect-gladys-plus/accept-user.png)

**¿Por qué este paso?** Gladys Plus está cifrado de extremo a extremo: cada usuario de Gladys Plus tiene sus propias claves de cifrado, cuyas huellas se muestran bajo su nombre. Al autorizar aquí a un usuario, validas en local, en tu instancia, que sus claves son aceptadas. Esta validación local es lo que protege tu casa frente a ataques de intermediario (man-in-the-middle): nadie, ni siquiera los servidores de Gladys Plus, puede conceder acceso a tu instancia sin esta validación realizada en tu casa.

Por el mismo motivo, si las claves de un usuario cambian (por ejemplo, cuando se restablece su autenticación de dos factores), su acceso se revoca automáticamente y habrá que volver a autorizarlo aquí.

## Paso 6: Vuelve a Gladys Plus

¡Tu instancia ya está conectada! Vuelve a [plus.gladysassistant.com](https://plus.gladysassistant.com) y haz clic en el botón **"He conectado mi instancia, reintentar"** de la página "¡Un último paso!".

Después se te pedirá que **selecciones tu usuario de Gladys**: elige el usuario local que quieres vincular a tu cuenta de Gladys Plus. ¡Y listo! Ya puedes acceder a tu casa a distancia, de forma segura. 🎉

## Solución de problemas

- **La página "¡Un último paso!" vuelve a aparecer aunque ya completaste este paso en el pasado**: esto puede ocurrir cuando se ha restablecido tu autenticación de dos factores (2FA). Simplemente vuelve a iniciar sesión en la pestaña "Gladys Plus" de tu instancia local (pasos 1 a 5 anteriores).
- **Error "El usuario no ha sido autorizado en local"**: en tu instancia local, ve a los ajustes, pestaña "Gladys Plus", sección "Usuarios remotos", y activa el interruptor junto al nombre del usuario (consulta el paso 5 anterior).
- **¿Necesitas ayuda?** Escríbenos a [hello@gladysassistant.com](mailto:hello@gladysassistant.com) o pregunta en el [foro de la comunidad](https://community.gladysassistant.com/).
