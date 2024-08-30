import columns from './columns';
import forms from './forms';
import fields from './fields';
import optionLists from './optionLists';
import advancedSearch from './advancedSearch';
import messages from './messages';
import title from './title';

export default () => (configContext) => ({
  optionLists,
  recordTypes: {
    collectionobject: {
      messages,
      advancedSearch: advancedSearch(configContext),
      columns: columns(configContext),
      forms: forms(configContext),
      fields: fields(configContext),
      title: title(configContext),
    },
  },
});
