---
id: energy-monitoring
title: Monitoriza tu consumo de energía en Gladys Assistant
description: "Monitoriza el consumo de energía de tu casa en kWh con Gladys Assistant, con un Lixee ZLinky para contadores Linky u otros sensores de energía compatibles."
sidebar_label: Monitorización de energía
---

La integración "Monitorización de energía" te permite seguir tu consumo de energía con Gladys Assistant.

:::tip[Para ir más allá]
Cómo convertir los datos en ahorro: [Reduce tu factura de la luz](/es/home-energy-monitoring/). ¿Tienes una tarifa por franjas horarias? Consulta en directo el [color EDF Tempo](/es/edf-tempo/), los [eventos de punta de Hydro-Québec](/es/hydro-quebec-peak-events/) y las [tarifas eléctricas de Ontario](/es/ontario-electricity-rates/).
:::

Está disponible desde Gladys Assistant 4.66. Desde Gladys Assistant 5.2, el coste de tu consumo se calcula a partir de **contratos de energía**, capaces de describir los contratos de electricidad de casi cualquier país: franjas horarias, estaciones, colores del día, tramos de consumo, precios spot…

## Hardware compatible

Para usar esta integración, necesitas dispositivos que proporcionen datos de consumo de energía en kWh.

Hay varias formas de conseguirlo:

### 1. **Con un Lixee ZLinky TIC por Zigbee (solo Francia)**

:::note[Para usuarios en Francia]
Esta opción es específica de Francia y del contador inteligente Linky.
:::

Es la mejor solución para seguir con precisión tu consumo en Francia: lecturas cada minuto en kWh, perfecto para monitorizar toda tu casa.

Compatible con Zigbee, disponible por 49 €:

- [en Domadoo](https://www.domadoo.fr/fr/eco-energie/7492-lixee-module-tic-vers-zigbee-30-pour-compteur-linky-v2-v4000-0014-3770014375179.html?domid=17)
- [en la web de Lixee](https://lixee.fr/fr/produits/42-zlinky-tic-v2-3770014375179.html)

En mi casa, esto me da un gráfico como este:

![Gráfico de monitorización de energía](../../../../../static/img/docs/en/configuration/energy-monitoring/dashoard-zlinky-widget.png)

Cada color representa un precio de la energía (tengo la tarifa Tempo). Se ven claramente los días blancos que aparecieron a finales de noviembre con la vuelta del frío 🥶

### 2. **Mediante la integración Enedis en Gladys Plus (solo Francia)**

:::note[Para usuarios en Francia]
Esta opción es específica de Francia y requiere un contador Linky con una cuenta de Enedis.
:::

La integración Enedis te permite obtener los valores registrados por tu contador Linky, que se envían automáticamente a Enedis una vez al día.

Esta integración funciona sin hardware adicional, pero tiene el inconveniente de que solo proporciona el consumo una vez al día, a diferencia del ZLinky, que envía datos en directo cada 60 segundos.

Para configurar Enedis, sigue [este tutorial](/es/docs/integrations/enedis/).

### 3. **Con un enchufe Zigbee que mide el consumo (internacional)**

Es la opción recomendada para usuarios fuera de Francia. Ideal para seguir un aparato concreto. En mi casa, por ejemplo, uso este enchufe NOUS para seguir el consumo de mi lavadora:

[Enchufe NOUS A1Z con medición de consumo en Domadoo](https://www.domadoo.fr/fr/prises-connectees/6165-nous-prise-intelligente-zigbee-30-mesure-de-consommation-5907772033517.html?domid=17)

### 4. **Con un dispositivo MQTT personalizado (internacional)**

Esta opción funciona en todo el mundo. Si tienes un contador inteligente o dispositivos que devuelven valores de consumo en kWh, puedes integrarlos en Gladys Assistant mediante la integración MQTT.

## Configuración

:::info
Necesitas Gladys Assistant 4.66 o superior para usar esta integración.
Puedes actualizar con un clic desde los ajustes del sistema de Gladys.
:::

¡El orden de los pasos de este tutorial es importante!

### Paso 1: Configurar la integración Enedis (opcional, solo Francia)

:::note[Para usuarios en Francia]
Sáltate este paso si no vives en Francia.
:::

Si piensas usar la integración Enedis, sigue [este tutorial](/es/docs/integrations/enedis/).

Si ya usas la integración Enedis, abre la integración, pestaña "Mis contadores", y comprueba si el dispositivo necesita una actualización de funciones.

Si aparece un botón "Actualizar", haz clic en él y después en "Sincronizar con Gladys Plus".

Al terminar la sincronización, puedes comprobar que tu dispositivo Enedis ha enviado correctamente los datos a Gladys creando un gráfico sobre la función "Enedis (consumo de 30 minutos)".

Si ves todo tu consumo en kWh, ¡genial, puedes pasar al siguiente paso!

### Paso 2: Crear tu contrato de energía

Ahora tienes que decirle a Gladys cómo te factura tu proveedor. Desde Gladys Assistant 5.2, esto es un **contrato de energía**: un periodo de validez, una moneda, una zona horaria y una definición de la tarifa, asociados a tu contador eléctrico.

Ve a la integración «Supervisión de energía», pestaña «Contratos», y haz clic en «Crear». Un asistente te guía en 4 pasos.

**1. Contador**

Selecciona tu contador eléctrico. Si usas la integración Enedis, deberías ver tu contador aquí y puedes seleccionarlo.

Si no, elige «Crear un contador eléctrico» para que Gladys cree automáticamente un dispositivo que será el «padre» de todos los sensores de energía de tu casa.

**2. Plantilla**

Elige tu contrato en la lista. Puedes filtrar por país y buscar por proveedor o por nombre de contrato. Cada plantilla indica de dónde viene: el catálogo de la comunidad, un servicio de Gladys (EDF Tempo, alimentado con los colores del día por Gladys Plus) o una integración instalada.

![La lista de plantillas de contrato, con un buscador y un filtro por país](../../../../../static/img/docs/en/configuration/energy-monitoring/energy-contract-templates.webp)

La lista de contratos de la comunidad es de código abierto y cualquiera puede modificarla en [este repositorio de GitHub](https://github.com/GladysAssistant/energy-contracts).

**3. Parámetros**

Comprueba el nombre del contrato, su fecha de inicio (y su fecha de fin si la tiene), la moneda, la zona horaria y el día en que empieza tu periodo de facturación. Después rellena los parámetros de la plantilla: la potencia contratada, los precios, tus horas valle en una cuadrícula de franjas de 30 minutos para un contrato punta / valle…

![Los parámetros de un contrato EDF Tempo: un precio por color de día y por franja horaria, y la cuota mensual](../../../../../static/img/docs/en/configuration/energy-monitoring/energy-contract-parameters.webp)

**4. Vista previa**

Antes de guardar nada, Gladys tarifica tu **consumo real de los últimos 7 días** con este contrato: el total, el detalle por componente (energía, cuota…) y una muestra de intervalos de 30 minutos con el precio aplicado a cada uno. Es la mejor forma de comprobar que el contrato corresponde a tu factura.

![La vista previa: el coste de los últimos 7 días con este contrato y el precio aplicado a cada intervalo](../../../../../static/img/docs/en/configuration/energy-monitoring/energy-contract-preview.webp)

Haz clic en «Guardar»: el contrato aparece en la lista, con su estado (activo, programado, caducado).

Cuando tus precios cambian, no tocas el pasado: termina el contrato en curso en la fecha del cambio y crea uno nuevo que empiece al día siguiente. Un contador tiene como máximo un contrato activo en una fecha dada.

:::info[¿Vienes de una versión anterior?]
Tus precios de energía creados antes de Gladys 5.2 se convierten automáticamente en contratos en el primer arranque, sin tocar el historial de costes ya calculado. Revísalos en la pestaña «Contratos»: un contrato convertido cuyo cálculo difiere del anterior aparece señalado.
:::

#### Mi contrato no está en la lista

Tienes tres opciones:

1. **Proponerlo a la comunidad**, en [el repositorio de contratos de energía](https://github.com/GladysAssistant/energy-contracts). Gladys descarga esta lista directamente: en cuanto se añade tu contrato, aparece en todas las instancias de Gladys, sin actualizar.
2. **Publicarlo como integración externa**: una integración puede declarar plantillas de contrato, alimentar calendarios tarifarios (colores del día, precios spot, festivos) e incluso calcular el coste por sí misma. Consulta [la documentación para desarrolladores](/es/docs/dev/external-integrations/).
3. **Crearlo tú mismo**: en el paso «Parámetros», activa «Avanzado: editar la definición de la tarifa (JSON)» y describe tu contrato. El botón «Exportar como plantilla» genera después una plantilla lista para compartir.

#### Lo que puede expresar un contrato

El motor de tarificación de Gladys no conoce a ningún proveedor por su nombre: un contrato es una lista de reglas que se evalúan para cada intervalo de 30 minutos. Una regla puede depender de:

- la **hora** (punta / valle, franjas horarias);
- el **día de la semana** (fines de semana más baratos);
- el **mes o la estación** (tarifas de verano / invierno);
- un **rango de fechas** (promoción, periodo de transición);
- un **calendario tarifario**: color del día (Tempo), festivos, días de punta crítica;
- **tramos de consumo**, por día, por mes o por periodo de facturación (tarifas progresivas);
- la **potencia máxima** del intervalo.

Además, un contrato puede añadir **cuotas fijas** (por día o por mes), **impuestos** en porcentaje, un **término de potencia** por kW de punta y **precios de mercado horarios o cuartohorarios** (precios spot) con un coeficiente y un margen.

El motor está probado con contratos reales de Francia, Bélgica, Reino Unido, Alemania, Finlandia, Noruega, Estados Unidos, Canadá, Australia, Japón, Corea del Sur e India.

#### Los calendarios tarifarios

Algunos contratos dependen de valores que cambian cada día: el color Tempo, los precios spot, los días de punta. Estos valores se guardan en **calendarios tarifarios**, visibles en la pestaña «Configuración» de la integración, con su proveedor, su granularidad (día, 30 minutos, 15 minutos), su cobertura y sus últimos valores.

![Los calendarios tarifarios que conoce Gladys, aquí los colores EDF Tempo](../../../../../static/img/docs/en/configuration/energy-monitoring/energy-contract-calendars.webp)

Desde la misma tarjeta, «Recalcular los costes desde el» vuelve a calcular los costes de todos los contadores a partir de la fecha elegida, por ejemplo después de corregir un precio.

### Paso 3: Actualizar tus dispositivos Zigbee

En la integración Zigbee, si habías añadido dispositivos Zigbee que miden el consumo **antes de esta actualización**, tienes que actualizarlos.

![Actualizar un dispositivo Zigbee2mqtt](../../../../../static/img/docs/en/configuration/energy-monitoring/zigbee2mqtt-upgrade.png)

Así se añadirán las funciones necesarias para la monitorización de energía.

### Paso 4: Actualizar tus dispositivos MQTT

En la integración MQTT, si tienes dispositivos con funciones "Índice", verás un nuevo botón en esas funciones "Índice" para activar la función de monitorización de energía:

![Actualizar un dispositivo MQTT](../../../../../static/img/docs/en/configuration/energy-monitoring/mqtt-create-features.png)

Así se añadirán las funciones necesarias para la monitorización de energía.

### Paso 5: Comprobar la jerarquía de tu red eléctrica

Ve a la integración "Monitorización de energía". En la primera pestaña deberías ver la jerarquía de tu red eléctrica.

![Jerarquía de la monitorización de energía](../../../../../static/img/docs/en/configuration/energy-monitoring/energy-monitoring-hiearchy.png)

Comprueba que cada dispositivo está correctamente asociado a su padre.

En la lógica de Gladys, el "padre" de un dispositivo corresponde a aquello a lo que está conectado el dispositivo.

Un ejemplo de jerarquía:

```
- Contador eléctrico
  - Enchufe NOUS A1Z (Energía consumida)
     - Enchufe NOUS A1Z (Consumo de 30 minutos)
        - Enchufe NOUS A1Z (Coste de 30 minutos)
```

La jerarquía es muy importante para que Gladys calcule correctamente el coste de tu consumo.

### Paso 6: Recalcular todo el consumo histórico

Si tus dispositivos tienen historial de consumo, puedes lanzar un recálculo del consumo histórico de 30 minutos y de los costes de 30 minutos desde la pestaña "Ajustes":

![Recalcular el consumo histórico](../../../../../static/img/docs/en/configuration/energy-monitoring/energy-monitoring-settings.png)

Primero haz clic en el primer botón para calcular el consumo a partir de los índices y, después, en el segundo botón para calcular los costes de 30 minutos.

### Paso 7: Mostrar tu consumo en el panel

En tu panel, ahora puedes añadir un nuevo widget "Consumo de energía":

![Widget de energía en el panel](../../../../../static/img/docs/en/configuration/energy-monitoring/dashboard-energy-widget.png)

Puedes mostrar tu consumo:

![Gráfico de monitorización de energía](../../../../../static/img/docs/en/configuration/energy-monitoring/dashoard-zlinky-widget.png)

También puedes mostrar cada dispositivo por separado, por ejemplo mi lavadora:

![Gráfico de monitorización de energía](../../../../../static/img/docs/en/configuration/energy-monitoring/dashboard-washing-machine-widget.png)

### Paso 8: Mostrar el precio actual de la electricidad

El widget «Precio de la electricidad» muestra, para el contrato que elijas, el precio actual del kWh, el tramo en curso (por ejemplo «Blue peak»), hasta cuándo se aplica y cuál será el siguiente precio, además del consumo del día.

![El widget de precio de la electricidad en el panel](../../../../../static/img/docs/en/configuration/energy-monitoring/energy-price-widget.webp)

Funciona con cualquier contrato, sea cual sea su proveedor o su país, y se actualiza cada 5 minutos.

### Paso 9: Usar el precio en tus escenas

Dos bloques de escena usan tu contrato:

- el disparador **«Cambio de precio de la electricidad»** inicia una escena en cuanto cambia el precio del kWh (o el tramo tarifario) del contrato, por ejemplo al pasar de horas valle a horas punta;
- la acción **«Condición sobre el precio de la electricidad»** solo deja continuar la escena si el precio actual es inferior, superior o igual al umbral elegido.

Por ejemplo, para poner en marcha el lavavajillas en cuanto la electricidad se abarata:

![Una escena que pone en marcha el lavavajillas cuando el precio de la electricidad baja de 0,15 €/kWh](../../../../../static/img/docs/en/configuration/energy-monitoring/energy-contract-scene.webp)

## ¿Comentarios?

Esta función es totalmente nueva. Si tienes preguntas o comentarios, no dudes en publicar un mensaje [en el foro](https://community.gladysassistant.com/).

Quiero dar las gracias a Thomas Lemaistre, que financió este desarrollo y me permitió hacerlo realidad.

Si en el futuro te gustaría ver desarrollos importantes como este en Gladys, que sepas que estoy disponible para el patrocinio de funciones.
