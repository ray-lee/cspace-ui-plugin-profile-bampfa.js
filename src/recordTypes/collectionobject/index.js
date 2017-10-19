import forms from './forms';
import fields from './fields';
// import messages from './messages'
import { defineMessages } from 'react-intl';

export default (pluginContext) => ({
  // messages,
  forms: forms(pluginContext),
  fields: fields(pluginContext),
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
  }
});