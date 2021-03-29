import philipsHue from "./philips-hue.json";
import sonoff from "./sonoff.json";
import zwave from "./zwave.json";
import xiaomi from "./xiaomi.json";
import camera from "./camera.json";
import tpLink from "./tp-link.json";
import yeelight from "./yeelight.json";

const integrations = camera
  .concat(sonoff)
  .concat(zwave)
  .concat(xiaomi)
  .concat(philipsHue)
  .concat(tpLink)
  .concat(yeelight);

export default integrations;
