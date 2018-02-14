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
  },
});
