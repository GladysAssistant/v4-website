---
id: intro
title: Scenes in Gladys Assistant
description: "Create powerful scenes in Gladys Assistant: chain actions, run them manually or with triggers, and automate your smart home your way."
sidebar_label: Introduction
---

You can create **scenes** in Gladys Assistant. These are a set of **actions** executed consecutively or in parallel.

The scenes are entirely customisable: the users create their own action suites in the Gladys `scene editor`.

These scenes can be triggered manually, automatically (via a **trigger**) or from another scene.

Some examples:

- A "turn off the whole house" scene, which would turn off all the lights in the house. This scene can also be manually triggered, to turn all the lights off, at home, remotely.
- An "Intrusion alert" scene, which sends a Telegram message to the user. This scene would be configured to run after an "If motion is detected" trigger.

## Create a scene

To create a scene, go to the "Scenes" tab of your Gladys interface, and click on the "New +" button.

![Create a scene](../../static/img/docs/en/scenes/intro/scenes-intro-1.jpg)

Choose a name for your scene, as well as an icon. This icon is only used in the Gladys interface.

![Create a scene](../../static/img/docs/en/scenes/intro/scenes-intro-2.jpg)

You are now in the scene editor. Let's go through each part of the editor together:

![Create a scene](../../static/img/docs/en/scenes/intro/scenes-intro-3.jpg)

1. Triggers: If you add triggers to your scene (this is optional), they will appear here. The same scene can be triggered by several different triggers. These triggers are all independent. 
:::note
Adding several triggers simply means: "When this event occurs OR When this event occurs OR ..."
:::
2. A step: a scene is a sequence of steps, which run one after the other. Gladys waits for a step to finish before moving on to the next one. Inside a step, "Add a parallel action" adds an action that runs at the same time as the other actions of that step. You can therefore run actions in parallel and in a sequence. Pretty powerful, right?
3. Start: This button allows you to test the execution of the scene. This button does not take triggers into account, it only executes the steps.
4. Save: This button saves the scene.
5. Delete: This button deletes the scene.
6. Add trigger: This button allows you to add a trigger to the scene. You can add as many triggers as you want.
7. The "+" button between two steps: it inserts a new step at that place in the scene.
8. Click on the scene title to edit it.
