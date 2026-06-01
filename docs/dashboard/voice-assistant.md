---
id: voice-assistant
title: Talk to Gladys from the dashboard with the voice assistant
sidebar_label: Voice assistant
---

The **Voice assistant** widget lets you talk to Gladys directly from your dashboard: speak a question, read the live transcription and AI response, and hear the answer read aloud on your device.

It uses Gladys Plus for speech-to-text, AI agent responses (open-weight models), and text-to-speech playback.

## Prerequisites

- A [Gladys Plus](/plus/) subscription with your instance connected to the gateway.
- A browser that supports microphone recording (Chrome, Firefox, Edge, Safari on recent versions).
- A **secure connection (HTTPS)** to use the microphone. If you access Gladys remotely, open it via [plus.gladysassistant.com](https://plus.gladysassistant.com).
- Microphone permission granted in your browser (on Safari: **Settings > Safari > Microphone**).

:::note
Without Gladys Plus, the widget is displayed but the microphone stays disabled. A message invites you to connect your instance to Gladys Plus.
:::

## Add the widget to your dashboard

Go to the dashboard and click **Edit**.

Add a **Voice assistant** widget, then click **Save**.

No additional configuration is required: the widget is ready to use once Gladys Plus is connected.

## Use the voice assistant

1. Click the microphone button in the widget.
2. Speak your question. Recording stops automatically when you stop talking.
3. Gladys displays what you said and the AI response in the widget.
4. The answer is played aloud on your device (text-to-speech).

The assistant takes into account your recent exchanges with Gladys to provide more contextual answers.

### Widget states

| State | Meaning |
| ----- | ------- |
| **Speak** | Ready. Click the microphone to start. |
| **Listening...** | Recording in progress. Speak now. |
| **Processing...** | Gladys is transcribing your message and generating a response. |
| **Speaking...** | The response is being read aloud. |

## Troubleshooting

| Problem | What to do |
| ------- | ---------- |
| Microphone disabled | Check that Gladys Plus is connected in **Settings > Gladys Plus**. |
| "The microphone requires a secure connection" | Open Gladys via HTTPS, ideally at [plus.gladysassistant.com](https://plus.gladysassistant.com). |
| Microphone blocked on Safari | Allow microphone access in **Settings > Safari > Microphone**. |
| "Voice recording is not available in this browser" | Try a recent version of Chrome, Firefox, Edge, or Safari. |
| Generic error | Verify your Gladys Plus connection and that your instance can reach the gateway. |

## Related documentation

- [Gladys Plus](/docs/plus/intro)
- [Using AI to control your connected home](/docs/integrations/openai)
