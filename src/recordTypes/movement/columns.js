import { defineMessages } from 'react-intl';

export default (pluginContext) => ({
  default: {
    movementReferenceNumber: {
      disabled: true,
    },
    computedSummary: {
      messages: defineMessages({
        label: {
          id: 'column.movement.default.computedSummary',
          defaultMessage: 'Date (reason)',
        },
      }),
      order: 20,
      sortBy: 'movements_bampfa:computedSummary',
      width: 250,
    },
  },
});
