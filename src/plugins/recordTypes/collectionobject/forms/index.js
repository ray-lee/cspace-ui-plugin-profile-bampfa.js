import customForm from './custom';

export default pluginContext => ({
  default: customForm(pluginContext),
  inventory: {
    disabled: true,
  },
  photo: {
    disabled: true,
  },
});
