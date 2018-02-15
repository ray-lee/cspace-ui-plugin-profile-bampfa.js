import { defineMessages } from 'react-intl';

export default {
  soundOrSilents: {
    values: [
      'Sound',
      'Silent',
    ],
    messages: defineMessages({
      Sound: {
        id: 'option.soundOrSilents.Sound',
        defaultMessage: 'sound',
      },
      Silent: {
        id: 'option.soundOrSilents.Silent',
        defaultMessage: 'silent',
      },
    }),
  },
  bwOrColors: {
    values: [
      'Black &amp; white',
      'Color',
    ],
    messages: defineMessages({
      'Black &amp; white': {
        id: 'option.bwOrColors.Black &amp; white',
        defaultMessage: 'black & white',
      },
      Color: {
        id: 'option.bwOrColors.Color',
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
      'UCB Collection',
      'UCB Inventory',
      'unknown',
    ],
    messages: defineMessages({
      appraisal: {
        id: 'option.numberTypes.Appraisal',
        defaultMessage: 'appraisal',
      },
      artist: {
        id: 'option.numberTypes.Artist',
        defaultMessage: 'artist',
      },
      'Auction House': {
        id: 'option.numberTypes.Auction House',
        defaultMessage: 'auction house',
      },
      donor: {
        id: 'option.numberTypes.Donor',
        defaultMessage: 'donor',
      },
      gallery: {
        id: 'option.numberTypes.Gallery',
        defaultMessage: 'gallery',
      },
      lender: {
        id: 'option.numberTypes.lender',
        defaultMessage: 'lender',
      },
      obsolete: {
        id: 'option.numberTypes.obsolete',
        defaultMessage: 'obsolete',
      },
      previous: {
        id: 'option.numberTypes.previous',
        defaultMessage: 'previous',
      },
      serial: {
        id: 'option.numberTypes.serial',
        defaultMessage: 'serial',
      },
      'UCB Collection': {
        id: 'option.numberTypes.UCBCollection',
        defaultMessage: 'UC collection',
      },
      'UCB Inventory': {
        id: 'option.numberTypes.UCBInventory',
        defaultMessage: 'UCB inventory',
      },
      unknown: {
        id: 'option.numberTypes.unknown',
        defaultMessage: 'unknown',
      },
    }),
  },
};
