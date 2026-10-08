---
id: lan-manager
title: Gestionar la presencia escaneando tu red Wi-Fi
description: "Detecta la presencia en Gladys Assistant escaneando tu red Wi-Fi en busca de tu teléfono, tableta u ordenador para saber si estás en casa o fuera."
sidebar_label: Lan-Manager
---

La integración LAN Manager te permite escanear tu red a intervalos regulares para saber si estás en casa o fuera, detectando la presencia de tu teléfono, tu tableta o tu ordenador.

:::note
Este método puede dar falsos negativos si tu teléfono no está siempre conectado al Wi-Fi (por ejemplo, si entra en modo de suspensión).
:::

:::warning
Este método no funciona con iPhone.

Para iPhone, te recomiendo usar la app "Atajos" para enviar una petición a Gladys cuando salgas de casa.
:::

## Añadir tu teléfono

Ve a la integración "LAN Manager", haz clic en "Descubrimiento LAN" y selecciona "Búsqueda en la red".

Después crea el dispositivo haciendo clic en "Guardar".

Si la búsqueda no da ningún resultado, comprueba lo siguiente:

- Que tu instalación de Gladys está en la red correcta
- Que tu contenedor de Gladys se ejecuta en modo "network=host", que es el caso si iniciaste Gladys con el comando oficial `docker run`
- Que el rango CIDR que se va a escanear es correcto (puedes modificarlo en los ajustes de la integración)

## Gestionar la presencia en las escenas

### Una escena de "vuelta a casa"

Ahora vamos a crear una `escena` que marcará a un usuario como "presente en casa" cuando se detecte tu teléfono.

Ve a la pestaña "Escenas" y crea una escena como esta:

![Escena de vuelta a casa](../../../../../static/img/docs/en/configuration/bluetooth/back-at-home-scene.png)

La escena es muy sencilla.

CUANDO "se detecta el teléfono" ENTONCES "marcar al usuario 'Tony' como presente en casa".

### Una escena de "salida de casa"

Para gestionar la salida del usuario de casa, te recomendamos crear una escena que se ejecute periódicamente y que compruebe si tu teléfono se ha detectado recientemente en casa.

Si Gladys detecta la presencia del dispositivo, no hará nada. Si no, Gladys marcará al usuario como ausente.

La escena debería verse así:

![Escena de salida de casa](../../../../../static/img/docs/en/configuration/bluetooth/left-home-scene.png)

Puedes jugar con los ajustes para adaptarlos a tu casa. Si te parece que 10 minutos es demasiado poco para considerarte ausente, puedes ampliarlo a 20 minutos y así evitar "falsos positivos" 😀

## Mostrar la presencia en el panel

Puedes mostrar en el panel la presencia de los usuarios que elijas. Para ello, usa el widget "Usuarios presentes":

![Presencia en el panel](../../../../../static/img/docs/en/configuration/bluetooth/user-presence-dashboard.png)
