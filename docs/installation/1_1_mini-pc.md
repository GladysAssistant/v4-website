---
id: mini-pc
title: Install Gladys Assistant on a Mini-PC
description: "Install Gladys Assistant on a mini-PC, the recommended setup: choose your hardware, install Ubuntu Server and run Gladys with Docker."
sidebar_label: Install on a Mini-PC
keywords:
  - gladys mini pc
  - best mini pc home automation
  - mini pc home server
  - install gladys ubuntu server
  - beelink home automation
---

import JsonLd from '@site/src/components/seo/JsonLd';

Installing on a mini-PC is the recommended method to fully enjoy Gladys. These small computers are reliable, powerful, energy-efficient, and affordable, making them an excellent solution for a home setup.

## Which Hardware to Choose?

I recommend the Beelink Mini S12 Pro. It's an incredible machine, at an affordable price.

I've been using it for the past year, and I've had great performance, and no issues at all.

You can find it on [Amazon US](https://amzn.to/4gKDV2E) for $169.

## Installing Ubuntu Server on the Mini-PC

There are many videos online to install Ubuntu Server on a mini-PC.

I recommend this tutorial:

<div class="youtubeVideoContainerInBlog">
<iframe src="https://www.youtube.com/embed/n7aEcfDNULc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## Installing Gladys Assistant

Once Ubuntu is installed, all that remains is to install Docker and run Gladys via our official Docker image.

To do this, follow our detailed guide: [Install Gladys with Docker](/docs/installation/docker/).

## Frequently asked questions

### Why use a mini-PC instead of a Raspberry Pi?

A mini-PC gives you more CPU power, more RAM and faster, more reliable storage than a Raspberry Pi, usually for a similar total price once you add a case, power supply and SSD. It is the setup we recommend to run Gladys smoothly over the long term.

### Which mini-PC do you recommend for Gladys?

We use and recommend the Beelink Mini S12 Pro, available on Amazon US for around $169. It is powerful, quiet, energy-efficient and has run Gladys reliably for over a year.

### What operating system should I install?

Install Ubuntu Server, then add Docker and run the official Gladys image. The mini-PC then works as a small, always-on home server for your smart home.

<JsonLd
  data={{
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why use a mini-PC instead of a Raspberry Pi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A mini-PC gives you more CPU power, more RAM and faster, more reliable storage than a Raspberry Pi, usually for a similar total price once you add a case, power supply and SSD. It is the setup we recommend to run Gladys smoothly over the long term.",
        },
      },
      {
        "@type": "Question",
        name: "Which mini-PC do you recommend for Gladys?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use and recommend the Beelink Mini S12 Pro, available on Amazon US for around $169. It is powerful, quiet, energy-efficient and has run Gladys reliably for over a year.",
        },
      },
      {
        "@type": "Question",
        name: "What operating system should I install?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Install Ubuntu Server, then add Docker and run the official Gladys image. The mini-PC then works as a small, always-on home server for your smart home.",
        },
      },
    ],
  }}
/>
