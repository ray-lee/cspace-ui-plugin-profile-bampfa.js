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
              compute: (data) => {
                const forename = data.get('foreName');
                const middle = data.get('middleName');
                const surname = data.get('surName');
                const additions = data.get('nameAdditions');

                const termDisplayName = [surname, forename, middle, additions].filter(part => !!part).join(', ');
                const termName = [forename, middle, surname, additions].filter(part => !!part).join(' ');

                return Immutable.Map({
                  termDisplayName,
                  termName,
                });
                // return data.set(['termName', 'termDisplayName'], displayName);
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
