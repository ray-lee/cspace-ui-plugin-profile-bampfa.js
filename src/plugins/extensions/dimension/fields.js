import { defineMessages } from 'react-intl';
import { computeDimensionSummary } from '../../../utils';

export default (pluginContext) => {
  const {
    TextInput,
  } = pluginContext.inputComponents;

  const {
    configKey: config,
  } = pluginContext.configHelpers;

  return {
    measuredPartGroupList: {
      measuredPartGroup: {
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
            compute: computeDimensionSummary,
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
