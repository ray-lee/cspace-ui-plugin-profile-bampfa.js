import { defineMessages } from 'react-intl';
import forms from './forms';
import fields from './fields';

export default pluginContext => ({
  recordTypes: {
    person: {
      forms: forms(pluginContext),
      fields: fields(pluginContext),
      messages: {
        panel: defineMessages({
          copyright: {
            id: 'panel.persons.copyright',
            defaultMessage: 'Copyright Information',
          },
        }),
      },
    },
  },
});
