import extensions from './extensions';
import optionLists from './optionLists';
import recordTypes from './recordTypes';

export default [
  () => ({
    defaultAdvancedSearchBooleanOp: 'and',
  }),
  ...extensions,
  ...optionLists,
  ...recordTypes,
];
