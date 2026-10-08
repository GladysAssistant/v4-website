---
id: recommended-hardware
title: Empfohlene Hardware
description: "Die beste Zigbee-Hardware für ein zuverlässiges Smart Home mit Gladys Assistant: empfohlener Koordinator-Stick und die bestbewerteten Geräte in jeder Kategorie."
sidebar_label: Empfohlene Hardware
---

Um mit Gladys Assistant ein zuverlässiges und langlebiges Smart Home aufzubauen, **empfehle ich für die meisten deiner Geräte das Zigbee-Protokoll**.

Zigbee ist ein vermaschtes Funkprotokoll (Mesh): Jedes Gerät mit Netzanschluss erweitert das Netzwerk und verbessert die Zuverlässigkeit insgesamt. Außerdem ist es **offen**, **standardisiert** und **herstellerunabhängig**. So kannst du Marken frei kombinieren, ohne an ein proprietäres Ökosystem gebunden zu sein.

Auf dieser Seite findest du die am besten bewerteten Zigbee-Geräte jeder Kategorie – genau die, die ich heute kaufen würde, um ein Zuhause von Grund auf auszustatten.

> 💡 Alle unten aufgeführten Zigbee-Geräte werden über die [Zigbee2MQTT-Integration](/de/docs/integrations/zigbee2mqtt/) mit einem Zigbee-Koordinator (dem „Stick“) gekoppelt.

## Zigbee-Koordinator (der „Stick“)

Der Zigbee-Koordinator ist **das wichtigste Gerät** deiner Installation: Er ist das Gehirn deines Zigbee-Netzwerks. Wähle ein hochwertiges Modell, du wirst es jahrelang behalten.

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/ZBDongle-E.jpg" alt="SONOFF Zigbee 3.0 USB Dongle Plus-E" loading="lazy" />
    </div>
    <span class="product-card__badge">Empfohlen</span>
    <h4 class="product-card__title">SONOFF Zigbee 3.0 USB Dongle Plus-E</h4>
    <p class="product-card__description">USB-Koordinator mit dem besten Preis-Leistungs-Verhältnis. Basiert auf dem EFR32MG21-Chip und wird offiziell von Zigbee2MQTT unterstützt. Diesen Stick nutze ich täglich.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=SONOFF+Zigbee+3.0+USB+Dongle+Plus-E&tag=gladproj-21" target="_blank" rel="noopener">Bei Amazon ansehen</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/SLZB-06.png" alt="SMLight SLZB-06" loading="lazy" />
    </div>
    <span class="product-card__badge">Ethernet-Alternative</span>
    <h4 class="product-card__title">SMLight SLZB-06</h4>
    <p class="product-card__description">Zigbee-Koordinator mit Ethernet/PoE. Praktisch, wenn du den Stick entfernt von deinem Server platzieren möchtest (z. B. im Technikschrank), um eine bessere Abdeckung des Zigbee-Mesh zu erreichen. Seit Gladys 5 unterstützt die Zigbee2MQTT-Integration Netzwerk-Koordinatoren: Gladys installiert und verwaltet Zigbee2MQTT weiterhin für dich (<a href="/de/docs/integrations/zigbee2mqtt/#use-a-network-coordinator">Schritte zur Einrichtung</a>).</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=SMLight+SLZB-06&tag=gladproj-21" target="_blank" rel="noopener">Bei Amazon ansehen</a>
  </div>
</div>

> ⚠️ Verwende ein **USB-2.0-Verlängerungskabel**, um den Stick ein paar Zentimeter von deinem Server wegzubewegen. USB-3.0-Ports und Metallgehäuse verursachen starke Störungen im 2,4-GHz-Band.

## Smarte Glühbirnen

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/9290024687.jpg" alt="Philips Hue White and Color Ambiance E27" loading="lazy" />
    </div>
    <span class="product-card__badge">Empfohlen</span>
    <h4 class="product-card__title">Philips Hue White and Color Ambiance E27</h4>
    <p class="product-card__description">Die beste Zigbee-Glühbirne ihrer Klasse: hervorragende Farbwiedergabe, sehr zuverlässig und arbeitet als Zigbee-Router. Lässt sich direkt mit Zigbee2MQTT koppeln, keine Hue Bridge nötig.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Philips+Hue+White+and+Color+Ambiance+E26&tag=gladproj-21" target="_blank" rel="noopener">Bei Amazon ansehen</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/AC10787.jpg" alt="Innr Smart Bulb E27 Color" loading="lazy" />
    </div>
    <span class="product-card__badge">Günstige Alternative</span>
    <h4 class="product-card__title">Innr Smart Bulb E27 Color</h4>
    <p class="product-card__description">Niederländische Marke, die auf Zigbee spezialisiert ist und sehr gut von Zigbee2MQTT unterstützt wird. Tolles Preis-Leistungs-Verhältnis, arbeitet ebenfalls als Zigbee-Router. Eine solide Alternative zu Hue.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Innr+E27+Zigbee+color&tag=gladproj-21" target="_blank" rel="noopener">Bei Amazon ansehen</a>
  </div>
</div>

## Smarte Steckdosen (mit Verbrauchsmessung)

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/A1Z.jpg" alt="Nous A1Z Zigbee Smart Plug" loading="lazy" />
    </div>
    <span class="product-card__badge">Empfohlen</span>
    <h4 class="product-card__title">Nous A1Z Zigbee Smart Plug</h4>
    <p class="product-card__description">Eine der beliebtesten Zigbee-Steckdosen in der Zigbee2MQTT-Community. Verbrauchsmessung in Echtzeit, zuverlässig und arbeitet als Zigbee-Router, um dein Mesh zu erweitern.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Nous+A1Z+Zigbee+plug&tag=gladproj-21" target="_blank" rel="noopener">Bei Amazon ansehen</a>
  </div>
</div>

## Temperatur- und Feuchtigkeitssensoren

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/WSDCGQ11LM.jpg" alt="Aqara Temperatur- und Feuchtigkeitssensor" loading="lazy" />
    </div>
    <span class="product-card__badge">Empfohlen</span>
    <h4 class="product-card__title">Aqara Temperatur- und Feuchtigkeitssensor</h4>
    <p class="product-card__description">Sehr genau, hervorragende Batterielaufzeit (über 2 Jahre), winzige Bauform. Die Referenz unter Zigbee2MQTT, um Temperatur, Luftfeuchtigkeit und Luftdruck zu messen.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Aqara+Temperature+Humidity+Sensor&tag=gladproj-21" target="_blank" rel="noopener">Bei Amazon ansehen</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/SNZB-02D.jpg" alt="SONOFF SNZB-02D mit Display" loading="lazy" />
    </div>
    <span class="product-card__badge">Mit Display</span>
    <h4 class="product-card__title">SONOFF SNZB-02D</h4>
    <p class="product-card__description">Zigbee-Temperatur- und Feuchtigkeitssensor mit integriertem LCD-Display. Tolles Preis-Leistungs-Verhältnis, ideal für Wohnräume, in denen du die Werte auf einen Blick sehen möchtest. Ich nutze ihn täglich.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=SONOFF+SNZB-02D&tag=gladproj-21" target="_blank" rel="noopener">Bei Amazon ansehen</a>
  </div>
</div>

## Bewegungsmelder

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/RTCGQ14LM.jpg" alt="Aqara Motion Sensor P1" loading="lazy" />
    </div>
    <span class="product-card__badge">Empfohlen</span>
    <h4 class="product-card__title">Aqara Motion Sensor P1</h4>
    <p class="product-card__description">Der am besten bewertete Zigbee-PIR-Bewegungsmelder: einstellbare Empfindlichkeit, einstellbare Sperrzeit, Helligkeitsmessung und sehr lange Batterielaufzeit mit einer CR2450-Zelle.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Aqara+Motion+Sensor+P1&tag=gladproj-21" target="_blank" rel="noopener">Bei Amazon ansehen</a>
  </div>
</div>

## Tür- und Fenstersensoren

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/E2.jpg" alt="Nous E2 Zigbee Tür- und Fenstersensor" loading="lazy" />
    </div>
    <span class="product-card__badge">Empfohlen</span>
    <h4 class="product-card__title">Nous E2: Zigbee-3.0-Tür- und Fenstersensor</h4>
    <p class="product-card__description">Vollständig lokaler Zigbee-3.0-Tür-/Fenstersensor. Kompakte Bauform, lange Batterielaufzeit, hervorragendes Preis-Leistungs-Verhältnis und sehr gute Unterstützung durch Zigbee2MQTT.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Nous+E2+Zigbee+door+sensor&tag=gladproj-21" target="_blank" rel="noopener">Bei Amazon ansehen</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/MCCGQ12LM.jpg" alt="Aqara Door and Window Sensor T1 MCCGQ12LM" loading="lazy" />
    </div>
    <span class="product-card__badge">Premium</span>
    <h4 class="product-card__title">Aqara Door and Window Sensor T1 (MCCGQ12LM)</h4>
    <p class="product-card__description">Reine Zigbee-3.0-Version (nicht die neue Matter/Thread-Version) des Aqara-Türsensors. Noch kleiner als das Originalmodell, sehr zuverlässig, hochwertige Verarbeitung.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Aqara+Door+Window+Sensor+T1+MCCGQ12LM&tag=gladproj-21" target="_blank" rel="noopener">Bei Amazon ansehen</a>
  </div>
</div>

## Funktaster und Fernbedienungen

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/WXKG11LM.jpg" alt="Aqara Wireless Mini Switch" loading="lazy" />
    </div>
    <span class="product-card__badge">Empfohlen</span>
    <h4 class="product-card__title">Aqara Wireless Mini Switch</h4>
    <p class="product-card__description">Winziger Funktaster, der einfachen Klick, Doppelklick und langes Drücken erkennt. Drei Aktionen mit einer einzigen Taste – perfekt für eigene Automatisierungen.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Aqara+Wireless+Mini+Switch+WXKG11LM&tag=gladproj-21" target="_blank" rel="noopener">Bei Amazon ansehen</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/SNZB-01P.jpg" alt="SONOFF SNZB-01P" loading="lazy" />
    </div>
    <span class="product-card__badge">Alternative</span>
    <h4 class="product-card__title">SONOFF SNZB-01P</h4>
    <p class="product-card__description">Günstiger Zigbee-Taster mit magnetischer Halterung. Erkennt einfachen Klick, Doppelklick und langes Drücken. Ideal, um einen Schalter zu ersetzen oder Szenen per Knopfdruck auszulösen.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=SONOFF+SNZB-01P&tag=gladproj-21" target="_blank" rel="noopener">Bei Amazon ansehen</a>
  </div>
</div>

## Rollladen- und Jalousiemodule

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/SR-ZG9080A.jpg" alt="Sunricher Zigbee-Rollladenmodul" loading="lazy" />
    </div>
    <span class="product-card__badge">Empfohlen</span>
    <h4 class="product-card__title">Sunricher Zigbee-3.0-Rollladenmodul</h4>
    <p class="product-card__description">Zuverlässiges Unterputzmodul, das jeden vorhandenen Rollladen smart macht. Sehr gut von Zigbee2MQTT unterstützt, mit Endlagenerkennung und automatischer Kalibrierung.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Sunricher+Zigbee+roller+shutter&tag=gladproj-21" target="_blank" rel="noopener">Bei Amazon ansehen</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/MINI-ZBRBS.png" alt="SONOFF MINI-ZBRBS Zigbee-Rollladenmodul" loading="lazy" />
    </div>
    <span class="product-card__badge">Alternative</span>
    <h4 class="product-card__title">SONOFF MINI-ZBRBS: Zigbee-Rollladenmodul</h4>
    <p class="product-card__description">Kompaktes Zigbee-3.0-Unterputzmodul für Rollläden von SONOFF. Eine tolle Alternative zum Sunricher, von einer Marke, die sehr gut von Zigbee2MQTT unterstützt wird.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=SONOFF+MINI-ZBRBS+roller+shutter&tag=gladproj-21" target="_blank" rel="noopener">Bei Amazon ansehen</a>
  </div>
</div>

## Unterputz-Lichtmodule

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/ZBMINIL2.jpg" alt="SONOFF ZBMINI-L2" loading="lazy" />
    </div>
    <span class="product-card__badge">Empfohlen</span>
    <h4 class="product-card__title">SONOFF ZBMINI-L2</h4>
    <p class="product-card__description">Unterputz-Schaltmodul, das <strong>ohne Neutralleiter</strong> funktioniert. Die perfekte Lösung, um ältere Elektroinstallationen nachzurüsten.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=SONOFF+ZBMINI-L2&tag=gladproj-21" target="_blank" rel="noopener">Bei Amazon ansehen</a>
  </div>
</div>

## Smarte Wandschalter

Diese Schalter **ersetzen deine vorhandenen Wandschalter** und ermöglichen es dir, ein Licht sowohl direkt (über die Wippe) als auch aus der Ferne (über Gladys) zu steuern. Erhältlich **mit Neutralleiter** (ideal für Neubauten und kürzlich renovierte Häuser) oder **ohne Neutralleiter** (perfekt für ältere Elektroinstallationen).

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/WS-EUK01.png" alt="Aqara Smart Wall Switch H1 EU ohne Neutralleiter" loading="lazy" />
    </div>
    <span class="product-card__badge">Ohne Neutralleiter</span>
    <h4 class="product-card__title">Aqara Smart Wall Switch H1 EU (ohne Neutralleiter)</h4>
    <p class="product-card__description">Hochwertiger Zigbee-3.0-Wandschalter im europäischen Format, der sich <strong>ohne Neutralleiter</strong> installieren lässt. Erhältlich als Einfach- (WS-EUK01) oder Doppelwippe (WS-EUK02). Hochwertige Oberfläche, sehr zuverlässig, hervorragende Unterstützung durch Zigbee2MQTT.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Aqara+H1+EU+WS-EUK01+no+neutral&tag=gladproj-21" target="_blank" rel="noopener">Bei Amazon ansehen</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="/img/docs/fr/installation/recommended-hardware/aqara_h2.jpg" alt="Aqara Light Switch H2 EU" loading="lazy" />
    </div>
    <span class="product-card__badge">Mit Neutralleiter</span>
    <h4 class="product-card__title">Aqara Light Switch H2 EU (mit Neutralleiter)</h4>
    <p class="product-card__description">Generation 2024, <strong>Dual-Protokoll Zigbee 3.0 + Thread/Matter</strong>: Nutze ihn heute per Zigbee mit Zigbee2MQTT und wechsle später per einfachem OTA-Firmware-Update zu Matter/Thread, ohne die Hardware tauschen zu müssen. Erhältlich als Einfach- (WS-K07D, 1 Kanal) oder Doppelwippe (WS-K08D, 2 Kanäle). Empfehlenswert, wenn am Schalter ein Neutralleiter vorhanden ist.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Aqara+Light+Switch+H2+EU+WS-K07D&tag=gladproj-21" target="_blank" rel="noopener">Bei Amazon ansehen</a>
  </div>
</div>

## Wassermelder

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/SNZB-05P.png" alt="SONOFF SNZB-05P Zigbee-Wassermelder" loading="lazy" />
    </div>
    <span class="product-card__badge">Empfohlen</span>
    <h4 class="product-card__title">SONOFF SNZB-05P: Zigbee-Wassermelder (IP67)</h4>
    <p class="product-card__description">Zigbee-Wassermelder nach IP67 mit verlängerbarer externer Sonde. Perfekt für unter die Spüle, hinter die Waschmaschine oder neben den Warmwasserspeicher.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=SONOFF+SNZB-05P&tag=gladproj-21" target="_blank" rel="noopener">Bei Amazon ansehen</a>
  </div>
</div>

## Rauchmelder

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/SMSZB-120.jpg" alt="Frient Intelligent Smoke Alarm SMSZB-120" loading="lazy" />
    </div>
    <span class="product-card__badge">Empfohlen</span>
    <h4 class="product-card__title">Frient: Intelligent Smoke Alarm Zigbee 3.0 (SMSZB-120)</h4>
    <p class="product-card__description">Nach EN 14604 zertifizierter Zigbee-Rauchmelder in Profiqualität. In der Zigbee2MQTT-Community sehr gut bewertet, Langzeitbatterie inklusive.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Frient+Smoke+Alarm+SMSZB-120&tag=gladproj-21" target="_blank" rel="noopener">Bei Amazon ansehen</a>
  </div>
</div>

## Vibrations- und Klopfsensoren

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/DJT11LM.jpg" alt="Aqara Vibrationssensor" loading="lazy" />
    </div>
    <span class="product-card__badge">Empfohlen</span>
    <h4 class="product-card__title">Aqara Vibration Sensor</h4>
    <p class="product-card__description">Erkennt Vibrationen, Neigung und freien Fall. Ideal, um Klopfen an einer Tür (Sicherheit) oder Glasbruch zu erkennen oder um zu wissen, wann deine Waschmaschine fertig ist.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Aqara+Vibration+Sensor+DJT11LM&tag=gladproj-21" target="_blank" rel="noopener">Bei Amazon ansehen</a>
  </div>
</div>

## Kameras

Kameras nutzen **kein** Zigbee (dafür ist die Bandbreite zu gering). Für Kameras empfehle ich **IP-Kameras mit ONVIF/RTSP-Unterstützung**, die über die [Kamera-Integration](/de/docs/integrations/camera/) in Gladys eingebunden werden.

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="/img/docs/fr/installation/recommended-hardware/reolink_5mp_camera.jpg" alt="Reolink 5MP PoE" loading="lazy" />
    </div>
    <span class="product-card__badge">Empfohlen</span>
    <h4 class="product-card__title">Reolink (PoE oder WLAN)</h4>
    <p class="product-card__description">Hervorragende Bildqualität, native RTSP-Unterstützung, vollständig lokal ohne Cloud-Zwang. Die Referenz für selbst gehostete Installationen mit Gladys.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Reolink+PoE+camera&tag=gladproj-21" target="_blank" rel="noopener">Bei Amazon ansehen</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="/img/docs/fr/installation/recommended-hardware/tapo_c200.jpg" alt="TP-Link Tapo C200" loading="lazy" />
    </div>
    <span class="product-card__badge">Günstig</span>
    <h4 class="product-card__title">TP-Link Tapo C200 / C210</h4>
    <p class="product-card__description">Günstige WLAN-Innenkamera mit RTSP-Unterstützung. Eine gute Einstiegsoption, um loszulegen, ohne viel Geld auszugeben.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=TP-Link+Tapo+C200&tag=gladproj-21" target="_blank" rel="noopener">Bei Amazon ansehen</a>
  </div>
</div>

## Zusammenfassung

Um ein typisches Zuhause mit Gladys auszustatten, empfehle ich dir, mit Folgendem zu beginnen:

1. Einem **SONOFF Zigbee 3.0 USB Dongle Plus-E** als Koordinator.
2. Einigen **Aqara-Temperatur- und Feuchtigkeitssensoren** in deinen wichtigsten Räumen.
3. **Aqara-P1-Bewegungsmeldern** zur Anwesenheitserkennung.
4. **Nous-A1Z-Steckdosen**, um deine Haushaltsgeräte zu überwachen und zu steuern.
5. **Philips-Hue- oder Innr-Glühbirnen** für deine Beleuchtung.
6. Einigen **Aqara-Mini-Switch-Tastern**, um alles auch per Hand zu steuern.

Danach kannst du Schritt für Schritt nach deinen Bedürfnissen erweitern.

Weitere Details zur Einbindung dieser Geräte findest du auf der [Seite zur Zigbee2MQTT-Integration](/de/docs/integrations/zigbee2mqtt/).
