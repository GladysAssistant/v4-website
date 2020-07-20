import philipsHue from "./philips-hue.json";
import sonoff from "./sonoff.json";
import zwave from "./zwave.json";
import xiaomi from "./xiaomi.json";

const integrations = philipsHue.concat(sonoff).concat(zwave).concat(xiaomi);

export default integrations;
