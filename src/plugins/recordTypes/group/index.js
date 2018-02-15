import fields from './fields';

export default () => pluginContext => ({
  recordTypes: {
    group: {
      fields: fields(pluginContext),
    },
  },
});
