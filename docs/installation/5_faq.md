---
id: faq
title: FAQ
sidebar_label: FAQ
---

### What are the default Rasperry Pi OS image credentials to connect using SSH?

The proposed Raspberry Pi OS image is based on the official image of the Raspberry Pi foundation.

To connect in SSH, the identifiers are the same as those in the image of the foundation:

- **Login**: pi
- **Password**: raspberry

### How to update Gladys?

If you have installed Gladys with the Raspberry Pi OS image, Gladys will update automatically thanks to [Watchtower](https://containrrr.dev/watchtower/).

Watchtower is a Docker container which runs next to Gladys, and which checks every 24 hours for a new Gladys update.

If you have installed Gladys manually, look at the "Docker" tab of this documentation to set up Watchtower 🙂

### Who uses Gladys Assistant 4?

Gladys Assistant v4 was released in [November 2020](/blog/gladys-assistant-4-launch/). Since then, hundreds of you have used Gladys Assistant, and the goal is to grow to thousands in the coming months!

Gladys Assistant is installed by all types of users:

- Complete novices, who want to automate their home with a simple, powerful product that respects their privacy.
- Developers who find it crazy to be able to code for their home and who contribute to this open-source project!
- Pros, who manage impressive fleet of sensors (Yes, we're talking about you [@Terdious](https://community.gladysassistant.com/u/terdious/summary) 😛)

### How to contribute to the project?

Gladys Assistant is fully open-source and available on [GitHub](https://github.com/GladysAssistant/gladys).

Any PR is welcome 🙂

If you want to contribute, don't hesitate to come to [the community](https://community.gladysassistant.com/) to talk about the development you want to get started on. This will allow you to see with the other developers if someone else is not already working on it, and especially to discuss "specifications" before going into development!

### What is the philosophy of the project?

The goal of the project is to create a home automation software:

- **Privacy friendly**, the data is stored locally at the user's premises.
- **Easy to use**. User experience is our priority. Gladys has been developed with attention to detail, each feature has been thought through before being developed. It is not the technical constraints that define our product choices, it is our product requirement that forces us to find technical solutions.
- **Design**. Gladys Assistant's beautiful interface is the signature of the project, and we spend a lot of time making sure that stays that way.
- **Efficient**. Gladys must be able to take a certain load without compromising the fluidity of the interface.
- **Lightweight**. We want the software to have a minimal footprint on the user's system. We spend a lot of time analyzing the dependencies we use, in order to deliver a lightweight product.
- **Stable**. Gladys must remain stable over the long term. We want our users to use Gladys for years to come, with no downtime, with continuous updates and without a hitch.
- **Secure**: We put all the best practices in place so that Gladys is secure. We have automated processes in place to ensure that security regressions are not introduced in every version of Gladys.
