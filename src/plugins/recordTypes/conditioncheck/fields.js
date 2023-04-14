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
      'ns2:conditionchecks_common': {
        conditionCheckRefNumber: {
          [config]: {
            view: {
              type: IDGeneratorInput,
              props: {
                source: 'bampfaconditioncheckgenerator',
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
