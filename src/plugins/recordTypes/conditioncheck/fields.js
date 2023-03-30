export default (configContext) => {
  const {
    TermPickerInput,
    IDGeneratorInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:conditionchecks_common': {
        conditionCheckRefNumber: {
          [config]: {
            view: {
              type: IDGeneratorInput,
              props: {
                source: 'bampfaconditioncheck',
              },
            },
          },
        },
        conditionCheckGroupList: {
          conditionCheckGroup: {
            condition: {
              [config]: {
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'bampfaconditionchecks',
                  },
                },
              },
            },
          },
        },
      },
    },
  };
};
