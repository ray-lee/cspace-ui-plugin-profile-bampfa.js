import forms from './forms';
import fields from './fields';
import messages from './messages';

export default () => configContext => ({
  recordTypes: {
    person: {
      messages,
      forms: forms(configContext),
      fields: fields(configContext),
    },
  },
});
