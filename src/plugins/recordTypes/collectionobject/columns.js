import { defineMessages } from 'react-intl';

export default () => ({
  default: {
    objectNumber: {
      disabled: true,
    },
    title: {
      disabled: true,
    },
    effectiveObjectNumber: {
      messages: defineMessages({
        label: {
          id: 'column.collectionobject.default.effectiveObjectNumber',
          defaultMessage: 'ID number',
        },
      }),
      order: 10,
      sortBy: 'collectionobjects_bampfa:sortableEffectiveObjectNumber',
      width: 200,
    },
    bampfaTitle: {
      messages: defineMessages({
        label: {
          id: 'column.collectionobject.default.bampfaTitle',
          defaultMessage: 'Title',
        },
      }),
      order: 20,
      sortBy: 'collectionobjects_bampfa:bampfaTitleGroupList/0/bampfaTitle',
      width: 450,
    },
  },
});
