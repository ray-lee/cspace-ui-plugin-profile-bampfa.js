import { defineMessages } from 'react-intl';
import { computeDimensionSummary, computeFilename } from '../../utils';

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
        title: {
          [config]: {
            compute: ({ subrecordData }) => computeFilename(subrecordData),
          },
        },
        measuredPartGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          measuredPartGroup: {
            measuredPart: {
              [config]: {
                view: {
                  type: TextInput,
                },
              },
            },
            dimensionSummary: {
              [config]: {
                view: {
                  type: TextInput,
                  props: {
                    readOnly: true,
                  },
                },
                compute: ({ path, recordData }) => computeDimensionSummary(path, recordData),
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
        titleSearch: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.media_bampfa.titleSearch.name',
                defaultMessage: 'File name',
              },
            }),
            view: {
              type: TextInput,
            },
            compute: ({ subrecordData }) => computeFilename(subrecordData),
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
            compute: ({ recordData }) => {
              const primaryDisplay = recordData.getIn(['document', 'ns2:media_bampfa', 'primaryDisplay']);
              let imageNumber = recordData.getIn(['document', 'ns2:media_bampfa', 'imageNumber']);
              const len = imageNumber.length;
              if (len <= 5) {
                imageNumber = (new Array(6).join('0') + imageNumber).slice(-len);
              }

              if (!primaryDisplay) {
                imageNumber = `alt ${imageNumber}`;
              }
              return imageNumber;
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
