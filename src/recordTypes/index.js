import group from './group';
import intake from './intake';
import movement from './movement';
import collectionobject from './collectionobject';
import conditioncheck from './conditioncheck';
import media from './media';

export default pluginContext => ({
  group: group(pluginContext),
  intake: intake(pluginContext),
  collectionobject: collectionobject(pluginContext),
  movement: movement(pluginContext),
  conditioncheck: conditioncheck(pluginContext),
  media: media(pluginContext),
});
