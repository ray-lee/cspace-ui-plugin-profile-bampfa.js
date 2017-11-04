import { defineMessages } from 'react-intl';


export default {
  soundOrSilents: {
    values: [
        'sound', 
        'silent',
    ],
    messages: defineMessages({
      sound: {
        id: 'option.soundOrSilents.sound',
        defaultMessage: 'Sound',
      },
      silent: {
        id: 'option.soundOrSilents.silent',
        defaultMessage: 'Silent',
      },
    }),
  },
  bwOrColors: {
    values: [
      'blacknwhite',
      'color',
    ],
    messages: defineMessages({
      blacknwhite: {
        id: 'option.bwOrColors.blacknwhite',
        defaultMessage: 'Black & White',
      },
      color: {
        id: 'option.bwOrColors.color',
        defaultMessage: 'Color',
      },
    }),
  },
  numberTypes: {
    values: [
      'appraisal',
      'artist',
      'auctionhouse',
      'donor',
      'gallery',
      'lender',
      'obsolete',
      'previous',
      'serial',
      'uccollection',
      'ucbcollection',
      'unknown',
    ],
    messages: defineMessages({
      appraisal : {
        id: 'option.numberTypes.appraisal',
        defaultMessage: 'Appraisal',
      },
      artist : {
        id: 'option.numberTypes.artist',
        defaultMessage: 'Artist',
      },
      auctionhouse : {
        id: 'option.numberTypes.auctionhouse',
        defaultMessage: 'Auction House',
      },
      donor : {
        id: 'option.numberTypes.donor',
        defaultMessage: 'Donor',
      },
      gallery : {
        id: 'option.numberTypes.gallery',
        defaultMessage: 'Gallery',
      },
      lender : {
        id: 'option.numberTypes.lender',
        defaultMessage: 'Lender',
      },
      obsolete : {
        id: 'option.numberTypes.obsolete',
        defaultMessage: 'Obsolete',
      },
      previous : {
        id: 'option.numberTypes.previous',
        defaultMessage: 'Previous',
      },
      serial : {
        id: 'option.numberTypes.serial',
        defaultMessage: 'Serial',
      },
      uccollection : {
        id: 'option.numberTypes.uccollection',
        defaultMessage: 'UC Collection',
      },
      ucbcollection : {
        id: 'option.numberTypes.ucbcollection',
        defaultMessage: 'UCB Collection',
      },
      unknown : {
        id: 'option.numberTypes.unknown',
        defaultMessage: 'Unknown',
      },
    }),
  },
  permissionsToReproduce: {
    values: [
      'unknown',
      'yes',
      'no',
      'restricted',
      'publicdomain',
      'pending',
    ],
    messages: defineMessages({
      unknown : {
        id: 'option.permissionsToReproduce.unknown',
        defaultMessage: 'Unknown',
      },
      yes : {
        id: 'option.permissionsToReproduce.yes',
        defaultMessage: 'Yes',
      },
      no : {
        id: 'option.permissionsToReproduce.no',
        defaultMessage: 'No',
      },
      restricted : {
        id: 'option.permissionsToReproduce.restricted',
        defaultMessage: 'Restricted',
      },
      publicdomain : {
        id: 'option.permissionsToReproduce.publicdomain',
        defaultMessage: 'Public Domain',
      },
      pending : {
        id: 'option.permissionsToReproduce.pending',
        defaultMessage: 'Pending',
      },
    }),
  },
};