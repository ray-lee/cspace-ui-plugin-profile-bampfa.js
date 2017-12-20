import { defineMessages } from 'react-intl';

export default {
  collective: {
    messages: defineMessages({
      name: {
        id: 'vocab.organization.collective.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Artists Collective',
      },
      collectionName: {
        id: 'vocab.organization.collective.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Artists Collectives',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(collective)',
    },
    sortOrder: 2,
  },
};
