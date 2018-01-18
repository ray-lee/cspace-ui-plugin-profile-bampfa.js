export const computeEffectiveObjectNumber = (recordData) => {
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

export const computeObjectNumber = (recordData) => {
  const prefix = recordData.getIn(['document', 'ns2:collectionobjects_bampfa', 'accNumberPrefix']);
  const partOne = recordData.getIn(['document', 'ns2:collectionobjects_bampfa', 'accNumberPart1']);
  const partTwo = recordData.getIn(['document', 'ns2:collectionobjects_bampfa', 'accNumberPart2']);
  const partThree = recordData.getIn(['document', 'ns2:collectionobjects_bampfa', 'accNumberPart3']);
  const partFour = recordData.getIn(['document', 'ns2:collectionobjects_bampfa', 'accNumberPart4']);
  const partFive = recordData.getIn(['document', 'ns2:collectionobjects_bampfa', 'accNumberPart5']);
  return [prefix, partOne, partTwo, partThree, partFour, partFive].filter(part => !!part).join('.');
};

export const zeroPad = (str, len) => {
  if (str.length >= len) {
    return (str);
  }

  return (new Array(len + 1).join('0') + str).slice(-len);
};
