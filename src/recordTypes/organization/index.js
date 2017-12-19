import forms from './forms';

export default pluginContext => ({
  recordTypes: {
    organization: {
      forms: forms(pluginContext),
    },
  },
});
