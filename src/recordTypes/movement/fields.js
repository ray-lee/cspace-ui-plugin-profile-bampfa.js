import { defineMessages } from 'react-intl';

export default (pluginContext) => {
  const {
    AutocompleteInput,
    TextInput,
    TermPickerInput,
  } = pluginContext.inputComponents;

  const {
    configKey: config,
  } = pluginContext.configHelpers;

  return {
    document: {
      'ns2:movements_common': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/movement',
          },
        },
        locationDate: {
          [config]: {
            required: true,
          },
        },
      },
      'ns2:movements_bampfa': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/movement/local/bampfa',
          },
        },
        crate: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_bampfa.crate.name',
                defaultMessage: 'Box or Container',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'location-crate',
              },
            },
          },
        },
        [config]: {
          readOnly: true,
          view: {
            type: TextInput,
          },
        },
        movementReferenceNumber: {
          [config]: {
            view: {
              type: TextInput,
            },
          },
        },
        reasonForMove: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_bampfa.crate.reasonForMove.name',
                defaultMessage: 'Reason for move',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'movereason',
              },
            },
          },
        },
        movementContact: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_bampfa.movementContact.name',
                defaultMessage: 'Movement Contact',
              },
            }),
            view: {
              type: AutocompleteInput,
            },
          },
        },
        movementMethod: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_bampfa.movementMethod.name',
                defaultMessage: 'Movement Method',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'movemethod',
              },
            },
          },
        },
      },
    },
  };
};
