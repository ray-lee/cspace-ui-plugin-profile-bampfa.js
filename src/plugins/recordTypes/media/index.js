import advancedSearch from './advancedSearch';
import columns from './columns';
import fields from './fields';
import forms from './forms';
import optionLists from './optionLists';
import title from './title';

export default () => (configContext) => ({
  optionLists,
  recordTypes: {
    media: {
      advancedSearch: advancedSearch(configContext),
      columns: columns(configContext),
      fields: fields(configContext),
      forms: forms(configContext),
      title: title(configContext),
    },
  },
});
