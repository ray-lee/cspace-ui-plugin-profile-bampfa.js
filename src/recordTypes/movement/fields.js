import { defineMessages } from 'react-intl';

export default (pluginContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
    IDGeneratorInput,
    OptionPickerInput,
    TextInput,
  } = pluginContext.inputComponents;

  const {
    configKey: config,
  } = pluginContext.configHelpers;

  const {
    DATA_TYPE_DATE,
  } = pluginContext.dataTypes;


  return {
    document: {
      [config]: {
        view: {
          type: CompoundInput,
          props: {
            defaultChildSubpath: 'ns2:movements_common',
            movementsBampfaSubpath: 'ns2:movements_bampfa',
          },
        },
      },
      'ns2:movements_common': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/movement',
          },
        },
        currentLocation: {
          [config]: {
            required: true,
            messages: defineMessages({
              name: {
                id: 'field.movements_common.currentLocation.name',
                defaultMessage: 'Location',
              },
              fullName: {
                id: 'field.movements_common.currentLocation.fullName',
                defaultMessage: 'Current location',
              },
            }),
            required: true,
            view: {
              type: AutocompleteInput,
              props: {
                source: 'location/local,location/offsite,organization/local,organization/shared',
              },
            },
          },
        },
        locationDate: {
          [config]: {
            required: true,
            dataType: DATA_TYPE_DATE,
            messages: defineMessages({
              name: {
                id: 'field.movements_common.locationDate.name',
                defaultMessage: 'Location date',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
      },
      'ns2:movements_bampfa': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/movement',
          },
        },
        crate: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.movements_bampfa.crate.name',
                defaultMessage: 'Box or Container',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'location-crate',
              },
            },
          },
        },

      },
    },
  };
};
