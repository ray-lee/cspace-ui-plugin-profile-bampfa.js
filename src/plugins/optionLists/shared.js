import { defineMessages } from 'react-intl';

/**
 * This plugin provides option lists that are shared by multiple record types. Option lists that
 * are used by only one record type are defined in the plugin for that record type.
 */
export default () => ({
  optionLists: {
    searchResultPagePageSizes: {
      values: [
        '20',
        '40',
        '100',
        '500',
        '1000',
      ],
    },
    reproductionPermissionLevels: {
      values: [
        'Unknown',
        'Yes',
        'No',
        'Restricted',
        'Public Domain',
        'Pending',
      ],
      messages: defineMessages({
        Unknown: {
          id: 'option.reproductionPermissionLevels.Unknown',
          defaultMessage: 'unknown',
        },
        Yes: {
          id: 'option.reproductionPermissionLevels.Yes',
          defaultMessage: 'yes',
        },
        No: {
          id: 'option.reproductionPermissionLevels.No',
          defaultMessage: 'no',
        },
        Restricted: {
          id: 'option.reproductionPermissionLevels.Restricted',
          defaultMessage: 'restricted',
        },
        'Public Domain': {
          id: 'option.reproductionPermissionLevels.Public Domain',
          defaultMessage: 'public domain',
        },
        Pending: {
          id: 'option.reproductionPermissionLevels.Pending',
          defaultMessage: 'pending',
        },
      }),
    },
  },
});
