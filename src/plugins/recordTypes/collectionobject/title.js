export default pluginContext => (data) => {
  const {
    deepGet,
    getPart,
  } = pluginContext.recordDataHelpers;

  const {
    getDisplayName,
  } = pluginContext.refNameHelpers;

  if (!data) {
    return '';
  }

  const commonData = getPart(data, 'collectionobjects_common');
  const bampfaData = getPart(data, 'collectionobjects_bampfa');

  const titleParts = [];

  if (commonData) {
    titleParts.push(commonData.get('objectNumber'));
  }

  if (bampfaData) {
    titleParts.push(
      deepGet(
        bampfaData,
        ['bampfaTitleGroupList', 'bampfaTitleGroup', 0, 'bampfaTitle']
      )
    );
  }

  if (commonData) {
    titleParts.push(
      deepGet(
        commonData,
        ['objectProductionDateGroupList', 'objectProductionDateGroup', 0, 'dateDisplayDate']
      )
    );
  }

  if (bampfaData) {
    titleParts.push(
      getDisplayName(
        deepGet(
          bampfaData,
          [
            'bampfaObjectProductionPersonGroupList',
            'bampfaObjectProductionPersonGroup',
            0,
            'bampfaObjectProductionPerson',
          ]
        )
      )
    );
  }

  return titleParts.filter(part => !!part).join(' – ');
};
