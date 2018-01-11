import merge from 'lodash/merge';
import citation from './citation';
import collectionobject from './collectionobject';
import concept from './concept';
import conditioncheck from './conditioncheck';
import group from './group';
import intake from './intake';
import location from './location';
import media from './media';
import movement from './movement';
import organization from './organization';
import person from './person';
import place from './place';
import work from './work';

export default pluginContext => [
  citation,
  collectionobject,
  concept,
  conditioncheck,
  group,
  intake,
  location,
  media,
  movement,
  organization,
  person,
  place,
  work,
]
.map(configurer => configurer(pluginContext))
.reduce(merge, {
  recordTypes: {
    acquisition: {
      disabled: true,
    },
    claim: {
      disabled: true,
    },
    conservation: {
      disabled: true,
    },
    exhibition: {
      disabled: true,
    },
    objectexit: {
      disabled: true,
    },
  },
});
