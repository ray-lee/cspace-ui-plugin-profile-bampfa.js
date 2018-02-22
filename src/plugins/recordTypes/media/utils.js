export const computeMediaOrderNumber = ({ recordData }) => {
  const bampfaData = recordData.getIn(['document', 'ns2:media_bampfa']);

  const primaryDisplay = bampfaData.get('primaryDisplay');
  const imageNumber = bampfaData.get('imageNumber');

  if (!imageNumber) {
    return null;
  }

  const paddedImageNumber = imageNumber.padStart(5, '0');

  return (primaryDisplay ? paddedImageNumber : `alt ${paddedImageNumber}`);
};

export const computeMediaTitle = ({ subrecordData }) => {
  const blobData = subrecordData.get('blob');

  if (blobData) {
    const fileList = blobData.getIn(['document', 'ns2:blobs_common', 'file']);

    if (fileList && fileList.length > 0) {
      return fileList[0].name;
    }

    return null;
  }

  return undefined;
};
