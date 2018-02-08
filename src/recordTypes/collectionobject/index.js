import { defineMessages } from 'react-intl';
import forms from './forms';
import fields from './fields';
import optionLists from './optionLists';
import advancedSearch from './advancedSearch';

export default pluginContext => ({
  optionLists,
  recordTypes: {
    collectionobject: {
      forms: forms(pluginContext),
      fields: fields(pluginContext),
      advancedSearch: advancedSearch(pluginContext),
      messages: {
        panel: defineMessages({
          detail: {
            id: 'panel.collectionobject.detail',
            defaultMessage: 'Detail',
          },
          acq: {
            id: 'panel.collectionobject.acq',
            defaultMessage: 'Item-Specific Acquisition Information',
          },
          classification: {
            id: 'panel.collectionobject.classification',
            defaultMessage: 'Classification',
          },
          copyright: {
            id: 'panel.collectionobject.copyright',
            defaultMessage: 'Copyright Information',
          },
          condition: {
            id: 'panel.collectionobject.condition',
            defaultMessage: 'Condition/Conservation',
          },
          notes: {
            id: 'panel.collectionobject.notes',
            defaultMessage: 'Notes',
          },
          collectinfo: {
            id: 'panel.collectionobject.collectinfo',
            defaultMessage: 'Collection Text Information',
          },
          cataloger: {
            id: 'panel.collectionobject.cataloger',
            defaultMessage: 'Cataloger Information',
          },
        }),
      },
    },
  },
});
