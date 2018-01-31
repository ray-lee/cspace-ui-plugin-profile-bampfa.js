import columns from './columns';
import forms from './forms';
import fields from './fields';
import advancedSearch from './advancedSearch';

export default pluginContext => ({
  recordTypes: {
    movement: {
      columns: columns(pluginContext),
      forms: forms(pluginContext),
      fields: fields(pluginContext),
      advancedSearch: advancedSearch(pluginContext),
    },
  },
});
