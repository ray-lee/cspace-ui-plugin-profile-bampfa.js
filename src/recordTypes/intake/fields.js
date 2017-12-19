import { defineMessages } from 'react-intl';

export default (pluginContext) => {
  const {
    OptionPickerInput,
    TextInput,
    TermPickerInput,
  } = pluginContext.inputComponents;

  const {
    configKey: config,
  } = pluginContext.configHelpers;

  return {
    document: {
      'ns2:intakes_bampfa': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/intake/local/bampfa',
          },
        },
        intakeObject: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.intakes_bampfa.intakeObject.name',
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
                id: 'field.intakes_bampfa.receipt.name',
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
                id: 'field.intakes_bampfa.sourceAddress.name',
                defaultMessage: 'Address for agenda',
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
        disposition: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.intakes_bampfa.disposition.name',
                defaultMessage: 'Disposition',
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
      'ns2:intakes_common': {
        entryReason: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'intakepurpose',
              },
            },
          },
        },
      },
    },
  };
};
