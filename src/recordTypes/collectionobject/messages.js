import { defineMessages } from 'react-intl';

// FIXME: Plugins shouldn't have to import react-intl, since this unnecessarily increases the size
// when built as a standalone package. Instead, defineMessages should be supplied in the
// pluginContext. But this means that messages won't be extracted by the Babel plugin, since it
// only operates on files that import react-intl.

export default {
  record: defineMessages({
    name: {
      id: 'record.collectionobject.name',
      description: 'The name of the record type.',
      defaultMessage: 'Object',
    },
    collectionName: {
      id: 'record.collectionobject.collectionName',
      description: 'The name of a collection of records of the type.',
      defaultMessage: 'Objects',
    },
  }),
  panel: defineMessages({
    id: {
      id: 'panel.collectionobject.id',
      defaultMessage: 'Object Identification Information',
    },
    detail: {
        id: 'panel.collectionobject.detail',
        defaultMessage: 'Details',
    },
    desc: {
      id: 'panel.collectionobject.desc',
      defaultMessage: 'Object Description Information',
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
    content: {
      id: 'panel.collectionobject.content',
      defaultMessage: 'Content',
    },
    textInscript: {
      id: 'panel.collectionobject.textInscript',
      defaultMessage: 'Textual Inscription',
    },
    nonTextInscript: {
      id: 'panel.collectionobject.nonTextInscript',
      defaultMessage: 'Non-Textual Inscription',
    },
    prod: {
      id: 'panel.collectionobject.prod',
      defaultMessage: 'Object Production Information',
    },
    hist: {
      id: 'panel.collectionobject.hist',
      defaultMessage: 'Object History and Association Information',
    },
    assoc: {
      id: 'panel.collectionobject.assoc',
      defaultMessage: 'Associations',
    },
    owner: {
      id: 'panel.collectionobject.owner',
      defaultMessage: 'Object Owner\'s Contribution Information',
    },
    viewer: {
      id: 'panel.collectionobject.viewer',
      defaultMessage: 'Object Viewer\'s Contribution Information',
    },
    reference: {
      id: 'panel.collectionobject.reference',
      defaultMessage: 'Reference Information',
    },
    notes: {
        id: 'panel.collectionobject.notes',
        defaultMessage: 'Notes',
    },
    collectinfo: {
        id: 'panel.collectionobject.collectinfo',
        defaultMessage: 'Collection Text Information',
    },
    collect: {
      id: 'panel.collectionobject.collect',
      defaultMessage: 'Object Collection Information',
    },
    hierarchy: {
      id: 'panel.collectionobject.hierarchy',
      defaultMessage: 'Hierarchy',
    },
    cataloger: {
        id: 'panel.collectionobject.cataloger',
        defaultMessage: 'Cataloger Information',
    },
  }),
  inputTable: defineMessages({
    age: {
      id: 'inputTable.collectionobject.age',
      defaultMessage: 'Age',
    },
    assocEvent: {
      id: 'inputTable.collectionobject.assocEvent',
      defaultMessage: 'Associated event',
    },
    ownershipExchange: {
      id: 'inputTable.collectionobject.ownershipExchange',
      defaultMessage: 'Ownership exchange',
    },
  }),
};
