import { defineMessages } from 'react-intl';
import { computeMediaOrderNumber, computeMediaTitle } from './utils';

export default (configContext) => {
  const {
    TextInput,
    OptionPickerInput,
    CheckboxInput,
  } = configContext.inputComponents;

  const {
    extensions,
  } = configContext.config;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_INT,
    DATA_TYPE_BOOL,
  } = configContext.dataTypes;

  return {
    document: {
      'ns2:media_common': {
        identificationNumber: {
          [config]: {
            required: false,
          },
        },
        title: {
          [config]: {
            compute: computeMediaTitle,
          },
        },
        ...extensions.dimension.fields,
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
                defaultMessage: 'Primary display',
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
                defaultMessage: 'Website display level',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'websiteDisplayLevels',
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
                defaultMessage: 'Image number',
              },
            }),
            required: true,
            view: {
              type: TextInput,
            },
          },
        },
        computedOrderNumber: {
          [config]: {
            compute: computeMediaOrderNumber,
          },
        },
        pictionId: {
          [config]: {
            dataType: DATA_TYPE_INT,
            readOnly: true,
          },
        },
        pictionImageHash: {
          [config]: {
            readOnly: true,
          },
        },
      },
    },
  };
};
