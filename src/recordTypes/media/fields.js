import { defineMessages } from 'react-intl';

export default (pluginContext) => {
  const {
    CompoundInput,
    TextInput,
    OptionPickerInput,
    CheckboxInput,
  } = pluginContext.inputComponents;

  const {
    configKey: config,
  } = pluginContext.configHelpers;

  const {
    Immutable,
  } = pluginContext.lib;

  const {
    DATA_TYPE_INT,
    DATA_TYPE_BOOL,
  } = pluginContext.dataTypes;

  return {
    document: {
      'ns2:media_common': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/media',
          },
        },
        identificationNumber: {
          [config]: {
            required: false,
          },
        },
        measuredPartGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          measuredPartGroup: {
            measuredPart: {
              [config]: {
                view: {
                  type: TextInput,
                },
              },
            },
            dimensionSummary: {
              [config]: {
                view: {
                  type: TextInput,
                  props: {
                    readOnly: true,
                  },
                },
                compute: (data, path, recordData) => {
                  const measurements = {};
                  const pathCopy = Object.assign([], path);

                  /* Perform a series of pops and pushes to a path to get the correct values */
                  pathCopy.pop();
                  pathCopy.push('measuredPart');
                  const measuredPart = recordData.getIn(pathCopy);
                  pathCopy.pop();
                  const dimensionSubGroup = recordData.getIn(pathCopy);
                  pathCopy.push('measuredPartNote');
                  const measuredPartNote = recordData.getIn(pathCopy);


                  // Collect the necessary measurements for the summary.

                  // Measurements with units other than inches and centimeters are excluded.

                  // Measurements with empty values are excluded.

                  // A dimension could be measured more than once.
                  // If this happens, the first (top-most) measurement
                  // of that dimension is used. All others are excluded.

                  for (let i = 0; i < dimensionSubGroup.length; i += 1) {
                    const measurement = dimensionSubGroup[i];
                    const dimension = measurement.dimension;
                    const val = measurement.value;
                    const unt = measurement.measurementUnit;

                    if ((unt === 'in' || unt === 'cm.') && val != null && val !== '' && !(dimension in measurements)) {
                      measurements[dimension] = {
                        value: val,
                        unit: unt,
                      };
                    }
                  }

                  // Order the collected measurements by dimension, and drop measurements of
                  // dimensions that are not used in the summary.

                  const orderedDimensions = ['height', 'width', 'depth', 'diameter'];
                  const orderedMeasurements = [];
                  const usedUnits = {};

                  for (let i = 0; i < orderedDimensions.length; i += 1) {
                    const dimension = orderedDimensions[i];

                    if (dimension in measurements) {
                      const measurement = measurements[dimension];

                      orderedMeasurements.push(measurement);
                      usedUnits[measurement.unit] = true;
                    }
                  }

                  // Create descriptions of each measurement. If all measurements share
                  // a common unit, this is just the value of the measurement. Otherwise,
                  // it's the value and the unit.

                  const orderedMeasurementDescriptions = [];
                  const hasCommonUnit = (Object.keys(usedUnits).length === 1);

                  for (let i = 0; i < orderedMeasurements.length; i += 1) {
                    const measurement = orderedMeasurements[i];
                    let measurementDescription = measurement.value;

                    if (!hasCommonUnit) {
                      measurementDescription = `${measurementDescription} ${measurement.unit}`;
                    }

                    orderedMeasurementDescriptions.push(measurementDescription);
                  }

                  // Join all measurement descriptions with x
                  let measurementSummary = orderedMeasurementDescriptions.join(" x ");

                  // If there is a common unit, append it
                  if (hasCommonUnit) {
                    const commonUnit = (Object.keys(usedUnits))[0];
                    measurementSummary = `${measurementSummary} ${commonUnit}`;
                  }

                  // Compose this with the measured part and the measured part note

                  const summaryParts = [];

                  if (measuredPart && measuredPart !== '') {
                    summaryParts.push(`${measuredPart}:`);
                  }

                  if (measurementSummary !== '') {
                    summaryParts.push(measurementSummary);
                  }

                  if (measuredPartNote && measuredPartNote !== '') {
                    summaryParts.push(`(${measuredPartNote})`);
                  }

                  const joinedParts = summaryParts.join(' ');
                  // return Immutable.Map({
                    // dimensionSummary: joinedParts,
                  // });
                  return joinedParts;
                },
              },
            },
            measuredPartNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.media_bampfa.measuredPartNote.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
      },
      'ns2:media_bampfa': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/media',
          },
        },
        primaryDisplay: {
          [config]: {
            dataType: DATA_TYPE_BOOL,
            messages: defineMessages({
              name: {
                id: 'field.media_bampfa.primaryDisplay.name',
                defaultMessage: 'Primary Display',
              },
            }),
            view: {
              type: CheckboxInput,
            },
          },
        },
        websiteDisplayLevel: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.media_bampfa.websiteDisplayLevel.name',
                defaultMessage: 'Website Display Level',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'websiteDisplayLevel',
              },
            },
          },
        },
        imageNumber: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.media_bampfa.imageNumber.name',
                defaultMessage: 'Image Number',
              },
            }),
            required: true,
            view: {
              type: TextInput,
            },
          },
        },
        // Computed Fields
        title: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.media_bampfa.title.name',
                defaultMessage: 'Title IS RIGHT HERE',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        titlesearch: { // App-layer only field
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.titleSearch.media_bampfa.name',
                defaultMessage: 'Title Search',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        computedOrderNumber: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.computedOrderNumber.media_bampfa.name',
                defaultMessage: 'Computed Order Number',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        pictionId: {
          [config]: {
            dataType: DATA_TYPE_INT,
            readOnly: true,
            messages: defineMessages({
              name: {
                id: 'field.pictionId.media_bampfa.name',
                defaultMessage: 'Piction Id',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        pictionImageHash: {
          [config]: {
            readOnly: true,
            messages: defineMessages({
              name: {
                id: 'field.pictionImageHash.media_bampfa.name',
                defaultMessage: 'Piction Image Hash',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
      },
    },
  };
};
