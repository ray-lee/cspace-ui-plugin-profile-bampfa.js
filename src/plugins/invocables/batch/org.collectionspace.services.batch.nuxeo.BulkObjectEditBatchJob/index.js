import forms from './forms';
import fields from './fields';

export default () => (configContext) => ({
  invocables: {
    batch: {
      'org.collectionspace.services.batch.nuxeo.BulkObjectEditBatchJob': {
        forms: forms(configContext),
        fields: fields(configContext),
      },
    },
  },
});
