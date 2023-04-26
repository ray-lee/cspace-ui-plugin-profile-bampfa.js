export default (configContext) => {
  const {
    IDGeneratorInput,
    TermPickerInput,
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
          loanPurpose: {
            [config]: {
              view: {
                type: TermPickerInput,
                props: {
                  source: 'bampfaloanpurposes',
                },
              },
            },
          },
        },
      },
    },
  };
};
