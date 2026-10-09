---
title: Gladys Assistant 4.4 ya está disponible, con detección de zonas
description: ¿Quieres detectar cuándo entras en una zona? ¿O cuándo sales de ella?
authors: pierregilles
image: /img/presentation/gladys-4-4-en-cover.jpg
slug: gladys-assistant-4-4-is-here
---

Hola a todos,

Hoy publicamos Gladys Assistant v4.4, una versión completamente nueva que por fin hace que la vista de mapa de Gladys sea realmente útil.

## ¿Qué hay de nuevo en Gladys Assistant 4.4?

### Crea zonas en la vista de mapa

Ahora puedes crear zonas en el mapa:

- Para tu casa
- Tu trabajo
- La escuela
- ¡Literalmente en cualquier lugar del mundo!

![Crear una zona](../../../static/img/articles/en/gladys-4-4/create-zone.jpg)

La zona que has creado debería aparecer en el mapa

![Mapa](../../../static/img/articles/en/gladys-4-4/map.jpg)

Por supuesto, también puedes editar estas zonas:

![Editar una zona](../../../static/img/articles/en/gladys-4-4/edit-zone.jpg)

{/* truncate */}

### Inicia una escena cuando un usuario entra o sale de una zona

Con las zonas que has creado, ahora puedes crear una escena que se active cuando un usuario entra en la zona:

![Usuario ha entrado en una zona en una escena](../../../static/img/articles/en/gladys-4-4/user-entered-zone.jpg)

o cuando el usuario sale de la zona:

![Usuario ha salido de una zona en una escena](../../../static/img/articles/en/gladys-4-4/user-left-zone.jpg)

## Un ejemplo: marcar a tu usuario como "en casa" o "fuera de casa"

Imagina que quieres marcar a tu usuario como "en casa" cuando entras en una zona, y como "fuera de casa" cuando sales de ella.

Para ello, crea dos escenas, una para "en casa":

![En casa](../../../static/img/articles/en/gladys-4-4/at-home.jpg)

Y otra para "fuera de casa":

![Fuera de casa](../../../static/img/articles/en/gladys-4-4/left-home.jpg)

### Condición "casa vacía/no vacía" en las escenas

Ya era posible crear una escena que se activara cuando una casa estaba vacía o no vacía, pero no se podía añadir una condición en una escena para continuar solo si la casa estaba vacía o no vacía.

¡Ahora sí se puede!

![Casa vacía](../../../static/img/articles/en/gladys-4-4/house-empty.jpg)

![Casa no vacía](../../../static/img/articles/en/gladys-4-4/house-not-empty.jpg)

Con esta escena, puedes añadir la tarjeta de presencia al panel de control:

![Presencia de los usuarios en el panel de control](../../../static/img/articles/en/gladys-4-4/presence-dashboard.jpg)

### Corrección de errores

En esta versión hemos corregido algunos errores:

- Llamar a una escena desde otra escena ahora duplica el objeto scope para evitar la contaminación del contexto [`#1205`](https://github.com/GladysAssistant/Gladys/pull/1205)
- Corrección del log en la acción de escena "Continuar solo si" [`#1201`](https://github.com/GladysAssistant/Gladys/pull/1201)

## ¿Cómo actualizar?

Para actualizar Gladys, te recomendamos usar Watchtower: actualiza tu contenedor automáticamente en cuanto se publica una nueva versión. Consulta la [documentación](/es/docs/installation/docker#auto-upgrade-gladys-with-watchtower).

## Gracias a los contribuidores

¡Gracias a todos los que han contribuido a esta versión y han compartido sus comentarios en el foro!

Si quieres hablar de esta versión, ¡eres bienvenido en el [foro](https://community.gladysassistant.com/)!
