import forms from './forms';
import fields from './fields';

export default pluginContext => ({
  recordTypes: {
    media: {
      forms: forms(pluginContext),
      fields: fields(pluginContext),
    },
  },
});
