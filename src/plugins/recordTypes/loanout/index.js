import fields from './fields';
import idGenerators from './idGenerators';

export default () => (configContext) => ({
  idGenerators,
  recordTypes: {
    loanout: {
      fields: fields(configContext),
    },
  },
});
