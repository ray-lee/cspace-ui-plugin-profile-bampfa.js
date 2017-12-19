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
import citation from './citation';

export default pluginContext => [
  group(pluginContext),
  intake(pluginContext),
  collectionobject(pluginContext),
  movement(pluginContext),
  conditioncheck(pluginContext),
  media(pluginContext),
  person(pluginContext),
  organization(pluginContext),
  location(pluginContext),
  work(pluginContext),
  place(pluginContext),
  concept(pluginContext),
  citation(pluginContext),
];
