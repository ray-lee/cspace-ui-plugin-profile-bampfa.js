export const getPrimaryNationality = (recordData) => {
  const nationalities = recordData.getIn(
    ['document', 'ns2:persons_common', 'nationalities', 'nationality']);

  return (nationalities ? nationalities.first() : null);
};

export const computePersonNames = ({ data, recordData }) => {
  const title = (data.get('title') || '').trim();
  const foreName = (data.get('foreName') || '').trim();
  const middleName = (data.get('middleName') || '').trim();
  const surName = (data.get('surName') || '').trim();
  const nameAdditions = (data.get('nameAdditions') || '').trim();

  const displayName = (data.get('termDisplayName') || '').trim();

  const nationality = getPrimaryNationality(recordData) || '';

  // Calculate first-middle-last name.

  const namePartsFML = (surName.toLowerCase() === 'unknown')
    ? [surName, nationality && `(${nationality})`]
    : [title, foreName, middleName, surName, nameAdditions];

  // Calculate last-first-middle name.

  let namePartsLFM;

  if (surName.toLowerCase() === 'unknown') {
    namePartsLFM = [surName, nationality && `(${nationality})`];
  } else if (!foreName && !surName) {
    // The calculation function from FileMaker outputs "??" if both first name and last name are
    // empty. As a simplification, I'm making the output empty in this case. See BAMPFA-205 and
    // BAMPFA-238 for details.

    // namePartsLFM = ['??'];

    namePartsLFM = [];
  } else if (!surName) {
    namePartsLFM = [foreName];
  } else if (!foreName) {
    namePartsLFM = [surName];
  } else if (!middleName) {
    namePartsLFM = [
      nationality.toLowerCase().includes('china') ? surName : `${surName},`,
      nameAdditions ? `${foreName},` : foreName,
      nameAdditions,
    ];
  } else {
    namePartsLFM = [
      nationality.toLowerCase().includes('china') ? surName : `${surName},`,
      foreName,
      nameAdditions ? `${middleName},` : middleName,
      nameAdditions,
    ];
  }

  // When the persons record is made from within another record, the LMF fields won't
  // have any values filled in. This causes the displayName to be overwritten on save. Since
  // this field is required, it becomes impossible to save the record. Skip the
  // replacing if there is a display name already there.
  let finalNameLFM = namePartsLFM.filter(part => !!part).join(' ');

  finalNameLFM = (finalNameLFM === '' && displayName !== '') ? displayName : finalNameLFM;

  return data
    .set('termDisplayName', finalNameLFM)
    .set('termName', namePartsFML.filter(part => !!part).join(' '));
};
