import fields from './fields';

export default () => (configContext) => ({
  invocables: {
    batch: {
      'org.collectionspace.services.batch.nuxeo.MergeAuthorityItemsBatchJob': {
        fields: fields(configContext),
      },
    },
  },
});
