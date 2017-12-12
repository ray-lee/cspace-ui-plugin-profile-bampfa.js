import forms from './forms';

export default pluginContext => ({
  recordTypes: {
    work: {
      forms: forms(pluginContext),
    },
  },
});
