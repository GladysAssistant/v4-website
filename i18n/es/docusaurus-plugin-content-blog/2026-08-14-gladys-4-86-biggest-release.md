---
title: "Gladys 4.86: la mayor versión de la historia 🚀"
description: "68 pull requests fusionadas en una semana: una nueva página de dispositivos, un puente HomeKit completamente reconstruido, un widget del tiempo rediseñado, bucles en las escenas, Home Assistant Discovery por MQTT, cámaras PTZ y mucho más."
authors: pierregilles
image: /img/presentation/gladys-4-86-biggest-release-en.jpg
slug: gladys-4-86-biggest-release
---

¡Hola a todos!

Ya está disponible la versión **4.86.0**, y es fácil de describir: es la **mayor versión de la historia del proyecto**. 🚀

Las cifras hablan por sí solas. En **7 días** fusionamos **68 pull requests**, que modificaron más de **1.000 archivos** y añadieron unas **28.000 líneas de código**. Para comparar: nuestras versiones más grandes llegaban como mucho a **35 pull requests**, repartidas en dos semanas. Acabamos de hacer **el doble, en la mitad de tiempo**.

Y no es un pico puntual. Semana tras semana, la productividad de este proyecto se dispara un poco más, y la razón no es ningún secreto: la **IA**. De las 68 pull requests de esta versión, **62 se escribieron junto con Claude**. Especificaciones, implementación, tests, revisión de código, incluso la CI que corrige sus propios fallos: la IA está ya en todas partes en el ciclo de desarrollo de Gladys, y el resultado es un ritmo que este proyecto nunca había conocido.

👉 **Puedes seguir ese ritmo en directo, día a día, en la [página de actividad de desarrollo](/es/dev/)**. Commits, contribuidores, rachas: todo está ahí y se actualiza automáticamente.

Ahora, veamos lo que realmente llega a tu casa.

{/* truncate */}

## 📱 Una nueva página de dispositivos

Hasta ahora, para ver todos los dispositivos de tu Gladys tenías que recorrer las integraciones una por una. Eso se acabó.

Gladys tiene ahora una página **Dispositivos**, en el menú principal, que reúne **todos los dispositivos de tu instancia** en un solo lugar:

- **Busca** por nombre
- **Filtra** por habitación y por integración
- **Ordénalos** de la A a la Z, de la Z a la A o por habitación
- Consulta de un vistazo las **funciones** de cada dispositivo
- Ve directamente al dispositivo en su integración con **Abrir en la integración**

![La nueva página de dispositivos, que muestra todos los dispositivos de la instancia con búsqueda y filtros](../../../static/img/articles/gladys-4-86-biggest-release/01-devices-page-en.png)

Parece sencillo, y precisamente de eso se trata: cuando tienes 60 dispositivos repartidos en 8 integraciones, esta página se convierte en la que siempre tienes abierta.

## 🍏 HomeKit se convierte en un ciudadano de primera

Es probablemente el bloque de trabajo más grande de esta versión. El puente HomeKit ha pasado de "luces y sensores" a **casi todo lo que Gladys sabe controlar**.

Ahora disponibles en la app Casa de tu iPhone:

- **Termostatos** (con modos y estado de funcionamiento)
- **Cerraduras**
- **Ventiladores**
- **Botones**
- **Detectores de humo**
- **Sensores de presencia**, expuestos como *sensores de ocupación* de HomeKit
- **Baterías de los dispositivos**, para que iOS te avise antes de que un sensor se quede sin batería
- **Tu alarma de casa**, expuesta como *sistema de seguridad* de HomeKit: puedes armar y desarmar Gladys directamente desde la app Casa, o con Siri

Y como exponerlo todo no siempre es lo que quieres, ahora puedes **elegir exactamente qué dispositivos son visibles en HomeKit**:

![Los ajustes de HomeKit, con la opción de exponer solo los dispositivos seleccionados](../../../static/img/articles/gladys-4-86-biggest-release/04-homekit-exposure-en.png)

El puente se reinicia automáticamente al guardar, y **tu emparejamiento se conserva**: no hace falta eliminar Gladys de la app Casa y volver a añadirlo.

De paso, también se han corregido dos errores antiguos: los modos de los termostatos ahora se asignan correctamente, y los servicios de HomeKit se buscan por función en lugar de por tipo de dispositivo (lo que antes estropeaba los dispositivos que combinan varias categorías).

## 🌤️ Un widget del tiempo totalmente nuevo y un widget del sol

El widget del tiempo se ha **rediseñado por completo**, y ahora muestra mucho más que la temperatura actual:

- **Previsión por horas** y **previsión por días**
- **Lluvia** (cantidad y probabilidad), **viento** y su dirección
- **Índice UV**, **presión**, **humedad**, **fase lunar**
- **Alertas meteorológicas**
- Y un **selector de modo de visualización**: eliges los bloques que quieres y el widget muestra solo esos

A su lado, un nuevo **widget del sol** muestra la posición del sol a lo largo del día: amanecer, atardecer, alba, mediodía solar, crepúsculo, además del azimut y la elevación actuales, dibujados como una curva sobre el horizonte.

![El widget del tiempo rediseñado junto al nuevo widget del sol en un panel de control](../../../static/img/articles/gladys-4-86-biggest-release/02-weather-sun-widgets-en.png)

Un detalle pequeño pero satisfactorio en los paneles de control: **las descripciones emergentes de los gráficos ahora siguen tu cursor** en lugar de tapar la curva que intentas leer.

## 🧩 Un catálogo de integraciones que por fin se puede explorar

Con las integraciones nativas más **45 integraciones externas de la comunidad** ya publicadas, el catálogo necesitaba una estructura de verdad. Ahora la tiene:

- **Explora por categoría**: calefacción y climatización, iluminación, energía, cámaras y seguridad, multimedia, protocolos y hubs, red y presencia, mensajería, asistentes de voz e IA…
- **Filtros por facetas**: Nativa, Comunidad, Local, Nube, Gladys Plus
- **Ordena por las más recientes**, para ver lo que la comunidad ha publicado esta semana
- Distintivos **Nueva** y **Obsoleta próximamente**
- **Búsqueda que ignora los acentos** (escribir "camara" encuentra "cámara")
- Tus filtros y tu orden **se conservan cuando vuelves atrás** desde la página de una integración

![El catálogo de integraciones con su barra lateral de categorías y sus filtros por facetas](../../../static/img/articles/gladys-4-86-biggest-release/03-integrations-catalog-en.png)

Y cuando una búsqueda no devuelve nada, Gladys te dirige ahora a las **integraciones externas**: la forma recomendada de añadir compatibilidad con un nuevo dispositivo, que puedes [crear tú mismo en una tarde](/es/docs/dev/external-integrations/).

## 🎬 Escenas: bucles, variables y calendarios

Las escenas han recibido su mayor mejora en mucho tiempo.

- **Bucles.** Un nuevo bloque **"Mientras… repetir…"** repite un grupo de acciones mientras se cumplan sus condiciones. Las condiciones se vuelven a evaluar antes de cada iteración, de modo que una acción "Obtener el último estado" situada antes de una condición actualiza su valor en cada vuelta. Un **número máximo de iteraciones** actúa como límite de seguridad.
- **Definir una variable.** Una nueva acción define una variable (texto fijo o un cálculo), reutilizable en todas las acciones siguientes de la escena.
- **Obtener los eventos del calendario.** Una nueva acción recupera los eventos del día, de mañana o de las próximas X horas de tus calendarios compartidos, y pasa a las acciones siguientes una frase lista para usar, el número de eventos y la lista de eventos. Perfecto para un anuncio matutino en tu altavoz.
- **Selección múltiple en el disparador de estado de un dispositivo.** Un mismo disparador puede ahora vigilar **varias funciones del mismo tipo**: la escena se inicia en cuanto una de ellas cumple la condición.
- **Elige el canal** de la acción "Enviar un mensaje", en lugar de enviarlo siempre a todos los servicios de mensajería configurados.
- **Envía texto a un dispositivo** directamente desde la acción "Controlar un dispositivo".
- Las listas de valores del editor muestran ahora **etiquetas legibles** en lugar de números en bruto.

![El nuevo bloque de bucle en el editor de escenas, con sus condiciones y su sección de repetición](../../../static/img/articles/gladys-4-86-biggest-release/06-scene-loop-en.png)

## 📡 MQTT: Home Assistant Discovery

Una gran novedad para los usuarios de MQTT: Gladys ahora entiende el protocolo **Home Assistant Discovery**.

Cualquier dispositivo que publique su configuración en el topic `homeassistant/` de tu broker se **descubre automáticamente** y aparece en una nueva pestaña **Discovery**. Le pones un nombre, eliges una habitación y lo añades a Gladys con un solo clic.

![La pestaña Home Assistant Discovery, con dispositivos MQTT descubiertos automáticamente](../../../static/img/articles/gladys-4-86-biggest-release/05-mqtt-home-assistant-discovery-en.png)

En la práctica, eso supone que una enorme cantidad de dispositivos ESPHome, Tasmota, Zigbee2MQTT y DIY aparecen ahora en Gladys **sin ninguna configuración manual**.

## 🎥 Cámaras: control PTZ

Las cámaras motorizadas ahora se pueden **mover desde Gladys**. Un dispositivo de cámara puede exponer:

- Una función de **movimiento** (giro a izquierda/derecha, inclinación arriba/abajo, zoom de acercamiento/alejamiento, parada)
- **Posiciones predefinidas** que defines tú mismo (nombre + valor enviado a la cámara), para recuperar un encuadre como "Entrada" o "Jardín"
- Funciones de **posición** de giro, inclinación y zoom

En la vista en directo del widget de cámara, y en el widget de habitación, aparecen una cruceta direccional y un selector de posiciones predefinidas. Tú eliges qué movimientos admite realmente tu cámara, así que solo se muestran los botones que funcionan.

También corregido: las cámaras conservan ahora sus **colores reales en pantalla completa en modo oscuro**.

## ⚡ Energía: producción solar y flujos de la red

Gladys modela ahora el flujo energético completo de una casa, con nuevas categorías de funciones de dispositivo:

- **Sensor de producción**: potencia de producción (tus paneles solares)
- **Sensor de red**: potencia importada, potencia exportada, potencia de red con signo (importación +, exportación −) e índices de importación/exportación
- **Sensor de salida de la casa**: potencia e índice de salida de la casa, incluida la salida aislada de la red

Además, Gladys puede ahora **calcular un índice de producción a partir de las lecturas del contador**, igual que ya hacía con el consumo, para que tengas un historial de producción correcto incluso con dispositivos que solo informan de un índice en bruto.

## 🧠 Nuevos tipos de funciones de dispositivo

Han llegado varias piezas nuevas para las integraciones y para los dispositivos virtuales MQTT:

- Tipos de función **Texto** y **Selección**. "Selección" te permite definir tu propia lista de opciones (escenas, modos, fuentes…) con una etiqueta legible y el valor que se envía a tu dispositivo.
- Una categoría **Mantenimiento**, para seguir la vida útil restante de los consumibles (cepillo del robot aspirador, filtro…).
- Sensores de **NO2, O3 y SO2**, junto a las categorías de calidad del aire ya existentes.
- Un **paso de consigna por función**, definido por el dispositivo: tu termostato puede ahora ajustarse en pasos de 0,5 °C cuando lo admite, en lugar de un valor fijo de 1.

## 🤖 La IA sigue aprendiendo

El asistente de IA de Gladys ahora puede **responder preguntas sobre el tiempo** en el chat: "¿Qué tiempo hará mañana?" se responde a partir de tu proveedor meteorológico configurado, igual que ya ocurría con las preguntas sobre temperatura o humedad.

También corregido: cuando haces una pregunta sobre toda la casa en lugar de sobre una habitación concreta, la IA ya no se confunde sobre a qué te refieres.

## 🏠 Casa: encuentra tu dirección escribiéndola

Para definir la ubicación de tu casa ya no tienes que buscarla en un mapa: **escribe tu dirección y Gladys la encuentra**. La búsqueda funciona con OpenStreetMap (Nominatim), y Gladys te indica claramente que la dirección que escribes se envía a ese servicio de terceros.

## 🔌 Integraciones e integraciones externas

- Las **integraciones externas** ahora se pueden instalar y actualizar **a partir de una imagen Docker compilada localmente**. Sin necesidad de registry, lo que hace mucho más rápido desarrollar una.
- Un nuevo **permiso de Wake-on-LAN**: una integración puede pedir enviar paquetes mágicos a través de Gladys en tu red local, y tú lo apruebas de forma explícita.
- Las imágenes Docker que dejan atrás las integraciones externas ahora se **limpian**.
- Un nuevo campo de configuración **Vincular cuenta**, para los proveedores que no usan OAuth2.
- **Zigbee2MQTT**: compatibilidad con las funciones del HS1SA-E, la política de reinicio del contenedor se ajusta al arrancar, y la acción de escena deja ahora claro que el topic debe incluir el prefijo `zigbee2mqtt/`.
- **Z-Wave JS UI**: la integración incorporada está ahora marcada como **obsoleta** en el catálogo, y cada uno de sus dispositivos tiene un botón **Migrar** para trasladarlo, con su historial, a otra integración.
- Los payloads MQTT y Zigbee2MQTT publicados ahora se **registran en los logs**, con una advertencia si el JSON no es válido. Depurar una automatización acaba de volverse mucho más fácil.

## 🛠️ Bajo el capó

Aquí es donde más se nota el ritmo impulsado por la IA. En una semana:

- **Gladys funciona ahora con Node.js 24.**
- **Los tests del servidor se ejecutan en paralelo**, un worker por núcleo, con un reinicio de la base de datos basado en snapshots y sandboxes por archivo. La batería de tests ha pasado de ser un cuello de botella a no ser ningún problema.
- El **job de CI de Cypress** se ha aligerado y ahora usa caché.
- **Seguridad**: se han corregido todas las alertas de dependencias de gravedad alta y crítica.
- Sequelize se ha actualizado a la versión 6.29.
- Las fórmulas de las condiciones de escena ahora **fallan de forma segura** (fail closed), con un conjunto de operadores restringido.
- Y la CI ejecuta ahora una **pasada de correcciones automática diaria**: los comentarios del bot de revisión lanzan sesiones de Claude Code en la nube que abren ellas mismas la corrección.

A esto se suma una larga lista de correcciones en la interfaz: el control de boost del calentador de agua ya no se desborda en las tarjetas estrechas del panel de control, el arrastrar y soltar funciona con ratón en los PC con pantalla táctil, los sensores de movimiento ya no muestran su último informe de estado como su último movimiento, los botones binarios llevan como etiqueta la acción que aplican, y el distintivo de integraciones está alineado en el menú móvil.

## 🚀 Por qué importa este ritmo

Quiero ser claro sobre lo que está pasando, porque es la parte más importante de esta versión.

Una versión de este tamaño solía ser un esfuerzo de **varios meses**. Esta ha llevado **una semana**, y no a base de atajos: las especificaciones están escritas, los tests están ahí, el código está revisado, y la batería de tests incluso se ha vuelto *más rápida* por el camino. La IA ha eliminado la parte del trabajo que era pura fricción: código repetitivo, tests, refactorizaciones, pasadas de revisión, fontanería de la CI.

Lo que esto significa para ti es sencillo: **las funciones que pides en el foro ahora llegan en días, no en trimestres**. Varios elementos de esta versión salieron directamente de un hilo del foro de esta misma semana.

👉 **[Sigue el ritmo del proyecto en la página de actividad de desarrollo](/es/dev/)**. Se actualiza automáticamente y, sinceramente, se ha convertido en mi página favorita del sitio web.

## ❤️ Gracias

Muchísimas gracias a todos los que han contribuido a esta versión: [@Dreamthy](https://github.com/Dreamthy), [@William-De71](https://github.com/William-De71), [@callemand](https://github.com/callemand), [@cicoub13](https://github.com/cicoub13), [@bertrandda](https://github.com/bertrandda), [@prohand](https://github.com/prohand), [@Terdious](https://github.com/Terdious), Stéphane Escandell y Anupam Mediratta.

Y gracias a todos los que publican **integraciones externas**: el catálogo ha pasado de 20 a **45 integraciones de la comunidad** en dos semanas. Si tu dispositivo todavía no es compatible, [ahora puedes crear la integración tú mismo](/es/docs/dev/external-integrations/).

Como siempre, Gladys se actualiza automáticamente en un plazo de 24 horas si usas Watchtower; si no, puedes hacerlo con un solo clic desde los ajustes.

¡No olvides configurar Telegram para recibir una alerta en tu móvil cuando Gladys se actualice!

[Consulta las notas de la versión completas en GitHub](https://github.com/GladysAssistant/Gladys/releases/tag/v4.86.0)
