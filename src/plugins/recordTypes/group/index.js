import columns from './columns';
import fields from './fields';

export default () => (configContext) => ({
  recordTypes: {
    group: {
      columns: columns(configContext),
      fields: fields(configContext),
    },
  },
});
