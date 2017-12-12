import forms from './forms';

export default pluginContext => ({
  recordTypes: {
    location: {
      forms: forms(pluginContext),
    },
  },
});
