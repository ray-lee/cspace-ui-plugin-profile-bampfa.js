import vocabularies from './vocabularies';

export default () => () => ({
  recordTypes: {
    location: {
      vocabularies,
    },
  },
});
