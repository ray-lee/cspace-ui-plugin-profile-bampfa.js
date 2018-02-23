import defaultForm from './default';

export default pluginContext => ({
  default: defaultForm(pluginContext),
  doorstep: {
    disabled: true,
  },
});
