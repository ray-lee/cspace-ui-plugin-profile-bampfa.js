import forms from './forms';
import vocabularies from './vocabularies';

export default () => pluginContext => ({
  recordTypes: {
    location: {
      vocabularies,
      forms: forms(pluginContext),
    },
  },
});
