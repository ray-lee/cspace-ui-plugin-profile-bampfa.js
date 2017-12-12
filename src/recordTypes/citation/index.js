import forms from './forms';

export default pluginContext => ({
  recordTypes: {
    citation: {
      forms: forms(pluginContext),
    },
  },
});
