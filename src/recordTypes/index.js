import group from './group';
import intake from './intake';
import valuation from './valuation';

import collectionobject from './collectionobject';

export default pluginContext => ({
  group: group(pluginContext),
  intake: intake(pluginContext),
  collectionobject: collectionobject(pluginContext),
  valuation: valuation(pluginContext),
});
