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
        locationDate: {
          [config]: {
            required: true,
          },
        },
        reasonForMove: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'movereason',
              },
            },
          },
        },
        movementMethods: {
          movementMethod: {
            [config]: {
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
              props: null,
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
                defaultMessage: 'Box or container',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'location/crate',
              },
            },
          },
        },
        computedSummary: {
          [config]: {
            compute: ({ recordData }) => {
              let summary = '';
              let date = recordData.getIn(['document', 'ns2:movements_common', 'locationDate']);
              let reason = recordData.getIn(['document', 'ns2:movements_common', 'reasonForMove']);

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
      },
    },
  };
};
