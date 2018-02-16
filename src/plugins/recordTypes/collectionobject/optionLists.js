import { defineMessages } from 'react-intl';

export default {
  soundLevels: {
    values: [
      'Sound',
      'Silent',
    ],
    messages: defineMessages({
      Sound: {
        id: 'option.soundLevels.Sound',
        defaultMessage: 'sound',
      },
      Silent: {
        id: 'option.soundLevels.Silent',
        defaultMessage: 'silent',
      },
    }),
  },
  colorLevels: {
    values: [
      'Black & white',
      'Color',
    ],
    messages: defineMessages({
      'Black & white': {
        id: 'option.colorLevels.Black & white',
        defaultMessage: 'black & white',
      },
      Color: {
        id: 'option.colorLevels.Color',
        defaultMessage: 'color',
      },
    }),
  },
  numberTypes: {
    values: [
      'Appraisal',
      'Artist',
      'Auction House',
      'Donor',
      'Gallery',
      'lender',
      'obsolete',
      'previous',
      'serial',
      'UC Collection',
      'UCB Inventory',
      'unknown',
    ],
    messages: defineMessages({
      Appraisal: {
        id: 'option.numberTypes.Appraisal',
        defaultMessage: 'appraisal',
      },
      Artist: {
        id: 'option.numberTypes.Artist',
        defaultMessage: 'artist',
      },
      'Auction House': {
        id: 'option.numberTypes.Auction House',
        defaultMessage: 'auction house',
      },
      Donor: {
        id: 'option.numberTypes.Donor',
        defaultMessage: 'donor',
      },
      Gallery: {
        id: 'option.numberTypes.Gallery',
        defaultMessage: 'gallery',
      },
      'UC Collection': {
        id: 'option.numberTypes.UC Collection',
        defaultMessage: 'UC collection',
      },
      'UCB Inventory': {
        id: 'option.numberTypes.UCB Inventory',
        defaultMessage: 'UCB inventory',
      },
    }),
  },
};
