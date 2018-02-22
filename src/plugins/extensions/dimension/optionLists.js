import { defineMessages } from 'react-intl';

export default {
  measurementUnits: {
    values: [
      'carats',
      'cm.',
      'cubic-centimeters',
      'feet',
      'in.',
      'kilograms',
      'liters',
      'millimeters',
      'meters',
      'minutes',
      'pixels',
      'square-feet',
      'stories',
    ],
    messages: defineMessages({
      'cm.': {
        id: 'option.measurementUnits.cm.',
        defaultMessage: 'cm.',
      },
      'in.': {
        id: 'option.measurementUnits.in.',
        defaultMessage: 'in.',
      },
    }),
  },
};
