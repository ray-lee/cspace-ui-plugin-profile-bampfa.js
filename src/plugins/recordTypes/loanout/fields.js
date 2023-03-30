import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    IDGeneratorInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;


  return {
    document: {
      [config]: {
        'ns2:loansout_common': {
          loanOutNumber: {
            [config]: {
              view: {
                type: IDGeneratorInput,
                props: {
                  source: 'bampfaloanout',
                },
              },
            },
          },
        },
      },
    },
  };
};
