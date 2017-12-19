import { defineMessages } from 'react-intl';
import forms from './forms';

export default pluginContext => ({
  recordTypes: {
    location: {
      forms: forms(pluginContext),
      vocabularies: {
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
              defaultMessage: 'Crate Storage Locations',
            },
          }),
          serviceConfig: {
            servicePath: 'urn:cspace:name(crate)',
          },
        },
      },
    },
  },
});
