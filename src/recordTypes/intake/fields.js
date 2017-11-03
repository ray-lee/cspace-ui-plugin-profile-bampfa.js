import { defineMessages } from 'react-intl';

export default (pluginContext) => {
  const {
    CompoundInput,
    DateInput,
    OptionPickerInput,
    TextInput,
    AutocompleteInput,
    IDGeneratorInput,
    TermPickerInput,
  } = pluginContext.inputComponents;

  const {
    configKey: config,
  } = pluginContext.configHelpers;

  const {
    DATA_TYPE_DATETIME,
  } = pluginContext.dataTypes;

  return {
    document: {
      [config]: {
        view: {
          type: CompoundInput,
          props: {
            defaultChildSubpath: 'ns2:intakes_common',
            intakesBampfaSubpath: 'ns2:intakes_bampfa',
          },
        },
      },
      'ns2:intakes_bampfa': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/intake',
          },
        },
        intakeObject: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.intakes_common.intakeObject.name', 
                defaultMessage: 'Object (Artist/Title/Medium)',
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
        receipt: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.intakes_common.receipt.name',
                defaultMessage: 'Receipt',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'receipt',
              }, 
            },
          },
        },
        sourceAddress: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.intakes_common.addressForAgenda.name',
                defaultMessage: 'Address for agenda'
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
      },
    },
  };
};


