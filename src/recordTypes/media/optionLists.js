import { defineMessages } from 'react-intl';

export default {
  websiteDisplayLevel: {
    values: [
      'No public display',
      'Display thumbnail only',
      'Display larger size',
    ],
    messages: defineMessages({
      'No public display': {
        id: 'option.websiteDisplayLevel.No public display',
        defaultMessage: 'no public display',
      },
      'Display thumbnail only': {
        id: 'option.websiteDisplayLevel.Display thumbnail only',
        defaultMessage: 'display thumbnail only',
      },
      'Display larger size': {
        id: 'option.websiteDisplayLevel.Display larger size',
        defaultMessage: 'display larger size',
      },
    }),
  },
};
