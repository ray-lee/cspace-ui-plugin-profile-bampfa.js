import { defineMessages } from 'react-intl';

export default (pluginContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
    IDGeneratorInput,
    TextInput,
    OptionPickerInput,
    StructuredDateInput,
		TermPickerInput,
		CheckboxInput,
  } = pluginContext.inputComponents;

  const {
    configKey: config,
  } = pluginContext.configHelpers;

  const {
    DATA_TYPE_FLOAT,
    DATA_TYPE_DATE,
    DATA_TYPE_INT,
    DATA_TYPE_BOOL,
  } = pluginContext.dataTypes;

  return {
    document: {
      [config]: {
        view: {
          type: CompoundInput,
          props: {
            defaultChildSubpath: 'ns2:media_common',
            mediaChildPath: 'ns2:media_bampfa',
          },
        },
      },
      'ns2:media_common': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/media',
          },
        },
        identificationNumber: {
          [config]: {
            cloneable: false,
            messages: defineMessages({
              name: {
                id: 'field.media_common.identificationNumber.name',
                defaultMessage: 'Identification number',
              },
            }),
            required: false,
            searchView: {
              type: TextInput,
            },
            view: {
              type: IDGeneratorInput,
              props: {
                idGeneratorName: 'media',
              },
            },
          },
        },
        measuredPartGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          measuredPartGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.media_common.measuredPartGroup.name',
                  defaultMessage: 'Dimensions',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            measuredPart: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.media_common.measuredPart.name',
                    defaultMessage: 'Part',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'measuredParts',
                  },
                },
              },
            },
            dimensionSummary: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.media_common.dimensionSummary.name',
                    defaultMessage: 'Summary',
                  },
                }),
                view: {
									type: TextInput,
									props: {
										readOnly: true, // CHANGED THIS
									}
                },
              },
            },
            dimensionSubGroupList: {
              [config]: {
                view: {
                  type: CompoundInput,
                },
              },
              dimensionSubGroup: {
                [config]: {
                  messages: defineMessages({
                    name: {
                      id: 'field.media_common.dimensionSubGroup.name',
                      defaultMessage: 'Measurements',
                    },
                  }),
                  repeating: true,
                  view: {
                    type: CompoundInput,
                    props: {
                      tabular: true,
                    },
                  },
                },
                dimension: {
                  [config]: {
                    messages: defineMessages({
                      name: {
                        id: 'field.media_common.dimension.name',
                        defaultMessage: 'Dimension',
                      },
                    }),
                    view: {
                      type: OptionPickerInput,
                      props: {
                        source: 'dimensions',
                      },
                    },
                  },
                },
                measuredBy: {
                  [config]: {
                    messages: defineMessages({
                      name: {
                        id: 'field.media_common.measuredBy.name',
                        defaultMessage: 'Measured by',
                      },
                    }),
                    view: {
                      type: AutocompleteInput,
                      props: {
                        source: 'person/local,person/shared,organization/local,organization/shared',
                      },
                    },
                  },
                },
                measurementMethod: {
                  [config]: {
                    messages: defineMessages({
                      name: {
                        id: 'field.media_common.measurementMethod.name',
                        defaultMessage: 'Method',
                      },
                    }),
                    view: {
                      type: OptionPickerInput,
                      props: {
                        source: 'measurementMethods',
                      },
                    },
                  },
                },
                value: {
                  [config]: {
                    dataType: DATA_TYPE_FLOAT,
                    messages: defineMessages({
                      fullName: {
                        id: 'field.media_common.value.fullName',
                        defaultMessage: 'Measurement value',
                      },
                      name: {
                        id: 'field.media_common.value.name',
                        defaultMessage: 'Value',
                      },
                    }),
                    view: {
                      type: TextInput,
                    },
                  },
                },
                measurementUnit: {
                  [config]: {
                    messages: defineMessages({
                      name: {
                        id: 'field.media_common.measurementUnit.name',
                        defaultMessage: 'Unit',
                      },
                    }),
                    view: {
                      type: OptionPickerInput,
                      props: {
                        source: 'measurementUnits',
                      },
                    },
                  },
                },
                valueQualifier: {
                  [config]: {
                    messages: defineMessages({
                      name: {
                        id: 'field.media_common.valueQualifier.name',
                        defaultMessage: 'Qualifier',
                      },
                    }),
                    view: {
                      type: TextInput,
                    },
                  },
                },
                valueDate: {
                  [config]: {
                    dataType: DATA_TYPE_DATE,
                    messages: defineMessages({
                      name: {
                        id: 'field.media_common.valueDate.name',
                        defaultMessage: 'Date',
                      },
                      fullName: {
                        id: 'field.media_common.valueDate.fullName',
                        defaultMessage: 'Measurement date',
                      },
                    }),
                    view: {
                      type: DateInput,
                    },
                  },
								},
              },
						},
						// ADDED FIELD BELOW
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
						view : {
								type: CheckboxInput,
						},
					},
        },
				websiteDisplayLevel : {
					[config]: {
						messages: defineMessages({
							name: {
								id: 'field.media_bampfa.websiteDisplayLevel.name',
								defaultMessage: 'Website Display Level',
							},
						}),
						view : {
							type: OptionPickerInput,
							props: {
								source: 'TEMP',
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
                defaultMessage: 'Title',
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
