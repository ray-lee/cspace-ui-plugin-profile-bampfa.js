import forms from './forms';
import fields from './fields';
import messages from './messages';

export default () => pluginContext => ({
  recordTypes: {
    person: {
      messages,
      forms: forms(pluginContext),
      fields: fields(pluginContext),
    },
  },
});
