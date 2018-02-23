import defaultForm from './default';

export default pluginContext => ({
  default: defaultForm(pluginContext),
  inventory: {
    disabled: true,
  },
  photo: {
    disabled: true,
  },
});
