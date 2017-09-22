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
        accNumberPrefix: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.accNumberPrefix.name',
                defaultMessage: 'Prefix',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        accNumberPart1: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.accNunberPart1.name',
                defaultMessage: 'Year',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        accNumberPart2: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.accNunberPart2.name',
                defaultMessage: 'Gift',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        accNumberPart3: {
          [config]: {
            dataType: DATA_TYPE_INT,
            view: {
              type: TextInput,
            },
          },
        },
        accNumberPart4: {
          [config]: {
            dataType: DATA_TYPE_INT,
            view: {
              type: TextInput,
            },
          },
        },
        accNumberPart5: {
          [config]: {
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
              type: TermPickerInput,
              props: {
                source: 'legalstatus',
              },
            },
          },
        },
        legalStatusDateGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.legalStatusDateGroup.name',
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
              type: TermPickerInput,
              props: {
                source: 'itemclass'
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
            bampfaTitle: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.bampfaTitle.name',
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
        bampfaObjectProductionPersonGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.bampfaObjectProductionPersonGroupList.name',
                defaultMessage: 'Artist or Maker',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          bampfaObjectProductionPersonGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            bampfaObjectProductionPerson: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.bampfaObjectProductionPerson.name',
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
            bampfaObjectProductionPersonRole: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.bampfaObjectProductionPersonRole.name',
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
            bampfaObjectProductionPersonQualifier: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.bampfaObjectProductionPersonQualifier.name',
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
        physicalDescription: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.physicalDescription.name',
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
        otherNumberList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.otherNumberList.name',
                defaultMessage: 'T.R. / Other Number',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          otherNumberGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            numberType: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.numberType.name',
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
            numberValue: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.numberValue.name',
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
        objectProductionDateCentury: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.objectProductionDateCentury.name',
                defaultMessage: 'Century',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        objectProductionDateEra: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.objectProductionDateEra.name',
                defaultMessage: 'Era',
              },
            }),
            view: {
              type: OptionPickerInput,
              props : {
                source: "TEMP",
              }
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
        objectProductionDynasty: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.objectProductionDynasty.name',
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
        numberOfObjects: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.numberOfObjects.name',
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
            dataType: DATA_TYPE_INT,
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
        objectProductionPeopleGroupList: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.objectProductionPeopleGroupList.name',
                defaultMessage: 'Production Organization',
              },
            }),
            view: {
              type: CompoundInput,
            },
          },
          objectProductionPeopleGroup: {
            [config]: {
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            objectProductionPeople: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.objectProductionPeople.name',
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
            objectProductionPeopleRole: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.bampfa_collectionobjects.prodOrgRole.name',
                    defaultMessage: 'Role',
                  },
                }),
                view: {
                  type: OptionPickerInput,
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
              type: OptionPickerInput,
              props:{
                source: 'TEMP',
              },
            },
          },
        },
        bwOrColor: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.bwOrColor.name',
                defaultMessage: 'Black & White or Color', 
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
        acquisitionDateGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.bampfa_collectionobjects.acquisitionDateGroup.name',
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
              type: TermPickerInput,
              props: {
                source: 'acquisitionreason',
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
              type: TermPickerInput,
              props: {
                source: 'subjectsandthemes',
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
              type: TermPickerInput,
              props: {
                source: 'periodorstyle',
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
