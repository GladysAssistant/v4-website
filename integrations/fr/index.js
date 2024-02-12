import broadlink from "./broadlink.json";
import camera from "./camera.json";
import netatmo from "./netatmo.json";
import philipsHue from "./philips-hue.json";
import sonoff from "./sonoff.json";
import sonos from "./sonos.json";
import tpLink from "./tp-link.json";
import xiaomi from "./xiaomi.json";
import zigbee2mqtt from "./zigbee2mqtt.json";
import zwave from "./zwave.json";

const integrations = zigbee2mqtt
  .concat(broadlink)
  .concat(camera)
  .concat(netatmo)
  .concat(philipsHue)
  .concat(sonoff)
  .concat(sonos)
  .concat(xiaomi)
  .concat(tpLink);
// .concat(zwave);

export default integrations;
