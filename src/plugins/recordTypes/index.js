import collectionobject from './collectionobject';
import group from './group';
import intake from './intake';
import location from './location';
import media from './media';
import movement from './movement';
import organization from './organization';
import person from './person';

export default [
  collectionobject,
  group,
  intake,
  location,
  media,
  movement,
  organization,
  person,
  () => ({
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
  }),
];
