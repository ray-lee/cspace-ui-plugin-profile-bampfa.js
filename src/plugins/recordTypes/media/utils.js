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
  const blobCommonData = subrecordData.getIn(['blob', 'document', 'ns2:blobs_common']);

  if (blobCommonData) {
    const name = blobCommonData.get('name');

    if (name) {
      return name;
    }

    const fileList = blobCommonData.get('file');

    if (fileList && fileList.length > 0) {
      return fileList[0].name;
    }
  }

  return null;
};
