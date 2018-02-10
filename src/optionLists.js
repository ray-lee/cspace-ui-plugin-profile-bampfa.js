import { defineMessages } from 'react-intl';

// This file contains definitions of option lists that are shared by multiple record types. Option
// lists that are only used by one record type should be defined in the directory for that record
// type.

export default {
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
};
