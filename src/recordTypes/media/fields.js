import { defineMessages } from 'react-intl';

export default (pluginContext) => {
  const {
    CompoundInput,
    TextInput,
    OptionPickerInput,
    CheckboxInput,
  } = pluginContext.inputComponents;

  const {
    configKey: config,
  } = pluginContext.configHelpers;

  const {
    DATA_TYPE_INT,
    DATA_TYPE_BOOL,
  } = pluginContext.dataTypes;

  return {
    document: {
      'ns2:media_common': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/media',
          },
        },
        identificationNumber: {
          [config]: {
            required: false,
          },
        },
        measuredPartGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          measuredPartGroup: {
            dimensionSummary: {
              [config]: {
                view: {
                  type: TextInput,
                  props: {
                    readOnly: true,
                  },
                },
              },
            },
            measuredPartNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.media_bampfa.measuredPartNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
      },
      'ns2:media_bampfa': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/media',
          },
        },
        primaryDisplay: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.media_bampfa.primaryDisplay.name',
                defaultMessage: 'Primary Display',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        websiteDisplayLevel: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.media_bampfa.websiteDisplayLevel.name',
                defaultMessage: 'Website Display Level',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'websiteDisplayLevel',
              },
            },
          },
        },
        imageNumber: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.media_bampfa.imageNumber.name',
                defaultMessage: 'Image Number',
              },
            }),
            required: true,
            view: {
              type: TextInput,
            },
          },
        },
        // Computed Fields
        title: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.media_bampfa.title.name',
                defaultMessage: 'Title',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        titlesearch: { // App-layer only field
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.titleSearch.media_bampfa.name',
                defaultMessage: 'Title Search',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        computedOrderNumber: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.computedOrderNumber.media_bampfa.name',
                defaultMessage: 'Computed Order Number',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        pictionId: {
          [config]: {
            dataType: DATA_TYPE_INT,
            readOnly: true,
            messages: defineMessages({
              name: {
                id: 'field.pictionId.media_bampfa.name',
                defaultMessage: 'Piction Id',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        pictionImageHash: {
          [config]: {
            readOnly: true,
            messages: defineMessages({
              name: {
                id: 'field.pictionImageHash.media_bampfa.name',
                defaultMessage: 'Piction Image Hash',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
      },
    },
  };
};
