import { defineMessages } from 'react-intl';

export default {
  receiptStatuses: {
    values: [
      'Yes',
      'No',
    ],
    messages: defineMessages({
      Yes: {
        id: 'option.receiptStatuses.Yes',
        defaultMessage: 'yes',
      },
      No: {
        id: 'option.receiptStatuses.No',
        defaultMessage: 'no',
      },
    }),
  },
};
