---
id: faq
title: FAQ
sidebar_label: FAQ
---

### What are the default Rasperry Pi OS image credentials to connect using SSH?

The Raspberry Pi OS image provided on this website is based on the official image of the Raspberry Pi foundation.

To connect by SSH, the credentials are the same as those in the image of the foundation:

- **Login**: pi
- **Password**: raspberry

### How to update Gladys?

If you have installed Gladys with the Raspberry Pi OS image, Gladys will update automatically thanks to [Watchtower](https://containrrr.dev/watchtower/).

Watchtower is a Docker container which runs in parallel to Gladys. It checks, every 24 hours, for new Gladys releases anmd updates.

If you have installed Gladys manually, have a look at the "Docker" tab of this documentation. It will run you through the steps needed to set up Watchtower 🙂

### Who uses Gladys Assistant 4?

Gladys Assistant v4 was released in [November 2020](/blog/lancement-gladys-assistant-4). Since then, hundreds of you have used Gladys Assistant. The goal is to grow to thousands of users in the coming months!

Gladys Assistant is installed by all types of users:

- Complete novices, who want to automate their home with a simple, powerful product that also respects their privacy.
- Developers who find the fact they can code for their home improvement amazing. Many of them contribute to this open-source project!
- Professionals, who manage large fleets of sensors (Yes, we're talking about you [@Terdious](https://community.gladysassistant.com/u/terdious/summary) 😛)

### How to contribute to the project?

Gladys Assistant is fully open-source and available on [GitHub](https://github.com/GladysAssistant/gladys).

Any PR is welcome 🙂

If you want to contribute, head over to [the community](https://community.gladysassistant.com/) to talk about the features you want to develop. This will allow you to check in with the other developers and make sure nobody is already working on it. It will also be a good oportunity to discuss "specifications", before going into development!

### What is the philosophy of the project?

The goal of the project is to create a home automation software:

- **Privacy friendly**, the data is stored locally at the user's premises.
- **Easy to use**. User experience is our core focus. Gladys has been developed with attention to detail; each feature has been thought through before being developed. It is not the technical constraints that define our product choices, it is our product requirement that forces us to find technical solutions.
- **Design**. Gladys Assistant's beautiful interface is the signature touch of the project. We spend a lot of time making sure that stays that way.
- **Efficient**. Gladys must be able to take a certain load without compromising the fluidity of the interface.
- **Lightweight**. We want the software to have a minimal footprint on the user's system. We spend a lot of time analyzing the dependencies we use, in order to deliver a lightweight product.
- **Stable**. Gladys must remain stable in the long term. We want our users to use Gladys for years to come, with no downtime, with continuous updates and without any glitches.
- **Secure**: We put all the best practices in place in order to ensure Gladys is secure. We have automated processes in place that make sure no security regressions are introduced in each new version of Gladys.
