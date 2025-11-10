import { OpenPanel } from '@openpanel/sdk';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

if (ExecutionEnvironment.canUseDOM) {
  const op = new OpenPanel({
    clientId: 'c9783239-6b00-4ca3-9c7e-ec89258422be',
    apiUrl: 'https://abcdefg.gladysassistant.com/api',
    trackScreenViews: true,
    trackOutgoingLinks: true,
    trackAttributes: true,
  });

  // Make it globally available if needed
  window.op = op;
}
