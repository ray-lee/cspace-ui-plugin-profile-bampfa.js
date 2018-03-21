export default (configContext) => {
  const {
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return ({
    document: {
      'ns2:groups_common': {
        owner: {
          [config]: {
            view: {
              type: TextInput,
              props: null,
            },
          },
        },
      },
    },
  });
};
