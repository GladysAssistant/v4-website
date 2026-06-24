---
title: "Matterbridge + AI: Make Any Device Work With Gladys, Without Writing Code"
description: "Combining Matterbridge with AI, we can make almost any device compatible with Gladys — without writing code. Here's the vision."
authors: pierregilles
image: /img/presentation/matterbridge-ai-revolution-en.jpg
slug: matterbridge-ai-revolution
---

Hey everyone,

I spent a lot of last week tinkering with Matterbridge, and I had a real "aha" moment I wanted to share: we're going to be able to make **any device** Matter-compatible — and therefore Gladys-compatible — without writing a single line of code.

{/* truncate */}

## A bit of context

I've told you about Matterbridge before: a project that lets you install plugins to bring non-Matter devices into Matter. Today, Matterbridge already lets you use, inside Gladys:

- [Somfy shutters](/docs/integrations/somfy-tahoma/)
- [Shelly devices](/docs/integrations/shelly/) (generations 1, 2 and 3)
- and soon, Roborock robot vacuums

But Matterbridge is still young, and it doesn't have a plugin for everything.

## The problem it solves

In Gladys, I've always taken the approach of building large, tailor-made integrations, spending a lot of time on the user experience and the interface. The trouble is, some of you have very specific needs: niche devices, sometimes no longer even sold. For those products, it's hard to justify the development time of a native integration that would serve only a handful of users.

**What if those integrations could simply be Matterbridge plugins, developed by an AI?**

The Matterbridge plugin system is well-defined, well-documented, and full of examples. And these integrations often already exist elsewhere in open source (Node-RED, Home Assistant): we can simply ask the AI to translate, say, a Node-RED plugin into a Matterbridge plugin. There's nothing to invent — it's just "translating code"!

## What I tested

I built a Matterbridge plugin for my Mitsubishi air conditioner, **without writing a single line of code.** I show the whole thing here:

[![Matterbridge + AI in action](../static/img/articles/matterbridge-ai-revolution/youtube.jpg)](https://youtu.be/N2xrQtuKstM)

## And now?

The logical next step: **what if we fully automated the creation of Matterbridge plugins?** Imagine a "plugin factory", driven by Claude Code, running on a server, that would pick up GitHub tickets and develop plugins with no human intervention.

![The Matterbridge plugin factory concept](../static/img/articles/matterbridge-ai-revolution/01.jpg)

With a system like that, we could industrialize the development of integrations and close the gap between Gladys and projects like Home Assistant. I genuinely think this is a revolution — and it confirms my decision to invest heavily in Matter this year, because it really is the future of the connected home.

What do you think?
