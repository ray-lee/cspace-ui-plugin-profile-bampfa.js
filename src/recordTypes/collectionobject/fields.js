import { defineMessages } from 'react-intl';

export default (pluginContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
    HierarchyInput,
    IDGeneratorInput,
    OptionPickerInput,
    StructuredDateInput,
    TextInput,
    CheckboxInput,
    TermPickerInput,
  } = pluginContext.inputComponents;

  const {
    configKey: config,
  } = pluginContext.configHelpers;

  const {
    DATA_TYPE_INT,
    DATA_TYPE_FLOAT,
    DATA_TYPE_DATE,
    DATA_TYPE_DATETIME,
  } = pluginContext.dataTypes;

  return {
    document: {
      [config]: {
        view: {
          type: CompoundInput,
          props: {
            defaultChildSubpath: 'ns2:bampfa_collectionobjects',
          },
        },
      },
      // TODO: Define core fields in one place.
      'ns2:collectionspace_core': {
        createdAt: {
          [config]: {
            dataType: DATA_TYPE_DATETIME,
            view: {
              type: DateInput,
            },
          },
        },
        createdBy: {
          [config]: {
            view: {
              type: TextInput,
            },
          },
        },
        updatedAt: {
          [config]: {
            dataType: DATA_TYPE_DATETIME,
            messages: defineMessages({
              name: {
                id: 'field.collectionspace_core.updatedAt.name',
                defaultMessage: 'Last updated time',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
        updatedBy: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionspace_core.updatedBy.name',
                defaultMessage: 'Last updated by',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
      },
      'ns2:relations-common-list': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/relation',
          },
        },
        'relation-list-item': {
          [config]: {
            view: {
              type: HierarchyInput,
              props: {
                parentTypeOptionListName: 'objectParentTypes',
                childTypeOptionListName: 'objectChildTypes',
                messages: defineMessages({
                  parent: {
                    id: 'hierarchyInput.collectionobject.parent',
                    defaultMessage: 'Broader object',
                  },
                  parentType: {
                    id: 'hierarchyInput.collectionobject.parentType',
                    defaultMessage: 'Type',
                  },
                  children: {
                    id: 'hierarchyInput.collectionobject.children',
                    defaultMessage: 'Component objects',
                  },
                  child: {
                    id: 'hierarchyInput.collectionobject.child',
                    defaultMessage: 'Object',
                  },
                  childType: {
                    id: 'hierarchyInput.collectionobject.childType',
                    defaultMessage: 'Type',
                  },
                  siblings: {
                    id: 'hierarchyInput.collectionobject.siblings',
                    defaultMessage: 'Adjacent objects',
                  },
                }),
              },
            },
          },
        },
      },
      'ns2:bampfa_collectionobjects': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject',
          },
        },
        prefix: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.prefix.name',
                defaultMessage: 'Prefix',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        year: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.year.name',
                defaultMessage: 'Year',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        giftBoxOne: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.giftBoxOne.name',
                defaultMessage: 'Gift',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        giftBoxTwo: {
          [config]: {
            dataType: DATA_TYPE_INT,
            view: {
              type: TextInput,
            },
          },
        },
        giftBoxThree: {
          [config]: {
            dataType: DATA_TYPE_INT,
            view: {
              type: TextInput,
            },
          },
        },
        alpha: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.alpha.name',
                defaultMessage: 'Alpha',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        objectNumber: {
          [config]: {
            cloneable: false,
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.objectNumber.name',
                defaultMessage: 'ID number',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'TEMP',
                readOnly: true,
              }
            },
          },
        },
        legalStatus: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.legalStatus.name',
                defaultMessage: 'Legal Status',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'TEMP',
              },
            },
          },
        },
        statusDate: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.statusDate.name',
                defaultMessage: 'Status Date',
              },
            }),
            view: {
              type: StructuredDateInput,
            },
          },
        },
        itemClass: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.itemClass.name',
                defaultMessage: 'Item Class',
              },
            }),
            view: {
              type:OptionPickerInput,
              props: {
                source: 'TEMP'
              },
            },
          },
        },
        titleGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.titleGroupList.name',
                defaultMessage: 'Title',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          titleGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            title: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.title.name',
                    defaultMessage: 'Title',
                  },
                }),
                view: {
                  type: TextInput,
                  props: {
                    multiline: true,
                  },
                },
              },
            },
            titleLanguage: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.titleLanguage.name',
                    defaultMessage: 'Language',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'languages',
                  },
                },
              },
            },
            titleTranslationSubGroupList: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.titleTranslationSubGroupList.name',
                    defaultMessage: 'Translation',
                  },
                }),
                view: {
                  type: CompoundInput,
                },
              },
              titleTranslationSubGroup: {
                [config]: {
                  repeating: true,
                  view: {
                    type: CompoundInput,
                    props: {
                      tabular: true,
                    },
                  },
                },
                titleTranslation: {
                  [config]: {
                    messages: defineMessages({
                      name: {
                        id: 'field.bampfa_collectionobjects.titleTranslation.name',
                        defaultMessage: 'Translation',
                      },
                    }),
                    view: {
                      type: TextInput,
                    },
                  },
                },
                titleTranslationLanguage: {
                  [config]: {
                    messages: defineMessages({
                      name: {
                        id: 'field.bampfa_collectionobjects.titleTranslationLanguage.name',
                        defaultMessage: 'Language',
                      },
                    }),
                    view: {
                      type: TermPickerInput,
                      props: {
                        source: 'languages',
                      },
                    },
                  },
                },
              },
            },
            titleType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.titleType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'titleTypes',
                  },
                },
              },
            },
          },
        },
        seriesTitle: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.seriesTitle.name',
                defaultMessage: 'Series Title',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        artistMakerList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.artistMakerList.name',
                defaultMessage: 'Artist or Maker',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          artistMakerGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            artistMaker: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.artistMaker.name',
                    defaultMessage: 'Artist or Maker',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'TEMP',
                  },
                },
              },
            },
            artistMakerRole: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.artistMakerRole.name',
                    defaultMessage: 'Role',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'TEMP',
                  },
                },
              },
            },
            artistMakerQualifier: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.artistMakerQualifier.name',
                    defaultMessage: 'Qualifier',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'TEMP',
                  },
                },
              },
            },
          },
          artistDisplayOverride: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.bampfa_collectionobjects.artistDisplayOverride.name',
                  defaultMessage: 'Artist Display Override',
                }
              }),
              view: {
                type: TextInput,
              },
            },
          },
        },
        copyNumber: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.copyNumber.name',
                defaultMessage: 'Copy number',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        objectStatusList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.objectStatusList.name',
                defaultMessage: 'Object status',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          objectStatus: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.bampfa_collectionobjects.objectStatus.fullName',
                  defaultMessage: 'Object status',
                },
              }),
              repeating: true,
              view: {
                type: OptionPickerInput,
                props: {
                  source: 'objectStatuses',
                },
              },
            },
          },
        },
        sex: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.sex.name',
                defaultMessage: 'Sex',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'sexes',
              },
            },
          },
        },
        phase: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.phase.name',
                defaultMessage: 'Phase',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'phases',
              },
            },
          },
        },
        forms: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.forms.name',
                defaultMessage: 'Form',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          form: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.bampfa_collectionobjects.form.fullName',
                  defaultMessage: 'Form',
                },
              }),
              repeating: true,
              view: {
                type: OptionPickerInput,
                props: {
                  source: 'forms',
                },
              },
            },
          },
        },
        measuredPartGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.measuredPartGroupList.name',
                defaultMessage: 'Dimensions',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          measuredPartGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            measuredPart: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.measuredPart.name',
                    defaultMessage: 'Part',
                  },
                }),
                view: {
                  type: TextInput,
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
                    id: 'field.bampfa_collectionobjects.dimensionSummary.name',
                    defaultMessage: 'Summary',
                  },
                }),
                view: {
                  type: TextInput,
                  props: {
                    readOnly: true,
                    source: 'measuredPart',
                  }
                },
              },
            },
            dimensionSubGroupList: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.dimensionSubGroupList.name',
                    defaultMessage: 'Measurements',
                  },
                }),
                view: {
                  type: CompoundInput,
                },
              },
              dimensionSubGroup: {
                [config]: {
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
                        id: 'field.bampfa_collectionobjects.dimension.name',
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
                        id: 'field.bampfa_collectionobjects.measuredBy.name',
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
                        id: 'field.bampfa_collectionobjects.measurementMethod.name',
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
                        id: 'field.bampfa_collectionobjects.value.fullName',
                        defaultMessage: 'Measurement value',
                      },
                      name: {
                        id: 'field.bampfa_collectionobjects.value.name',
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
                        id: 'field.bampfa_collectionobjects.measurementUnit.name',
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
                        id: 'field.bampfa_collectionobjects.valueQualifier.name',
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
                        id: 'field.bampfa_collectionobjects.valueDate.name',
                        defaultMessage: 'Date',
                      },
                    }),
                    view: {
                      type: DateInput,
                    },
                  },
                },
              },
            },
            dimensionNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.dimensionNote.name',
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
        medium: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.medium.name',
                defaultMessage: 'Medium',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        creditLine: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.creditLine.name', 
                defaultMessage: 'Credit Line',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        trNumberGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.trNumberGroupList.name',
                defaultMessage: 'T.R. / Other Number',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          trNumberGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            trNumberType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.trNumberType.name',
                    defaultMessage: 'Number Type',
                  },
                }),
                view: {
                  type: OptionPickerInput,
                  props: {
                    source: 'TEMP',
                  },
                },
              },
            },
            trNumber: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.trNumber.name',
                    defaultMessage: 'T.R. / Other Number',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        currentBoxContainer: {
          [config]: {
            cloneable: false,
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.currentBoxContainer.name',
                defaultMessage: 'Current box or container',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'TEMP',
                readOnly: true,
              },
            },
          },
        },   
        computedCurrentLocation: {
          [config]: {
            cloneable: false,
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.computedCurrentLocation.name',
                defaultMessage: 'Computed storage location',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'location/local,location/offsite,organization/local,organization/shared',
                readOnly: true,
              },
            },
          },
        },
        centuryGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.centuryGroupList.name',
                defaultMessage: 'Century List',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          centuryGroup: {
            [config]: {
              repeating: false,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            century: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.century.name',
                    defaultMessage: 'Century',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            era: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.era.name',
                    defaultMessage: 'Era',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props : {
                    source: "TEMP",
                  }
                },
              },
            },
          },
        },
        productionDate: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.productionDate.name',
                defaultMessage: 'Prodiction Date',
              },
            }),
            view: {
              type: StructuredDateInput,
            },
          },
        }, 
        dynasty: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.dynasty.name',
                defaultMessage: 'Dynasty',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        workDescription: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.workDescription.name',
                defaultMessage: 'Work Description',
              },
            }),
            view: {
              type: TextInput,
            // },
              props: {
                multiline: true,
              },
            },
          },
        },
        itemCount: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.itemCount.name',
                defaultMessage: 'Item Count',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        numberOfScans: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.numberOfScans.name',
                defaultMessage: 'Number of Scans',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        productionPlace: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.productionPlace.name',
                defaultMessage: 'Production Place',
              },
            }),
            repeating: true,
            view: {
              type: TextInput,
            },
          },
        },
        prodOrgList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.prodOrgList.name',
                defaultMessage: 'Production Organization',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          prodOrgGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            prodOrg: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.prodOrg.name',
                    defaultMessage: 'Production Organization',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                }, 
                props: {
                  source: 'TEMP',
                },
              },
            },
            prodOrgRole: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.prodOrgRole.name',
                    defaultMessage: 'Role',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props : {
                    source: "TEMP",
                  }
                },
              },
            },
          },
        },
        stateGeneration: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.stateGeneration.name',
                defaultMessage: 'State/Generation',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        soundOrSilent: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.soundOrSilent.name',
                defaultMessage: 'Sound or silent',
              },
            }),
            view: {
              type: TermPickerInput,
              props:{
                source: 'TEMP',
              },
            },
          },
        },
        blackOrWhite: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.blackOrWhite.name',
                defaultMessage: 'Black & White or Color', 
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'TEMP',
              },
            },
          },
        },
        acquisitionMethod: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.acquisitionMethod.name',
                defaultMessage: 'Acquisition Method',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: "TEMP",
              },
            },
          },
        },
        acquisitionDate: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.acquisitionDate.name',
                defaultMessage: 'Acquisition Date',
              },
            }),
            repeating: true,
            view: {
              type: StructuredDateInput,
            },
          },
        },
        acquisitionSource: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.acquisitionSource.name',
                defaultMessage: 'Source',
              },
            }),
            repeating: true,
            view: {
              type: TextInput,
            },
          },
        },
        bampfaAcquisitionReason: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.bampfaAcquisitionReason.name',
                defaultMessage: 'For',
              },
            }),
            repeating: true,
            view: {
              type: OptionPickerInput,
              props: {
                source: "TEMP",
              },
            },
          },
        },
        acquisitionProvisos: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.acquisitionProvisos.name',
                defaultMessage: 'Acquisition Terms',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        provenance: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.provenance.name',
                defaultMessage: 'Provenance',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        acquisitionNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.acquisitionNote.name',
                defaultMessage: 'Acquisition Note',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        appraisalInfo: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.appraisalInfo.name',
                defaultMessage: 'Appraisal Info',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        currentValueGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.currentValueGroupList.name',
                defaultMessage: 'Current Value',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          currentValueGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            currentValue: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.currentValue.name',
                    defaultMessage: 'Value',
                  },
                }),
                view: {
                  type: TextInput,
                }, 
              },
            },
            currentValueSource: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.currentValueSource.name',
                    defaultMessage: 'Source',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            currentValueDateGroup: {
              [config]: {
                messages: defineMessages ({
                  name: {
                    id: 'field.bampfa_collectionobjects.currentValueDateGroup.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
            },
          },
        },
        initialValueGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.initialValueGroup.name',
                defaultMessage: 'Initial Value',
              },
            }),
            view: {
              type: CompoundInput,
              props: {
                tabular: true,
              },
            },
          },
          initialValue: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.bampfa_collectionobjects.initialValue.name',
                  defaultMessage: 'Value',
                },
              }),
              view: {
                type: TextInput,
              }, 
            },
          },
          initialValueSource: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.bampfa_collectionobjects.initialValueSource.name',
                  defaultMessage: 'Source',
                },
              }),
              view: {
                type: TextInput,
              },
            },
          },
          initialValueDateGroup: {
            [config]: {
              messages: defineMessages ({
                name: {
                  id: 'field.bampfa_collectionobjects.initialValueDateGroup.name',
                  defaultMessage: 'Date',
                },
              }),
              view: {
                type: StructuredDateInput,
              },
            },
          },
        },
        bampfaCollection : {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.bampfaCollection.name',
                defaultMessage: 'Collection',
              },
            }),
            repeating: true,
            view: {
              type: TermPickerInput ,
              props: {
                source: "collection",
              },
            },
          },
        },
        subjectTheme: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.subjectTheme.name',
                defaultMessage: 'Subject/Theme',
              },
            }),
            repeating: true,
            view: {
              type: OptionPickerInput,
              props: {
                source: "TEMP",
              },
            },
          },
        },
        style: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.style.name',
                defaultMessage: 'Period/Style',
              },
            }),
            repeating: true,
            view: {
              type: OptionPickerInput,
              props: {
                source: "TEMP",
              },
            },
          },
        },        
        partOf: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.partOf.name',
                defaultMessage: 'Part Of',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        copyrightCredit: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.copyrightCredit..name',
                defaultMessage: 'Copyright Credit',
              },
            }),
            view: {
              type: TextInput ,
              props: {
                multiline: true,
              },
            },
          },
        },
        copyrightNote: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.copyrightNote.name',
                defaultMessage: 'Copyright Note',
              },
            }),
            view: {
              type: TextInput ,
              props: {
                multiline: true,
              },
            },
          },
        },
        photoCredit: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.photoCredit.name',
                defaultMessage: 'Photo Credit',
              },
            }),
            view: {
              type: TextInput ,
              props: {
                multiline: true,
              },
            },
          },
        },
        copyrightHolder: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.copyrightHolder.name',
                defaultMessage: 'Copyright Holder',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        permissionToReproduce: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects..name',
                defaultMessage: 'Permission to reproduce granted for noncommercial uses',
              },
            }),
            view: {
              type: OptionPickerInput,
            },
          },
        },
        conditionCheckGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.conditionCheckGroupList.name',
                defaultMessage: 'Condition Check',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          conditionCheckGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            conditionNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.conditionNote.name',
                    defaultMessage: 'Condition Note',
                  },
                }),
                view: {
                  type: TextInput,
                  props: {
                    multiline: true,
                  },
                },
              },
            },
            conservationNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.conservationNote.name',
                    defaultMessage: 'Conservation Note',
                  },
                }),
                view: {
                  type: TextInput,
                  props: {
                    multiline: true,
                  },
                },
              },
            }, 
            conditionCheckBy: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.conditionCheckBy.name',
                    defaultMessage: 'Checked By',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            conditionCheckDate: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.conditionCheckDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
          },
        },
        comments: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.comments.name',
                defaultMessage: 'Notes'
              },
            }),
            repeating: true,
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        collectionTextGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.collectionTextGroupList.name',
                defaultMessage: 'Text/Label',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          collectionTextGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            collectionTextType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.collectionTextType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            collectionTextDoNotPublish: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.collectionTextDoNotPublish.name',
                    defaultMessage: 'Do Not Publish',
                  },
                }),
                view: {
                  type: CheckboxInput,
                },
              },
            }, 
            collectionText: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.collectionText.name',
                    defaultMessage: 'Text',
                  },
                }),
                view: {
                  type: TextInput,
                  props: {
                    multiline: true,
                  },
                },
              },
            },
            collectionTextAuthor: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.collectionTextAuthor.name',
                    defaultMessage: 'Author',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            
            collectionTextDate: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.collectionTextDate.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: StructuredDateInput,
                },
              },
            },
            collectionTextNote : {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.collectionTextNote.name',
                    defaultMessage: 'Notes',
                  },
                }),
                view: {
                  type: TextInput,
                  props: {
                    multiline: true,
                  }
                }
              },
            },
          },
        },
        catalogerGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.catalogerGroupList.name',
                defaultMessage: 'Initial Value',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          catalogerGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            catalogerName: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.catalogerName.name',
                    defaultMessage: 'Cataloger Info',
                  },
                }),
                view: {
                  type: TextInput,
                }, 
              },
            },
            catalogDate: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.catalogDate.name',
                    defaultMessage: 'Source',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            catalogNote: {
              [config]: {
                messages: defineMessages ({
                  name: {
                    id: 'field.bampfa_collectionobjects.catalogNote.name',
                    defaultMessage: 'Date',
                  },
                }),
                view: {
                  type: DateInput,
                },
              },
            },
          },
        }, 
        referenceGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          referenceGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            reference: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.reference.name',
                    defaultMessage: 'Reference',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'citation/local,citation/shared,citation/worldcat',
                  },
                },
              },
            },
            referenceNote: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.referenceNote.name',
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
    },
  };
};
