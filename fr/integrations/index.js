import philipsHue from "./philips-hue.json";
import sonoff from "./sonoff.json";
import zwave from "./zwave.json";

const integrations = philipsHue.concat(sonoff).concat(zwave);

export default integrations;
