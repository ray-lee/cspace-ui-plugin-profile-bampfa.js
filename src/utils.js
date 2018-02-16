export const computeEffectiveObjectNumber = ({ recordData }) => {
  const prefix = recordData.getIn(['document', 'ns2:collectionobjects_bampfa', 'accNumberPrefix']);
  const partOne = recordData.getIn(['document', 'ns2:collectionobjects_bampfa', 'accNumberPart1']);
  const partTwo = recordData.getIn(['document', 'ns2:collectionobjects_bampfa', 'accNumberPart2']);
  const partThree = recordData.getIn(['document', 'ns2:collectionobjects_bampfa', 'accNumberPart3']);
  const partFour = recordData.getIn(['document', 'ns2:collectionobjects_bampfa', 'accNumberPart4']);
  const partFive = recordData.getIn(['document', 'ns2:collectionobjects_bampfa', 'accNumberPart5']);
  let otherNumber = recordData.getIn(['document', 'ns2:collectionobjects_bampfa', 'otherNumberList', 'otherNumberGroup']);

  if (otherNumber) {
    otherNumber = otherNumber.toArray();
  } else {
    otherNumber = [];
  }
  const objectNumber = [prefix, partOne, partTwo, partThree, partFour, partFive].filter(part => !!part).join('.');
  // The effective object number is the objectNumber, if it exists. Otherwise,
  // fall back to the primary otherNumber.
  let effectiveObjectNumber = objectNumber;

  if (!effectiveObjectNumber) {
    let fallbackNumber = null;

    if (otherNumber.length > 0) {
      for (let i = 0; i < otherNumber.length; i += 1) {
        const candidateNumber = otherNumber[i];

        if (candidateNumber) {
          fallbackNumber = candidateNumber.get('numberValue');
          break;
        }
      }
    }
    effectiveObjectNumber = fallbackNumber;
  }
  return effectiveObjectNumber;
};

export const computeObjectNumber = ({ recordData }) => {
  const prefix = recordData.getIn(['document', 'ns2:collectionobjects_bampfa', 'accNumberPrefix']);
  const partOne = recordData.getIn(['document', 'ns2:collectionobjects_bampfa', 'accNumberPart1']);
  const partTwo = recordData.getIn(['document', 'ns2:collectionobjects_bampfa', 'accNumberPart2']);
  const partThree = recordData.getIn(['document', 'ns2:collectionobjects_bampfa', 'accNumberPart3']);
  const partFour = recordData.getIn(['document', 'ns2:collectionobjects_bampfa', 'accNumberPart4']);
  const partFive = recordData.getIn(['document', 'ns2:collectionobjects_bampfa', 'accNumberPart5']);
  return [prefix, partOne, partTwo, partThree, partFour, partFive].filter(part => !!part).join('.');
};

export const computeSortableObjectNumber = ({ recordData }) => {
  const parts = computeObjectNumber({ recordData }).split('.');

  const sortableParts = [];
  const isNumericRegExp = /^\d+$/;

  for (let i = 0; i < parts.length; i += 1) {
    let part = parts[i];

    if (isNumericRegExp.test(part)) {
      const len = part.length;
      part = (new Array(len + 1).join('0') + part).slice(-len);
    } else {
      part = part.toLowerCase();
    }
    sortableParts.push(part);
  }
  return sortableParts.join(' ');
};

export const computeSortableEffectiveObjectNumber = ({ recordData }) => {
  const effectiveObjectNumberParts = computeEffectiveObjectNumber({ recordData }).split('.');
  const sortableParts = [];
  const isNumericRegExp = /^\d+$/;

  for (let i = 0; i < effectiveObjectNumberParts.length; i += 1) {
    let part = effectiveObjectNumberParts[i];

    if (isNumericRegExp.test(part)) {
      const len = part.length;
      part = (new Array(len + 1).join('0') + part).slice(-len);
    } else {
      part = part.toLowerCase();
    }
    sortableParts.push(part);
  }
  return sortableParts.join(' ');
};

export const computePlainTextTitle = ({ recordData }) => {
  const titles = recordData.getIn(['document', 'ns2:collectionobjects_bampfa', 'bampfaTitleGroupList', 'bampfaTitleGroup']);
  const titleList = [];
  for (const title of titles) {
    if (title !== undefined) {
      if (title.getIn(['bampfaFormattedTitle']) !== '') {
        titleList.push(title.getIn(['bampfaFormattedTitle']));
      }
    }
  }
  return titleList.join('\n');
};

export const zeroPad = (str, len) => {
  if (str.length >= len) {
    return (str);
  }

  return (new Array(len + 1).join('0') + str).slice(-len);
};

export const computeDimensionSummary = ({ path, recordData }) => {
  const measurements = {};
  const pathCopy = Object.assign([], path);
  /* Perform a series of pops and pushes to a path to get the correct values */
  pathCopy.pop();
  pathCopy.push('measuredPart');
  const measuredPart = recordData.getIn(pathCopy);
  pathCopy.pop();
  const dimensionSubGroup = recordData.getIn(pathCopy);
  pathCopy.push('measuredPartNote');
  const measuredPartNote = recordData.getIn(pathCopy);


  // Collect the necessary measurements for the summary.

  // Measurements with units other than inches and centimeters are excluded.

  // Measurements with empty values are excluded.

  // A dimension could be measured more than once.
  // If this happens, the first (top-most) measurement
  // of that dimension is used. All others are excluded.

  for (let i = 0; i < dimensionSubGroup.length; i += 1) {
    const measurement = dimensionSubGroup[i];
    const dimension = measurement.dimension;
    const val = measurement.value;
    const unt = measurement.measurementUnit;

    if ((unt === 'in' || unt === 'cm.') && val != null && val !== '' && !(dimension in measurements)) {
      measurements[dimension] = {
        value: val,
        unit: unt,
      };
    }
  }

  // Order the collected measurements by dimension, and drop measurements of
  // dimensions that are not used in the summary.

  const orderedDimensions = ['height', 'width', 'depth', 'diameter'];
  const orderedMeasurements = [];
  const usedUnits = {};

  for (let i = 0; i < orderedDimensions.length; i += 1) {
    const dimension = orderedDimensions[i];

    if (dimension in measurements) {
      const measurement = measurements[dimension];

      orderedMeasurements.push(measurement);
      usedUnits[measurement.unit] = true;
    }
  }

  // Create descriptions of each measurement. If all measurements share
  // a common unit, this is just the value of the measurement. Otherwise,
  // it's the value and the unit.

  const orderedMeasurementDescriptions = [];
  const hasCommonUnit = (Object.keys(usedUnits).length === 1);

  for (let i = 0; i < orderedMeasurements.length; i += 1) {
    const measurement = orderedMeasurements[i];
    let measurementDescription = measurement.value;

    if (!hasCommonUnit) {
      measurementDescription = `${measurementDescription} ${measurement.unit}`;
    }

    orderedMeasurementDescriptions.push(measurementDescription);
  }

  // Join all measurement descriptions with x
  let measurementSummary = orderedMeasurementDescriptions.join(' x ');

  // If there is a common unit, append it
  if (hasCommonUnit) {
    const commonUnit = (Object.keys(usedUnits))[0];
    measurementSummary = `${measurementSummary} ${commonUnit}`;
  }

  // Compose this with the measured part and the measured part note

  const summaryParts = [];

  if (measuredPart && measuredPart !== '') {
    summaryParts.push(`${measuredPart}:`);
  }

  if (measurementSummary !== '') {
    summaryParts.push(measurementSummary);
  }

  if (measuredPartNote && measuredPartNote !== '') {
    summaryParts.push(`(${measuredPartNote})`);
  }

  const joinedParts = summaryParts.join(' ');
  return joinedParts;
};

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
