---
id: control-gladys-with-siri
title: How to control Gladys with Siri
description: I'm happy to release today the Open API of the Gladys Gateway, enabling the use of Gladys with Siri.
author: Pierre-Gilles Leymarie
author_title: Founder of Gladys Assistant
author_url: https://twitter.com/pierregillesl
author_image_url: /en/img/pierre-gilles.jpg
image: /en/img/presentation/gateway-siri.jpg
draft: true
---

Hey all,

I was saying it in my [Year in Review](/en/article/2018-year-review-of-gladys-assistant), my focus for 2019 is to work on the Gladys Gateway and Gladys 4.

So today, I'm happy to release the Open API of the Gladys Gateway! This enable many things, including the ability to control your house with Siri.

<!--truncate-->

## Configure the Gateway Open API

### Upgrade Gladys

The first step is to upgrade Gladys to version >= 3.12.0.

To upgrade, you can launch the script "/home/pi/rpi-update.sh" on your Raspberry Pi.

### Activate the Gladys Gateway API

Go on your local Gladys instance, and go to `Parameters` => `Gladys Gateway`, then at the bottom of the page, activate the Open API.

I decided that Open API would not be turned on by default so that people can choose.

### Create an API key

The following step is simple. Go to [gateway.gladysassistant.com](https://gateway.gladysassistant.com), connect with your Gladys Gateway account.

**Note:** If you don't have a Gladys Gateway account yet, you need to subscribe to the [community package](/en/gladys-community-package/) 🙂

Go to `Settings` then `Open API`.

You should see this screen:

![Generate API key Gladys Gateway](/en/img/articles/siri-gateway/generate-api-key.jpg)

Give a name to your open API key, then click on `Generate`.

The Open API key will be displayed. You need to save it somwhere, because you won't be able to see it again as the key is saved as a hash in DB.

## Testing the API

**Note:** This step is not mandatory, but will help you understand how it works.

Download an HTTP client like [Insomnia](https://insomnia.rest/).

Create a new request by clicking on `New Request`.

Give a name to your request, then select `POST` on the right, then `JSON`.

Finally, click on `Create`.

### Call the API for a message command

Replace the URL with `https://api.gladysgateway.com/v1/api/message/:YOUR_API_KEY`

Don't forget to replace your API Key in the URL.

In the JSON Body, put

```
{
  "text": "I'm leaving home"
}
```

You can put any sentence you want to say to Gladys.

![Insomnia REST Client](/en/img/articles/siri-gateway/insomnia.jpg)

Press `Send`, your Gladys instance should receive the request.

### Call the API to create an event

There is another API route that enables you to create event in Gladys.

Just change the URL to: `https://api.gladysgateway.com/v1/api/event/:YOUR_API_KEY`

And the body to:

```
{
  "code": "left-home",
  "house": 1
}
```

You can put any code you find in [this list](https://github.com/GladysAssistant/gladys-data/blob/master/events/en.json).

The "house" attribute is the ID of your house in Gladys.

## Configure Siri

We are now going to create a Siri Shortcut.

You need to download the [Apple Shortcut](https://itunes.apple.com/us/app/shortcuts/id915249334?mt=8) app.

In the app, click on `Create Shortcut`.

In the search bar, search `Url` and click on the `Url` element.

In the URL field, enter the URL we used before: `https://api.gladysgateway.com/v1/api/message/:YOUR_API_KEY`

Then, look for the `Get Contents of URL` block, and click on the element.

In `Advanced`, change the method to `POST`.

In Request Body, click on `Add new field` => `Text`.

Give as `Key` = "Text" and as `Text`, put your sentence

![Siri Shortcut Gladys](/en/img/articles/siri-gateway/leaving-home-en.jpg)

Finally, click on the configuration button on the top right, and select `Add to Siri`.

![Add siri to Gladys](/en/img/articles/siri-gateway/add-to-siri.jpg)

Give a sentence to Siri, like for this example `I'm leaving home`.

Click on `Done`.

To do the same with event, it'll look like this:

![Siri Shortcut event Gladys](/en/img/articles/siri-gateway/event-left-home.jpg)

You can test the integration by clicking on `Play` or on the shortcut on the homescreen of the app.

If you want to use this shortcut without talking to Siri, you can even add the shortcut to the home screen or in the widget view:

![Siri Shortcut Gladys](/en/img/articles/siri-gateway/siri-shortcut-en.jpg)

## To Conclude

This was just a simple example of what it's possible to do with this new Open API. Of course you can do many other things: use Tasker, IFTTT, and I'll probably write more about this in a new article.

Thanks for reading this article, if you have question, don't hesitate!
