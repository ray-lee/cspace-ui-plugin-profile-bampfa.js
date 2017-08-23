import group from './group';
import intake from './intake';
import collectionobject from './collectionobject';

export default pluginContext => ({
  group: group(pluginContext),
  intake: intake(pluginContext),
  collectionobject: collectionobject(pluginContext),
});
