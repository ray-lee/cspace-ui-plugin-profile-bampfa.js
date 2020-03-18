import forms from './forms';

export default () => configContext => ({
  invocables: {
    batch: {
      'org.collectionspace.services.batch.nuxeo.BulkObjectEditBatchJob': {
        forms: forms(configContext),
      },
    },
  },
});
