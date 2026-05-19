---
id: recommended-hardware
title: Recommended Hardware
sidebar_label: Recommended hardware
---

To build a reliable and durable smart home with Gladys Assistant, **I recommend the Zigbee protocol** for most of your devices.

Zigbee is a mesh wireless protocol: each mains-powered device extends the network and improves overall reliability. It is also **open**, **standardized**, and **vendor independent**, which lets you mix brands without being locked into a proprietary ecosystem.

This page lists the most highly-rated Zigbee devices in each category, the ones I would buy today to equip a home from scratch.

> 💡 All Zigbee devices listed below pair with a Zigbee coordinator (the "dongle") through the [Zigbee2MQTT integration](/docs/integrations/zigbee2mqtt/).

## Zigbee Coordinator (the "dongle")

The Zigbee coordinator is **the most important device** of your installation: it is the brain of your Zigbee network. Pick a quality model, you'll keep it for years.

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/ZBDongle-E.jpg" alt="SONOFF Zigbee 3.0 USB Dongle Plus-E" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommended</span>
    <h4 class="product-card__title">SONOFF Zigbee 3.0 USB Dongle Plus-E</h4>
    <p class="product-card__description">Best price/performance USB coordinator. Based on the EFR32MG21 chip, officially supported by Zigbee2MQTT. This is the one I use daily.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=SONOFF+Zigbee+3.0+USB+Dongle+Plus-E&tag=gladproj-21" target="_blank" rel="noopener">View on Amazon</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/SLZB-06.png" alt="SMLight SLZB-06" loading="lazy" />
    </div>
    <span class="product-card__badge">Ethernet alternative</span>
    <h4 class="product-card__title">SMLight SLZB-06</h4>
    <p class="product-card__description">Ethernet/PoE Zigbee coordinator. Useful if you want to move the dongle away from your server (e.g. in a tech closet) to get better Zigbee mesh coverage. <strong>⚠️ With this model, you'll have to install and run Zigbee2MQTT yourself</strong> (Docker, dedicated machine…) — Gladys' Zigbee2MQTT integration won't start it automatically, unlike with the USB dongle.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=SMLight+SLZB-06&tag=gladproj-21" target="_blank" rel="noopener">View on Amazon</a>
  </div>
</div>

> ⚠️ Use a **USB 2.0 extension cable** to move the dongle a few centimeters away from your server. USB 3.0 ports and metal cases create heavy interference on the 2.4 GHz band.

## Smart Bulbs

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/9290024687.jpg" alt="Philips Hue White and Color Ambiance E27" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommended</span>
    <h4 class="product-card__title">Philips Hue White and Color Ambiance E27</h4>
    <p class="product-card__description">Best-in-class Zigbee bulb: excellent color rendering, very reliable, acts as a Zigbee router. Pairs directly with Zigbee2MQTT, no Hue bridge needed.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Philips+Hue+White+and+Color+Ambiance+E26&tag=gladproj-21" target="_blank" rel="noopener">View on Amazon</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/AC10787.jpg" alt="Innr Smart Bulb E27 Color" loading="lazy" />
    </div>
    <span class="product-card__badge">Budget alternative</span>
    <h4 class="product-card__title">Innr Smart Bulb E27 Color</h4>
    <p class="product-card__description">Dutch brand specialized in Zigbee, very well supported by Zigbee2MQTT. Great value, also acts as a Zigbee router. A solid alternative to Hue.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Innr+E27+Zigbee+color&tag=gladproj-21" target="_blank" rel="noopener">View on Amazon</a>
  </div>
</div>

## Smart Plugs (with energy monitoring)

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/A1Z.jpg" alt="Nous A1Z Zigbee Smart Plug" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommended</span>
    <h4 class="product-card__title">Nous A1Z Zigbee Smart Plug</h4>
    <p class="product-card__description">One of the most popular Zigbee plugs in the Zigbee2MQTT community. Real-time energy monitoring, reliable, and acts as a Zigbee router to extend your mesh.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Nous+A1Z+Zigbee+plug&tag=gladproj-21" target="_blank" rel="noopener">View on Amazon</a>
  </div>
</div>

## Temperature & Humidity Sensors

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/WSDCGQ11LM.jpg" alt="Aqara Temperature and Humidity Sensor" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommended</span>
    <h4 class="product-card__title">Aqara Temperature and Humidity Sensor</h4>
    <p class="product-card__description">Very accurate, excellent battery life (2+ years), tiny form factor. The reference under Zigbee2MQTT for measuring temperature, humidity and atmospheric pressure.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Aqara+Temperature+Humidity+Sensor&tag=gladproj-21" target="_blank" rel="noopener">View on Amazon</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/SNZB-02D.jpg" alt="SONOFF SNZB-02D with display" loading="lazy" />
    </div>
    <span class="product-card__badge">With display</span>
    <h4 class="product-card__title">SONOFF SNZB-02D</h4>
    <p class="product-card__description">Zigbee temperature and humidity sensor with a built-in LCD display. Great value, perfect for living areas where you want to see the values at a glance. I use it daily.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=SONOFF+SNZB-02D&tag=gladproj-21" target="_blank" rel="noopener">View on Amazon</a>
  </div>
</div>

## Motion Sensors

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/RTCGQ14LM.jpg" alt="Aqara Motion Sensor P1" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommended</span>
    <h4 class="product-card__title">Aqara Motion Sensor P1</h4>
    <p class="product-card__description">Best-rated Zigbee PIR motion sensor: configurable sensitivity, configurable blind period, light measurement, very long battery life on a CR2450 cell.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Aqara+Motion+Sensor+P1&tag=gladproj-21" target="_blank" rel="noopener">View on Amazon</a>
  </div>
</div>

## Door & Window Sensors

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/E2.jpg" alt="Nous E2 Zigbee Door & Window Sensor" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommended</span>
    <h4 class="product-card__title">Nous E2 — Zigbee 3.0 Door & Window Sensor</h4>
    <p class="product-card__description">Fully local Zigbee 3.0 door/window sensor. Compact form factor, long battery life, excellent value, and great Zigbee2MQTT support.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Nous+E2+Zigbee+door+sensor&tag=gladproj-21" target="_blank" rel="noopener">View on Amazon</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/MCCGQ12LM.jpg" alt="Aqara Door and Window Sensor T1 MCCGQ12LM" loading="lazy" />
    </div>
    <span class="product-card__badge">Premium</span>
    <h4 class="product-card__title">Aqara Door and Window Sensor T1 (MCCGQ12LM)</h4>
    <p class="product-card__description">Pure Zigbee 3.0 version (not the new Matter/Thread one) of the Aqara door sensor. Even smaller than the original model, very reliable, premium build quality.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Aqara+Door+Window+Sensor+T1+MCCGQ12LM&tag=gladproj-21" target="_blank" rel="noopener">View on Amazon</a>
  </div>
</div>

## Wireless Buttons & Remotes

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/WXKG11LM.jpg" alt="Aqara Wireless Mini Switch" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommended</span>
    <h4 class="product-card__title">Aqara Wireless Mini Switch</h4>
    <p class="product-card__description">Tiny wireless button with single press / double press / long press detection. Three actions on a single button — perfect for custom automations.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Aqara+Wireless+Mini+Switch+WXKG11LM&tag=gladproj-21" target="_blank" rel="noopener">View on Amazon</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/SNZB-01P.jpg" alt="SONOFF SNZB-01P" loading="lazy" />
    </div>
    <span class="product-card__badge">Alternative</span>
    <h4 class="product-card__title">SONOFF SNZB-01P</h4>
    <p class="product-card__description">Affordable Zigbee button with a magnetic base. Detects single/double/long press. Great to replace a switch or create scene shortcuts.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=SONOFF+SNZB-01P&tag=gladproj-21" target="_blank" rel="noopener">View on Amazon</a>
  </div>
</div>

## Roller Shutter / Blind Modules

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/SR-ZG9080A.jpg" alt="Sunricher Zigbee Roller Shutter Module" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommended</span>
    <h4 class="product-card__title">Sunricher Zigbee 3.0 Roller Shutter Module</h4>
    <p class="product-card__description">Reliable in-wall module that turns any existing roller shutter into a smart one. Very well supported by Zigbee2MQTT, with end-of-travel and auto-calibration.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Sunricher+Zigbee+roller+shutter&tag=gladproj-21" target="_blank" rel="noopener">View on Amazon</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/MINI-ZBRBS.png" alt="SONOFF MINI-ZBRBS Zigbee Roller Shutter Module" loading="lazy" />
    </div>
    <span class="product-card__badge">Alternative</span>
    <h4 class="product-card__title">SONOFF MINI-ZBRBS — Zigbee Roller Shutter Module</h4>
    <p class="product-card__description">Compact in-wall Zigbee 3.0 roller shutter module from SONOFF. A great alternative to the Sunricher, from a brand very well supported by Zigbee2MQTT.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=SONOFF+MINI-ZBRBS+roller+shutter&tag=gladproj-21" target="_blank" rel="noopener">View on Amazon</a>
  </div>
</div>

## In-Wall Light Modules

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/ZBMINIL2.jpg" alt="SONOFF ZBMINI-L2" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommended</span>
    <h4 class="product-card__title">SONOFF ZBMINI-L2</h4>
    <p class="product-card__description">In-wall switch module that works <strong>without neutral wire</strong>. The perfect solution to retrofit older electrical installations.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=SONOFF+ZBMINI-L2&tag=gladproj-21" target="_blank" rel="noopener">View on Amazon</a>
  </div>
</div>

## Smart Wall Switches

These switches **replace your existing wall switches** and let you control a light both physically (via the rocker) and remotely (through Gladys). Available in **with neutral wire** (ideal for new builds and recent renovations) or **no neutral** (perfect for older electrical installations).

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/WS-EUK01.png" alt="Aqara Smart Wall Switch H1 EU no neutral" loading="lazy" />
    </div>
    <span class="product-card__badge">No neutral</span>
    <h4 class="product-card__title">Aqara Smart Wall Switch H1 EU (no neutral)</h4>
    <p class="product-card__description">Premium Zigbee 3.0 wall switch in European format, installs <strong>without a neutral wire</strong>. Comes in single (WS-EUK01) or double rocker (WS-EUK02). Premium finish, very reliable, excellent Zigbee2MQTT support.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Aqara+H1+EU+WS-EUK01+no+neutral&tag=gladproj-21" target="_blank" rel="noopener">View on Amazon</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="/img/docs/fr/installation/recommended-hardware/aqara_h2.jpg" alt="Aqara Light Switch H2 EU" loading="lazy" />
    </div>
    <span class="product-card__badge">With neutral</span>
    <h4 class="product-card__title">Aqara Light Switch H2 EU (with neutral)</h4>
    <p class="product-card__description">2024 generation, <strong>dual protocol Zigbee 3.0 + Thread/Matter</strong>: use it in Zigbee today with Zigbee2MQTT, and switch to Matter/Thread later via a simple OTA firmware flash, without replacing the hardware. Available in single (WS-K07D, 1 channel) or double rocker (WS-K08D, 2 channels). Recommended if you have a neutral wire at the switch.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Aqara+Light+Switch+H2+EU+WS-K07D&tag=gladproj-21" target="_blank" rel="noopener">View on Amazon</a>
  </div>
</div>

## Water Leak Sensors

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/SNZB-05P.png" alt="SONOFF SNZB-05P Zigbee Water Leak Sensor" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommended</span>
    <h4 class="product-card__title">SONOFF SNZB-05P — Zigbee Water Leak Sensor (IP67)</h4>
    <p class="product-card__description">IP67-rated Zigbee water leak sensor with an extendable remote probe. Perfect to place under the sink, behind the washing machine or near the water heater.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=SONOFF+SNZB-05P&tag=gladproj-21" target="_blank" rel="noopener">View on Amazon</a>
  </div>
</div>

## Smoke Detectors

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/SMSZB-120.jpg" alt="Frient Intelligent Smoke Alarm SMSZB-120" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommended</span>
    <h4 class="product-card__title">Frient — Intelligent Smoke Alarm Zigbee 3.0 (SMSZB-120)</h4>
    <p class="product-card__description">EN 14604 certified, professional-grade Zigbee smoke detector. Very well rated in the Zigbee2MQTT community, long-life battery included.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Frient+Smoke+Alarm+SMSZB-120&tag=gladproj-21" target="_blank" rel="noopener">View on Amazon</a>
  </div>
</div>

## Vibration / Door Knock Sensors

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="https://www.zigbee2mqtt.io/images/devices/DJT11LM.jpg" alt="Aqara Vibration Sensor" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommended</span>
    <h4 class="product-card__title">Aqara Vibration Sensor</h4>
    <p class="product-card__description">Detects vibrations, tilt, and free fall. Great to detect knocks on a door (security), broken glass, or to know when your washing machine cycle is complete.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Aqara+Vibration+Sensor+DJT11LM&tag=gladproj-21" target="_blank" rel="noopener">View on Amazon</a>
  </div>
</div>

## Cameras

Cameras do **not** use the Zigbee protocol (too much bandwidth). For cameras, I recommend **IP cameras with ONVIF/RTSP support**, which integrate with Gladys through the [Camera integration](/docs/integrations/camera/).

<div class="product-grid">
  <div class="product-card">
    <div class="product-card__image">
      <img src="/img/docs/fr/installation/recommended-hardware/reolink_5mp_camera.jpg" alt="Reolink 5MP PoE" loading="lazy" />
    </div>
    <span class="product-card__badge">Recommended</span>
    <h4 class="product-card__title">Reolink (PoE or Wi-Fi)</h4>
    <p class="product-card__description">Excellent image quality, native RTSP support, fully local without mandatory cloud. The reference for self-hosted setups with Gladys.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=Reolink+PoE+camera&tag=gladproj-21" target="_blank" rel="noopener">View on Amazon</a>
  </div>
  <div class="product-card">
    <div class="product-card__image">
      <img src="/img/docs/fr/installation/recommended-hardware/tapo_c200.jpg" alt="TP-Link Tapo C200" loading="lazy" />
    </div>
    <span class="product-card__badge">Budget</span>
    <h4 class="product-card__title">TP-Link Tapo C200 / C210</h4>
    <p class="product-card__description">Affordable indoor Wi-Fi camera with RTSP support. A good entry-level option to get started without breaking the bank.</p>
    <a class="product-card__cta" href="https://www.amazon.com/s?k=TP-Link+Tapo+C200&tag=gladproj-21" target="_blank" rel="noopener">View on Amazon</a>
  </div>
</div>

## Summary

To equip a typical home with Gladys, I recommend starting with:

1. A **SONOFF Zigbee 3.0 USB Dongle Plus-E** as your coordinator.
2. A few **Aqara temperature & humidity sensors** in your main rooms.
3. **Aqara P1 motion sensors** for presence detection.
4. **Nous A1Z smart plugs** to monitor and control your appliances.
5. **Philips Hue or Innr bulbs** for your lighting.
6. A few **Aqara Mini Switch buttons** to control everything physically.

Then you can expand step by step based on your needs.

For more details on integrating these devices, see the [Zigbee2MQTT integration page](/docs/integrations/zigbee2mqtt/).
