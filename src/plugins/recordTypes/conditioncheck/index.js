import fields from './fields';
import forms from './forms';

export default () => configContext => ({
  recordTypes: {
    conditioncheck: {
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
