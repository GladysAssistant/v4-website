---
id: external-integrations
title: Eine externe Integration entwickeln
description: "Der einfachste Weg, eine Integration für Gladys Assistant zu entwickeln und zu veröffentlichen. Kein Pull Request, kein Code-Review, keine Wartezeit: Verpacke deine Integration als Docker-Container, veröffentliche sie auf GitHub, und jeder Nutzer kann sie mit einem Klick installieren."
sidebar_label: Externe Integrationen (empfohlen)
---

**Externe Integrationen sind der einfachste und schnellste Weg, eine Integration für Gladys Assistant zu erstellen und sie mit einem Klick für alle Nutzer zu veröffentlichen.**

Es gibt **keinen Pull Request zu öffnen, kein Code-Review abzuwarten und keine Freigabe durch Maintainer**. Du schreibst deine Integration in der Sprache deiner Wahl, verpackst sie als Docker-Image, veröffentlichst ein öffentliches GitHub-Repository, und schon kann sie jeder auf jeder Gladys-Instanz installieren.

Diese Seite ist ein vollständiges Schritt-für-Schritt-Tutorial für Entwickler.

## Warum externe Integrationen?

Früher bedeutete eine neue Integration für Gladys, [zum Kernprojekt beizutragen](/de/docs/dev/developing-a-service/): das Repository forken, den Service im Gladys-Code programmieren, Unit-Tests schreiben, einen Pull Request öffnen und warten, bis ein Maintainer ihn prüft und mergt. Dieser Weg existiert weiterhin und eignet sich hervorragend für Protokolle, die in den Kern gehören, aber er ist mit Reibung verbunden: Du musst die Interna von Gladys kennen, die Coding-Konventionen einhalten, und der Maintainer ist ein Flaschenhals.

Externe Integrationen beseitigen diesen Flaschenhals (eine automatische Validierung des Manifests findet weiterhin statt, aber ohne Menschen dazwischen):

| | Interne Integration | Externe Integration |
| --- | --- | --- |
| Wo der Code liegt | Im Gladys-Repository | In deinem eigenen GitHub-Repository |
| Sprache | Nur Node.js | Jede Sprache (Docker-Container) |
| Review erforderlich | Ja, ein Maintainer muss deinen PR mergen | **Kein Review, keine Freigabe** |
| Veröffentlichung | Kommt mit dem nächsten Gladys-Release | **Sofort verfügbar**, automatisch indexiert |
| Installation für Nutzer | Eingebaut | **Ein Klick** im Katalog |
| Isolation | Läuft im Gladys-Prozess | Läuft in einem **abgeschotteten Docker-Container** |

Da eine externe Integration in ihrem eigenen, gehärteten Container läuft, der von Gladys überwacht wird, **bleibt ein Fehler oder Absturz in deinem Code eingedämmt**: Er kann weder die Gladys-Instanz des Nutzers noch die anderen Integrationen lahmlegen. Diese Stabilitätsgarantie macht eine Veröffentlichung ohne Review überhaupt erst sicher.

## So funktioniert es

Eine externe Integration ist ein **Docker-Container**, der über zwei Kanäle mit Gladys kommuniziert:

- Eine **REST-Host-API**, die Gladys unter `/api/integration/v1/*` bereitstellt. Darüber veröffentlichst du erkannte Geräte, sendest Gerätezustände und Kamerabilder und liest oder schreibst deine Konfiguration.
- Ein **WebSocket-Kanal**, über den Gladys deiner Integration in Echtzeit Befehle schickt (einen Schalter einschalten, ein Gerät abfragen, einen Scan starten, ein Kamerabild aufnehmen) und dich über Lebenszyklus-Ereignisse von Geräten informiert (ein Gerät wurde vom Nutzer erstellt, geändert oder gelöscht).

Diese ganze Infrastruktur musst du nicht selbst bauen: Das offizielle [JavaScript-SDK](https://github.com/GladysAssistant/integration-sdk-js) übernimmt für dich die Authentifizierung, die WebSocket-Verbindung, die automatische Wiederverbindung mit exponentiellem Backoff, die Bestätigung von Befehlen und die Neusynchronisierung des Zustands. Du kannst deine Integration in jeder Sprache schreiben, aber das SDK erspart dir viel Arbeit.

Über die Grundlagen (Geräte, Zustände, Konfiguration) hinaus unterstützt die Plattform auch **Kameras** (inklusive **PTZ-Steuerung**), **OAuth2-Clouddienste**, **Aktionsbuttons auf Abruf**, **Lokal/Cloud-Transport-Badges** (mit einem eingeschränkten Zustand), **vermittelte Netzwerkerkennung** (mDNS, SSDP, UDP-Broadcast), **Wake-on-LAN**, **Sub-Container mit Hardwarezugriff**, **Messaging-Kanäle**, **Wetteranbieter**, **die Koordinaten der Häuser des Nutzers** und **eingehende Webhooks** (über Gladys Plus). Jeder dieser Punkte wird weiter unten in einem eigenen Abschnitt behandelt.

Eine Integration deklariert in ihrem Manifest einen von **drei Typen**:

- **`device`** (mit Abstand der häufigste): Sie veröffentlicht die Geräte, die sie erkennt – Sensoren, Schalter, Lampen, Kameras usw.
- **`communication`**: ein Messaging-Kanal statt Geräten, also eine Chat- oder Benachrichtigungsbrücke wie Telegram; siehe [Messaging-Kanäle](#messaging-channels).
- **`weather`**: ein Wetteranbieter (Météo France, Open-Meteo, AccuWeather …), der die Wetteranfragen des Gladys-Kerns beantwortet und das Dashboard-Widget, den Chat-Assistenten und die Szenen-Auslöser für Wetterwarnungen versorgt; siehe [Wetteranbieter](#weather-providers).

Ein paar wichtige Designregeln solltest du im Kopf behalten:

- **Deine Integration erstellt oder löscht niemals Geräte.** Sie *veröffentlicht* die Geräte, die sie erkennt, und der Nutzer entscheidet in der Gladys-Oberfläche, welche er erstellt, ändert oder löscht. So behält der Nutzer die Kontrolle und die Oberfläche bleibt konsistent.
- Gladys führt deinen Container mit strengen Grenzen aus: **256 MB Arbeitsspeicher, 0,5 CPU, ein schreibgeschütztes Root-Dateisystem, keine zusätzlichen Linux-Capabilities und ein einziger beschreibbarer Mount `/data`**. Gestalte deine Integration so, dass sie mit diesen Grenzen auskommt (Sub-Container können eigene, höhere Grenzen deklarieren, siehe unten).

## Voraussetzungen

- Eine Gladys-Assistant-Instanz ab Version **4.84.0** (externe Integrationen wurden mit dieser Version eingeführt). [Wetteranbieter](#weather-providers), [Hauskoordinaten](#house-coordinates) sowie die [benannten Ports und Platzhalter](#guiding-the-user-sections-and-placeholders) des Konfigurationsformulars erfordern **4.85.0 oder neuer**; die neuesten Fähigkeiten – [Store-Kategorien](#store-categories), [PTZ-Kameras](#motorized-ptz-cameras), [Wake-on-LAN](#wake-on-lan) und [Kontoverknüpfung](#account-linking-without-a-redirect) – erfordern **4.86.0 oder neuer**. Passe den Bereich `gladys_version` in deinem Manifest entsprechend an.
- [Docker](https://www.docker.com/), installiert auf deinem Entwicklungsrechner.
- [Node.js 24 oder neuer](https://nodejs.org/), wenn du das JavaScript-SDK verwendest (das SDK benötigt Node.js 20 oder neuer, empfohlen wird aber 24).
- Eine öffentliche Docker-Registry für dein Image. Am einfachsten ist die [GitHub Container Registry](https://docs.github.com/packages/working-with-a-github-packages-registry/working-with-the-container-registry) (`ghcr.io`): Dort liegt dein Image am selben Ort wie dein Code, und das offizielle Template veröffentlicht automatisch dorthin. Docker Hub oder jede andere öffentliche Registry funktioniert ebenfalls, solange das Image anonym abrufbar ist.
- Ein [GitHub](https://github.com/)-Konto, um dein Repository zu veröffentlichen.

## Schritt 1: Mit dem Template starten

Am schnellsten legst du mit dem offiziellen Template-Repository los:

👉 [GladysAssistant/integration-template-js](https://github.com/GladysAssistant/integration-template-js)

Klicke auf GitHub auf **„Use this template“**, um dein eigenes Repository zu erstellen. Es enthält bereits eine funktionierende Integration (Sensoren, ein Schalter, eine dimmbare Lampe, eine smarte Steckdose, ein Bewegungsmelder und eine Kamera), ein `Dockerfile`, ein gültiges Manifest, die erforderliche Dokumentation `docs/en.md` und `docs/fr.md` sowie einen einsatzbereiten Release-Workflow für GitHub Actions. So kannst du dich ganz auf die Logik deiner Geräte konzentrieren.

## Schritt 2: Deine Integration mit dem SDK schreiben

Installiere das SDK in deinem Projekt:

```bash
npm install @gladysassistant/integration-sdk
```

Hier ein vollständiges, funktionierendes Beispiel einer Integration für einen virtuellen Schalter:

```js
import {
  GladysIntegration,
  DEVICE_FEATURE_CATEGORIES,
  DEVICE_FEATURE_TYPES,
  logger,
} from "@gladysassistant/integration-sdk";

const gladys = new GladysIntegration();

// Wird aufgerufen, wenn der Nutzer Gladys bittet, nach neuen Geräten zu suchen.
// Veröffentliche die vollständige Liste der Geräte, die deine Integration anbieten kann.
gladys.onScanRequest(async () => {
  const ids = gladys.externalIds("switch", "0x00158d0001a2b3c4");
  await gladys.publishDiscoveredDevices([
    {
      name: "Virtual switch",
      external_id: ids.device,
      features: [
        {
          name: "On/Off",
          external_id: ids.feature("binary"),
          category: DEVICE_FEATURE_CATEGORIES.SWITCH,
          type: DEVICE_FEATURE_TYPES.SWITCH.BINARY,
          min: 0,
          max: 1,
          read_only: false,
          has_feedback: true,
          keep_history: true,
        },
      ],
    },
  ]);
});

// Wird aufgerufen, wenn der Nutzer den Schalter in Gladys ein- oder ausschaltet.
// Erledige hier die eigentliche Arbeit und bestätige Gladys dann den neuen Zustand.
gladys.onSetValue(async (device, feature, value) => {
  // ... hier den Befehl an dein echtes Gerät senden ...
  await gladys.publishState(feature.external_id, value);
});

// Auf Konfigurationsänderungen des Nutzers reagieren.
gladys.onConfigUpdated(async (config) => {
  logger.info("Configuration updated", config);
});

// Bei SIGTERM/SIGINT sauber beenden (Docker-Stopp, Neustart oder Update).
gladys.handleShutdown();

// Authentifizieren, WebSocket öffnen und neu synchronisieren.
await gladys.connect();
```

Das ist schon die ganze Integration. Das SDK liest die Zugangsdaten, die Gladys als Umgebungsvariablen in den Container injiziert, sodass du nichts von Hand verdrahten musst. Wenn du die exportierten Konstanten `DEVICE_FEATURE_CATEGORIES`, `DEVICE_FEATURE_TYPES` und `DEVICE_FEATURE_UNITS` (statt roher Strings) verwendest, bleiben deine Features im Einklang mit den Kategorien, Typen und Einheiten, die Gladys versteht.

Diese Konstanten sind eine exakte Kopie derjenigen im Gladys-Kern und werden bei jedem SDK-Release neu synchronisiert: Die neuesten Versionen haben die Features für **PTZ-Kameras** hinzugefügt, **Netzsensoren** (`input-power`, `output-power`, eine vorzeichenbehaftete `power` sowie die Bezugs-/Einspeisezählerstände), **Sensoren für die Hausversorgung** (die Leistung, die ein Wechselrichter oder eine Batterie an das Haus abgibt, plus deren Inselbetriebs-Ausgang), die Kategorie **Wartung** (die Restlebensdauer eines Verschleißteils: Saugroboterbürste, Staubbeutel, Wischpad …), die Gassensoren für **NO₂, O₃ und SO₂** und davor Ladestationen, Warmwasserbereiter, Thermostatmodi und Betriebszustände, Batteriespeicher, Wasserventile, Türklingeln sowie Lüfterstufe und Lamellenschwenk von Klimaanlagen. Indem du `@gladysassistant/integration-sdk` aktuell hältst, bekommst du sie alle (die aktuelle Version ist `0.12.0`).

### Die SDK-API im Überblick

Registriere deine Event-Handler, **bevor** du `connect()` aufrufst.

**Verbindung**

- `new GladysIntegration(options?)`: Der Konstruktor liest standardmäßig `GLADYS_HOST_API_URL`, `GLADYS_INTEGRATION_TOKEN` und `GLADYS_INTEGRATION_SELECTOR` aus der Umgebung. Über `options` kannst du sie überschreiben (ebenso die Wiederverbindungsverzögerungen, das Request-Timeout oder den Logger).
- `connect()`: authentifiziert, öffnet den WebSocket, synchronisiert den Zustand neu und verbindet sich automatisch immer wieder neu (exponentieller Backoff, 1 s bis 60 s).
- `disconnect()`: schließt die Verbindung sauber und beendet die Wiederverbindungsversuche.
- `handleShutdown(cleanup?)`: beendet sich bei `SIGTERM`/`SIGINT` sauber und führt vorher deinen optionalen Cleanup-Callback aus. Wichtig, damit Docker deinen Container sauber stoppen und neu starten kann.

**Geräte**

- `publishDiscoveredDevices(devices)`: veröffentlicht die vollständige Liste der Geräte, die du anbietest (wird dem Nutzer im Tab „Erkennung“ angezeigt), bis zu **2.000 Geräte** pro Veröffentlichung. Wird ein Gerät, das der Nutzer bereits erstellt hat, erneut veröffentlicht, werden seine `params` stillschweigend aktualisiert (etwa eine LAN-IP, die sich per DHCP geändert hat), ohne Name oder Features anzutasten; bei einer strukturellen Änderung erscheint stattdessen im Tab „Erkennung“ ein Button „Aktualisieren“.
- `getDevices()`: gibt die Geräte zurück, die der Nutzer tatsächlich erstellt hat.
- `externalIds(type, platformId)`: gibt `{ device, feature(key) }` zurück – der empfohlene Weg, stabile und korrekt formatierte Kennungen für ein Gerät und seine Features zu bilden.
- `externalId(suffix)`: der Low-Level-Helfer, falls du eine einzelne Kennung lieber selbst bildest.

**Zustand**

- `publishState(featureExternalId, value)`: veröffentlicht eine einzelne Zustandsänderung – eine Zahl, `{ text }` für ein Text-Feature oder `{ state, created_at }`, um einen vergangenen Zustand zu erfassen.
- `publishStates(states)`: veröffentlicht einen Stapel von Änderungen (bis zu 100 pro Anfrage). Die Host-API begrenzt Zustandsänderungen auf **300 Zustände pro Minute** und Integration, veröffentliche also Zustands*änderungen*, keine vollständigen Momentaufnahmen.

**Szenen und Widgets**

- `publishSceneEvent(key, data?)`: löst einen deiner deklarierten Szenen-Auslöser aus (siehe Szenen-Auslöser und -Aktionen).
- `requestWidgetRefresh(key)`: bittet den Kern, eines deiner Widgets sofort neu abzurufen (siehe Dashboard-Widgets).

Die Grenze ist auf Änderungen ausgelegt. Merke dir also den zuletzt gesendeten Wert jedes Features und veröffentliche nur das, was sich tatsächlich geändert hat:

```js
const lastValues = new Map();
const changed = readings.filter(({ id, value }) => lastValues.get(id) !== value);
changed.forEach(({ id, value }) => lastValues.set(id, value));
await gladys.publishStates(
  changed.map(({ id, value }) => ({ device_feature_external_id: id, state: value })),
);
```

**Konfiguration und Status**

- `getConfig()` / `setConfig(partialConfig)`: liest und schreibt deine Konfigurationswerte.
- `getStatus()`: gibt die Gladys-Version zurück.
- `setConnectionStatus(connected, message?)`: meldet deinen Verbindungsstatus auf Anwendungsebene (zum Beispiel „Cloud-Token abgelaufen“), unabhängig von der WebSocket-Verbindung zu Gladys.

**Ereignisse (Handler)**

- `onSetValue(cb)`: Der Wert eines Features hat sich geändert (ein Befehl des Nutzers).
- `onPoll(cb)`: Gladys bittet dich, ein Gerät abzufragen.
- `onScanRequest(cb)`: Gladys bittet dich, Geräte zu erkennen.
- `onGetImage(cb)`: Gladys fordert ein aktuelles Kamerabild an (siehe Kameras).
- `onDeviceCreated(cb)` / `onDeviceUpdated(cb)` / `onDeviceDeleted(cb)`: Lebenszyklus-Ereignisse von Geräten.
- `onConfigUpdated(cb)`: Die Konfiguration hat sich geändert.
- `onAction(key, cb)`: Ein Aktionsbutton aus dem Manifest wurde gedrückt (siehe Aktionen).
- `onOAuthAuthorizeUrl(cb)` / `onOAuthCallback(cb)`: OAuth2-Cloud-Anmeldung (siehe OAuth2).
- `onHardwareUpdated(cb)`: Eine Hardwarefreigabe für einen Sub-Container hat sich geändert.
- `onSendMessage(cb)`: eine Nachricht an einen Kontakt zustellen (siehe Messaging-Kanäle).
- `onWeatherGet(cb)` / `onWeatherGetImage(cb)`: Gladys fragt nach dem Wetter oder nach einem Bild des Anbieters (siehe Wetteranbieter).
- `onWebhook(key, cb)` / `onWebhookUpdated(cb)`: eingehende Webhooks (siehe Eingehende Webhooks).
- `onSceneAction(key, cb)`: Eine Szene hat eine deiner deklarierten Szenen-Aktionen erreicht (siehe Szenen-Auslöser und -Aktionen).
- `onWidgetGet(key, cb)` / `onWidgetAction(key, cb)` / `onWidgetGetImage(cb)`: Inhalt, Button-Klicks und Bilder von Dashboard-Widgets (siehe Dashboard-Widgets).

**Netzwerk**

- `scanNetwork(type, options?)`: führt eine in deinem Manifest deklarierte, vermittelte Netzwerkerfassung aus (siehe Netzwerkerkennung).
- `wakeOnLan(mac, options?)`: bittet den Kern, ein Wake-on-LAN-Magic-Packet aus dem Host-Netzwerk zu senden (siehe Wake-on-LAN).

**Wetteranbieter**

- `requestWeatherRefresh()`: ein „Fire-and-Forget“-Anstoß, der den Kern bittet, dein Wetter sofort neu abzurufen, statt auf die nächste geplante Prüfung zu warten (siehe Wetteranbieter).

Befehle werden bei Erfolg automatisch bestätigt; wirft ein Handler einen Fehler, wird der Befehl als fehlgeschlagen bestätigt. Du kannst den lokalen Zustand auch direkt über `gladys.devices`, `gladys.config` und `gladys.connected` einsehen und auf die Ereignisse `connected` und `disconnected` hören.

Jede Methode gibt ein Promise zurück, und Fehler der Host-API werden als `GladysApiError` mit `status`, `code` und `message` geworfen, sodass du sie abfangen und gezielt darauf reagieren kannst.

Die folgenden Fähigkeiten sind optional. Springe direkt zu [Schritt 3](#step-3-write-the-manifest), wenn du nur Geräte, Zustände und Konfiguration brauchst.

### Kameras

Kameras verwenden die Kategorie `camera` mit dem Feature-Typ `image` und haben einen eigenen Kanal (Bilddaten laufen nie über `publishState`, landen also weder im Zustandsverlauf noch zählen sie zur Grenze von 300 Zuständen pro Minute). Es gibt zwei sich ergänzende Wege:

- **Push**: Sende regelmäßig eine Momentaufnahme mit `publishCameraImage(externalId, image)` (begrenzt auf 12 Bilder pro Minute und Gerät).
- **Pull**: Liefere Bilder auf Abruf, indem du den Handler `onGetImage` beantwortest. Auf dessen Bestätigung wird bis zu **15 Sekunden** gewartet (statt der üblichen 5), damit eine Aufnahme im Stil von `ffmpeg` genug Zeit hat.

```js
gladys.onGetImage(async (device) => {
  const jpeg = await captureSnapshot(device);
  return `image/jpg;base64,${jpeg.toString("base64")}`;
});

// Oder proaktiv eine Momentaufnahme senden:
await gladys.publishCameraImage(ids.device, `image/jpg;base64,${jpeg.toString("base64")}`);
```

Bilder sind Strings der Form `image/jpg;base64,...` und müssen kleiner als 150 KB sein.

#### Motorisierte (PTZ-)Kameras {/* #motorized-ptz-cameras */}

*Erfordert Gladys 4.86.0 oder neuer.*

Um eine motorisierte Kamera zu bewegen, brauchst du keine neue Infrastruktur: Die PTZ-Steuerung besteht aus gewöhnlichen Befehls-Features am selben Gerät, und die Bewegungsbefehle kommen wie bei jedem anderen Feature über `onSetValue` an. Gladys zeigt in der Live-Ansicht des Kamera-Widgets ein Steuerkreuz und eine Auswahl der Presets an und blendet dabei **nur die Bewegungen ein, die du deklariert hast**.

```js
const ids = gladys.externalIds("camera", "front-door");

await gladys.publishDiscoveredDevices([
  {
    name: "Front door",
    external_id: ids.device,
    features: [
      { name: "Image", external_id: ids.feature("image"), category: DEVICE_FEATURE_CATEGORIES.CAMERA,
        type: DEVICE_FEATURE_TYPES.CAMERA.IMAGE, min: 0, max: 1, read_only: true, has_feedback: false, keep_history: false },
      {
        name: "Move",
        external_id: ids.feature("move"),
        category: DEVICE_FEATURE_CATEGORIES.CAMERA,
        type: DEVICE_FEATURE_TYPES.CAMERA.MOVE,
        min: 0,
        max: 6,
        read_only: false,
        has_feedback: false,
        keep_history: false,
        // Die Bewegungen, die diese Kamera tatsächlich unterstützt (0, Stopp, wird immer
        // unterstützt und nie aufgeführt):
        supported_options: [
          { value: 1, label: { en: "Left", fr: "Gauche" }, sort_order: 1 },
          { value: 2, label: { en: "Right", fr: "Droite" }, sort_order: 2 },
        ],
      },
    ],
  },
]);
```

- **`CAMERA.MOVE`** ist ein einziges Feature für alle Bewegungen: Der Wert benennt die Bewegung (`0` Stopp – immer unterstützt, nie als Option aufgeführt –, `1` nach links schwenken, `2` nach rechts schwenken, `3` nach oben neigen, `4` nach unten neigen, `5` hineinzoomen, `6` herauszoomen), und `supported_options` (`[{ value, label, sort_order }]`) deklariert die Teilmenge, die diese Kamera unterstützt.
- **`CAMERA.PRESET`** ruft eine gespeicherte Position auf. Die beschriftete Liste der Presets steht in `supported_options`, und der an dich zurückgesendete Wert ist die Ganzzahl der Option, die du auf das entsprechende Token deines Protokolls abbildest.
- **`CAMERA.PAN_POSITION`, `CAMERA.TILT_POSITION`, `CAMERA.ZOOM_POSITION`** sind optionale numerische Lese-/Schreib-Features für Kameras, die eine absolute Position melden; ihre Grenzen deklarierst du über `min`/`max` (die Einheit bestimmst du: normalisierter ONVIF-Raum, Grad …).

**Sicherheitsregel**: Begrenze eine kontinuierliche Bewegung immer mit einem Watchdog (etwa 5 Sekunden), damit ein verlorener Stopp-Befehl die Kamera niemals gegen ihren mechanischen Anschlag drehen lässt, und bevorzuge einen relativen Schritt, wenn deine Kamera das unterstützt.

Wird ein bereits erstelltes Gerät erneut veröffentlicht, werden die `supported_options` seiner Features stillschweigend aktualisiert, genau wie seine `params` – ein auf der Kamera umbenanntes Preset erscheint, ohne dass der Nutzer etwas tun muss.

### Auf dem Gerät erkannte Auswahllisten

*Erfordert Gladys 4.86.0 oder neuer.*

Manche Fähigkeiten sind eine Liste von Auswahlmöglichkeiten, die nur das Gerät selbst kennt: die auf einem Fernseher installierten Apps, seine HDMI-Quellen, die Räume eines Saugroboters, die in einem Gerät gespeicherten Szenen. Genau dafür gibt es den Feature-Typ `text`/`select` – eine Auswahl unter Werten, die deine Integration erkennt und pro Gerät über `supported_options` deklariert:

```js
{
  name: "Application",
  external_id: ids.feature("app"),
  category: DEVICE_FEATURE_CATEGORIES.TEXT,
  type: DEVICE_FEATURE_TYPES.TEXT.SELECT,
  min: 0,
  max: 0,
  read_only: false,
  has_feedback: true,
  keep_history: false,
  supported_options: [
    { value: "netflix", label: { en: "Netflix" }, sort_order: 1 },
    { value: "youtube", label: { en: "YouTube" }, sort_order: 2 },
  ],
}
```

Der Zustand ist der Wert der gewählten Option, gespeichert als String und ohne Verlauf. Verwende diesen Typ nur für Listen, die sich durch keinen generischen Wertebereich beschreiben lassen: Aufzählungsartige Fähigkeiten, die Standards bereits abdecken (Klimaanlagenmodi, Lüfterstufen, Thermostatmodi …), behalten ihre eigene Kategorie und ihren eigenen Typ mit ganzzahligen Werten.

### OAuth2-Clouddienste

Für Cloudanbieter, die OAuth2 verwenden, deklarierst du in deinem Manifest ein Konfigurationsfeld vom Typ `oauth2`, baust dann die Autorisierungs-URL und verarbeitest den Callback:

```js
let state;

gladys.onOAuthAuthorizeUrl(async (key, redirectUri) => {
  state = crypto.randomUUID();
  return `https://api.provider.com/oauth2/authorize?client_id=${gladys.config.client_id}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=read&state=${state}`;
});

gladys.onOAuthCallback(async (key, { code, state: returnedState, redirectUri }) => {
  if (returnedState !== state) throw new Error("state mismatch");
  const tokens = await exchangeCodeForTokens(code, redirectUri);
  await gladys.setConfig({ access_token: tokens.access_token, refresh_token: tokens.refresh_token });
  await gladys.setConnectionStatus(true);
});
```

Das Erneuern des Tokens liegt in der Verantwortung deiner Integration. Wenn es abläuft, melde das mit `setConnectionStatus(false, { en: "Token expired, please reconnect.", fr: "Token expire, reconnectez-vous." })`.

**Codiere die Redirect-URI niemals fest**: Verwende die `redirectUri`, die Gladys dir übergibt, und gib sie beim Token-Austausch Byte für Byte unverändert zurück. Anbieter verlangen inzwischen einen HTTPS-Callback (Spotify setzt das seit 2025 durch), den ein unter `http://192.168.1.50:1443` erreichbares Gladys niemals erfüllen kann. Der Ablauf führt daher über eine feste, von Gladys gehostete HTTPS-Seite, die den Browser zurück zur Instanz leitet. Die praktische Folge für dich und deine Nutzer: **Beim Anbieter muss nur eine einzige Redirect-URI hinterlegt werden**, egal ob Gladys lokal oder über Gladys Plus erreicht wird. Der Bildschirm „Konfiguration“ zeigt die genaue URL an, die in die Entwickleranwendung des Anbieters kopiert werden muss.

#### Kontoverknüpfung ohne Weiterleitung {/* #account-linking-without-a-redirect */}

*Erfordert Gladys 4.86.0 oder neuer.*

Manche Anbieter verknüpfen ein Konto, **ohne jemals zu Gladys zurückzuleiten**: eine QR-Anmeldung, die in der App des Herstellers bestätigt wird (wie bei Xiaomi Home), oder eine Kopplung, die direkt am Gerät bestätigt wird. Deklariere das Feld dann als `account_link` statt `oauth2`:

```json
{ "key": "account", "type": "account_link", "label": { "en": "Link my account", "fr": "Lier mon compte" } }
```

Der Bildschirm „Konfiguration“ zeigt denselben Button „Verbinden“ an, und `onOAuthAuthorizeUrl` wird genauso aufgerufen – aber `redirectUri` ist `undefined` (es gibt keine), ein Anti-CSRF-`state` ist nicht nötig (es gibt keinen Rundweg, der geschützt werden müsste), und `onOAuthCallback` wird nie aufgerufen. Gib die Anmelde-URL des Anbieters zurück, überwache die Bestätigung selbst (typischerweise per Long-Polling beim Anbieter) und melde sie dann über `setConnectionStatus(true)`: Davon hängt das Verbindungs-Badge ab, das dem Nutzer angezeigt wird.

```js
gladys.onOAuthAuthorizeUrl(async () => {
  const { loginUrl, ticket } = await startQrLogin();
  waitForApproval(ticket).then(() => gladys.setConnectionStatus(true));
  return loginUrl;
});
```

Ein Feld vom Typ `account_link` ist in einem `contact_schema` verboten: Die Verknüpfung eines Anbieterkontos gilt immer für die gesamte Integration, nie für einen einzelnen Benutzer.

### Aktionsbuttons

Deklariere `actions` in deinem Manifest, um Vorgänge auf Abruf mit sichtbarem Ergebnis anzubieten. Jede Aktion erscheint als Button (mit einem optionalen Mini-Formular) im Tab „Konfiguration“:

```js
gladys.onAction("detect_protocol", async (fields) => {
  const version = await tryProtocolVersions(fields.ip);
  return { en: `Protocol ${version} detected`, fr: `Protocole ${version} detecte` };
});
```

Der zurückgegebene Wert (ein String oder ein mehrsprachiges Objekt) wird unter dem Button angezeigt; wirft der Handler einen Fehler, wird stattdessen die Fehlermeldung angezeigt. Jede Aktion hat ihr eigenes `timeout_seconds` (5 bis 120, Standard 30).

### Lokal-/Cloud-Transporte

Zweikanal-Integrationen (Tuya Cloud + LAN, Shelly, eWeLink usw.) können dasselbe Gerät über verschiedene Transporte erreichen – pro Gerät und im Lauf der Zeit wechselnd. Deklariere die unterstützten Kanäle im Manifest-Feld `transports` und veröffentliche dann den aktuellen Transport jedes Geräts:

```js
import { DEVICE_TRANSPORTS } from "@gladysassistant/integration-sdk";

await gladys.publishTransports([
  { external_id: ids.device, transport: DEVICE_TRANSPORTS.LOCAL },
]);
```

Gültige Werte sind `local`, `cloud` und `unreachable`. Ein reservierter Konfigurationsschlüssel, `GLADYS_PREFER_LOCAL` (Boolean, Standard `true`), spiegelt die Präferenz des Nutzers wider und ist über `gladys.config` und `onConfigUpdated` verfügbar.

Ein Transport-Eintrag kann außerdem einen **eingeschränkten Zustand** tragen, unabhängig vom Transport selbst, um zu signalisieren: „funktioniert, aber nicht wie vorgesehen“. Füge `degraded: true` und eine mehrsprachige `message` hinzu (`en` ist Pflicht, bis zu 200 Zeichen):

```js
await gladys.publishTransports([
  {
    external_id: ids.device,
    transport: DEVICE_TRANSPORTS.CLOUD,
    degraded: true,
    message: { en: "Local session refused, falling back to cloud", fr: "Session locale refusée, repli sur le cloud" },
  },
]);
```

### Netzwerkerkennung

Integrations-Container laufen in einem isolierten Bridge-Netzwerk, sodass LAN-Broadcasts sowie mDNS- und SSDP-Verkehr sie nie direkt erreichen. Die Erkennung wird deshalb vom Gladys-Kern vermittelt: **Der Kern erfasst (er hat die passende Position im Netzwerk), und deine Integration interpretiert (sie kennt das Protokoll)**.

Deklariere die benötigten Erfassungen im Manifest-Feld `network_discovery` und fordere dann bei Bedarf einen Scan an (typischerweise aus `onScanRequest` heraus):

```js
gladys.onScanRequest(async () => {
  const announcements = await gladys.scanNetwork("udp-broadcast", { timeoutSeconds: 10 });
  const devices = announcements.map(({ source_ip, payload_base64 }) => {
    const announcement = decodePayload(Buffer.from(payload_base64, "base64"));
    const ids = gladys.externalIds("plug", announcement.id);
    return {
      name: `Device ${announcement.id}`,
      external_id: ids.device,
      params: [{ name: "IP_ADDRESS", value: source_ip }],
      features: [],
    };
  });
  await gladys.publishDiscoveredDevices(devices);
});
```

Scans sind synchron und zeitlich begrenzt (`timeoutSeconds` von 1 bis 30). Unterstützte Typen sind `udp-broadcast` (passives Mithören), `udp-active-broadcast` (der Kern sendet eine von dir gelieferte Nutzlast und leitet die Unicast-Antworten weiter; begrenzt auf einen Scan alle 10 Sekunden mit einer Nutzlast von bis zu 512 Byte), `mdns` und `ssdp`. Übergib bei `udp-active-broadcast` den `port` und die zu sendende `payload`:

```js
const replies = await gladys.scanNetwork("udp-active-broadcast", {
  port: 6667,
  payload: buildProbe(),
  timeoutSeconds: 10,
});
```

### Wake-on-LAN {/* #wake-on-lan */}

*Erfordert Gladys 4.86.0 oder neuer.*

Dasselbe Problem mit der Netzwerkposition, nur auf der Sendeseite: Ein Magic Packet ist ein UDP-Broadcast, der die Bridge zum LAN nie überquert. Deklariere `"network_wake": true` in deinem Manifest (wird wie die anderen Berechtigungsverträge auf dem Installationsbildschirm angezeigt – ein nicht deklarierter Zugriff erhält ein `403`) und bitte den Kern, das Paket zu senden:

```js
await gladys.wakeOnLan("64:e4:d5:b4:12:66"); // ":", "-" und Formate ohne Trennzeichen werden akzeptiert

// Das Gerät ignoriert den begrenzten Broadcast? Ziele auf den Subnetz-Broadcast oder passe den Port an:
await gladys.wakeOnLan("64:e4:d5:b4:12:66", { address: "192.168.1.255", port: 9 });
```

Der Kern baut das standardmäßige 102-Byte-Magic-Packet immer selbst (6 × `0xFF`, gefolgt von der 16-mal wiederholten MAC-Adresse). Du lieferst also nie die Nutzlast, und der Endpunkt ist kein allgemeiner UDP-Proxy. Er ist auf **ein Wecken alle 2 Sekunden** pro Integration begrenzt (darüber hinaus `429`), was für die übliche Schleife „wiederholen, bis das Gerät antwortet“ ausreicht. Ein erfolgreich aufgelöster Aufruf bedeutet, dass das Paket **gesendet** wurde, nicht dass das Gerät aufgewacht ist: Frage das Gerät ab, um das zu bestätigen.

### Sub-Container und Hardware

Manche Integrationen brauchen Begleitdienste (einen MQTT-Broker, Frigate, eine Protokollbrücke) oder Zugriff auf einen USB-Dongle oder eine Coral-TPU. Deklariere sie im Manifest-Feld `containers` (bis zu fünf) und steuere ihren Lebenszyklus dann über das SDK:

```js
await gladys.startContainer("mqtt", { env: { MQTT_PASSWORD: password } });

const containers = await gladys.getContainers();
const frigate = containers.find((c) => c.name === "frigate");
const coral = frigate.devices.find((d) => d.class === "coral-usb");
const detector = coral.granted && coral.available ? "edgetpu" : "cpu";
```

`getContainers()`, `startContainer(name, options?)`, `stopContainer(name)` und `restartContainer(name)` steuern die Begleitcontainer. Wenn der Nutzer den Zugriff auf ein Hardwaregerät gewährt oder entzieht, wird der Handler `onHardwareUpdated` ausgelöst, damit du die Konfiguration neu erzeugen und den betroffenen Container neu starten kannst.

Jeder Eintrag von `container.ports` spiegelt deine Manifest-Deklaration wider, ergänzt um den Host-Port, den Gladys zugewiesen hat:

```js
// [{ container_port: 5000, protocol: "tcp", host_port: 42115, label: { en: "Frigate UI" },
//    name: "frigate_ui", browsable: true }]
const [{ host_port: frigatePort }] = frigate.ports;
```

Der Host-Port wird **von Gladys gewählt** (ein freier Port, der über Neuerstellungen hinweg erhalten bleibt und nie im Manifest deklariert wird). Lies ihn also hier aus, statt einen anzunehmen; er ist `null`, solange der Container noch nie gestartet wurde. Zwei optionale Manifest-Felder ergänzen eine Port-Deklaration:

- `browsable` (Standard `true`): Ein Port, der eine Weboberfläche bereitstellt, erhält auf dem Überwachungsbildschirm einen Link „`<label>` öffnen“. Setze ihn auf `false` für einen Port, den ein Browser nicht öffnen kann – etwa einen WebSocket-Endpunkt, der auf Geräte wartet –, dann zeigt Gladys stattdessen ein einfaches Badge `<label>: <host_port>` an.
- `name` (`[a-z0-9_]`, 2 bis 20 Zeichen, eindeutig im gesamten Manifest): Macht den zugewiesenen Host-Port über den Platzhalter `{{port:<name>}}` in deinem Konfigurationsformular referenzierbar, sodass du eine Adresse der Instanz in einem dem Nutzer angezeigten Satz ausschreiben kannst (siehe [Den Nutzer anleiten](#guiding-the-user-sections-and-placeholders)).

### Logging

Das SDK bringt einen strukturierten Logger mit, damit die Logs deines Containers direkt über `docker logs` lesbar sind:

```js
import { logger, createLogger } from "@gladysassistant/integration-sdk";

logger.info("Starting the integration...");

const log = createLogger({ name: "weather-station" });
log.child("poll").debug("refreshing");
```

Das Log-Level kommt aus der Umgebungsvariable `LOG_LEVEL` (`debug`, `info`, `warn`, `error`, `silent`; Standard `info`). Das SDK protokolliert außerdem seinen eigenen Verbindungslebenszyklus unter dem Namen `gladys-sdk`, sodass sich Verbindungsprobleme ohne zusätzliche Einrichtung diagnostizieren lassen. Ansonsten bleibt es still: Setze `DEBUG=gladys-integration-sdk`, um seine internen Debug-Logs auf stderr zu erhalten.

Zwei Garantien, die du kennen solltest: Das SDK **speichert nichts auf der Festplatte** (alles wird bei der Wiederverbindung neu synchronisiert, und `/data` gehört ganz dir), und es **ignoriert unbekannte Nachrichtentypen stillschweigend**, sodass ein neueres Gladys niemals eine ältere Integration kaputt macht.

### Messaging-Kanäle {/* #messaging-channels */}

Statt Geräte bereitzustellen, kann eine Integration auch ein **Messaging-Kanal** sein: Setze im Manifest `"type": "communication"`, um eine Chat- oder Benachrichtigungsbrücke zu bauen (Telegram, Matrix usw.). Statt mit Geräten tauschst du Nachrichten mit **Kontakten** aus, die Nutzer mit ihrem Gladys-Konto verknüpfen:

```js
// Gladys bittet dich, eine ausgehende Nachricht an einen Kontakt zuzustellen.
gladys.onSendMessage(async (contact, message) => {
  // message.file ist ein angehängtes Bild in Base64 oder null.
  await sendToProvider(contact.id, message.text, message.file);
});

// Einen Kontakt des Anbieters per Kopplungscode mit einem Gladys-Benutzer verknüpfen.
const contact = await gladys.linkContact(code, providerUserId, "Alice");

// Eine eingehende Nachricht des Anbieters an Gladys weiterleiten.
await gladys.publishMessage(contactId, "The house is now empty.");
```

- `onSendMessage(cb)`: Gladys bittet dich, eine Nachricht zuzustellen. Das erste Argument ist der Ziel-`contact` (`{ id }` bei einem bidirektionalen Kanal oder die Kontaktfelder des Nutzers bei einem reinen Sendekanal), und die Nachricht enthält einen `text` und eine optionale `file` (ein angehängtes Bild in Base64 oder `null`).
- `publishMessage(contactId, text, opts?)`: leitet eine eingehende Nachricht an Gladys weiter (Nachrichtentext bis zu 4096 Zeichen).
- `linkContact(code, contactId, name?)`: verknüpft einen Kontakt des Anbieters über einen Einmal-Kopplungscode (15 Minuten gültig) mit einem Gladys-Benutzer und gibt den Selektor, den Vornamen und die Sprache des Benutzers zurück.
- `getContacts()`: listet die aktuell mit diesem Kanal verknüpften Kontakte auf.

Eine `communication`-Integration gibt über das Pflichtfeld `messaging` im Manifest an, zu welcher der **zwei Familien** sie gehört:

- **Bidirektionale Chat-Kanäle** (`"messaging": { "receive": true }`, Bots im Stil von Telegram): Der Nutzer verknüpft sein Konto mit einem kurzen Code, den er im Kanal sendet, und spricht dann von dort aus mit dem Gladys-Gehirn. `onSendMessage` erhält `{ id }`, den verknüpften Kontakt.
- **Reine Benachrichtigungskanäle** (`"messaging": { "receive": false }`, etwa im Stil von Free Mobile SMS oder CallMeBot): Es gibt keinerlei eingehenden Weg, also auch keinen Verknüpfungscode. Jeder Nutzer gibt seine eigenen Zugangsdaten im Block „Mein Konto“ des Bildschirms „Konfiguration“ ein, beschrieben durch das Manifest-Feld `contact_schema` (gleiches flaches Format wie `config_schema`), und Gladys übergibt sie mit jeder ausgehenden Nachricht an deinen Handler:

```json
"messaging": { "receive": false },
"contact_schema": [
  { "key": "username", "type": "string", "label": { "en": "Free Mobile login" }, "required": true },
  { "key": "access_token", "type": "secret", "label": { "en": "SMS API key" }, "required": true }
]
```

```js
gladys.onSendMessage(async (contact, message) => {
  // contact enthält die contact_schema-Werte des Zielbenutzers
  await sendFreeMobileSms(contact.username, contact.access_token, message.text);
});
```

Nutzer ohne verknüpftes Konto oder ohne konfigurierte Zugangsdaten werden von Gladys übersprungen und erreichen deinen Handler nie. Eine `communication`-Integration hat einen Bildschirm „Konfiguration“ (aus ihrem `config_schema`), aber keine Tabs „Geräte“ oder „Erkennung“.

### Wetteranbieter {/* #weather-providers */}

*Erfordert Gladys 4.85.0 oder neuer.*

Setze `"type": "weather"` in deinem Manifest, und deine Integration wird zu einem **Wetteranbieter**: Météo France, Open-Meteo, AccuWeather, ein nationaler Wetterdienst oder deine eigene Aggregation. Wie ein Messaging-Kanal hat sie keine Tabs „Geräte“ und „Erkennung“ und veröffentlicht weder Geräte noch Zustände – sie beantwortet die Wetteranfragen des Gladys-Kerns über eine **eigene Anbieter-API**, und Gladys versorgt mit der Antwort das Wetter-Widget im Dashboard, den Chat-Assistenten („Wie wird das Wetter morgen?“) und die Szenen-Auslöser für Wetterwarnungen.

Die Installation einer Wetter-Integration **hat ohne jede Konfiguration Vorrang vor dem eingebauten OpenWeather-Service**, und wird sie gestoppt oder deinstalliert, fällt Gladys automatisch darauf zurück. Sind mehrere Anbieter installiert, können Nutzer in der Konfiguration des Wetter-Widgets auch einen bestimmten Anbieter festlegen.

Alles läuft über einen einzigen Handler, der das **Pivot-Wetterformat** liefert – eine anbieterunabhängige Struktur, verallgemeinert aus dem, was die großen Anbieter bereitstellen, sodass der Kern deinen Anbieter nie beim Namen kennen muss:

```js
import {
  WEATHER_CONDITIONS,
  WEATHER_ALERT_SEVERITIES,
  WEATHER_ALERT_TYPES,
} from "@gladysassistant/integration-sdk";

gladys.onWeatherGet(async ({ latitude, longitude, language, units }) => {
  const data = await fetchProviderForecast(latitude, longitude, language, units);
  return {
    // Pflicht: temperature, weather (die Wetterlage), datetime.
    temperature: data.current.temperature,
    weather: WEATHER_CONDITIONS.RAIN,
    datetime: new Date().toISOString(),
    // Optionale aktuelle Felder, werden einfach weggelassen, wenn dein Anbieter sie nicht hat:
    apparent_temperature: data.current.feelsLike,
    humidity: 80, // Prozentwerte liegen zwischen 0 und 100
    pressure: 1013,
    wind_speed: 4.2,
    wind_direction: 220,
    uv_index: 3,
    sunrise: data.current.sunrise,
    sunset: data.current.sunset,
    is_day: data.current.isDay, // strikter Boolean, steuert die Tag/Nacht-Variante des Symbols
    // Vorhersagen (Gladys behält bis zu 24 Stunden und 8 Tage):
    hours: data.hours.map((h) => ({ temperature: h.temp, weather: toCondition(h), datetime: h.time })),
    days: data.days.map((d) => ({ temperature_min: d.min, temperature_max: d.max, datetime: d.date })),
    // Warnungen im CAP-Stil, bis zu 10 (Météo-France-Vigilance: gelb -> moderate, orange -> severe, rot -> extreme):
    alerts: [
      {
        severity: WEATHER_ALERT_SEVERITIES.SEVERE,
        event: "Orages violents",
        type: WEATHER_ALERT_TYPES.THUNDERSTORM,
      },
    ],
  };
});
```

Der Vertrag, Punkt für Punkt:

- **`units` ist die Präferenz des anfragenden Nutzers**, `metric` (°C, m/s, hPa, mm, km) oder `us` (°F, mph, in, mi): Gib deine Werte in diesem Einheitensystem zurück. Prozentwerte (`humidity`, `cloud_cover`, `precipitation_probability`) liegen immer zwischen 0 und 100, nie als Bruchteil zwischen 0 und 1.
- **`weather` ist eine Wetterlage aus dem Pivot-Enum** (`WEATHER_CONDITIONS`): `clear`, `partly-cloudy`, `cloud`, `fog`, `drizzle`, `rain`, `pouring`, `sleet`, `hail`, `snow`, `thunderstorm`, `wind`, `night`, `unknown`. Bilde die Codes deines Anbieters darauf ab; alles andere wird zu `unknown` (neutrales Symbol).
- **`is_day` transportiert das Tag/Nacht-Signal**, ein optionaler strikter Boolean für die aktuellen Bedingungen und für jeden `hours`-Eintrag: `weather` beschreibt die Meteorologie, `is_day` steuert die Darstellungsvariante. Die Wetterlage `night` wird aus Kompatibilitätsgründen noch akzeptiert, ist aber **für Anbieter veraltet** – eine verregnete Nacht ist `weather: "rain", is_day: false`, nicht `"night"`.
- **Jeder Vorhersageeintrag hat eigene Pflichtfelder**: `temperature`, `weather` und `datetime` für einen `hours`-Eintrag; `temperature_min`, `temperature_max` und `datetime` für einen `days`-Eintrag. `days` darf den aktuellen Tag enthalten oder nicht: Die Verbraucher filtern nach Kalenderdatum, du musst also nie mit dem heutigen Tag beginnen.
- **Warnungen folgen CAP**: `severity` (`minor`, `moderate`, `severe`, `extreme`) und `event` sind Pflicht, `description`, `start`, `end` und `type` sind optional. Der Phänomen-`type` (`wind`, `rain`, `flood`, `thunderstorm`, `snow`, `heat`, `cold`, `avalanche`, `coastal`, `fog`) ermöglicht es Gladys, die Warnung zu übersetzen und mit einem Symbol zu versehen, wo Freitext das nicht kann; ein ungültiger Typ wird verworfen und die Warnung behalten, dargestellt allein anhand ihres `event`.
- **Auf die Bestätigung wird bis zu 15 Sekunden gewartet** (statt der üblichen 5), damit ein frischer Aufruf einer Drittanbieter-API Zeit hat. Wirft der Handler einen Fehler – Anbieter nicht konfiguriert, API nicht erreichbar –, schlägt der Befehl fehl und Gladys wechselt zum nächsten verfügbaren Anbieter.
- **Die Nutzlast wird vom Kern normalisiert und begrenzt**: Unbekannte Felder werden verworfen, Zahlen müssen endlich sein, Datumsangaben müssen sich parsen lassen, Arrays werden gekappt (24 `hours`, 8 `days`, 10 `alerts`, 3 `images`), und Warnungstexte werden gekürzt (`event` bis zu 100 Zeichen, `description` bis zu 5.000 – Vigilance-Bulletins können lang sein).

Zwei optionale Erweiterungen vervollständigen den Typ.

**Bilder des Anbieters** (eine Vigilance-Karte, ein Regenradar, eine Satellitenansicht). Die Wetter-Nutzlast deklariert immer nur **Metadaten** – ein `images`-Array mit bis zu drei Einträgen `{ key, label? }`, wobei `key` dem Muster `^[a-z0-9][a-z0-9-]{0,31}$` entspricht –, und die Bytes werden auf Abruf übertragen:

```js
gladys.onWeatherGetImage(async (key) => {
  const png = await fetchVigilanceMap(); // gibt einen Buffer zurück
  return png.toString("base64"); // ROHES Base64, ohne "data:"-Präfix
});
```

Gladys prüft die dekodierten Bytes (PNG oder JPEG, bis zu 500 KB), speichert sie pro Schlüssel 10 Minuten im Cache und liefert sie dem Browser von seinem eigenen Origin aus, sodass die IP-Adressen deiner Nutzer nie einen Drittserver erreichen. Angefordert werden kann nur ein Schlüssel, der in deiner letzten Wetter-Nutzlast deklariert wurde.

**Der Aktualitäts-Anstoß.** Gladys bewertet die Szenen-Auslöser für Wetterwarnungen bei einer planmäßigen Prüfung alle 30 Minuten neu, abgerufen über `onWeatherGet` und verglichen anhand der normalisierten Warnungen. Ein Anbieter, der *weiß*, dass sich an der Quelle etwas geändert hat, kann es besser machen – aber niemals durch Pushen von Daten:

```js
onUpstreamVigilanceChange(() => gladys.requestWeatherRefresh());
```

`requestWeatherRefresh()` bedeutet nur „ruf mich jetzt neu ab“: Die Daten kommen über den normalen Weg `onWeatherGet` herein, sodass die Szene Sekunden später auslöst statt innerhalb von 30 Minuten. Der Aufruf trägt keine Daten, erwartet keine Antwort und ist auf einen pro Minute und Integration begrenzt (darüber hinaus wird er stillschweigend verworfen).

Mehr ist auf deiner Seite nicht nötig: Der Szenen-Auslöser für Wetterwarnungen gehört zum Kern und funktioniert mit jedem Anbieter gleich.

### Dashboard-Widgets

*Erfordert Gladys 5.1.0 oder neuer.*

Vieles, was eine Integration weiß, ist kein Gerät: eine Produktionsprognose, ein Ladeplan, die günstigste Tankstelle in der Nähe, der Zustand eines Saugroboters. Deklariere bis zu fünf `widgets` in deinem Manifest, und Gladys nimmt sie in die Widget-Auswahl des Dashboard-Editors auf, in einem eigenen Abschnitt unter dem Namen deiner Integration.

```json
"widgets": [
  {
    "key": "charging_plan",
    "label": { "en": "Charging plan", "fr": "Plan de charge" },
    "description": { "en": "When the car will charge tonight.", "fr": "Quand la voiture va charger cette nuit." },
    "icon": "battery-charging",
    "settings": [
      { "key": "car", "type": "select", "source": "devices", "label": { "en": "Car", "fr": "Voiture" } }
    ],
    "action_timeout_seconds": 30
  }
]
```

Das Manifest deklariert die **Identität** des Widgets: seinen `key`, sein mehrsprachiges `label` (3 bis 30 Zeichen), eine optionale `description` und ein Feather-`icon` sowie bis zu zehn instanzspezifische `settings` in der Grammatik von `config_schema`. Die Einstellungen liegen im Dashboard-JSON, das jeder Benutzer eines geteilten Dashboards lesen kann, deshalb werden Felder vom Typ `secret`, `oauth2` und `account_link` dort abgelehnt. Eine Einstellung mit `source: "devices"` ist der vorgesehene Weg, eine Widget-Instanz an eines deiner Geräte zu binden.

Der **Inhalt** wird zur Laufzeit erzeugt und nicht im Manifest gespeichert, sodass ein Saugroboter, der gerade putzt, eine andere Karte liefern kann als einer in seiner Ladestation:

```js
gladys.onWidgetGet("charging_plan", async ({ settings, language, units }) => {
  const plan = await computePlan(settings.car);
  return {
    ttl_seconds: 300,
    components: [
      { type: "text", variant: "caption", text: { en: "Off-peak hours", fr: "Heures creuses" } },
      { type: "value", value: plan.targetPercent, unit: "%", label: { en: "Target", fr: "Objectif" }, color: "success" },
      { type: "chart", chart_type: "area", unit: "kW", now_marker: true, series: [{ points: plan.points }] },
      { type: "button", label: { en: "Charge now", fr: "Charger maintenant" }, style: "primary",
        action: { key: "charge_now", params: {} } },
    ],
  };
});
```

Gladys ruft den Inhalt ab, wenn ein Dashboard das Widget anzeigt, speichert ihn pro Einstellungen, Sprache und Einheiten im Cache und ruft ihn erneut ab, wenn `ttl_seconds` abgelaufen ist (10 bis 3600 Sekunden, Standard 60). Auf deinen Handler wird bis zu 15 Sekunden gewartet.

**Du beschreibst, was angezeigt wird, Gladys entscheidet, wie es aussieht.** Kein HTML, kein CSS, kein Script, keine eigenen Farben oder Größen. Du sendest einen Inhaltsbaum in einem festen Vokabular, und der Kern rendert ihn. Genau das verleiht jedem Widget das aktuelle Theme, den Dark Mode, das mobile Layout, die Sprache und Zahlenformate des Nutzers sowie Zukunftssicherheit, wenn sich die Oberfläche ändert.

Das Vokabular umfasst acht Komponententypen:

| `type` | Was angezeigt wird |
| --- | --- |
| `text` | Eine Überschrift (`heading`), ein Absatz (`body`) oder eine gedämpfte Bildunterschrift (`caption`), als escapeter Klartext. |
| `value` | Eine Kachel: ein kurzer Wert, optional mit `unit`, `label`, `icon` und semantischer `color`. |
| `gauge` | Ein kachelgroßer Radialbogen zwischen `min` und `max`. |
| `status` | 1 bis 10 Zeilen aus Beschriftung und Wert mit einem farbigen Punkt. |
| `chart` | 1 bis 4 Datenreihen mit bis zu 300 Punkten oder 1 bis 4 deiner `device_features` über ein `interval`, mit bis zu 8 `annotations` und einem optionalen `now_marker`. |
| `card-list` | 1 bis 12 Karten in einem `grid` oder 1 bis 8 Zeilen in einer `list`, jeweils mit Titel, Datum, Bild, Badge, Beschreibung und bis zu 3 Links. |
| `image` | Ein Bild in einem festen 16:9-Rahmen. |
| `button` | Ein Pill-Button mit genau einem von `action`, `device_feature` + `value` oder einem https-`link`. |

Farben sind ein semantisches Enum (`neutral`, `primary`, `success`, `warning`, `danger`, `info`), das der Kern in beiden Modi auf das Theme abbildet – nie ein Hex-Wert. Jedes Textfeld akzeptiert einen einfachen String oder ein mehrsprachiges Objekt. Datumsangaben sind ISO-8601-Strings, die der Kern in der Locale und Zeitzone des Nutzers formatiert.

Eine Karte hat außerdem ein **Inhaltsbudget**, damit ein Widget schon konstruktionsbedingt nicht überladen werden kann: höchstens 8 Komponenten, 1 zentrale Komponente (`chart`, `card-list` oder `image`), 6 Kacheln, 2 Texte, davon ein `body`, 1 `status` und 4 Buttons. Alles über einer Grenze wird in Inhaltsreihenfolge verworfen, setze das Wichtigste also an den Anfang. Der Kern gibt außerdem die Anzeigereihenfolge vor (Kopfzeile, Kacheln, zentrale Komponente, Zustände, Buttons), unabhängig davon, in welcher Reihenfolge du sendest.

Drei weitere Dinge, die ein Widget kann:

```js
// Ein Button, der dich zurückruft. `params` stammen aus dem von dir gesendeten Inhalt, nie aus Nutzereingaben.
gladys.onWidgetAction("charging_plan", async (actionKey, params, { settings }) => {
  await startCharge(settings.car);
  return { en: "Charging started", fr: "Charge lancée" };
});

// Ein im Inhalt deklariertes Bild, ausgeliefert über Gladys statt von einem Drittanbieter geladen.
gladys.onWidgetGetImage(async (imageKey) => toBase64(await renderMap(imageKey)));

// "Ruf mich jetzt neu ab", wenn sich deine Daten vor Ablauf der TTL geändert haben.
gladys.requestWidgetRefresh("charging_plan");
```

- `onWidgetAction(key, cb)`: gibt eine optionale Toast-Meldung zurück; gewartet wird bis zum `action_timeout_seconds` des Widgets (5 bis 120, Standard 30). Nach einer erfolgreichen Aktion verwirft der Kern den zwischengespeicherten Inhalt, und jedes geöffnete Dashboard lädt neu.
- `onWidgetGetImage(cb)`: wird einmal für alle deine Bildschlüssel registriert. Liefere rohes Base64 (ohne `data:`-Präfix) eines PNG, JPEG oder WebP, höchstens 300 KB dekodiert und 4096 × 4096 Pixel. Der Kern prüft und lehnt ab, er komprimiert nie neu – skaliere also auf deiner Seite. Ein geprüftes Bild wird eine Stunde lang pro Schlüssel im Cache gehalten: Wenn sich die Bytes ändern, ändere den Schlüssel.
- `requestWidgetRefresh(key)`: „Fire-and-Forget“, begrenzt auf einen Aufruf alle 10 Sekunden pro Widget. Kacheln und Diagramme, die an ein Geräte-Feature gebunden sind, aktualisieren sich selbst und brauchen keinen Anstoß.

Deiner Nutzlast wird nie vertraut: Der Kern normalisiert und begrenzt alles, bevor es die Oberfläche erreicht, verwirft unbekannte Komponententypen und Felder, kürzt Texte, kappt Arrays und akzeptiert nur `https`-Links. Starte deine Integration mit `DEBUG=gladys-integration-sdk`, dann protokolliert das SDK, was der Kern verwerfen oder kürzen würde, oder rufe `validateWidgetContent(content)` und `validateWidgetImage(base64)` direkt in deinen Tests auf.

### Szenen-Auslöser und -Aktionen

*Erfordert Gladys 5.1.0 oder neuer.*

Ein Geräte-Feature ist ein **Zustand**, und `POST /state` deckt ihn gut ab. Was es nicht abdeckt, ist das, was **passiert**: ein in der Einfahrt erkanntes Kennzeichen, eine gedrückte Türklingel, ein gescannter NFC-Tag. Und einen Wert zu schreiben ist nicht dasselbe, wie einen **Vorgang** mit Parametern und Ergebnis auszuführen, etwa „mach eine Momentaufnahme und gib mir das Bild“.

Deklariere `scene_triggers` und `scene_actions` in deinem Manifest (jeweils bis zu 20), und sie erscheinen im Szenen-Editor neben den eingebauten, in einer Kategorie „Integrationen“. Jeder Integrationstyp kann sie deklarieren.

```json
"scene_triggers": [
  {
    "key": "object_detected",
    "label": { "en": "Object detected", "fr": "Objet détecté" },
    "fields": [
      { "key": "camera", "type": "select", "source": "devices", "required": true,
        "label": { "en": "Camera", "fr": "Caméra" } },
      { "key": "zone", "type": "string", "label": { "en": "Zone", "fr": "Zone" } }
    ],
    "variables": [
      { "key": "label", "type": "string", "label": { "en": "Object type", "fr": "Type d'objet" } },
      { "key": "score", "type": "number", "label": { "en": "Confidence", "fr": "Confiance" } }
    ]
  }
],
"scene_actions": [
  {
    "key": "create_snapshot",
    "label": { "en": "Take a snapshot", "fr": "Prendre un instantané" },
    "timeout_seconds": 20,
    "fields": [
      { "key": "camera", "type": "select", "source": "devices", "required": true,
        "label": { "en": "Camera", "fr": "Caméra" } }
    ],
    "outputs": [{ "key": "image", "type": "string", "label": { "en": "Snapshot", "fr": "Instantané" } }]
  }
]
```

`fields` verwendet dieselbe flache Grammatik wie `config_schema` (bis zu 10 pro Deklaration), und Gladys erzeugt daraus das Formular im Szenen-Editor. Bei einem Auslöser sind diese Felder die **Filter**, die der Ersteller der Szene konfiguriert; ein leer gelassenes Feld passt auf jeden Wert. `variables` (bis zu 20) sind die Details, die dein Ereignis mitbringt, und stehen den folgenden Schritten der Szene als `{{triggerEvent.data.<key>}}` zur Verfügung. Bei einer Aktion sind `outputs` die Werte, die du zurückgibst und die den nachfolgenden Schritten zur Verfügung stehen.

Löse einen Auslöser mit `publishSceneEvent` aus:

```js
await gladys.publishSceneEvent("object_detected", {
  camera: ids.device,
  label: "person",
  zone: "driveway",
  score: 0.92,
});
```

`data` ist flach: höchstens 30 Schlüssel, jeweils ein String mit bis zu 1.000 Zeichen, eine endliche Zahl, ein Boolean oder `null`. Niemals ein verschachteltes Objekt oder ein Array, denn ein Ereignis trägt Details, keine zu interpretierende Nutzlast. Der Kern bildet die Filter und Variablen aus deiner Deklaration, vergleicht die Filter mit dem, was jeder Szenen-Ersteller konfiguriert hat, und startet die passenden Szenen. Sende ein Ereignis **pro Übergang**, keine periodische Momentaufnahme: Die Grenze liegt bei 300 Ereignissen pro Minute und Integration.

**Du erfährst nie, welche Szenen existieren.** Du löst ein typisiertes Ereignis aus, der Kern übernimmt den Abgleich. Es gibt nichts, was nach außen dringen könnte, nichts, was bei der Wiederverbindung neu synchronisiert werden müsste, und die Konfiguration des Nutzers bleibt in Gladys. Ein erfolgreich aufgelöstes `publishSceneEvent` bedeutet „angenommen und einmal ausgewertet“, nicht „eine Szene wurde ausgeführt“. Der Abgleich besteht aus Gleichheit und Zugehörigkeit auf den deklarierten Feldern, mehr nicht: kein Operator, kein Schwellwert, keine Dauer. Wenn du `>` auf einen Wert brauchst, ist dieser Wert ein Zustand und gehört in ein Geräte-Feature.

Verarbeite eine Aktion mit `onSceneAction`:

```js
gladys.onSceneAction("create_snapshot", async (fields) => {
  const image = await grabSnapshot(fields.camera);
  return { image };
});
```

Die Felder kommen **aufgelöst** an: Szenenvariablen ersetzt, Standardwerte angewendet, vom Kern anhand deiner Deklaration geprüft. Gib ein Objekt mit deinen deklarierten `outputs` zurück (nur Skalare, Strings auf 10.000 Zeichen begrenzt) oder gar nichts. Auf deinen Handler wird bis zum deklarierten `timeout_seconds` gewartet (5 bis 120, Standard 30), gezählt ab dem Moment, in dem die Szene die Aktion erreicht. Ein Fehler lässt nur diese Aktion fehlschlagen: Die Szene protokolliert ihn und läuft weiter. Eine Aktion wird genau einmal ausgegeben, ohne Warteschlange und ohne Wiederholung.

Ein Bild ist keine Ausgabe: Veröffentliche es über `publishCameraImage` und lass die Szene die Kamera-Aktionen des Kerns verwenden.

### Integrationen ohne Geräte: der Typ `provider`

*Erfordert Gladys 5.1.0 oder neuer.*

Manche Integrationen haben überhaupt kein Gerät. Ein Kraftstoffpreis-Index, ein Feed mit Kinostarts, eine Brücke, die nur Ereignisse weiterleitet: Ihr ganzer Vertrag besteht aus dem, was sie deklarieren. Solche Integrationen verwenden `"type": "provider"` und müssen mindestens eines von `widgets`, `scene_triggers` oder `scene_actions` deklarieren.

Eine `provider`-Integration erhält die Bildschirme „Konfiguration“, „Überwachung“ und „Logs“, aber keine Tabs „Geräte“ oder „Erkennung“ – genau wie die Typen `communication` und `weather`. Alles andere im Manifest funktioniert gleich.

Widgets und Szenen-Deklarationen sind **Fähigkeiten, keine Typen**: Eine `device`-Integration kann sie ebenfalls deklarieren und sollte das in der Regel auch tun. Eine Saugroboter-Integration veröffentlicht ihre Geräte, ein Widget für ihren Zustand und eine Szenen-Aktion „einen Raum reinigen“, alles aus demselben Manifest.

### Hauskoordinaten {/* #house-coordinates */}

*Erfordert Gladys 4.85.0 oder neuer.*

Eine Integration, deren Logik davon abhängt, wo der Nutzer wohnt – Luftqualität, Pollen, Wassernutzungsbeschränkungen, Gezeiten –, kann die Koordinaten der in Gladys konfigurierten Häuser auslesen, statt den Nutzer zu bitten, Breiten- und Längengrad noch einmal in dein Konfigurationsformular einzutippen.

Der Wohnort ist ein sensibles personenbezogenes Datum, deshalb ist der Zugriff ein **Berechtigungsvertrag**, wie bei den Netzwerkerfassungen: Deklariere `"location": true` in deinem Manifest (die Anfrage wird dem Nutzer dann auf dem Installationsbildschirm angezeigt), und Gladys stellt `GET /house` in der Host-API bereit. Eine Integration, die das nicht deklariert hat, erhält ein `403`.

Das JavaScript-SDK kapselt diesen Endpunkt noch nicht, rufe ihn also mit den Zugangsdaten auf, die Gladys in deinen Container injiziert:

```js
const response = await fetch(`${process.env.GLADYS_HOST_API_URL}/api/integration/v1/house`, {
  headers: { Authorization: `Bearer ${process.env.GLADYS_INTEGRATION_TOKEN}` },
});
const houses = await response.json();
// [{ id, name, selector, latitude, longitude }], nach Name sortiert
```

`latitude` und `longitude` sind `null`, wenn der Nutzer das Haus nicht verortet hat, und es kann mehrere Häuser geben: Behandle beide Fälle. Zurückgegeben werden nur diese fünf Felder – niemals Alarmmodus, Code oder Verzögerung. Koordinaten ändern sich selten, daher ist es das übliche Muster, sie beim Start und bei der Wiederverbindung abzurufen.

Eine `weather`-Integration braucht weder diesen Endpunkt noch `location: true`: Die Koordinaten des angezeigten Hauses werden in den `options` jeder Wetteranfrage mitgeliefert.

### Eingehende Webhooks (Gladys Plus)

Wenn die Instanz des Nutzers mit **Gladys Plus** verbunden ist, kann deine Integration **eingehende Webhooks** über öffentliche HTTPS-URLs empfangen. Das ist praktisch für Cloudanbieter, die Ereignisse pushen oder eine Callback-URL benötigen. Deklariere bis zu drei im Manifest-Feld `webhooks` und verarbeite sie dann:

```js
// Fire-and-Forget: wird sofort bestätigt, Fehler im Handler werden verschluckt.
gladys.onWebhook("events", async ({ body }) => {
  await refreshFromApi();
});

// Synchron: Du gibst die HTTP-Antwort zurück (Status 200 bis 499, Body bis zu 64 KB).
gladys.onWebhook("callback", async ({ query }) => ({
  status: 200,
  contentType: "application/json",
  body: JSON.stringify({ "hub.challenge": query["hub.challenge"] }),
}));
```

- `getWebhooks()`: gibt `{ available, webhooks: [{ key, mode, url }] }` zurück. Die öffentliche URL existiert nur, wenn Gladys Plus verknüpft ist; registriere sie also zur Laufzeit beim Drittanbieterdienst.
- `onWebhook(key, cb)`: Der Callback erhält `{ method, query, body, contentType }`.
- `onWebhookUpdated(cb)`: wird ausgelöst, wenn Gladys Plus verknüpft oder getrennt wird oder sich eine URL ändert, damit du deine Webhooks neu registrieren kannst.

## Schritt 3: Das Manifest schreiben {/* #step-3-write-the-manifest */}

Jede externe Integration wird durch eine einzige Datei namens `gladys-assistant-integration.json` beschrieben, die im **Stammverzeichnis deines Repositorys** liegt:

```json
{
  "manifest_version": 1,
  "type": "device",
  "name": "My Integration",
  "description": {
    "en": "Control my devices from Gladys Assistant.",
    "fr": "Contrôlez mes appareils depuis Gladys Assistant."
  },
  "version": "1.0.0",
  "docker_image": "ghcr.io/yourname/my-integration:1.0.0",
  "gladys_version": ">=4.86.0",
  "cover_image": "https://raw.githubusercontent.com/yourname/my-integration/main/cover.jpg",
  "categories": ["lighting", "energy"],
  "transports": ["local", "cloud"],
  "config_schema": [
    {
      "key": "api_key",
      "type": "secret",
      "label": { "en": "API key", "fr": "Clé d'API" },
      "placeholder": { "en": "sk-1234...", "fr": "sk-1234..." },
      "required": true
    }
  ]
}
```

### Felder des Manifests

| Feld | Pflicht | Beschreibung |
| --- | --- | --- |
| `manifest_version` | Ja | Muss `1` sein. |
| `type` | Ja | `"device"` (stellt Geräte bereit), `"communication"` (ein Messaging-Kanal), `"weather"` (ein Wetteranbieter) oder `"provider"` (kein Gerät, nur Fähigkeiten). |
| `name` | Ja | Anzeigename, 3 bis 30 Zeichen. |
| `description` | Ja | Ein Objekt mit Sprachen als Schlüsseln. `en` ist Pflicht, jeder Text hat 10 bis 100 Zeichen. |
| `version` | Ja | Strikte [semantische Version](https://semver.org/). Wird sie erhöht, werden Nutzer über ein verfügbares Update informiert. |
| `docker_image` | Ja | Eine korrekt formatierte Image-Referenz mit explizitem Tag oder Digest. Sie muss existieren und anonym abrufbar sein. |
| `gladys_version` | Ja | Ein Semver-Bereich (npm-Syntax), mit dem kompatible Instanzen gefiltert werden. |
| `cover_image` | Nein | Direkte HTTPS-URL zu einem Titelbild (siehe Regeln unten). |
| `categories` | Nein | 1 bis 3 Katalogkategorien (siehe unten). Erfordert einen `gladys_version`-Bereich, der bei `4.86.0` beginnt. |
| `config_schema` | Nein | Die Liste der Konfigurationsfelder, die dem Nutzer angezeigt werden. |
| `transports` | Nein | Nicht leere Teilmenge von `local` und `cloud`, falls deine Integration zweikanalig ist. |
| `actions` | Nein | 1 bis 10 Aktionsbuttons, jeweils mit `key`, mehrsprachigem `label`, `timeout_seconds` (5 bis 120) und optionalen `fields`. |
| `network_discovery` | Nein | 1 bis 5 vermittelte Erfassungsmethoden (`udp-broadcast`, `udp-active-broadcast`, `mdns`, `ssdp`). |
| `containers` | Nein | Bis zu 5 Begleitcontainer, jeweils mit `name`, `docker_image`, `start` (`auto` oder `manual`) und optional `env`, `volumes`, `ports` (bis zu 3, jeweils mit `container_port`, `protocol`, mehrsprachigem `label`, optionalem `name` und `browsable`), `devices` (`coral-usb`, `coral-pcie`, `gpu`, `video`), `read_only`, `command`, `memory_mb` (32 bis 4096), `cpu` (0,1 bis 2), `shm_mb` (64 bis 512). |
| `location` | Nein | `true` fordert Zugriff auf die Koordinaten der Häuser des Nutzers an (`GET /house`). Wird auf dem Installationsbildschirm angezeigt und serverseitig durchgesetzt. |
| `network_wake` | Nein | `true` fordert die Berechtigung an, Wake-on-LAN-Magic-Packets über den Kern zu senden. Wird auf dem Installationsbildschirm angezeigt und serverseitig durchgesetzt. |
| `messaging` | Pflicht bei `communication` | `{ "receive": true }` für einen bidirektionalen Chat-Kanal, `{ "receive": false }` für einen reinen Benachrichtigungskanal. Für die anderen Typen verboten. |
| `contact_schema` | Pflicht, wenn `messaging.receive` gleich `false` ist | Die benutzerbezogenen Zugangsdaten eines reinen Sendekanals, gleiches Feldformat wie `config_schema` (ohne `oauth2`-Felder). Ansonsten verboten. |
| `webhooks` | Nein | Bis zu 3 eingehende Webhooks (Gladys Plus), jeweils mit `key`, mehrsprachigem `label` und einem `mode` (`fire_and_forget` oder `sync`). |
| `widgets` | Nein | 1 bis 5 Dashboard-Widgets, jeweils mit `key`, mehrsprachigem `label`, optionaler `description`, `icon`, bis zu 10 `settings` und einem `action_timeout_seconds` (5 bis 120). Erfordert einen `gladys_version`-Bereich, der bei `5.1.0` beginnt. |
| `scene_triggers` | Nein | 1 bis 20 Szenen-Auslöser, jeweils mit `key`, mehrsprachigem `label`, bis zu 10 `fields` und bis zu 20 `variables`. Erfordert einen `gladys_version`-Bereich, der bei `5.1.0` beginnt. |
| `scene_actions` | Nein | 1 bis 20 Szenen-Aktionen, jeweils mit `key`, mehrsprachigem `label`, `timeout_seconds` (5 bis 120), bis zu 10 `fields` und bis zu 20 `outputs`. Erfordert einen `gladys_version`-Bereich, der bei `5.1.0` beginnt. |

### Store-Kategorien {/* #store-categories */}

*Erfordert Gladys 4.86.0 oder neuer.*

Seit Gladys 4.86 lässt sich der Katalog durchstöbern: eine Seitenleiste mit Kategorien, Facettenfilter (nativ, Community, lokal, Cloud, Gladys Plus) und eine Sortierung „Neueste zuerst“. Mit dem Feld `categories` stellst du deine Integration ins richtige Regal – ein Anwendungsbereich, unabhängig vom technischen `type` des Manifests:

```json
"categories": ["lighting", "energy"],
"gladys_version": ">=4.86.0"
```

Die Regeln:

- **1 bis 3 Kategorien** aus dem festgelegten Vokabular: `climate`, `lighting`, `energy`, `security`, `multimedia`, `appliances`, `environment`, `protocols`, `network`, `notifications`, `assistants`, `services`.
- **`gladys_version` muss bei `4.86.0` beginnen**, sobald du das Feld deklarierst. Ältere Kerne lehnen jedes unbekannte Manifest-Feld ab, deshalb weist der Store-Validator ein Manifest zurück, das `categories` mit einem niedrigeren Minimum deklariert – beides gehört zusammen.
- Ein unbekannter Schlüssel wird **mit einer Warnung verworfen**, statt das Manifest abzulehnen, sodass sich eine Integration, die gegen ein neueres Vokabular als das des laufenden Gladys veröffentlicht wurde, trotzdem installieren lässt.
- Ohne das Feld bleibt deine Integration unter „Alle“ und in der Suche sichtbar, steht aber in keinem Regal.

Integrationen, die vor 4.86 veröffentlicht wurden, wurden einmalig über eine Fallback-Zuordnungsdatei im [Store-Repository](https://github.com/GladysAssistant/integration-store) kategorisiert, aber **dein Manifest hat immer Vorrang**, sobald es das Feld deklariert: Nutze die Gelegenheit, um zu prüfen, ob die dir zugewiesenen Kategorien wirklich passen, und passe sie gegebenenfalls an.

### Das Konfigurationsschema

`config_schema` ist eine flache Liste von Feldern. Jedes Feld hat einen `key` (Kleinbuchstaben, passend zu `[a-z0-9_]`), einen `type` und ein mehrsprachiges `label` (`en` ist Pflicht). Unterstützte Typen sind `string`, `number`, `boolean`, `select`, `multi_select`, `secret`, `oauth2`, `account_link` und `section`. Je nach Typ kann ein Feld außerdem `placeholder` (für `string`/`number`/`secret`), `required`, `default`, `min`/`max` (für Zahlen) und `options` (für `select`/`multi_select`) deklarieren.

Ein `select` oder `multi_select` kann entweder statische `options` auflisten oder seine Auswahlmöglichkeiten mit `source: "devices"` dynamisch aus den Geräten des Nutzers beziehen und als `dropdown` oder `radio` (`display`) dargestellt werden. Ein `section`-Feld dient nur der Darstellung: Es zeigt eine `description` und bis zu fünf Dokumentations-`links` an und speichert keinen Wert.

Gladys erzeugt das Konfigurationsformular automatisch aus dieser Liste, du schreibst also keinerlei Frontend-Code. Als `secret` markierte Werte werden sicher gespeichert und nie an das Frontend zurückgegeben.

### Den Nutzer anleiten: Abschnitte und Platzhalter {/* #guiding-the-user-sections-and-placeholders */}

Ein generiertes Formular ist kompakt, gibt dem Nutzer aber für sich allein keine Hilfe beim Einstieg – vor einem Feld „Client ID“ muss er erst einmal wissen, dass er eine Anwendung auf der Entwicklerplattform des Herstellers anlegen muss. Genau dafür gibt es `section`-Felder: rein darstellende Blöcke, die das Formular in Kapitel gliedern, mit einem Titel, einer Klartext-`description` (bis zu 1.000 Zeichen pro Sprache) und bis zu fünf `links` (nur HTTPS), die in einem neuen Tab geöffnet werden und ihre Zieldomain anzeigen:

```json
"config_schema": [
  {
    "key": "intro",
    "type": "section",
    "label": { "en": "Getting started", "fr": "Pour commencer" },
    "description": {
      "en": "Create a developer account to get your API key.",
      "fr": "Créez un compte développeur pour obtenir votre clé d'API."
    },
    "links": [{ "url": "https://open-meteo.com/en/docs", "label": { "en": "Open-Meteo docs" } }]
  },
  { "key": "api_key", "type": "secret", "label": { "en": "API key" }, "required": true }
]
```

Abschnitte sind auch in den `fields` einer Aktion und in einem `contact_schema` erlaubt, die dasselbe Format verwenden. Sie speichern keinen Wert: Ihr Schlüssel taucht nie in `gladys.config`, in `onConfigUpdated` oder in den Feldern eines Aktions-Handlers auf.

Seit Gladys 4.85.0 können `label` und `description` eines Abschnitts zwei **Klartext-Platzhalter** enthalten, die das Gladys-Frontend beim Rendern des Formulars ersetzt:

| Platzhalter | Ersetzt durch |
| --- | --- |
| `{{gladys_host}}` | Den Hostnamen der Adresse, über die der Browser Gladys gerade erreicht. |
| `{{port:<name>}}` | Den Host-Port, den Gladys dem Sub-Container-Port mit diesem `name` zugewiesen hat. |

Sie sind der deklarative Weg, eine Adresse der Instanz selbst auszuschreiben – etwa für ein Gerät, das sich *mit* Gladys verbinden muss, wie eine OCPP-Ladestation:

```json
"containers": [
  {
    "name": "ocpp",
    "docker_image": "ghcr.io/acme/ocpp:1.2.0",
    "ports": [
      { "container_port": 9000, "name": "ocpp", "label": { "en": "OCPP endpoint" }, "browsable": false }
    ]
  }
],
"config_schema": [
  {
    "key": "charge_point",
    "type": "section",
    "label": { "en": "Connect your charge point" },
    "description": {
      "en": "Point your charge point to ws://{{gladys_host}}:{{port:ocpp}}/",
      "fr": "Pointez votre borne vers ws://{{gladys_host}}:{{port:ocpp}}/"
    }
  }
]
```

Die Syntax ist exakt – kein Leerzeichen innerhalb der Klammern, kein Ausdruck, kein eingeschleuster Code –, und vier Regeln solltest du kennen:

- Ein `{{port:<name>}}`, das auf einen Namen verweist, den kein Port deines Manifests deklariert, **führt zur Ablehnung des Manifests**, sowohl im Store-Indexer als auch auf dem Server;
- `{{port:<name>}}` ist in einem `contact_schema` nicht erlaubt: Dieser Block ist der einzige Bildschirm, den ein Nicht-Admin-Nutzer erreicht, und seine eingeschränkte Ansicht enthält keinen Containerzustand. `{{gladys_host}}` funktioniert überall;
- Ein gültiges `{{port:<name>}}`, dessen Port noch keinen zugewiesenen Host-Port hat (der Sub-Container wurde noch nie gestartet), bleibt auf dem Bildschirm unverändert stehen und wird beim nächsten Laden des Bildschirms aufgelöst. Starte den Container, der den Port veröffentlicht, bevor du den Nutzer auf den Satz verweist;
- Beim Zugriff über Gladys Plus oder einen Reverse Proxy wird `{{gladys_host}}` zum Hostnamen des Tunnels oder Proxys aufgelöst, nicht zur LAN-Adresse der Instanz. Wenn das Gerät Gladys über das LAN erreichen muss, schreib das in die Dokumentation deines Repositorys.

Für alles, was länger als ein paar Sätze ist (Screenshots, eine vollständige Schritt-für-Schritt-Anleitung), bleibt die verpflichtende Dokumentation im Repository das richtige Medium: Der Bildschirm „Konfiguration“ enthält einen dauerhaften Link **„Dokumentation“** dorthin, in der Sprache des Nutzers – und genau dann braucht er sie am meisten.

### Regeln für das Titelbild

Wenn du ein `cover_image` angibst, muss es:

- JPEG oder PNG sein,
- genau **800 × 534 Pixel** groß sein,
- kleiner als **150 KB** sein,
- über HTTPS mit einer direkten URL ausgeliefert werden (ohne Weiterleitungen).

Am einfachsten committest du das Bild direkt in dein GitHub-Repository und verwendest seine Raw-URL (`https://raw.githubusercontent.com/...`), wie im Manifest-Beispiel oben gezeigt.

Ein fehlendes oder ungültiges Titelbild führt nicht zur Ablehnung deiner Integration: Sie wird mit einem Platzhalter indexiert und mit einer Warnung markiert.

### Dokumentation (Pflicht)

Jede Integration muss zwei Dokumentationsdateien im Stammverzeichnis ihres Repositorys mitliefern: `docs/en.md` und `docs/fr.md`, jeweils mindestens **300 Zeichen** lang. Der Store hostet sie neu und zeigt sie den Nutzern im Katalog an, ein Repository ohne diese Dateien wird daher **abgelehnt**. Decke das Wesentliche ab: was die Integration tut, ihre Voraussetzungen, wie man sie konfiguriert und die Fehlerbehebung. Das Template enthält bereits beide Dateien, bereit zum Ausfüllen.

## Schritt 4: Lokal bauen und testen

Du kannst komplett auf deinem Rechner iterieren, bevor du irgendetwas veröffentlichst.

**Die Integration direkt ausführen (schnellster Zyklus).** Während der Entwicklung führst du deinen Code als einfachen Node.js-Prozess gegen eine laufende Gladys-Instanz aus. Installiere deine Integration im Entwicklermodus in Gladys, um ein Token und einen Selektor zu erhalten, und starte sie dann mit den drei Umgebungsvariablen, die Gladys sonst injizieren würde:

```bash
npm install
GLADYS_HOST_API_URL="http://localhost:1443" \
GLADYS_INTEGRATION_TOKEN="<token>" \
GLADYS_INTEGRATION_SELECTOR="my-integration" \
LOG_LEVEL=debug \
npm start
```

**Baue das Docker-Image**, um das echte, containerisierte Artefakt zu testen:

```bash
docker build -t ghcr.io/yourname/my-integration:1.0.0 .
```

Seit Gladys 4.86 installiert der Entwicklermodus dieses Image **direkt aus deinem lokalen Docker-Daemon**, mit optionalem Manifest und ohne irgendetwas in eine Registry zu pushen: Baue auf dem Rechner, auf dem Gladys läuft, und installiere dann den Tag über den Link „Entwicklermodus: aus einem Docker-Image installieren“ im Katalog. Das ist der schnellste Weg, einen echten Container zu testen.

**Oder baue es mit einem Klick auf GitHub.** Wenn du lieber nicht lokal baust (oder keinen Multi-Architektur-Builder eingerichtet hast), liefert das Template auch einen **Build**-Workflow mit, den du von Hand starten kannst: Öffne den Tab **Actions**, wähle **Build**, klicke auf **Run workflow** und lege optional einen Image-Tag fest (standardmäßig der Name deines Branches). GitHub baut das Multi-Architektur-Image (`linux/amd64` und `linux/arm64`) und pusht es unter diesem Tag nach `ghcr.io`, ohne jemals `:latest` anzutasten. Diesen genauen Tag kannst du dann in deiner Gladys-Instanz installieren, um einen echten Build zu testen – ganz ohne lokales Docker. Das ist ein Test-Build, kein Release: Nutze [Schritt 5](#step-5-publish-your-integration), wenn du bereit bist, für alle zu veröffentlichen.

**Prüfe dein Manifest offline** mit genau den Prüfungen, die der Store-Indexer durchführt, statt auf den stündlichen Zyklus zu warten:

```bash
npx github:GladysAssistant/integration-store .
```

Der Befehl endet mit Status 0, wenn deine `gladys-assistant-integration.json` gültig ist, und gibt andernfalls die Gründe aus.

Sobald die Integration in Gladys installiert ist, beobachte, wie der Status von `LOADING` zu `RUNNING` wechselt, öffne den generierten Tab **Konfiguration**, starte im Tab **Erkennung** einen **Scan**, erstelle ein Gerät und schalte es um, um zu prüfen, ob dein Handler `onSetValue` den Befehl empfängt.

### Die drei Tabs jeder externen Integration

Gladys rendert für jede externe Integration eine generische Oberfläche mit drei Tabs:

- **Geräte**: die vom Nutzer erstellten Geräte mit den Standard-Bedienelementen.
- **Erkennung**: die von deiner Integration veröffentlichten Geräte, jeweils mit einem Button zum Erstellen mit einem Klick.
- **Konfiguration**: das aus deinem `config_schema` generierte Formular, deine Aktionsbuttons, ein dauerhafter Link zu deiner Dokumentation sowie Überwachungsfunktionen (Starten, Stoppen, Neustarten, Aktualisieren, Logs anzeigen, Deinstallieren).

`communication`- und `weather`-Integrationen stellen keine Geräte bereit und erhalten daher nur den Tab „Konfiguration“.

### Container-Umgebung

Gladys injiziert diese Umgebungsvariablen in deinen Container. Das SDK liest sie für dich aus:

- `GLADYS_HOST_API_URL`: die Basis-URL der Host-API.
- `GLADYS_INTEGRATION_TOKEN`: das Bearer-Token zur Authentifizierung.
- `GLADYS_INTEGRATION_SELECTOR`: der eindeutige Selektor deiner Integrationsinstanz.
- `TZ`: die Zeitzone der Gladys-Instanz.

## Schritt 5: Deine Integration veröffentlichen {/* #step-5-publish-your-integration */}

Die Veröffentlichung ist bewusst trivial gehalten. Es gibt **keine Einreichung, kein Review und kein Warten auf einen Maintainer**.

Wenn du mit dem offiziellen Template gestartet bist, wird das gesamte Release von einem GitHub-Actions-Workflow automatisiert:

1. **Füge das GitHub-Topic** `gladys-assistant-integration` zu deinem Repository hinzu (das Zahnrad neben „About“ auf der Startseite des Repositorys). Daran erkennt der Indexer dein Repository.

2. **Starte den Release-Workflow**: Öffne den Tab **Actions**, wähle **Release**, klicke auf **Run workflow** und wähle die Art der Versionserhöhung (`patch`, `minor` oder `major`). Der Workflow dann:
   - erhöht die Version in `package.json` und im Manifest (`version` und `docker_image`),
   - erstellt einen Git-Tag `vX.Y.Z` und pusht ihn,
   - baut **Multi-Architektur**-Images (`linux/amd64` und `linux/arm64`),
   - veröffentlicht sie mit den Tags `:X.Y.Z` und `:latest` auf `ghcr.io` (denk daran, das Paket öffentlich zu machen).

Das war's. Ein automatischer Indexer (eine stündlich laufende GitHub Action) findet jedes öffentliche Repository mit diesem Topic, liest und prüft das Manifest, verifiziert, dass das Docker-Image abrufbar ist, hostet das Titelbild neu und veröffentlicht einen aktualisierten Katalog. Innerhalb einer Stunde **erscheint deine Integration im Store jeder Gladys-Instanz** und lässt sich mit einem Klick installieren.

**Manuell veröffentlichen** (ohne den Workflow des Templates) funktioniert ebenfalls: Baue dein Multi-Architektur-Image selbst und pushe es in eine öffentliche Registry, aktualisiere `version` und `docker_image` im Manifest, dann taggen und pushen:

```bash
docker push ghcr.io/yourname/my-integration:1.0.0
git tag v1.0.0
git push --tags
```

Denk nur daran, `version` und `docker_image` im Manifest zu erhöhen, bevor du taggst, sonst liefert der Indexer weiterhin die alte Version aus.

Der Maintainer gibt nichts frei und ist nie ein Flaschenhals.

## Schritt 6: Nutzer installieren mit einem Klick

Im Gladys-Katalog erscheinen externe Integrationen neben den eingebauten, mit einem **Community-Badge**, den aus deinen `transports` abgeleiteten Lokal-/Cloud-Badges und einer Live-Statusanzeige. Nutzer durchstöbern den Katalog nach Kategorie (deine stammt aus dem Feld `categories` deines Manifests), filtern ihn und sortieren nach den neuesten Einträgen. Ein Nutzer klickt auf **Installieren**, und Gladys lädt dein Image herunter, startet den Container und zeigt die generierte Oberfläche an. Nutzer können auch direkt über die URL eines GitHub-Repositorys installieren, ohne auf den nächsten Indexierungszyklus zu warten.

Vor der Installation zeigt der Bildschirm alles an, was dein Manifest deklariert hat: deine Dokumentation, die Sub-Container, die laufen werden, und die Ports, die sie veröffentlichen, die angeforderte Hardware, die Netzwerkerfassungen, die Wake-on-LAN-Berechtigung, die Webhooks und den Zugriff auf die Hauskoordinaten. Deklariere nur, was du wirklich nutzt – jede Zeile ist eine Frage, die der Nutzer beantworten muss, bevor er deiner Integration vertraut.

## Deine Integration aktualisieren

Eine neue Version auszuliefern ist ein Klick: Starte den Workflow **Release** erneut und wähle die Stufe der Versionserhöhung. Er baut das Multi-Architektur-Image neu, pusht die neuen Tags und aktualisiert das Manifest für dich. Beim nächsten Indexierungszyklus sehen Nutzer, dass ein Update verfügbar ist – mit einem Zähler in der Kopfzeile von Gladys und einer eigenen Update-Ansicht, die jede zu aktualisierende Integration auflistet – und können es mit einem Klick einspielen.

Wenn du manuell veröffentlichst, erledigst du dieselben zwei Dinge von Hand: Baue und pushe einen neuen Image-Tag (zum Beispiel `ghcr.io/yourname/my-integration:1.1.0`), erhöhe dann `version` und `docker_image` im Manifest und pushe.

Einer neuen Gladys-Version zu folgen ist dieselbe kurze Übung: Aktualisiere `@gladysassistant/integration-sdk` (SDK-Releases sind additiv, bestehender Code funktioniert also weiter), deklariere die Manifest-Felder, die die neuen Fähigkeiten benötigen, hebe den `gladys_version`-Bereich entsprechend an, führe `npx github:GladysAssistant/integration-store .` zur Prüfung aus und veröffentliche. Für 4.86 bedeutet das `^0.12.0`, ein Feld `categories` und `">=4.86.0"`.

## Fehlerbehebung

Wenn du deine Integration über ihre Repository-URL (oder im Entwicklermodus) installierst, werden die **detaillierten Validierungsfehler** deines Manifests Feld für Feld angezeigt, sodass du sie beheben kannst, ohne auf den nächsten Indexierungszyklus zu warten.

Der Indexer ist vollständig transparent. Wenn deine Integration nicht im Katalog erscheint, sieh dir die veröffentlichte Datei `rejected.json` an: Sie listet jedes Repository auf, das die Validierung nicht bestanden hat, zusammen mit dem Grund und einem Schweregrad (ungültiges Manifest, fehlerhafte oder nicht abrufbare Image-Referenz, inkompatibler `gladys_version`-Bereich, `categories` mit einem `gladys_version`-Minimum unter 4.86.0 deklariert, zu großes oder falsch dimensioniertes Titelbild, fehlende `docs/en.md` oder `docs/fr.md` usw.). Auch die Warnungen lohnen einen Blick: Ein unbekannter Kategorieschlüssel wird verworfen, und eine Integration, die keine Kategorie deklariert, wird ohne Kategorie indexiert. Die meisten dieser Probleme kannst du vor der Veröffentlichung abfangen, indem du `npx github:GladysAssistant/integration-store .` lokal ausführst. Behebe das Problem, veröffentliche erneut und warte auf den nächsten Zyklus.

## Sicherheitsmodell

Externe Integrationen können ohne Review sicher ausgeführt werden, weil die **Docker-Sandbox die erste Verteidigungslinie** ist:

- Ressourcengrenzen (256 MB Arbeitsspeicher, 0,5 CPU, 100 Prozesse) für den Hauptcontainer,
- ein schreibgeschütztes Root-Dateisystem ohne zusätzliche Capabilities,
- ein isoliertes Bridge-Netzwerk,
- kein direkter Zugriff auf die Geräte des Hosts (Hardware ist nur über explizite, vom Nutzer freigegebene Sub-Container erreichbar).

In v1 gibt es keine Moderation, keine Sperrliste und kein manuelles Entfernen. Vor der Installation sehen Nutzer die GitHub-Sterne des Repositorys, sein Alter und das Community-Badge, und jede Installation zeigt eine deutliche Warnung an.

Diese Sandbox begrenzt Schäden auf Host-Ebene und verhindert, dass eine fehlerhafte Integration den Gladys-Kern destabilisiert. Sie entzieht der Integration aber nicht den Zugriff auf Anwendungsebene, den sie besitzt: Sie hat ihr eigenes Token, Zugriff auf die auf sie beschränkte REST- und WebSocket-API und, in v1, vollen ausgehenden Netzwerkzugriff. Eine bösartige Integration kann also innerhalb der Grenzen dieses Zugriffs handeln – **installiere daher nur Images, denen du vertraust.**

## Fragen?

Du hast Fragen oder möchtest deine Integration vorstellen? Komm und erzähl davon [im Forum](https://community.gladysassistant.com/), die Community hilft dir gerne!
