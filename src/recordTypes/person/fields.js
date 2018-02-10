import { defineMessages } from 'react-intl';
import { computePersonNames } from '../../utils';

export default (pluginContext) => {
  const {
    OptionPickerInput,
    TextInput,
  } = pluginContext.inputComponents;

  const {
    configKey: config,
  } = pluginContext.configHelpers;

  return {
    document: {
      'ns2:persons_common': {
        personTermGroupList: {
          personTermGroup: {
            [config]: {
              compute: computePersonNames,
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
                id: 'field.persons_bampfa.birthCity.name',
                defaultMessage: 'Birth city',
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
                defaultMessage: 'Other regional info',
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
                id: 'field.persons_bampfa.dynastyPeriod.name',
                defaultMessage: 'Dynasty/period',
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
                defaultMessage: 'Dates active',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        copyrightCredit: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.persons_bampfa.copyrightCredit.name',
                defaultMessage: 'Copyright credit',
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
                defaultMessage: 'Copyright note',
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
                defaultMessage: 'Copyright holder',
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
                source: 'reproductionPermissionLevels',
              },
            },
          },
        },
      },
    },
  };
};
