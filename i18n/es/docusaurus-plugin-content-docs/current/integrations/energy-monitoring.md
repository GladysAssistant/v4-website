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

Está disponible desde Gladys Assistant 4.66.

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

### Paso 2: Configurar tus tarifas de energía

Ahora tienes que indicarle a Gladys qué proveedor de energía usas y cuál es tu tarifa.

Hay dos opciones: o tienes un contrato que Gladys conoce y puedes importarlo fácilmente, o tienes un contrato desconocido y tienes que configurarlo manualmente.

Nota: la lista de contratos de energía es de código abierto y cualquiera puede modificarla en [este repositorio de GitHub](https://github.com/GladysAssistant/energy-contracts).

#### Importar un contrato

Para configurar tu contrato, ve a la integración "Monitorización de energía", pestaña "Tarifas de energía", y haz clic en "Importar":

![Monitorización de energía: crear un precio](../../../../../static/img/docs/en/configuration/energy-monitoring/energy-monitoring-create-price.png)

Gladys te pide que selecciones un contador eléctrico.

Si usas la integración Enedis, deberías ver tu contador aquí y puedes seleccionarlo.

Si no, puedes hacer clic en "Crear un contador eléctrico" para que Gladys cree automáticamente un dispositivo que será el "padre" de todos los sensores de energía de tu casa.

A continuación, selecciona tu contrato en la lista y después tu potencia contratada:

![Monitorización de energía: importar un contrato](../../../../../static/img/docs/en/configuration/energy-monitoring/energy-monitoring-create-price-import-contract.png)

Si tienes una tarifa con horas punta y horas valle, tendrás que seleccionar los horarios de tu contrato.

En el caso de Tempo, se crearán decenas de precios, ¡porque se importa todo el historial de este contrato con 6 precios por periodo!

![Monitorización de energía: lista de contratos](../../../../../static/img/docs/en/configuration/energy-monitoring/energy-monitoring-contract-list.png)

### Crear un contrato manualmente

Si tu contrato no está en la lista, haz clic en "Crear".

Tendrás que crear un precio por periodo y por tipo de precio. Si tienes un contrato con horas punta y horas valle, tendrás que crear 2 precios para cada periodo.

Ejemplo:

Si en 2024 tu tarifa de energía era de 0,15 €/kWh en horas punta y de 0,10 €/kWh en horas valle, y en 2025 los precios bajan 0,05 €/kWh, tendrás que crear 4 precios:

- 2024 horas punta
- 2024 horas valle
- 2025 horas punta
- 2025 horas valle

Esto puede volverse tedioso rápidamente si los precios de tu contrato cambian a menudo, por eso te animo encarecidamente a añadir tu contrato a la base de datos compartida de contratos en [el repositorio de GitHub](https://github.com/GladysAssistant/energy-contracts).

¡Es colaborativo y cualquiera puede proponer una tarifa!

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

## ¿Comentarios?

Esta función es totalmente nueva. Si tienes preguntas o comentarios, no dudes en publicar un mensaje [en el foro](https://community.gladysassistant.com/).

Quiero dar las gracias a Thomas Lemaistre, que financió este desarrollo y me permitió hacerlo realidad.

Si en el futuro te gustaría ver desarrollos importantes como este en Gladys, que sepas que estoy disponible para el patrocinio de funciones.
