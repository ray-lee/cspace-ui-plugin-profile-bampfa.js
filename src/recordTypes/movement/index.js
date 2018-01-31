import columns from './columns';
import forms from './forms';
import fields from './fields';

export default pluginContext => ({
  recordTypes: {
    movement: {
      columns: columns(pluginContext),
      forms: forms(pluginContext),
      fields: fields(pluginContext),
    },
  },
});
