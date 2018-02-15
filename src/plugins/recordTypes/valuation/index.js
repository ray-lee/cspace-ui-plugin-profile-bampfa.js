import forms from './forms';

export default pluginContext => ({
  recordTypes: {
    valuation: {
      forms: forms(pluginContext),
    },
  },
});
