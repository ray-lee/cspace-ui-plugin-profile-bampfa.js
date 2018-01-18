import { defineMessages } from 'react-intl';
import forms from './forms';
import fields from './fields';

export default pluginContext => ({
  recordTypes: {
    media: {
      forms: forms(pluginContext),
      fields: fields(pluginContext),
    },
  },
  optionLists: {
    websiteDisplayLevel: {
      values: [
        'No public display',
        'Display thumbnail only',
        'Display larger size',
      ],
      messages: defineMessages({
        noPublicDisplay: {
          id: 'option.websiteDisplayLevel.noPublicDisplay',
          defaultMessage: 'No public display',
        },
        displayThumbnailOnly: {
          id: 'option.websiteDisplayLevel.displayThumbnailOnly',
          defaultMessage: 'Display thumbnail only',
        },
        displayLargerSize: {
          id: 'option.websiteDisplayLevel.displayLargerSize',
          defaultMessage: 'Display larger size',
        },
      }),
    },
  },
});
