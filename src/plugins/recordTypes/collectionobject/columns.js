import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
  } = configContext.formatHelpers;

  return {
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
            // For collectionobject records, "ID Number" refers to specifically to objectNumber,
            // but effectiveObjectNumber could contain otherNumber if there is no objectNumber. To
            // prevent confusion, don't label the column "ID Number".
            defaultMessage: 'Number',
          },
        }),
        order: 10,
        sortBy: 'collectionobjects_bampfa:sortableEffectiveObjectNumber',
        width: 150,
      },
      computedArtistName: {
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.default.computedArtistName',
            defaultMessage: 'Artist or maker',
          },
        }),
        order: 15,
        sortBy: 'collectionobjects_bampfa:computedArtistName',
        width: 225,
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
        width: 275,
      },
    },
    narrow: {
      objectNumber: {
        disabled: true,
      },
      title: {
        disabled: true,
      },
      effectiveObjectNumber: {
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.narrow.effectiveObjectNumber',
            // For collectionobject records, "ID Number" refers to specifically to objectNumber,
            // but effectiveObjectNumber could contain otherNumber if there is no objectNumber. To
            // prevent confusion, don't label the column "ID Number".
            defaultMessage: 'Number',
          },
        }),
        order: 10,
        sortBy: 'collectionobjects_bampfa:sortableEffectiveObjectNumber',
        width: 200,
      },
      bampfaTitle: {
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.narrow.bampfaTitle',
            defaultMessage: 'Title',
          },
        }),
        order: 20,
        sortBy: 'collectionobjects_bampfa:bampfaTitleGroupList/0/bampfaTitle',
        width: 450,
      },
    },
  };
};
