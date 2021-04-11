---
id: Capacité Restante d'une Cuve
Title: Capacité Restante d'une Cuve
sidebar_label: Capacité Restant d'une Cuve
---

## Projet   :Capacité Restante d'une Cuve

Bonjour la communauté,

Je vous présente mon projet qui est maintenant fonctionnel pour mesurer la quantité d’eau       restante dans ma cuve.

J’ai eu l’idée de ce projet car ma cuve de récupération d’eau de pluie alimente mon arrosage   extérieur, ma machine à laver ainsi que mes WC et il m’était impossible de savoir hormis le fait d’aller voir dehors dans la cuve si il restait de l’eau ou non.

Gladys me permet de basculer en eau de ville si nécessaire plus facilement via une notification qui m'indique que la cuve est presque vide.

Pour ce projet si cela vous intéresse vous aurez besoin : 

[1x Wemos D1 mini](https://fr.aliexpress.com/item/32831353752.html?spm=a2g0o.productlist.0.0.320d4726JS55R7&algo_pvid=311fbbc2-dbcd-44e1-aba1-cfc3433b1087&algo_expid=311fbbc2-dbcd-44e1-aba1-cfc3433b1087-0&btsid=2100bdec16151905161866000e9e72&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_) (coût 2,63€ sur aliexpress) points fort : petit et wifi

[1 Capteur ultrasons JSN-SR04T](https://fr.aliexpress.com/item/4001111845577.html?spm=a2g0o.productlist.0.0.4643549fvFOEci&algo_pvid=6ae38e71-f59f-471e-a9fa-5dd6371492ef&algo_expid=6ae38e71-f59f-471e-a9fa-5dd6371492ef-2&btsid=2100bdec16151906497798331e9e72&ws_ab_test=searchweb0_0,searchweb201602_,searchweb201603_) point fort : étanche (coût 5,25€ sur aliexpress)

[1x Cable rallonge](https://fr.aliexpress.com/item/32881199463.html?spm=a2g0s.9042311.0.0.52fb6c37C1E4iY) de 3,5m nécessaire pour les distances > à 2,5m si vous souhaitez le raccorder dans la maison ou dans un garage en usb (coût 4,08€ sur aliexpress)

[1 ou 2 boitiers étanches](https://www.leroymerlin.fr/produits/electricite-domotique/rallonge-multiprise-enrouleur-et-cable-electrique/accessoires-de-connexion-boite-de-derivation/boite-de-derivation/boite-de-derivation-etanche-en-saillie-debflex-8-entrees-65104354.html) en fonction du mode d’installation choisi (coût 2,40€ en magasin de bricolage)

__Total : 17,36€__

Pré-requis : 

  - Logiciel Arduino
  - Intégration MQTT dans Gladys

__1ère Etape : Branchement du capteur JSN-SR04T au Wemos D1 mini__


Schéma : 

![schema](../../static/img/docs/fr/tuto/cuve/schema.png)

```
GND : GND

VCC : 5V

Echo : Pin D6

Trigger: Pin D7
```

__2ème étape : L’intégration de MQTT dans Gladys__


Suivre la procédure d’installation dans Gladys et une fois la configuration terminée, il faut créer un nouvel appareil MQTT avec les éléments ci-dessous

![Mqtt1](../../static/img/docs/fr/tuto/cuve/mqtt-1.png)

![Mqtt2](../../static/img/docs/fr/tuto/cuve/mqtt-2.png)

Puis "sauvegarder"

Pour finir vous pouvez créer le bandeau en page d’accueil afin de voir le résultat à la fin du projet 

Sur le Dashboard,  cliquez sur "éditer"  -> "appareils de la pièce" -> "jardin"

![dashboard](../../static/img/docs/fr/tuto/cuve/dashboard.png)

__3ème étape : Le code Arduino à télécharger dans le wemos (code maison à affiner ou améliorer )__

Pour cela, vous aurez besoin de télécharger et d’installer l’ide Arduino sur leur site (disponible [ici](https://www.arduino.cc/en/software))

Le WEMOS D1 mini n’est pas reconnu officiellement par l’’ide Arduino. Vous devez donc télécharger le driver CH340/CH341 afin qu’il soit reconnu et que vous puissiez télécharger du code dessus. (Disponible [ici](https://www.wemos.cc/en/latest/ch340_driver.html))

Branchez votre Wemos D1 mini puis installer le driver, ensuite lancez le logiciel arduino puis allez dans  "préférences" et ajoutez la ligne ci-dessous dans l’url de gestionnaires de cartes supplémentaires

```
http://arduino.esp8266.com/stable/package_esp8266com_index.json
```

![Arduino-1](../../static/img/docs/fr/tuto/cuve/arduino-1.png)

Ensuite,  allez dans "outils" -> "type de cartes" -> "le gestionnaire de carte" et recherchez "esp8266" puis cliquez sur "installer"

![Arduino-2](../../static/img/docs/fr/tuto/cuve/arduino-2.png)

Pour finir vous pouvez choisir votre carte dans  "outils" -> "type de cartes" et choisir "ESP8266board " puis "LOLIN(Wemos) D1 R2 & mini"

Et voilà votre carte Wemos est prête à recevoir du code :-)

Maintenant, vous devez télécharger les bibliothèques nécessaires au fonctionnement du code. 

Il faut se rendre dans l’onglet "outils" -> "gérer les bibliothèques"

Nous aurons besoin de : 

- ArduinoJSON

- ESP8266Wifi

- ESP8266WifiMulti

- PubSubClient

Vous pouvez à présent copier/coller le code ci-dessous en pensant à bien remplir vos informations sur la partie MQTT , WIFI et surtout de modifier la valeur de la profondeur de votre cuve dans  *"floatcuve = 2000"*

```
#include <ESP8266WiFi.h>
#include <ESP8266WiFiMulti.h> 
#include <PubSubClient.h> 
#include <ArduinoJson.h>

//MQTT

#define mqtt_server « 192.168.X.X"   // *adresse IP de Gladys*
#define mqtt_user "gladys"      // *username dans gladys*
#define mqtt_password « ******************»        // *mot de passe dans l’intégration Gladys*
#define gladys_topic "gladys/master/device/mqtt:jardin:capteur-cuve/feature/mqtt:jardin:capteur-cuve:capacite/state"  /
#define mqtt_cuve "mqtt:jardin:capteur-cuve"     //Topic capteur cuve
#define JsonbufferSize     100

//WIFI

const char* ssid = « ***********»; // *nom de votre réseau wifi*
const char* password = « ***************»; // *mot de passe wifi*

/* Constantes pour les broches */

const byte TRIGGER_PIN = 2; // Broche TRIGGER et D7 du wemos
const byte ECHO_PIN = 3;    // Broche ECHO et D6 du wemos
const byte VW_SET_TX_PIN = 12;
 
/* Constantes pour le timeout */

const unsigned long MEASURE_TIMEOUT = 25000UL; // 25ms = ~8m à 340m/s

/* Vitesse du son dans l'air en mm/us */

const float SOUND_SPEED = 340.0 / 1000;

WiFiClient espClient;
ESP8266WiFiMulti WiFiMulti;
PubSubClient client(espClient);

void reconnect() {
 
  while (!client.connected()) {
    Serial.print("Connecting to MQTT broker ...");
    if (client.connect("Cuve", mqtt_user, mqtt_password)) {
      Serial.println("OK");
    } else {
      Serial.print("[Error] Not connected: ");
      Serial.print(client.state());
      Serial.println("Wait 5 seconds before retry.");
      delay(5000);
    }
  }
}

void setup_wifi(){
  //connexion au wifi
  WiFiMulti.addAP(ssid, password);
  while ( WiFiMulti.run() != WL_CONNECTED ) {
    delay ( 500 );
    Serial.print ( "." );
  }
  Serial.println("");
  Serial.println("WiFi connecté");
  Serial.print("MAC : ");
  Serial.println(WiFi.macAddress());
  Serial.print("Adresse IP : ");
  Serial.println(WiFi.localIP());
}

void setup() {
 
    // Initialise le port série //
    Serial.begin (115200);
    Serial.println("\n");
    
    setup_wifi();                           //Connect to Wifi network
    client.setServer(mqtt_server, 1883);    // Configure MQTT connection, change port if needed.
    if (!client.connected()) {
        reconnect();
        
    // Initialise les broches //    
    pinMode(TRIGGER_PIN, OUTPUT);
    digitalWrite(TRIGGER_PIN, LOW); // La broche TRIGGER doit être à LOW au repos
    pinMode(ECHO_PIN, INPUT);
    }
}

void loop() {
  
  /* 1. Lance une mesure de distance en envoyant une impulsion HIGH de 10µs sur la broche TRIGGER */
  digitalWrite(TRIGGER_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIGGER_PIN, LOW);
  
  /* 2. Mesure le temps entre l'envoi de l'impulsion ultrasonique et son écho (si il existe) */
  long measure = pulseIn(ECHO_PIN, HIGH, MEASURE_TIMEOUT);
   
  /* 3. Calcul la distance à partir du temps mesuré */
  int distance_mm = measure / 2.0 * SOUND_SPEED;
  float cuve = 2000 - distance_mm; // ATTENTION Valeur à remplacer par la profondeur de votre cuve vide en mm
  cuve = cuve / 2000; // Valeur à modifier également
  cuve = cuve * 100

  /* Affiche les résultats en mm */
  #ifdef HRC04
  
  Serial.print(distance_mm, cuve);
  Serial.println();

  /* Envoyer les données au broker mqtt */

  #endif
  
  // Publish values to MQTT topics 
    // Gladys attend un fichier JSON
    // Pourcentage_eau
    //Edition des objets JSON + publication
    StaticJsonDocument<300> JSONbuffer;

    JSONbuffer["capteur"] = "hrc04";
    JSONbuffer["cuve"] = "cuve";

    char buffer[JsonbufferSize];
   
    serializeJson(JSONbuffer, buffer);

    Serial.print("Data serialised: ");
    Serial.println(buffer);
    
    JSONbuffer["cuve"] = cuve;

    serializeJson(JSONbuffer, buffer);
    Serial.print("Data udpated: ");
    Serial.println(buffer);
    
    
  // Déconnexion du broker MQTT
  client.disconnect();
  
  // Déconnexion du réseau wifi
  WiFi.disconnect();

  
  /* Délai d'attente pour éviter d'afficher trop de résultats à la seconde */
  delay(60000); // toutes les minutes
}
```

Une fois le code téléversé, vous pouvez brancher les cables avec le schéma du dessus et effectuer un test avec l'ide arduino et le moniteur de série pour voir le résultat. Si cela fonctionne correctement vous pouvez alors installer votre matériel dans des boites étanches pour protéger votre capteur et votre wemos.

Vous pouvez créer différentes scènes et notamment vous prévenir si la cuve est presque vide ou vous envoyer 1fois/jour la capacité restante par exemple.

![scène](../../static/img/docs/fr/tuto/cuve/scène.png)

1ère Scène : Notification cuve vide

![scène-1-1](../../static/img/docs/fr/tuto/cuve/scène-1-1.png) 

![scène-1-2](../../static/img/docs/fr/tuto/cuve/scène-1-2.png) 

2ème scène : Rapport Journalier Cuve

![scène-2-1](../../static/img/docs/fr/tuto/cuve/scène-2-1.png) 

![scène-2-2](../../static/img/docs/fr/tuto/cuve/scène-2-2.png) 

![scène-2-3](../../static/img/docs/fr/tuto/cuve/scène-2-3.png) 

Vous pouvez installer l'application télégram pour recevoir maintenant vos notifications.

Quelques photos de mon installation

![photo-1](../../static/img/docs/fr/tuto/cuve/photo-1.png) 

![photo-2](../../static/img/docs/fr/tuto/cuve/photo-2.png) 


