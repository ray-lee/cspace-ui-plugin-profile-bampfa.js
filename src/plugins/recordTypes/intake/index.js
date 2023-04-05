import advancedSearch from './advancedSearch';
import forms from './forms';
import fields from './fields';
import idGenerators from './idGenerators';
import optionLists from './optionLists';

export default () => configContext => ({
  idGenerators,
  optionLists,
  recordTypes: {
    intake: {
      advancedSearch: advancedSearch(configContext),
      forms: forms(configContext),
      fields: fields(configContext),
    },
  },
});
