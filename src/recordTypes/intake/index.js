import advancedSearch from './advancedSearch';
import forms from './forms';
import fields from './fields';
import optionLists from './optionLists';

export default pluginContext => ({
  optionLists,
  recordTypes: {
    intake: {
      advancedSearch: advancedSearch(pluginContext),
      forms: forms(pluginContext),
      fields: fields(pluginContext),
    },
  },
});
