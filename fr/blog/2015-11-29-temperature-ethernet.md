---
title: Une station météo connectée à internet
description: Nous allons connecter un capteur de température/humidité à une ethernet shield afin de communiquer à Gladys la température d'une pièce !
author: Pierre-Gilles Leymarie
author_title: Fondateur de Gladys Assistant
author_url: https://twitter.com/pierregillesl
author_image_url: /fr/img/pierre-gilles.jpg

image: /fr/img/presentation/temperature-ethernet-cover.jpg

id: temperature-ethernet
---

<div class="alert alert--danger" role="alert">
  Update: 21/07/2020: Ce tutoriel a été écrit il y a plusieurs années, il ne concerne pas Gladys v4 ! 
</div>

Salut à tous ! Aujourd'hui nous allons créer une petite station météo d'intérieur (ou d'extérieur pourquoi pas !) avec un arduino et une ethernet shield qui va nous renvoyer la température et l'humidité dans la pièce et l'enregistrer dans Gladys :)

![DHT11 Ethernet](/fr/img/articles/temperature-ethernet/DSC_0702-light.jpg)

<!--truncate-->

## Le matériel

Pour ce tutoriel, on aura besoin :

- Un arduino Uno ( acheté 18€ [ici](http://amzn.to/1Dx5l3w) )
- Une carte ethernet shield ( acheté 6€ [ici](http://amzn.to/1lRuhjQ) )
- Une sonde de température/humidité DHT11 ( acheté 2,48€ [ici](http://www.gearbest.com/development-boards/pp_45175.html) )

( Pour le capteur DHT11, je n'ai pas retrouvé le kit avec résistance que j'avais acheté il y a quelques mois, celui là n'a pas de résistance mais apparemment ce n'est pas nécessaire d'après la description de la sonde sur le site... )

## Les branchements

Les branchements sont tout simple, je vous ai fais un petit schéma sur Fritzing. Tout d'abord branchez l'ethernet shield sur votre arduino, puis connectez le DHT11 suivant le schéma ci-dessous ( une fois que l'ethernet shield est branché les PINs sur l'ethernet shield sont les mêmes que sur l'arduino Uno ).

![DHT11 Ethernet](/fr/img/articles/temperature-ethernet/schema-light.jpg)

## L'arduino en tant que client

L'objectif de ce tuto est de faire une petite station qui va remonter périodiquement à Gladys des informations de températures et d'humidités. C'est à dire que toutes les 20 minutes par exemple, notre montage va appeler l'API REST de Gladys pour lui communiquer l'humidité et la température.

### La configuration de Gladys

Pour faire fonctionner ce tutoriel, vous avez besoin de Gladys en version >= 3.1.11.

Ensuite, rendez-vous dans l'interface de Gladys, rubrique "Device".

Créez un device avec les informations :

- Name: Le nom que vous voulez
- identifier: Vous pouvez laisser vide
- protocol: ethernet
- service: ethernet ( ça n'a pas grand importance ici )
- Pièce: La pièce dans laquelle est situé votre station météo ( vous pouvez créer des pièces dans les paramètres, hésitez pas à créer une pièce pour votre jardin )

![Gladys device view](/fr/img/articles/temperature-ethernet/screenshot-device.png)

Ensuite, cliquez sur "edit" et créez un deviceType avec comme informations :

- type: temperature
- tag: Ce que vous voulez (vous pouvez laisser vide ici)
- unité: °C
- min: -273,15 ( zéro absolu, on se doute que ça va pas descendre plus bas :p)
- max: 6000 ( la température à la surface du soleil, peu de chance qu'on l'atteigne dans votre salon )
- Capteur: cochez la case

![Gladys device view](/fr/img/articles/temperature-ethernet/screenshot-device-type.png)

Notez bien l'ID unique du deviceType que vous venez de créer.

Puis, créez un autre deviceType humidité :

- type: humidity
- tag: Ce que vous voulez (vous pouvez laisser vide ici)
- unité: %
- min: 0
- max: 100
- Capteur: cochez la case

Notez aussi son ID unique.

Ensuite, il vous faut créer un token d'accès à Gladys, pour cela allez dans "Paramètres", puis "Sécurité", donnez un nom à votre token (Ex: "Station météo" et cliquez sur "Créer" )

Ensuite, copiez le token d'accès. Il vous sera utile pour la suite.

### Mise en place de l'arduino

Avant d'envoyer le code sur votre arduino, il vous faut la librairie DHT qui vous permet d'utiliser le capteur DHT11 sur votre Arduino. Vous trouverez la librairie [ici](https://github.com/adafruit/DHT-sensor-library). Le fichier README explique comme installer la libraire sur l'IDE arduino !

Une fois que la librairie est installée, il suffit de pousser le code suivant sur votre arduino. Le code de l'arduino est tout simple, on lit les valeurs du capteurs, et on fait un appel HTTP sur Gladys.

Dans ce code pensez à modifier les différentes variables au début du code avec vos valeurs que l'on a récupéré dans l'étape précédente :

- ID_DE_VOTRE_DEVICETYPE_TEMPERATURE
- ID_DE_VOTRE_DEVICETYPE_HUMIDITE
- VOTRE_TOKEN

```c
/*
  Gladys
  Web client sending temperature and humidity from DHT11 to Gladys

 Circuit:
 * Ethernet shield attached to pins 10, 11, 12, 13
 */

#include <SPI.h>
#include <Ethernet.h>
#include "WString.h"
#include <DHT.h>

#define DHTPIN 2     // what pin we're connected to

// Uncomment whatever type you're using!
#define DHTTYPE DHT11   // DHT 11
//#define DHTTYPE DHT22   // DHT 22  (AM2302)
//#define DHTTYPE DHT21   // DHT 21 (AM2301)

// Connect pin 1 (on the left) of the sensor to +5V
// Connect pin 2 of the sensor to whatever your DHTPIN is
// Connect pin 4 (on the right) of the sensor to GROUND
// Connect a 10K resistor from pin 2 (data) to pin 1 (power) of the sensor

DHT dht(DHTPIN, DHTTYPE);


// Sleep time between requests in seconds
// ( here 20 * 60 = 1200 seconds = 20 minutes )
#define SLEEP_TIME 1200


// Host of your Raspberry Pi hosting Gladys
String host = "Host: 192.168.1.100";
IPAddress server(192,168,1,100);  // numeric IP

// Set the static IP address to use if the DHCP fails to assign
IPAddress ip(192, 168, 1, 177);

// Your request
String requestTemperature = "POST /devicestate?devicetype=ID_DE_VOTRE_DEVICETYPE_TEMPERATURE&value=%VALUE&token=VOTRE_TOKEN HTTP/1.1";
String requestHumidity = "POST /devicestate/?devicetype=ID_DE_VOTRE_DEVICETYPE_HUMIDITE&value=%VALUE&token=VOTRE_TOKEN HTTP/1.1";




// Enter a MAC address for your controller below.
// Newer Ethernet shields have a MAC address printed on a sticker on the shield
byte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };
// if you don't want to use DNS (and reduce your sketch size)
// use the numeric IP instead of the name for the server:

//char server[] = "www.google.fr";    // name address

// Initialize the Ethernet client library
// with the IP address and port of the server
// that you want to connect to (port 80 is default for HTTP):
EthernetClient client;

void setup() {
  // Open serial communications and wait for port to open:
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect. Needed for native USB port only
  }

  // start the Ethernet connection:
  if (Ethernet.begin(mac) == 0) {
    Serial.println("Failed to configure Ethernet using DHCP");
    // try to congifure using IP address instead of DHCP:
    Ethernet.begin(mac, ip);
  }
  // give the Ethernet shield a second to initialize:
  delay(1000);
}

void loop() {

    // Reading temperature or humidity takes about 250 milliseconds!
    // Sensor readings may also be up to 2 seconds 'old' (its a very slow sensor)
    float h = dht.readHumidity();
    float t = dht.readTemperature();

    // check if returns are valid, if they are NaN (not a number) then something went wrong!
    if (isnan(t) || isnan(h)) {
      Serial.println("Failed to read from DHT");
    } else {



    Serial.println("connecting...");
     // if you get a connection, report back via serial:
    if (client.connect(server, 1337)) {
      Serial.println("connected");
      // Make a HTTP request:

      String temperature = String(t, 0);
      String humidity = String(h, 0);

      // replacing URL with the value
      requestTemperature.replace("%VALUE", temperature);
      requestHumidity.replace("%VALUE", humidity);

      Serial.println(requestTemperature);
      Serial.println(requestHumidity);

      client.println(requestTemperature);
      client.println(host);
      client.println("Connection: close");
      client.println();

      client.println(requestHumidity);
      client.println(host);
      client.println("Connection: close");
      client.println();
      Serial.println();
      Serial.println("disconnecting.");
      client.stop();
    } else {
      // if you didn't get a connection to the server:
      Serial.println("connection failed");
    }

    delay(SLEEP_TIME*1000);

   }



}
```

Vous devriez voir les valeurs apparaitre en live dans l'onglet "Device" => "Courbe" en sélectionnant votre deviceType.

## Conclusion

Dans ce tutoriel, on a mis en place une petite station connectée en ethernet, mais on pourrait dans l'avenir remplacer tout ça par une petite carte arduino esp8266 ( Equipée en Wi-Fi ), ce qui permettrait de faire un petit module autonome ! J'ai reçu une carte de ce type mais je n'ai pas encore eu le temps de la tester :)

J'espère que ça vous a plu, n'hésitez pas si vous avez des questions !
