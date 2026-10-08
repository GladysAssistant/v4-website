---
id: nextcloud-talk
title: Nextcloud Talk
description: "Usa Nextcloud Talk para chatear con Gladys Assistant: crea una cuenta para el bot, obtén el token de tu conversación y envía instrucciones a tu hogar inteligente."
sidebar_label: Nextcloud Talk
---

Esta integración te permite usar la aplicación [Talk](https://nextcloud.com/talk/) de Nextcloud para hablar con Gladys.

Disponible en Android, iOS y web, te permitirá comunicarte con Gladys Assistant dándole instrucciones, recibiendo información o respondiendo a sus preguntas...

## Cuenta de Nextcloud para tu bot

Los bots no existen de forma nativa en Nextcloud Talk. Es necesario crear una cuenta de Nextcloud para tu bot.

En Nextcloud, inicia sesión con la cuenta de tu bot:
1. Ve a la página de configuración y haz clic en la pestaña "Seguridad"
2. En la parte inferior, escribe "Gladys" y haz clic en "Crear nueva contraseña de aplicación"

Anota la contraseña generada

![Contraseña de Nextcloud Talk](../../../../../static/img/docs/en/configuration/nextcloud-talk/nextcloud_talk_1_app_password.png)

## Obtén el token de tu conversación

Para indicar qué conversación de Nextcloud Talk debe escuchar Gladys:
1. Desde un **navegador**, con tu **cuenta personal** de Nextcloud
2. Ve a la aplicación Talk
3. Inicia una conversación con la cuenta de tu bot

![Iniciar una conversación en Nextcloud Talk](../../../../../static/img/docs/en/configuration/nextcloud-talk/nextcloud_talk_2_start_conversation.png)

4. Anota el token, lo encontrarás en la URL de la conversación

![Token de Nextcloud Talk](../../../../../static/img/docs/en/configuration/nextcloud-talk/nextcloud_talk_3_token.png)

## Introduce la configuración completa del bot de Nextcloud Talk en Gladys Assistant

Ve a "Integraciones" -> "Nextcloud Talk".

![Integración Nextcloud Talk](../../../../../static/img/docs/en/configuration/nextcloud-talk/nextcloud_talk_4_integration_list.png)

1. Introduce la URL base de tu instancia de Nextcloud
2. Introduce el nombre de usuario de la cuenta de Nextcloud de tu bot
3. Pega aquí la contraseña generada anteriormente
4. Pega el token de la conversación

Haz clic en "Guardar".

![Introducir la configuración del bot en Gladys Assistant](../../../../../static/img/docs/en/configuration/nextcloud-talk/nextcloud_talk_5_configuration.png)

## Primera conversación entre Nextcloud Talk y Gladys Assistant

En la aplicación web o móvil de Nextcloud, escribe tu primer mensaje para Gladys Assistant, por ejemplo: "Enciende la luz de la cocina".

Espera un poco y ......... ¡¡¡magia!!!

¡Tu asistente te responde! Con [Gladys Plus](/es/plus/), la IA integrada entiende el lenguaje natural. Consulta la [documentación de la integración de IA](/es/docs/integrations/openai).
