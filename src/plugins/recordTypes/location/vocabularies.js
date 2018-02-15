import { defineMessages } from 'react-intl';

export default {
  crate: {
    messages: defineMessages({
      name: {
        id: 'vocab.location.crate.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Crate',
      },
      collectionName: {
        id: 'vocab.location.crate.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Crates',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(crate)',
    },
  },
};
