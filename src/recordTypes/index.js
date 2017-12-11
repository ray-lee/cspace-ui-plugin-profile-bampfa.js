import group from './group';
import intake from './intake';
import movement from './movement';
import collectionobject from './collectionobject';
import conditioncheck from './conditioncheck';
import media from './media';
import person from './person';
import organization from './organization';

export default pluginContext => ({
  group: group(pluginContext),
  intake: intake(pluginContext),
  collectionobject: collectionobject(pluginContext),
  movement: movement(pluginContext),
  conditioncheck: conditioncheck(pluginContext),
  media: media(pluginContext),
  person: person(pluginContext),
  organization: organization(pluginContext),
});
