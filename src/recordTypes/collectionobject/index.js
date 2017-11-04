import forms from './forms';
import fields from './fields';
// import optionLists from './optionLists';

import { defineMessages } from 'react-intl';

export default (pluginContext) => ({

  forms: forms(pluginContext),
  fields: fields(pluginContext),
  optionLists: {
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
      permissionToReproduce: {
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
            id: 'option.permissionToReproduce.unknown',
            defaultMessage: 'Unknown',
          },
          yes : {
            id: 'option.permissionToReproduce.yes',
            defaultMessage: 'Yes',
          },
          no : {
            id: 'option.permissionToReproduce.no',
            defaultMessage: 'No',
          },
          restricted : {
            id: 'option.permissionToReproduce.restricted',
            defaultMessage: 'Restricted',
          },
          publicdomain : {
            id: 'option.permissionToReproduce.publicdomain',
            defaultMessage: 'Public Domain',
          },
          pending : {
            id: 'option.permissionToReproduce.pending',
            defaultMessage: 'Pending',
          },
        }),
      },
    },
  messages: {
    panel: defineMessages({
      detail: {
          id: 'panel.collectionobject.detail',
          defaultMessage: 'Detail',
      },
      acq: {
          id: 'panel.collectionobject.acq',
          defaultMessage: 'Item-Specific Acquisition Information',
      },
      classification: {
          id: 'panel.collectionobject.classification',
          defaultMessage: 'Classification',
      },
      copyright: {
          id: 'panel.collectionobject.copyright',
          defaultMessage: 'Copyright Information',
      },
      condition: {
          id: 'panel.collectionobject.condition',
          defaultMessage: 'Condition/Conservation',
      },
      notes: {
          id: 'panel.collectionobject.notes',
          defaultMessage: 'Notes',
      },
      collectinfo: {
          id: 'panel.collectionobject.collectinfo',
          defaultMessage: 'Collection Text Information',
      },
      cataloger: {
          id: 'panel.collectionobject.cataloger',
          defaultMessage: 'Cataloger Information',
      },
    }),
  }
});