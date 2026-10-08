---
id: recommended-hardware
title: Hardware recomendado
description: "El mejor hardware Zigbee para crear un hogar inteligente fiable con Gladys Assistant: dongle coordinador recomendado y los dispositivos mejor valorados de cada categoría."
sidebar_label: Hardware recomendado
---

Para crear un hogar inteligente fiable y duradero con Gladys Assistant, **te recomiendo el protocolo Zigbee** para la mayoría de tus dispositivos.

Zigbee es un protocolo inalámbrico en malla (mesh): cada dispositivo conectado a la corriente amplía la red y mejora la fiabilidad general. Además, es **abierto**, **estandarizado** e **independiente de los fabricantes**, lo que te permite combinar marcas sin quedarte atrapado en un ecosistema propietario.

En esta página encontrarás los dispositivos Zigbee mejor valorados de cada categoría, los que yo compraría hoy para equipar una casa desde cero.

> 💡 Todos los dispositivos Zigbee que aparecen a continuación se emparejan con un coordinador Zigbee (el "dongle") a través de la [integración Zigbee2MQTT](/es/docs/integrations/zigbee2mqtt/).

## Coordinador Zigbee (el "dongle")

El coordinador Zigbee es **el dispositivo más importante** de tu instalación: es el cerebro de tu red Zigbee. Elige un modelo de calidad, porque lo vas a conservar durante años.

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/ZBDongle-E.jpg" alt="SONOFF Zigbee 3.0 USB Dongle Plus-E" loading="lazy" />
    </div>
    <span class="product-card__badge">Recomendado</span>
    <h4 class="product-card__title">SONOFF Zigbee 3.0 USB Dongle Plus-E</h4>
    <p class="product-card__description">El coordinador USB con la mejor relación calidad-precio. Basado en el chip EFR32MG21 y compatible oficialmente con Zigbee2MQTT. Es el que uso a diario.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=SONOFF+Zigbee+3.0+USB+Dongle+Plus-E&tag=gladproj-21" target="_blank" rel="noopener">Ver en Amazon</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/SLZB-06.png" alt="SMLight SLZB-06" loading="lazy" />
    </div>
    <span class="product-card__badge">Alternativa Ethernet</span>
    <h4 class="product-card__title">SMLight SLZB-06</h4>
    <p class="product-card__description">Coordinador Zigbee Ethernet/PoE. Útil si quieres alejar el dongle de tu servidor (por ejemplo, en un armario técnico) para lograr una mejor cobertura de la malla Zigbee. Desde Gladys 5, la integración Zigbee2MQTT es compatible con coordinadores en red: Gladys sigue instalando y gestionando Zigbee2MQTT por ti (<a href="/es/docs/integrations/zigbee2mqtt/#use-a-network-coordinator">pasos de configuración</a>).</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=SMLight+SLZB-06&tag=gladproj-21" target="_blank" rel="noopener">Ver en Amazon</a>
  </div>
</div>

> ⚠️ Usa un **cable alargador USB 2.0** para separar el dongle unos centímetros de tu servidor. Los puertos USB 3.0 y las carcasas metálicas generan fuertes interferencias en la banda de 2,4 GHz.

## Bombillas inteligentes

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/9290024687.jpg" alt="Philips Hue White and Color Ambiance E27" loading="lazy" />
    </div>
    <span class="product-card__badge">Recomendado</span>
    <h4 class="product-card__title">Philips Hue White and Color Ambiance E27</h4>
    <p class="product-card__description">La mejor bombilla Zigbee de su categoría: excelente reproducción del color, muy fiable y funciona como router Zigbee. Se empareja directamente con Zigbee2MQTT, sin necesidad de un puente Hue.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Philips+Hue+White+and+Color+Ambiance+E26&tag=gladproj-21" target="_blank" rel="noopener">Ver en Amazon</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/AC10787.jpg" alt="Innr Smart Bulb E27 Color" loading="lazy" />
    </div>
    <span class="product-card__badge">Alternativa económica</span>
    <h4 class="product-card__title">Innr Smart Bulb E27 Color</h4>
    <p class="product-card__description">Marca neerlandesa especializada en Zigbee, muy bien soportada por Zigbee2MQTT. Excelente relación calidad-precio y también funciona como router Zigbee. Una alternativa sólida a Hue.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Innr+E27+Zigbee+color&tag=gladproj-21" target="_blank" rel="noopener">Ver en Amazon</a>
  </div>
</div>

## Enchufes inteligentes (con medición de consumo)

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/A1Z.jpg" alt="Nous A1Z Zigbee Smart Plug" loading="lazy" />
    </div>
    <span class="product-card__badge">Recomendado</span>
    <h4 class="product-card__title">Nous A1Z Zigbee Smart Plug</h4>
    <p class="product-card__description">Uno de los enchufes Zigbee más populares de la comunidad Zigbee2MQTT. Medición del consumo en tiempo real, fiable y funciona como router Zigbee para ampliar tu malla.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Nous+A1Z+Zigbee+plug&tag=gladproj-21" target="_blank" rel="noopener">Ver en Amazon</a>
  </div>
</div>

## Sensores de temperatura y humedad

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/WSDCGQ11LM.jpg" alt="Sensor de temperatura y humedad Aqara" loading="lazy" />
    </div>
    <span class="product-card__badge">Recomendado</span>
    <h4 class="product-card__title">Sensor de temperatura y humedad Aqara</h4>
    <p class="product-card__description">Muy preciso, con una autonomía excelente (más de 2 años) y un tamaño diminuto. La referencia en Zigbee2MQTT para medir la temperatura, la humedad y la presión atmosférica.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Aqara+Temperature+Humidity+Sensor&tag=gladproj-21" target="_blank" rel="noopener">Ver en Amazon</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/SNZB-02D.jpg" alt="SONOFF SNZB-02D con pantalla" loading="lazy" />
    </div>
    <span class="product-card__badge">Con pantalla</span>
    <h4 class="product-card__title">SONOFF SNZB-02D</h4>
    <p class="product-card__description">Sensor Zigbee de temperatura y humedad con pantalla LCD integrada. Excelente relación calidad-precio, perfecto para las estancias donde quieres ver los valores de un vistazo. Lo uso a diario.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=SONOFF+SNZB-02D&tag=gladproj-21" target="_blank" rel="noopener">Ver en Amazon</a>
  </div>
</div>

## Sensores de movimiento

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/RTCGQ14LM.jpg" alt="Aqara Motion Sensor P1" loading="lazy" />
    </div>
    <span class="product-card__badge">Recomendado</span>
    <h4 class="product-card__title">Aqara Motion Sensor P1</h4>
    <p class="product-card__description">El sensor de movimiento PIR Zigbee mejor valorado: sensibilidad configurable, tiempo de bloqueo configurable, medición de luminosidad y una autonomía muy larga con una pila CR2450.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Aqara+Motion+Sensor+P1&tag=gladproj-21" target="_blank" rel="noopener">Ver en Amazon</a>
  </div>
</div>

## Sensores de puertas y ventanas

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/E2.jpg" alt="Sensor de puertas y ventanas Zigbee Nous E2" loading="lazy" />
    </div>
    <span class="product-card__badge">Recomendado</span>
    <h4 class="product-card__title">Nous E2: sensor de puertas y ventanas Zigbee 3.0</h4>
    <p class="product-card__description">Sensor de puertas y ventanas Zigbee 3.0 totalmente local. Formato compacto, gran autonomía, excelente relación calidad-precio y muy buena compatibilidad con Zigbee2MQTT.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Nous+E2+Zigbee+door+sensor&tag=gladproj-21" target="_blank" rel="noopener">Ver en Amazon</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/MCCGQ12LM.jpg" alt="Aqara Door and Window Sensor T1 MCCGQ12LM" loading="lazy" />
    </div>
    <span class="product-card__badge">Premium</span>
    <h4 class="product-card__title">Aqara Door and Window Sensor T1 (MCCGQ12LM)</h4>
    <p class="product-card__description">Versión Zigbee 3.0 pura (no la nueva versión Matter/Thread) del sensor de puerta de Aqara. Aún más pequeño que el modelo original, muy fiable y con una calidad de fabricación premium.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Aqara+Door+Window+Sensor+T1+MCCGQ12LM&tag=gladproj-21" target="_blank" rel="noopener">Ver en Amazon</a>
  </div>
</div>

## Botones inalámbricos y mandos

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/WXKG11LM.jpg" alt="Aqara Wireless Mini Switch" loading="lazy" />
    </div>
    <span class="product-card__badge">Recomendado</span>
    <h4 class="product-card__title">Aqara Wireless Mini Switch</h4>
    <p class="product-card__description">Pequeño botón inalámbrico que detecta pulsación simple, doble pulsación y pulsación larga. Tres acciones con un solo botón, perfecto para automatizaciones personalizadas.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Aqara+Wireless+Mini+Switch+WXKG11LM&tag=gladproj-21" target="_blank" rel="noopener">Ver en Amazon</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/SNZB-01P.jpg" alt="SONOFF SNZB-01P" loading="lazy" />
    </div>
    <span class="product-card__badge">Alternativa</span>
    <h4 class="product-card__title">SONOFF SNZB-01P</h4>
    <p class="product-card__description">Botón Zigbee asequible con base magnética. Detecta pulsación simple, doble y larga. Ideal para sustituir un interruptor o crear accesos directos a escenas.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=SONOFF+SNZB-01P&tag=gladproj-21" target="_blank" rel="noopener">Ver en Amazon</a>
  </div>
</div>

## Módulos para persianas y estores

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/SR-ZG9080A.jpg" alt="Módulo Zigbee para persianas Sunricher" loading="lazy" />
    </div>
    <span class="product-card__badge">Recomendado</span>
    <h4 class="product-card__title">Módulo para persianas Sunricher Zigbee 3.0</h4>
    <p class="product-card__description">Módulo empotrable fiable que convierte cualquier persiana existente en una persiana inteligente. Muy bien soportado por Zigbee2MQTT, con detección de final de carrera y calibración automática.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Sunricher+Zigbee+roller+shutter&tag=gladproj-21" target="_blank" rel="noopener">Ver en Amazon</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/MINI-ZBRBS.png" alt="Módulo Zigbee para persianas SONOFF MINI-ZBRBS" loading="lazy" />
    </div>
    <span class="product-card__badge">Alternativa</span>
    <h4 class="product-card__title">SONOFF MINI-ZBRBS: módulo Zigbee para persianas</h4>
    <p class="product-card__description">Módulo empotrable Zigbee 3.0 compacto para persianas, de SONOFF. Una gran alternativa al Sunricher, de una marca muy bien soportada por Zigbee2MQTT.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=SONOFF+MINI-ZBRBS+roller+shutter&tag=gladproj-21" target="_blank" rel="noopener">Ver en Amazon</a>
  </div>
</div>

## Módulos de iluminación empotrables

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/ZBMINIL2.jpg" alt="SONOFF ZBMINI-L2" loading="lazy" />
    </div>
    <span class="product-card__badge">Recomendado</span>
    <h4 class="product-card__title">SONOFF ZBMINI-L2</h4>
    <p class="product-card__description">Módulo interruptor empotrable que funciona <strong>sin cable neutro</strong>. La solución perfecta para adaptar instalaciones eléctricas antiguas.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=SONOFF+ZBMINI-L2&tag=gladproj-21" target="_blank" rel="noopener">Ver en Amazon</a>
  </div>
</div>

## Interruptores de pared inteligentes

Estos interruptores **sustituyen a tus interruptores de pared actuales** y te permiten controlar una luz tanto físicamente (con la tecla) como a distancia (a través de Gladys). Están disponibles **con cable neutro** (ideal para obra nueva y reformas recientes) o **sin neutro** (perfecto para instalaciones eléctricas antiguas).

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/WS-EUK01.png" alt="Aqara Smart Wall Switch H1 EU sin neutro" loading="lazy" />
    </div>
    <span class="product-card__badge">Sin neutro</span>
    <h4 class="product-card__title">Aqara Smart Wall Switch H1 EU (sin neutro)</h4>
    <p class="product-card__description">Interruptor de pared Zigbee 3.0 premium en formato europeo, que se instala <strong>sin cable neutro</strong>. Disponible con una tecla (WS-EUK01) o con dos teclas (WS-EUK02). Acabado premium, muy fiable y excelente compatibilidad con Zigbee2MQTT.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Aqara+H1+EU+WS-EUK01+no+neutral&tag=gladproj-21" target="_blank" rel="noopener">Ver en Amazon</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="/img/docs/fr/installation/recommended-hardware/aqara_h2.jpg" alt="Aqara Light Switch H2 EU" loading="lazy" />
    </div>
    <span class="product-card__badge">Con neutro</span>
    <h4 class="product-card__title">Aqara Light Switch H2 EU (con neutro)</h4>
    <p class="product-card__description">Generación 2024, <strong>doble protocolo Zigbee 3.0 + Thread/Matter</strong>: úsalo hoy en Zigbee con Zigbee2MQTT y pásate más adelante a Matter/Thread mediante una simple actualización de firmware OTA, sin cambiar el hardware. Disponible con una tecla (WS-K07D, 1 canal) o con dos teclas (WS-K08D, 2 canales). Recomendado si tienes cable neutro en el interruptor.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Aqara+Light+Switch+H2+EU+WS-K07D&tag=gladproj-21" target="_blank" rel="noopener">Ver en Amazon</a>
  </div>
</div>

## Sensores de fugas de agua

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/SNZB-05P.png" alt="Sensor de fugas de agua Zigbee SONOFF SNZB-05P" loading="lazy" />
    </div>
    <span class="product-card__badge">Recomendado</span>
    <h4 class="product-card__title">SONOFF SNZB-05P: sensor de fugas de agua Zigbee (IP67)</h4>
    <p class="product-card__description">Sensor de fugas de agua Zigbee con certificación IP67 y sonda remota extensible. Perfecto para colocarlo bajo el fregadero, detrás de la lavadora o junto al calentador de agua.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=SONOFF+SNZB-05P&tag=gladproj-21" target="_blank" rel="noopener">Ver en Amazon</a>
  </div>
</div>

## Detectores de humo

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/SMSZB-120.jpg" alt="Frient Intelligent Smoke Alarm SMSZB-120" loading="lazy" />
    </div>
    <span class="product-card__badge">Recomendado</span>
    <h4 class="product-card__title">Frient: Intelligent Smoke Alarm Zigbee 3.0 (SMSZB-120)</h4>
    <p class="product-card__description">Detector de humo Zigbee de calidad profesional con certificación EN 14604. Muy bien valorado en la comunidad Zigbee2MQTT, con batería de larga duración incluida.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Frient+Smoke+Alarm+SMSZB-120&tag=gladproj-21" target="_blank" rel="noopener">Ver en Amazon</a>
  </div>
</div>

## Sensores de vibración y de golpes en la puerta

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/DJT11LM.jpg" alt="Sensor de vibración Aqara" loading="lazy" />
    </div>
    <span class="product-card__badge">Recomendado</span>
    <h4 class="product-card__title">Aqara Vibration Sensor</h4>
    <p class="product-card__description">Detecta vibraciones, inclinación y caída libre. Ideal para detectar golpes en una puerta (seguridad) o la rotura de un cristal, o para saber cuándo ha terminado el ciclo de tu lavadora.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Aqara+Vibration+Sensor+DJT11LM&tag=gladproj-21" target="_blank" rel="noopener">Ver en Amazon</a>
  </div>
</div>

## Cámaras

Las cámaras **no** utilizan el protocolo Zigbee (necesitan demasiado ancho de banda). Para las cámaras, te recomiendo **cámaras IP compatibles con ONVIF/RTSP**, que se integran en Gladys a través de la [integración Cámara](/es/docs/integrations/camera/).

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="/img/docs/fr/installation/recommended-hardware/reolink_5mp_camera.jpg" alt="Reolink 5MP PoE" loading="lazy" />
    </div>
    <span class="product-card__badge">Recomendado</span>
    <h4 class="product-card__title">Reolink (PoE o Wi-Fi)</h4>
    <p class="product-card__description">Excelente calidad de imagen, compatibilidad nativa con RTSP y funcionamiento totalmente local, sin nube obligatoria. La referencia para instalaciones autoalojadas con Gladys.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Reolink+PoE+camera&tag=gladproj-21" target="_blank" rel="noopener">Ver en Amazon</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="/img/docs/fr/installation/recommended-hardware/tapo_c200.jpg" alt="TP-Link Tapo C200" loading="lazy" />
    </div>
    <span class="product-card__badge">Económica</span>
    <h4 class="product-card__title">TP-Link Tapo C200 / C210</h4>
    <p class="product-card__description">Cámara Wi-Fi de interior asequible con compatibilidad RTSP. Una buena opción de iniciación para empezar sin gastar mucho dinero.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=TP-Link+Tapo+C200&tag=gladproj-21" target="_blank" rel="noopener">Ver en Amazon</a>
  </div>
</div>

## Resumen

Para equipar una casa típica con Gladys, te recomiendo empezar con:

1. Un **SONOFF Zigbee 3.0 USB Dongle Plus-E** como coordinador.
2. Algunos **sensores de temperatura y humedad Aqara** en tus estancias principales.
3. **Sensores de movimiento Aqara P1** para la detección de presencia.
4. **Enchufes inteligentes Nous A1Z** para supervisar y controlar tus electrodomésticos.
5. **Bombillas Philips Hue o Innr** para tu iluminación.
6. Algunos **botones Aqara Mini Switch** para controlarlo todo físicamente.

Después podrás ampliar tu instalación paso a paso según tus necesidades.

Para más información sobre cómo integrar estos dispositivos, consulta la [página de la integración Zigbee2MQTT](/es/docs/integrations/zigbee2mqtt/).
