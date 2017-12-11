import group from './group';
import intake from './intake';
import movement from './movement';
import collectionobject from './collectionobject';
import conditioncheck from './conditioncheck';
import media from './media';
import person from './person';
import organization from './organization';
import location from './location';
import work from './work';
import place from './place';
import concept from './concept';

export default pluginContext => ({
  group: group(pluginContext),
  intake: intake(pluginContext),
  collectionobject: collectionobject(pluginContext),
  movement: movement(pluginContext),
  conditioncheck: conditioncheck(pluginContext),
  media: media(pluginContext),
  person: person(pluginContext),
  organization: organization(pluginContext),
  location: location(pluginContext),
  work: work(pluginContext),
  place: place(pluginContext),
  concept: concept(pluginContext),
});
