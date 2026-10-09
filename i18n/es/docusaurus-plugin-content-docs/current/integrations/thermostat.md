---
id: thermostat
title: "Termostato: programaciones semanales de calefacción en Gladys Assistant"
description: "Convierte un sensor de temperatura y un relé en un termostato programable, o pon tu termostato Netatmo, Zigbee o Matter en una programación semanal, en local con Gladys Assistant."
sidebar_label: Termostato
keywords:
  - termostato domótica
  - termostato programable
  - programación de calefacción
  - termostato virtual
  - programación netatmo
  - cabezal termostático zigbee
---

La integración «Termostato» hace dos cosas, disponibles desde Gladys Assistant 5.2:

- **Gladys se convierte en el termostato.** Un sensor de temperatura y un interruptor (un relé, un enchufe inteligente, un contacto de caldera) bastan para crear una zona de calefacción regulada: Gladys lee la temperatura y enciende o apaga la calefacción para alcanzar la consigna.
- **Gladys programa los termostatos que ya tienes.** Un Netatmo, un cabezal termostático Zigbee, un termostato Matter o MQTT se regula muy bien solo: Gladys escribe su consigna según una programación semanal, justo al lado del resto de tu casa.

En ambos casos obtienes lo mismo: preajustes (Antihielo, Ausencia, Eco, Noche, Confort), programaciones semanales por casa, un widget para el panel y funciones de dispositivo que las escenas, la IA y los asistentes de voz pueden leer y escribir.

Todo funciona en local, sin ninguna nube.

## Crear un termostato

Ve a `Integraciones / Termostato`, pestaña «Mis termostatos», y haz clic en «Nuevo».

![Los termostatos de la casa, con su programación y su consigna](../../../../../static/img/docs/en/configuration/thermostat/thermostat-list.webp)

Dale un nombre y una habitación al termostato y elige su **tipo**.

### Termostato virtual (Gladys regula)

Gladys hace de termostato. Necesitas:

- un **sensor de temperatura**, el que mide la temperatura de la habitación. Un sensor que informa en otra unidad que el termostato (°F y °C) se convierte automáticamente;
- un **interruptor (actuador)**: el relé, el enchufe o el contacto de caldera que enciende y apaga la calefacción;
- opcionalmente, un **sensor de humedad**, que se muestra en el widget;
- opcionalmente, un **sensor de apertura de ventana**: cuando se abre la ventana, la calefacción se corta de inmediato y vuelve cuando se cierra.

En «Ajuste fino», elige cómo regula Gladys:

- **Histéresis** (por defecto): la calefacción se enciende por debajo de la consigna menos el umbral de arranque y se apaga por encima de la consigna más el umbral de parada. Con una consigna de 21 °C y umbrales de 0,5 °C, se enciende por debajo de 20,5 °C y se apaga por encima de 21,5 °C.
- **TPI** (integral proporcional al tiempo): durante un ciclo fijo (30 minutos por defecto), la calefacción permanece encendida una parte del ciclo proporcional a la diferencia con la consigna. Cuanto más lejos está la habitación de la consigna, más tiempo calienta. Evita los excesos de un radiador con mucha inercia.

![El formulario de un termostato virtual: sensor, interruptor, regulación y preajustes](../../../../../static/img/docs/en/configuration/thermostat/thermostat-edit-virtual.webp)

### Termostato real (el aparato regula por sí mismo)

Tu termostato ya regula: Gladys solo escribe la consigna de su programación y muestra el estado del aparato. Eliges:

- la **consigna del termostato real**: la función en la que Gladys escribe la temperatura objetivo. Algunos aparatos exponen varias (calefacción / refrigeración, presente / ausente): elige la que realmente controla tu calefacción;
- el **estado de calefacción** (opcional), para mostrar en el widget si el aparato está calentando. Sirven tanto un estado de funcionamiento como un contacto de caldera;
- el **modo de funcionamiento** (opcional), si el termostato tiene uno: Gladys lo pone en Apagado cuando el termostato se detiene y lo restablece en cuanto una consigna vuelve a tomar el control.

![El formulario de un termostato real: la consigna, el estado de calefacción y el modo del aparato que controla](../../../../../static/img/docs/en/configuration/thermostat/thermostat-edit-external.webp)

:::warning
Desactiva el programa del fabricante en el aparato (app de Netatmo, Tado…) antes de controlarlo desde Gladys. Si no, el programa del aparato y el de Gladys escriben la consigna por turnos, y el termostato sigue al último que ha escrito.
:::

Si cambias la consigna directamente en el aparato (su rueda, su app), Gladys lo ve y lo trata como un cambio manual: no lo sobrescribe un minuto después.

### Ajustes comunes a los dos tipos

- **Uso**: calefacción o refrigeración (un aire acondicionado, por ejemplo).
- **Unidad** (°C o °F) y **rango de temperaturas** de la rueda. Para un termostato real, Gladys propone usar el rango que anuncia el aparato.
- **Preajustes de temperatura**: la consigna de cada preajuste. Por defecto Antihielo 7 °C, Ausencia 16 °C, Eco 18 °C, Noche 17 °C y Confort 21 °C.
- **Programación activa**: la programación semanal que sigue este termostato.
- **Fin del modo manual**: cuando cambias la temperatura a mano, cuánto tiempo pasa antes de que la programación vuelva a tomar el control. «En el siguiente tramo de la programación» (por defecto, como en Tado y Netatmo) o «Tras una duración fija» en minutos. Sin programación, un cambio manual se mantiene hasta que lo vuelvas a cambiar, como en un termostato clásico.

## Las programaciones semanales

En la pestaña «Programaciones», haz clic en «Nueva programación».

![Las programaciones de la casa, con una vista de la semana y los termostatos que siguen cada una](../../../../../static/img/docs/en/configuration/thermostat/thermostat-schedules.webp)

Una programación pertenece a una **casa**: con dos casas, cada una tiene sus propias programaciones, y dos casas pueden tener cada una su «Semana». Para cada día, añade tramos («Añadir un intervalo») con un inicio, un fin y un preajuste. Un tramo puede pasar la medianoche: una noche de 22:30 a 06:30 es un único tramo, marcado «+1d».

![El editor de programación: una barra de color por día y los tramos del lunes](../../../../../static/img/docs/en/configuration/thermostat/thermostat-schedule-editor.webp)

Unas pocas reglas hacen que la edición sea sencilla:

- **«Copiar a...»** copia un día en otros días: escribe el lunes y cópialo a toda la semana.
- **Añadir un tramo nunca falla**: el tramo añadido ocupa su lugar y acorta o divide los tramos que cubre.
- **Borrar un tramo alarga el anterior**: nunca corta la calefacción. Para detener la calefacción durante un periodo, usa el preajuste **Apagado**.
- **Un día sin tramo propio conserva el último preajuste del día anterior.** Una programación cuyo único punto es el viernes por la tarde «Ausencia» se queda en Ausencia todo el fin de semana. Las barras del editor lo muestran exactamente como se aplicará.

En «Termostatos que siguen esta programación», añade los termostatos de la casa que deben seguirla. Un termostato sigue una sola programación a la vez: añadirlo a una programación lo quita de la que seguía.

Los horarios son los de tu casa, en la zona horaria configurada en `Configuración / Sistema`.

## El widget del panel

En tu panel, añade un widget «Termostato» y elige el termostato.

![El widget de termostato: la temperatura de la habitación, la consigna, el tramo en curso y los preajustes](../../../../../static/img/docs/en/configuration/thermostat/thermostat-widget.webp)

El widget muestra la temperatura de la habitación (y la humedad), la consigna en grande y un halo cuando el aparato está calentando. Puedes:

- girar la rueda o usar **+** y **−** para cambiar la consigna: es un cambio manual, que dura hasta el fin que hayas configurado;
- elegir un **preajuste** en la barra inferior: Apagado, Antihielo, Ausencia, Eco, Noche o Confort. En un termostato que sigue una programación, el preajuste se aplica hasta el siguiente tramo y después la programación vuelve a tomar el control;
- leer lo que hace el termostato en el banner: «Confort hasta 22:30» cuando sigue su programación, «Modo manual» para una temperatura ajustada a mano, «Ventana abierta — calefacción suspendida» cuando hay una ventana abierta. La ✕ del banner cancela el modo manual.

## En tus escenas

Un termostato creado por esta integración es un dispositivo como cualquier otro, con una **consigna**, un **preajuste** y un **modo**. Con la acción «Establecer valor del dispositivo», una escena puede:

- elegir un **preajuste**, por ejemplo «Ausencia» cuando la casa está vacía, o «Confort» cuando llega la primera persona. El valor «Programación» devuelve el termostato a su programación;
- escribir una **consigna**, que actúa como un cambio manual;
- **detener** el termostato (modo Apagado) y volver a arrancarlo.

Las mismas funciones son visibles para la IA, MQTT, Gladys Plus y los asistentes de voz.

## Bueno saberlo

- Gladys regula cada minuto. El sensor de apertura de ventana actúa de inmediato.
- Un termostato no puede controlar otro termostato de esta integración: los selectores de funciones solo ofrecen los dispositivos de otras integraciones.
- Los radiadores con **hilo piloto** todavía no se admiten como actuador: el interruptor de un termostato virtual es un interruptor de encendido / apagado. Para controlar radiadores con hilo piloto, consulta [la página del hilo piloto](/es/docs/integrations/pilot-wire).
- Un termostato reversible (calefacción y refrigeración) se controla con una sola consigna: crea dos termostatos si quieres programar ambos.
