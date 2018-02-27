import advancedSearch from './advancedSearch';
import columns from './columns';
import fields from './fields';
import forms from './forms';
import optionLists from './optionLists';
import title from './title';

export default () => pluginContext => ({
  optionLists,
  recordTypes: {
    media: {
      advancedSearch: advancedSearch(pluginContext),
      columns: columns(pluginContext),
      fields: fields(pluginContext),
      forms: forms(pluginContext),
      title: title(pluginContext),
    },
  },
});
