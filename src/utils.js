export const computeMediaOrderNumber = ({ recordData }) => {
  const part = recordData.getIn(['document', 'ns2:media_bampfa']);
  const primaryDisplay = part.get('primaryDisplay');
  const imageNumber = part.get('imageNumber');

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

export const computePersonNames = ({ data, recordData }) => {
  const namePartsFML = [];
  const namePartsLMF = [];
  const nameAdditions = data.get('nameAdditions');
  const nationalities = recordData.getIn(['document', 'ns2:persons_common', 'nationalities', 'nationality']);
  const title = data.get('title');
  let nationality = '';
  let foreName = data.get('foreName');
  let middleName = data.get('middleName');
  let surName = data.get('surName');

  /* Calculate First-Middle-Last Name */
  if (nationalities && nationalities.size > 0) {
    for (const candidateNationality of nationalities) {
      if (candidateNationality !== '' && candidateNationality !== undefined) {
        nationality = candidateNationality;
        break;
      }
    }
  }
  if (surName && surName.toLowerCase() === 'unknown') {
    namePartsFML.push(surName);
    if (nationality) {
      namePartsFML.push(`(${nationality})`);
    }
  } else {
    if (title) {
      namePartsFML.push(title);
    }
    if (foreName) {
      namePartsFML.push(foreName);
    }
    if (middleName) {
      namePartsFML.push(middleName);
    }
    if (surName) {
      namePartsFML.push(surName);
    }
    if (nameAdditions) {
      namePartsFML.push(nameAdditions);
    }
  }
  /* Calculate Last-middleName-First Name */
  if (surName && surName.toLowerCase() === 'unknown') {
    namePartsLMF.push(surName);
    if (nationality) {
      namePartsLMF.push(`(${nationality})`);
    }
  } else if (!surName) {
    namePartsLMF.push(foreName);
  } else if (!foreName) {
    namePartsLMF.push(surName);
  } else if (!middleName) {
    if (nationality && nationality.toLowerCase().indexOf('china') < 0) {
      surName = `${surName},`;
    }
    namePartsLMF.push(surName);

    if (nameAdditions) {
      foreName = `${foreName},`;
    }
    namePartsLMF.push(foreName);

    if (nameAdditions) {
      namePartsLMF.push(nameAdditions);
    }
  } else {
    if (nationality && nationality.toLowerCase().indexOf('china') < 0) {
      surName = `${surName},`;
    }
    namePartsLMF.push(surName);
    namePartsLMF.push(foreName);

    if (nameAdditions) {
      middleName = `${middleName},`;
    }

    namePartsLMF.push(middleName);

    if (nameAdditions) {
      namePartsLMF.push(nameAdditions);
    }
  }
  const nameLMFName = namePartsLMF.join(' ');
  const nameFMLName = namePartsFML.join(' ');

  return data.set('termDisplayName', nameLMFName).set('termName', nameFMLName);
};
