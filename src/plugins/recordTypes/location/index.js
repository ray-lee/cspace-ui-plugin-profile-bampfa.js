import vocabularies from './vocabularies';

export default () => pluginContext => ({
  recordTypes: {
    location: {
      vocabularies,
    },
  },
});
