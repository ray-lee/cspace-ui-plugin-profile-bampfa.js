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
        movementMethods: {
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
        movementContact: {
          [config]: {
            view: {
              type: TextInput,
            },
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
        computedSummary: {
          [config]: {
            view: {
              type: TextInput,
              props: {
                readOnly: true,
              },
            },
            compute: (value, path, recordData) => {
              let summary = '';
              let date = recordData.getIn(['document', 'ns2:movements_common', 'locationDate']);
              let reason = recordData.getIn(['document', 'ns2:movements_bampfa', 'reasonForMove']);

              if (typeof (date) === 'undefined') {
                date = '';
              }

              if (typeof (reason) === 'undefined') {
                reason = '';
              }

              /* Remove timestamp of the date */
              const index = date.indexOf('T');
              if (index > -1) {
                date = date.substring(0, index);
              }

              /* Convert the reason URN into a string */
              if (reason !== '') {
                reason = reason.slice(reason.indexOf("'") + 1, reason.length - 1);
              }

              if (date && reason) {
                summary = `${date} (${reason})`;
              } else if (date) {
                summary = date;
              } else if (reason) {
                summary = reason;
              }
              return summary;
            },
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
                defaultMessage: 'Reason',
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
      },
    },
  };
};
