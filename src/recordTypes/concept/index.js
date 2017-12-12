import forms from './forms';

export default (pluginContext) => ({
  recordTypes: {
    concept: {
      forms: forms(pluginContext),
    },
  },
});
