import { defineMessages } from 'react-intl';

export default () => ({
  default: {
    identificationNumber: {
      disabled: true,
    },
    imageNumber: {
      messages: defineMessages({
        label: {
          id: 'column.media.default.imageNumber',
          defaultMessage: 'Image number',
        },
      }),
      order: 20,
      sortBy: 'media_bampfa:imageNumber',
      width: 250,
    },
    computedOrderNumber: {
      // This column is used to sort images in the media snapshot panel. It does not appear in list
      // result tables, so make it disabled.
      disabled: true,
      sortBy: 'media_bampfa:computedOrderNumber',
    },
  },
});
