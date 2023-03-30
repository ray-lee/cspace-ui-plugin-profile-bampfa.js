import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    OptionPickerInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:intakes_common': {
        entryNumber: {
          [config]: {
            view: {
              type: IDGeneratorInput,
              props: {
                source: 'study,receipt',
              },
            },
          },
        },
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
                defaultMessage: 'Object description',
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
        receipt: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.intakes_bampfa.receipt.name',
                defaultMessage: 'Receipt',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'intakereceipt',
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
    },
  };
};
