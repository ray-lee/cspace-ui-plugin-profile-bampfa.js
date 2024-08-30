import columns from './columns';
import forms from './forms';
import fields from './fields';
import advancedSearch from './advancedSearch';

export default () => (configContext) => ({
  recordTypes: {
    movement: {
      columns: columns(configContext),
      forms: forms(configContext),
      fields: fields(configContext),
      advancedSearch: advancedSearch(configContext),
    },
  },
});
