import advancedSearch from './advancedSearch';
import forms from './forms';
import fields from './fields';
import optionLists from './optionLists';

export default () => configContext => ({
  optionLists,
  recordTypes: {
    intake: {
      advancedSearch: advancedSearch(configContext),
      forms: forms(configContext),
      fields: fields(configContext),
    },
  },
});
