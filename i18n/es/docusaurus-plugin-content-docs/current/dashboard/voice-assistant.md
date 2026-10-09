---
id: voice-assistant
title: Habla con Gladys desde el panel con el asistente de voz
description: "Habla con Gladys Assistant desde tu panel con el widget de asistente de voz: haz tu pregunta, lee la transcripción en directo y la respuesta de la IA, y escúchala en voz alta."
sidebar_label: Asistente de voz
---

Introducido en [Gladys Assistant 4.77](https://community.gladysassistant.com/t/gladys-assistant-4-77-un-assistant-vocal-dans-gladys/10249), el widget **Asistente de voz** te permite hablar con Gladys directamente desde tu panel: haz una pregunta, lee la transcripción en directo y la respuesta de la IA, y escucha la respuesta en voz alta en tu dispositivo.

Resulta especialmente práctico en una tablet colgada en la pared o en un smartphone que dejas sobre la encimera. Tu hogar inteligente pasa a controlarse por voz sin necesidad de un asistente de terceros.

<div class="youtubeVideoContainerInBlog">
<iframe src="https://www.youtube.com/embed/X-UtYMJoKV4" title="Demostración del asistente de voz de Gladys Assistant" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## ¿Qué puedes hacer?

El asistente de voz utiliza el mismo agente basado en un LLM que el chat de Gladys. No hay una lista fija de comandos: habla con naturalidad y Gladys te entiende.

Puedes controlar dispositivos, consultar sensores, lanzar o crear escenas, ver cámaras y hacer preguntas generales. Consulta los [ejemplos de uso](/es/docs/integrations/openai#examples) en la documentación de la integración de IA.

## Requisitos previos

- Una suscripción a [Gladys Plus](/es/plus/) con tu instancia conectada a la pasarela.
- Un navegador compatible con la grabación por micrófono (Chrome, Firefox, Edge o Safari en versiones recientes).
- Una **conexión segura (HTTPS)** para poder usar el micrófono. Si accedes a Gladys de forma remota, ábrelo a través de [plus.gladysassistant.com](https://plus.gladysassistant.com).
- El permiso de micrófono concedido en tu navegador (en Safari: **Ajustes > Safari > Micrófono**).

:::note
Sin Gladys Plus, el widget se muestra, pero el micrófono permanece desactivado. Un mensaje te invita a conectar tu instancia a Gladys Plus.
:::

## Añadir el widget a tu panel

Ve al panel y haz clic en **Editar**.

Añade un widget **Asistente de voz** y luego haz clic en **Guardar**.

No hace falta ninguna configuración adicional: el widget está listo para usarse en cuanto Gladys Plus esté conectado.

## Usar el asistente de voz

1. Haz clic en el botón del micrófono del widget.
2. Haz tu pregunta. La grabación se detiene automáticamente cuando dejas de hablar.
3. Gladys muestra en el widget lo que has dicho y la respuesta de la IA.
4. La respuesta se reproduce en voz alta en tu dispositivo (síntesis de voz).

El asistente tiene en cuenta tus conversaciones recientes con Gladys para ofrecerte respuestas más adaptadas al contexto.

### Estados del widget

| Estado | Significado |
| ----- | ------- |
| **Hablar** | Listo. Haz clic en el micrófono para empezar. |
| **Escuchando...** | Grabación en curso. Habla ahora. |
| **Procesando...** | Gladys está transcribiendo tu mensaje y generando una respuesta. |
| **Hablando...** | La respuesta se está leyendo en voz alta. |

### Consejo para tablets de pared

Si usas Gladys en una tablet táctil, puedes mostrar el panel a pantalla completa añadiendo `?fullscreen=force` a la URL. Consulta la [introducción al panel](/es/docs/dashboard/intro#tablet-mode) para más detalles.

## Limitaciones

Se trata de una primera prueba de concepto. La funcionalidad irá evolucionando según los comentarios de la comunidad. No dudes en compartir tu experiencia en [el anuncio del foro](https://community.gladysassistant.com/t/gladys-assistant-4-77-un-assistant-vocal-dans-gladys/10249).

La síntesis de voz está optimizada para tener una latencia baja. Algunos valores (temperaturas, unidades como ppm o °C) pueden pronunciarse mal de vez en cuando. Estamos atentos a las mejoras en el ámbito de la síntesis de voz.

## Solución de problemas

| Problema | Qué hacer |
| ------- | ---------- |
| Micrófono desactivado | Comprueba que Gladys Plus está conectado en **Ajustes > Gladys Plus**. |
| "El micrófono requiere una conexión segura" | Abre Gladys mediante HTTPS, idealmente en [plus.gladysassistant.com](https://plus.gladysassistant.com). |
| Micrófono bloqueado en Safari | Permite el acceso al micrófono en **Ajustes > Safari > Micrófono**. |
| "La grabación de voz no está disponible en este navegador" | Prueba una versión reciente de Chrome, Firefox, Edge o Safari. |
| Error genérico | Comprueba tu conexión a Gladys Plus y que tu instancia puede comunicarse con la pasarela. |

## Documentación relacionada

- [Gladys Plus](/es/docs/plus/intro)
- [Usar la IA para controlar tu casa conectada](/es/docs/integrations/openai)
- [Introducción al panel](/es/docs/dashboard/intro)
