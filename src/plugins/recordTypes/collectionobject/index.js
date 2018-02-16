import forms from './forms';
import fields from './fields';
import optionLists from './optionLists';
import advancedSearch from './advancedSearch';
import messages from './messages';

export default () => pluginContext => ({
  optionLists,
  recordTypes: {
    collectionobject: {
      messages,
      advancedSearch: advancedSearch(pluginContext),
      forms: forms(pluginContext),
      fields: fields(pluginContext),
    },
  },
});
