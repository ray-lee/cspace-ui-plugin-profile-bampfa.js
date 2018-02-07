import forms from './forms';
import fields from './fields';
import optionLists from './optionLists';
import advancedSearch from './advancedSearch';

export default pluginContext => ({
  optionLists,
  recordTypes: {
    media: {
      forms: forms(pluginContext),
      fields: fields(pluginContext),
      advancedSearch: advancedSearch(pluginContext),
    },
  },
});
