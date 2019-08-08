import fields from './fields';
import forms from './forms';

export default () => configContext => ({
  invocables: {
    report: {
      bampfaUOCApprovalStatus: {
        fields: fields(configContext),
        forms: forms(configContext),
      },
    },
  },
});
