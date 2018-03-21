import { defineMessages } from 'react-intl';
import { computeDimensionSummary } from './utils';

export default (configContext) => {
  const {
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_STRING,
  } = configContext.dataTypes;

  return {
    measuredPartGroupList: {
      measuredPartGroup: {
        [config]: {
          compute: computeDimensionSummary,
        },
        measuredPart: {
          [config]: {
            view: {
              type: TextInput,
              props: null,
            },
          },
        },
        dimensionSummary: {
          [config]: {
            view: {
              props: {
                readOnly: true,
              },
            },
          },
        },
        dimensionSubGroupList: {
          dimensionSubGroup: {
            value: {
              [config]: {
                dataType: DATA_TYPE_STRING,
              },
            },
          },
        },
        measuredPartNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.ext.dimension.measuredPartNote.name',
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
  };
};
