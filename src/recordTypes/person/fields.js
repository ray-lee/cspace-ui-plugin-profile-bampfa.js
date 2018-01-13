import { defineMessages } from 'react-intl';

export default (pluginContext) => {
  const {
    OptionPickerInput,
    TextInput,
  } = pluginContext.inputComponents;

  const {
    Immutable,
  } = pluginContext.lib;

  const {
    configKey: config,
  } = pluginContext.configHelpers;

  return {
    document: {
      'ns2:persons_common': {
        personTermGroupList: {
          personTermGroup: {
            [config]: {
              compute: (data, path, recordData) => {
                let foreName = data.get('foreName');
                let middleName = data.get('middleName');
                let surName = data.get('surName');
                const nameAdditions = data.get('nameAdditions');
                const nationalities = recordData.getIn(['document', 'ns2:persons_common', 'nationalities', 'nationality']);
                const title = data.get('title');

                let nationality = '';

                const namePartsFML = [];
                const namePartsLMF = [];

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

                return Immutable.Map({
                  termDisplayName: nameLMFName,
                  termName: nameFMLName,
                });
              },
            },
          },
        },
      },
      'ns2:persons_bampfa': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/person/local/bampfa',
          },
        },
        birthCity: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_bampfa.birthcity.name',
                defaultMessage: 'Birth City',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        otherRegionalInfo: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_bampfa.otherRegionalInfo.name',
                defaultMessage: 'Other Regional Info',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        dynastyPeriod: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_persons.dynastyPeriod.name',
                defaultMessage: 'Dynasty/Period',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        datesActive: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_bampfa.datesActive.name',
                defaultMessage: 'Dates Active',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        nameNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_bampfa.nameNote.name',
                defaultMessage: 'Name note',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        copyrightCredit: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_bampfa.copyrightCredit.name',
                defaultMessage: 'Copyright Credit',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        copyrightNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_bampfa.copyrightNote.name',
                defaultMessage: 'Copyright Note',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        copyrightHolder: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_bampfa.copyrightHolder.name',
                defaultMessage: 'Copyright Holder',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        permissionToReproduce: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_bampfa.permissionToReproduce.name',
                defaultMessage: 'Permission to reproduce granted for noncommercial uses',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'permissionToReproduce',
              },
            },
          },
        },
      },
    },
  };
};
