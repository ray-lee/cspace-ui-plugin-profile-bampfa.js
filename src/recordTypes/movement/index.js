import forms from './forms';
import fields from './fields';

export default pluginContext => ({
  recordTypes: {
    movement: {
      forms: forms(pluginContext),
      fields: fields(pluginContext),
    },
  },
});
