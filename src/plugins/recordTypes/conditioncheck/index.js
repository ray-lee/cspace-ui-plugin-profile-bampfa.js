import fields from './fields';
import forms from './forms';
import idGenerators from './idGenerators';
import title from './title';

export default () => configContext => ({
  idGenerators,
  recordTypes: {
    conditioncheck: {
      fields: fields(configContext),
      forms: forms(configContext),
      title: title(configContext),
    },
  },
});
