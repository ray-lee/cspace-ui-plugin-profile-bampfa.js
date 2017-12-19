import forms from './forms';

export default pluginContext => ({
  recordTypes: {
    place: {
      forms: forms(pluginContext),
    },
  },
});
