export default (configContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
    OP_RANGE,
  } = configContext.searchOperators;

  const {
    defaultAdvancedSearchBooleanOp,
    extensions,
  } = configContext.config;

  return {
    op: defaultAdvancedSearchBooleanOp,
    value: [
      {
        op: OP_RANGE,
        path: 'ns2:collectionobjects_bampfa/sortableObjectNumber',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/otherNumberList/otherNumber/numberValue',
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
        path: 'ns2:collectionobjects_bampfa/acquisitionSources/acquisitionSource',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_bampfa/acquisitionMethod',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_bampfa/itemClass',
      },
      // nationality here
      {
        op: OP_RANGE,
        path: 'ns2:collectionobjects_common/objectProductionDateGroupList/objectProductionDateGroup',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_bampfa/creditLine',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/computedCurrentLocation',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_bampfa/legalStatus',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/physicalDescription', // make it multiline
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_bampfa/seriesTitle',
      },
      {
        op: OP_RANGE,
        path: 'ns2:collectionobjects_bampfa/acquisitionDateGroupList/acquisitionDateGroup',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_bampfa/bwOrColor',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_bampfa/bampfaCollectionList/bampfaCollection',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_bampfa/computedCrate',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/editionNumber',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_bampfa/bampfaAcquisitionReasonList/bampfaAcquisitionReason',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_bampfa/partOf',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/styles/style',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_bampfa/permissionToReproduce',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/objectProductionPlaceGroupList/objectProductionPlaceGroup/objectProductionPlace',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/objectProductionPeopleGroupList/objectProductionPeopleGroup/objectProductionPeople',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_bampfa/soundOrSilent',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_bampfa/stateGeneration',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_bampfa/subjectThemes/subjectTheme',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
