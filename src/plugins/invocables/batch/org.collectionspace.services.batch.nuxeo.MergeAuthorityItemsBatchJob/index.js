import fields from './fields';

 export default () => (configContext) => {
  return {
    invocables: {
      batch: {
        'org.collectionspace.services.batch.nuxeo.MergeAuthorityItemsBatchJob': {
          fields: fields(configContext),
        },
      },
    },
  }
}


