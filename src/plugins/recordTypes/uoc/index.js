import fields from './fields';

export default () => (configContext) => ({
  recordTypes: {
    uoc: {
      fields: fields(configContext),
    },
  },
});
