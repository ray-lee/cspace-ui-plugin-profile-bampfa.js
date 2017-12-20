import forms from './forms';
import vocabularies from './vocabularies';

export default pluginContext => ({
  recordTypes: {
    organization: {
      vocabularies,
      forms: forms(pluginContext),
    },
  },
});
