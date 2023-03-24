export default (configContext) => {
  const {
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:conditionchecks_common': {
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
