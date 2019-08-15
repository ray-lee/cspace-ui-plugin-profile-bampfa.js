import fields from './fields';
import forms from './forms';

export default () => configContext => ({
  invocables: {
    report: {
      bampfaUOCRequesterbyObject: {
        fields: fields(configContext),
        forms: forms(configContext),
      },
    },
  },
});
