import fields from './fields';

export default () => configContext => ({
  recordTypes: {
    group: {
      fields: fields(configContext),
    },
  },
});
