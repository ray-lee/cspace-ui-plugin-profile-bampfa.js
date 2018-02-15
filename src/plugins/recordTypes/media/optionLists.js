import { defineMessages } from 'react-intl';

export default {
  websiteDisplayLevels: {
    values: [
      'No public display',
      'Display thumbnail only',
      'Display larger size',
    ],
    messages: defineMessages({
      'No public display': {
        id: 'option.websiteDisplayLevels.No public display',
        defaultMessage: 'no public display',
      },
      'Display thumbnail only': {
        id: 'option.websiteDisplayLevels.Display thumbnail only',
        defaultMessage: 'display thumbnail only',
      },
      'Display larger size': {
        id: 'option.websiteDisplayLevels.Display larger size',
        defaultMessage: 'display larger size',
      },
    }),
  },
};
