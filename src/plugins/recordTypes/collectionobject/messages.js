import { defineMessages } from 'react-intl';

// FIXME: Plugins shouldn't have to import react-intl, since this unnecessarily increases the size
// when built as a standalone package. Instead, defineMessages should be supplied in the
// pluginContext. But this means that messages won't be extracted by the Babel plugin, since it
// only operates on files that import react-intl.

export default {
  panel: defineMessages({
    detail: {
      id: 'panel.collectionobject.detail',
      defaultMessage: 'Detail',
    },
    acquisition: {
      id: 'panel.collectionobject.acquisition',
      defaultMessage: 'Item-Specific Acquisition Information',
    },
    classification: {
      id: 'panel.collectionobject.classification',
      defaultMessage: 'Classification Information',
    },
    copyright: {
      id: 'panel.collectionobject.copyright',
      defaultMessage: 'Copyright Information',
    },
    condition: {
      id: 'panel.collectionobject.condition',
      defaultMessage: 'Condition/Conservation Information',
    },
    notes: {
      id: 'panel.collectionobject.notes',
      defaultMessage: 'Notes',
    },
    collectionText: {
      id: 'panel.collectionobject.collectionText',
      defaultMessage: 'Collection Text Information',
    },
    cataloger: {
      id: 'panel.collectionobject.cataloger',
      defaultMessage: 'Cataloger Information',
    },
  }),
  inputTable: defineMessages({
    initialValueGroup: {
      id: 'inputTable.collectionobject.initialValueGroup',
      defaultMessage: 'Initial value',
    },
    idNumberInfo: {
      id: 'inputTable.collectionobject.idNumberInfo',
      defaultMessage: 'ID number information',
    },
  }),
};
