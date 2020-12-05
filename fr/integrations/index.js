import philipsHue from "./philips-hue.json";
import tasmota from "./tasmota.json";
import zwave from "./zwave.json";
import xiaomi from "./xiaomi.json";
import camera from "./camera.json";
import ewelink from "./ewelink.json";

const integrations = camera
  .concat(tasmota)
  .concat(zwave)
  .concat(xiaomi)
  .concat(philipsHue)
  .concat(ewelink);

export default integrations;
