export default configContext => (data) => {
  const {
    getPart,
  } = configContext.recordDataHelpers;

  if (!data) {
    return '';
  }

  const commonData = getPart(data, 'media_common');
  const title = commonData ? commonData.get('title') : null;

  const bampfaData = getPart(data, 'media_bampfa');
  const imageNumber = bampfaData ? bampfaData.get('imageNumber') : null;

  return [imageNumber, title].filter(part => !!part).join(' – ');
};
