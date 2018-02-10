import vocabularies from './vocabularies';

export default pluginContext => ({
  recordTypes: {
    organization: {
      vocabularies,
    },
  },
});
