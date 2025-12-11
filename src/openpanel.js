import { OpenPanel } from "@openpanel/web";
import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

let op = null;

if (ExecutionEnvironment.canUseDOM) {
  op = new OpenPanel({
    clientId: "c9783239-6b00-4ca3-9c7e-ec89258422be",
    apiUrl: "https://abcdefg.gladysassistant.com/api",
    trackScreenViews: true,
    trackOutgoingLinks: true,
    trackAttributes: true,
  });

  // Make it globally available if needed
  window.op = op;

  console.log("OpenPanel initialized:", op);
}
