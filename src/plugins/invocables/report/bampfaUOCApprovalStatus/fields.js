import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    CompoundInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    params: {
      [config]: {
        view: {
          type: CompoundInput,
        },
      },
      Requester: {
        [config]: {
          messages: defineMessages({
            name: {
              id: 'field.report.bampfaUOCApprovalStatus.Requester.name',
              defaultMessage: 'Requester',
            },
          }),
          required: true,
          view: {
            type: TextInput,
          },
        },
      },
    },
  };
};
