---
id: callmebot
title: Send Gladys messages to WhatsApp and Signal with CallMeBot
sidebar_label: CallMeBot
---

CallMeBot is a service that allows Gladys to send messages to various messaging platforms like WhatsApp and Signal.

This integration is one-way only - Gladys can send messages but cannot receive replies.

## Limitations

- One-way messaging only (Gladys can send but not receive messages)
- Does not support sending images
- Message rate limits apply (check CallMeBot website for current limits)

## Setup Instructions

### 1. Get Your API Key

First, you'll need to get an API key from CallMeBot:

#### For WhatsApp:

1. Visit [CallMeBot's WhatsApp page](https://www.callmebot.com/blog/free-api-whatsapp-messages/)
2. Follow their activation steps:
   - Send a message to their WhatsApp number
   - Wait for the confirmation message with your API key
   - Save your API key for the next step

#### For Signal:

1. Visit [CallMeBot's Signal page](https://www.callmebot.com/blog/free-api-signal-send-messages/)
2. Follow their activation steps:
   - Start a chat with their Signal bot
   - Follow the instructions to get your API key
   - Save your API key for the next step

### 2. Configure Gladys

1. In Gladys, go to the "Integrations" list
2. Find "CallMeBot"
3. Choose your messaging platform:
   - For WhatsApp: Select "WhatsApp" and enter your phone number in international format (e.g., +1234567890)
   - For Signal: Select "Signal" and enter the UUID provided by CallMeBot (found in the URL they gave you)
4. Enter your API key
5. Click "Save"

## Usage

Once configured, you can use CallMeBot in scenes using the "Send message" action.

## Troubleshooting

If you're having issues:

1. Verify your API key is correct
2. Check if you've completed the activation process
3. Ensure you're within the rate limits
4. Check your internet connection

For more help, visit the [CallMeBot website](https://www.callmebot.com/) or the [Gladys community forum](https://community.gladysassistant.com/).
