import forms from './forms';
import fields from './fields';
import optionLists from './optionLists';
import advancedSearch from './advancedSearch';
import messages from './messages';

export default pluginContext => ({
  optionLists,
  recordTypes: {
    collectionobject: {
      forms: forms(pluginContext),
      fields: fields(pluginContext),
      advancedSearch: advancedSearch(pluginContext),
      messages,
    },
  },
});
