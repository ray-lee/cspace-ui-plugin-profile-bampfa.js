import forms from './forms';

export default pluginContext => ({
  recordTypes: {
    conditioncheck: {
      forms: forms(pluginContext),
    },
  },
});
