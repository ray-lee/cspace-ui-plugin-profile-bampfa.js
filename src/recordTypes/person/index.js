import { defineMessages } from 'react-intl';
import forms from './forms';
import fields from './fields';
import advancedSearch from './advancedSearch';

export default pluginContext => ({
  recordTypes: {
    person: {
      advancedSearch: advancedSearch(pluginContext),
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
