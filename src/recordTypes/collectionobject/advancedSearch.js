export default (pluginContext) => {
  const {
    OP_OR,
    OP_EQ,
    OP_CONTAIN,
    OP_RANGE,
  } = pluginContext.searchOperators;

  return {
    op: OP_OR,
    value: [
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/objectNumber',
      },
      {
        op: OP_RANGE,
        path: 'ns2:collectionobjects_bampfa/sortableObjectNumber',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_bampfa/legalStatus',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_bampfa/itemClass',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_bampfa/legalStatus',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_bampfa/bampfaObjectProductionPersonGroupList/bampfaObjectProductionPersonGroup/bampfaObjectProductionPerson',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_bampfa/bampfaTitleGroupList/bampfaTitleGroup/bampfaTitle',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_bampfa/seriesTitle',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/physicalDescription',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_bampfa/otherNumberList/otherNumberGroup/numberValue',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_bampfa/creditLine',
      },
      // {
      //   op: OP_EQ,
      //   path: 'ns2:collectionobjects_bampfa/computedCurrentLocationSearch',
      // },
      {
        op: OP_RANGE, // productionDate
        path: 'ns2:collectionobjects_common/objectProductionDateGroupList/objectProductionDateGroup',
      },
      // {
      //   op: OP_CONTAIN, //currentBoxContainer
      //   path: 'ns2:collectionobjects_bampfa/computedCrate',
      // },
      // { // Might be wrong one cos $prodOrg
      //   op: OP_CONTAIN,
      //   path: 'ns2:collectionobjects_common/objectProductionPeopleGroupList/objectProductionPeopleGroup/objectProductionPeople',
      // },
      {
        op: OP_CONTAIN, // prodPlace
        path: 'ns2:collectionobjects_common/objectProductionPlaceGroupList/objectProductionPlaceGroup/objectProductionPlace',
      },
      {
        op: OP_CONTAIN, // stateGen
        path: 'ns2:collectionobjects_bampfa/stateGeneration',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/editionNumber',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_bampfa/bwOrColor',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_bampfa/soundOrSilent',
      },
      {
        op: OP_RANGE,
        path: 'ns2:collectionobjects_bampfa/acquisitionDateGroup',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_bampfa/acquisitionMethod',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_bampfa/bampfaAcquisitionReason',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_bampfa/acquisitionSource',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_bampfa/subjectTheme',
      },
      {
        op: OP_EQ, // KEEP
        path: 'ns2:collectionobjects_common/collection',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_bampfa/partOf',
      },
      {
        op: OP_CONTAIN, // KEEP
        path: 'ns2:collectionobjects_common/styles/style',
      },
      /* eslint-disable max-len */
      // { // ADD
      //   op: OP_RANGE,
      //   path: 'ns2:collectionobjects_common/objectProductionDateGroupList/objectProductionDateGroup',
      // },
      /* eslint-enable max-len */
      {
        op: OP_CONTAIN, // KEEP
        path: 'ns2:collectionobjects_common/objectProductionPeopleGroupList/objectProductionPeopleGroup/objectProductionPeople',
      },
      {
        op: OP_EQ, // KEEP
        path: 'ns2:collectionobjects_common/objectProductionPersonGroupList/objectProductionPersonGroup/objectProductionPerson',
      },
      { // KEEP
        op: OP_CONTAIN, // KEEP
        path: 'ns2:collectionspace_core/updatedBy',
      },
      { // KEEP
        op: OP_RANGE, // KEEP
        path: 'ns2:collectionspace_core/updatedAt',
      },
    ],
  };
};
