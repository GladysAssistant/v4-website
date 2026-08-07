---
id: pilot-wire
title: "Zigbee pilot wire module: control electric heaters in Gladys"
description: "Control your electric radiators with a Zigbee pilot wire module (NodOn, Legrand) in Gladys Assistant: comfort, eco and frost protection orders, locally over Zigbee2MQTT."
sidebar_label: Pilot wire (heating)
keywords:
  - zigbee pilot wire
  - pilot wire module
  - nodon pilot wire
  - electric heater home automation
  - fil pilote zigbee
  - control electric radiator zigbee
---

import JsonLd from '@site/src/components/seo/JsonLd';

In France, and in a few neighbouring countries, almost every recent electric radiator has a **pilot wire** (*fil pilote*): an extra wire, usually black, through which the radiator receives operating orders. It is the cheapest and simplest way to make electric heating controllable, without replacing the radiators.

With a **Zigbee pilot wire module** and Gladys Assistant, you drive those orders from your dashboard and your scenes, entirely locally: no subscription, no manufacturer cloud, and heating keeps working even if your internet connection is down.

## How the pilot wire works

The pilot wire does not carry the heating power: it carries an **instruction**. The radiator keeps its own thermostat, set to your comfort temperature, and the pilot wire tells it what to do with it.

There are four standard orders:

- **Comfort**: the radiator heats to the temperature set on its own dial.
- **Eco**: it heats around 3.5 °C below the comfort setting.
- **Frost protection**: it maintains around 7 °C, for a long absence.
- **Off**: the radiator stops heating.

Modules and radiators described as "6 orders" add **Comfort -1** and **Comfort -2**, that is 1 °C and 2 °C below the comfort setting, useful for a gentle setback rather than a full drop to eco.

## Choosing a Zigbee pilot wire module

A pilot wire module sits between your electrical installation and the radiator: it receives commands over Zigbee and applies the matching order on the pilot wire. Two modules come up regularly in the Gladys community, both recognised by Zigbee2MQTT:

- **NodOn SIN-4-FP-21**: a micromodule that fits in the connection box behind the radiator, or in the electrical panel. Compact, 6 orders, and the most widely used.
- **Legrand 064882**: Legrand's pilot wire module, same idea, for the panel or a flush-mounting box.

A few things to check before buying:

- **6 orders rather than 4** if your radiators support them: this gives you a progressive setback.
- **Available space**: the connection box behind a radiator is often tight. Check the module dimensions, or install it on the panel side.
- **One module per radiator** if you want to control each room independently. A single module at the head of a circuit controls every radiator on that circuit together.

:::warning
Installing a pilot wire module means working on your 230 V electrical installation. Switch off the relevant breaker before touching anything, and if you are not comfortable with the wiring, call an electrician. A mistake on the pilot wire can damage the radiator.
:::

## Pairing the module in Gladys

The module connects to Gladys through [Zigbee2MQTT](/docs/integrations/zigbee2mqtt), like any other Zigbee device:

1. In Gladys, open `Integrations / Zigbee2Mqtt`, then the **Discover** menu.
2. Click **Permit joining**.
3. Put the module into pairing mode. On most modules this is a long press on the front button, until the LED blinks.
4. The module appears in the list with its detected features. Name it, assign it to a room, and save it.
5. Turn joining off again once you are done, for security.

If the module does not show up, move it closer to the coordinator for pairing, or check the troubleshooting section of the [Zigbee2MQTT documentation](/docs/integrations/zigbee2mqtt).

## Controlling your heating from Gladys

Since Gladys 4.48, the **pilot wire mode** is a feature in its own right: the module reports a mode selector, not a plain on/off switch.

- On the **dashboard**, add the module to a "Devices" widget: you pick the order (comfort, eco, frost protection, off) from a drop-down.
- In **scenes**, you can change the mode of one or several radiators, and this is where it gets interesting.

A few automations worth building:

- **Night setback**: switch the bedrooms to eco at 11 pm and back to comfort at 6:30 am, with a [scheduled trigger](/docs/scenes/scheduled-trigger).
- **Empty house**: drop every radiator to eco when the [house becomes empty](/docs/scenes/house-empty), and return to comfort when someone comes back.
- **Long absence**: switch to frost protection during the holidays, and back to comfort a few hours before you return.
- **EDF Tempo red days**: if you are on the [EDF Tempo tariff](/docs/scenes/edf-tempo), lowering the heating on red days is the most profitable saving in the whole house, since heating is the biggest consumer.

Combine this with [electricity consumption monitoring](/docs/integrations/enedis) and you see the effect of those scenes on your bill directly.

## Frequently asked questions

### What is a Zigbee pilot wire module?

It is a small electrical module placed between your installation and an electric radiator, which applies on its pilot wire the order you send over Zigbee: comfort, eco, frost protection or off. It makes a standard radiator controllable from a home automation platform such as Gladys, without replacing the radiator.

### Which Zigbee pilot wire module works with Gladys?

The NodOn SIN-4-FP-21 is the one most used in the Gladys community, and the Legrand 064882 fills the same role. Both are recognised by Zigbee2MQTT and report their pilot wire mode in Gladys. Prefer a 6-order module if your radiators support it, and check the space available in the connection box behind the radiator.

### What are the pilot wire orders?

The four standard orders are Comfort (the radiator heats to the temperature set on its dial), Eco (around 3.5 °C below), Frost protection (around 7 °C) and Off. Modules and radiators with 6 orders add Comfort -1 and Comfort -2, a setback of 1 °C and 2 °C.

### Does heating control work without internet?

Yes. The module talks over Zigbee to the USB dongle plugged into your Gladys machine, and Gladys runs at your home. Your heating scenes keep running if your internet connection goes down, unlike connected thermostats that depend on their manufacturer's cloud.

### Do I need one pilot wire module per radiator?

To control each room independently, yes: one module per radiator. If you are happy to control several radiators together, a single module at the head of the circuit in the electrical panel covers every radiator on that circuit.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a Zigbee pilot wire module?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is a small electrical module placed between your installation and an electric radiator, which applies on its pilot wire the order you send over Zigbee: comfort, eco, frost protection or off. It makes a standard radiator controllable from a home automation platform such as Gladys, without replacing the radiator.",
        },
      },
      {
        "@type": "Question",
        name: "Which Zigbee pilot wire module works with Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The NodOn SIN-4-FP-21 is the one most used in the Gladys community, and the Legrand 064882 fills the same role. Both are recognised by Zigbee2MQTT and report their pilot wire mode in Gladys. Prefer a 6-order module if your radiators support it, and check the space available in the connection box behind the radiator.",
        },
      },
      {
        "@type": "Question",
        name: "What are the pilot wire orders?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The four standard orders are Comfort (the radiator heats to the temperature set on its dial), Eco (around 3.5 °C below), Frost protection (around 7 °C) and Off. Modules and radiators with 6 orders add Comfort -1 and Comfort -2, a setback of 1 °C and 2 °C.",
        },
      },
      {
        "@type": "Question",
        name: "Does heating control work without internet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The module talks over Zigbee to the USB dongle plugged into your Gladys machine, and Gladys runs at your home. Your heating scenes keep running if your internet connection goes down, unlike connected thermostats that depend on their manufacturer's cloud.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need one pilot wire module per radiator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To control each room independently, yes: one module per radiator. If you are happy to control several radiators together, a single module at the head of the circuit in the electrical panel covers every radiator on that circuit.",
        },
      },
    ],
  }}
/>
